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
    this.lyricText = null;
  }
}

export function createSong(songData, url, lyric) {
  return new Song({
    name: songData.name,
    id: songData.id,
    artists: filterArtists(songData.artists),
    albumNameName: songData.album.name,
    albumId: songData.album.id,
    albumBlurPicUrl: songData.album.blurPicUrl,
    url: url,
    lyric: lyric
  });
}

function filterArtists(artists) {
  let ret = [];
  artists.forEach((item) => {
    ret.push(item.name);
  });
  return ret.join('/');
}
