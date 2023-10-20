import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Chat from "./chatbot/Chat.jsx";
import Navbar from "./components/Navbar.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Register from "./pages/Register.jsx";
import Login from "./components/Login.jsx";
import { CategoryPage } from "./pages/CategoryPage.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import Books from "./pages/Books.jsx";
import { CategoryList } from "./components/CategoryList";
import { ArticlesContainer } from "./components/ArticlesContainer.jsx";
import EditProfile from "./pages/editProfile.jsx";
import UserProfile from "./pages/UserProfile.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "home",
    element: (
      <>
        <div className="xl:flex xl:flex-row">
          <Navbar />
        </div>
      </>
    ),
    children: [
      {
        path: "",
        element: (
          <main className="px-4 pt-6 ">
            <div className="lg:flex lg:gap-8">
              <Home />
            </div>
            <ArticlesContainer />
          </main>
        ),
      },

      {
        path: "category-list",
        element: <CategoryList />,
      },

      {
        path: "category/:category",
        element: <CategoryPage />,
      },
      {
        path: "profile/:username",
        element: 
          <UserProfile />,
      },
      {
        path: "edit-profile/:id",
        element: <EditProfile />,
      },
      {
        path: "chat",
        element: (
          <React.StrictMode>
            <Provider store={store}>
              <Chat />,
            </Provider>
          </React.StrictMode>
        ),
      },
      {
        path: "books",
        element: (
          <main className="px-4 pt-6 ">
            <Books />
          </main>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
