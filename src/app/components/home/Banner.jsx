"use client";

import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <section className="relative flex items-center justify-start h-screen overflow-hidden bg-gradient-to-br from-[#190341] via-[#2a075c] to-[#451181] mt-16">
      {/* Background Glow Effects */}
      <div className="absolute w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-[120px] top-10 left-10 z-0"></div>
      <div className="absolute w-80 h-80 bg-pink-500 opacity-20 rounded-full blur-[100px] bottom-20 right-10 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 text-white text-start max-w-1/2">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.25em] text-gray-300 text-sm md:text-lg mb-6"
        >
          Available for impactful work
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="font-extrabold leading-[1.1] text-[3rem] md:text-[6rem] lg:text-[9rem] tracking-tight"
        >
          <i> DESIGN DEVELOP</i>
          <br />
          <i> DELIVER</i>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 text-gray-200 text-xl md:text-2xl lg:text-3xl max-w-4xl leading-relaxed"
        >
          Future-proof IT solutions crafted to elevate your brand, accelerate
          business growth, and adapt seamlessly to your evolving goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-14"
        >
          <button className="px-12 py-5 rounded-full bg-white text-[#373669] font-semibold hover:bg-gray-200 transition text-xl md:text-2xl shadow-lg">
            Contact Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
