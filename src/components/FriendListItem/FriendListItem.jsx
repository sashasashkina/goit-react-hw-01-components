import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
            {isOnline ? (
                <span className={css.statusOnline}></span>
            ) : (
                <span className={css.statusOffline}></span>
            )}
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};


FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

