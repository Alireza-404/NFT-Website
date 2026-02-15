import Footer from "@/components/Footer/Footer";
import MarketplaceClient from "@/components/Marketplace/MarketplaceClient";
import Navbar from "@/components/Navbar/Navbar";

const Marketplace = () => {
  return (
    <>
      <header className="px-4">
        <Navbar />
      </header>

      <main>
        <MarketplaceClient />
      </main>

      <Footer />
    </>
  );
};

export default Marketplace;
