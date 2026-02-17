import CollectionItems from "@/components/Collection/Collection";
import Footer from "@/components/Footer/Footer";
import MotionElement from "@/components/MotionElemetn/MotionElement";
import Navbar from "@/components/Navbar/Navbar";

const Collection = () => {
  return (
    <>
      <header className="px-4">
        <Navbar />
      </header>

      <main>
        <section className="collection-section">
          <div className="xl:container xl:mx-auto pt-32 pb-8 px-4 flex flex-col gap-y-16">
            <MotionElement
              elem="h2"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="font-bold text-6xl leading-normal text-center text-[#f2f2f2]"
            >
              私たちのコレクション
            </MotionElement>

            <div>
              <CollectionItems />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Collection;
