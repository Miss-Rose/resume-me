import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.scss';
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import {Game} from "./pages/game/Game.jsx";
import {NavMenu} from "./components/navmenu/NavMenu.jsx";
import {ThemeProvider} from "./context/ThemeContext.jsx";
import MyPage from "./pages/myPage/MyPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MyPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/game",
    element: <Game />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <NavMenu />
        <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>,
)
