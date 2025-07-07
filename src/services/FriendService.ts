import axios from 'axios';

const API_URL = 'http://localhost:4000/api/friends';

export const getFriendSuggestions = async (userId: string) => {
  const res = await axios.get(`${API_URL}/suggestions`, {
    params: { userId },
  });
  return res.data;
};