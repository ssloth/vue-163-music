import * as types from './mutation-types';

const mutations = {
  [types.SET_PLAYLIST](state, playlist) {
    state.playlist = playlist;
  }
};

export default mutations;
