"use client"

import Image from "next/image"
import frame from "@public/img/frame.png"
import ava from "@public/img/ava.jpg"

export default function PersonSitebar () { 

    return (
    <div className="flex flex-col pl-[78px] pr-[16px]">
        <div className="flex flex-center flex-start p-3 border border-solid border-primary/50 relative">
            <Image src={ava} alt="" height={164} width={164} quality={100} className="object-cover w-[164px] h-[164px]"/>
            <Image src={frame} alt="" quality={100} height={8} width={8} className="absolute object-contain left-0 top-0"/>
            <Image src={frame} alt="" quality={100} height={8} width={8} className="absolute object-contain right-0 top-0 rotate-90"/>
            <Image src={frame} alt="" quality={100} height={8} width={8} className="absolute object-contain right-0 bottom-0 rotate-180"/>
            <Image src={frame} alt="" quality={100} height={8} width={8} className="absolute object-contain left-0 bottom-0 -rotate-90"/>
        </div>
        <div className="uppercase">
            <p className="text-white font-Iceland text-sm">NAME</p>
            <p className="text-primary font-BigShouldersDisplay text-lg">Luz Wintheiser</p>

            <p className="text-white font-Iceland text-sm">occupation</p>
            <p className="text-primary font-BigShouldersDisplay text-lg">web developer</p>

            <p className="text-white font-Iceland text-sm">corporation</p>
            <p className="text-primary font-BigShouldersDisplay text-lg">Legacy.ai</p>
            
            <p className="text-white font-Iceland text-sm">availability</p>
            <button className="bg-primary uppercase text-black font-BigShouldersDisplay text-lg w-full py-1 hover:text-primary hover:bg-white duration-500">open for hire</button>

            <p className="text-white font-Iceland text-sm">social</p>
            <button className="border border-solid border-primary uppercase text-primary font-BigShouldersDisplay text-lg w-full py-1 hover:border-white hover:text-white duration-500">open connection</button>
        </div>
    </div>
    )
}