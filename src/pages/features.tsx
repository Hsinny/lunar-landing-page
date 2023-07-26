import Layout from "@/components/Layout";
import Image from "next/image";
import {
  CalendarOutlined,
  TagsOutlined,
  FormOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { CLIENT_URL } from "@/config";

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
      <h3 className="py-3 text-[28px] font-bold leading-10">
        {props.subTitle}
      </h3>
      <p className="inline-block max-w-[542px] text-grey66">{props.context}</p>
    </div>
  );
}

export default function Features() {
  return (
    <Layout>
      <div className="mx-auto max-w-[1108px] px-3 text-center">
        <Image
          src="/images/img_board.webp"
          alt="看板"
          className="rounded py-10 drop-shadow lg:py-12"
          width={1440}
          height={800}
          priority
        />
        <h1 className="text-[32px] font-bold leading-tight lg:text-5xl">
          成功的起點就在 Lunar 看板
        </h1>
        <div className="py-6 text-sm lg:py-10 lg:text-lg">
          <p>
            Lunar 看板與 Kanban
            看板類似，是將想法付諸行動最簡單的方式。規劃專案，並細分完成任務過程中的每個步驟。立即查看每個任務的狀態，並慶祝每個成就。專案管理從未如此有效，且充滿樂趣。
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1108px] px-3 py-8 lg:py-16">
        <div className="flex flex-col items-center lg:flex-row-reverse">
          <div className="mb-5 flex-1 lg:ml-20">
            <div className="flex items-center justify-start lg:flex-col lg:items-start">
              <CalendarOutlined className="rounded-full bg-pink p-2 leading-5 text-white lg:p-3 lg:text-xl" />
              <h4 className="ml-2 text-2xl font-bold lg:ml-0 lg:mt-4 lg:text-3xl">
                指派任務和管理期限
              </h4>
            </div>
            <p className="mt-2 text-lg">
              Lunar
              能指派團隊成員和截止日期，好讓讓團隊內的成員各司其職，而讓您能夠為任務新增更多背景資訊。
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/img_features_2.png"
              alt="指派任務和管理期限"
              className="rounded"
              width={1108}
              height={619}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1108px] px-3 py-8 lg:py-16">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="mb-5 flex-1 lg:mr-20">
            <div className="flex items-center justify-start lg:flex-col lg:items-start">
              <TagsOutlined className="rounded-full bg-pink p-2 leading-5 text-white lg:p-3 lg:text-xl" />
              <h4 className="ml-2 text-2xl font-bold lg:ml-0 lg:mt-4 lg:text-3xl">
                安排任務的優先順序，讓團隊有一致的目標
              </h4>
            </div>
            <p className="mt-2 text-lg">
              用標籤來排定優先順序，以識別高、中、低優先順序的任務，讓大家對您的任務有更深的共識。
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/img_features_3.png"
              alt="使用 Lunar 擴展團隊"
              className="rounded"
              width={1108}
              height={642}
            />
          </div>
        </div>
      </div>
      <div className="bg-bgcolor">
        <div className="mx-auto max-w-[1108px] px-3 py-8 lg:px-0 lg:py-16">
          <SubContext
            title="流程追蹤"
            subTitle="為需求自訂 Lunar"
            context=""
            className=""
            alignCenter={false}
          />
          <div className="flex flex-col lg:flex-row">
            <div className="mb-5 mr-5 flex flex-1 flex-col lg:mr-20">
              <Image
                src="/images/img_features_4.png"
                alt="自訂列表名稱"
                className="rounded"
                width={841}
                height={464}
              />
              <div>
                <h4 className="my-5 text-2xl font-bold lg:ml-0">
                  自訂列表名稱
                </h4>
                <p>
                  無論您是追蹤簡單的「待辦事項、進行中、已完成」流程還是複雜的工作流程，都可以輕鬆根據您的確切需求來打造
                  Trello
                  看板。自訂列表名稱提供了更多方法，讓您針對流程新增獨一無二的專屬內容。
                </p>
              </div>
            </div>
            <div className="mb-5 flex flex-1 flex-col">
              <Image
                src="/images/img_features_5.png"
                alt="自訂標籤"
                className="rounded"
                width={712}
                height={401}
              />
              <div>
                <h4 className="my-5 text-2xl font-bold lg:ml-0">
                  自訂標籤：靈活運用想像力
                </h4>
                <p>
                  除了用來標示任務優先級，自訂標籤更能讓你靈活的運用在各式各樣的專案管理，並滿足任何專案的需求，像似用來分門別類
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-[1108px] px-3 py-8 lg:px-0 lg:py-16">
          <h2 className="text-[28px] font-bold">溝通協作</h2>
          <p className="mt-5 max-w-[613px]">
            將您的通訊與團隊、專案或任務緊緊聯繫，好讓團隊明瞭工作進度。
          </p>
          <ul className="mt-5 flex flex-col lg:flex-row">
            <li className="mb-2 rounded border border-grey9F p-4 lg:mb-0 lg:mr-3 lg:w-1/4">
              <div className="flex items-center justify-start lg:flex-col lg:items-start">
                <FormOutlined className="text-xl leading-5" />
                <h4 className="ml-2 mt-2 font-bold lg:ml-0">任務評論</h4>
              </div>
              <p className="mt-1 text-sm">
                直接對任務評論，以確實表明需要做哪些事
              </p>
            </li>
            <li className="mb-2 rounded border border-grey9F p-4 lg:mb-0 lg:mr-3 lg:w-1/4">
              <div className="flex items-center justify-start lg:flex-col lg:items-start">
                <CommentOutlined className="text-xl leading-5" />
                <h4 className="ml-2 mt-2 font-bold lg:ml-0">專案對話</h4>
              </div>
              <p className="mt-1 text-sm">討論專案的進度，以保持前進的動能。</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-bgcolor">
        <div className="mx-auto max-w-[1108px] px-3 py-8 lg:px-0 lg:py-16">
          <SubContext
            title="團隊"
            subTitle="組織管理"
            context="建立並管理團隊及團隊設定，以確保每個人都能存取正確的資訊。"
            className="mb-5 lg:mb-10"
            alignCenter={false}
          />
          <div className="flex flex-col lg:flex-row">
            <div className="mb-5 mr-5 flex flex-1 flex-col lg:mr-20">
              <Image
                src="/images/img_group_1.webp"
                alt="團隊管理"
                className="rounded"
                width={1920}
                height={1281}
              />
              <div>
                <h4 className="my-5 text-2xl font-bold lg:ml-0">團隊管理</h4>
                <p>
                  建立以部門、工作職能、專案參與為基礎的團隊，或任何對您組織而言最有效運作的團隊。
                </p>
              </div>
            </div>
            <div className="mb-5 flex flex-1 flex-col">
              <Image
                src="/images/img_features_7.png"
                alt="團隊權限"
                className="rounded"
                width={667}
                height={442}
              />
              <div>
                <h4 className="my-5 text-2xl font-bold lg:ml-0">團隊權限</h4>
                <p>
                  指定組織的系統管理員，由其負責新增、移除以及管理成員及其設定。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3">
        <div className="mx-auto my-8 flex h-60 max-w-[1108px] flex-col items-center justify-center rounded-lg bg-[url('/images/img_features_footer.png')] bg-center bg-no-repeat px-3">
          <h6 className="text-center text-2xl font-bold text-white">
            今天就開始使用
          </h6>
          <p className="mb-6 text-lg text-white">
            如果您懂得製作代辦清單，您就懂得使用
            Lunar。開始團隊合作就是如此簡單。
          </p>
          <a
            className="rounded-md bg-blue px-4 py-2 text-white"
            href={CLIENT_URL}
          >
            開始使用
          </a>
        </div>
      </div>
    </Layout>
  );
}
