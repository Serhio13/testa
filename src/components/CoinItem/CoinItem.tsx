import React, { FC } from 'react';
import { coinInfo } from '../../types/coin-type';
import '../Coins/Coins.sass';
import { HeartFilled } from '@ant-design/icons';

const CoinItem: FC<{
  coins: coinInfo,
  handlerFavorite: (id: string) => void,
  isFavorite: boolean
}> = ({ coins, handlerFavorite, isFavorite }) => {

  const handlerFavClick = (e: any) => {
    e.preventDefault()
    handlerFavorite(coins.id)
  };

  return (
    <div className="coin__row">
      <p>{coins.market_cap_rank}</p>
      <div className="coin__row-img">
        <img src={coins.image} alt={coins.name}></img>
        <p>{coins.symbol.toUpperCase()}</p>
      </div>
      <p>${coins.current_price.toLocaleString()}</p>
      <p
        style={{
          color:
            Math.ceil(coins.price_change_percentage_24h) > 0 ? 'green' : 'red',
        }}
      >
        {coins.price_change_percentage_24h.toFixed(2)}%
      </p>
      <p className="hide-mobile">${coins.total_volume.toLocaleString()}</p>
      <p className="hide-mobile">${coins.market_cap.toLocaleString()}</p>
      <HeartFilled className={`${isFavorite ? 'red' : ''}`} onClick={handlerFavClick} />
    </div>
  );
};

export default CoinItem;
