import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";


interface props{
    src: string;
    divClassName: string;
    imgClassName:string;
}


const FloatingImage = ({
  src,

  divClassName,
  imgClassName,
}: props) => {
  const floatingImageAnimation = {
    floating: {
      x: {
        type: "spring",
        from: "-100%",
        to: 0,
      },
      opacity: {
        type: "spring",
        from: 0,
        to: 1,
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "150%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        className={divClassName}
      >
        <motion.img
          className={imgClassName}
          src={src}
          style={{ padding: "2px" }}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ ...floatingImageAnimation, opacity: 1 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingImage;
