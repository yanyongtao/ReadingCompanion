var express = require('express');
var app = express();
app.get('/',function (req,res) {
    res.send('hello word!')
});
app.listen(3000,function () {
    onsole.log('express listen at 3000')
})

app.get('/test',function (req,res) {
    fs.readFile('/file1',function(err,data) {
        if (err) {
            res.status(500).send('read file1 error')
        }
        fs.readFile('/file2',function (err,data) {
            if (err) {
                res.status(500).send('read file2 error')
            }
            res.type('text/plain')
            res.send(data);
        })
    })
})