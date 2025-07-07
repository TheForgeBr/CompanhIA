import axios from 'axios';

const API_URL = 'http://localhost:4000/api/conversations';

export const createConversation = async (payload: { userId: string; message: string }) => {
  const res = await axios.post(`${API_URL}/`, payload);
  return res.data;
};

// Exemplo de stream via SSE (Server-Sent Events)
export const streamMessages = (sessionId: string, onMessage: (msg: any) => void) => {
  const eventSource = new EventSource(`${API_URL}/stream?sessionId=${sessionId}`);
  eventSource.onmessage = (event) => {
    onMessage(JSON.parse(event.data));
  };
  return eventSource;
};