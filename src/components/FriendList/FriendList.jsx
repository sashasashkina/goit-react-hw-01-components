import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map((friend) => {
                return (
                    < FriendListItem
                        key={friend.id} 
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline} />
                );
            })}
        </ul>
    );

};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};