import Link from "next/link";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {
  const marketplaceLinksArray = [
    "NFT",
    "アート",
    "コレクション",
    "バーチャルワールド",
  ];

  const infoLinksArray = ["アクティビティ", "統計", "ランキング"];

  const companyLinksArray = [
    "私たちについて",
    "サポート",
    "機能",
    "人気クリエイター",
  ];

  const resourcesLinksArray = ["情報", "アフィリエイト", "関連企業", "ブログ"];

  return (
    <footer>
      <div className="xl:container xl:mx-auto pt-36 flex flex-col gap-y-20">
        <div className="grid grid-cols-1 px-4 gap-10 md:grid-cols-2 lg:flex lg:justify-between">
          <div className="flex flex-col gap-y-6 lg:w-80">
            <img
              src={"/images/Footer/logo.png"}
              alt="Footer-Logo"
              loading="lazy"
              className="w-fit select-none"
            />

            <p className="text-[#f2f2f2] leading-10 pr-16 md:p-0">
              高品質なデジタルアートを適正な価格で提供し、
              誰でも安心して取引できるマーケットプレイスを目指しています。
              使いやすさと革新性を重視し、新しい価値を創造します。
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <div>
                <Link
                  href={"#"}
                  className="w-12 h-12 rounded-full border-2 border-[#2E314F] bg-[#161929]
                 flex items-center justify-center hover:bg-[#23273e] transition-all duration-200"
                >
                  <FiFacebook className="text-[#8E53F4] text-2xl" />
                </Link>
              </div>

              <div>
                <Link
                  href={"#"}
                  className="w-12 h-12 rounded-full border-2 border-[#2E314F] bg-[#161929]
                 flex items-center justify-center hover:bg-[#23273e] transition-all duration-200"
                >
                  <FiTwitter className="text-[#8E53F4] text-xl" />
                </Link>
              </div>

              <div>
                <Link
                  href={"#"}
                  className="w-12 h-12 rounded-full border-2 border-[#2E314F] bg-[#161929]
                 flex items-center justify-center hover:bg-[#23273e] transition-all duration-200"
                >
                  <FiInstagram className="text-[#8E53F4] text-xl" />
                </Link>
              </div>

              <div>
                <Link
                  href={"#"}
                  className="w-12 h-12 rounded-full border-2 border-[#2E314F] bg-[#161929]
                 flex items-center justify-center hover:bg-[#23273e] transition-all duration-200"
                >
                  <FiYoutube className="text-[#8E53F4] text-xl" />
                </Link>
              </div>

              <div>
                <Link
                  href={"https://github.com/Alireza-404"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-[#2E314F] bg-[#161929]
                  flex items-center justify-center hover:bg-[#23273e] transition-all duration-200"
                >
                  <FiGithub className="text-[#8E53F4] text-xl" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <h4 className="text-xl font-bold text-[#8E53F4]">
              マーケットプレイス
            </h4>

            <ul className="flex flex-col gap-y-4">
              {marketplaceLinksArray.map((item, i) => (
                <li key={i}>
                  <Link
                    href={"#"}
                    className="text-[#f2f2f2] hover:translate-x-1 transition duration-200 w-fit p-1 inline-block
                    text-lg"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-y-4">
            <h4 className="text-xl font-bold text-[#8E53F4]">情報</h4>

            <ul className="flex flex-col gap-y-4">
              {infoLinksArray.map((item, i) => (
                <li key={i}>
                  <Link
                    href={"#"}
                    className="text-[#f2f2f2] hover:translate-x-1 transition duration-200 w-fit p-1 inline-block
                  text-lg"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-y-4">
            <h4 className="text-xl font-bold text-[#8E53F4]">会社情報</h4>

            <ul className="flex flex-col gap-y-4">
              {companyLinksArray.map((item, i) => (
                <li key={i}>
                  <Link
                    href={"#"}
                    className="text-[#f2f2f2] hover:translate-x-1 transition duration-200 w-fit p-1 inline-block
                  text-lg"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-y-4">
            <h4 className="text-xl font-bold text-[#8E53F4]">リソース</h4>

            <ul className="flex flex-col gap-y-4">
              {resourcesLinksArray.map((item, i) => (
                <li key={i}>
                  <Link
                    href={"#"}
                    className="text-[#f2f2f2] hover:translate-x-1 transition duration-200 w-fit p-1 inline-block
                  text-lg"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-5 border-t border-[#2E314F] leading-8">
          <p className="text-[#f2f2f2] text-center">
            本ウェブサイトはアリレザ・シャーバニによって制作されました。
            無断での使用、複製、配布を禁じます。
            <span className="text-[#8E53F4] font-bold">
              © All Rights Reserved
            </span>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
