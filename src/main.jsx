import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './index.css'
import App from './App.jsx'
import About from "./Component/About.jsx"
import Contact from "./Component/Contact.jsx"
import CableCalutor from "./Component/CableCalutor"
import {Product} from './Component/Product.jsx';
import FAQPage from './Component/FAQ-Page';

const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/About", 
    element:<About/>
  },
  {
    path:"/Contact", 
    element:<Contact/>
  },
  {
    path:"/CableCalutor", 
    element:<CableCalutor/>
  },
  {
    path:"/Faq-Page", 
    element:<FAQPage/>
  },
  {
    path:"/products/:category", 
    element:<Product/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
