import css from './FriendListItem.module.css';
function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
}

export default FriendListItem;
