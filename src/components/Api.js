import axios from "axios";

export default axios.create({
    baseURL: "https://catmash-api--eridel.herokuapp.com/images",
    headers: {
        "Accept": "application/json",
    }
})