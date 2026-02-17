import Brands from "@/components/Brands/Brands";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import Collections1 from "@/components/Collections-1/Collections-1";
import Collections2 from "@/components/Collections-2/Collections-2";
import Footer from "@/components/Footer/Footer";
import GSAPAnimation from "@/components/GSAPAnimation/GSAPAnimation";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import MotionElement from "@/components/MotionElemetn/MotionElement";
import Navbar from "@/components/Navbar/Navbar";
import TopCreators from "@/components/TopCreators/TopCreators";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <header className="px-4 relative">
        <Navbar />

        <div
          className="xl:container xl:mx-auto flex flex-col lg:flex-row-reverse lg:gap-x-12 gap-y-12 items-center pb-12
        pt-24"
        >
          <MotionElement
            elem="img"
            src={"/images/Header/banner-image.png"}
            alt="Banner-Image"
            className="w-11/12 xs:w-145 lg:w-100 xl:w-135 select-none"
            viewport={{ once: true }}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
          />

          <div className="flex flex-col gap-y-8 items-center">
            <MotionElement
              elem="div"
              className="flex flex-col gap-y-2 items-center lg:items-start"
              viewport={{ once: true }}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.8 }}
            >
              <h1
                className="bg-clip-text text-transparent bg-gradient-to-tl from-[#9cd0ff] via-[#a95bf3] to-[#9cd0ff]
                text-[2.5rem] leading-normal font-bold text-start w-full md:text-center
                md:text-[3.5rem] lg:text-start lg:text-[77px] xl:font-black"
              >
                最高のNFTマーケットプレイス
              </h1>

              <p
                className="text-[#d5d5d5] leading-8 md:text-center lg:text-start lg:w-130 xl:w-160 lg:text-lg
              lg:leading-10"
              >
                最適な価格設計とモダンなデザインで、NFT取引を快適に。
                使いやすいインターフェースと信頼性の高いプラットフォームを提供し、
                洗練されたレイアウトでスムーズな取引体験を実現します。
              </p>
            </MotionElement>

            <MotionElement
              elem="div"
              className="flex flex-col gap-y-4 w-full lg:grid lg:grid-cols-2 lg:gap-x-5 xl:flex xl:items-center
              xl:gap-x-5 xl:flex-row xl:"
              viewport={{ once: true }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 1.2 }}
            >
              <PrimaryButton
                type="button"
                className="w-full md:w-96 md:mx-auto xl:mx-0 xl:h-14 h-12 lg:w-full xl:w-55"
              >
                <Link
                  href={"#"}
                  className="h-full w-full flex items-center justify-center"
                >
                  はじめる
                </Link>
              </PrimaryButton>

              <SecondaryButton
                type="button"
                className="w-full md:w-96 md:mx-auto xl:mx-0 xl:h-14 h-12 lg:w-full xl:w-55 p-px"
              >
                <Link
                  href={"#"}
                  className="h-full w-full flex items-center justify-center"
                >
                  NFTを作成
                </Link>
              </SecondaryButton>
            </MotionElement>
          </div>
        </div>

        <div
          className="rounded-full w-46 h-46 bg-[#8e53f482] absolute left-0 bottom-0 lg:-bottom-30 -z-10
            blur-[135px] lg:w-86 lg:h-86 lg:blur-[236px]"
        ></div>
      </header>

      <main>
        <section id="brands-section" className="overflow-hidden">
          <div className="xl:container xl:mx-auto pt-32 pb-24 px-4">
            <Brands />
          </div>
        </section>

        <section id="collections-section-1" className="overflow-hidden">
          <div className="xl:container xl:mx-auto pt-24 pb-32 px-4 flex flex-col gap-y-8">
            <GSAPAnimation animation="fadeUp" start="top 80%">
              <h2 className="font-bold text-6xl leading-normal text-center text-[#f2f2f2]">
                NFTを集めよう
              </h2>
            </GSAPAnimation>

            <Collections1 />
          </div>
        </section>

        <section id="top-creators-section" className="overflow-hidden">
          <div className="xl:container xl:mx-auto py-24 px-4 flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-8 items-center">
              <GSAPAnimation animation="fadeUp" start="top 80%">
                <h2 className="font-bold text-6xl leading-normal text-center text-[#f2f2f2]">
                  トップクリエイター
                </h2>
              </GSAPAnimation>

              <GSAPAnimation animation="fadeUp" start="top 80%">
                <p className="text-[#d5d5d5] text-xl leading-12 px-10 text-center md:w-165">
                  NFTのトップクリエイターと代表的な作品を、美しいUIと快適なUXで紹介し、ユーザーがプラットフォーム上で簡単に交流できる体験を提供します。
                </p>
              </GSAPAnimation>

              <GSAPAnimation animation="fadeUp" start="top 80%">
                <div>
                  <PrimaryButton
                    type="button"
                    className="w-62 h-12 xl:h-14 lg:w-72 mx-auto"
                  >
                    すべてのクリエイターを見る
                  </PrimaryButton>
                </div>
              </GSAPAnimation>
            </div>

            <TopCreators />
          </div>
        </section>

        <section id="NFT-news-section" className="relative">
          <div
            className="xl:container xl:mx-auto py-24 px-4 flex flex-col gap-y-8 md:flex-row md:gap-x-4
            lg:gap-x-8"
          >
            <GSAPAnimation
              animation="fadeDown"
              start="bottom bottom"
              className="shrink-0 block md:hidden lg:block"
            >
              <img
                src={"/images/NFTNews/single-image.jpg"}
                alt="NFT News(Single Image)"
                className="mx-auto select-none lg:w-120 xl:w-136"
              />
            </GSAPAnimation>

            <GSAPAnimation
              animation="fadeDown"
              start="top 60%"
              className="shrink-0 hidden md:block lg:hidden"
            >
              <img
                src={"/images/NFTNews/single-image.jpg"}
                alt="NFT News(Single Image)"
                className="md:w-86 md:h-fit"
              />
            </GSAPAnimation>

            <div className="flex flex-col gap-y-8">
              <GSAPAnimation animation="fadeRight" start="bottom bottom">
                <h2 className="font-bold text-6xl leading-normal text-[#f2f2f2]">
                  購読して、NFTに関する最新ニュースとアップデートを受け取りましょう。
                </h2>
              </GSAPAnimation>

              <GSAPAnimation animation="fadeRight" start="bottom bottom">
                <p className="text-[#d5d5d5] text-xl leading-12">
                  本サービスでは、最新の基準に沿ったプロフェッショナルかつコストパフォーマンスに優れたソリューションの提供に注力しています。細部まで配慮したバランスの取れたアプローチにより、スムーズで満足度の高い体験をお届けします。
                </p>
              </GSAPAnimation>

              <GSAPAnimation animation="fadeRight" start="bottom bottom">
                <div
                  className="border-2 border-[#2E314F] bg-[#1619299d] w-full rounded-md p-3
                flex flex-col gap-y-2.5 xl:flex-row"
                >
                  <input
                    type="email"
                    name="email-for-subscribe"
                    id="email-for-subscribe"
                    placeholder="メールを入力してください"
                    className="outline-none text-[#f2f2f2] font-medium w-full py-2 px-4 lg:text-xl"
                  />

                  <PrimaryButton
                    type="button"
                    className="w-30 h-12 xl:h-14 md:w-44 lg:w-56 lg:mx-auto xl:w-64"
                  >
                    購読する
                  </PrimaryButton>
                </div>
              </GSAPAnimation>
            </div>

            <div
              className="w-86 h-86 border-2 border-[#2e314f88] rounded-full absolute bottom-40 -z-10
              translate-y-1/2 -translate-x-1/2 left-0"
            ></div>

            <div
              className="w-86 h-86 border-2 border-[#2e314f88] rounded-full absolute bottom-0 left-0 -z-10
              translate-y-1/2"
            ></div>
          </div>
        </section>

        <section id="collections-section-2" className="overflow-hidden">
          <div className="xl:container xl:mx-auto py-24 px-4 flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-8">
              <GSAPAnimation animation="fadeUp" start="top 80%">
                <h2 className="font-bold text-6xl leading-normal text-[#f2f2f2] text-center">
                  NFTコレクション
                </h2>
              </GSAPAnimation>

              <GSAPAnimation animation="fadeUp" start="top 80%">
                <p className="text-[#d5d5d5] text-xl leading-12 text-center">
                  プロフェッショナルで柔軟なソリューションにより、NFTプロジェクトをスムーズかつ効率的に管理できます。
                </p>
              </GSAPAnimation>
            </div>

            <Collections2 />
          </div>
        </section>

        <section id="latest-blogs-section" className="overflow-hidden">
          <div className="xl:container xl:mx-auto py-24  px-4 flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-4">
              <GSAPAnimation animation="fadeUp" start="top 80%">
                <h2 className="font-bold text-6xl leading-normal text-[#f2f2f2]">
                  最新ブログ
                </h2>
              </GSAPAnimation>

              <GSAPAnimation animation="fadeUp" start="top 80%">
                <PrimaryButton type="button" className="h-12 w-42">
                  <Link
                    href={"#"}
                    className="w-full h-full flex justify-center items-center"
                  >
                    ブログを読む
                  </Link>
                </PrimaryButton>
              </GSAPAnimation>
            </div>

            <LatestBlogs />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
