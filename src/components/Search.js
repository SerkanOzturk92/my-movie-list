import React from 'react';
import './../style.css';


export default class Search extends React.Component {
    render() {
        return (
            <div className='Search'>
                <div className="Search-input">
                    <input className='f-item' id="search" type="text" placeholder="Enter Keywords?"/>
                </div>
                <div className="Search-button">
                    <button className="Btn-search f-item" type="button">
                        Search
                    </button>
                </div>
            </div>
        );
    }
}
