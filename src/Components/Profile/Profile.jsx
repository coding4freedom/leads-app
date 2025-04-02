
import "../../styles/Profile.css";

export default function Profile({ src, username="unknown", title="unknown" }) {

    return (
        <div className="profile">
            <img className="profile-pic" src={src} alt="profile image" />
            <div className="profile-user--wrapper">
                <span className="profile-username">{username}</span>
                <span className="profile-user--title">{title}</span>
            </div>
        </div>
    )
}