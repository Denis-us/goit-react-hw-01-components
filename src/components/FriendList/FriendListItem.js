import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return <li className={styles.item} key={id}>
                <span className={isOnline === true ? styles.isOnline : styles.isOffline}>{isOnline}</span>
                <img className={styles.avatar} src={avatar} alt={name} width="48" />
                <p className={styles.name}>{name}</p>
            </li>
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        isOnline: PropTypes.string,
        avatar: PropTypes.string,
        name: PropTypes.string
    })).isRequired
}

export default FriendListItem