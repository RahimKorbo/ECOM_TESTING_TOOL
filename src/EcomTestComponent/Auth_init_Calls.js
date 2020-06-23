import { authInit } from "../Constants";
import Axios from "axios";


export function auth_init_call(json){
    const token = sessionStorage.getItem("token");
    return Axios.request({
        method: "POST",
        data: json,
        url: authInit,
        headers: { Authorization: token, "Content-Type": "application/json" },
    })
    .then(res => res)
        // .catch(err => alert(err));
}