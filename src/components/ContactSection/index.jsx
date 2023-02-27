import React from 'react';
import { BsTelephone, BsWhatsapp } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import { CiMail } from 'react-icons/ci';
import styles from './style.module.css';

const contactInfos = [
  {
    text: '11 99845-6754',
    link: 'tel:11 99845-6754',
    Icon: BsTelephone,
  },
  {
    text: 'R. Amauri Souza, 346',
    link: 'https://www.google.com.br/maps',
    Icon: SlLocationPin,
  },
  {
    text: 'contato@beautysalon.com',
    link: 'mailto:contato@beautysalon.com',
    Icon: CiMail,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <h1 className={styles.title}>Entre em contato com a gente!</h1>
      <p className={styles.paragraph}>
        Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir
        suas críticas e sugestões.
      </p>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ancor_button}
      >
        <BsWhatsapp className={styles.ancor_button__icon} />
        <span className={styles.ancor_button__text}>Entrar em contato</span>
      </a>

      <address className={styles.contact_infos}>
        {contactInfos.map(({ text, link, Icon }, index) => (
          <div key={index} className={styles.contact_wrapper}>
            <Icon className={styles.contact_icon} />
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contact_ancor}
            >
              {text}
            </a>
          </div>
        ))}
      </address>
    </section>
  );
}
