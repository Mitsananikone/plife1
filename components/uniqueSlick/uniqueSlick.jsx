import React, { useState, useEffect } from 'react';
import styles from './uniqueSlick.module.css';
import { motion } from 'framer-motion';


const UniqueSlick = () => {
  const words = ['LIFE', 'PRICE', 'EXPERIENCE'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
};

const slideOutToLeft = {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 0, x: -100 },
};


  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTimeout(() => {
          setIsFading(false);
        }, 300);
      }, 300); // Half of transition duration
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className={styles.uniqueContainer}>
      <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
    <div>
        <span className={styles.span1}>UNIQUE</span>
    </div>
    <div>
        <motion.span 
            initial="hidden"
            animate={isFading ? slideOutToLeft.visible : slideInFromRight.hidden}
            exit="hidden"
            variants={slideOutToLeft}
            className={styles.span2}
        >
            {words[currentWordIndex]}
        </motion.span>
        <motion.span 
            initial="hidden"
            animate={isFading ? slideInFromRight.visible : slideOutToLeft.hidden}
            exit="hidden"
            variants={slideInFromRight}
            className={styles.span2}
        >
            {words[(currentWordIndex + 1) % words.length]}
        </motion.span>
    </div>
</div>

        <div className={styles.subTitle}>
          <span>Top Surgeons and Specialists</span>
          <span> Affordable Pricing </span>
          <span>Free Consultation</span>
        </div>
      </div>
      <button
        className={styles.requestButton}
      >
        NEXT
      </button>
    </div>
  );
};

export default UniqueSlick;
