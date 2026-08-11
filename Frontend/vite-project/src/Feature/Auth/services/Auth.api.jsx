import axios from "axios";
const api = axios.create({
    baseURL: "https://bug-free-space-spork-pj946vjpvgvp36qqg-3000.app.github.dev/api/auth",
    withCredentials: true,
})

export async function registerUser(){
    const response = await api.post("/register")
    return response.data

}


export async function loginUser(){
    const response = api.post("/login")
    return response.data

}


