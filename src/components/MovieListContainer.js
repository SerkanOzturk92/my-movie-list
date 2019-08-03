import React from 'react';
import MovieBox from "./MovieBox";

const movies =[
    {
        id: 1,
        imgUrl: '',
        name: 'bbb'
    },{
        id: 1,
        imgUrl: '4r34r3.png',
        name: 'qweq'
    },{
        id: 1,
        imgUrl: '',
        name: 'asda'
    },{
        id: 1,
        imgUrl: '',
        name: 'asfas'
    },{
        id: 1,
        imgUrl: '',
        name: 'asa'
    },{
        id: 1,
        imgUrl: '',
        name: 'bxzzbb'
    }];


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