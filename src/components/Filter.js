import React from 'react';
import FilterBar from "./FilterBar";
import Search from "./Search";


export default class Filter extends React.Component {
    render () {
        return (
            <div className='Filter'>
                <FilterBar/>
                <Search/>
            </div>
        );
    }
}
