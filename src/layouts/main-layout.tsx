import { ReactNode, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

interface MainLayoutProps {
    navbar: ReactNode;
    children: ReactNode;
    sidebar: ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({navbar, children, sidebar}) =>{
    const navbarRef = useRef<HTMLDivElement | null>(null);
    const [pageMinHeight, setPageMinHeight] = useState(0);
    const location = useLocation();

    const hassSideBar = String(location.pathname) != "/login";

    useEffect(()=>{
        if(navbarRef.current){
            const height = navbarRef.current.offsetHeight;
            setPageMinHeight(height);
        }
        console.log(location, hassSideBar)
    },[]);

    return(
        <div className="flex flex-col w-full h-full">
            <div ref={navbarRef} className="">{navbar}</div>
            <div className="flex flex-grow min-h-full"
            style={{
                height:  `calc(100vh - ${pageMinHeight}px)`
            }}>
                <div className="h-full">{hassSideBar && sidebar}</div>
                <div className="w-full h-full">{children}</div>
            </div>
        </div>
    )
}

export default MainLayout;