import "./App.css";
import Carousel from "./components/Carousel";
import FeaturedProducts from "./components/FeaturedProducts";
import Offer from "./components/Offer";
import Navbar from "./components/Navbar";
import SalePage from "./components/SalePage";
import Ecommerce from "./components/Ecommerce";
import Partners from "./components/Partners";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-[#ededed]">
      <Offer />
      <Navbar />
      <Carousel />
      <FeaturedProducts />
      <SalePage />
      <Ecommerce />
      <Partners />
      <Reviews />
      <Footer />
      </div>
    </>
  );
}

export default App;
