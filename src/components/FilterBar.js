import React from 'react';

export default class FilterBar extends React.Component {
    render () {
        return (
            <div className='FilterBar'>
                    <select className='f-item'>
                        <option placeholder="">Categories</option>
                        <option>New Arrivals</option>
                    </select>
            </div>
        );
    }
}
