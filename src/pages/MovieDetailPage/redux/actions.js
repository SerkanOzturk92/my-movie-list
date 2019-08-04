import * as types from './types';
import {axiosGlobal} from "../../../network";
import {API_KEY} from "../../../utils/constant";

export const getMovieDetail = (imdbID) => {
    return dispatch => {
        const url = ``;
        return axiosGlobal
            .get(url, {
                params: {
                    apikey: API_KEY,
                    i: imdbID,
                }
            })
            .then(({data}) => {
                dispatch({
                    type: types.GET_MOVIES_DETAIL_SUCCESS,
                    payload: data
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
