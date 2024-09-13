import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import Navbar from "./Navbar"
import "../index.css"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10">
        <div className="px-4 flexBetween py-3 max-xs:px-2">
            <div>
                <Link><img src={logo} height={66} width={88} alt="" /></Link>
            </div>
             
            <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}/>
            <div>Buttons</div>
        </div>
    </header>
  )
}

export default Header
