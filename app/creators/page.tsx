import BestCreators from "@/components/BestCreators/BestCreatoes";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const Creators = () => {
  return (
    <>
      <header className="px-4">
        <Navbar />
      </header>

      <main>
        <section className="best-creatoes-section">
          <div className="xl:container xl:mx-auto pt-32 pb-8 px-4 flex flex-col gap-y-16">
            <h2 className="font-bold text-6xl leading-normal text-center text-[#f2f2f2]">
              私たちの最高のクリエイターたち
            </h2>

            <div>
              <BestCreators />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Creators;
