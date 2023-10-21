"use client"
import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "../constants/index"
import Button from "./Button"
import { useState } from 'react'
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <nav className="  flexBetween max-container padding-container relative z-30 py-5">
            <Link href={"/"}>
                <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link key={link.key} href={link.href} className=" regular-16 text-gray-50 flexCenter pb-1.5 transition-all hover:font-bold " >{link.label}</Link>
                ))}
            </ul>
            <div className=" lg:flexCenter hidden">
                <Button title={"Login"} type="button" icon=" /user.svg" variant="btn_dark_green" />
            </div>

            <div onClick={() => setOpenMenu(!openMenu)}>

                <Image src={'/menu.svg'} alt="menu" width={30} height={30} className=" inline-block cursor-pointer lg:hidden" />

            </div>
        </nav>
    )
}

export default Navbar
