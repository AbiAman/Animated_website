/* eslint-disable no-unused-vars */
import React from "react";
import { FaPlay } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { SildeLeft, SildeRight } from "../../utility/animation";
const Home = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          {/* Our Info  */}
          <div className=" font-playfair flex flex-col justify-center py-14 md:py-0">
            <div className="text-center md:text-left space-y-6">
              <motion.h1
                variants={SildeRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
              >
                TechA Develope perferct
                <span className="text-primary">Website</span>
              </motion.h1>
              <motion.p
                variants={SildeRight(1.2)}
                initial="hidden"
                animate="visible"
                className=" text-gray-600 xl:max-w-[500px]"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                autem nemo sit esse est
              </motion.p>

              {/* button section  */}
              <motion.div
                variants={SildeRight(1.5)}
                initial="hidden"
                animate="visible"
                className="flex  justify-center gap-8 md:justify-start"
              >
                <button className="primary-btn flex items-center gap-2 !mt-4">
                  Order now
                </button>
                <button className="flex justify-center items-center gap-2 !mt-4">
                  <FaPlay /> Watch now
                </button>
              </motion.div>
            </div>
          </div>
          {/* Our Image  */}
          <div className="flex justify-center items-center ">
            <motion.img
              variants={SildeLeft(0.6)}
              initial="hidden"
              animate="visible"
              src={logo}
              alt="logo"
              className="w-[150px] md:w-[250px] xl:w-[400px] drop-shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
