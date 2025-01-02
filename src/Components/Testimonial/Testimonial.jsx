import { useEffect, useState } from "react";
import SectionTitle from "../Reuseable/SectionTitle";
import Marquee from "react-fast-marquee";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => { const [reviews, setReviews] = useState([]);
    useEffect(() => {
      fetch(`${import.meta.env.VITE_backend_server}/reviews`)
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
        });
    }, []);
    return (
      <div className="pb-10">
       <SectionTitle title={"Testimonials"}></SectionTitle>
        <div className="py-[5%]">
        <Marquee>
          {reviews.map((review) => (
            <div className="rounded-md shadow-lg shadow-accent my-[3%] mx-[2%]" key={review._id} data={review}>
                <div className="flex flex-col justify-start items-start gap-3 px-10 py-5">
                    <h1 className="text-xl font-bold">{review?.name}</h1>
                    <p>{review?.comments}</p>
                    <Rating style={{ maxWidth: 180 }} value={review?.rating} readOnly />
                </div>
            </div>
          ))}
        </Marquee>
        </div>
      </div>
    );
};

export default Testimonial;