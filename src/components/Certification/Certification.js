import React from 'react';
import styles from './Certification.module.css';

const Certification = () => {
  return (
    <section id ="certification" className={styles.container}>
      <h2 className={styles.title}>Certification</h2>
      <div className={styles.certifications}>
        <div className={styles.certCard}>
          <h3>Data Analyst</h3>
          <p> Data Analytics with POWER BI </p>
          <span>Issued by: Udemy Business</span>
          <div className={styles.certDate}>Issued: April 2025</div>
          <a href="https://aws.amazon.com/verification" className={styles.certLink} target="_blank" rel="noopener noreferrer">
            View Certificate →
          </a>
        </div>

        <div className={styles.certCard}>
          <h3>Generative AI </h3>
          <p>Using LangChain & Hugging Face</p>
          <span>Issued by: Udemy Business</span>
          <div className={styles.certDate}>Issued: April 2025</div>
          <a href="https://aws.amazon.com/verification" className={styles.certLink} target="_blank" rel="noopener noreferrer">
            View Certificate →
          </a>
        </div>

        <div className={styles.certCard}>
          <h3>Advanced Microsoft Excel Course </h3>
          <p></p>
          <span>Issued by: Udemy Business</span>
          <div className={styles.certDate}>Issued: April 2025</div>
          <a href="https://aws.amazon.com/verification" className={styles.certLink} target="_blank" rel="noopener noreferrer">
            View Certificate →
          </a>
        </div>

        <div className={styles.certCard}>
          <h3>Modern C++</h3>
          <p>Multithreading, Design patterns, C++20</p>
          <span>Issued by: Udemy Business</span>
          <div className={styles.certDate}>Issued: April 2025</div>
          <a href="https://aws.amazon.com/verification" className={styles.certLink} target="_blank" rel="noopener noreferrer">
            View Certificate →
          </a>
        </div>

        {/* Repeat for other cards */}
      </div>
    </section>
  );
};

export default Certification;