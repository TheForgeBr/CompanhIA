import axios from 'axios';

const API_URL = 'http://localhost:4000/api/assistants';

export const createAssistant = async (assistant: any) => {
  const res = await axios.post(`${API_URL}/`, assistant);
  return res.data;
};

export const listAssistants = async () => {
  const res = await axios.get(`${API_URL}/`);
  return res.data;
};

export const updateAssistant = async (id: string, updates: any) => {
  const res = await axios.patch(`${API_URL}/${id}`, updates);
  return res.data;
};

export const deleteAssistant = async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
};