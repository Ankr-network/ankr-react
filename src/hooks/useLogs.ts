import { GetLogsRequest } from '@ankr.com/ankr.js/dist/types';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { getLogs } from '../api';
import { AnkrGlobalContext } from '../components';

export const useLogs = (params: GetLogsRequest) => {
  const { ankrjsProvider } = useContext(AnkrGlobalContext);
  const { data, error, isLoading } = useQuery(
    ['getLogs', params.blockchain],
    () =>
      getLogs({
        provider: ankrjsProvider,
        ...params,
      })
  );

  return { data, error, isLoading };
};
