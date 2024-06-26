import axios from "axios";

const apiUrl = "http://localhost:8080/api/portfolio"
export const getPortfolios = async (callback) => {
    await axios.get(apiUrl)
    .then(res => {
        callback(res.data)
    }).catch(err => {
        console.log(err)
    })
}