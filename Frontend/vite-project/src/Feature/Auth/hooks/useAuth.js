import {registerUser,loginUser,getMe,logoutUser} from "../services/Auth.api"
import { useContext } from "react"
import { AuthContext } from "../auth.context"
import { useEffect } from "react"

export const useAuth=()=>{
    const context = useContext(AuthContext)
    const{user,setUser,loading,setLoading} = context

    async function handleRegister({username,email,password}){
        setLoading(true)
        const data = await registerUser({username,email,password})
        setUser(data.user)
        setLoading(false)
    }

    async function handleLogin({username,email,password}){
        setLoading(true)
        const data = await loginUser({ username,email,password}) 
        setUser(data.user)
        setLoading(false)

    }

    async function handleGetme(){
        setLoading(true)
        const data = await getMe()
        setUser(data.user)
        setLoading(false)

    }

    async function handleLogout(){
        setLoading(true)
        const data = await logoutUser()
        setUser(null)
        setLoading(false)
    }

    useEffect(()=>{
        handleGetme()
    },[])

    return({
        user,loading,handleRegister,handleLogin,handleGetme,handleLogout
    })

}