import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TotalScoreInterface {
  totalScore: number;
  setTotalScore: React.Dispatch<React.SetStateAction<number>>;
}

export const TotalScoreContext = createContext<TotalScoreInterface>({
  totalScore: 0,
  setTotalScore: () => {},
});

export const TotalScoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [totalScore, setTotalScore] = useState(0);

  return (
    <TotalScoreContext.Provider value={{ totalScore, setTotalScore }}>
      {children}
    </TotalScoreContext.Provider>
  );
};
