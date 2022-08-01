import { GetNFTsByOwnerRequest } from '@ankr.com/ankr.js/dist/types';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { getNFTsByOwner } from '../api';
import { AnkrGlobalContext } from '../components';

export const useNFTsByOwner = (params: GetNFTsByOwnerRequest) => {
  const { ankrjsProvider } = useContext(AnkrGlobalContext);
  const { data, error, isLoading } = useQuery(
    ['getNFTsByOwner', params.walletAddress],
    () =>
      getNFTsByOwner({
        provider: ankrjsProvider,
        ...params,
      })
  );

  return { data, error, isLoading };
};
