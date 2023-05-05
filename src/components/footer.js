import Image from 'next/image';
import { GithubOutlined } from '@ant-design/icons';

export default function Footer() {

  return (
    <footer className="text-[#9F9F9F] bg-[#333333] py-8 xl:py-12 px-3 xl:px-[166px]">
      <div className="flex flex-wrap justify-between items-end mb-[18px]">
        <a href="#">
          <Image
            src="/logo_white.png"
            alt="Lunar white Logo"
            width={101}
            height={24}
          />
        </a>
        <ul className="flex flex-wrap">
          <li className="mt-2 mr-6"><a href="#" className="hover:text-white">關於我們</a></li>
          <li className="mt-2 mr-6"><a href="#" className="hover:text-white">功能介紹</a></li>
          <li className="mt-2 mr-6"><a href="#" className="hover:text-white">線上諮詢</a></li>
          <li className="mt-2 mr-6"><a href="#" className="hover:text-white">隱私權條款</a></li>
          <li className="mt-2"><a href="#" className="hover:text-white">服務條款</a></li>
        </ul>
      </div>
      <hr className="border-[#9F9F9F]"/>
      <div className="flex flex-wrap justify-between mt-2"> 
        <p className="mt-2">&copy; 2023, Lunar All rights reserved.</p>
        <a href="#" className="flex items-center mt-2 hover:text-white">
          <GithubOutlined className="mr-[10px]"/> GitHub
        </a>
      </div>
    </footer>
  )
}