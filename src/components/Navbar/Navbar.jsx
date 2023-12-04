import classes from './Navbar.module.css';
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <div className={classes.navContainer}>
      <nav >
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.nav}>
          {/* Link from react-router-dom */}
          <a href="#">HM Homepage</a>
          <a href="#">Support</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;