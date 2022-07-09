import AnkrscanProvider from '@ankr.com/ankr.js';
import {
  GetNFTsByOwnerRequest,
  GetNFTsByOwnerReply,
} from '@ankr.com/ankr.js/dist/types';

interface IGetNFTsParams extends GetNFTsByOwnerRequest {
  provider: AnkrscanProvider;
}

type IGetNFTsType = (params: IGetNFTsParams) => Promise<GetNFTsByOwnerReply>;

export const getNFTs: IGetNFTsType = async ({ provider, ...params }) => {
  return await provider.getNFTsByOwner(params);
};
