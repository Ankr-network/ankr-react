import { GetTokenHoldersCountRequest } from '@ankr.com/ankr.js/dist/types';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { getTokenHoldersCount } from '../api';
import { AnkrGlobalContext } from '../components';

export const useTokenHoldersCount = (params: GetTokenHoldersCountRequest) => {
  const { ankrjsProvider } = useContext(AnkrGlobalContext);
  const { data, error, isLoading } = useQuery(
    ['getTokenHoldersCount', params.blockchain],
    () =>
      getTokenHoldersCount({
        provider: ankrjsProvider,
        ...params,
      })
  );

  return { data, error, isLoading };
};
