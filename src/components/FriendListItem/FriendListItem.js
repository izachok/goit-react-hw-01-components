import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({
  id,
  avatar = 'https://www.flaticon.com/svg/static/icons/svg/1077/1077012.svg',
  name,
  isOnline = false,
}) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
