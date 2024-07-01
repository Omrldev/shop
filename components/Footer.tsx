import { footerLinks, socialMedia } from "@/constants/Index"
import Image from "next/image"
import Link from "next/link"
import footerlogo from "../public/assets/images/foot-logo.svg"
import { link } from "fs"
import { CgCopyright } from "react-icons/cg"
import { BiCopyright } from "react-icons/bi"


const Footer = () => {
  return (
    <section className="bg-black">
      <div className="max-container text-white px-2 py-10">
        <Link href={"/"}>
          <p className="text-xl font-bold">Logo - slogan company</p>
        </Link>
        <p className="max-w-xs mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="flex justify-start items-center gap-4 py-4">
          {socialMedia.map((logo) => (
            <Image src={logo.img} alt={logo.alt} width={32} height={32} />
          ))}
        </div>

        <div className="flex flex-1 justify-between flex-wrap items-start gap-2 max-w-xl mt-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg">
                {section.title}
              </h3>
              <ul className="mt-3">
                {section.links.map((link) => (
                  <li key={link.name} className="text-gray-300 hover:text-slate-400">
                    <Link href={"/"}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:flex justify-between items-center">
          <div className="flex justify-center items-center">
            <BiCopyright />
            <p>CopyRight. All rights reserved.</p>
          </div>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </section>
  )
}

export default Footer