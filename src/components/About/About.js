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
              <p>I have an experience in cleaning and formatting the data using POWER BI</p>
            </div>
          </li>
          <li className={styles.aboutItem} onClick={() => handleSkillClick('ai')}>
            <img src={require('./icons/machine-learning.png')} alt="Machine Learning" />
            <div className={styles.aboutItemText}>
              <h3>AI/ML Developer</h3>
              <p>I have experience developing ML Apps,Deep Learning Apps using Natural Language Processing.</p>
            </div>
          </li>
          <li className={styles.aboutItem} onClick={() => handleSkillClick('ui')}>
            <img src={require('./icons/designer.png')} alt="Designer" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>I have designed multiple Posters using canvas.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
