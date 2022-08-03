import { AxiosResponse } from 'axios';
import $api from '../http/axios';
import { coinItem } from '../types/coin-type';


export class Api {
  static getCoins() {
    return $api.get('markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  }
  static getCoin(id: string): Promise<AxiosResponse<coinItem>> {
    return $api.get(id)
  }
}