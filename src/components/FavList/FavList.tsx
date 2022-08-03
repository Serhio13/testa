import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCoinRes } from '../../hooks/useCoinRes';
import StorageFavorite from '../../services/storage';

const FavList = () => {
  const { coins } = useCoinRes();
  const [favorite, setFavorite] = useState<string[]>([]);

  useEffect(() => {
    setFavorite(StorageFavorite.getFavorite());
  }, []);

  return (
    <div className="coin container">
      <div className="coin__heading fav">
        <p>#</p>
        <p>Coin</p>
        <p>current Price</p>
        <p>24h</p>
        <p className="hide-mobile">24h Volume</p>
        <p className="hide-mobile">Market Cap</p>
      </div>
      {coins &&
        coins
          .filter((coins) => favorite.includes(coins.id))
          .map((coins) => {
            return (
              <Link to={`/coin/${coins.id}`} key={coins.id}>
                <div className="coin__row fav">
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
                </div>
              </Link>
            );
          })}
    </div>
  );
};

export default FavList;
