import React, { useEffect, useState } from 'react';
import TestimonyCard from '../TestimonyCard';
import styles from './style.module.css';

const maxDisplayedCards = 2;
const maxCardWidth = 544;
const cardsGap = 32;
const padding = 24 * 2;
const cardsSpace = maxCardWidth * maxDisplayedCards + padding + cardsGap;

function renderButtons(quantity, onClick, selected, className) {
  const buttons = [];

  for (let index = 0; index < quantity; index += 1) {
    const backgroundColor = index === selected ? '#69b99d' : '#e4e4e4';
    buttons.push(
      <button
        key={index}
        type="button"
        style={{ backgroundColor }}
        onClick={() => onClick(index)}
        className={className}
      />
    );
  }
  return buttons;
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
        {visibleTestimonies.map(({ image, name, testimony }, index) => (
          <li key={index} className={styles.list_item}>
            <TestimonyCard image={image} name={name} testimony={testimony} />
          </li>
        ))}
      </ul>

      <div className={styles.buttons_wrapper}>
        {renderButtons(buttonsNumber, setSelected, selected, styles.button)}
      </div>
    </div>
  );
}
