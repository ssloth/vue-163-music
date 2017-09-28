module.exports=  {
  '/api': {
    target: 'http://music.163.com',
    changeOrigin: true,
    headers: {
      Referer: 'http://music.163.com/',
      Host: 'music.163.com'
    }
  },
  '/newapi':{
    target: 'http://localhost:3000',
    changeOrigin: true,
    pathRewrite: {'^/newapi' : '/'},
  }
}
