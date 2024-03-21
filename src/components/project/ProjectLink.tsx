import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectLinkProps = {
  LinkRef: string;
  LinkStyle: string;
};

const ProjectLink = ({ LinkRef, LinkStyle }: ProjectLinkProps) => {
  const linkRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: linkRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  return (
    <motion.div
      ref={linkRef}
      style={{ scale }}
      className={`w-fit p-2 rounded-xl bg-opacity-70 backdrop-blur-lg absolute  z-20 h-fit bg-zinc-800 text-white ${LinkStyle} `}
    >
      <Link href={LinkRef}>
        <div className="flex justify-center items-center text-blue-400 gap-2">
          <Image
            src={"https://img.icons8.com/ios/50/FFFFFF/search--v1.png"}
            alt="search"
            width={40}
            height={40}
            className="w-4 h-4"
          />
          <p> https://github.com/andranovia/smknusa-frontend</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectLink;
