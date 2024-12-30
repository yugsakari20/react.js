import React, { useState } from "react";
import "./UserProfileCard.css";

const UserProfileCard = ({ name, age, bio, location, profilePicture }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="user-profile-card">
      <img
        className="profile-picture"
        src={profilePicture}
        alt={`${name}'s profile`}
      />
      <h2>
        {name}, {age}
      </h2>
      <p className="location">{location}</p>
      <p className="bio">
        {isExpanded ? bio : `${bio.slice(0, 100)}...`}
        {bio.length > 100 && (
          <button onClick={handleReadMoreClick} className="read-more-btn">
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </p>
      <button onClick={handleFollowClick} className="follow-btn">
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default UserProfileCard;
