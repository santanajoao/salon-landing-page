import React, { useState } from 'react';
import TestimonyCard from './TestimonyCard';
import wanessaImage from '../../assets/wanessa-profile.webp';
import lunaImage from '../../assets/luna-profile.webp';
import styles from './style.module.css';

const testimonyList = [
  {
    image: wanessaImage,
    name: 'Wanessa Souza',
    testimony:
      'Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.',
  },
  {
    image: lunaImage,
    name: 'Luna Falcão',
    testimony:
      'Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo. Adoro todos os profissionais do Beautysalon.',
  },
];

function renderButtons(ammount, onClick, selected) {
  const buttons = [];
  for (let index = 0; index < ammount; index += 1) {
    const backgroundColor = index === selected ? '#69b99d' : '#e4e4e4';
    buttons.push(
      <button
        type="button"
        style={{ backgroundColor: backgroundColor }}
        onClick={() => onClick(index)}
        className={styles.button}
      />
    );
  }
  return buttons;
}

export default function TestimoniesSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="testimonies" className={styles.section}>
      <h1 className={styles.section_title}>
        Depoimentos de quem já passou por aqui
      </h1>

      <div className={styles.carrousel}>
        <ul>
          {testimonyList.map(({ image, name, testimony }, index) => (
            <li
              style={{ display: index === selected ? 'flex' : 'none' }}
              className={styles.list_item}
            >
              <TestimonyCard image={image} name={name} testimony={testimony} />
            </li>
          ))}
        </ul>

        <div className={styles.buttons_wrapper}>
          {renderButtons(2, setSelected, selected)}
        </div>
      </div>
    </section>
  );
}
