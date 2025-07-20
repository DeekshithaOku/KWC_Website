import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import discordIcon from "@iconify-icons/logos/discord-icon";
import njitLogo from "../assets/njitlogo.png";
import hawthorneLogo from "../assets/hawthornelogo.png";
import teamImage from "../assets/teamphoto.jpg";

export const AboutPageContent = () => {
  return (
    <motion.div
      className="px-6 md:px-24 py-6 space-y-8 ml-[24px] text-[#202020] mt-8 font-[Pangolin]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-3xl font-bold text-center">
        Empowering Youth through Programming Education
      </h1>

      <p>
        Founded at the <strong>New Jersey Institute of Technology</strong> in Newark, Kids Who Code is dedicated to empowering youth through technology education and promoting a passion for computer science.
      </p>

      <div className="flex flex-wrap gap-6 items-center justify-center">
        <img src={njitLogo} alt="NJIT Logo" className="w-28 h-auto" />
        <img src={hawthorneLogo} alt="Hawthorne Avenue Elementary School Logo" className="w-28 h-auto" />
      </div>

      <p>
        We are passionate about making a difference in our local community and are proud to partner with <strong>Hawthorne Avenue Elementary School</strong> in Newark. Our team facilitates after-school programming sessions that aim to enhance children's programming skills and creativity.
      </p>

      <p>
        Our unique curriculum focuses on <strong>Scratch</strong>, a beginner-friendly visual programming language. Through it, children build interactive stories, games, and animations — all while developing foundational programming logic.
      </p>

      <p>
        We also introduce students to the exciting world of <strong>drones</strong>, giving them hands-on opportunities to program real-world tech and spark deeper curiosity in STEM.
      </p>

      <div className="flex justify-center">
        <img
          src={teamImage}
          alt="Kids Who Code Team Photo"
          className="w-full md:w-[400px] max-w-lg rounded-lg shadow-md"
        />
      </div>

      <p>
        Whether you're an experienced programmer or just starting out, <strong>all NJIT students</strong> are welcome to join us in making a real impact. Come help us inspire the next generation of coders!
      </p>

      <div className="flex gap-6 items-center justify-center mt-6">
        <a
          href="https://discord.gg/YOUR_INVITE"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join our Discord"
          className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          <Icon icon={discordIcon} className="w-6 h-6" />
          <span className="hidden md:block">Join our Discord</span>
        </a>

        <a
          href="https://njit.campuslabs.com/engage/organization/kidswhocode"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-purple-800 font-semibold"
        >
          Visit Highlander Hub
        </a>
      </div>
    </motion.div>
  );
};
