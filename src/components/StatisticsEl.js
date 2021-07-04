import React from 'react';
// import PropTypes from 'prop-types';


const StatisticsEl = (stat) => {
      return 
          <li class="item" key={stat.id}>
              <span class="label">{stat.label}</span>
              <span class="percentage">{stat.percentage}</span>
          </li>
}


// Statistics.propTypes = {
//     title: PropTypes.string.isRequired,
//     avatar: PropTypes.string,
//     tag: PropTypes.string,
//     location: PropTypes.string,
//     stats: PropTypes.string,
// }

export default StatisticsEl;