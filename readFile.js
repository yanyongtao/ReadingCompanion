        'use strict'
        var fs = require('fs');

        fs.readFile('example.txt','utf-8',function(err,data) {
            if (err) {
                console.log(err)
            }else{
                console.log(data)
            }
        })
        fs.readFile('add_func.png',function(err,data) {
            if (err) {
                console.log(err)
            }else{
                var aa = data.toString('utf-8');
                console.log(data)
                console.log(aa)
                console.log(Buffer.from(aa,'utf-8'))
                console.log(data.length+'bytes')
            }
        })
        var dataSync = fs.readFileSync('add_func.png','utf-8')
        console.log(dataSync);
        try{
            var data_ = fs.readFileSync('add_func.png','utf-8')
            console.log(data_)
        }catch(error){
            console.log(error)
        }

        var data_write = 'hello nodeJs456';
        fs.writeFile('write.txt',data_write,function(err) {
            if (err) {
                console.log(err)
            }else{
                console.log('ok')
            }
        })
        fs.writeFileSync('write.txt',data_write+'123');
        fs.stat('write.txt',function(err,stat) {
            if (err) {
                console.log(err)
            }else{
                console.log(stat.isFile())
            }
        })