import React, {Component} from 'react';
import Filter from "../components/Filter";
import MovieListContainer from "../components/MovieListContainer";
import {searchMyMovies} from "../services/homeServices";

class HomePage extends Component {

    async  componentDidMount() {
        const a = await searchMyMovies('man');
        debugger;
    }





    render(){
        return (
            <div className='Home-page'>
                <Filter/>
                <MovieListContainer/>
            </div>
        );
    }

}

export default HomePage;