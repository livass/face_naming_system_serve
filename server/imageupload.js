const Router = require('koa-router');
const fs = require('fs')
const path = require('path')
const multer = require('koa-multer')
const router = new Router({
  prefix: '/file'
});

//配置diskStorage来控制文件存储的位置以及文件名字等
var storage = multer.diskStorage({
  //确定图片存储的位置
  destination: function (req, file, cb){
    // 每一天的图片分开管理，每一天是一个文件夹
    let date = new Date();
    // 年
    let year = date.getFullYear();
    // 月
    let month = date.getMonth() + 1;
    // 日
    let day = date.getDate();
    // 创建文件夹路径
    let dir = "../public/uploads" + year + month + day;
    // 判断目录是否存在，不存在则自动创建目录
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, {
        recursive: true
      })
    }
    // 上传文件
    cb(null, dir)
  },
  filename: function (req, file, cb){
    // 设置上传文件的名称
    let fileName = Date.now() + path.extname(file.originalname)
    // 设置名称
    cb(null, fileName)
  }
});
var upload = multer({storage: storage});

exports.upload=upload