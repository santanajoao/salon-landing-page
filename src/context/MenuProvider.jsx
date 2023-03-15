import React, { useMemo, useState } from 'react';
import MenuContext from './MenuContext';

export default function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const values = useMemo(
    () => ({ isMenuOpen, setIsMenuOpen }),
    [isMenuOpen, setIsMenuOpen]
  );

  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
}
