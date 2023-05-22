import Image from "next/image";
import Link from "next/link";
import { GithubOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className="bg-grey33 px-3 py-8 text-grey9F xl:px-[166px] xl:py-12">
      <div className="mb-[18px] flex flex-wrap items-end justify-between">
        <Link href="#">
          <Image
            src="/logo_white.png"
            alt="Lunar white Logo"
            width={101}
            height={24}
          />
        </Link>
        <ul className="flex flex-wrap">
          <li className="mr-6 mt-2">
            <Link href="#" className="hover:text-white">
              關於我們
            </Link>
          </li>
          <li className="mr-6 mt-2">
            <Link href="#" className="hover:text-white">
              功能介紹
            </Link>
          </li>
          <li className="mr-6 mt-2">
            <Link href="#" className="hover:text-white">
              線上諮詢
            </Link>
          </li>
          <li className="mr-6 mt-2">
            <Link href="#" className="hover:text-white">
              隱私權條款
            </Link>
          </li>
          <li className="mt-2">
            <Link href="#" className="hover:text-white">
              服務條款
            </Link>
          </li>
        </ul>
      </div>
      <hr className="border-grey9F" />
      <div className="mt-2 flex flex-wrap justify-between">
        <p className="mt-2">&copy; 2023, Lunar All rights reserved.</p>
        <Link href="#" className="mt-2 flex items-center hover:text-white">
          <GithubOutlined className="mr-[10px]" /> GitHub
        </Link>
      </div>
    </footer>
  );
}
