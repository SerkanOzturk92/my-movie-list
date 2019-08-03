import {API_KEY} from "../utils/constant";

export const  searchMyMovies = async (keyword,page) => {
    const input = page ? `http://www.omdbapi.com/?apikey=${API_KEY}&s=${keyword}&plot=full&page=${page}`
        : `http://www.omdbapi.com/?apikey=${API_KEY}&s=${keyword}&plot=full`;
        return await fetch( input);
};
