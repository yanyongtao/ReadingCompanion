'use strict'
var fs = require('fs'),
    http = require('http'),
    url = require('url'),
    path = require('path');
//从命令行参数获取root目录，默认是当前目录
var root = path.resolve(process.argv[2] || '.');
console.log('Static root dir：'+root);
//创建服务器
var server = http.createServer(function (request,response) {
    //获取url的path
    var pathname = url.parse(request.url).pathname;
    //获得对应的本地文件路径
    var filepath = path.join(root,pathname);
    // 获取文件状态
    fs.stat(filepath,function (err,stats) {
        if(!err && stats.isFile()){
            //没有出错，并且文件存在
            console.log('200'+request.url);
            response.writeHead(200);
            //将文件流导向response
            fs.createReadStream(filepath).pipe(response);
        }else{
            //出错了或者文件不存在
            console.log('404'+request.url);
            response.end('404 Not Found')
        }
    })
})
server.listen(8082);
console.log('File server is running in http://127.0.0.1:8082');