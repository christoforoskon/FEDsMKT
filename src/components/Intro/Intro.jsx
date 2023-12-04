import NewAccount from '../NewAcount/NewAccount'
import classes from './Intro.module.css'

const Intro = () => {
  return (
    <div className={classes.intro}>
      <p>trade with</p>
      <h1><span className={classes.bold}>Zero Swaps</span> on All XM Ultra Low Accounts for more than 25 instruments!</h1>
      <div className={classes.subtext}>
        <h3>Enjoy spreads as low as 0.6 pips and leverage up to 1000:1 on instruments like EURUSD, USDJPY, EURJPY, GBPUSD, and Gold.</h3>
      </div>
      <button><span>open account</span></button>
      <NewAccount />
    </div>
  )
}

export default Intro