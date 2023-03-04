import React from 'react';
import styles from './style.module.css';

export default function TestimonyCard({ testimony, image, name }) {
  return (
    <div className={styles.card}>
      <q className={styles.testimony}>{testimony}</q>
      <span className={styles.profile_wrapper}>
        <img
          src={image}
          loading="lazy"
          className={styles.image}
          alt={`Imagem de perfil de ${name}`}
        />
        <span className={styles.name}>{name}</span>
      </span>
    </div>
  );
}
