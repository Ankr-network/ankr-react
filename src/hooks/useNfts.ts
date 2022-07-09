import type { GetNFTsByOwnerRequest } from '@ankr.com/ankr.js/dist/types'
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { getNFTs } from '../api';
import { AnkrGlobalContext } from '../components/Provider/Provider';

export const useNFTs = (params: GetNFTsByOwnerRequest) => {
  const { ankrjsProvider } = useContext(AnkrGlobalContext);
  const { data, error, isLoading } = useQuery(['getNFTs', params.walletAddress], () =>
    getNFTs({
      provider: ankrjsProvider,
      ...params
    })
  );

  return { data, error, isLoading };
};
