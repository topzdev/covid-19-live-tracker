import { types } from "./types";
import covidServices from "@/services/covid";
export const state = () => ({
  countries: null,
  country: null,
  global: null
});

export const getters = {
  getCountriesName: state => {
    if (state.countries === null) return null;
    return state.countries.map(item => item.country);
  },
  getCountryInfo: state => {
    if (state.countries === null) return null;
    return state.countries.map(item => ({
      cases: item.cases,
      population: item.population,
      ...item.countryInfo
    }));
  },
  getListBySearch: state => search => {
    console.log("Searching... ", search);
    return state.countries.filter(item => {
      if (
        item.country &&
        search &&
        item.country.toUpperCase().indexOf(search.toUpperCase()) > -1
      ) {
        console.log(item.country);
        return item;
      }
    });
  }
};

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
      console.log("Country", country);
      const data = await covidServices.getCountrySummary(country);
      console.log("country", data);
      commit(types.mutations.SET_COUNTRY_SUMMARY, data);
    } catch (error) {
      console.error(error);
    }
  },
  //clear specific country data
  async [types.actions.CLEAR_COUNTRY_SUMMARY]({ commit }) {
    try {
      commit(types.mutations.SET_COUNTRY_SUMMARY, null);
    } catch (error) {
      console.error(error);
    }
  }
};
