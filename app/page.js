"use client";

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from "./page.module.css";

export default function Home() {

  const [isChecked, setIsChecked] = useState(false);

  const handleTitleClick = () => {
    setIsChecked(!isChecked);
  };


  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/icone.png" />
      </Head>

      <div className={styles.videoContainer}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.topLeft}>
        <p>Hôtel Novotel<br/>Paris Tour Eiffel</p>
      </div>

      <div className={styles.bottomRight}>
        <p>Congrès<br/>Internationnal<br/>Francophone<br/>31 janvier - 1er et 2 février 2025</p>
      </div>

      <div className={styles.logoContainer}>
        <Link target="_blank" href="https://www.cfef.org/">
              <Image 
                className={styles.logoClick}
                src="/logo.png" 
                alt="Logo" 
                width={300} 
                height={300} 
              />
        </Link>
      </div>

      <div className={styles.newsContainer}>
        <div className={`${styles.title} ${isChecked ? styles.newsContainerExpanded : styles.newsContainerRetracted}`}>
          <input
            className={styles.handIcone}
            type="checkbox"
            checked={isChecked}
          />
          <h2 
            onClick={handleTitleClick} 
            className={styles.title}  
          >
            Prochain Événement 
            <Image 
              className={styles.handIcone}
              src={`${isChecked ? "/hand_blue.png" : "/hand_white.png"}`} 
              alt="hand icone" 
              width={30} 
              height={25} 
            />
          </h2>
          <p className={styles.InformationText}>
            Chers Amis,<br/>Le prochain congrès NJEF se déroulera les: 31 janvier - 1er et 2 février 2025
            <br/><br/>Le foetus, c'est le CFEF!<br/><br/>A bientôt.<br/>Le bureau du CFEF<br/>Les organisateurs
          </p>
          <a href='https://cfef.org/NJEF.php' className={styles.videoLink}>
            Accès aux vidéos des éditions précédentes</a>
        </div>
      </div>
    </div>
  );
}