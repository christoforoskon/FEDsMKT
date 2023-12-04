import authorised from '../../assets/images/services/authorised.png'
import commited from '../../assets/images/services/commited.png'
import award from '../../assets/images/services/award.png'
import support from '../../assets/images/services/support.png'

import classes from './Services.module.css'

const Services = () => {
  return (
    <div className={classes.servicesContainer}>
      <div className={classes.services} >

        <div className={classes.servicesGrid}>
          <div className={classes.service}>
            <hr className={classes.divider} />
            <h1>Big<span className={classes.dot}>.</span> Fair<span className={classes.dot}>.</span> Human<span className={classes.dot}>.</span></h1>
            <h3>Learn why <span className={classes.bold}>over 5 million clients choose XM</span> as their trusted online broker.</h3>
          </div>


          <div className={classes.service}>
            <img src={authorised} alt="Authorised and Regulated" />
            <h2>Authorised and Regulated</h2>
            <p>At XM, we adhere to all regulatory standards and are fully authorised and regulated by FSC.</p>
          </div>

          <div className={classes.service}>
            <img src={commited} alt="Committed and Fair" />
            <h2>Committed and Fair</h2>
            <p>We operate with complete transparency and adhere to the highest professional and ethical standards.</p>
          </div>

          <div className={classes.service}>
            <img src={award} alt="Multi-Award-Winning" />
            <h2>Multi-Award-Winning</h2>
            <p>Over the years we have received over 40 awards for the quality of our products and services.</p>
          </div>

          <div className={classes.service}>
            <img src={support} alt="24/7 Support" />
            <h2>24/7 Support</h2>
            <p>Our support agents are on hand 24/7 to answer your questions or assist you with any issues.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;