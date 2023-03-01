import PropTypes from 'prop-types';
import { Online, Offline } from './FriendListItem.styled';

export const FriendListItem = array =>
  array.friends.friends.map(({ avatar, name, isOnline, id }) => {
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
  });

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
      })
    ),
  }),
};
