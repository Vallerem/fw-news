import axios from "axios";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

export default {
  getNews: () => {
    let token = localStorage.getItem("JWT") || null;
    setAuthorizationHeader(token);
    return axios.get("/api/v1/news").then(res => res.data);
  },
  getArticle: id => {
    let token = localStorage.getItem("JWT") || null;
    setAuthorizationHeader(token);
    return axios.get(`/api/v1/news/${id}`).then(res => res.data);
  }
};
