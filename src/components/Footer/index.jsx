import React from 'react';
import styles from './style.module.css';
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from 'react-icons/ai';
import whiteLogo from '../../assets/white-salon-logo.webp';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left_wrapper}>
        <img
          src={whiteLogo}
          loading="lazy"
          className={styles.logo}
          alt="beautysalon logo"
        />
        <div className={styles.rights}>
          <span>&copy; 2022 Beautysalon.</span>
          <p>Todos os direitos reservados</p>
        </div>
      </div>

      <div className={styles.social_ancor_wrapper}>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social_ancor}
        >
          <AiOutlineInstagram className={styles.social_icon} />
          <span className="screen-readers-only">Visite nosso instagram</span>
        </a>
        <a
          href="https://pt-br.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social_ancor}
        >
          <AiOutlineFacebook className={styles.social_icon} />
          <span className="screen-readers-only">Visite nosso facebook</span>
        </a>
        <a
          href="https://www.youtube.com/?gl=BR&hl=PT"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social_ancor}
        >
          <AiOutlineYoutube className={styles.social_icon} />
          <span className="screen-readers-only">Visite nosso youtube</span>
        </a>
      </div>
    </footer>
  );
}
