import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.container}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
