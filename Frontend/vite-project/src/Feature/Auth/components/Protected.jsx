import React from 'react'
import { useAuth } from '../hooks/useAuth'



const Protected = ({children}) => {
    const{user,loading} = useAuth()
  return (
    <div>

        

      
    </div>
  )
}

export default Protected
