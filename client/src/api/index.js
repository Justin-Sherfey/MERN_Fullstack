import axios from 'axios';

const url = 'http://localhost:5000/posts';

// utilize axios to connect to mongodatabase server utilizing URI
export const featchPosts = () => axios.get(url);