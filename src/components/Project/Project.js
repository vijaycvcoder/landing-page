import React from 'react';
import styles from './Project.module.css';

const Project = () => {
  return (
    <section id = "projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        <div className={styles.projectCard}>
          <h3>Daily Facts based on Wikipedia</h3>
          <p>An AI Generated image based Instagram Page </p>
           <div className={styles.techStack}>
            <span>Python</span>
            <span>VibeCoding</span>
          </div>
           <div className={styles.links}>
            <a href="https://github.com/vijaycvcoder/insta-news-publisher" target="_blank" rel="noopener noreferrer">View Code →</a>
            <a href="https://www.instagram.com/dailyfacts2247/" target="_blank" rel="noopener noreferrer">Live Demo →</a>
          </div>
        </div>
{/*     
        <div className={styles.projectCard}>
          <h3>Weather Dashboard</h3>
          <p>Real-time weather application using Weather API</p>
          <div className={styles.techStack}>
            <span>JavaScript</span>
            <span>API</span>
            <span>CSS3</span>
          </div>
          <div className={styles.links}>
            <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">View Code →</a>
            <a href="https://project2-demo.com" target="_blank" rel="noopener noreferrer">Live Demo →</a>
          </div>
        </div>

        <div className={styles.projectCard}>
          <h3>Task Manager</h3>
          <p>A collaborative task management application</p>
          <div className={styles.techStack}>
            <span>React</span>
            <span>Firebase</span>
            <span>Material-UI</span>
          </div>
          <div className={styles.links}>
            <a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer">View Code →</a>
            <a href="https://project3-demo.com" target="_blank" rel="noopener noreferrer">Live Demo →</a>
          </div>
        </div>*/ }
      </div>
    </section>
  );
};

export default Project;