import AnkrscanProvider from '@ankr.com/ankr.js';
import {
  GetNFTsByOwnerRequest,
  GetNFTsByOwnerReply,
  GetTransactionsByHashRequest,
  GetTransactionsByHashReply,
} from '@ankr.com/ankr.js/dist/types';

interface IGetNFTsParams extends GetNFTsByOwnerRequest {
  provider: AnkrscanProvider;
}

type IGetNFTsType = (params: IGetNFTsParams) => Promise<GetNFTsByOwnerReply>;

export const getNFTsByOwner: IGetNFTsType = async ({ provider, ...params }) => {
  return await provider.getNFTsByOwner(params);
};

interface IGetTransactionsByHashParams extends GetTransactionsByHashRequest {
  provider: AnkrscanProvider;
}

type IGetTransactionsByHashType = (params: IGetTransactionsByHashParams) => Promise<GetTransactionsByHashReply>;

export const getTransactionsByHash: IGetTransactionsByHashType = async ({ provider, ...params }) => {
  return await provider.getTransactionsByHash(params);
};
