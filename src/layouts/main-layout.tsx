import { ReactNode, useEffect, useRef, useState } from "react";

interface MainLayoutProps {
    navbar: ReactNode;
    children: ReactNode;
    sidebar: ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({navbar, children, sidebar}) =>{
    const navbarRef = useRef<HTMLDivElement | null>(null);
    const [pageMinHeight, setPageMinHeight] = useState(0);

    useEffect(()=>{
        const handleResize = () => {
            if(navbarRef.current){
                const height = navbarRef.current.offsetHeight;
                setPageMinHeight(height);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        }
    },[]);

    return(
        <div className="flex flex-col w-full h-full">
            <div ref={navbarRef} className="">{navbar}</div>
            <div className={`min-h-[calc(100vh- ${pageMinHeight})] border-2 border-red-500`}>
                <div className="h-full">{sidebar}</div>
                <div className="w-full h-full">{children}</div>
            </div>
        </div>
    )
}

export default MainLayout;