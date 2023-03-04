import React from 'react';
import aboutImage from '../../assets/about-image.webp';
import GradientLine from '../GradientLine';
import styles from './style.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <img
        src={aboutImage}
        loading="lazy"
        className={styles.image}
        alt="três mulheres sorrindo e segurando ferramentas de salão"
      />
      <div className={styles.text_content}>
        <h1 className={styles.title}>Sobre nós</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin
          quis bibendum diam. Sed consequat nisl laoreet eros ultricies
          pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula
          risus.
        </p>
        <p className={styles.paragraph}>
          In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut
          pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec
          luctus, nunc finibus elementum suscipit, tortor augue vulputate
          sapien, vitae feugiat enim augue sed.
        </p>
        <p className={styles.paragraph}>
          Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis
          rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu
          tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat,
          nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend
          dolor. Nullam eget dui at sem ullamcorper luctus.
        </p>
      </div>
      <GradientLine />
    </section>
  );
}
