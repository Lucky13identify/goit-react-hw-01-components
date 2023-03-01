import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar }) => {
  return (
    <div className="profile">
      <div key={tag} className={css.description}>
        <img src={avatar} alt="User avatar" className={css.userAvatar} />
        <p className={css.userName}>{username}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
