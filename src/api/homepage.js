import axios from 'axios';
export function getHomeRecommend() {
  var url = '/api/homepageData';
  return axios.get(url).then(res => Promise.resolve(res.data))
}

