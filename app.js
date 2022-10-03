const Koa = require('koa');
const config = require('./server/config')
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser');
const koaBody = require('koa-body');
const jwt = require('koa-jwt')
const send = require('koa-send')
const Token = require('./server/token')
const sql = require('./server/sql')
const cors = require('koa2-cors');
const workCode = require('./server/work_code')
const fs = require('fs')
const path = require('path')
const myZip = require('./server/zip');
const fsm = require('./server/fs_more');
const app = new Koa()
const router = new Router()
const scoreSystem = require('./server/scoreSystem')
const base62x = require('base62x')
const Cache = require('./server/cache');
const { isRegisteredFormat } = require('archiver');
const { Console } = require('console');
const Que = require('./server/que').Que
const multer = require('koa-multer')
const imgupload = require('./server/imageupload').upload


const cache = Cache.createCache("./cache")
const convert_que = new Que()


const { spawn } = require('child_process');
const { Certificate } = require('crypto');
const logOutput = (name) => (message) => console.log(`[${name}] ${message}`)


// 判断当前是否处理完所有作业
router.get('/handleDone', async (ctx, next) => {
    ctx.body = {
        code: 0,
        done: convert_que.done(),
        left: convert_que.left(),
    }
})

router.get('/login1', async (ctx, next) => {
    ctx.body = "请使用POST方法"
})

router.post('/login', async (ctx, next) => {
    let usr = ctx.request.body["usr"]
    let pwd = ctx.request.body["pwd"]
    // 处理用户登录
    let usrInfo = await sql.login(usr, pwd)
    if (usrInfo == false) {
        ctx.body = {
            code: 11,
            msg: "用户名密码不匹配"
        }
        return
    }
    let token = Token.set(usrInfo)
    ctx.response.set('myToken', token)
    ctx.body = {
        code: 0,
        msg: "",
        token: token,
        identify: usrInfo["ident"]
    }
})
//注册用户
router.post('/register',async(ctx,next)=>{
    let usr=ctx.request.body["usr"]
    let pwd=ctx.request.body["pwd"]
    let identify=ctx.request.body["ident"]
    let name=ctx.request.body["name"]
    let address=ctx.request.body["address"]
    let class_list='["润园打印店","沁园打印店","澄园打印店","泽园打印店"]'
    identify=parseInt(identify)
    let res=await sql.register(usr,pwd,identify,name,address,class_list)
    if(res==false){
        return ctx.body={
            code:12,
            msg:"注册失败"
        }
    }
    else{
        return ctx.body={
            code:0,
            msg:"注册成功"
        }
    }
})


// 修改密码
router.post('/reset_password', async (ctx, next) => {
    let newPwd = ctx.request.body["newPwd"]
    let usrInfo = Token.params(ctx.myToken)
    let usr = ctx.request.body["usr"] || usrInfo["usr"]
    let msg = ""
    if (usrInfo["usr"] == usr) {
        // 当前用户修改密码
        msg = await sql.resetPassword(usr, newPwd)
    } else if ((await sql.isAdminByUsr(usr)) == false
        && token.isAdmin(ctx.myToken) == true) {
        // 管理员修改非管理员密码
        msg = await sql.resetPassword(usr, newPwd)
    } else {
        return ctx.body = {
            token: ctx.myToken,
            code: 2,
            msg: "当前权限组无法修改目标用户密码"
        }
    }
    return ctx.body = {
        token: ctx.myToken,
        code: 0,
        msg: msg
    }

})

// 获取打印店列表


//获取自己的班级
router.post('/get_classlist',async(ctx,next)=>{
    if(Token.istea(ctx.myToken)&&Token.isStu(ctx.myToken)){
        return ctx.body = {
            code: 2,
            token: ctx.myToken,
            msg:"token错误"
        }
    }
    let usr=ctx.request.body["usr"]
    let class_list=await sql.getmyclass(usr)
    return ctx.body={
        token:ctx.myToken,
        code:0,
        class_list:class_list
    }
})

//获取班级学生 根据weekid & classid 班级表
router.post('/getstuby_cw',async(ctx,next)=>{
    if(Token.istea(ctx.myToken)&&Token.isStu(ctx.myToken)){
        return ctx.body = {
            code: 2,
            token: ctx.myToken,
            msg:"token错误"
        }
    }
    let classid=ctx.request.body["classid"]
    let weekid=ctx.request.body["weekid"]
    let stu_list=await sql.getstuby_cw(classid,weekid)
    return ctx.body={
        token:ctx.myToken,
        code:0,
        stu_list:stu_list
    }
})

//获取班级学生 根据weekid & classid 点名表
router.post('/getstuby_cw2',async(ctx,next)=>{
    if(Token.istea(ctx.myToken)&&Token.isStu(ctx.myToken)){
        return ctx.body = {
            code: 2,
            token: ctx.myToken,
            msg:"token错误"
        }
    }
    let classid=ctx.request.body["classid"]
    let weekid=ctx.request.body["weekid"]
    let stu_list=await sql.getstuby_cw2(classid,weekid)
    return ctx.body={
        token:ctx.myToken,
        code:0,
        stu_list:stu_list
    }
})


//图片上传测试接口
router.post('/uploadpic_test',async(ctx,next)=>{
    const file = ctx.request.files.file; // 获取上传文件
    //console.log(file)
    if (fs.existsSync(process.cwd()+'\\public\\upload_stu\\' + file.originalFilename)) {
        fs.unlinkSync(process.cwd()+'\\public\\upload_stu\\' + file.originalFilename)
    }
    if(file != null){
        // 创建可读流
        const reader = fs.createReadStream(file.filepath);
        const fileResource = process.cwd()+'\\public\\upload_stu\\' + file.originalFilename;
        // 创建可写流
        const upStream = fs.createWriteStream(fileResource);
        // 可读流通过管道写入可写流
        //console.log(upStream.path)
        reader.pipe(upStream);
        let url1=upStream.path
        let usr=ctx.request.body["usr"]
        let address=file.originalFilename
        let res1=await sql.upifupload(usr)
        let res2=await sql.uppicaddress(address,usr)
        if(res1==false||res2==false){
        //数据更新
            ctx.body={
                code: 1,
                msg:'error'
            }
        }
        else {
            ctx.body = {
                code: 0,
                name:file.originalFilename,
                url:url1,
            }
             
        }
    }
    

})

//老师录入人脸
router.post('/uploadpic_tea',async(ctx,next)=>{
    const file = ctx.request.files.file; // 获取上传文件
    //console.log(file)
    if (fs.existsSync(process.cwd()+'\\public\\upload_stu\\' + file.originalFilename)) {
        fs.unlinkSync(process.cwd()+'\\public\\upload_stu\\' + file.originalFilename)
    }
    if(file != null){
        // 创建可读流
        const reader = fs.createReadStream(file.filepath);
        const fileResource = process.cwd()+'\\public\\upload_stu\\' + file.originalFilename;
        // 创建可写流
        const upStream = fs.createWriteStream(fileResource);
        // 可读流通过管道写入可写流
        //console.log(upStream.path)
        reader.pipe(upStream);
        let url1=upStream.path
        let usr=ctx.request.body["stuusr"]
        let address=file.originalFilename
        let res1=await sql.upifupload(usr)
        let res2=await sql.uppicaddress(address,usr)
        if(res1==false||res2==false){
        //数据更新
            ctx.body={
                code: 1,
                msg:'error'
            }
        }
        else {
            ctx.body = {
                code: 0,
                name:file.originalFilename,
                url:url1,
            }
             
        }
    }
    

})

//老师点名接口
router.post('/teanamebyusr',async(ctx,next)=>{
    if(Token.istea(ctx.myToken)&&Token.isStu(ctx.myToken)){
        return ctx.body = {
            code: 2,
            token: ctx.myToken,
            msg:"token错误"
        }
    }
    let usr=ctx.request.body["stuusr"]
    let usrname=ctx.request.body["usrname"]
    let classid=ctx.request.body["classid"]
    let weekid=ctx.request.body["weekid"]
    let res2=await sql.ifuploadpic(usr)
    if(res2==0){
        return ctx.body = {
            code: 1,
            msg: "未上传照片"
        }
    }else{
    let ifname=1
    let ifrec=0
    let res=await sql.addstusignbyusr(usr,usrname,classid,weekid,ifname,ifrec)
    let res1=await sql.upifnamebyusr(usr,weekid,classid)
    if(res==false||res1==false){
        return ctx.body = {
            code: 6,
            msg: "点名失败"
        }
    }
    return ctx.body={
        code:0,
        msg:"插入成功"
    }
}
})

//学生获取自己的点名记录
router.post('/stugetname',async(ctx,next)=>{
    if(Token.istea(ctx.myToken)&&Token.isStu(ctx.myToken)){
        return ctx.body = {
            code: 2,
            token: ctx.myToken,
            msg:"token错误"
        }
    }
    let usr=ctx.request.body["usr"]
    let name_list=await sql.getnamebystuusr(usr)
    return ctx.body={
        token:ctx.myToken,
        code:0,
        name_list:name_list
    }
})

//学生获取签到记录
router.post('/stugetrec',async(ctx,next)=>{
    if(Token.istea(ctx.myToken)&&Token.isStu(ctx.myToken)){
        return ctx.body = {
            code: 2,
            token: ctx.myToken,
            msg:"token错误"
        }
    }
    let usr=ctx.request.body["usr"]
    let name_list=await sql.getrecbystuusr(usr)
    return ctx.body={
        token:ctx.myToken,
        code:0,
        name_list:name_list
    }
})

//老师上传人脸识别
router.post('/tearecbyusr',async(ctx,next)=>{
    let name=ctx.request.body["name"]
    let stuusr=ctx.request.body["stuusr"]
    let classid=ctx.request.body["classid"]
    let weekid=ctx.request.body["weekid"]
    let res1=await sql.getpicaddress(stuusr)
    function run() {
        return new Promise((resolve, reject) => {
            //console.log(name)
          const process = spawn('python', ['./face_rec.py',name,res1[0].picaddress]);
          //结果输出      
          const out = []
          process.stdout.on(
            'data',
            (data) => {
              out.push(data.toString());
              //logOutput('stdout')(data);
            }
          );
            //异常抛出
          const err = []
          process.stderr.on(
            'data',
            (data) => {
              err.push(data.toString());
              logOutput('stderr')(data);
            }
          );

          process.on('exit', (code, signal) => {
            logOutput('exit')(`${code} (${signal})`)
            if (code !== 0) {
              reject(new Error(err.join('\n')))
              return
            }
            try {
              resolve(JSON.parse(out[0]));
            } catch(e) {
              reject(e);
            }
          });
        });
      }

      const output = await run()
      let result
      if(output.result==0)
        result=0
      else
        result=1
    if(result==0){
    let res2=await sql.upifrecbyusr(stuusr,weekid,classid)
        if(res2==false){
            return ctx.body={
                code:3,
                msg:"数据库插入失败"
            }
        }
        else{
            return ctx.body={
                code:0,
                result:result,
                msg:"success"
            }
        }
    }
    else{
        return ctx.body={
            code:1,
            result:result,
            msg:"图片认证失败"
        }
    }
})

//图片上传
router.post('/uploadpic',async(ctx,next)=>{
    const file = ctx.request.files.file; // 获取上传文件
    //console.log(file)
    if (fs.existsSync(process.cwd()+'\\public\\uploads\\' + file.originalFilename)) {
        fs.unlinkSync(process.cwd()+'\\public\\uploads\\' + file.originalFilename)
    }
    if(file != null){
        // 创建可读流
        const reader = fs.createReadStream(file.filepath);
        const fileResource = process.cwd()+'\\public\\uploads\\' + file.originalFilename;
        // 创建可写流
        const upStream = fs.createWriteStream(fileResource);
        // 可读流通过管道写入可写流
        //console.log(upStream.path)
        reader.pipe(upStream);
        let url1=upStream.path
        ctx.body = {
            code: 0,
            name:file.originalFilename,
            url:url1,
        }
    }
    
})



//图片识别
router.post('/facerec',async(ctx,next)=>{
    let name=ctx.request.body["name"]
    function run() {
        return new Promise((resolve, reject) => {
            //console.log(name)
          const process = spawn('python', ['./face_rec.py',name]);
          //结果输出      
          const out = []
          process.stdout.on(
            'data',
            (data) => {
              out.push(data.toString());
              //logOutput('stdout')(data);
            }
          );
            //异常抛出
          const err = []
          process.stderr.on(
            'data',
            (data) => {
              err.push(data.toString());
              logOutput('stderr')(data);
            }
          );

          process.on('exit', (code, signal) => {
            logOutput('exit')(`${code} (${signal})`)
            if (code !== 0) {
              reject(new Error(err.join('\n')))
              return
            }
            try {
              resolve(JSON.parse(out[0]));
            } catch(e) {
              reject(e);
            }
          });
        });
      }

      const output = await run()
      let result
      if(output.result==0)
        result=0
      else
        result=1
      
      return ctx.body={
        code:0,
        result:result,
        msg:"success"
    }

})



app.use(cors({
    credentials: true,//默认情况下，Cookie不包括在CORS请求之中。设为true，即表示服务器许可Cookie可以包含在请求中
    origin: ctx => ctx.header.origin, // web前端服务器地址，注意这里不能用*
}))
app.use(jwt({ secret: config.jwt_pwd, passthrough: true }).unless({ path: ["/login"] }));
app.use(koaBody({
    multipart: true,
    uploadDir:  path.join(__dirname, `/public/uploads/`),
    formidable: {
        maxFileSize: 50 * 100 * 1024 * 1024,    // 设置上传文件大小最大限制，默认50M
        multipart: true,
    }
}));
app.use(bodyparser());
app.use(Token.checkTokenInHttp([
    { url: "^/login/?$", method: "POST", reg: true },
    { url: "^/register/?$", method: "POST", reg: true },
    { url: "^/uploadpic/?$", method: "POST", reg: true },
    { url: "^/facerec/?$", method: "POST", reg: true },
    { url: "^/uploadpic_test/?$", method: "POST", reg: true },
    { url: "^/uploadpic_tea/?$", method: "POST", reg: true },
    { url: "^/tearecbyusr/?$", method: "POST", reg: true },
    { url: "^/handleDone/?$", reg: true },
    { url: "^/tmp(/.*)?$", reg: true },
]))

app.use(require('koa-static')(path.join('./public')))
app.use(router.routes()).use(router.allowedMethods());
app.listen(config.port,() =>console.log('ok'))
