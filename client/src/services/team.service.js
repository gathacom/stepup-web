import axios from "axios";

const apiUrl = "https://server-pi-orpin.vercel.app/api/teams"
export const getTeams = async (callback) => {
    await axios.get(apiUrl)
    .then(res => {
        callback(res.data)
    }).catch(err => {
        console.log(err)
    })
}