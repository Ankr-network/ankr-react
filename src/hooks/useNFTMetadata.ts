import { GetNFTMetadataRequest } from '@ankr.com/ankr.js/dist/types';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { getNFTMetadata } from '../api';
import { AnkrGlobalContext } from '../components';

export const useNFTMetadata = (params: GetNFTMetadataRequest) => {
  const { ankrjsProvider } = useContext(AnkrGlobalContext);
  const { data, error, isLoading } = useQuery(
    [
      'getNFTMetadata',
      params.blockchain,
      params.contractAddress,
      params.tokenId,
    ],
    () =>
      getNFTMetadata({
        provider: ankrjsProvider,
        ...params,
      })
  );

  return { data, error, isLoading };
};
