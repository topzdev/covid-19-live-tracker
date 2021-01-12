import { types } from "./types";
import newsServices from "../services/news";

export const state = () => ({
  country: null
});

export const getters = {};

export const mutations = {
  [types.mutations.SET_NEWS_COUNTRY](state, news) {
    state.country = {
      count: news.totalResults,
      items: news.articles
    };
  }
};

export const actions = {
  //get specific country summary
  async [types.actions.GET_NEWS_COUNTRY]({ commit }, country) {
    try {
      const data = await newsServices.getCovidNewsByCountry(country);
      commit(types.mutations.SET_NEWS_COUNTRY, data);
    } catch (error) {
      console.error(error);
    }
  },
  //clear specific country data
  async [types.actions.CLEAR_NEWS_COUNTRY]({ commit }) {
    try {
      commit(types.mutations.SET_NEWS_COUNTRY, null);
    } catch (error) {
      console.error(error);
    }
  }
};
