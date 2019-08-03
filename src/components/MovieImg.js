import React from 'react';
import * as propTypes from "prop-types";

export default class MovieImg extends React.Component {
    static propTypes = {
        movieImgUrl: propTypes.string,
        title: propTypes.string
    };

    static defaultProps = {
        movieImgUrl: undefined,
        title: 'undefined'
    };
    render () {
        return (
            <div className='Movie-poster'>
                <div className='m-img'>
                    <img src={this.props.movieImgUrl} alt="yok"/>
                </div>
                <div className='m-title'>
                    {this.props.title}AAA
                </div>
            </div>
        );
    }
}
