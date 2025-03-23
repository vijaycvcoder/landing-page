// src/components/Header.js

import React, { useState } from 'react';

import styles from './Header.module.css'


export const Header = () =>{
  const [menuOpen,setMenuOpen] = useState(false);
  return(
    <nav className={styles.navbar}>
      <a className={styles.title} href=' /' >My Portfolio</a>
      <div className={styles.menu} >
        
        <img className={styles.menuBtn} 
        src={menuOpen ? require('./menu.png'):require('./close.png')}
        alt ="menu-button"
        onClick={() =>setMenuOpen(!menuOpen)}/>

        <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Header;
