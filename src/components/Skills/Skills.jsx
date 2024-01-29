import './Skills.scss';
import Waves from '../Waves/Waves';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const variants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  animateIcons: {
    x: 0,
    opacity: 1,
    y: 20,
    transition: {
      duration: 2,
      staggerChildren: 2,
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};

const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && 'animate'}
    >
      <motion.div className="textEthic" variants={variants}>
        <p>
          I am dedicated to expanding my skills <br /> and mastering them.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <motion.div className="title">
          <hr />
          <h1>
            My <motion.b whileHover={{ color: '#415D9C' }}>Skills</motion.b>
          </h1>
        </motion.div>
      </motion.div>

      <motion.div className="listSkills" variants={variants}>
        <motion.div
          className="skillbox"
          whileHover={{ scale: 1.2 }}
          variants={variants}
          animate="animateIcons"
        >
          <h2>React</h2>
          <img src="/atom.png" alt="" />
        </motion.div>
        <motion.div
          className="skillbox"
          whileHover={{ scale: 1.2 }}
          variants={variants}
          animate="animateIcons"
        >
          <h2>Javascript</h2>
          <img src="/js.png" alt="" />
        </motion.div>
        <motion.div
          className="skillbox"
          whileHover={{ scale: 1.2 }}
          variants={variants}
          animate="animateIcons"
        >
          <h2>HTML</h2>
          <img src="/html.png" alt="" />
        </motion.div>
        <motion.div
          className="skillbox"
          whileHover={{ scale: 1.2 }}
          variants={variants}
          animate="animateIcons"
        >
          <h2>CSS</h2>
          <img src="/css-3.png" alt="" />
        </motion.div>
        <motion.div
          className="skillbox"
          whileHover={{ scale: 1.2 }}
          variants={variants}
          animate="animateIcons"
        >
          <h2>SCSS</h2>
          <img src="/sass.png" alt="" />
        </motion.div>
        <motion.div
          className="skillbox"
          whileHover={{ scale: 1.2 }}
          variants={variants}
          animate="animateIcons"
        >
          <h2>GITHUB</h2>
          <img src="/github.png" alt="" />
        </motion.div>
        <motion.div
          className="skillbox"
          whileHover={{ scale: 1.2 }}
          variants={variants}
          animate="animateIcons"
        >
          <h2>BOOTSTRAP</h2>
          <img src="/bootstrap.png" alt="" />
        </motion.div>
      </motion.div>
      <Waves />
    </motion.div>
  );
};

export default Skills;
