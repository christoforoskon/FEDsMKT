import CoinCard from '../coinCard/CoinCard';

import classes from './CoinsGrid.module.css'
import bitcoin from '../../assets/images/coins/bitcoin.png';
import ethereum from '../../assets/images/coins/ethereum.png';
import ripple from '../../assets/images/coins/ripple.png';
import litecoin from '../../assets/images/coins/litecoin.png';
import bitcoinCash from '../../assets/images/coins/bitcoin-cash.png';

const CoinsGrid = () => {
  return (
    <div className={classes.coinCardGrid}>
      <CoinCard nameid='bitcoin' image={bitcoin} />
      <CoinCard nameid='ethereum' image={ethereum} />
      <CoinCard nameid='ripple' image={ripple} />
      <CoinCard nameid='litecoin' image={litecoin} />
      <CoinCard nameid='bitcoin-cash' image={bitcoinCash} />
    </div>
  )
}

export default CoinsGrid;