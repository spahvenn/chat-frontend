import io from 'socket.io-client';
import axios from 'axios';

const port = 3001;
let location = process.env.REACT_APP_API_URL;
// localhost setup
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  location = window.location.protocol + '//' + window.location.hostname + ':' + port;
}

export function createSocket() {
  const socket = io(location);
  return socket;
}

export function getMessages() {
  return axios.get(location + '/messages', {crossDomain: true});
}
