import * as types from './types';
import { axiosGlobal } from '../../../network';
import {API_KEY} from "../../../utils/constant";

export const fetchSearchMovies = (keyword) => {
    return dispatch => {
        const url = ``;

        return axiosGlobal
            .get(url, {
                params: {
                    apikey: API_KEY,
                    s: keyword,
                    plot: 'full',
                    page: 1
                }
            })
            .then(({data}) => {
                dispatch({
                    type: types.GET_MOVIES_SUCCESS,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: types.GET_MOVIES_FAIL,
                    payload: error
                })
            });
    };
};