import css from '../Profile/Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.photoContainer}>
        <img className={css.picture} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileInfo}>{tag}</p>
        <p className={css.profineInfo}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className="stats-item">Followers</span>
          <span className="stats-numbers">{stats.followers}</span>
        </li>

        <li className={css.listItem}>
          <span className="stats-item">Views</span>
          <span className="stats-numbers">{stats.views}</span>
        </li>

        <li className={css.listItem}>
          <span className="stats-item">Likes</span>
          <span className="stats-numbers"> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
