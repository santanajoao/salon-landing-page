import React, { useContext } from 'react';
import Header from './components/Header';
import StartSection from './components/StartSection';
import AboutSection from './components/AboutSection';
import MenuContext from './context/MenuContext';
import styles from './App.module.css';
import ServicesSection from './components/ServicesSection';
import TestimoniesSection from './components/TestimoniesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const { isMenuOpen } = useContext(MenuContext);
  const AppClassName = `App ${isMenuOpen ? styles.no_scroll : ''}`;

  return (
    <div className={AppClassName}>
      <Header />
      <main className={styles.main}>
        <StartSection />
        <AboutSection />
        <ServicesSection />
        <TestimoniesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
