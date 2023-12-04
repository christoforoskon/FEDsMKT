import AdvantageCard from '../../components/AdvantageCard/AdvantageCard'

import classes from './Advantages.module.css'

import bolt from '../../assets/images/advantages/fast-execusion-icon.png'
import percentage from '../../assets/images/advantages/competitive-pricing-icon.png'
import tech from '../../assets/images/advantages/tech-icon.png'
import dollar from '../../assets/images/advantages/dollar-icon.png'

const Advantages = () => {
  return (
    <div className={classes.advantages}>
      <h1>Why <span>Trade</span> with XM?</h1>
      <hr className={classes.dividerGreen} />
      <h3>We have been providing traders around the world with the same <span>premium experience</span> for over a decade. As an <span>industry-leader</span>, we know what the modern trader needs to be <span>successful</span> in the markets.</h3>

      <div className={classes.advantageCardGrid}>
        <AdvantageCard title='Superior Trade Execution' content='<span>99%</span> of trades are executed in <span>less than a second</span>, with no requotes or rejections.' image={bolt} />
        <AdvantageCard title='Competitive Pricing' content='We offer some of the <span>lowest spreads</span> and we don’t charge commissions.' image={percentage} />
        <AdvantageCard title='Advanced Technology' content='Trade on <span>MT4</span> or <span>MT5</span>, with expert tools, across desktop, web and mobile.' image={tech} />
        <AdvantageCard title='Start with $5' content='Start trading your preferred instruments with as little as a <span>$5 minimum deposit.</span>' image={dollar} />
      </div>
    </div>
  )
}

export default Advantages