export class Playlist {
  constructor({
    name,
    description,
    coverImgUrl,
    creator,
    subscribedCount,
    commentCount,
    shareCount,
    downloadCount,
    songs
  }) {
    this.name = name;
    this.description = description;
    this.coverImgUrl = coverImgUrl;
    this.creator = creator;
    this.subscribedCount = subscribedCount;
    this.commentCount = commentCount;
    this.shareCount = shareCount;
    this.songs = songs;
  }
}

export function createPlaylist(playlistData) {
  return new Playlist({
    name: playlistData.name,
    description: playlistData.description,
    coverImgUrl: playlistData.coverImgUrl,
    creator: filterCreator(playlistData.creator),
    subscribedCount: playlistData.subscribedCount,
    commentCount: playlistData.commentCount,
    shareCount: playlistData.shareCount,
    songs: filterSongs(playlistData.tracks)
  });
}

function filterCreator(creator) {
  return {
    nickname: creator.nickname,
    avatarUrl: creator.avatarUrl
  };
}

function filterSongs(tracks) {
  let ret = [];
  for (let i = 0; i < tracks.length; i++) {
    let description = '';
    description += tracks[i].artists[0].name + ' - ' + tracks[i].album.name;
    ret.push({
      name: tracks[i].name,
      description: description,
      id: tracks[i].id
    });
  }
  return ret;
}
