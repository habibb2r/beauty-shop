import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import ContactInfo from "./ContactInfo/ContactInfo";
import FAQ from "./FAQ/FAQ";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Testimonial></Testimonial>
            <Categories></Categories>
            <FAQ></FAQ>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;