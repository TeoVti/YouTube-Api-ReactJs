import axios from "axios";

const KEY = "AIzaSyCFwpTCqXDzUp13iRZD-Z6T1JPw_C42iAQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
