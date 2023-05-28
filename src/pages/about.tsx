import { useState } from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { AntDesignOutlined, ProjectOutlined } from '@ant-design/icons';

export default function About() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Layout>
      <div className="mx-auto max-w-[1108px] px-3 text-center">
        <h1 className="py-8 text-[28px] font-bold leading-tight lg:py-12 lg:text-5xl">
          Lunar 可讓您在一個地方輕鬆組織
          <br />
          和處理個人或團隊的任務
        </h1>
        <div className="relative w-full h-[53vw] overflow-hidden lg:h-[622px] lg:w-[1108px]">
          <iframe
            className="pointer-events-none absolute left-1/2 top-1/2 w-full h-[70vw] translate-x-[-50%] translate-y-[-50%] lg:h-[900px] lg:w-[1108px]"
            src="https://www.youtube.com/embed/EMsdGV4CZOc?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=EMsdGV4CZOc"
          ></iframe>
        </div>
        <div className="py-10 text-sm lg:text-lg">
          <p>Lunar 是什麼？</p>
          <p>
            Lunar
            是視覺化工具，可協助您的團隊管理任何類型的專案、工作流程或任務追蹤。上傳檔案、建立檢查清單等等功能完全根據最適合貴團隊的方式來自訂。只需要註冊並建立看板就行了！
          </p>
        </div>
        <a
          className="mb-12 inline-block rounded-md bg-blue px-4 py-2 text-white"
          href="https://feijai.github.io/Lunar/#/login"
        >
          開始使用
        </a>
      </div>
      <div className="bg-blue100">
        <div className="mx-auto max-w-[1108px] px-3 py-8 lg:py-20">
          <h2 className="text-[28px] font-bold">超高生產力工具</h2>
          <ul className="flex">
            <li
              className="group mr-8"
              onClick={() => {
                setTabIndex(0);
              }}
            >
              <div
                className={`flex cursor-pointer items-center border-b-2 border-b-blue100 py-2 group-hover:border-b-blue ${
                  tabIndex === 0 ? 'border-b-blue' : ''
                }`}
              >
                <AntDesignOutlined
                  className={`pr-3 group-hover:text-blue ${
                    tabIndex === 0 ? 'text-blue' : ''
                  }`}
                />
                看板
              </div>
            </li>
            <li
              className="group mr-8"
              onClick={() => {
                setTabIndex(1);
              }}
            >
              <div
                className={`flex cursor-pointer items-center border-b-2 border-b-blue100 py-2 group-hover:border-b-blue ${
                  tabIndex === 1 ? 'border-b-blue' : ''
                }`}
              >
                <AntDesignOutlined
                  className={`pr-3 group-hover:text-blue ${
                    tabIndex === 1 ? 'text-blue' : ''
                  }`}
                />
                列表
              </div>
            </li>
            <li
              className="group mr-8"
              onClick={() => {
                setTabIndex(2);
              }}
            >
              <div
                className={`flex cursor-pointer items-center border-b-2 border-b-blue100 py-2 group-hover:border-b-blue ${
                  tabIndex === 2 ? 'border-b-blue' : ''
                }`}
              >
                <AntDesignOutlined
                  className={`pr-3 group-hover:text-blue ${
                    tabIndex === 2 ? 'text-blue' : ''
                  }`}
                />
                卡片
              </div>
            </li>
          </ul>
          <div className="mt-7">
            <div className={`${tabIndex === 0 ? '' : 'hidden'}`}>
              <p className="mb-6">
                Lunar
                的核心功能是基於看板的專案管理。看板是一個虛擬的工作空間，它可以代表一個專案、一個工作流程或一個團隊。使用者可以在看板上創建多個列表和卡片，以便組織和追蹤工作進度。看板提供了一個直觀的視覺化界面，讓使用者可以清晰地看到整個專案的概覽。
              </p>
              <Image
                src="/images/img_board.webp"
                alt="看板"
                className="rounded drop-shadow"
                width={1440}
                height={800}
                priority
              />
            </div>
            <div className={`${tabIndex === 1 ? '' : 'hidden'}`}>
              <p className="mb-6">
                列表是在看板上創建的分類區域。它可以代表專案的不同階段、工作流程的不同步驟或任何其他適合組織工作的分類方式。使用者可以在列表中創建和管理卡片，並將卡片按照其相應的進度或狀態進行排序。
              </p>
              <Image
                src="/images/img_list.webp"
                alt="列表"
                className="rounded drop-shadow"
                width={1184}
                height={690}
              />
            </div>
            <div className={`${tabIndex === 2 ? '' : 'hidden'}`}>
              <p className="mb-6 flex-1">
                卡片提供了詳細的任務管理功能。使用者可以在卡片上添加所有必要的細節，包括附件、描述、待辦清單等，以便團隊成員能夠完整地了解任務的內容和要求。卡片的彈性也使得團隊可以輕鬆地進行任務的重新安排和重分配。
              </p>
              <Image
                src="/images/img_card.webp"
                alt="卡片"
                className="rounded drop-shadow"
                width={730}
                height={1073}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-[1108px] px-3 py-8 lg:py-20">
          <h2 className="text-[28px] font-bold">輕鬆地管理任務</h2>
          <p className="mt-5 max-w-[613px]">
            卡片會將團隊需要的所有資訊整理在同一個位置。您可以指派成員、新增截止日期以及留言等。
          </p>
          <ul className="mt-5 flex flex-col lg:flex-row">
            <li className="mb-2 rounded border border-grey9F p-4 lg:mb-0 lg:mr-3 lg:w-1/4">
              <div className="flex items-center justify-start lg:flex-col lg:items-start">
                <ProjectOutlined className="bg-greyE9 text-xl leading-5" />
                <h4 className="ml-2 mt-2 font-bold lg:ml-0">成員</h4>
              </div>
              <p className="mt-1 text-sm">
                將成員新增至專案和任務的卡片上，讓所有人各司其職，您不再需要詢問負責人是誰。
              </p>
            </li>
            <li className="mb-2 rounded border border-grey9F p-4 lg:mb-0 lg:mr-3 lg:w-1/4">
              <div className="flex items-center justify-start lg:flex-col lg:items-start">
                <ProjectOutlined className="bg-greyE9 text-xl leading-5" />
                <h4 className="ml-2 mt-2 font-bold lg:ml-0">截止日期</h4>
              </div>
              <p className="mt-1 text-sm">
                「進行中」和截止日期會一起顯示。這兩個功能易於設定，可設定提醒以避免錯過時間，您將其標示為「完成」時也會很有成就感。
              </p>
            </li>
            <li className="mb-2 rounded border border-grey9F p-4 lg:mb-0 lg:mr-3 lg:w-1/4">
              <div className="flex items-center justify-start lg:flex-col lg:items-start">
                <ProjectOutlined className="bg-greyE9 text-xl leading-5" />
                <h4 className="ml-2 mt-2 font-bold lg:ml-0">附件</h4>
              </div>
              <p className="mt-1 text-sm">
                不再需要在無止盡的電子郵件討論串中翻找來尋找附件。只要將附件拖曳到卡片上，讓正確的任務保留正確的檔案。
                (初期只支援圖片格式)
              </p>
            </li>
            <li className="rounded border border-grey9F p-3 lg:w-1/4">
              <div className="flex items-center justify-start lg:flex-col lg:items-start">
                <ProjectOutlined className="bg-greyE9 text-xl leading-5" />
                <h4 className="ml-2 mt-2 font-bold lg:ml-0">待辦清單</h4>
              </div>
              <p className="mt-1 text-sm">
                可輕鬆應對沉重需求的最佳工具。將大任務分成小任務、透過列表檢查項目，並觀察狀態列是否
                100% 完成
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-bgcolor">
        <div className="mx-auto max-w-[1108px] px-3 py-6 text-center lg:py-20">
          <h2 className="text-[28px] font-bold">使用 Lunar 擴展團隊</h2>
          <p className="mx-auto my-6 max-w-[613px]">
            Lunar 可幫助你增進團隊管理實務和工作流程，無論組織中有 20 位還是
            2,000 位成員，不需要鐵腕政策，即能管理您的團隊運作。
          </p>
          <Image
            src="/images/img_group_1.webp"
            alt="使用 Lunar 擴展團隊"
            className="mx-auto rounded"
            width={1920}
            height={1281}
          />
        </div>
      </div>
      <div className="px-3">
        <div className="mx-auto my-8 flex h-60 max-w-[1108px] flex-col items-center justify-center rounded-lg bg-[url('/images/img_about_footer.webp')] bg-center bg-no-repeat">
          <h6 className="mb-6 px-3 text-center text-2xl font-bold text-white">
            立即前往您的看板，開始完成工作吧！
          </h6>
          <a
            className="rounded-md bg-blue px-4 py-2 text-white"
            href="https://feijai.github.io/Lunar/#/login"
          >
            開始使用
          </a>
        </div>
      </div>
    </Layout>
  );
}
