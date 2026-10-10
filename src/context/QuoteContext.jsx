import React, { createContext, useContext, useState } from 'react';

const QuoteContext = createContext(null);

export const QuoteProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openQuote = (serviceId = '') => {
    setSelectedService(serviceId);
    setIsOpen(true);
  };

  const closeQuote = () => {
    setIsOpen(false);
  };

  return (
    <QuoteContext.Provider value={{ isOpen, selectedService, openQuote, closeQuote, setSelectedService }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};
