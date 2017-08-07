export class Song {
  constructor({
    name,
    id,
    artists,
    albumNameName,
    albumId,
    albumBlurPicUrl,
    url
  }) {
    this.name = name;
    this.id = id;
    this.artists = artists;
    this.albumNameName = albumNameName;
    this.albumId = albumId;
    this.albumBlurPicUrl = albumBlurPicUrl;
    this.url = url;
  }
}

export function createSong(songData) {
  return new Song({
    name: songData.name,
    id: songData.id,
    artists: filterArtists(songData.artists),
    albumNameName: songData.album.name,
    albumId: songData.album.id,
    albumBlurPicUrl: songData.album.blurPicUrl,
    url: 'http://m10.music.126.net/20170805161243/d8cc7fc1d4e663038f86c1c2413e64eb/ymusic/f9ed/f39c/60aa/c05aefe4f2e515ec0dbb664d8684b975.mp3'
  });
}

function filterArtists(artists) {
  let ret = [];
  artists.forEach((item) => {
    ret.push(item.name);
  });
  return ret.join('/');
}
