import PropTypes from 'prop-types';
import s from './Stats.module.css';

function Stats(props) {
  const { followers = 0, views = 0, likes = 0 } = props.stats;
  return (
    <ul className={s.container}>
      <li className={s.item}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{followers.toLocaleString()}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{views.toLocaleString()}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{likes.toLocaleString()}</span>
      </li>
    </ul>
  );
}

Stats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Stats;
