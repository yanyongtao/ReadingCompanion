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
server.listen(8081);
console.log('server is running at http://127.0.0.1:8081');