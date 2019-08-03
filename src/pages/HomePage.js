import React, {Component} from 'react';
import Filter from "../components/Filter";
import MovieListContainer from "../components/MovieListContainer";

class HomePage extends Component {
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