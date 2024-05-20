'use client'
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './styles/Home.module.css';

const Page = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Kevork Krikor Aroushian.pdf';
    link.download = '/Kevork Krikor Aroushian.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Kevork Aroushian Portfolio</title>
      </Head>
      <div className={styles.header}>
        <h1>Hi, I'm Kevork Aroushian</h1>
        <p>IT Student</p>
      </div>
      <div className={styles.imageContainer}>
        <Image src='/mypic.jpeg' alt="My Profile Image" width={250} height={300} />
      </div>
      <div className={styles.specialities}>
        <h2>Specialities</h2>
        <ul>
          <li>Web Development</li>
          <li>DevOps</li>
          <li>Machine Learning</li>
        </ul>
      </div>
      <div className={styles.clients}>
        <h2>Recent Clients</h2>
        <ul>
          <li>Google</li>
          <li>Insta</li>
          <li>WhatsApp</li>
          <li>Adobe</li>
          <li>Viber</li>
          <li>Cloud</li>
          <li>AWS</li>
          <li>...</li>
        </ul>
      </div>
      <div className={styles.footer}>
        <button onClick={handleDownload} className={styles.downloadButton}>
          Download CV
        </button>
        <p>Follow me on: Instagram</p>
        <ul>
          <li><a href="https://www.instagram.com/g.aroushian/">g.aroushian</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
