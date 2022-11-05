import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Contact from './pages/contact.jsx'
import Footer from "./components/footer.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='main'>
    <RouterProvider router={router} />
    <Footer />
  </div>
);
