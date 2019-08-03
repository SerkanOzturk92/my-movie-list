import * as types from './types';
import {searchMyMovies} from "../../../services/homeServices";

export const fetchMovies = (keyword, page) => {
    return dispatch => {
        return searchMyMovies(keyword,page)
            .then(({data}) => {
                console.log(data.data);
                dispatch({
                    type: types.GET_MOVIES_SUCCESS,
                    payload: data.data
                });
            })
            .catch(error => {
                dispatch({
                    type: types.GET_MOVIES_FAIL,
                    payload: error
                });
            });
    };
};