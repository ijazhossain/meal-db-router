import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Restaurant from './components/Restaurant/Restaurant';
import Home from './components/Home/Home';
import FirstCompo from './components/FirstCompo/FirstCompo';
import About from './components/About/About';
import SingleMealDetails from './components/SingleMealDetails/SingleMealDetails';
import NotFound from './components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <FirstCompo />
      },
      {
        path: 'restaurant',
        element: <Restaurant />,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken')
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'meal/:mealId',
        element: <SingleMealDetails />,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
      },
      {
        path: '*',
        element: <NotFound />
      }

    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
