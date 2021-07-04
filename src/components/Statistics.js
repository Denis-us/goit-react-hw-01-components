import React from 'react';
// import PropTypes from 'prop-types';
import StatisticsEl from './StatisticsEl';


const Statistics = ({title, stats}) => {
    return <section>
        <h2 class="title">{title}</h2>
            <ul>
            {stats.map((stat) => (
                    <StatisticsEl
                    />
                ))}
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