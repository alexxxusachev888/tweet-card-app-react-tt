import React, { useState, useEffect } from "react";
import { updateFollowers } from "../services/api";

const UserCard = ({ user }) => {
  const [following, setFollowing] = useState(localStorage.getItem(`user-${user.id}`) || false);
  console.log('following-useState', following)
  const [followers, setFollowers] = useState(user.followers);

  useEffect(() => {
    const storedFollowing = localStorage.getItem(`user-${user.id}`);
    if (storedFollowing) {
      setFollowing(JSON.parse(storedFollowing));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`user-${user.id}`, following);
  }, [following, user.id]);
  
  const updateUserApi = async ()=> {
    try {
        const updatedUser = { ...user, followers: followers, isFollowing: following};
        await updateFollowers(user.id, updatedUser);
      } catch (error) {
        console.log(error);
      }
}

  const toggleFollow = async () => {
    const updatedFollowers = following ? followers + 1 : followers - 1;
    setFollowing(!following);
    setFollowers(updatedFollowers);
    updateUserApi();
  }


  const { name, avatar, tweets } = user;

  return (

    <div className="user-card">
      <img src={avatar} alt={name} />
      <div className="user-details">
        <h2>{name}</h2>
        <p>{tweets} Tweets</p>
        <p>{followers.toLocaleString()} Followers</p>
        <button
          className={following ? "following" : ""}
          onClick={toggleFollow}
        >
          {following ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default UserCard;