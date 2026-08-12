import { RouterProvider } from 'react-router-dom'
import { router } from './App.routes.jsx'
import "./Feature/shared/styles/global.scss"
import { AuthProvider } from './Feature/Auth/auth.context.jsx'


const App = () => {
  return (
    <AuthProvider>
       <RouterProvider router={router}/>
    </AuthProvider>
   
  )
}

export default App
