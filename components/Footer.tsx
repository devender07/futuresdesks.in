import { Heading } from "./Container"
import Link from "next/link"
const Footer = () => {
  return (
    <footer className= "h-[10vh] flex items-center justify-between px-2 lg:px-10 border-t-2 text-center ">
        <div className="lg:w-1/5 text-base lg:text-lg text-slate-500">
            <Heading>@2024 Futuredesks. All rights reserved.</Heading>
        </div>
        <div className="lg:w-1/5 flex justify-between font-semibold text-base lg:text-lg text-slate-500">
            <Link href='/'>Private policy</Link>
            <Link href='/'>Terms of use</Link>
        </div>
    </footer>
  )
}

export default Footer
