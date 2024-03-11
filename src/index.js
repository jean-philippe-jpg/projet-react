import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './routes/ErrorPage.js'
import Convertion from './routes/Convertion.js'
import Reprog from './routes/Reprog.js'
import Boutique from './routes/Boutique.js'
import Stages from './routes/Stages.js'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
//import { element } from 'prop-types';

const router = createBrowserRouter( [

  {
    path : "/",
    element : <App/>,
    errorElement : <ErrorPage/>,
    children : [

      {

        path : "reprog",
        element : <Reprog/>
      },
      {
        path : "convertion",
         element : <Convertion/>
     },

     {
      path : "boutique",
       element : <Boutique/>
 
   },
   {
    path : "stages",
     element : <Stages/>

 }

    ]
  },

 
      
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
