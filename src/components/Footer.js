import Image from 'next/image';
import Link from 'next/link';
import { GithubOutlined } from '@ant-design/icons';

export default function Footer() {

  return (
    <footer className="text-grey9F bg-grey33 py-8 xl:py-12 px-3 xl:px-[166px]">
      <div className="flex flex-wrap justify-between items-end mb-[18px]">
        <Link href="#">
          <Image
            src="/logo_white.png"
            alt="Lunar white Logo"
            width={101}
            height={24}
          />
        </Link>
        <ul className="flex flex-wrap">
          <li className="mt-2 mr-6"><Link href="#" className="hover:text-white">關於我們</Link></li>
          <li className="mt-2 mr-6"><Link href="#" className="hover:text-white">功能介紹</Link></li>
          <li className="mt-2 mr-6"><Link href="#" className="hover:text-white">線上諮詢</Link></li>
          <li className="mt-2 mr-6"><Link href="#" className="hover:text-white">隱私權條款</Link></li>
          <li className="mt-2"><Link href="#" className="hover:text-white">服務條款</Link></li>
        </ul>
      </div>
      <hr className="border-grey9F"/>
      <div className="flex flex-wrap justify-between mt-2"> 
        <p className="mt-2">&copy; 2023, Lunar All rights reserved.</p>
        <Link href="#" className="flex items-center mt-2 hover:text-white">
          <GithubOutlined className="mr-[10px]"/> GitHub
        </Link>
      </div>
    </footer>
  )
}