import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../services/api";
import UserCard from "./UserCard";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=>{
    const getUsersFromMockApi = async () => {
        try {
          const {data} = await fetchUsers(page);
          console.log(data)
          setUsers([...users, ...data]);

        } catch (error) {
          console.log(error);
        }
    }
    getUsersFromMockApi();
},[page])

  return (
    <div>
      <h1>Tweets</h1>
      <Link to="/">Back to Home</Link>
        <div className="app">
            <h1>Twitter Cards</h1>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
                <button onClick={() => {
                    setPage(page + 1);
                    fetchUsers();
                }}>Load More</button>
        </div>
    </div>
  );
};

export default Tweets;