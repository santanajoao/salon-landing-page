import React, { useContext } from 'react';
import greenSalonLogo from '../../assets/green-salon-logo.webp';
import styles from './style.module.css';
import MenuContext from '../../context/MenuContext';
import { BsList, BsXLg } from 'react-icons/bs';

const navLinks = [
  { href: '#start', text: 'Início' },
  { href: '#about', text: 'Sobre' },
  { href: '#services', text: 'Serviços' },
  { href: '#testimonies', text: 'Depoimentos' },
  { href: '#contact', text: 'Contato' },
];

export default function Header() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const navClassName = `${styles.nav} ${isMenuOpen && styles.visible}`;

  return (
    <header className={styles.header}>
      <img
        src={greenSalonLogo}
        loading="lazy"
        className={styles.logo}
        alt="beautysalon logo"
      />

      <button
        type="button"
        onClick={() => setIsMenuOpen(true)}
        className={styles.menu_button}
      >
        <BsList className={styles.menu_icon} />
      </button>

      <nav className={navClassName}>
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className={styles.close_button}
        >
          <BsXLg className={styles.close_icon} />
        </button>

        <ul className={styles.list}>
          {navLinks.map(({ href, text }) => (
            <li
              key={text}
              onClick={() => setIsMenuOpen(false)}
              className={styles.list_item}
            >
              <a href={href} className={styles.ancor}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
