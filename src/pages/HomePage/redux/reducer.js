import * as types from './types';

export const HomePageReducer = (state = {}, action) => {
    switch (action.type) {
        case types.GET_MOVIES_SUCCESS:
            return { ...state, movies: action.payload };
        case types.GET_MOVIES_FAIL:
            return { ...state, moviesError: action.payload };
        default:
            return state;
    }
};