import React from "react";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { SildeLeft, SildeRight, SildeUp } from "../../utility/animation";

const Banner = () => {
  return (
    <div className="container">
      <div className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        <div>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={logo}
            alt="logo"
            className="w-[150px] md:w-[250px] xl:w-[400px] drop-shadow object-cover"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left space-y-5 lg:max-[500px]:">
          <motion.p
            variants={SildeUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-bold capitalize font-playfair"
          >
            Importance of website
          </motion.p>
          <motion.p
            variants={SildeUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-gray-500 font-playfair"
          >
            In this digital-first landscape, a website is a unique online space,
            extending your reach beyond local borders and a local audience.
            Beyond visibility and connecting your brand to potential customers,
            partners, and investors, your website also acts as a strategic
            platform
          </motion.p>
          <motion.div
            variants={SildeUp(0.9)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <button className="primary-btn">Show More</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
