import React from 'react';
import profileImage from '../../../assets/profile.webp';
import styles from './style.module.css';

export default function TestimonyCard() {
  return (
    <div className={styles.card}>
      <q className={styles.testimony}>
        Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente
        meu cabelo mudou muito depois que comecei a tratar somente com produtos
        naturais e veganos. São profissionais incríveis e qualificados.
      </q>
      <span className={styles.profile_wrapper}>
        <img
          src={profileImage}
          className={styles.image}
          alt="Imagem de perfil de Wanessa Souza"
        />
        <span className={styles.name}>Wanessa Souza</span>
      </span>
    </div>
  );
}
