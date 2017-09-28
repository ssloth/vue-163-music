const express = require('express');
const app = express();
var apiRouter = express.Router();
var proxyMiddleware = require('http-proxy-middleware');
var proxyTable = require('./config/index');
var axios = require('axios');

apiRouter.get('/homepageData', function(req, res) {
  var url = 'http://music.163.com/m/';
  axios.get(url, {
    headers: {
      Referer: 'http://music.163.com',
      Host: 'music.163.com',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
    },
    params: req.query
  }).then(response => {
    let html = response.data;
    let reg = /window.REDUX_STATE = {[\S\s^]+"msg":""}};/;
    html = html.match(reg)[0];
    let data = html.match(/{[\S\s]+}/)[0];
    data = JSON.parse(data);
    res.json({data: data});
  }).catch((e) => {
    console.error(e)
  })
});
app.use('/api163', apiRouter);
app.use(express.static('public'))
Object.keys(proxyTable).forEach(function(context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

var server = app.listen(8080)
