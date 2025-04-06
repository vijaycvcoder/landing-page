import React from 'react';
import styles from './Certification.module.css';

const Certification = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>My Certifications</h2>
      <div className={styles.certifications}>
        <div className={styles.certCard}>
          <h3>AWS Cloud Practitioner</h3>
          <p>Cloud Computing Fundamentals</p>
          <span>Issued by: Amazon Web Services (AWS)</span>
          <div className={styles.certDate}>Issued: December 2023</div>
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