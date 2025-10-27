import React, { createContext, useState } from 'react';

// 1. Létrehozzuk a contextet
export const AuthContext = createContext(null);

// 2. Létrehozzuk a "Provider"-t (szolgáltatót)
// Ez egy komponens, ami körbeveszi az alkalmazásunkat,
// és elérhetővé teszi az állapotot minden gyerek-komponens számára.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Kezdetben senki nincs bejelentkezve

  // Egy egyszerűsített bejelentkezési funkció
  // A valóságban itt egy API hívás lenne
  const login = (userData) => {
    setUser({ name: 'Teszt Elek', email: userData.email });
  };

  const logout = () => {
    setUser(null);
  };

  // Az érték, amit megosztunk az alkalmazással
  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};