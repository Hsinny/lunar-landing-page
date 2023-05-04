import Image from 'next/image';

export default function About() {
  return (
    <main>
      {/* 位在第一屏需要儘早載入的圖片加上 priority 屬性，會優先預加載 */}
      <Image
        className="bg-white"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />

      {/* "非"在第一屏的圖，不用給 priority 屬性，會自動 Lazy Loading 載入 */}
      <Image
        className="bg-white"
        src="/vercel.svg"
        alt="Vercel Logo"
        width={180}
        height={40}
      />
    </main>
  )
}
