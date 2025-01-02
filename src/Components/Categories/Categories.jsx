import SectionTitle from "../Reuseable/SectionTitle";
import cat1 from '../../assets/images/cat1.png'
import cat2 from '../../assets/images/cat2.jpg'
import cat3 from '../../assets/images/cat3.jpg'
import cat4 from '../../assets/images/cat4.webp'

const Categories = () => {
    return (
        <div>
              <SectionTitle title={"Categories"}></SectionTitle>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-[10%]">
                <div className="relative">
                    <h1 className="font-semibold text-xl bg-white shadow-xl shadow-accent px-3 py-2 rounded-xl absolute bottom-[5%] right-[5%] md:bottom-[15%] md:right-[12%]">Skin Care</h1>
                    <img className="md:h-[300px] md:w-[250px] rounded-md shadow-2xl"  src={cat1} alt="" />
                    
                </div>
                <div className="relative">
                    <h1 className="font-semibold text-xl bg-white shadow-xl shadow-accent px-3 py-2 rounded-xl absolute bottom-[5%] right-[5%] md:bottom-[15%] md:right-[12%]">Makeup</h1>
                    <img className="md:h-[300px] md:w-[250px] rounded-md shadow-2xl"  src={cat2} alt="" />
                    
                </div>
                <div className="relative">
                    <h1 className="font-semibold text-xl bg-white shadow-xl shadow-accent px-3 py-2 rounded-xl absolute bottom-[5%] right-[5%] md:bottom-[15%] md:right-[12%]">Hair Care</h1>
                    <img className="md:h-[300px] md:w-[250px] rounded-md shadow-2xl"  src={cat3} alt="" />
                    
                </div>
                <div className="relative">
                    <h1 className="font-semibold text-xl bg-white shadow-xl shadow-accent px-3 py-2 rounded-xl absolute bottom-[5%] right-[5%] md:bottom-[15%] md:right-[12%]">Body Care</h1>
                    <img className="md:h-[300px] md:w-[250px] rounded-md shadow-2xl"  src={cat4} alt="" />
                    
                </div>
              </div>
        </div>
    );
};

export default Categories;