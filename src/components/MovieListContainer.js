import React from 'react';
import MovieBox from "./MovieBox";

export default class MovieListContainer extends React.Component {
    render () {
        return (
            <div className='Movie-list-container'>
                {
                    this.props.movies.map((item,i) => {
                        return  <MovieBox key={i} movieItem={item}/>
                    })
                }
            </div>
        );
    }
}
//768px