import React from 'react';
let timeout =null;
export default class Filter extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.typeSelected = this.typeSelected.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    handleChange(event) {
        clearTimeout(timeout);
        const eventVal = event.target.value;
        this.setState({value: eventVal});
        timeout = setTimeout(()=> {
            this.props.filterMovies(eventVal);
        }, 300);
        console.log(eventVal);
    }


    onClick() {
        this.props.filterMovies(this.state.value);
    }

    typeSelected(e){
        this.props.filterMoviesByType(e.target.value);
    }

    render () {
        return (
            <div className='Filter'>
                <div className='FilterBar'>
                    <select defaultValue='All' onChange={this.typeSelected} className='f-item' >
                        <option value=''>Select type...</option>
                        <option value='movie'>Movies</option>
                        <option value='series'>Series</option>
                        <option value='episode'>Episode</option>
                    </select>
                </div>
                <div className='Search'>
                    <div className="Search-input">
                        <input className='f-item' id="search" type="text" placeholder="Enter Keywords?"
                               value={this.state.value} onChange={this.handleChange}/>
                    </div>
                    <div className="Search-button">
                        <button onClick={this.onClick}  className="Btn-search f-item" type="button">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
