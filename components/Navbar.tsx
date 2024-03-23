import Image from "next/image"
import Link from "next/link"
import {links} from "@/constants/constants"
import {WhatsAppButton } from "./Button"
import Sidebar from "./Sidebar"

const Navbar = () => {
  return (
    <>
    <nav className="h-[5rem] w-full flex justify-between px-10 lg:justify-around items-center sticky top-0 bg-body">
        <div>
            <Image src={'./cap.svg'} height={100} width={100} alt="" className="h-20 w-20"/>
        </div>
        <div className="hidden lg:flex w-[600px] justify-evenly text-xl font-semibold ">
            {links.map((link,index)=>(
                <Link key={index} href={link.link} className="hover:text-purple-600">{link.name}</Link>
                ))}
        </div>
        <div>
            <WhatsAppButton className="hidden lg:flex items-center gap-2" ><Image src={'./whatsapp.svg'} height={30} width={30} alt="whatsapp-logo"/>Chat On WhatsApp </WhatsAppButton>
            <Sidebar className="lg:hidden "/>
        </div>
        
    </nav>
    </>
  )
}

export default Navbar
