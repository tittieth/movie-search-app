import type { IMovie } from "@/models/IMovie";
import type { IMovieExt } from "@/models/IMovieExt";
import type { IOmdbResponse } from "@/models/IOmdbResponse";
import axios from "axios";


const BASE_URL = `http://omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&`;

const get = async <T>(endpointData: string) => {
  return await axios.get<T>(`${BASE_URL}${endpointData}`);
};

export const getMovies = async (searchText: string): Promise<IMovie[]> => {
  let response = await get<IOmdbResponse>(`s=${searchText}`);
  return response.data.Search;
};

export const getMovieById = async (id: string): Promise<IMovieExt> => {
  let response = await get<IMovieExt>(`i=${id}`);
  return response.data;
};