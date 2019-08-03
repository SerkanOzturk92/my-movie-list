import React from 'react';

export default class Filter extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.filterMovies(event.target.value);
    }

    render () {
        return (
            <div className='Filter'>
                <div className='FilterBar'>
                    <select className='f-item'>
                        <option placeholder="">Movies</option>
                        <option>Series</option>
                        <option>Episode</option>
                    </select>
                </div>
                <div className='Search'>
                    <div className="Search-input">
                        <input className='f-item' id="search" type="text" placeholder="Enter Keywords?"
                               value={this.state.value} onChange={this.handleChange}/>
                    </div>
                    <div className="Search-button">
                        <button  className="Btn-search f-item" type="button">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
