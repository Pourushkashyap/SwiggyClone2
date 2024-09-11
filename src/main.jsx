import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Search from './components/Search.jsx'
import Cart from './components/Cart.jsx'
import Help from './components/Help.jsx'
import Signin from './components/Signin.jsx'
import Offer from './components/Offer.jsx'
import MainSection from './components/MainSection.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/Store.js'
import Restaurent from './components/Restaurent.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path: '',
        element: <MainSection />,
      },
      {
        path:'/search',
        element:<Search/>
      },
      {
        path:'/offer',
        element:<Offer/>
      },
      {
        path:'/signin',
        element:<Signin/>
      },
      {
        path:'/help',
        element:<Help/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path: '/restaurent',
        element: <Restaurent />
      }
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
   <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>,
)
