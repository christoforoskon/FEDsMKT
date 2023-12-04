import DatePicker from 'react-datepicker';
import formErrorIcon from '../../assets/images/form-field-error.png'
import 'react-datepicker/dist/react-datepicker.css';
import classes from './Registration.module.css';

const RegistrationStep1 = ({ formData, handleChange, handleNext, errors }) => {
  return (
    <div className={classes.registrationStep}>
      <div className={classes.field}>
        <label>
          Full Name:
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          placeholder='Full Name'
          onChange={(e) => handleChange('fullName', e.target.value)}
        />
        {errors.fullName && <div className={classes.formError}><img className={classes.formErrorIcon} src={formErrorIcon} alt="form error icon" /><p className="error">{errors.fullName}</p></div>}
      </div>
      <div className={classes.field}>
        <label>
          Date of Birth:
        </label>
        {/* Use the DatePicker component */}
        <DatePicker
          selected={formData.dateOfBirth}
          placeholderText='dd/mm/yy'
          onChange={(date) => handleChange('dateOfBirth', date)}
          dateFormat="dd/MM/yy"
          showYearDropdown
          scrollableYearDropdown
        />
        {errors.dateOfBirth && <div className={classes.formError}><img className={classes.formErrorIcon} src={formErrorIcon} alt="form error icon" /><p className="error">{errors.dateOfBirth}</p></div>}
      </div>
    </div>
  );
};

export default RegistrationStep1;
