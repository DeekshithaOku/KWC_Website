import { motion } from "framer-motion";
import logo from "../assets/logotext.png";
import kid1 from "../assets/kid1.png";
import kid2 from "../assets/kid2.png";
import kid3 from "../assets/kid3.png";
import kid4 from "../assets/kid4.png";
import { Icon } from "@iconify/react";
import gmailIcon from "@iconify-icons/logos/google-gmail";
import discordIcon from "@iconify-icons/logos/discord-icon";
import instagramIcon from "@iconify-icons/logos/instagram-icon";


export const AnimatedIntro = () => {
  return (
    <div className="relative w-full flex justify-center items-start px-4 pt-4">
      <motion.div
        className="relative w-full max-w-6xl h-[618px] md:h-[700px] xl:h-[500px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={kid4}
          alt="Kid 4"
          className="absolute w-[70px] md:w-[100px] xl:w-[110px] top-[80px] md:top-[80px] xl:top-[80px] left-[-25px] md:left-[-10px] lg:left-[60px] xl:left-[160px]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />

        <motion.img
          src={kid1}
          alt="Kid 1"
          className="absolute w-[70px] sm:w-[80px] md:w-[100px] xl:w-[110px] top-[80px] md:top-[80px] xl:top-[80px] right-[-25px] md:right-[-10px] lg:right-[60px] xl:right-[160px]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        <motion.img
          src={logo}
          alt="KWC Logo"
          className="absolute left-1/2 transform -translate-x-1/2 w-[180px] sm:w-[220px] md:w-[300px] xl:w-[320px] top-[10px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        />

        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center md:gap-3 gap-1 top-[200px] md:top-[275px] xl:top-[300px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-center text-[14px] md:text-[24px] text-black font-semibold font-[Pangolin] max-w-[600px] leading-tight">
            ✨ Share your skills. Inspire young minds. ✨<br />
            Make a difference through code.
          </p>
          <p className="font-bold text-[18px] md:text-[32px] text-[#000] font-[Pangolin] mt-3">
            JOIN US!
          </p>
          <div className="flex gap-4 mt-1">
            <div className="rounded-full p-2 shadow-lg">
              <Icon icon={instagramIcon } width="30" height="30" />
            </div>
            <div className="rounded-full p-2 shadow-lg">
              <Icon icon={discordIcon} width="30" height="30" />
            </div>
            <div className="rounded-full p-2 shadow-lg">
              <Icon icon={gmailIcon} width="30" height="30" />
            </div>
          </div>
        </motion.div>

        <motion.img
          src={kid3}
          alt="Kid 3"
          className="absolute w-[70px] sm:w-[80px] md:w-[100px] xl:w-[110px] bottom-[80px] md:bottom-[150px] xl:bottom-[60px] left-[-15px] md:left-[-15px] lg:left-[20px] xl:left-[80px]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        />

        <motion.img
          src={kid2}
          alt="Kid 2"
          className="absolute w-[70px] sm:w-[80px] md:w-[100px] xl:w-[110px] bottom-[80px] md:bottom-[150px] xl:bottom-[60px] right-[-15px] md:right-[-15px] lg:right-[20px]  xl:right-[80px]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        />
      </motion.div>
    </div>
  );
};
