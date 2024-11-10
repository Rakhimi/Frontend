'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

enum Size {
  small = '375',
  large = '1024',
}

interface SizeContextType {
  size: Size;
  changeToSmall: () => void;
  changeToLarge: () => void;
}

const SizeContext = createContext<SizeContextType | undefined>(undefined);

export const useSize = () => {
  const context = useContext(SizeContext);
  if (!context) {
    throw new Error('useSize must be used within a SizeProvider');
  }
  return context;
};

interface SizeProviderProps {
  children: ReactNode;
}

export const SizeProvider: React.FC<SizeProviderProps> = ({ children }) => {
  const [size, setSize] = useState<Size>(Size.large);

  const changeToSmall = () => setSize(Size.small);
  const changeToLarge = () => setSize(Size.large);

  return (
    <SizeContext.Provider value={{ size, changeToSmall, changeToLarge }}>
      {children}
    </SizeContext.Provider>
  );
};
