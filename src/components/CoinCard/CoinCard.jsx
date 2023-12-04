import { useState, useEffect } from 'react';
import classes from './CoinCard.module.css';
import { faCircleChevronUp, faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CoinCard = ({ nameid, image, bgColor }) => {
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(`https://api.coinlore.net/api/tickers/`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          console.error('Non-JSON response:', text);
          return;
        }

        const data = await response.json();
        const coin = await data.data.find((ticker) => ticker.nameid === nameid);
        setCoinData(coin);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (nameid) {
      fetchCoinData();
    }
  }, [nameid]);


  if (!coinData) {
    return <div>Loading...</div>;
  }

  const { symbol, name, price_usd, percent_change_24h } = coinData;

  return (
    <div className={classes.coinCard}>
      <div className={classes.coinInfo}>
        <img src={image} alt="" />
        <h3>{symbol}</h3>
        <div className={classes.name}>
          <span>{name}</span>
        </div>
      </div>
      <div className={classes.divider} />
      <h2>{`$${price_usd}`}</h2>

      <div className={percent_change_24h >= 0 ? classes.positive : classes.negative}>
        <FontAwesomeIcon icon={percent_change_24h >= 0 ? faCircleChevronUp : faCircleChevronDown} />
        <h4 className={percent_change_24h >= 0 ? classes.positive : classes.negative}>{`${percent_change_24h}%`}</h4>
      </div>

    </div>
  );
};

export default CoinCard;
