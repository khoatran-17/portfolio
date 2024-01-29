import './Projects.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import WavesTop from '../WavesTop/WavesTop';
import Waves from '../Waves/Waves';

const projectList = [
  {
    id: 1,
    title: 'Recipe App',
    img: '/recipeApp.png',
    link: 'https://khoatran-recipe-app.netlify.app',
    desc: 'A web application that lets users search up recipes, and display the ingredients, serving size, and cooking time. It allows users to bookmark recipes and create their own using the local storage API. The app fetches data from a recipe API endpoint and renders it on the page.',
  },
  {
    id: 2,
    title: 'Landmark App',
    img: '/landmarkApp.png',
    link: 'https://khoatran-landmarker-app.netlify.app',
    desc: 'A web application that lets users mark multiple locations on a highly interactive map. It leverages the open-sourced Leaflet library to render the interactive map, markers, and labels. Users can save their markers through the local storage API.',
  },
  {
    id: 3,
    title: 'Portfolio Site',
    img: '/portfolioWebsite.png',
    link: 'https://nkhoatran.com/',
    desc: 'A responsive personal portfolio site created using the component-based React library and Framer Motion. Framer Motion is an animation library that adds captivating animations like on scroll animations, smooth transitions, and fluid page elements. The synergy between the two allows the user to experience a responsive UI and beautiful animations.',
  },
  {
    id: 4,
    title: 'Dice Game',
    img: '/diceGame.png',
    link: 'https://khoatran-dice-game.netlify.app/',
    desc: "A interactive dice game created using vanilla JavaScript, CSS, and HTML. The game can be played with two players, each taking turn to roll the dice. JavaScript is used to calculate the score and to determine the winner of the game, and CSS is used to render the players' moves.",
  },
  {
    id: 5,
    title: 'Budget Planner',
    img: '/budgetPlanner.png',
    link: 'https://khoa-tran-budget-planner.netlify.app/',
    desc: 'A simple, interactive budget planner that allow users to calculate their income and expenses. The calculations are done with JavaScript and the elements are rendered with CSS.',
  },
];

const SingleProject = ({ project }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section className="fullView">
      <div className="projectContainer">
        <div className="wrapper">
          <motion.div
            className="imgContainer"
            ref={ref}
            initial={{
              opacity: 0,
              scale: 0.5,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
          >
            <img src={project.img} alt="" />v
          </motion.div>
          <motion.div className="projectDescContainer" style={{ y: y }}>
            <h2>{project.title}</h2>
            <motion.p>{project.desc}</motion.p>
            <motion.a href={project.link} target="_blank" whileHover={{ scale: 1.25 }}>
              Check It Out
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 50,
  });

  return (
    <div className="projects" id="Projects" ref={ref}>
      <WavesTop />
      <div className="title">
        <h1>Featured Projects</h1>
        <motion.div className="progressBar" style={{ scaleX: scaleX }}></motion.div>
      </div>
      {projectList.map(project => (
        <SingleProject project={project} key={project.id} />
      ))}
      <Waves />
    </div>
  );
};

export default Projects;
