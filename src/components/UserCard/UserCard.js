import React, { useState, useEffect } from "react";
import { updateFollowers } from "../../services/api";
import { Card, Questions, Logo, Avatar, Divider, AvatarWrapper, StatsWrapper, Tweets, Folowers, Button } from "./UserCard.styled";
import questionsPicture from '../../assets/images/questions.png'
import logo from '../../assets/images/logo.png'

const UserCard = ({ user }) => {
    const storedFollowing = localStorage.getItem(`user-${user.id}`);
    const initialFollowing = storedFollowing ? JSON.parse(storedFollowing) : user.isFollowing;
    const [following, setFollowing] = useState(initialFollowing);
    const [followers, setFollowers] = useState(user.followers);

  useEffect(() => {
    localStorage.setItem(`user-${user.id}`, following);
  }, [following, user.id]);
  
  const updateUserApi = async (updatedFollowing, updatedFollowers) => {
    try {
      const updatedUser = { ...user, followers: updatedFollowers, isFollowing: updatedFollowing };
      await updateFollowers(user.id, updatedUser);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleFollow = () => {
    const updatedFollowing = !following;
    const updatedFollowers = updatedFollowing ? followers + 1 : followers - 1;
    setFollowing(updatedFollowing);
    setFollowers(updatedFollowers);
    updateUserApi(updatedFollowing, updatedFollowers);
  };

  const { name, avatar, tweets } = user;

  return (

    <Card>
      <Questions src={questionsPicture} alt='questions' />
      <Logo src={logo} alt='goit logo' />
      <Divider></Divider>
      <StatsWrapper >
        <AvatarWrapper>
            <Avatar src={avatar} alt='user avatar' />
        </AvatarWrapper>
            <Tweets>{tweets} Tweets</Tweets>
            <Folowers>{followers.toLocaleString()} Followers</Folowers>
            
            <Button onClick={toggleFollow}>
            {following ? "Following" : "Follow"}
             </Button>
      </StatsWrapper>
    </Card>
  );
};

export default UserCard;