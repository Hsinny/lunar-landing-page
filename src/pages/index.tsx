import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import Carousel from "@/components/Carousel";
import {
  AppstoreAddOutlined,
  MessageOutlined,
  CheckSquareOutlined,
  BellOutlined,
  UsergroupAddOutlined,
  UnorderedListOutlined,
  CoffeeOutlined,
  LeftOutlined,
  RightOutlined,
  ClusterOutlined,
} from "@ant-design/icons";

function SubContext(props: {
  title: string;
  subTitle: string;
  context: string;
  alignCenter: boolean;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto max-w-[1108px] ${props.className} ${
        props.alignCenter ? "text-center" : ""
      }`}
    >
      <span
        className={`inline-block rounded-[5px] bg-pink px-4 py-2 text-sm font-bold text-white`}
      >
        {props.title}
      </span>
      <h3 className="py-3 text-[32px] font-bold leading-10">
        {props.subTitle}
      </h3>
      <p className="inline-block max-w-[542px] text-grey66">{props.context}</p>
    </div>
  );
}

function CustomerLogos() {
  const arrLists = [
    "img_logo_00.png",
    "img_logo_01.png",
    "img_logo_02.png",
    "img_logo_03.png",
    "img_logo_04.png",
    "img_logo_05.png",
    "img_logo_06.png",
    "img_logo_07.png",
    "img_logo_08.png",
    "img_logo_09.png",
    "img_logo_10.png",
    "img_logo_11.png",
    "img_logo_12.png",
    "img_logo_13.png",
    "img_logo_14.png",
    "img_logo_15.png",
    "img_logo_16.png",
  ];

  const lists = [];

  for (let i = 0; i < arrLists.length; i++) {
    lists.push(
      <Image
        key={i}
        src={`/images/${arrLists[i]}`}
        alt="Customer Logo"
        width={164}
        height={80}
        className="max-w-[20vw]"
      />
    );
  }
  return <>{lists}</>;
}

export default function Home() {
  const [imageUrl, setImageUrl] = useState("img_advantage_1.webp");
  const [scrollWidth, setScrollWidth] = useState(0);

  const handlePrevScroll = () => {
    const newScrollWidth = scrollWidth + parseInt(`${window.innerWidth / 2}`);
    setScrollWidth(newScrollWidth);
  };
  const handleNextScroll = () => {
    const newScrollWidth = scrollWidth - parseInt(`${window.innerWidth / 2}`);
    setScrollWidth(newScrollWidth);
  };

  return (
    <Layout>
      <div
        id="banner"
        className="relative bg-bgcolor bg-[url('/images/img_banner_sm.png')] bg-no-repeat pb-8 lg:bg-white lg:bg-none lg:pb-12"
      >
        <div className="absolute w-full bg-bgcolor lg:h-[800px] lg:bg-banner-img lg:bg-banner-position lg:bg-no-repeat"></div>
        <div className="relative px-3 text-center">
          <h1 className="pb-3 pt-12 text-[28px] font-bold leading-tight lg:text-5xl">
            Lunar 讓團隊更容易管理
            <br />
            專案和任務
          </h1>
          <h2 className="py-3 text-sm lg:text-lg">
            將您所有任務、團隊成員都整合在一起，追蹤並管理一切事務！
          </h2>
          <div className="mb-6">
            <input
              type="text"
              className="mb-3 mr-3 rounded-lg border border-greyD5 bg-white px-4 py-3"
              placeholder="輸入 Email"
            />
            <button className="rounded-md bg-blue px-6 py-3 text-white">
              開始使用
            </button>
          </div>
        </div>
        <div className="relative px-3">
          <Image
            src="/images/img_banner.webp"
            alt="Banner"
            className="mx-auto rounded-lg drop-shadow-banner hover:cursor-banner"
            width={1108}
            height={618}
            priority
          />
        </div>
      </div>
      <div
        id="advantage"
        className="pt-9 lg:bg-advantage-img lg:bg-advantage-position lg:bg-no-repeat lg:pt-12"
      >
        <SubContext
          title="便利功能"
          subTitle="超高生產力工具"
          context="Lunar 提供各種功能，讓您專注於任務的執行。為您的工作流程與團隊，帶來超高效與組織化的體驗，讓您的工作流程更加流暢，更快完成任務。"
          className="px-3"
          alignCenter={false}
        />
        <div className="mx-auto mb-12 mt-8 flex max-w-[1108px] flex-col overflow-hidden rounded-lg bg-white px-3 shadow-3xl lg:flex-row">
          <ul className="flex flex-col px-4 py-6 lg:p-8">
            <li
              className="mb-3 flex cursor-pointer items-start px-4 py-3 hover:bg-greyF7"
              onClick={() => {
                setImageUrl("img_advantage_1.webp");
              }}
            >
              <AppstoreAddOutlined className="rounded-lg bg-green p-2 text-sm leading-[14px] text-white" />
              <div className="ml-3 lg:ml-6">
                <h4 className="text-lg font-bold lg:text-2xl">任務看板</h4>
                <p className="max-w-[390px] text-sm">
                  將所有任務以卡片列表形式展示，可隨時添加、編輯、刪除、標記為完成、設置截止日期等。
                </p>
              </div>
            </li>
            <li
              className="mb-3 flex cursor-pointer items-start px-4 py-3 hover:bg-greyF7"
              onClick={() => {
                setImageUrl("img_advantage_2.webp");
              }}
            >
              <MessageOutlined className="rounded-lg bg-blue p-2 text-sm leading-[14px] text-white" />
              <div className="ml-3 lg:ml-6">
                <h4 className="text-lg font-bold lg:text-2xl">協作溝通</h4>
                <p className="max-w-[390px] text-sm">
                  在每個任務上添加評論、附件、標籤等，以便團隊成員進行交流和討論。
                </p>
              </div>
            </li>
            <li
              className="mb-3 flex cursor-pointer items-start px-4 py-3 hover:bg-greyF7"
              onClick={() => {
                setImageUrl("img_advantage_3.webp");
              }}
            >
              <CheckSquareOutlined className="rounded-lg bg-yellow p-2 text-sm leading-[14px] text-white" />
              <div className="ml-3 lg:ml-6">
                <h4 className="text-lg font-bold lg:text-2xl">協作溝通</h4>
                <p className="max-w-[390px] text-sm">
                  通過進度追蹤功能，可以清晰地了解專案的進展情況，以及哪些任務需要更多的關注。
                </p>
              </div>
            </li>
          </ul>
          <div>
            <Image
              src={`/images/${imageUrl}`}
              alt="Banner"
              className="h-full w-full min-w-[427px] object-cover object-left-top"
              width={542}
              height={393}
            />
          </div>
        </div>
        <SubContext
          title="實際運用"
          subTitle="適用於任何大型或小型專案的工作流程"
          context=""
          className="px-3"
          alignCenter={false}
        />
        <div className="overflow-hidden">
          <div className="mx-auto max-w-[1108px]">
            <ul
              id="scrollCard"
              className={`flex transition-[margin-left] duration-300`}
              style={{ marginLeft: scrollWidth + "px" }}
            >
              <li className="mr-6 flex flex-none flex-col items-start rounded-lg border bg-bgcolor p-4 shadow-3xl">
                <BellOutlined className="px-1 text-xl text-blue" />
                <h5 className="py-1 text-lg font-bold">專案管理</h5>
                <p className="max-w-[217px] text-sm">
                  透過
                  Lunar，讓任務保持井然有序、掌握期限，以及讓團隊成員掌握一致資訊。
                </p>
              </li>
              <li className="mr-6 flex flex-none flex-col items-start rounded-lg border bg-bgcolor p-4 shadow-3xl">
                <UsergroupAddOutlined className="px-1 text-xl text-blue" />
                <h5 className="py-1 text-lg font-bold">會議</h5>
                <p className="max-w-[217px] text-sm">
                  讓您的團隊會議更有成效、更強大，並且我們敢說，會更加有趣。
                </p>
              </li>
              <li className="mr-6 flex flex-none flex-col items-start rounded-lg border bg-bgcolor p-4 shadow-3xl">
                <UnorderedListOutlined className="px-1 text-xl text-blue" />
                <h5 className="py-1 text-lg font-bold">新手訓練</h5>
                <p className="max-w-[217px] text-sm">
                  透過 Lunar
                  的待辦事項、資源和進度追蹤版面配置，快速完成新公司入職手續或著手開始新專案。
                </p>
              </li>
              <li className="mr-6 flex flex-none flex-col items-start rounded-lg border bg-bgcolor p-4 shadow-3xl">
                <AppstoreAddOutlined className="px-1 text-xl text-blue" />
                <h5 className="py-1 text-lg font-bold">任務管理</h5>
                <p className="max-w-[217px] text-sm">
                  使用 Lunar
                  追蹤、管理、完成和彙集任務，就像拼圖一樣，每次都能讓團隊的專案取得一致成功。
                </p>
              </li>
              <li className="mr-6 flex flex-none flex-col items-start rounded-lg border bg-bgcolor p-4 shadow-3xl">
                <CoffeeOutlined className="px-1 text-xl text-blue" />
                <h5 className="py-1 text-lg font-bold">腦力激盪</h5>
                <p className="max-w-[217px] text-sm">
                  發揮團隊的創造力，讓想法醒目可見、可合力完成且付諸實現。
                </p>
              </li>
            </ul>
          </div>
          <div className="mx-auto mt-8 max-w-[1108px] px-3 text-right">
            <LeftOutlined
              className="cursor-pointer rounded-full bg-blue p-4 text-xs text-white"
              onClick={handlePrevScroll}
            />
            <RightOutlined
              className="ml-8 cursor-pointer rounded-full bg-blue p-4 text-xs text-white"
              onClick={handleNextScroll}
            />
          </div>
        </div>
      </div>
      <div
        id="partner"
        className="mx-auto max-w-[1108px] px-3 text-center lg:px-0"
      >
        <h5 className="mb-8 mt-11 text-lg lg:mb-14 lg:mt-24 lg:text-2xl">
          和超過 50,000 個來自世界各地的團隊一起使用 Lunar，以完成更多工作。
        </h5>
        <div className="flex flex-wrap justify-center">
          <CustomerLogos />
        </div>
      </div>
      <div
        id="customer"
        className="mx-auto mb-8 mt-6 max-w-[1108px] overflow-hidden px-3 lg:px-0"
      >
        <div className="flex flex-col rounded-lg bg-bgcolor p-7 text-center lg:mb-12 lg:mt-8">
          <Carousel>
            <div key="slide1" className="w-full flex-none">
              <Image
                src="/images/img_mark_quot.png"
                alt="Quotation Marks"
                className="mx-auto mb-5 lg:mb-7"
                width={26}
                height={24}
              />
              <div className="mx-auto mb-4 max-w-[700px] text-sm lg:mb-6">
                <p>
                  它使我們更好地協作、更好地了解每個專案的進度，並更快地做出決策。
                </p>
                <p>
                  Lunar
                  的簡單易用性是我們最喜歡的功能之一，而且它可以隨時隨地訪問，即使在外出工作時也可以查看專案的進度。現在，我們將
                  Lunar 作為我們的主要專案管理工具。
                </p>
              </div>
              <div className="mb-8 flex justify-center">
                <Image
                  src="/images/img_customer_1.png"
                  alt="Elenator / 設計總監"
                  className="mr-4 rounded-full"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col text-left">
                  <h6 className="font-bold">Elenator / 設計總監</h6>
                  <p>Dylan Field</p>
                </div>
              </div>
            </div>
            <div key="slide2" className="w-full flex-none">
              <Image
                src="/images/img_mark_quot.png"
                alt="Quotation Marks"
                className="mx-auto mb-5 lg:mb-7"
                width={26}
                height={24}
              />
              <div className="mx-auto mb-4 max-w-[700px] text-sm lg:mb-6">
                <p>
                  一個強大的專案管理工具，以看板的方式讓團隊成員可以視覺化地追蹤工作流程。使用者可以在看板上創建列表，並將任務或工作卡片拖放到相應的列表中，以表示進展狀態。它還支持分配負責人、設定截止日期、添加評論和附件等功能，以協助團隊有效地組織和跟進工作。
                </p>
              </div>
              <div className="mb-8 flex justify-center">
                <Image
                  src="/images/img_customer_2.png"
                  alt="Jason / 專案管理師"
                  className="mr-4 rounded-full"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col text-left">
                  <h6 className="font-bold">Jason / 專案管理師</h6>
                  <p>Hyred Workplace</p>
                </div>
              </div>
            </div>
            <div key="slide3" className="w-full flex-none">
              <Image
                src="/images/img_mark_quot.png"
                alt="Quotation Marks"
                className="mx-auto mb-5 lg:mb-7"
                width={26}
                height={24}
              />
              <div className="mx-auto mb-4 max-w-[700px] text-sm lg:mb-6">
                <p>
                  Lunar
                  提供了一個簡單而直觀的方式來協同工作。它允許使用者在一個共享的看板上建立多個列表和卡片，讓團隊成員可以即時查看和更新工作進度。使用者可以在卡片上添加標籤、設置提醒、指派成員，並利用評論功能進行即時討論。這種協同工作的方式有助於促進團隊合作，提高生產力。
                </p>
              </div>
              <div className="mb-8 flex justify-center">
                <Image
                  src="/images/img_customer_3.png"
                  alt="Lisa / 人資主管"
                  className="mr-4 rounded-full"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col text-left">
                  <h6 className="font-bold">Lisa / 人資主管</h6>
                  <p>Mono Company</p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        {/* <ul className="flex justify-center">
          <li className="mr-2 inline-block rounded-full bg-greyD5 p-1 hover:bg-pink"></li>
          <li className="mr-2 inline-block rounded-full bg-greyD5 p-1 hover:bg-pink"></li>
          <li className="inline-block rounded-full bg-greyD5 p-1 hover:bg-pink"></li>
        </ul> */}
      </div>
      <div
        id="manage"
        className="bg-blue100 px-3 pb-6 pt-9 lg:px-0 lg:pb-12 lg:pt-14"
      >
        <SubContext
          title="輕鬆管理"
          subTitle="使用 Lunar 讓你達到事半功倍"
          context="Lunar  的直覺式功能可讓任何團隊快速設定和自訂工作流程，幾乎任何事情都能適用。"
          alignCenter={false}
        />
        <ul className="mx-auto mt-8 flex max-w-[1108px] flex-col lg:flex-row">
          <li className="mb-3 flex flex-1 flex-col items-start rounded-lg border-t-4 border-blue bg-bgcolor bg-card-img bg-card-position bg-no-repeat px-6 pb-12 pt-7 shadow-3xl lg:mr-6">
            <Image
              src="/images/lunar_pink_icon.png"
              alt="Lunar Pink Icon"
              className="p-1"
              width={32}
              height={32}
            />
            <h5 className="py-1 text-lg font-bold">
              管理任何專案 (不論規模大小)
            </h5>
            <p className="max-w-[300px] text-sm">
              利用單一強大工具管理所有專案，讓專案管理既可行又效果出奇。
            </p>
          </li>
          <li className="mb-3 flex flex-1 flex-col items-start rounded-lg border-t-4 border-blue bg-bgcolor bg-card-img bg-card-position bg-no-repeat px-6 pb-12 pt-7 shadow-3xl lg:mr-6">
            <CoffeeOutlined className="px-1 text-2xl text-pink" />
            <h5 className="py-1 text-lg font-bold">Lunar 讓工作煥然一新</h5>
            <p className="max-w-[300px] text-sm">
              輕鬆檢視完成進度，並快速識別障礙。
            </p>
          </li>
          <li className="mb-3 flex flex-1 flex-col items-start rounded-lg border-t-4 border-blue bg-bgcolor bg-card-img bg-card-position bg-no-repeat px-6 pb-12 pt-7 shadow-3xl">
            <ClusterOutlined className="px-1 text-2xl text-pink" />
            <h5 className="py-1 text-lg font-bold">簡化流程追蹤</h5>
            <p className="max-w-[300px] text-sm">
              以視覺版面配置，在 Lunar
              中呈現所有重要任務、截止日期和所有者，輕鬆提升業務透明度。
            </p>
          </li>
        </ul>
      </div>
      <div
        id="price"
        className="mt-11 px-3 lg:bg-bottom-img lg:bg-bottom-position lg:bg-no-repeat lg:px-0"
      >
        <SubContext
          title="定價"
          subTitle="輕鬆組織您的工作，免費使用"
          context="立即提高你的團隊工作效率"
          alignCenter={true}
        />
        <ul className="mt-8 flex flex-col justify-center lg:flex-row">
          <li className="mb-3 basis-64 rounded-lg border-[3px] border-greyD5 shadow-3xl lg:mr-6 lg:basis-[353px]">
            <div className="px-9 pb-6 pt-8 text-center lg:pt-10">
              <h6 className="text-2xl font-bold">Basic</h6>
              <span className="align-middle text-lg font-bold">$</span>
              <span className="align-middle text-5xl font-bold">0</span>
              <p className="text-sm text-grey9F">終生免費</p>
            </div>
            <hr />
            <div className="px-9 pb-8 pt-6 lg:pb-10">
              <p className="mb-9 text-sm">
                適用於 1 - 10 個用戶
                <br />
                想要組織專案的個人或團隊
              </p>
              <button className="w-full rounded-[5px] bg-greyE9 py-3 text-sm">
                選擇方案
              </button>
            </div>
          </li>
          <li className="mb-3 basis-64 rounded-lg border-[3px] border-blue shadow-3xl lg:basis-[353px]">
            <div className="px-9 pb-6 pt-8 text-center lg:pt-10">
              <h6 className="text-2xl font-bold">Standard</h6>
              <span className="align-middle text-lg font-bold text-blue">
                $
              </span>
              <span className="align-middle text-5xl font-bold text-blue">
                1,200
              </span>
              <p className="text-sm text-grey9F">平均 $100 /月</p>
            </div>
            <hr />
            <div className="px-9 pb-8 pt-6 lg:pb-10">
              <p className="mb-9 text-sm">
                適用於需要以多種方式 (包括看板、時間表和行事曆等)
                追蹤和呈現多個專案的團隊。
              </p>
              <button className="w-full rounded-[5px] bg-greyE9 py-3 text-sm">
                選擇方案
              </button>
            </div>
          </li>
        </ul>
        <div className="mx-auto mb-8 mt-[52px] flex h-60 max-w-[1108px] flex-col items-center justify-center rounded-lg bg-[url('/images/img_footer.webp')] bg-no-repeat lg:mb-12 lg:mt-[84px]">
          <h6 className="mb-6 text-2xl font-bold text-white">
            立即開啟您的體驗行程
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
