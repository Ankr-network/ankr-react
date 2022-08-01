import { GetTransactionsByHashRequest } from '@ankr.com/ankr.js/dist/types';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { getTransactionsByHash } from '../api';
import { AnkrGlobalContext } from '../components';

export const useTransactionsByHash = (params: GetTransactionsByHashRequest) => {
  const { ankrjsProvider } = useContext(AnkrGlobalContext);
  const { data, error, isLoading } = useQuery(
    ['getTransactionsByHash', params.transactionHash],
    () =>
      getTransactionsByHash({
        provider: ankrjsProvider,
        ...params,
      })
  );

  return { data, error, isLoading };
};
