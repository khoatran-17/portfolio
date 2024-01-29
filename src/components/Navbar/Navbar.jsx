import './Navbar.scss';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          _KHOA_TRAN_
        </motion.span>
        <div className="social">
          <motion.a
            href="https://github.com/khoatran-17"
            target="_blank"
            whileHover={{ scale: 1.2 }}
          >
            <img src="/github.png" alt="" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/khoatran17/"
            target="_blank"
            whileHover={{ scale: 1.2 }}
          >
            <img src="/linkedin.png" alt="" />
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
