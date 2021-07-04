import React from 'react';
import PropTypes from 'prop-types';


const Statistics = ({title, stats}) => {
    return <section class="statistics">
            <h2 class="title">{title}</h2>

            <ul class="stat-list">
                {stats.map((stat) => (
                    <li class="item" key={stat.id}>
                        <span class="label">{stat.label}</span>
                        <span class="percentage">{stat.percentage}</span>
                    </li>
                ))}
            </ul>
        </section>
}

Statistics.defaultProps = {
    title: ''
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        label: PropTypes.string,
        percentage: PropTypes.number
    })).isRequired
}

export default Statistics;