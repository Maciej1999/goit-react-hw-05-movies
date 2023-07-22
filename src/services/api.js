import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '78f2b6656e3343e055b38455360ff324';

const params = new URLSearchParams({
  api_key: API_KEY,
  page: 1,
  include_adult: false,
  language: 'en-US',
});
axios.defaults.params = params;
const axiosIns = axios.create({ baseURL, params });

export const fetchTrending = async () => {
  const { data } = await axiosIns.get(`trending/movie/day`);
  return data;
};

export const fetchMovieByName = async query => {
  const { data } = await axiosIns.get(`search/movie?query=${query}`);
  return data;
};

export const fetchMovieById = async movieId => {
  const { data } = await axiosIns.get(`movie/${movieId}`);
  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axiosIns.get(`movie/${movieId}/credits`);
  return data;
};
export const fetchMovieReviews = async movieId => {
  const { data } = await axiosIns.get(`movie/${movieId}}/reviews`);
  return data;
};
