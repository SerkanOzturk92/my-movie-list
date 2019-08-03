import React from 'react';
import './../style.scss';


export default class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {value: ''};
        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onClick () {
        console.log(this.state.value);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.searchMoviesByKey(event.target.value);
    }

    render() {
        return (
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
        );
    }
}
