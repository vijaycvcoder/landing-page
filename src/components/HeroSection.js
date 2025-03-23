import React from "react";

import styles from "./Hero.module.css";

export const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vijay</h1>
        <p className={styles.description}>
          I'm a Software Developer with 5+ years of Experience.
          Worked on various software development tools .
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:vijayasundaram96@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={require('./man-image.png')}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default HeroSection;
