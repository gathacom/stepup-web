import axios from "axios";

export const isAuth = axios.get("http://localhost:8080/berandaDev", {withCredentials: true})
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })