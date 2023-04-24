import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../services/api";
import UserCard from "../UserCard/UserCard";
import { Container, Wrapper, TweetDiv,  Button, Header, Select, Option } from "./Tweets.styled";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("show all");

  useEffect(()=>{
    const getUsersFromMockApi = async () => {
        try {
          const {data} = await fetchUsers(page);
          setUsers([...users, ...data]);

        } catch (error) {
          console.log(error);
        }
    }
    getUsersFromMockApi();
},[page])

useEffect(()=>{
    const filterUpdate = async () => {
        try {
          const {data} = await fetchUsers(page);
          setUsers(data);

        } catch (error) {
          console.log(error);
        }
    }
    filterUpdate();
},[filter])

const filterUsers = (user) => {
    switch (filter) {
      case "show all":
        return true;
      case "follow":
        return !user.isFollowing;
      case "following":
        return user.isFollowing;
      default:
        return false;
    }
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: "column"}}>
      <Header>Tweets</Header>
      <Wrapper>
        <Link to="/">Back to Home</Link>
        <Select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-dropdown"        >
            <Option value="show all">Show All</Option>
            <Option value="follow">Follow</Option>
            <Option value="following">Following</Option>
        </Select>
      </Wrapper>

        <TweetDiv>
            {users.filter(filterUsers).map((user) => (
                <UserCard key={user.id} user={user} />))}
        </TweetDiv>
        <Button onClick={() => {
                    setPage(page + 1);
                    fetchUsers();
                }}>Load More</Button>
    </Container>
  );
};

export default Tweets;