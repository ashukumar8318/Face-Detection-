import { RouterProvider } from 'react-router-dom'
import { router } from './App.routes.jsx'
import "./Feature/shared/styles/global.scss"


const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
