//导入koa，和koa1不同，我们导入的是一个class，因此用大写的Koa表示
const Koa = require('koa');

//注意require("koa-router")返回的是函数
const router = require('koa-router')();
//引入bodyparser解析原生request，并绑定到ctx.request.body
const bodyparser = require('koa-bodyparser');
//创建一个KOA对象表示 web app本身
const app = new Koa();
//对于任何请求app将调用该异步函数处理请求

app.use(bodyparser());

app.use(async (ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
    await next();
})
//add router
// router.get('/hello/:name',async(ctx,next)=>{
//     var name = ctx.params.name;
//     ctx.response.body = `<h1>hello,${name}</h1>`;
// })
// router.get('/',async(ctx,next)=>{
//     ctx.response.body = '<h1>index</h1>'
// })
router.get('/',async(ctx,next)=>{
    ctx.response.body = `<h1>index</h1>
    <form action='/signin' method='post'>
        <p>name: <input name='name' value='koa'></p>
        <p>password: <input name='password' type='password'></p>
        <p><input type='submit' value='Submit'></p>
    </form>`
})
router.post('/signin',async (ctx,next)=>{
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`sign with name:${name},password:${password}`)
    if (name =='koa' && password == '12345') {
        ctx.response.body = `welcome ${name}`
    }else{
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href=''>try again</a></p>
        `
    }
})
app.use(router.routes());
app.listen(3000);
console.log('app start at 3000...')