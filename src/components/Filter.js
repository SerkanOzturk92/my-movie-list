import React from 'react';
import FilterBar from "./FilterBar";
import Search from "./Search";


export default class Filter extends React.Component {
    constructor(props){
        super(props);

        this.filterMovies = this.filterMovies.bind(this);
    }

    filterMovies (e){
        this.props.filterMovies(e);
    }

    render () {
        return (
            <div className='Filter'>
                <FilterBar/>
                <Search searchMoviesByKey ={this.filterMovies}/>
            </div>
        );
    }
}
