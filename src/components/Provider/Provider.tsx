import React, { createContext, useEffect, useState, FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AnkrscanProvider from '@ankr.com/ankr.js';

interface IProviderProps {
  children: React.ReactNode;
  apiKey?: string;
}

const queryClient = new QueryClient();

interface IGlobalContextType {
  apiKey?: string;
  ankrjsProvider: AnkrscanProvider;
}

export const AnkrGlobalContext = createContext<IGlobalContextType>({
  apiKey: '',
  ankrjsProvider: new AnkrscanProvider(''),
});

export const Provider: FC<IProviderProps> = ({ children, apiKey = '' }) => {
  const [ankrjsProvider, setAnkrjsProvider] = useState<AnkrscanProvider>(
    new AnkrscanProvider(apiKey)
  );

  useEffect(() => {
    setAnkrjsProvider(new AnkrscanProvider(apiKey));
  }, [apiKey]);

  return (
    <AnkrGlobalContext.Provider
      value={{
        apiKey,
        ankrjsProvider,
      }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AnkrGlobalContext.Provider>
  );
};
