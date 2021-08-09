import PropTypes from 'prop-types';
import s from './Profile.module.css';
import Stats from '../Stats';

const Profile = function ({
  name,
  tag,
  location,
  avatar = 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
  stats,
}) {
  return (
    <div className={s.container}>
      <div className={s.profile}>
        <img
          src={avatar}
          alt={`Аватар пользователя ${name}`}
          className={s.avatar}
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <Stats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
};

export default Profile;
