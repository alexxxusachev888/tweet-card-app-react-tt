import axios from "axios";
const BASE_URL = 'https://64444a78466f7c2b4b65808b.mockapi.io/api/v1/users';

export const fetchUsers = async (page) => {
    try {
      const response = await axios.get(`${BASE_URL}?limit=3&page=${page}`);
      return response;
  
    } catch (error) {
      console.log(error);
    }
  }

export const updateFollowers = async (userId, user) => {
    try {
      const response = await axios.put(`${BASE_URL}/${userId}`, user);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
