import io from 'socket.io-client';
import axios from 'axios';

export function createSocket() {
  const socket = io('http://localhost:3001');
  return socket;
}

export function getMessages() {
  return axios.get('http://localhost:3001/messages');
}
