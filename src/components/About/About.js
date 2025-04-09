import React from 'react';
import styles from './About.module.css';

const About = ({ onSkillSelect }) => {
  const handleSkillClick = (skillType) => {
    if (typeof onSkillSelect === 'function') {
      onSkillSelect(skillType);
    }
  };

  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={require('./icons/marketing_about_me.png')}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem} onClick={() => handleSkillClick('data')}>
            <img src={require('./icons/data-analyst.png')} alt="Data analyst" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>I specialize in transforming complex datasets into clear,
                actionable insights that empower to make informed decisions</p>
                <div className={styles.techStack}>
                  <span>Data Analysis</span>
                  <span>Data Visualization</span>
                  <span>Power BI</span>
                  <span>Excel</span>
                  <span>Data Preprocessing</span>
                  <span>Feature Engineering</span>
              </div>
            </div>
          </li>
          <li className={styles.aboutItem} onClick={() => handleSkillClick('ai')}>
            <img src={require('./icons/machine-learning.png')} alt="Machine Learning" />
            <div className={styles.aboutItemText}>
              <h3>AI/ML Software Developer</h3>
              <p>I design and deploy innovative machine learning models that transform
              raw data into intelligent, real-world applications.</p>
              <div className={styles.techStack}>
                <span>Python</span>
                <span>Machine Learning</span>
                <span>Deep Learning</span>
                <span>Natural Language Processing (NLP)</span>
              </div>
            </div>
          </li>
          <li className={styles.aboutItem} onClick={() => handleSkillClick('ui')}>
            <img src={require('./icons/designer.png')} alt="Designer" />
            <div className={styles.aboutItemText}>
              <h3>Graphic Designer</h3>
              <p>I create powerful visual experiences that communicate ideas,
                evoke emotions, and leave a lasting impact.</p>
                <div className={styles.techStack}>
                  <span>Branding & Identity Design</span>
                  <span>Print & Digital Media</span>
                  <span>Logo Design</span>
                  <span>Canva</span>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
