import React, { useEffect, useState } from 'react';
import CoinItem from '../CoinItem/CoinItem';
import { useCoinRes } from '../../hooks/useCoinRes';
import './Coins.sass';
import { Link } from 'react-router-dom';
import { Button, Input } from 'antd';
import StorageFavorite from '../../services/storage';

const Coins = () => {
  const { coins } = useCoinRes();
  const [favorite, setFavorite] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  const handlerChange = (e: any) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.id.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const handlerFavorite = (id: string) => {
    setFavorite(StorageFavorite.toogleFavorite(id));
  };

  useEffect(() => {
    setFavorite(StorageFavorite.getFavorite());
  }, []);

  return (
    <div className="coin container">

      <div className="coin__input">
        <Input placeholder="Search" onChange={handlerChange} />
        <Button ghost size="middle">
          <Link to="/favorite">Favorite</Link>
        </Button>
      </div>

      <div className="coin__heading">
        <p>#</p>
        <p>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className="hide-mobile">24h Volume</p>
        <p className="hide-mobile">Market Cap</p>
        <p>Favorite</p>
      </div>

      {filteredCoins.map((coins) => {
        const isFavorite = favorite.includes(coins.id);
        return (
          <Link to={`/coin/${coins.id}`} key={coins.id}>
            <CoinItem
              coins={coins}
              handlerFavorite={handlerFavorite}
              isFavorite={isFavorite}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Coins;
