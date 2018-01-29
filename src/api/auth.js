import axios from "axios";

export default {
  login: credentials => axios.post("/login", credentials).then(res => res.data)
};
