import React from 'react';
import useStyles from './styles';

const FormInputs = () => {
  const classes = useStyles();

  return (
    <div className={classes.contentRight}>
      <form className={classes.form}>
        <h1 className={classes.formTitle}>SIGN UP</h1>
        <div className={classes.formInputs}>
          <label htmlFor="password" className={classes.formLabel}>
            Height
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className={classes.formInput}
            placeholder="Enter your Height"
          />
        </div>
        <div className={classes.formInputs}>
          <label htmlFor="password2" className={classes.formLabel}>
            Weight
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className={classes.formInput}
            placeholder="Enter your Weight"
          />
        </div>
        <button className={classes.formInputBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormInputs;
