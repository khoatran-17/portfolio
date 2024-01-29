import { motion } from 'framer-motion';

const MenuButton = ({ setToggle }) => {
  return (
    <button onClick={() => setToggle(prev => !prev)}>
      <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none">
        <motion.path
          d="M4 18L20 18"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            show: { d: 'M4 18L20 6' },
            hide: { d: 'M4 18L20 18' },
          }}
        />

        <motion.path
          d="M4 12L20 12"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            show: { opacity: 0 },
            hide: { opacity: 1 },
          }}
        />

        <motion.path
          d="M4 6L20 6"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            show: { d: 'M4 6L20 18' },
            hide: { d: 'M4 6L20 6' },
          }}
        />
      </svg>
    </button>
  );
};

export default MenuButton;
