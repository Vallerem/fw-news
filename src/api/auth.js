import Validator from "validator";
import axios from "axios";
export default {
    login: credentials =>
      axios.post("/api/auth", { credentials }).then(res => res.data.user),

    validateToken: token => axios.post("/api/auth/validate_token", { token }),
    resetPassword: data => axios.post("/api/auth/reset_password", { data })
};