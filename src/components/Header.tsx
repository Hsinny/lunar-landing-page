import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const MenuLink = function ({ href, title }) {
  return (
    <li className="w-full border-t hover:bg-blue hover:text-white">
      {href.startsWith("http") ? (
        <a href={href} className="block py-3">
          {title}
        </a>
      ) : (
        <Link href={href} className="block py-3">
          {title}
        </Link>
      )}
    </li>
  );
};

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white font-bold lg:bg-bgcolor">
      <div className="mx-3 flex items-center justify-between xl:mx-[166px]">
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
        <MenuOutlined
          className={`cursor-pointer px-6 py-6 lg:hidden ${
            isNavOpen ? "hidden" : ""
          }`}
          onClick={() => setIsNavOpen((prev) => !prev)}
        />
        <CloseOutlined
          className={`cursor-pointer px-6 py-6 lg:hidden ${
            isNavOpen ? "" : "hidden"
          }`}
          onClick={() => setIsNavOpen(false)}
        />
        <div
          className={`absolute right-0 top-[64px] w-full bg-white text-center lg:hidden ${
            isNavOpen ? "" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center border-b text-base">
            <MenuLink href="/about" title="關於 Lunar" />
            <MenuLink href="/features" title="功能介紹" />
            <MenuLink href="/contact" title="聯繫我們" />
            <MenuLink
              href="https://feijai.github.io/Lunar/#/login"
              title="登入"
            />
            <MenuLink
              href="https://feijai.github.io/Lunar/#/login"
              title="開始使用"
            />
          </ul>
        </div>
        <div className="hidden flex-auto justify-between lg:flex">
          <ul className="flex text-base">
            <li>
              <Link href="/about" className="px-5 py-7">
                關於 Lunar
              </Link>
            </li>
            <li>
              <Link href="/features" className="px-5 py-7">
                功能介紹
              </Link>
            </li>
            <li>
              <Link href="/contact" className="px-5 py-7">
                聯繫我們
              </Link>
            </li>
          </ul>
          <ul className="flex text-sm">
            <li>
              <a
                className="mr-4 px-4 py-2"
                href="https://feijai.github.io/Lunar/#/login"
              >
                登入
              </a>
            </li>
            <li>
              <a
                className="rounded-md bg-blue px-4 py-2 text-white"
                href="https://feijai.github.io/Lunar/#/login"
              >
                開始使用
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
