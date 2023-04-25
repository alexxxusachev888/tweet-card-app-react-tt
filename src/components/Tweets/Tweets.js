import { useState, useEffect } from "react";
import { UserCard} from "../UserCard/UserCard";
import { Spinner } from "../Spinner/Spinner";
import { fetchUsers } from "../../services/api";
import { Container, Wrapper, TweetDiv, CenteredImg, Button, Header, Select, Option, StyledLink} from "./Tweets.styled";
import homer from "../../assets/images/the-simpsons-homer.gif";

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("show all");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(()=>{
    const getUsersFromMockApi = async () => {
        try {
          setIsLoading(true);
          const {data} = await fetchUsers(page);
            if(data.length <= 0) {
              setIsEmpty(true)
            }
          setUsers([...users, ...data]);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
    }
    getUsersFromMockApi();
},[page])

useEffect(()=>{
    const filterUpdate = async () => {
        try {
          setIsLoading(true);
          const {data} = await fetchUsers(page);
          setUsers(data);
          setIsLoading(false);

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
  const filteredUsers = users.filter(filterUsers);

  const loadMoreUsers = async () => {
    setPage(page + 1);
    try {
      setIsLoading(true);
      await fetchUsers(page);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header>Tweets</Header>
      <Wrapper>
        <StyledLink to="/">Back to Home</StyledLink>
        <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-dropdown"        >
            <Option value="show all">Show All</Option>
            <Option value="follow">Follow</Option>
            <Option value="following">Following</Option>
        </Select>
      </Wrapper>

      {isLoading ? <Spinner/> : <>
        <TweetDiv>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
          ) : (<CenteredImg> 
                <img src={homer} alt="homer is waiting th the tweets"/>
              </CenteredImg>)}
          </TweetDiv>
          {filteredUsers.length > 0 && !isEmpty && <Button onClick={loadMoreUsers}>Load More</Button>}
      </>}
    </Container>
  );
};