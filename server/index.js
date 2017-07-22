var express = require('express');
var axios = require('axios');
var apiRouter = express.Router();
var app = express();
const origin = 'http://music.163.com';

apiRouter.use('/test', function(req, res) {
  console.log(req);
  res.json({
    a: 'a'
  })
});

apiRouter.use('/getRecommendPlaylist', function(req, res) {
  var url = 'http://music.163.com/weapi/personalized/newsong';
  axios.get(url, {
    headers: {
      'Origin': origin,
      'Referer': origin,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    params: req.query
  }).then((response) => {
    res.html(response);
    console.log(response)
  }).catch(e => {
    console.error(e)
  })
});

app.use('/api', apiRouter);
module.exports = apiRouter;
