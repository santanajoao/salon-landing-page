import React from 'react';
import womanHair from '../../assets/woman-hair.webp';
import scissor from '../../assets/scissor.webp';
import hairProducts from '../../assets/hair-products.webp';
import styles from './style.module.css';

const servicesList = [
  {
    image: womanHair,
    service: 'Terapia Capilar',
    description:
      'Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.',
  },
  {
    image: scissor,
    service: 'Cortes',
    description:
      'A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.',
  },
  {
    image: hairProducts,
    service: 'Tratamentos',
    description:
      'O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.text_content}>
        <h1 className={styles.section__title}>Serviços</h1>
        <p className={styles.section__paragraph}>
          Com mais de 10 anos no mercado, o{' '}
          <span className={styles.emphasis}>Beautysalon</span> já conquistou
          clientes de inúmeros países com seus tratamentos exclusivos e
          totalmente naturais
        </p>
      </div>

      <ul className={styles.list}>
        {servicesList.map(({ image, service, description }) => (
          <li className={styles.list_item}>
            <div className={styles.card}>
              <img src={image} className={styles.image} alt="" />
              <h2 className={styles.card_title}>{service}</h2>
              <p className={styles.card_paragraph}>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
