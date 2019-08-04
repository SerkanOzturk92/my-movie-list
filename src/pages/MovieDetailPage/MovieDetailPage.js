import React, {Component} from 'react';
import '../../style.scss';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getMovieDetail} from "./redux/actions";

class MovieDetailPage extends Component {
    state = {
        movieDetail: undefined
    };

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getMovieDetail(id);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {movieDetail, movieDetailError} = this.props;

        if (movieDetail !== prevProps.movieDetail) {
            this.handleMovieDetail(movieDetail);
        }

        if (movieDetailError !== prevProps.movieDetailError) {
            this.handleMovieDetailError(movieDetailError);
        }

    }

    handleMovieDetail(movieDetailResp) {
        if (!movieDetailResp) return;
        const movie = movieDetailResp;
        this.setState({
            movieDetail: movie
        })
    }

    handleMovieDetailError(movieDetailRespError) {

    }

    render() {
        const {movieDetail} = this.state;
        return (

            <div className='Movie-detail-page'>
                {movieDetail &&
                <div className='Movie-poster'>
                    <div className='m-img'>
                        <img src={movieDetail.Poster} alt="yok"/>
                    </div>
                    <div className='m-title'>
                        {movieDetail.Title}
                    </div>
                </div>
                }
                {movieDetail &&
                <div className='Movie-description'>
                    <div>{movieDetail.Plot}</div>
                    <div>Awards: {movieDetail.Awards}</div>
                    <div>Year: {movieDetail.Year}</div>
                    <div>Director: {movieDetail.Director}</div>
                    <div>IMDB Rating: {movieDetail.imdbRating}</div>

                </div>
                }
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        movieDetail: state.MovieDetailPageReducer.movieDetail,
        movieDetailError: state.MovieDetailPageReducer.movieDetailError,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getMovieDetail
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage);