import bannerimg from './hb2r.webp'
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url(${bannerimg})`,
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        {/* <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold ">Welcome to HB2R-Beauty Shop</h1>
            <p className="mb-5">
            Find everything you need to look and feel your best, from skincare essentials to luxurious makeup and everything in between. Our expert team is here to help you find the perfect products to enhance your natural beauty
            </p>
            <button className="btn btn-secondary">Shop Now</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
