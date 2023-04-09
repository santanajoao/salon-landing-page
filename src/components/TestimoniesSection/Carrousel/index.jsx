import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import TestimonyCard from '../TestimonyCard';
import styles from './style.module.css';
import RadioSelection from '../RadioSelection';

const cardsSpace = 1000;

function renderRadios(quantity, onChange, selected, className) {
  const radios = [];

  for (let index = 0; index < quantity; index += 1) {
    const inputId = `carousel-selection-${index}`;
    radios.push(
      <RadioSelection
        key={inputId}
        id={inputId}
        name="testimony-carousel-selection"
        onChange={() => onChange(index)}
        className={className}
        checked={index === selected}
        label={`Mover para página ${index + 1} do carrossel`}
      />,
    );
  }
  return radios;
}

export default function Carrousel({ testimonies }) {
  const [displayedCards, setDisplayedCards] = useState(1);
  const [selected, setSelected] = useState(0);
  const [device, setDevice] = useState('mobile');

  const start = selected * displayedCards;
  const visibleTestimonies = testimonies.slice(start, start + displayedCards);
  const buttonsNumber = Math.trunc(testimonies.length / displayedCards);

  function calculateDisplayedCards() {
    const { innerWidth } = window;
    if (innerWidth >= cardsSpace && device === 'mobile') {
      setDevice('desktop');
      setDisplayedCards(2);
      setSelected(Math.trunc(selected / 2));
    } else if (innerWidth < cardsSpace && device === 'desktop') {
      setDevice('mobile');
      setDisplayedCards(1);
      setSelected(selected * 2);
    }
  }

  useEffect(() => {
    calculateDisplayedCards();
  }, []);

  window.onresize = () => {
    calculateDisplayedCards();
  };

  return (
    <div className={styles.carrousel}>
      <ul className={styles.list}>
        {visibleTestimonies.map(({ image, name, testimony }) => (
          <li key={nanoid()} className={styles.list_item}>
            <TestimonyCard image={image} name={name} testimony={testimony} />
          </li>
        ))}
      </ul>

      <div className={styles.radios_wrapper}>
        {renderRadios(buttonsNumber, setSelected, selected, styles.radio)}
      </div>
    </div>
  );
}
