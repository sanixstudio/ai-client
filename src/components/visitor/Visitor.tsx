import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Visitor = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-gradient-to-r from-sky-600 to-indigo-600">
      <div className="flex flex-col text-center pb-10 text-white gap-7 border-b border-white/30 mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold uppercase drop-shadow-xl"
        >
          welcome to Summify
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: .3 }}
          className="text-2xl sm:3xl md:text-4xl"
        >
          AI Chatbot and AI text Summarizer
        </motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center m-4"
      >
        <Link
          to="/home"
          className="block border-2 px-8 outline-none focus:bg-white/10 focus:rounded-3xl py-4 mb-2 rounded-lg bg-white/20 hover:shadow-lg hover:scale-105 transition-all active:bg-black/10"
        >
          <h1 className="text-3xl sm:text-4xl uppercase text-white font-bold">
            Explore App
          </h1>
        </Link>
      </motion.div>
    </div>
  );
};

export default Visitor;
