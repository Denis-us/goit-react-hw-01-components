import React from 'react';
import PropTypes from 'prop-types';


const Statistics = ({ title, stats }) => {
    <section class="statistics">
        <h2 class="title">{title}</h2>

        <ul class="stat-list">
        Statistics.map(({stats})=> 
                <li class="item" key={id}>
                    <span class="label">{stats.label}</span>
                    <span class="percentage">{stats.percentage}</span>
                </li>
            )}
            {/* <li class="item">
                <span class="label">{stats.label}</span>
                <span class="percentage">{stats.percentage}</span>
            </li>
            <li class="item">
                <span class="label">{stats.label}</span>
                <span class="percentage">{stats.percentage}</span>
            </li>
            <li class="item">
                <span class="label">{stats.label}</span>
                <span class="percentage">{stats.percentage}</span>
            </li> */}
        </ul>
    </section>
}

// Statistics.propTypes = {
//     title: PropTypes.string.isRequired,
//     avatar: PropTypes.string,
//     tag: PropTypes.string,
//     location: PropTypes.string,
//     stats: PropTypes.string,
// }

export default Statistics;