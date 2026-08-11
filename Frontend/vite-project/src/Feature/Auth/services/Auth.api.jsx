import axios from "axios";
const api = axios.create({
    baseURL: "https://bug-free-space-spork-pj946vjpvgvp36qqg-3000.app.github.dev/api/auth",
    withCredentials: true,
})

export async function registerUser(email,username,password){
    const response = await api.post("/register", { email, username, password })
    return response.data

}


export async function loginUser(email,username,password){
    const response = await api.post("/login", { email,username, password })

    return response.data

}

export async function getMe(){
    const response = await api.get("/get-me")
    return response.data

}


export async function logoutUser(){
    const response = await api.get("/logout")
    return response.data

}




