import AnkrscanProvider from '@ankr.com/ankr.js';
import {
  GetNFTsByOwnerRequest,
  GetNFTsByOwnerReply,
  GetTransactionsByHashRequest,
  GetTransactionsByHashReply,
  GetLogsRequest,
  GetLogsReply,
  GetBlocksRequest,
  GetBlocksReply,
  GetAccountBalanceRequest,
  GetAccountBalanceReply,
  GetTokenHoldersRequest,
  GetTokenHoldersReply,
  GetTokenHoldersCountRequest,
  GetTokenHoldersCountReply,
  GetCurrenciesRequest,
  GetCurrenciesReply,
} from '@ankr.com/ankr.js/dist/types';

interface IGetNFTsByOwnerParams extends GetNFTsByOwnerRequest {
  provider: AnkrscanProvider;
}

type IGetNFTsByOwnerType = (params: IGetNFTsByOwnerParams) => Promise<GetNFTsByOwnerReply>;

export const getNFTsByOwner: IGetNFTsByOwnerType = async ({ provider, ...params }) => {
  return await provider.getNFTsByOwner(params);
};

interface IGetTransactionsByHashParams extends GetTransactionsByHashRequest {
  provider: AnkrscanProvider;
}

type IGetTransactionsByHashType = (params: IGetTransactionsByHashParams) => Promise<GetTransactionsByHashReply>;

export const getTransactionsByHash: IGetTransactionsByHashType = async ({ provider, ...params }) => {
  return await provider.getTransactionsByHash(params);
};

interface IGetLogsParams extends GetLogsRequest {
  provider: AnkrscanProvider;
}

type IGetLogsType = (params: IGetLogsParams) => Promise<GetLogsReply>;

export const getLogs: IGetLogsType = async ({ provider, ...params }) => {
  return await provider.getLogs(params);
};

interface IGetBlocksParams extends GetBlocksRequest {
  provider: AnkrscanProvider;
}

type IGetBlocksType = (params: IGetBlocksParams) => Promise<GetBlocksReply>;

export const getBlocks: IGetBlocksType = async ({ provider, ...params }) => {
  return await provider.getBlocks(params);
};

interface IGetAccountBalanceParams extends GetAccountBalanceRequest {
  provider: AnkrscanProvider;
}

type IGetAccountBalanceType = (params: IGetAccountBalanceParams) => Promise<GetAccountBalanceReply>;

export const getAccountBalance: IGetAccountBalanceType = async ({ provider, ...params }) => {
  return await provider.getAccountBalance(params);
};

interface IGetTokenHoldersParams extends GetTokenHoldersRequest {
  provider: AnkrscanProvider;
}

type IGetTokenHoldersType = (params: IGetTokenHoldersParams) => Promise<GetTokenHoldersReply>;

export const getTokenHolders: IGetTokenHoldersType = async ({ provider, ...params }) => {
  return await provider.getTokenHolders(params);
};

interface IGetTokenHoldersCountParams extends GetTokenHoldersCountRequest {
  provider: AnkrscanProvider;
}

type IGetTokenHoldersCountType = (params: IGetTokenHoldersCountParams) => Promise<GetTokenHoldersCountReply>;

export const getTokenHoldersCount: IGetTokenHoldersCountType = async ({ provider, ...params }) => {
  return await provider.getTokenHoldersCount(params);
};

interface IGetCurrenciesParams extends GetCurrenciesRequest {
  provider: AnkrscanProvider;
}

type IGetCurrenciesType = (params: IGetCurrenciesParams) => Promise<GetCurrenciesReply>;

export const getCurrencies: IGetCurrenciesType = async ({ provider, ...params }) => {
  return await provider.getCurrencies(params);
};
