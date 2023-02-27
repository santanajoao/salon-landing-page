import React from 'react';
import wanessaImage from '../../assets/wanessa-profile.webp';
import lunaImage from '../../assets/luna-profile.webp';
import womanProfile from '../../assets/woman-profile.webp';
import manProfile from '../../assets/man-profile.webp';
import outlineProfile from '../../assets/outline-profile.webp';
import styles from './style.module.css';
import Carrousel from './Carrousel';

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
  {
    image: manProfile,
    name: 'Jhon Doe',
    testimony:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas distinctio voluptas similique reiciendis vero vel voluptatum voluptates fugiat quam ipsum odio error, molestiae enim iusto eligendi laudantium expedita magnam.',
  },
  {
    image: outlineProfile,
    name: 'Rob Algernon',
    testimony:
      'Hic quas distinctio voluptas similique reiciendis vero vel voluptatum voluptates fugiat quam ipsum odio error, molestiae enim iusto eligendi laudantium expedita magnam.',
  },
  {
    image: manProfile,
    name: 'Alexandre Benjamine',
    testimony:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas distinctio voluptas similique reiciendis vero vel voluptatum voluptates fugiat quam ipsum odio error, molestiae enim iusto eligendi laudantium expedita magnam.',
  },
  {
    image: womanProfile,
    name: 'Harriett Bernetta',
    testimony:
      'Hic quas distinctio voluptas similique reiciendis vero vel voluptatum voluptates fugiat quam ipsum odio error, molestiae enim iusto eligendi laudantium expedita magnam.',
  },
];

export default function TestimoniesSection() {
  return (
    <section id="testimonies" className={styles.section}>
      <h1 className={styles.section_title}>
        Depoimentos de quem já passou por aqui
      </h1>

      <Carrousel testimonies={testimonyList} />
    </section>
  );
}
