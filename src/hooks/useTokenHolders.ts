import { GetTokenHoldersRequest } from '@ankr.com/ankr.js/dist/types';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { getTokenHolders } from '../api';
import { AnkrGlobalContext } from '../components';

export const useTokenHolders = (params: GetTokenHoldersRequest) => {
  const { ankrjsProvider } = useContext(AnkrGlobalContext);
  const { data, error, isLoading } = useQuery(
    ['getTokenHolders', params.blockchain],
    () =>
      getTokenHolders({
        provider: ankrjsProvider,
        ...params,
      })
  );

  return { data, error, isLoading };
};
