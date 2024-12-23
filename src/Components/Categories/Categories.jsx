import SectionTitle from "../Reuseable/SectionTitle";


const Categories = () => {
    return (
        <div>
              <SectionTitle title={"Categories"}></SectionTitle>
              <div className="grid grid-cols-3 gap-5">
                <div>
                    <h1>Category</h1>
                    <img src="" alt="" />
                    <p>Product Price</p>
                </div>
                <div>
                    <h1>Category</h1>
                    <img src="" alt="" />
                    <p>Product Price</p>
                </div>
                <div>
                    <h1>Category</h1>
                    <img src="" alt="" />
                    <p>Product Price</p>
                </div>
              </div>
        </div>
    );
};

export default Categories;