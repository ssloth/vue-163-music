import jsonp from 'common/js/jsonp';
import {commonParams} from './config';
export function getPlaylistDetail(id) {
  const url = 'http://music.163.com/api/playlist/detail';
  const data = Object.assign({}, commonParams, {
    id: id
  });
  return jsonp(url, data);
}
