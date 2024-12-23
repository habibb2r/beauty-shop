import React from 'react';
import SectionTitle from '../../Components/Reuseable/SectionTitle';

const About = () => {
  return (
    <div>
        <SectionTitle title={"About Us"}></SectionTitle>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto my-10">
     
      <p className="text-gray-700 mb-4">
        Welcome to our website! We are dedicated to providing the best products and services to our customers. Our team works tirelessly to ensure quality and satisfaction. Thank you for choosing us!
      </p>
      <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
      <p className="text-gray-700 mb-4">
        Our mission is to offer high-quality products that improve the lives of our customers. We strive to innovate and constantly improve our offerings to meet the changing needs of the market.
      </p>
      <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
      <p className="text-gray-700 mb-4">
        Our vision is to be a leader in our industry, known for our commitment to quality, customer satisfaction, and sustainability. We aim to create a positive impact on the communities we serve.
      </p>
      <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Integrity: We conduct our business with the highest standards of ethics and transparency.</li>
        <li>Customer Focus: Our customers are at the heart of everything we do.</li>
        <li>Innovation: We embrace change and continuously seek new ways to improve.</li>
        <li>Sustainability: We are committed to sustainable practices that protect our planet.</li>
        <li>Excellence: We strive for excellence in everything we do.</li>
      </ul>
      <h3 className="text-2xl font-semibold mb-2">Our Team</h3>
      <p className="text-gray-700 mb-4">
        Our team is composed of dedicated professionals who are passionate about what they do. We work collaboratively to achieve our goals and ensure the best outcomes for our customers.
      </p>
      <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
      <p className="text-gray-700">
        If you have any questions or need further information, please do not hesitate to contact us. We are here to help!
      </p>
    </div>
    </div>
  );
};

export default About;
