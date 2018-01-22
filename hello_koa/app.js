//导入koa，和koa1不同，我们导入的是一个class，因此用大写的Koa表示
const Koa = require('koa');
//创建一个KOA对象表示 web app本身
const app = new Koa();
//对于任何请求app将调用该异步函数处理请求
app.use(async (ctx,next)=>{
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>hello koa2!</h1>';
})
app.listen(3000);
console.log('app start at 3000...')