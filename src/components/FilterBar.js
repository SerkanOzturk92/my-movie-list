import React from 'react';

export default class FilterBar extends React.Component {
    render () {
        return (
            <div className='FilterBar'>
                    <select className='f-item'>
                        <option placeholder="">Movies</option>
                        <option>Series</option>
                        <option>Episode</option>
                    </select>
            </div>
        );
    }
}
