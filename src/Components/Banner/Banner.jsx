import Lottie from "lottie-react";
import bannerimg from "./hb2r.webp";
import ani from "../../assets/homeani.json";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row  md:justify-center md:items-center px-[3%] md:px-[5%] py-[10%] md:py-[5%] gap-10">
      <div className="md:w-1/2">
        <div className="flex flex-col gap-3 py-[3%]">
          <motion.h1
            initial={{ textShadow: "0px 0px 10px #002fff" }}
            animate={{ textShadow: "2px 2px 10px #d70000" }}
            transition={{
              duration: 3,
              delay: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="text-3xl md:text-4xl font-bold"
          >
            Welcome to{" "}
          </motion.h1>
          <motion.h1
            initial={{ color: "#25006b" }}
            animate={{ color: "#ba00bd" }}
            transition={{
              duration: 3,
              delay: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="text-3xl md:text-5xl font-bold"
          >
            HB2R-Beauty Store
          </motion.h1>
        </div>
        <div className="md:text-xl font-semibold">
          <Typewriter
            options={{
              strings: [
                "where every product is chosen to bring out the beauty in you!",
                "Step into HB2R-Beauty Store for the finest collection of beauty essentials that enhance your natural glow.",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 10
            }}
          />
        </div>
      </div>

      <Lottie animationData={ani} />
    </div>
  );
};

export default Banner;
