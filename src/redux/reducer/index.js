import { combineReducers } from 'redux';
import {HomePageReducer} from "../../pages/HomePage/redux/reducer";
import {MovieDetailPageReducer} from "../../pages/MovieDetailPage/redux/reducer";

export default combineReducers({
    HomePageReducer,
    MovieDetailPageReducer
});