import './Sidebar.scss';
import MenuButton from './MenuButton';
import Links from './Links';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  const variants = {
    show: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        type: 'spring',
        stiffness: 50,
      },
    },
    hide: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 50,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={toggle ? 'show' : 'hide'}>
      <motion.div className="navLinks" variants={variants}>
        <Links />
      </motion.div>

      <MenuButton setToggle={setToggle} />
    </motion.div>
  );
};

export default Sidebar;
