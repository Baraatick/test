import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <>
    <div className={styles.display}>
      

      <div className={styles.content}>
      <img className={styles.support} src='src/assets/img/item.png' about='support'/>
      <img className={styles.shiping} src='src/assets/img/item-1.png' about='shiping'/>
      <img className={styles.timles} src='src/assets/img/item-2.png' about='timles'/>
      <img className={styles.product} src='src/assets/img/item-3.png' about='product'/>
      </div>
      <div className={styles.line}/>
      <div className={styles.information}> 
      <div className={styles.connect}>
         <p className={styles.textbold}>Stay Connected</p>
         <p className={styles.text}>Address: Pavalodar, Lermontova 93</p>
         <p className={styles.text}>Phone:(+7) 705 777 77 77</p>
      </div>
<div className={styles.connect}>
         <p className={styles.textbold}>KIT3D.</p>
         <p className={styles.text}>About Us</p>
         <p className={styles.text}>Products</p>
         <p className={styles.text}>Home</p>
      </div>


      <div className={styles.connect}>
         <p className={styles.textbold}>Quick Access.</p>
         <p className={styles.text}>About Us</p>
         <p className={styles.text}>FAQ</p>
         <p className={styles.text}>Blog</p>
      </div>


      </div>
    </div>

    
    <div className={styles.foot}>
         <p className={styles.text1}>© All Rights Reserved for KIT3D - 2024</p>
      </div>
    </>
  )
}

export default Footer