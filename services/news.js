import apiClient from "./axios-client";

const API_URL = "https://newsapi.org";
const API_KEY = process.env.newsApiKey;
export default {
  async getCovidNewsByCountry(country) {
    const response = await apiClient.$get(
      `${API_URL}/v2/top-headlines?q=covid&country=${country.toLowerCase()}&apiKey=${API_KEY}`
    );
    return response;
  }
};
