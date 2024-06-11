import axios from "axios";

const apiUrl = "https://server-pi-orpin.vercel.app/api/portfolio"
export const getPortfolios = async (callback) => {
    await axios.get(apiUrl)
    .then(res => {
        callback(res.data)
    }).catch(err => {
        console.log(err)
    })
}