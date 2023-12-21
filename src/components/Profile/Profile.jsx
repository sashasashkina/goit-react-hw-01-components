import css from "./Profile.module.css";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    console.log(Profile);
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt={username}
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.Views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.Likes}</span>
        </li>
      </ul>
    </div>
  );
}
// export default Profile;