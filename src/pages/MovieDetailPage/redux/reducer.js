import * as types from './types';

export const MovieDetailPageReducer = (state = {}, action) => {
    switch (action.type) {
        case types.GET_MOVIES_DETAIL_SUCCESS:
            return { ...state, movieDetail: action.payload };
        case types.GET_MOVIES_DETAIL_FAIL:
            return { ...state, movieDetailError: action.payload };
        default:
            return state;
    }
};