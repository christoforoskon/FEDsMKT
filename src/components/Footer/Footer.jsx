// import { Link } from 'react-router-dom';

import classes from './Footer.module.css';
import tradingPoint from '../../assets/images/footer/trading-point.png'
import metaQuotes from '../../assets/images/footer/meta-quotes.png'
import verisign from '../../assets/images/footer/verisign.png'
import unicef from '../../assets/images/footer/unicef.png'
import investorsInPeople from '../../assets/images/footer/investors-in-people.png'
import facebook from '../../assets/images/social/facebook.png'
import twitter from '../../assets/images/social/twitter.png'
import youtube from '../../assets/images/social/youtube.png'
import instagram from '../../assets/images/social/instagram.png'
import linkedin from '../../assets/images/social/linkedin.png'

const Footer = () => {
  return (
    <div className={classes.footerContainer}>


      <div className={classes.footer}>
        {/* <Link to="/privacy-policy">Privacy Policy</Link> */}

        <div className={classes.footerTop}>
          <div className={classes.logos}>
            <img src={metaQuotes} alt="MetaQuotes logo" />
            <img src={verisign} alt="Verisign logo" />
            <img src={unicef} alt="unicef logo" />
            <img src={investorsInPeople} alt="Investors in people logo" />
          </div>
          <div className={classes.socialMedia}>
            <p>Follow us on</p>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={youtube} alt="youtube" />
            <img src={instagram} alt="instagram" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
        <hr className={classes.divider} />
        <div className={classes.footerBottom}>
          <div className={classes.nav}>
            <p>Privacy Policy</p> |
            <p>Cookie Policy</p> |
            <p>Terms and Conditions</p>
          </div>
          <img src={tradingPoint} alt="Trafing Point logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
