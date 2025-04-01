import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { ScrollTop } from "primereact/scrolltop";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

import carousel1 from "../emigosimages/WhatsApp Image 2025-03-31 at 2.31.58 PM (1).jpeg";
import carousel2 from "../emigosimages/WhatsApp Image 2025-03-31 at 2.31.58 PM.jpeg";
import carousel3 from "../emigosimages/WhatsApp Image 2025-03-31 at 2.31.59 PM (1).jpeg";
import carousel4 from "../emigosimages/WhatsApp Image 2025-03-31 at 2.31.59 PM (2).jpeg";
import carousel5 from "../emigosimages/pik-5.jpeg";
import carousel6 from "../emigosimages/pik-6.jpg";
import carousel7 from "../emigosimages/pik-7.jpeg";
import carousel8 from "../emigosimages/pik-8.jpeg";
import carousel9 from "../emigosimages/pik-9.jpeg";
import carousel10 from "../emigosimages/pik-10.jpeg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Carousel Section */}
      <Carousel autoplay autoplaySpeed={3000} dotPosition="bottom">
        {[carousel1, carousel2, carousel3, carousel4].map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover"
            />
          </div>
        ))}
      </Carousel>

      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.img
            src={carousel2}
            className="rounded-md w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-700">
              Welcome to Emigos Solutions
            </h2>
            <p className="mt-4 text-gray-600">
              We specialize in providing top-quality cleaning services, durable
              doors, and advanced CCTV surveillance. Our mission is to enhance
              security, cleanliness, and comfort with innovative solutions.
            </p>
          </motion.div>
        </div>
      </div>

      <div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=" mt-2 text-gray-500 mb-5 lg:px-10 p-3"
      >
        <div className="text-black text-xl font-bold mb-2 ms-1">Abouot Us</div>
        <div className=" text-4xl  font-serif text-gray-500 mt-7 mb-6">
          Emigos Solutions - Solutions for All Home Needs
        </div>
        <div>
          {" "}
          At Emigos Solutions, we are dedicated to providing high-quality
          cleaning services, premium door solutions, and advanced CCTV
          surveillance systems to homes and businesses. Our mission is to
          enhance security, cleanliness, and comfort with innovative and
          reliable solutions tailored to your needs.
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-gray-100 py-10">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Our Premium Products & Solutions
        </h2>
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            {
              img: carousel4,
              title: "Outdoor Mosquito Protection",
              desc: "Safe, Effective, Reliable, Eco-friendly",
            },
            {
              img: carousel1,
              title: "Indoor Mosquito Control",
              desc: "Odorless, Efficient, Non-Toxic",
            },
            {
              img: carousel2,
              title: "Ultrasonic Mosquito Repellent",
              desc: "Silent, Eco-Friendly, Effective",
            },
            {
              img: carousel5,
              title: "Bedroom Mosquito Protection",
              desc: "Silent, Safe, Comfortable",
            },
            {
              img: carousel6,
              title: "Vintage Outdoor Mosquito Solution",
              desc: "Classic, Stylish, Effective",
            },
            {
              img: carousel7,
              title: "Advanced Rat Repellent",
              desc: "Safe, Ultrasonic, Durable",
            },
            {
              img: carousel8,
              title: "Car Rat Repellent Device",
              desc: "Ultrasonic, Non-Toxic, Efficient",
            },
            {
              img: carousel9,
              title: "Solar Security Street Light",
              desc: "Bright, eco-friendly, smart monitoring",
            },
            {
              img: carousel10,
              title: "Smart Solar Street Light",
              desc: "Wireless, motion sensor, HD camera",
            },
          ].map((product, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-md shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={product.img}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105 duration-300"
                alt={product.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="mt-2 text-sm">{product.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll to Top */}
      <ScrollTop
        target="window"
        threshold={100}
        className="w-10 h-10 bg-cyan-600"
        icon="pi pi-arrow-up text-white text-xl"
      />
    </div>
  );
};

export default Home;
