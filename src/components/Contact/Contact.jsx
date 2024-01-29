import './Contact.scss';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import WavesTop from '../WavesTop/WavesTop';
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const emailRef = useRef();
  const isInView = useInView(ref, { margin: '-100px' });

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm('service_kwlzh88', 'template_2oxlrlb', emailRef.current, 'aHptYsGOZYnP5Mt0X')
      .then(
        result => {
          document.getElementById('emailForm').reset();
          alert('Thank you for the message. I will respond in a timely manner.');
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <WavesTop />
      <motion.div
        className="contactWrapper"
        variants={variants}
        initial="initial"
        whileInView="animate"
        ref={ref}
      >
        <motion.div className="contactText" variants={variants}>
          <motion.h1 variants={variants}>Get In Touch</motion.h1>
          <motion.div className="contactItem" variants={variants}>
            <h2>Mail</h2>
            <span>nkhoatran@gmail.com</span>
          </motion.div>
          <motion.div className="contactItem" variants={variants}>
            <h2>Resume</h2>
            <a href="/Khoa-Tran-Resume.pdf" target="_blank"><button>View</button></a>
          </motion.div>
        </motion.div>
        <div className="contactForm">
          <motion.div
            className="emailSvg"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0, zIndex: '-1' }}
            transition={{ delay: 3, duration: 1 }}
          >
            <svg fill="none" width="500px" height="500px" viewBox="0 0 512 512" version="1.1">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                d="M110.301,150.809l-16.146-16.147h248.643v-10H84.154l-5.52-5.52l5.184-5.184h322.369 c37.729,0,68.423,33.854,68.423,75.468c0,15.678-4.32,30.711-12.493,43.473l8.422,5.393c9.205-14.375,14.071-31.272,14.071-48.866 c0-47.127-35.181-85.467-78.423-85.467H93.818l16.375-16.375l-7.07-7.071l-38.631,38.63l38.739,38.738L110.301,150.809z"
              ></motion.path>{' '}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                d="M355,370.059l-0.02-0.088h49.77v-95.074h1.436c21.039,0,40.792-8.951,55.616-25.206l-7.388-6.739 c-12.908,14.152-30.035,21.945-48.229,21.945h-1.436v-10.78c32.755-1.44,58.984-29.901,58.984-64.695 c0-17.241-6.374-33.469-17.945-45.694c-11.629-12.298-27.129-19.071-43.642-19.071h-47.257v10h47.257 c13.735,0,26.654,5.662,36.378,15.943c9.807,10.361,15.209,24.148,15.209,38.821c0,29.271-21.744,53.25-48.984,54.694V174.62 H88.561v46.371L27.39,234.176L69.91,431.488L355,370.059z M86.771,417.626l22.802-27.613l-7.71-6.367L76.46,414.408 l-35.615-165.27l47.716,32.319v88.513h219.374L86.771,417.626z M230.994,284.395c4.684,3.361,10.172,5.041,15.66,5.041 s10.978-1.681,15.66-5.041l54.133-38.845l-5.83-8.125l-54.133,38.845c-5.879,4.219-13.779,4.221-19.66,0L109.105,184.62h275.096 l-44.016,31.586l5.829,8.125l48.735-34.972v165.368l-102.419-79.866l-6.147,7.887l99.029,77.223H108.099l99.022-77.223 l-6.15-7.887l-102.41,79.865V189.362L230.994,284.395z M88.561,269.381l-42.737-28.948l42.737-9.212V269.381z"
              ></motion.path>{' '}
            </svg>
          </motion.div>
          <motion.form
            id="emailForm"
            ref={emailRef}
            onSubmit={sendEmail}
            action=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <input type="text" name="user_name" id="" placeholder="Name" required />
            <input type="text" name="user_email" id="" placeholder="Email" required />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Let's Chat!"
              required
            ></textarea>
            <button>Submit</button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
