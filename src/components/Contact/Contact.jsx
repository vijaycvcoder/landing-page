import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={require('./contact/emailIcon.png')} alt="Email icon" />
          <a href="mailto:vijayasundaram96@gmail.com">vijayasundaram96@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={require('./contact/linkedinIcon.png')}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/vijayasundaramvj/">linkedin.com/in/vijayasundaramvj/</a>
        </li>
        <li className={styles.link}>
          <img src={require('./contact/githubIcon.png')} alt="Github icon" />
          <a href="https://www.github.com/vijaycvcoder">github.com/vijaycvcoder</a>
        </li>
      </ul>
    </footer>
  );
};
export default Contact;
