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

            <div onClick={() => setOpenMenu(!openMenu)} >

                <Image src={'/menu.svg'} alt="menu" width={30} height={30} className=" inline-block cursor-pointer lg:hidden" />

            </div>
            <div
                className={openMenu ? "fixed left-0 top-0 w-full h-screen bg-black/60" : "hidden"}
            >
                <div
                    className={
                        openMenu
                            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                    }>
                    <div className=" flex justify-between ">
                        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
                        <Image src={'/menu.svg'} alt="menu" width={30} height={30} className=" inline-block cursor-pointer" onClick={() => setOpenMenu(!openMenu)} />
                    </div>
                    <div className=" flex flex-col mt-24 gap-7">
                        <ul className=" flex flex-col  justify-start gap-7">
                            {NAV_LINKS.map((link) => (
                                <Link key={link.key} href={link.href} className=" regular-16 text-gray-50  pb-1.5 transition-all hover:font-bold " >{link.label}</Link>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
