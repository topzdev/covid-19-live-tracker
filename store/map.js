import { types } from "./types";

export const state = () => ({
  center: { lat: 10, lng: 10 }
});

export const getters = {};

export const mutations = {
  [types.mutations.SET_MAP_CENTER](state, center) {
    state.center = center;
  }
};

export const actions = {
  //get global summary
  async [types.actions.SET_MAP_CENTER]({ commit }, position) {
    try {
      commit(types.mutations.SET_MAP_CENTER, position);
    } catch (error) {
      console.error(error);
    }
  }
};
