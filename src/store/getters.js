export const playlist = state => state.playlist;
export const playing = state => state.player.playing;
export const fullScreen = state => state.player.fullScreen;
export const currentPlaylist = state => state.player.currentPlaylist;
export const randomPlaylist = state => state.player.randomPlaylist;
export const mode = state => state.player.mode;
export const currentIndex = state => state.player.currentIndex;

export const song = (state) => {
  console.log(state.player);
  return state.player.currentPlaylist[state.player.currentIndex] || {};
};
