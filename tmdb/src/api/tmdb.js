import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "9813ce01a72ca1bd2ae25f091898b1c7";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchActors = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/person/popular?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchTVShows = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/popular?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchSeries = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/top_rated?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
