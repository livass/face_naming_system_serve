const mysql = require('mysql')
const config = require('./config')
const fs = require('fs')
const path = require('path')
const workCode = require('./work_code')
const fsm = require('./fs_more')
const connection = mysql.createConnection(config.sql)
connection.connect()

async function query(sql, list) {
    return new Promise((resolve, reject) => {
        connection.query(sql, list, (err, res) => {
            if (err) return reject(err)
            return resolve(JSON.parse(JSON.stringify(res)))
        })
    })
}

async function login(usr, pwd) {
    let res = await query(
        "select * from login where usr=? and pwd=? limit 1;",
        [usr, pwd]
    )
    if (res.length == 0) {
        // have no match
        return false
    } else {
        return res[0]
    }
}



async function getWorkDetailsByWorkCode(work_code) {
    let res = await query("select * from work where work_code=? limit 1;", [work_code])
    return res.length == 0 ? null : Array.from(res)[0]
}


async function resetPassword(usr, newPwd) {
    let res = await query(
        "update login1 set pwd=? where usr=?;",
        [newPwd, usr]
    )
    return res["message"]
}




async function usrInfo(usr) {
    let res = await query(
        "select * from login1 where usr=?",
        [usr]
    )
    res = Array.from(res)[0]
    // 处理 class_list 列表
    if (res["class_list"]) {
        res["class_list"] = (JSON.parse(res["class_list"]))
    }
    return res
}



//登录1
async function login1(usr, pwd) {
    let res = await query(
        "select * from login1 where usr=? and pwd=? limit 1;",
        [usr, pwd]
    )
    if (res.length == 0) {
        // have no match
        return false
    } else {
        return res[0]
    }
}

//注册用户
async function register(usr,pwd,identify,name,address,class_list){
    let res = []
    try {
        res = await query(
            "insert into login1(usr,pwd,identify,name,address,class_list) values(?,?,?,?,?,?);",
            [usr,pwd,identify,name,address,class_list]
        )
    } catch (err) { console.log(err); return false }
    if (res.length == 0) { // 已有此账号
        return false
    }
    else 
        return true
}




//获取学生用户详情
async function getusrdetailbyusr(usr) {
    let res = await query("select * from login1 where usr=? limit 1;", [usr])
    return res.length == 0 ? null : Array.from(res)[0]
}


//获取自己的班级列表
async function getmyclass(usr){
    let res=await query(
        "select classid,class from class where usr=?;",[usr]
    )
    res = Array.from(res)
    return res
}

//获取班级人员 classid weekid
async function getstuby_cw(classid,weekid){
    let res=await query(
        "select usr,usrname,ifname from namestu where classid=? and weekid=?;",
        [classid,weekid]
    )
    res=Array.from(res)
    return res
}

//根据usr更新信息
async function upifupload(usr){
    await query("update stupic set ifupload=1 where usr=?;",[usr])
}

//更新人脸地址
async function uppicaddress(address,usr){
    await query("update stupic set picaddress=? where usr=?;",[address,usr])
}

//更新点名记录
async function upifnamebyusr(usr,weekid,classid){
    await query("update namestu set ifname=1 where usr=? and weekid=? and classid=?;",[usr,weekid,classid])
}

//添加点名数据
async function addstusignbyusr(usr,usrname,classid,weekid,ifname,ifrec){
    let res=[]
    try{
        res=await query(
            "insert into stusign(usr,usrname,classid,weekid,ifname,ifrec) values(?,?,?,?,?,?);",
            [usr,usrname,classid,weekid,ifname,ifrec]
        )
    }catch(err){console.log(err);return false}
    if(res.length==0){
        return false
    }
    else 
        return true
}

//选取本周本节课点名记录
async function getstuby_cw2(classid,weekid){
    let res=await query(
        "select usr,usrname,ifname,ifrec from stusign where classid=? and weekid=?;",
        [classid,weekid]
    )
    res=Array.from(res)
    return res
}

//是否上传照片
async function ifuploadpic(usr){
    let res=await query(
        "select ifupload from stupic where usr=?;",[usr]
    )
    return res
}

//获取图片
async function getpicaddress(usr){
    let res=await query(
        "select picaddress from stupic where usr=?;",[usr]
    )
    return res
}

//更新是否认证成功
async function upifrecbyusr(usr,weekid,classid){
    await query("update stusign set ifrec=1 where usr=? and weekid=? and classid=?;",[usr,weekid,classid])
}

//根据usr获取数据
async function getnamebystuusr(usr){
    let res=await query(
        "select usr,usrname,classid,weekid from stusign where usr=? and ifname=1 and ifrec=0;",[usr]
    )
    res=Array.from(res)
    return res
}

async function getrecbystuusr(usr){
    let res=await query(
        "select usr,usrname,classid,weekid from stusign where usr=? and ifname=1 and ifrec=1;",[usr]
    )
    res=Array.from(res)
    return res
}


exports.query = query
exports.login = login
exports.resetPassword = resetPassword
exports.login1 = login1
exports.register= register
exports.getusrdetailbyusr= getusrdetailbyusr
exports.getmyclass=getmyclass
exports.getstuby_cw=getstuby_cw
exports.upifupload=upifupload
exports.uppicaddress=uppicaddress
exports.addstusignbyusr=addstusignbyusr
exports.upifnamebyusr=upifnamebyusr
exports.getstuby_cw2=getstuby_cw2
exports.ifuploadpic=ifuploadpic
exports.getpicaddress=getpicaddress
exports.upifrecbyusr=upifrecbyusr
exports.getnamebystuusr=getnamebystuusr
exports.getrecbystuusr=getrecbystuusr