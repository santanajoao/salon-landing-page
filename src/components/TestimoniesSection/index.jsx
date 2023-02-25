import React from 'react';
import TestimonyCard from './TestimonyCard';
import styles from './style.module.css';

export default function TestimoniesSection() {
  return (
    <section className={styles.section}>
      <h1 className={styles.section_title}>
        Depoimentos de quem já passou por aqui
      </h1>
      <TestimonyCard />
    </section>
  );
}
