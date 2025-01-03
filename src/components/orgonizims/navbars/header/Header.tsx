"use client"

import useDateTimeClock from "@hooks/system/useDateTimeClock"

export default function Header () { 

    const timeServer = useDateTimeClock("Hor:Min:Sec");
        
    const timeLocal = useDateTimeClock("Hor:Min:Sec");

    return (
        <header className="h-[56px]">
            <div className="container h-full">
                <nav className="flex justify-between items-center w-full h-inherit">
                    <div className="flex uppercase items-end">
                        <p className="text-[#7DFF68] font-BigShouldersDisplay text-2xl">48</p>
                        <p className="text-white/50 font-BigShouldersDisplay text-base ml-1">Level</p>

                        <p className="text-[#7DFF68] font-BigShouldersDisplay text-2xl ml-1">1,425</p>
                        <p className="text-white/50 font-BigShouldersDisplay text-base ml-1">coins awarded</p>
                    </div>
                    <div className="flex uppercase">
                        <p className="text-[#ffffff] font-BigShouldersDisplay">credits</p>
                        <p className="text-white/50 font-BigShouldersDisplay ml-7">server time:</p> <p className="text-[#ffffff] font-BigShouldersDisplay ml-1">{timeServer.dateTime}</p>
                        <p className="text-white/50 font-BigShouldersDisplay ml-7">local time:</p> <p className="text-[#ffffff] font-BigShouldersDisplay ml-1">{timeLocal.dateTime}</p>
                    </div>
                </nav>
            </div>
        </header>
    )
}