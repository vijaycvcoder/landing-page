import React, { useState } from "react";
import styles from "./Hero.module.css";

export const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vijay</h1>
        <p className={styles.description}>
          I'm a Software Developer with 5+ years of Experience.
          Passionate about blending logic and creativity to solve problems, 
          tell stories through data, and user-focused solutions that stands out.
        </p>
        <p className={styles.description}>
          Let's connect and create something impactful!
        </p>
        <button 
          onClick={() => setShowPopup(true)} 
          className={styles.contactBtn}
        >
          Contact Me
        </button>
      </div>
      <img
        src={require('./man-image.png')}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {showPopup && (
        <div className={styles.popupOverlay} onClick={() => setShowPopup(false)}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setShowPopup(false)}>×</button>
            <h2>Let's Connect!</h2>
            <p>Email me at:</p>
            <a href="mailto:vijayasundaram96@gmail.com">vijayasundaram96@gmail.com</a>
          </div>
        </div>
      )}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default HeroSection;
