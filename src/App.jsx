import React, { useContext } from 'react';
import Header from './components/Header';
import StartSection from './components/StartSection';
import MenuContext from './context/MenuContext';
import styles from './App.module.css';

export default function App() {
  const { isMenuOpen } = useContext(MenuContext);
  const AppClassName = `App ${isMenuOpen && styles.no_scroll}`;

  return (
    <div className={AppClassName}>
      <Header />
      <StartSection />
    </div>
  );
}
