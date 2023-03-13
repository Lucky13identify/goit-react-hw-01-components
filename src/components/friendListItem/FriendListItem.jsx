import PropTypes from 'prop-types';
import { Online, Offline } from './FriendListItem.styled';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return isOnline ? (
    <Online className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Online>
  ) : (
    <Offline className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Offline>
  );
};

// FriendListItem.propTypes = PropTypes.shape({
//   avatar: PropTypes.string,
//   name: PropTypes.string,
//   isOnline: PropTypes.bool,
//   id: PropTypes.number.isRequired,
// });
