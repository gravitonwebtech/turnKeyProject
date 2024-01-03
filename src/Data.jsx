import React from 'react'
import PersonalInfo from './components/PersonalInfo'
import { CgProfile } from "react-icons/cg";
import { BsIncognito } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
export const datas =[
    {
        id:1,
        icon:<CgProfile />,
        text:"PersonalInfo",
    },
    {
        id:2,
        icon:<BsIncognito />,
        text:"Confidential Info",
    },
    {
        id:3,
        icon:<IoShareSocialOutline />,
        text:"Social & Network",
    },
    {
        id:4,
        icon:<IoIosLogOut />,
        text:"Logout",
    }
]