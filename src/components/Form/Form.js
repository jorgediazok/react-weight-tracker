import React from 'react';
import FormInputs from './FormInputs';
import weightImage from '../../assets/weight.svg';
import useStyles from './styles';

const Form = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.formContainer}>
        <div className={classes.contentLeft}>
          <h1 className={classes.formHeading}>Calculate your daily weight</h1>
          <img src={weightImage} alt="weight" className={classes.formImg} />
        </div>
        <FormInputs />
      </div>
    </React.Fragment>
  );
};

export default Form;
