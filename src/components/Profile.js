import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ name, avatar, tag, location, stats}) => {

   return <div class="profile" key={name}>
        <div class="description">
            <img
            src={avatar}
            alt="Аватар пользователя"
            class="avatar"
            />
            <p class="name">{name}</p>
            <p class="tag">{tag}</p>
            <p class="location">{location}</p>
        </div>

        <ul class="stats">
            <li>
            <span class="label">Followers</span>
            <span class="quantity">{stats.followers}</span>
            </li>
            <li>
            <span class="label">Views</span>
            <span class="quantity">{stats.views}</span>
            </li>
            <li>
            <span class="label">Likes</span>
            <span class="quantity">{stats.likes}</span>
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