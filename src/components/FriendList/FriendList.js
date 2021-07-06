import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';



const FriendList = ({friends}) => {
    return <ul className={styles.list}>
        {friends.map((friend) => (  
            <li className={styles.item} key={friend.id}>
                <span className={friend.isOnline === true ? styles.isOnline : styles.isOffline}>{friend.isOnline}</span>
                <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
                <p className={styles.name}>{friend.name}</p>
            </li>
        ))}
    </ul>
}

FriendList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        isOnline: PropTypes.string,
        avatar: PropTypes.string,
        name: PropTypes.string
    })).isRequired
}

export default FriendList;