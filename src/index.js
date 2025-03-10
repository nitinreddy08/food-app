import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Menucard from './components/Menucard';


const Routes = createBrowserRouter([
    {
        path: "/",
        element : <App/>,
        errorElement: <Error/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path : "/contact",
        element : <Contact/>
    },
    {
        path: "/restraunt/:resid",
        element:<Menucard></Menucard>
    }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {Routes} />);

