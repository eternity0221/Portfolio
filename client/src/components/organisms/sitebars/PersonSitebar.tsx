"use client"
import Image from "next/image";
import ava from "@public/img/ava.jpg";

import { IoMdBluetooth } from "react-icons/io";
import { FaHubspot } from "react-icons/fa";

import Frame from "@molecules/additional/Frame";

export default function PersonSitebar () { 

    const personInfo = [
        {labe: "name", desc: "乃ﾚﾘﾑｲ"},
        {labe: "occupation", desc: "web developer"},
        {labe: "corporation", desc: "legacy.ai"},
    ];

    const links = [
        {label: "availability", desc: "open for hire", icon: <FaHubspot className="text-primary duration-500 group-hover:text-white" size={18} />},
        {label: "social", desc: "open connection", icon: <IoMdBluetooth className="text-primary duration-500 group-hover:text-white" size={18} />},
    ];

    return (
    <div className="flex flex-col gap-6">
        <div className="flex flex-center flex-start p-3 border border-solid border-primary/50 relative">
            <Image src={ava} alt="" height={164} width={164} quality={100} className="object-cover rounded-sm w-[164px] h-[164px]"/>
            <Frame />
        </div>
        <div className="flex flex-col gap-2 uppercase">
            {personInfo.map((item, index) =>
                <div key={`person-info-${index}`}>
                    <p className="text-white font-Iceland text-sm mb-1">{item.labe}</p>
                    <p className="text-primary font-BigShouldersDisplay text-lg">{item.desc}</p>
                </div>
            )}
            {links.map((item, index) =>
                <div key={`person-link-${index}`}>
                    <p className="text-white font-Iceland text-sm mb-1">{item.label}</p>
                    <button className="outline-none flex items-center group px-3 justify-between gap-2 border border-solid border-primary uppercase text-primary font-BigShouldersDisplay text-lg w-full py-1 hover:border-white hover:text-white duration-500">
                        {item.desc}
                        {item.icon}
                    </button>
                </div>
            )}
        </div>
    </div>
    )
}