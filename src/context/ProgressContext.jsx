import { createContext, useContext } from 'react';

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  return (
    <ProgressContext.Provider value={{}}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() { return useContext(ProgressContext); }