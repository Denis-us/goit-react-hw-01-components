import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';


const Profile = ({ name, avatar, tag, location, stats}) => {

   return <div className={styles.profile} key={name}>
        <div className={styles.description}>
            <img
            src={avatar}
            alt="Аватар пользователя"
            className={styles.avatar}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
            <li className={styles.list}>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{stats.followers}</span>
            </li>
            <li className={styles.list}>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{stats.views}</span>
            </li>
            <li className={styles.list}>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{stats.likes}</span>
            </li>
        </ul>

    </div>
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.string,
}

export default Profile;