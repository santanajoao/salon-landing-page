import React, { useState } from 'react';
import greenSalonLogo from '../../assets/green-salon-logo.webp';
import styles from './style.module.css';
import { BsList, BsX } from 'react-icons/bs';

const navLinks = [
  { href: '#start', text: 'Início' },
  { href: '#about', text: 'Sobre' },
  { href: '#services', text: 'Serviços' },
  { href: '#testemonies', text: 'Depoimentos' },
  { href: '#contact', text: 'Contato' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src={greenSalonLogo}
        className={styles.logo}
        alt="beautysalon logo"
      />

      <button type="button" className={styles.menu_button}>
        <BsList className={styles.menu_icon} />
      </button>

      <nav className={styles.nav}>
        <button type="button" className={styles.close_button}>
          <BsX className={styles.close_icon} />
        </button>

        <ul className={styles.list}>
          {navLinks.map(({ href, text }) => (
            <li className={styles.list_item}>
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
