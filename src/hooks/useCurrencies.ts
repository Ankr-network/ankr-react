import type { GetCurrenciesRequest } from '@ankr.com/ankr.js/dist/types'
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { getCurrencies } from '../api';
import { AnkrGlobalContext } from '../components';

export const useCurrencies = (params: GetCurrenciesRequest) => {
  const { ankrjsProvider } = useContext(AnkrGlobalContext);
  const { data, error, isLoading } = useQuery(['getCurrencies', params.blockchain], () =>
    getCurrencies({
      provider: ankrjsProvider,
      ...params
    })
  );

  return { data, error, isLoading };
};
