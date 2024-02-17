// import "./styles.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RiArrowLeftSFill } from "react-icons/ri";
import { RiArrowRightSFill } from "react-icons/ri";
import { projectData } from "../const/projectData";
import { useNavigate } from "react-router";

export default function Project() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const items = ["🍔", "🍕", "🌭", "🍗"];
  const [imageArray, setImageArray] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const extractedImages = projectData.map((project) => project.imageUrl);
    setImageArray(extractedImages);
  }, [projectData]);

  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  const visibleItems = [...imageArray, ...imageArray].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );
  const handleClick = (newDirection) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  const handleOpen = () => {
    navigate("/project/2");
  };
  return (
    <>
      <section className="project grid grid-cols-8 relative top-[-90px] bg-[#3D4849]">
        <div className="col-span-2 h-[100vh]">
          <div className="flex flex-col items-end justify-center h-[100%] relative ">
            <div className=" ps-10 mt-[-50px]">
              <h1 className="text-white text-[30px] font-[600] ">
                Project Title
              </h1>
              <p className="text-white mt-4 text-[16px] font-[500] text-justify font-roboto">
                Project Decription goes here Project Decription goes here
                Project Decription goes here
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-6 h-[100vh]">
          <div className="flex flex-col  justify-center h-[100%] relative ">
            <div className="main-wrapper mt-32">
              <div className="wrapper">
                {/*AnimatePresence is necessary to show the items after they are deleted because only max. 3 are shown*/}
                <AnimatePresence mode="popLayout" initial={false}>
                  {visibleItems.map((item) => {
                    // The layout prop makes the elements change its position as soon as a new one is added
                    // The key tells framer-motion that the elements changed its position
                    return (
                      <motion.div
                        className="card "
                        key={item}
                        layout
                        custom={{
                          direction,
                          position: () => {
                            if (item === visibleItems[0]) {
                              return "left";
                            } else if (item === visibleItems[1]) {
                              return "center";
                            } else {
                              return "right";
                            }
                          },
                        }}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 1 }}
                      >
                        <img
                          className="cursor-pointer"
                          src={item}
                          onClick={handleOpen}
                        ></img>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
              <div className="buttons">
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  onClick={() => handleClick(-1)}
                >
                  <RiArrowLeftSFill className="text-4xl" />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  onClick={() => handleClick(1)}
                >
                  <RiArrowRightSFill className="text-4xl" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const variants = {
  enter: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }) => {
    return {
      scale: position() === "left" ? 1 : 0.7,
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: 1,
    };
  },
  exit: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

function getZIndex({ position, direction }) {
  const indexes = {
    left: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2,
  };
  return indexes[position()];
}
