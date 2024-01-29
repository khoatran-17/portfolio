import './Hero.scss';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    x: -400,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  mouseAnimation: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

const bgVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-200%',
    transition: {
      duration: 25,
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <motion.div className="movingText1" variants={bgVariants} initial="initial" animate="animate">
        Developer Programmer
      </motion.div>
      <div className="textWrapper">
        <motion.div className="heroText" variants={variants} initial="initial" animate="animate">
          <motion.h2 variants={variants}>Khoa Tran</motion.h2>
          <motion.h1 variants={variants}>Front-end Web Developer</motion.h1>
          <motion.div className="buttons" variants={variants}>
            <motion.a href="#Projects" variants={variants} whileHover={{ scale: 1.25 }}>
              See My Projects
            </motion.a>
            <motion.a href="#Contact" variants={variants} whileHover={{ scale: 1.25 }}>
              Contact Me
            </motion.a>
          </motion.div>
          <motion.img src="/mouse.png" alt="" variants={variants} animate="mouseAnimation" />
        </motion.div>
      </div>
      <motion.div className="movingText2" variants={bgVariants} initial="initial" animate="animate">
        Developer Programmer
      </motion.div>
      <div className="heroImg">
        <img src="/khoaHeroImg.png" alt="Programmer coding on computer." />
      </div>
    </div>
  );
};

export default Hero;
