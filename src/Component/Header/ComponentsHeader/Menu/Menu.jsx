import { Component, useEffect, useState } from "react";
import stylesheader from "/src/Component/Header/Header.module.css";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

function IPad({ isOpenMenu, handleMouse }) {
  const [isSearchHover, setSearchHover] = useState(false);
  const [isBasketHover, setBasketHover] = useState(false);
  const [isBadgeHover, setBadgeHover] = useState(false);

  const [card, setCard] = useState(false);

  function showCard() {
    setCard(true);
    
  }
``
  return (
    <>
      <div
        className={
          !isOpenMenu ? styles.backgroundIPad : styles.backgroundIPadopen
        }
      >
        <div
          className={
            styles.searchbackgroundIPad +
            " " +
            (isBasketHover ? styles.rigthallhide : "") +
            (isBadgeHover ? styles.rigthallhide : "")
          }
          onMouseOver={() => setSearchHover(true)}
          onMouseLeave={() => setSearchHover(false)}
        >
          <img
            src="src/assets/img/onlyiconsearch.png"
            about="search"
            className={styles.searchopen}
          />
          <p className={styles.textcontainer}>Search</p>
        </div>
        <Link to="/profile/basket">
          <div
            className={
              styles.basketbackgroundIPad +
              " " +
              (isSearchHover ? styles.leftallhide : "") +
              (isBadgeHover ? styles.rigthallhide : "")
            }
            onMouseOver={() => setBasketHover(true)}
            onMouseLeave={() => setBasketHover(false)}
          >
            <img
              src="src/assets/img/onlyiconbasket.png"
              about="basket"
              className={styles.basketopen}
            />
            <p className={styles.textcontainer}>Basket</p>
          </div>
        </Link>

        <Link to="/login">
          <div
            className={
              styles.badgebackgroundIPad +
              " " +
              (isSearchHover ? styles.leftallhide : "") +
              " " +
              (isBasketHover ? styles.leftallhide : "")
            }
            onMouseOver={() => setBadgeHover(true)}
            onMouseLeave={() => setBadgeHover(false)}
          >
            <img
              src="src/assets/img/badge.png"
              about="badge"
              className={styles.badgeopen}
            />
            <p className={styles.textcontainer}>Register/Login</p>
          </div>
        </Link>
      </div>
      <div className={styles.microcontent} onMouseDown={handleMouse}>
        <div
          className={
            styles.upline + " " + (isOpenMenu ? styles.uplineopen : "")
          }
        />
        <div
          className={
            styles.midleline + " " + (isOpenMenu ? styles.midlelineopen : "")
          }
        />
        <div
          className={
            styles.downline + " " + (isOpenMenu ? styles.downlineopen : "")
          }
        />
      </div>
    </>
  );
}
function isDefault() {
  const [card, setCard] = useState(false);

  function showCard() {
    setCard(true);
  }

  console.log(card);

  return (
    <>
      <Link to="/login">
        <img
          className={stylesheader.login}
          src="src/assets/img/login.jpeg"
          about="login"
        />
      </Link>
      <Link to="/profile/basket">
        <div
          onClick={() => showCard()}
          className={styles.basketbackgroundIPad}
          onMouseOver={() => setBasketHover(true)}
          onMouseLeave={() => setBasketHover(false)}
        >
          <img
            src="src/assets/img/onlyiconbasket.png"
            about="basket"
            className={styles.basketopen}
          />
          <p className={styles.textcontainer}>Basket</p>
        </div>
      </Link>
      <img
        className={stylesheader.search}
        src="src/assets/img/search.jpeg"
        about="search"
      />
    </>
  );
}

function Mobile({ isOpenMenu, handleMouse }) {
  const [isSearchHover, setSearchHover] = useState(false);
  const [isBasketHover, setBasketHover] = useState(false);
  const [isBadgeHover, setBadgeHover] = useState(false);

  return (
    <>
      <div className={!isOpenMenu ? styles.background : styles.backgroundopen}>
        <div
          className={
            styles.searchbackground +
            " " +
            (isBasketHover ? styles.rigthallhide : "") +
            (isBadgeHover ? styles.rigthallhide : "")
          }
          onMouseOver={() => setSearchHover(true)}
          onMouseLeave={() => setSearchHover(false)}
        >
          <img
            src="src/assets/img/onlyiconsearch.png"
            about="search"
            className={styles.searchopen}
          />
          <p className={styles.textcontainer}>Search</p>
        </div>

        <Link to="/profile/basket">
          <div
            className={
              styles.basketbackground +
              " " +
              (isSearchHover ? styles.leftallhide : "") +
              (isBadgeHover ? styles.rigthallhide : "")
            }
            onMouseOver={() => setBasketHover(true)}
            onMouseLeave={() => setBasketHover(false)}
          >
            <img
              src="src/assets/img/onlyiconbasket.png"
              about="basket"
              className={styles.basketopen}
            />
            <p className={styles.textcontainer}>Basket</p>
          </div>
        </Link>

        <Link to="/login">
          <div
            className={
              styles.badgebackground +
              " " +
              (isSearchHover ? styles.leftallhide : "") +
              " " +
              (isBasketHover ? styles.leftallhide : "")
            }
            onMouseOver={() => setBadgeHover(true)}
            onMouseLeave={() => setBadgeHover(false)}
          >
            <img
              src="src/assets/img/badge.png"
              about="badge"
              className={styles.badgeopen}
            />
            <p className={styles.textcontainer}>Register/Login</p>
          </div>
        </Link>
      </div>
      <div className={styles.microcontent} onMouseDown={handleMouse}>
        <div
          className={
            styles.upline + " " + (isOpenMenu ? styles.uplineopen : "")
          }
        />
        <div
          className={
            styles.midleline + " " + (isOpenMenu ? styles.midlelineopen : "")
          }
        />
        <div
          className={
            styles.downline + " " + (isOpenMenu ? styles.downlineopen : "")
          }
        />
      </div>
    </>
  );
}
function Menu() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenMenu, setOpenMenu] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouse = (e) => {
    setOpenMenu(!isOpenMenu);
  };

  return windowWidth > 1080 ? (
    isDefault()
  ) : windowWidth > 650 ? (
    <IPad isOpenMenu={isOpenMenu} handleMouse={handleMouse} />
  ) : (
    <Mobile isOpenMenu={isOpenMenu} handleMouse={handleMouse} />
  );
}

export default Menu;
