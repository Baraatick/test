import React, { useState } from "react";
import styles from "./Header.module.css";
import NavBar from "./ComponentsHeader/NavBar/NavBar";
import Menu from "./ComponentsHeader/Menu/Menu";
function Header() {
  const bar = [
    { text: "Home", url: "/" },
    { text: "Products", url: "/products" },
    { text: "About us", url: "/about" },
  ];

  return (
    <div className={styles.background}>
      <p className={styles.text}>KIT3D</p>
      <img
        className={styles.logo}
        src="src/assets/img/logo.jpeg"
        about="logo"
      />
      {bar.map((b) => (
        <NavBar text={b.text} url={b.url}></NavBar>
      ))}
      <Menu />
    </div>
  );
}

export default Header;
