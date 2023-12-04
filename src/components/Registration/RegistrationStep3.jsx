import classes from './Registration.module.css'
import check from '../../assets/images/check.png'
import arrRight from '../../assets/images/arr-right.png'

const RegistrationStep3 = () => {
  return (
    <div className={classes.registrationLastStep}>
      <div className={classes.successfulMessage}>
        <div className={classes.status}>
          <img src={check} alt="check" />
          <h2>Registration Successful</h2>
        </div>
        <div className={classes.message}>
          <img src={arrRight} alt="arrow" />
          <p>Thank you for registering for our event with XM. You will receive an email shortly with confirmation of your registration.</p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationStep3;
