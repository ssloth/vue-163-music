import jsonp from 'common/js/jsonp';
export function getPlaylist(id) {
  const url = 'http://music.163.com/api/playlist/detail';
  const data = {
    id: id
  };
  return jsonp(url, data)
}
