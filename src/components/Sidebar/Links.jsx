import { motion } from 'framer-motion';

const Links = () => {
  const titleList = ['Home', 'Skills', 'Projects', 'Contact'];

  const variants = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },

    hide: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const item = {
    show: {
      opacity: 1,
      y: 0,
    },

    hide: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <motion.div className="links" variants={variants}>
      {titleList.map(title => {
        return (
          <motion.a
            href={`#${title}`}
            key={title}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={item}
          >
            {title}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Links;
