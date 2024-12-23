

const ProductCard = ({product}) => {
    return (
        <div className="flex flex-col justify-start items-start gap-3 rounded-lg shadow-md shadow-secondary px-5 py-5">
            <div className="w-full flex justify-center">
            <img className="h-[300px]" src={product.picture} alt={product.name} />
            </div>
            <h3 className="font-semibold text-xl">{product.name}</h3>
            <p className="font-thin">{product.description}</p>
            <p className="font-semibold">Brand: {product.brand}</p>
            <p className="text-primary">
              Price: ${product.price.present_price}
              {product.price.onOffer && (
                <span className="line-through px-2 text-error"> ${product.price.previous_price}</span>
              )}
            </p>
            <p>Category: <span className="font-semibold">{product.category}</span></p>
          </div>
    );
};

export default ProductCard;