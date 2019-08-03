import React from 'react';
import * as propTypes from 'prop-types';

export default class MovieBox extends React.Component {
    static propTypes = {
        movieItem: propTypes.object,
    };

    static defaultProps = {
        movieItem: undefined
    };

    componentWillMount() {

    }

    render() {
        const {movieItem} = this.props;
        return (
            <div className='Movie-box'>
                <div className='m-img'>
                    <img src={movieItem.Poster} alt="img not found"/>
                </div>
                <div className='m-title'>
                    <p> {movieItem.Title}</p>
                </div>
            </div>
        );
    }
}
