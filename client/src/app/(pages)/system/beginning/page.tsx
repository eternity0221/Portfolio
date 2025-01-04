import Image from "next/image";
import bg from "@public/img/background.png";

export default function BeginningPage () {
    return (
        <>
            <Image src={bg} alt="" fill quality={100} sizes="100vw" className="object-cover"/>
        </>
    )
}