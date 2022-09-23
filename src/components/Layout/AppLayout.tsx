import React, {FC, ReactNode, useEffect, useState} from 'react'
import {ArrowRightOnRectangleIcon, FolderIcon, InboxIcon, UsersIcon,} from '@heroicons/react/24/outline'
import Main from "./Main/Main";
import MobileSidebar from "./Sidebar/MobileSidebar";
import Sidebar from "./Sidebar/Sidebar";
import PageHeader from "./Page/PageHeader";
import {RouteNames} from './../../router/routes/routes';


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


interface AppLayoutProps {
    children?: ReactNode;
}


const AppLayout: FC<AppLayoutProps> = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const [navigation, setNavigation] = useState<any[]>([])


    useEffect(() => {
        if (RouteNames) {
            setNavigation([
                {name: 'Projects', href: RouteNames.PROJECTS, icon: FolderIcon, current: true},
                {name: 'Tasks', href: RouteNames.TASKS, icon: InboxIcon, current: false},
                {name: 'Profile', href: RouteNames.USER, icon: UsersIcon, current: false},
                {name: 'Log out', href: RouteNames.LOGOUT, icon: ArrowRightOnRectangleIcon, current: false},
            ])
        }
    }, [RouteNames])

    return (
        <>
            <div>
                <MobileSidebar {...{sidebarOpen, setSidebarOpen, navigation}} />

                <Sidebar  {...{navigation}}/>


                <div className="md:pl-64 flex flex-col">

                    <PageHeader {...{setSidebarOpen}} />

                    <Main>
                        {children}
                    </Main>

                </div>
            </div>
        </>
    )
};

export default AppLayout;
