import React, {Component} from 'react';
import MovieImg from "../components/MovieImg";
import MovieDescription from "../components/MovieDescription";
import './../style.scss';

class MovieDetailPage extends Component {


    render() {
        return (
            <div className='Movie-detail-page'>
                <MovieImg movieImgUrl='' title='' />
                <MovieDescription movie= {{}}/>
            </div>
        );
    }

}

export default MovieDetailPage;