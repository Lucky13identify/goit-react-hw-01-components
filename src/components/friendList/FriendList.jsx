import PropTypes from 'prop-types';
import { FriendListItem } from 'components/friendListItem/FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(({ avatar, id, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          id={id}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
