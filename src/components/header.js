import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const MenuLink = function ({href, title}) {
  return (
    <li className="w-full border-t hover:bg-[#0083FF] hover:text-white">
      {href.startsWith("http") 
        ? <a href={href} className="block py-3">{title}</a>
        : <Link href={href} className="block py-3">{title}</Link>
      }
    </li>
  )
}

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="w-full fixed left-0 top-0 font-bold bg-white lg:bg-[#FAF7F5] z-50">
      <div className="flex items-center justify-between mx-3 xl:mx-[166px]">
        <Link className="py-3 lg:py-5" href="/">
          <Image
            src="/logo.svg"
            alt="Lunar Logo"
            className="mr-7"
            width={156}
            height={36}
            priority
          />
        </Link>
        <MenuOutlined className={`cursor-pointer py-6 px-6 lg:hidden ${isNavOpen ? "hidden" : ""}`} onClick={() => setIsNavOpen((prev) => !prev)} />
        <CloseOutlined className={`cursor-pointer py-6 px-6 lg:hidden ${isNavOpen ? "" : "hidden"}`} onClick={() => setIsNavOpen(false)} />
        <div className={`absolute top-[64px] right-0 bg-white text-center w-full lg:hidden ${isNavOpen ? "" : "hidden"}`}>
          <ul className="flex flex-col items-center text-base border-b">
            <MenuLink href="/about" title="關於 Lunar" />
            <MenuLink href="/features" title="功能介紹" />
            <MenuLink href="/contact" title="聯繫我們" />
            <MenuLink href="https://feijai.github.io/Lunar/#/login" title="登入" />
            <MenuLink href="https://feijai.github.io/Lunar/#/login" title="開始使用" />
          </ul>
        </div>
        <div className="hidden lg:flex flex-auto justify-between">
          <ul className="flex text-base">
            <li><Link href="/about" className="py-7 px-5">關於 Lunar</Link></li>
            <li><Link href="/features" className="py-7 px-5">功能介紹</Link></li>
            <li><Link href="/contact" className="py-7 px-5">聯繫我們</Link></li>
          </ul>
          <ul className="flex text-sm">
            <li><a className="py-2 px-4 mr-4" href="https://feijai.github.io/Lunar/#/login">登入</a></li>
            <li><a className="text-white py-2 px-4 bg-[#0083FF] rounded-md" href="https://feijai.github.io/Lunar/#/login">開始使用</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
