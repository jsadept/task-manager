import React from "react";
import Login from "../../pages/auth/Login";
import Registration from "../../pages/auth/Registration";
import Home from "../../pages/app/Home";
import Profile from "../../pages/app/Profile";
import Projects from "../../pages/app/Projects";
import Tasks from "../../pages/app/Tasks";
import {RouteObject} from "react-router-dom";
import Logout from "../../pages/auth/Logout";

export interface IRoute extends RouteObject {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    HOME = '/',
    PROJECTS = '/projects',
    TASKS = '/tasks',
    USER = '/user',
    REG = '/registration',
    LOGIN = '/login',
    LOGOUT = '/logout',
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.REG, component: Registration},
    {path: RouteNames.LOGIN, component: Login},

]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.HOME, component: Home},
    {path: RouteNames.PROJECTS, component: Projects},
    {path: RouteNames.TASKS, component: Tasks},
    {path: RouteNames.USER, component: Profile},
    {path: RouteNames.LOGOUT, component: Logout},
]