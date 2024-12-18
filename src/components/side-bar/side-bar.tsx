const sideBarItems = [
    {
        display: "Home",
        route: "/home"
    },
    {
        display: "Home",
        route: "/home"
    },
    {
        display: "Home",
        route: "/home"
    },
    {
        display: "Home",
        route: "/home"
    },
    {
        display: "Home",
        route: "/home"
    },
]

const SideBar=()=>{
    return(
        <div className="h-full">
            <div className="w-32 bg-black h-full py-8">
                <div className="w-full h-full flex flex-col gap-8">
                    {
                        sideBarItems.map((item)=>(
                            <div className="h-10 text-white text-center flex items-center justify-center cursor-pointer hover:bg-blue-300">
                                {item.display}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBar;