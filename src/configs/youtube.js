import axios from "axios";

const KEY = "AIzaSyDLHLaOVfJiEpKcrMjX_l8qf6Pov92jh_U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
