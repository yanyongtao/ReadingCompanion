'use strict'
var fs = require('fs');
// 打开一个流
var rs = fs.createReadStream('example.txt','utf-8');
rs.on('data',function(chunk) {
    console.log('DATA');
    console.log(chunk)
})
rs.on('end',function() {
    console.log('END')
})
rs.on('error',function(err) {
    console.log('ERROR'+err)
})

var ws1 = fs.createWriteStream('example.txt','utf-8');
ws1.write('调用stream写入数据-1...\n');
ws1.write('调用stream写入数据-2...\n');
ws1.write('调用stream写入数据-3...\n');
ws1.end();

var ws2 = fs.createWriteStream('example.txt','utf-8');
ws2.write(new Buffer('使用stream写入二进制数据','utf-8'));
ws2.write(new Buffer('END','utf-8'));
ws2.end()

var rs3 = fs.createReadStream('example.txt','utf-8');
var ws3 = fs.createWriteStream('a.txt','utf-8');
rs3.pipe(ws3);