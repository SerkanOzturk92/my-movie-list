export const searchMyMovies = (keyword) => {
    fetch( `http://www.omdbapi.com/?apikey=b7a8da6&s=${keyword}&plot=full`)
        .then(res => res.json())
        .then(
            (result) => {
                return result;
            }
        )
};

// Search Req

// GetPosterReq

