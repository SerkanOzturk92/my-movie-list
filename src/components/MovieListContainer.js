import React from 'react';
import MovieBox from "./MovieBox";

const movies =[
    {
        imdbID: 1,
        Type: '',
        Poster: '',
        Title: 'efwe',
        Year: '1999'
    },
    {
        imdbID: 2,
        Type: '',
        Poster: '',
        Title: 'wew',
        Year: '1999'
    },
    {
        imdbID: 3,
        Type: '',
        Poster: '',
        Title: 'b2342bb',
        Year: '1999'
    },
    {
        imdbID: 4,
        Type: '',
        Poster: '',
        Title: 'wdfhr',
        Year: '1999'
    },{
        imdbID: 5,
        Type: '',
        Poster: '',
        Title: 'wewf',
        Year: '1999'
    },{
        imdbID: 6,
        Type: '',
        Poster: '',
        Title: 'sdfsd',
        Year: '1999'
    },{
        imdbID: 7,
        Type: '',
        Poster: '',
        Title: 'fdgdf',
        Year: '1999'
    },{
        imdbID: 8,
        Type: '',
        Poster: '',
        Title: 'wewe',
        Year: '1999'
    },{
        imdbID: 9,
        Type: '',
        Poster: '',
        Title: 'cxvxcv',
        Year: '1999'
    },{
        imdbID: 10,
        Type: '',
        Poster: '',
        Title: 'hgjh',
        Year: '1999'
    }
];


export default class MovieListContainer extends React.Component {
    render () {
        return (
            <div className='Movie-list-container'>
                {
                    movies.map((item,i) => {
                        return  <MovieBox key={i} movieItem={item}/>
                    })
                }
            </div>
        );
    }
}
//768px