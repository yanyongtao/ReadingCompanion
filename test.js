process.nextTick(
    function(){
        console.log('nextTick callback')
    }
);
console.log("nextTick was set");
process.on('exit',function (code) {
    console.log('about to exit with code'+code)
})
//判断JS代码执行环境
if (typeof(window) == 'undefined') {
    console.log('node JS')
}else{
    console.lof('brower')
}