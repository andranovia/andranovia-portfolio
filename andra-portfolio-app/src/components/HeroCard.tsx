import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface props {
  text: string;
}

export default function HeroCard({ text }: props) {
  return (
    <div className="relative mt-10">
      <div className="flex justify-center">
        <motion.div
          className="relative -bottom-8 bg-white rounded-full border-2 border-cyan-400 flex justify-center p-3 z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { scale: 0 },
            visible: {
              scale: 1,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            },
          }}
        >
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
            }
            width={24}
            height={24}
            alt=""
            className="w-12 sm:w-16"
          />
        </motion.div>
      </div>
      <motion.div
        className="relative"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { y: 30, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              ease: "easeInOut",
            },
          },
        }}
      >
        <div className="absolute bg-cyan-200 blur inset-0"></div>
        <div className="relative w-32 sm:w-48 h-28 rounded-lg shadow-ShadowCard bg-white p-1">
          <div className="my-3 relative top-5">
            <div className="text-[1rem] mt-6  font-bold text-gray-600 text-center">
              <button className="bg-cyan-100 p-2 rounded-md">{text}</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
