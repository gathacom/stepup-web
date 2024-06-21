import axios from "axios";

export const isAuth = axios.get("https://stepup-server.vercel.app/berandaDev", {withCredentials: true})
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })