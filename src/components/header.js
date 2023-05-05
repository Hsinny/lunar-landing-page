import { useState } from "react";
import Image from 'next/image';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const MenuLink = (props) => {
  return (
    <li className="w-full border-t hover:bg-[#0083FF] hover:text-white">
      <a href={`${props.href}`} className="block py-3">{props.title}</a>
    </li>
  )
}

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="w-full fixed left-0 top-0 font-bold tracking-wide bg-white">
      <div className="flex items-center justify-between mx-3 xl:mx-[166px]">
        <a className="py-3 lg:py-5" href="#">
          <Image
            src="/logo.svg"
            alt="Lunar Logo"
            className="mr-7 dark:invert"
            width={156}
            height={36}
            priority
          />
        </a>
        <MenuOutlined className={`cursor-pointer py-6 px-6 lg:hidden ${isNavOpen ? "hidden" : ""}`} onClick={() => setIsNavOpen((prev) => !prev)} />
        <CloseOutlined className={`cursor-pointer py-6 px-6 lg:hidden ${isNavOpen ? "" : "hidden"}`} onClick={() => setIsNavOpen(false)} />
        <div className={`absolute top-[64px] right-0 bg-white text-center w-full lg:hidden ${isNavOpen ? "" : "hidden"}`}>
          <ul className="flex flex-col items-center text-base">
            <MenuLink href="#" title="關於 Lunar" />
            <MenuLink href="#" title="功能介紹" />
            <MenuLink href="#" title="聯繫我們" />
            <MenuLink href="#" title="登入" />
            <MenuLink href="#" title="開始使用" />
          </ul>
        </div>
        <div className="hidden lg:flex flex-auto justify-between">
          <ul className="flex text-base">
            <li><a href="#" className="py-7 px-5">關於 Lunar</a></li>
            <li><a href="#" className="py-7 px-5">功能介紹</a></li>
            <li><a href="#" className="py-7 px-5">聯繫我們</a></li>
          </ul>
          <ul className="flex text-sm">
            <li><a className="py-2 px-4 mr-4" href="#">登入</a></li>
            <li><a className="text-white py-2 px-4 bg-[#0083FF] rounded-md" href="#">開始使用</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
