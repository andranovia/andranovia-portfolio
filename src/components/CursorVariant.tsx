import useMouse from "@react-hook/mouse-position";


export const useVariants = (ref: React.MutableRefObject<null>) => {
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
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
    default: {
      opacity: 0.8,
      height: 40,

      width: 120,
      fontSize: "20px",
      padding: '4px',
      borderRadius: ' 0.4rem',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    hover: {
      opacity: 1,
      borderRadius: ' 0.4rem',
      color: "#000",

      height: 50,
      width: 160,
      fontSize: "25px",
      x: mouseXPosition - 300,
      y: mouseYPosition - 30,
    },
  };
};

export const spring = {
  type: "spring",
  stiffness: 500,
  damping: 28,
};