import React from 'react';
import styles from './style.module.css';
import image from '../../assets/start-image.webp';

export default function StartSection() {
  return (
    <section className={styles.section}>
      <img
        src={image}
        className={styles.image}
        alt="Mulheres em um salão. Uma está atendendo com uma escova e um secador de cabelo na mão"
      />
      <div className={styles.text_content}>
        <h1 className={styles.title}>Saúde natural para os seus cabelos</h1>
        <p className={styles.paragraph}>
          Um salão exclusivo em São Paulo, especializado em tratamentos
          naturais.
        </p>
        <a href="#contact" className={styles.ancor}>
          Agendar um horário
        </a>
      </div>
    </section>
  );
}
