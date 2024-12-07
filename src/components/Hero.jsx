import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Avni Sajil",
                1000,
                "Finance Analyst",
                1000,
                "MBA Student",
                1000,
                "Financial Analyst",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Finance and operations professional with strong analytical and problem-solving skills, specializing in financial analysis and strategic planning
          </p>
          <div className="socials flex flex-row gap-4 mt-8 justify-center sm:justify-start">
            <a href="mailto:savni039@gmail.com" className="text-white hover:text-purple-500">
              <MailIcon size={30} />
            </a>
            <a href="https://www.linkedin.com/in/avni-sajil-b54a5123a/" className="text-white hover:text-purple-500">
              <LinkedinIcon size={30} />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-8 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src="/abli.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full w-[240px] h-[240px] lg:w-[380px] lg:h-[380px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;