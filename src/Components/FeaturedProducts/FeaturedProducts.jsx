import useGetFeatured from "../../Hooks/CommonHooks/useGetFeatured";
import Loading from "../Reuseable/Loading";
import ProductCard from "../Reuseable/ProductCard";
import SectionTitle from "../Reuseable/SectionTitle";


const FeaturedProducts = () => {
    const[featured, isLoading] = useGetFeatured()
    console.log(featured)
    return (
        <div className="">
              <SectionTitle title={"Featured Products"}></SectionTitle>
              {
                isLoading? <Loading></Loading> : <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mx-auto px-[8%]">
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