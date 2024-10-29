import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
// import { RouterProvider } from 'react-router'
import CreateTrip from './create-trip'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>

  }, 
  {
    path:'/create-trip', 
    element:<CreateTrip/>
  }


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
