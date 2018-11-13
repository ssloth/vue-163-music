import * as types from './mutation-types';
export const selectPlay = function({ commit, state }, { list, index }) {
  commit(types.SET_CURRENT_PLAYLIST, list);
  commit(types.SET_CURRENT_INDEX, index);
  commit(types.SET_FULL_SCREEN, true);
  commit(types.SET_PLAYING, true);
};
