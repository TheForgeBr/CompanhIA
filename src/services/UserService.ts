import axios from 'axios';

const API_URL = 'http://localhost:4000/api/users';

export const createUser = async (user: { email: string; password: string; name: string }) => {
  const res = await axios.post(`${API_URL}/`, user);
  return res.data;
};

export const updateUserProfile = async (id: string, updates: Partial<{
  avatar_url: string;
  bio: string;
  gender: string;
  birthdate: string;
  language_pref: string;
  timezone: string;
  last_active_at: string;
}>) => {
  const res = await axios.patch(`${API_URL}/${id}`, updates);
  return res.data;
};