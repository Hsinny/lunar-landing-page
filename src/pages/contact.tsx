import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="mx-auto max-w-[1108px] px-3 text-center">
        <h1 className="pt-12 text-[28px] font-bold leading-tight lg:pb-3 lg:text-5xl">
          我們的團隊隨時為您提供幫助
        </h1>
        <h2 className="py-3 text-sm lg:text-lg">
          關於功能及帳號上有任何問題，我們都很樂意提供協助。
        </h2>
      </div>
      <div className="mx-auto max-w-[800px] px-3 py-8">
        <div className="flex flex-col justify-center">
          <label
            htmlFor="name"
            className="mb-2 font-medium after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            姓名
          </label>
          <input
            type="text"
            id="name"
            className="mb-8 rounded border border-greyD5 bg-white px-4 py-3 outline-none focus:border-blue focus:ring-blue"
            placeholder="請輸入 姓名"
          />
          <label
            htmlFor="email"
            className="mb-2 font-medium after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            電子郵件
          </label>
          <input
            type="text"
            id="email"
            className="mb-8 rounded border border-greyD5 bg-white px-4 py-3 outline-none focus:border-blue focus:ring-blue"
            placeholder="請輸入 Email"
          />
          <label
            htmlFor="question"
            className="mb-2 font-medium after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            您的問題
          </label>
          <select
            name="question"
            id="question"
            className="mb-8 rounded border border-greyD5 bg-white pl-4 pr-8 py-3 outline-none invalid:text-grey9F focus:border-blue focus:ring-blue"
            defaultValue=""
          >
            <option value="" className="hidden" disabled>
              從列表選取一個
            </option>
            <option value="features">功能/方案詢問</option>
            <option value="other">其他</option>
          </select>
          <label
            htmlFor="message"
            className="mb-2 font-medium after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            您的留言
          </label>
          <textarea
            name="message"
            id="message"
            className="mb-8 rounded border border-greyD5 bg-white px-4 py-3 outline-none"
            placeholder="如果有更詳項的資訊，請補充在這裡"
            rows={5}
          ></textarea>
          <input
            type="button"
            className="rounded-md bg-blue px-6 py-3 text-white cursor-pointer"
            value="送出"
          />
        </div>
      </div>
    </Layout>
  );
}
