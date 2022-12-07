import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { FiFolder, FiMessageSquare, FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineCategory, MdContactSupport, MdOutlineExplore, MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { FaSignInAlt } from "react-icons/fa"
import * as Tabs from "@radix-ui/react-tabs";
import { Badge, cx, Icon } from "@vechaiui/react";
import { useRouter } from 'next/router';

const Layout = ({ children, setColor }) => {
    const isAuthenticate = false;
    const router = useRouter();
    let menus = [
        { name: "Explore", link: "/", icon: MdOutlineExplore },
        { name: "Categories", link: "/categories", icon: MdOutlineCategory },
        { name: "Contact", link: "/contact", icon: MdContactSupport },
        { name: "SignIn / SignUp", link: "/auth/sign-in", icon: FaSignInAlt, margin: true },

    ];
    if (isAuthenticate) {
        menus = [
            { name: "Explore", link: "/", icon: MdOutlineExplore },
            { name: "Categories", link: "/categories", icon: MdOutlineCategory },
            { name: "Messages", link: "/messages", icon: FiMessageSquare },
            { name: "Notification", link: "/", icon: TbReportAnalytics },
            { name: "File Manager", link: "/", icon: FiFolder },
            { name: "Cart", link: "/", icon: FiShoppingCart },
            { name: "Saved", link: "/", icon: AiOutlineHeart },
            { name: "Setting", link: "/", icon: RiSettings4Line, margin: true },

        ]
    }
    const [open, setOpen] = useState(true);

    const mode = [
        {
            value: "bee",
            name: "Light",
            icon: MdOutlineLightMode,
            label: "user-circle",
        },
        {
            value: "light",
            name: "Dark",
            icon: MdDarkMode,
            label: "bell",
        },
    ];
    return (
        <div className="lg:flex gap-6 bg-fill">
            {/* ======================= Side bar =========================== */}
            <div
                className={`${open ? "lg:w-1/6 w-screen min-h-screen" : "lg:w-10 w-full lg:min-h-screen"
                    } duration-500 bg-base px-0.5 shadow-lg flex flex-col justify-between`}
            >
                <div>
                    <div className="p-2 flex justify-between">
                        <img src='/images/logo.png' alt='Stack4Rum' className={`${open ? '' : 'lg:w-0'} w-1/2 mx-auto lg:max-h-10 max-h-5 object-contain`} />
                        <HiMenuAlt3
                            size={26}
                            className="cursor-pointer"
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                    <div className={`${open ? 'flex' : 'lg:flex hidden'} mt-2 flex-col gap-2 relative`}>
                        {menus?.map((menu, i) => (
                            <Link
                                href={menu?.link}
                                key={i}
                                className={` ${menu?.margin && "mt-5"
                                    } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-primary-500 ${open ? 'hover:text-neutral-100' : ''} hover:rounded-md ${(menu.link !== '/') ? router.asPath.includes(menu.link) && 'border-r-2 border-primary-500' : (router.asPath === menu.link || router.asPath === '') && 'border-r-2 border-primary-500' }`}
                            >
                                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                                <h2
                                    style={{
                                        transitionDelay: `${i + 1}00ms`,
                                    }}
                                    className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28  overflow-hidden"
                                        }`}
                                >
                                    {menu?.name}
                                </h2>
                                <h2
                                    className={`${open && "hidden"
                                        } absolute left-40 font-semibold whitespace-pre rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:text-neutral-800 group-hover:py-1 group-hover:left-10 group-hover:duration-300 group-hover:w-fit  `}
                                >
                                    {menu?.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <Tabs.Root className={`${open ? '' : 'hidden'} flex flex-col`} defaultValue="tab1">
                        <Tabs.List
                            aria-label="tabs example"
                            className={cx(
                                "flex flex-row justify-start"
                            )}
                        >
                            {mode.map((tab) => (
                                <Tabs.Trigger
                                    key={tab.value}
                                    value={tab.value}
                                    onClick={()=>{
                                        setColor(tab.value)
                                        localStorage.setItem("theme",tab.value)
                                    }}
                                    className={cx(
                                        "px-4 py-2 -mb-px text-sm text-center whitespace-nowrap cursor-base flex w-full focus:outline-none",
                                        "flex-row inline-block",
                                        " bg-transparent border border-transparent",
                                        "selected:bg-base text-neutral-300 selected:text-neutral-900 selected:rounded-tl-md selected:rounded",
                                        // dark
                                        "dark:text-neutral-100 dark:bg-transparent",
                                        "dark:hover:text-neutral-100",
                                        "dark:selected:bg-base",
                                    )}
                                >
                                    <Icon as={tab.icon} label={tab.label} className="w-4 h-4 mr-2" />
                                    <span>{tab.name}</span>
                                    {tab.value === "tab2" && (
                                        <Badge className="ml-2">18</Badge>
                                    )}
                                </Tabs.Trigger>
                            ))}
                        </Tabs.List>
                    </Tabs.Root>
                </div>
            </div>
            {/* ======================= Content ============================ */}
            <div className={`${open && 'lg:block hidden'} min-h-screen overflow-y-auto box-border w-full`}>
                {children}
            </div>
        </div>
    )
}

export default Layout