import PropTypes from 'prop-types';
import { FriendListItem } from 'components/friendListItem/FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = friends => {
  return (
    <List className="friend-list">
      <FriendListItem friends={friends} />
    </List>
  );
};
