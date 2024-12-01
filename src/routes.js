import { ADMIN_ROUTE, BUY_ROUTE, LIBRARY_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE , ABOUTBOOK_ROUTE, MAINPAGE_ROUTE, USER_ROUTE, USERLIST_ROUTE } from "./utilis/consts";
import Admin from "./pages/Admin";
import Buy from "./pages/Buy";
import Library from "./pages/Library";
import Auth from "./pages/Auth";
import AboutBook from "./pages/AboutBook";
import MainPage from './pages/MainPage';
import { Component } from "react";
import UserList from "./pages/UserList";
import Profile from "./pages/UserItem";
export const authRoutes = [
    {
        path: ADMIN_ROUTE, 
        Component: Admin
    }, 
    {
        path: BUY_ROUTE, 
        Component: Buy+ '/:id'
    },
    {
        path: USER_ROUTE, 
        Component: Profile+ '/:id'
    },
    {
        path: USERLIST_ROUTE, 
        Component: UserList
    }

]

export const publicRoutes = [
    {
        path: LIBRARY_ROUTE, 
        Component: Library 
    }, 
    {
        path:MAINPAGE_ROUTE,
        Component: MainPage
    },
    {
        path: LOGIN_ROUTE, 
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE, 
        Component: Auth
    },
    {
        path:ABOUTBOOK_ROUTE + '/:id', 
        Component :AboutBook
    }

]