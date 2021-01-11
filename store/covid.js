import { types } from "./types";
import covidServices from "@/services/covid";
export const state = () => ({
  countries: null,
  country: null,
  global: null
});

export const mutations = {
  [types.mutations.SET_ALL_COUNTRIES](state, countries) {
    state.countries = countries;
  },
  [types.mutations.SET_GLOBAL_SUMMARY](state, global) {
    state.global = global;
  },

  [types.mutations.SET_COUNTRY_SUMMARY](state, country) {
    state.country = country;
  }
};

export const actions = {
  //get global summary
  async [types.actions.GET_GLOBAL_SUMMARY]({ commit }) {
    try {
      const data = await covidServices.getGlobalSummary();
      commit(types.mutations.SET_GLOBAL_SUMMARY, data);
    } catch (error) {
      console.error(error);
    }
  },

  //get all country summary
  async [types.actions.GET_ALL_COUNTRIES]({ commit }) {
    try {
      const data = await covidServices.getAllCountrySummary();
      commit(types.mutations.SET_ALL_COUNTRIES, data);
    } catch (error) {
      console.error(error);
    }
  },

  //get specific country summary
  async [types.actions.GET_COUNTRY_SUMMARY]({ commit }, country) {
    try {
      const data = await covidServices.getCountrySummary(country);
      commit(types.mutations.SET_COUNTRY_SUMMARY, data);
    } catch (error) {
      console.error(error);
    }
  },
  //clear specific country data
  async [types.actions.GET_COUNTRY_SUMMARY]({ commit }) {
    try {
      commit(types.mutations.SET_COUNTRY_SUMMARY, null);
    } catch (error) {
      console.error(error);
    }
  }
};
