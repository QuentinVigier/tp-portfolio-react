import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'aos/dist/aos.css'
import AOS from 'aos'
import App from './App.tsx'
import Portfolio_details from './components/Portfolio_details.tsx'

AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/portfolio_details",
    element: <Portfolio_details />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
