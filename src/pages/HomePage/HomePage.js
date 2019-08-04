import React, {Component} from 'react';
import Filter from "../../components/Filter";
import MovieListContainer from "../../components/MovieListContainer";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {fetchSearchMovies} from "./redux/action";

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.searchMovies = this.searchMovies.bind(this);
        this.typeFilter = this.typeFilter.bind(this);
    }

    state = {
        error: false,
        hasMore: true,
        isLoading: false,
        movies: [],
        page: 1,
        maxPage: 10
    };

    componentDidMount() {
        this.searchMovies(this.state.keyword);
    }

    scrolled(o) {
        const {error, isLoading, hasMore} = this.state;
        if (error || isLoading || !hasMore) return;
        if (o.currentTarget.offsetHeight + o.currentTarget.scrollTop === o.currentTarget.scrollHeight) {
            this.setState({
                isLoading: true
            });
            if (!!this.state.keyword) {
                this.searchMovies(this.state.keyword);
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {movies, moviesError} = this.props;

        if (movies !== prevProps.movies) {
            this.handleMoviesData(movies);
        }

        if (moviesError !== prevProps.moviesError) {
            this.handleMoviesError(moviesError);
        }
    }

    searchMovies(keyword) {
        //TODO: kullanıcı 3 harften sonra 300ms beklerse arama yapılacak.
        // eğer 300ms geçmeden yeni harf tıklanırsa arama beklemeli.
        if (this.state.keyword !== keyword) {
            this.setState({
                    movies: [],
                    page: 1
                }
            )
        }
        if(!!keyword && keyword.length > 2 && this.state.maxPage >= this.state.page)
        {
            this.props.fetchSearchMovies(keyword,this.state.page);
            this.setState({
                keyword: keyword,
                page: this.state.page + 1
            });
        }

    }

    handleMoviesData(moviesResp) {
        if (moviesResp.Response === 'False') return;

        const total = +moviesResp.totalResults;

        const movies = [
            ...this.state.movies,
            ...moviesResp.Search,
        ];
        this.setState({
            movies: movies,
            movieListForFiltering: movies,
            isLoading: false,
            hasMore: movies.length < total,
            maxPage: total/10 | 0
        })

    }

    handleMoviesError(error) {
        this.setState({
            error: error
        });
    }

    typeFilter(type) {
        console.log(type);

        if (this.state.movies.length > 0) {
            const newList = this.filterByTypeMovies(this.state.movieListForFiltering, type);
            this.setState({
                movies: newList
            })
        }
    }

    filterByTypeMovies(movies, type) {
        return movies.filter(item => {
            return item.Type === type;
        })
    }

    render() {
        return (
            <div onScroll={this.scrolled.bind(this)} className='Home-page'>
                <Filter filterMoviesByType={this.typeFilter} filterMovies={this.searchMovies}/>
                <MovieListContainer movies={this.state.movies}/>
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
        fetchSearchMovies
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
