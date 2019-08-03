import {API_KEY} from "../utils/constant";

export const getMovieDetail = async (id) => {
    const input = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
    return await fetch( input);
};