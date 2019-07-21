import axios from 'axios';

const KEY = "AIzaSyADjMF1SzxmoyDfGS1hXR9aWPBcYxMB7jY";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});