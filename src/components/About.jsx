import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="text-white" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <img 
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600&h=400"
          alt="about image"
          className="rounded-lg"
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a finance and operations professional with an MBA specializing in Finance and Operations 
            from the College of Engineering Thalassery. I have experience in financial analysis, 
            budgeting, and strategic financial planning. I completed two valuable internships at 
            Western India Plywood, where I developed strong analytical and problem-solving skills.
          </p>
          <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibold">Skills:</span>
            <span className="text-[#ADB7BE]">
              Financial Analysis, Operations Management, Financial Reporting, Budgeting and Forecasting, 
              Excel, Power BI, SQL
            </span>
          </div>
          <div className="flex flex-row mt-4">
            <span className="mr-3 font-semibold">Education:</span>
            <span className="text-[#ADB7BE]">
              MBA (Finance & Operations) - College of Engineering Thalassery (2022-2024)
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;