import type { GetBlocksRequest } from '@ankr.com/ankr.js/dist/types'
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { getBlocks } from '../api';
import { AnkrGlobalContext } from '../components';

export const useBlocks = (params: GetBlocksRequest) => {
  const { ankrjsProvider } = useContext(AnkrGlobalContext);
  const { data, error, isLoading } = useQuery(['getBlocks', params.blockchain], () =>
    getBlocks({
      provider: ankrjsProvider,
      ...params
    })
  );

  return { data, error, isLoading };
};
