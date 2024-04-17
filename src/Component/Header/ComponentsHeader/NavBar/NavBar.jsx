import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css"

function NavBar({text, url}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  const [isSelect, setSelect] = useState('');
  const handleClick = () => {

  }
  return windowWidth > 650 ?  (
    <div className={styles.display} onClick={handleClick}>
     <Link to={url} className={`${styles.name}` + ` ${isSelect ? styles.selected : ''}`}>{text}</Link>
    </div>
  ) : null;
}

export default NavBar;