import css from './FriendListItem.module.css';
import clsx from 'clsx';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(css.offline, {
          [css.online]: isOnline,
        })}
      >
        {isOnline ? 'online' : 'offline'}
      </p>
    </div>
  );
}

export default FriendListItem;
