import React from 'react';
import * as propTypes from 'prop-types';

export default class MovieBox extends React.Component {
    static propTypes = {
        movieItem: propTypes.object,
    };

    static defaultProps = {
        movieItem: undefined
    };


    constructor(props) {
        super(props);
        this.state = {
            movie: undefined,
        };

        //this.sort = this.sort.bind(this);
    }

    componentWillMount() {

    }


    render() {
        const {movieItem} = this.props;
        return (
            <div className='Movie-box'>
                <div className='m-img'>
                    <img src={movieItem.imgUrl} alt="img not found"/>
                </div>
                <div className='m-title'>
                    <p> {movieItem.name}</p>
                </div>
            </div>
        );
    }
}
