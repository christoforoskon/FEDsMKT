import { useState } from 'react';
import RegistrationStep1 from './RegistrationStep1';
import RegistrationStep2 from './RegistrationStep2';
import RegistrationStep3 from './RegistrationStep3';
import ProgressBar from "react-percent-bar";
import NewAccount from '../NewAcount/NewAccount';

import calendarIcon from '../../assets/images/calendar.png'
import clockIcon from '../../assets/images/clock.png'
import markerIcon from '../../assets/images/marker.png'
import classes from './Registration.module.css';

const Registration = () => {
  const [perc, setPerc] = useState(0);
  const [step, setStep] = useState(1);
  const [stepStatus, setStepStatus] = useState({
    1: { status: 'pending', perc: 0 },
    2: { status: 'pending', perc: 0 },
  });
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: null,
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const handleNext = () => {
    if (validateForm()) {
      setStepStatus((prevStatus) => ({
        ...prevStatus,
        [step]: { status: 'complete', perc: 100 },
      }));
      setStep((prevStep) => prevStep + 1);
    }
  };

  const validateForm = () => {
    const errors = {};
    setStepStatus((prevStatus) => ({
      ...prevStatus,
      [step]: { status: 'ready', perc: 50 },
    }));
    switch (step) {
      case 1:
        // Full Name validation
        const isValidName = /^[a-zA-Z\s]*$/.test(formData.fullName);
        setErrors((prevErrors) => ({ ...prevErrors, fullName: isValidName ? '' : 'Full Name must contain only letters and spaces' }));

        // Date of Birth validation
        const dob = new Date(formData.dateOfBirth);
        const isValidDate = !isNaN(dob.getTime());
        const age = isValidDate ? new Date().getFullYear() - dob.getFullYear() : 0;

        if (!isValidDate) {
          errors.dateOfBirth = 'Date of Birth is required';
        } else if (age < 18 || age > 60) {
          errors.dateOfBirth = 'Age must be between 18 and 60 years old';
        }

        break;

      case 2:
        // Email validation
        const isValidEmail = /\S+@\S+\.\S+/.test(formData.email);
        setErrors((prevErrors) => ({ ...prevErrors, email: isValidEmail ? '' : 'Invalid email format' }));

        // Password validation
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#\[\]()@$&*!?|,.^/\\+_\-]).{8,15}$/;
        const isValidPassword = passwordRegex.test(formData.password);

        if (!isValidPassword) {
          errors.password = 'Password must meet the following criteria:';
          if (!/(?=.*\d)/.test(formData.password)) {
            errors.password += ' At least 1 number,';
          }
          if (!/(?=.*[a-z])/.test(formData.password)) {
            errors.password += ' At least 1 lowercase letter,';
          }
          if (!/(?=.*[A-Z])/.test(formData.password)) {
            errors.password += ' At least 1 uppercase letter,';
          }
          if (!/(?=.*[#\[\]()@$&*!?|,.^/\\+_\-])/.test(formData.password)) {
            errors.password += ' At least 1 special character,';
          }
          if (formData.password.length < 8 || formData.password.length > 15) {
            errors.password += ' Between 8 and 15 characters,';
          }
          errors.password = errors.password.slice(0, -1); // Remove the trailing comma
        }
        break;
      default:
        break;
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleChange = (name, value) => {
    // Validate each field as the user types
    switch (name) {
      case 'fullName':
        const isValidName = /^[a-zA-Z\s]*$/.test(value);
        setErrors((prevErrors) => ({ ...prevErrors, [name]: isValidName ? '' : 'Please Enter Valid Name' }));
        setStepStatus((prevStatus) => ({ ...prevStatus, [step]: { ...prevStatus[step], perc: isValidName ? 25 : 0 } }));
        break;
      case 'dateOfBirth':
        const dob = new Date(value);
        const isValidDate = !isNaN(dob.getTime());
        const age = isValidDate ? new Date().getFullYear() - dob.getFullYear() : 0;

        if (!isValidDate || age < 18 || age > 60) {
          setErrors((prevErrors) => ({ ...prevErrors, [name]: !isValidDate ? 'Invalid date format (dd/mm/yy)' : 'Minimum age requirements, 18 years old' }));
          setStepStatus((prevStatus) => ({ ...prevStatus, [step]: { ...prevStatus[step], perc: 0 } }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
          setStepStatus((prevStatus) => ({ ...prevStatus, [step]: { ...prevStatus[step], perc: formData.dateOfBirth ? 50 : 25 } }));
        }
        break;
      case 'email':
        const isValidEmail = /\S+@\S+\.\S+/.test(value);
        setErrors((prevErrors) => ({ ...prevErrors, [name]: isValidEmail ? '' : 'Invalid email format' }));
        setStepStatus((prevStatus) => ({ ...prevStatus, [step]: { ...prevStatus[step], perc: isValidEmail ? 25 : 0 } }));
        break;
      case 'password':
        // Implement password validation logic
        setFormData({
          ...formData,
          [name]: value,
        });

        // Password validation rules
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#\[\]()@$&*!?|,.^/\\+_\-]).{8,15}$/;
        const isValidPassword = passwordRegex.test(value);

        setErrors((prevErrors) => ({
          ...prevErrors,
          password: !isValidPassword ? 'Password must be 8-15 characters long' :
            !/(?=.*\d)/.test(value) ? 'Password must contain at least one number' :
              !/(?=.*[a-z])/.test(value) ? 'Password must contain at least one lowercase letter' :
                !/(?=.*[A-Z])/.test(value) ? 'Password must contain at least one uppercase letter' :
                  !/(?=.*[#\[\]()@$&*!?|,.^/\\+_\-])/.test(value) ? 'Password must contain at least one special character' : '',
        }));

        setStepStatus((prevStatus) => ({ ...prevStatus, [step]: { ...prevStatus[step], perc: isValidPassword ? 50 : 0 } }));
        setPerc(isValidPassword ? 100 : 0);
        break;
      default:
        break;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };



  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <RegistrationStep1
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            errors={errors}
            stepStatus={stepStatus[1]}
          />
        );
      case 2:
        return (
          <RegistrationStep2
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            errors={errors}
            stepStatus={stepStatus[2]}
          />
        );
      case 3:
        return <RegistrationStep3 formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className={classes.registration}>
      <h2>- Register Here -</h2>
      <h4>Join us to celebrate our biggest night of the year.</h4>

      <div className={classes.eventInfo}>
        <div>
          <img src={calendarIcon} alt="calendar" />
          <p>12 NOVEMBER 2022</p>
        </div>
        <div>
          <img src={clockIcon} alt="clock" />
          <p>16:00 – 23:00</p>
        </div>
        <div>
          <img src={markerIcon} alt="marker" />
          <p>Centara Grand & Bangkok Convention Centre, Bangkok</p>
        </div>
      </div>

      <div className={classes.stepContainer}>
        <div className={classes.stepInfoFlex}>
          <div className={classes.stepInfo} style={{ width: window.screen.width < 1200 && step !== 1 ? '0' : '100%' }}>
            {(window.screen.width >= 1200 || step == 1) &&
              <>
                <div className={classes.stepStatusContainer}>
                  <div className={classes.stepStatus} style={{ borderColor: stepStatus[1].perc === 100 ? '#32AA43' : '#ccc' }}>
                    <div className={classes.step} style={{ backgroundColor: stepStatus[1].perc === 100 ? '#32AA43' : '#ccc' }}>
                      <span>1</span>
                    </div>
                  </div>
                  <h4>Step 1</h4>
                </div>

                <ProgressBar
                  percent={stepStatus[1].perc}
                  text={`${stepStatus[1].perc}%`}
                  fillColor={"#29A643"}
                  // borderColor="transparent"
                  progress
                  width="100%"
                  height="0.5rem"
                />
              </>
            }
          </div>

          <div className={classes.stepInfo} style={{ width: window.screen.width < 1200 && step !== 2 ? '0' : '100%' }}>
            {(window.screen.width >= 1200 || step == 2) &&
              <>
                <div className={classes.stepStatusContainer} style={{ width: window.screen.width > 1200 ? '50%' : '0' }}>
                  <div className={classes.stepStatus} style={{ borderColor: stepStatus[2].perc === 100 ? '#32AA43' : '#ccc' }}>
                    <div className={classes.step} style={{ backgroundColor: stepStatus[2].perc === 100 ? '#32AA43' : '#ccc' }}>
                      <span>2</span>
                    </div>
                  </div>
                  <h4>Step 2</h4>
                </div>
                <ProgressBar
                  percent={stepStatus[2].perc}
                  text={`${stepStatus[2].perc}%`}
                  fillColor={"#29A643"}
                  // borderColor="transparent"
                  progress
                  width="100%"
                  height="0.5rem"
                />
              </>
            }
          </div>
        </div>
      </div>

      {renderStep()}

      {step !== 3 &&
        <>
          {step === 1 ?
            <button className={classes.btn} style={{ backgroundColor: !!errors.fullName || !!errors.dateOfBirth || !formData.fullName || !formData.dateOfBirth ? '#CCC' : '#29A643' }} onClick={handleNext} disabled={!!errors.fullName || !!errors.dateOfBirth || !formData.fullName}>
              Continue
            </button> :
            (<button className={classes.btn} style={{ backgroundColor: !!errors.email || !!errors.password || !formData.email ? '#CCC' : '#29A643' }} onClick={handleNext} disabled={!!errors.email || !!errors.password || !formData.email}>
              Register now
            </button>)
          }
        </>
      }

      <NewAccount /> {/*different*/}


    </div >
  );
};

export default Registration;
