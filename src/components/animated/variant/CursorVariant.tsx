import useMouse from "@react-hook/mouse-position";

export const useVariants = (ref: React.MutableRefObject<null>) => {
  const mouse = useMouse(ref, {
    enterDelay: 50,
    leaveDelay: 50,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;
  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  return {
    initial: {
      opacity: 0,
      height: 40,

      width: 620,
      fontSize: "20px",
      padding: "4px",
      borderRadius: " 0.4rem",

      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    default: {
      opacity: 0.8,
      height: 40,

      width: 120,
      fontSize: "20px",
      padding: "4px",
      borderRadius: " 0.4rem",

      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    hover: {
      opacity: 1,
      borderRadius: " 10rem",
      color: "#000",

      height: 180,
      width: 180,
      fontSize: "25px",
      x: mouseXPosition - 380,
      y: mouseYPosition - 200,
    },
  };
};

export const spring = {
  type: "spring",
  stiffness: 200,
  damping: 28,
};
