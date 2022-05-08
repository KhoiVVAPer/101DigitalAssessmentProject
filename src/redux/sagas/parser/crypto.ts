import {AxiosResponse} from 'axios';
import {ICrypto} from 'src/interfaces/ICrypto';

export const cryptoParser = (responses: AxiosResponse): ICrypto[] => {
  return responses.data.map((item: ICrypto) => ({
    symbol: item.symbol,
    priceChangePercent: item.priceChangePercent,
    lastPrice: item.lastPrice,
    isRaising: item.priceChangePercent > 0,
    firstId: item.firstId,
    count: item.count,
  }));
};
