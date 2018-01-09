var http = require('http');
//创建http server并传入回调函数
var server = http.createServer(function(request,response) {
    //回调函数接受request和response函数
    //获得http请求的method和url
    console.log(request.method+":"+request.url);
    //将http响应200写入response,同时设置Content-type:text/html
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>node server</h1>')
})
// server.listen(8081);
console.log('server is running at http://127.0.0.1:8081');


var url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
var path = require('path');
//解析当前路径
var workDir = path.resolve(".");
console.log(workDir);
//组合完整的文件路径 当前目录+‘pub'+index.html
var filePath = path.join(workDir,'pub','index.html');
console.log(filePath);