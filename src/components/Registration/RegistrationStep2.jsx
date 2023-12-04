import formErrorIcon from '../../assets/images/form-field-error.png';
import formValidIcon from '../../assets/images/form-field-valid.png';
import 'react-datepicker/dist/react-datepicker.css';
import classes from './Registration.module.css';

const RegistrationStep2 = ({ formData, handleChange, handleNext, errors }) => {

  const isPasswordRuleValid = (rule) => {
    switch (rule) {
      case 'length':
        return formData.password.length >= 8 && formData.password.length <= 15;
      case 'number':
        return /\d/.test(formData.password);
      case 'lowercase':
        return /[a-z]/.test(formData.password);
      case 'uppercase':
        return /[A-Z]/.test(formData.password);
      case 'specialChar':
        return /[#\[\]()@$&*!?|,.^/\\+_\-]/.test(formData.password);
      default:
        return false;
    }
  };

  return (
    <div className={classes.fieldsContainer}>
      <div className={classes.field}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="email@email.com"
          onChange={(e) => handleChange('email', e.target.value)}
        />
        {errors.email && (
          <div className={classes.formError}>
            <img className={classes.formErrorIcon} src={formErrorIcon} alt="form error icon" />
            <p className="error">{errors.email}</p>
          </div>
        )}
      </div>
      <div className={classes.field}>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder=""
          onChange={(e) => handleChange('password', e.target.value)}
        />

      </div>
      <div className={classes.passwordRules}>
        <div className={classes.passwordRule} style={{ color: isPasswordRuleValid('length') ? '#29A643' : '#D51820' }}>
          <img className={classes.formErrorIcon} src={isPasswordRuleValid('length') ? formValidIcon : formErrorIcon} alt="form error icon" />
          8 - 15 characters
        </div>
        <div className={classes.passwordRule} style={{ color: isPasswordRuleValid('number') ? '#29A643' : '#D51820' }}>
          <img className={classes.formErrorIcon} src={isPasswordRuleValid('number') ? formValidIcon : formErrorIcon} alt="form error icon" />
          1 or more numbers
        </div>
        <div className={classes.passwordRule} style={{ color: isPasswordRuleValid('lowercase') ? '#29A643' : '#D51820' }}>
          <img className={classes.formErrorIcon} src={isPasswordRuleValid('lowercase') ? formValidIcon : formErrorIcon} alt="form error icon" />
          1 or more lowercase letters
        </div>
        <div className={classes.passwordRule} style={{ color: isPasswordRuleValid('uppercase') ? '#29A643' : '#D51820' }}>
          <img className={classes.formErrorIcon} src={isPasswordRuleValid('uppercase') ? formValidIcon : formErrorIcon} alt="form error icon" />
          1 or more uppercase letters
        </div>
        <div className={classes.passwordRule} style={{ color: isPasswordRuleValid('specialChar') ? '#29A643' : '#D51820' }}>
          <img className={classes.formErrorIcon} src={isPasswordRuleValid('specialChar') ? formValidIcon : formErrorIcon} alt="form error icon" />
          1 or more special characters (#[]()@$&*!?|,.^/\+_\-)
        </div>
        <br />
      </div>
    </div>
  );
};

export default RegistrationStep2;
