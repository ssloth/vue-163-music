import * as types from './mutation-types';

const mutations = {
  [types.SET_PLAYLIST](state, playlist) {
    state.playlist = playlist;
  },
  [types.SET_PLAYING](state, flag) {
    state.player.playing = flag;
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.player.fullScreen = flag;
  },
  [types.SET_CURRENT_PLAYLIST](state, list) {
    state.player.currentPlaylist = list;
  },
  [types.SET_RANDOM_PLAYLIST](state, list) {
    state.player.randomPlaylist = list;
  },
  [types.SET_MODE](state, mode) {
    state.player.mode = mode;
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.player.currentIndex = index;
  }
};

export default mutations;
