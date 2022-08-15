import AnkrscanProvider from '@ankr.com/ankr.js';
import {
  GetNFTMetadataRequest,
  GetNFTMetadataReply,
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

// Get NFT Metadata

interface IGetNFTMetadataParams extends GetNFTMetadataRequest {
  provider: AnkrscanProvider;
}

type IGetNFTMetadataType = (
  params: IGetNFTMetadataParams
) => Promise<GetNFTMetadataReply>;

export const getNFTMetadata: IGetNFTMetadataType = async ({
  provider,
  ...params
}) => {
  return await provider.getNFTMetadata(params);
};

// Get NFTs by owner

interface IGetNFTsByOwnerParams extends GetNFTsByOwnerRequest {
  provider: AnkrscanProvider;
}

type IGetNFTsByOwnerType = (
  params: IGetNFTsByOwnerParams
) => Promise<GetNFTsByOwnerReply>;

export const getNFTsByOwner: IGetNFTsByOwnerType = async ({
  provider,
  ...params
}) => {
  return await provider.getNFTsByOwner(params);
};

// Get Transactions by hash

interface IGetTransactionsByHashParams extends GetTransactionsByHashRequest {
  provider: AnkrscanProvider;
}

type IGetTransactionsByHashType = (
  params: IGetTransactionsByHashParams
) => Promise<GetTransactionsByHashReply>;

export const getTransactionsByHash: IGetTransactionsByHashType = async ({
  provider,
  ...params
}) => {
  return await provider.getTransactionsByHash(params);
};

// Get Logs

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

// Get Blocks

type IGetBlocksType = (params: IGetBlocksParams) => Promise<GetBlocksReply>;

export const getBlocks: IGetBlocksType = async ({ provider, ...params }) => {
  return await provider.getBlocks(params);
};

interface IGetAccountBalanceParams extends GetAccountBalanceRequest {
  provider: AnkrscanProvider;
}

// Get Account Balance

type IGetAccountBalanceType = (
  params: IGetAccountBalanceParams
) => Promise<GetAccountBalanceReply>;

export const getAccountBalance: IGetAccountBalanceType = async ({
  provider,
  ...params
}) => {
  return await provider.getAccountBalance(params);
};

interface IGetTokenHoldersParams extends GetTokenHoldersRequest {
  provider: AnkrscanProvider;
}

// Get Token Holders

type IGetTokenHoldersType = (
  params: IGetTokenHoldersParams
) => Promise<GetTokenHoldersReply>;

export const getTokenHolders: IGetTokenHoldersType = async ({
  provider,
  ...params
}) => {
  return await provider.getTokenHolders(params);
};

interface IGetTokenHoldersCountParams extends GetTokenHoldersCountRequest {
  provider: AnkrscanProvider;
}

// Get Token Holders Count

type IGetTokenHoldersCountType = (
  params: IGetTokenHoldersCountParams
) => Promise<GetTokenHoldersCountReply>;

export const getTokenHoldersCount: IGetTokenHoldersCountType = async ({
  provider,
  ...params
}) => {
  return await provider.getTokenHoldersCount(params);
};

// Get Currencies

interface IGetCurrenciesParams extends GetCurrenciesRequest {
  provider: AnkrscanProvider;
}

type IGetCurrenciesType = (
  params: IGetCurrenciesParams
) => Promise<GetCurrenciesReply>;

export const getCurrencies: IGetCurrenciesType = async ({
  provider,
  ...params
}) => {
  return await provider.getCurrencies(params);
};
