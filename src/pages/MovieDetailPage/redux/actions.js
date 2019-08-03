import * as types from './types';

export const getMovieDetail = (imdbId) => {
    return dispatch => {
        return getMovieDetail(imdbId)
            .then(({data}) => {
                dispatch({
                    type: types.GET_MOVIES_DETAIL_SUCCESS,
                    payload: data.data
                })
            })
            .catch(error => {
                dispatch({
                    type: types.GET_MOVIES_DETAIL_FAIL,
                    payload: error
                })
            });
    };
};
