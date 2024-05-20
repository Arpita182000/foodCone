import React, { lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import PagesWithId from './pages/PagesWithId';
import ErrorPage from './pages/ErrorPage';
import AppStore from './utils/AppStore';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
  const Grocery = lazy(()=>import("./Grocery/Grocery"));
 
const route = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<ErrorPage/>
  },
  {
    path:'/pageswithId/:id',
    element:<Provider store={AppStore} ><PagesWithId/></Provider>,
  }
  ,{
    path:'/Grocery',
    element:<Suspense fallback={<h1>loading.....</h1>}><Grocery/></Suspense>,
  }
  ,{
    path:'/cart',
    element:<Provider store={AppStore} ><Cart/></Provider>,
  }
])
root.render(<RouterProvider router={route}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
