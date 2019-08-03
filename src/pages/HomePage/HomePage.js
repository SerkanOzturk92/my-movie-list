import React, {Component} from 'react';
import Filter from "../../components/Filter";
import MovieListContainer from "../../components/MovieListContainer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchMovies} from "./redux/action";

class HomePage extends Component {
    state = {
        error:false,
        hasMore: true,
        isLoading: false,
        movies: [],
    };

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {movies, moviesError} = this.props;

        if(movies !== prevProps.movies) {
            this.handleMoviesData(movies);
        }

        if(moviesError !== prevProps.moviesError) {
            this.handleMoviesError(moviesError);
        }
    }

    searchMovies(keyword) {
        //TODO: kullanıcı 3 harften sonra 300ms beklerse arama yapılacak.
        // eğer 300ms geçmeden yeni harf tıklanırsa arama beklemeli.
        if(keyword.length > 3)
        {
            debugger;
            this.props.fetchMovies(keyword);
        }
    }

    handleMoviesData(moviesResp) {
        if(!moviesResp) return;
        const moviesData = moviesResp.map(movie => {
            return movie
        });
    const total = 100; // TODO : sorgudan gelen totaldan alınacak.
        const movies = [
            ...this.state.movies,
            ...moviesData
        ];

        this.setState({
            movies: movies,
            isLoading: false,
            hasMore: movies.length < total
        })

    }
    handleMoviesError(error) {
        this.setState({
            error: error
        });
    }

    render(){
        return (
            <div className='Home-page'>
                <Filter filterMovies = {this.searchMovies} />
                <MovieListContainer/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        movies: state.HomePageReducer.movies,
        moviesError: state.HomePageReducer.moviesError
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchMovies
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
