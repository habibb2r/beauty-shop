import useGetFeatured from "../../Hooks/CommonHooks/useGetFeatured";
import ProductCard from "../Reuseable/ProductCard";
import SectionTitle from "../Reuseable/SectionTitle";


const FeaturedProducts = () => {
    const[featured, isLoading] = useGetFeatured()
    console.log(featured)
    return (
        <div className="">
              <SectionTitle title={"Featured Products"}></SectionTitle>
              {
                isLoading? <div className='flex justify-center px-5 py-10'>
                <span className="loading loading-spinner loading-lg text-center"></span>          
            </div> : <div className="grid grid-cols-3 gap-5  mx-auto px-[8%]">
                {
                     featured.map(product=>
                        <ProductCard key={product._id} product={product}></ProductCard>
                    )
                }
               
            </div>
              }
            
        </div>
    );
};

export default FeaturedProducts;