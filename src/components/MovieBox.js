import React from 'react';
import * as propTypes from 'prop-types';
import {Redirect} from "react-router";
import {Link} from "react-router-dom";

export default class MovieBox extends React.Component {
    state = {
        redirect: false,
        url:'',
    };
    constructor(props){
        super(props);
        this.goDetail = this.goDetail.bind(this);
    }

    static propTypes = {
        movieItem: propTypes.object,
    };

    static defaultProps = {
        movieItem: undefined
    };

    componentDidMount() {

    }

    goDetail(){
        const url = '/detail/' + this.props.movieItem.imdbID;
        this.setState({redirect: true,
            url: url });
    }

    render() {
        const {movieItem} = this.props;
        if (this.state.redirect) {
            return <Redirect push to={this.state.url} />;
        }
        return (
            <Link key={movieItem.imdbID} to={`/detail/${movieItem.imdbID}`} className='Movie-box'>
                <div onClick={this.goDetail} className='m-img'>
                    <img src={movieItem.Poster} alt="img not found"/>
                </div>
                <div className='m-title'>
                    <p> {movieItem.Title}</p>
                </div>
            </Link>
        );
    }
}
