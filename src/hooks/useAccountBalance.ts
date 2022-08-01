import type { GetAccountBalanceRequest } from '@ankr.com/ankr.js/dist/types'
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { getAccountBalance } from '../api';
import { AnkrGlobalContext } from '../components';

export const useAccountBalance = (params: GetAccountBalanceRequest) => {
  const { ankrjsProvider } = useContext(AnkrGlobalContext);
  const { data, error, isLoading } = useQuery(['getAccountBalance', params.walletAddress], () =>
    getAccountBalance({
      provider: ankrjsProvider,
      ...params
    })
  );

  return { data, error, isLoading };
};
