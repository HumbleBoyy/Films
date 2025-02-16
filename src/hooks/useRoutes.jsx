import React from "react";
import { NowPlaying, Popular, TopRated, Upcoming } from "../pages";
import { PATH } from "./usePath";


export const pageRoutes = [
    {
        id:1,
        path:PATH.home,
        element:<NowPlaying/>
    },
    {
        id:2,
        path:PATH.popular,
        element:<Popular/>
    },
    {
        id:3,
        path:PATH.topRated,
        element:<TopRated/>
    },
    {
        id:4,
        path:PATH.upcoming,
        element:<Upcoming/>
    },
]

export const navbarList = [
    {
        id:1,
        path:PATH.home,
        title:"Now Playing"
    },
    {
        id:2,
        path:PATH.popular,
        title:"Popular"
    },
    {
        id:3,
        path:PATH.topRated,
        title:"Top Rated"
    },
    {
        id:4,
        path:PATH.upcoming,
        title:"Upcoming"
    }
]