const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    isMe : false,
    list : [{
      id : 1,
      title : 'aaaa' 
    },{
      id : 2,
      title : 'dddd' 
    },{
      id : 3,
      title : 'cccc' 
    },{
      id : 4,
      title : 'dddd' 
    }]
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/profile/:username', async(ctx,next)=>{
  let username = ctx.params.username;
  ctx.body = {
    title: 'this is profile',
    username
  }
});

module.exports = router
