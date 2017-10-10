const express = require('express');
const app = express();
var apiRouter = express.Router();
var proxyMiddleware = require('http-proxy-middleware');
var axios = require('axios');
var data = require('./mock.json');
console.log(data);
var picList = data.getRecommendPicList;
var proxyTable = {
  '/api': {
    target: 'http://music.163.com',
    changeOrigin: true,
    headers: {
      Referer: 'http://music.163.com/',
      Host: 'music.163.com'
    }
  },
  '/newapi': {
    target: 'http://localhost:3000',
    changeOrigin: true,
    pathRewrite: { '^/newapi': '/' },
  }
}

apiRouter.get('/getRecommendPicList', function(req, res) {
  res.json(picList)
});

app.use('/api163', apiRouter);
app.use(express.static('public'))
Object.keys(proxyTable).forEach(function(context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

var server = app.listen(8080)
