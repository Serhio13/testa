import { useParams } from 'react-router-dom';
import { useCoin } from '../../hooks/useCoinRes';

import './Coin.sass';
import { Spin, Tooltip } from 'antd';
import InnerHTMLFunction from '../../utils/innerHTML';

const AboutCoin = () => {
  const { coinId } = useParams();
  const { coins, loading } = useCoin(coinId);

  return (
    <Spin size="large" spinning={loading}>
      <div className="coin__container">

        <div className="coin__content">
          <h1>{coins?.name}</h1>
        </div>

        <div className="coin__content">
          <div className="coin__rank">
            <span className="coin__rank-btn">Rank # {coins?.market_cap_rank}</span>
          </div>
          <div className="coin__info">
            <div className="coin__info-heading">
              <img src={coins?.image.small} alt={coins?.id}></img>
              <p>{coins?.name}</p>
              <p>{coins?.symbol.toUpperCase()}/USD</p>
            </div>
            <div className="coin__info-price">
              <h1>
                ${coins?.market_data.current_price.usd.toLocaleString()}
              </h1>
            </div>
          </div>
        </div>

        <div className="coin__content">
          <div className="coin__pricechange">
            <Tooltip
              className='tooltipMy'
              title="price change in the last hour"
              color="#33343b8e"
            >
              <div className="coin__pricechange-column">
                <div>1h</div>
                <div style={{ color: parseInt(coins?.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2) as string) > 0 ? 'green' : 'red' }}>
                  {coins?.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%
                </div>
              </div>
            </Tooltip>
            <Tooltip title="price change in the last 24 hours" color="#33343b8e">
              <div className="coin__pricechange-column">
                <div>24h</div>
                <div style={{ color: parseInt(coins?.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2) as string) > 0 ? 'green' : 'red' }}>
                  {coins?.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                </div>
              </div>
            </Tooltip>
            <Tooltip title="price change in the last 7 days" color="#33343b8e">
              <div className="coin__pricechange-column">
                <div>7d</div>
                <div style={{ color: parseInt(coins?.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2) as string) > 0 ? 'green' : 'red' }}>
                  {coins?.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%
                </div>
              </div>
            </Tooltip>
            <Tooltip title="price change in the last 14 days" color="#33343b8e">
              <div className="coin__pricechange-column">
                <div>14d</div>
                <div style={{ color: parseInt(coins?.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2) as string) > 0 ? 'green' : 'red' }}>
                  {coins?.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%
                </div>
              </div>
            </Tooltip>
            <Tooltip title="price change in the last 30 days" color="#33343b8e">
              <div className="coin__pricechange-column">
                <div>30d</div>
                <div style={{ color: parseInt(coins?.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2) as string) > 0 ? 'green' : 'red' }}>
                  {coins?.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%
                </div>
              </div>
            </Tooltip>
            <Tooltip title="price change over the last year" color="#33343b8e">
              <div className="coin__pricechange-column">
                <div>7y</div>
                <div style={{ color: parseInt(coins?.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2) as string) > 0 ? 'green' : 'red' }}>
                  {coins?.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%
                </div>
              </div>
            </Tooltip>
          </div>
        </div>

        <div className="coin__content">
          <div className="coin__stats">
            <div className="coin__stats-left">
              <div className="coin__stats-row">
                <h4>24 Hour low</h4>
                <p>${coins?.market_data.low_24h.usd.toLocaleString()}</p>
              </div>
              <div className="coin__stats-row">
                <h4>24 Hour high</h4>
                <p>${coins?.market_data.high_24h.usd.toLocaleString()}</p>
              </div>
            </div>
            <div className="coin__stats-right">
              <div className="coin__stats-row">
                <h4>24 Market Cap</h4>
                <p>${coins?.market_data.market_cap.usd.toLocaleString()}</p>
              </div>
              <div className="coin__stats-row">
                <h4>Circulating Supply</h4>
                <p>{coins?.market_data.circulating_supply}</p>
              </div>
            </div>
          </div>
          <div className="coin__content">
            <div className="coin__content-about">
              <h3>About</h3>
              <p dangerouslySetInnerHTML={InnerHTMLFunction(coins?.description.en as string)} />
            </div>
          </div>
        </div>

      </div>
    </Spin>
  );
};

export default AboutCoin;
