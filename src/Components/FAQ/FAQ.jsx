import SectionTitle from "../Reuseable/SectionTitle";

const FAQ = () => {
  return (
    <div>
      <SectionTitle title={"Frequently Asked Questions"}></SectionTitle>
      <div className="mx-auto px-2 md:px-0 md:w-2/3">
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
            What types of products do you offer?
            </div>
            <div className="collapse-content">
              <p>We offer a wide range of beauty products, including skincare essentials, makeup items, hair care products, and beauty tools. Our collection features top brands and high-quality products to cater to all your beauty needs.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            How can I place an order online?
            </div>
            <div className="collapse-content">
              <p>Placing an order is easy! Simply browse our website, add your desired products to the cart, and proceed to checkout. Follow the instructions to enter your shipping information and payment details. Once your order is confirmed, you will receive a confirmation email with your order details.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            What is your return policy?
            </div>
            <div className="collapse-content">
              <p>We want you to be completely satisfied with your purchase. If for any reason you are not happy with a product, you can return it within 30 days of receipt for a full refund or exchange. Please ensure that the product is unused and in its original packaging. For more details, visit our Returns & Exchanges page.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
