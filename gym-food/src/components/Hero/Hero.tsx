import FoodSection from "../FoodSection/FoodSection";
import Footer from "../Footer/Footer";
import HeaderNav from "../HeaderNav/HeaderNav"
import Slider from "../Slider/Slider";

const Hero = function () {
    return (
    <>
        <HeaderNav />
        <Slider />
        <FoodSection />
        <Footer />
    </>)
}

export default Hero;