import apiClient from "./axios-client";

const API_URL = "https://corona.lmao.ninja";

export default {
  async getGlobalSummary() {
    const response = await apiClient.$get(`${API_URL}/v2/all`);
    return response;
  },

  async getAllCountrySummary() {
    const response = await apiClient.$get(`${API_URL}/v2/countries`);
    return response;
  },

  async getCountrySummary(country) {
    const response = await apiClient.$get(`${API_URL}/v2/countries${country}`);
    return response;
  }
};
