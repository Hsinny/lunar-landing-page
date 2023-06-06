import Layout from "@/components/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="mx-auto max-w-[1108px] px-3 py-10">
        <h1 className="mb-5 text-center text-2xl font-bold">服務條款</h1>
        <p className="mb-5 indent-8">
          歡迎使用 Lunar！Lunar
          是一個協作和專案管理工具，這裡提供了我們的使用者服務條款：
        </p>
        <ol className="list-decimal pl-5 text-lg">
          <li className="mb-5">
            <span className="font-bold">帳號註冊：</span>
            <p className="py-3 text-base">
              您需註冊一個 Lunar
              帳號，並確保提供的資訊準確完整。您的帳號是您個人的責任，請妥善保管帳號和密碼。
            </p>
          </li>
          <li className="mb-5">
            <span className="font-bold">使用者內容：</span>
            <p className="py-3 text-base">
              您可以在 Lunar
              上創建、上傳、分享和儲存內容。請確保您擁有合法使用和分享該內容的權限，並遵守相關的法律法規。
            </p>
          </li>
          <li className="mb-5">
            <span className="font-bold">隱私保護：</span>
            <p className="py-3 text-base">
              我們重視您的隱私權，並采取適當的安全措施保護您的個人資訊。請閱讀我們的隱私政策，以了解我們如何收集、使用和保護您的資料。
            </p>
          </li>
          <li className="mb-5">
            <span className="font-bold">使用限制：</span>
            <p className="py-3 text-base">
              您同意不會以任何方式侵犯 Lunar
              的使用條款或違反適用的法律法規。您不得以任何形式傷害、干擾或破壞
              Lunar 的服務運營。
            </p>
          </li>
          <li className="mb-5">
            <span className="font-bold">第三方服務：</span>
            <p className="py-3 text-base">
              Lunar
              可能與第三方服務進行整合，但我們對這些服務的內容和安全性不承擔責任。使用這些服務時請自行注意其條款和隱私政策。
            </p>
          </li>
          <li className="mb-5">
            <span className="font-bold">費用與付款：</span>
            <p className="py-3 text-base">
              Lunar
              提供免費和付費的服務方案，如果您選擇付費方案，請按時支付相應費用。
            </p>
          </li>
          <li className="mb-5">
            <span className="font-bold">服務變更：</span>
            <p className="py-3 text-base">
              Lunar
              保留在任何時候變更、終止或暫停服務的權利。我們會盡力提前通知您這些變更。
            </p>
          </li>
          <li className="mb-5">
            <span className="font-bold">免責聲明：</span>
            <p className="py-3 text-base">
              Lunar
              對於使用者的行為和內容不承擔責任。我們無法保證服務的持續性和無錯誤，使用者需自行承擔使用風險。
            </p>
          </li>
        </ol>
      </div>
    </Layout>
  );
}
