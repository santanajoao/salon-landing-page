import React, { useState } from 'react';
import MenuContext from './MenuContext';

export default function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const values = { isMenuOpen, setIsMenuOpen };

  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
}
