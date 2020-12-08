import React from 'react';
import { GoogleLogin } from 'react-google-login';
import useStyles from './styles';

const responseGoogle = (response) => {
  console.log(response);
};

const key = process.env.REACT_APP_AUTH_KEY;

const FormInputs = () => {
  const classes = useStyles();

  return (
    <div className={classes.contentRight}>
      <form className={classes.form}>
        <div className={classes.formInputs}>
          <label htmlFor="height" className={classes.formLabel}>
            Height
          </label>
          <input
            id="height"
            type="text"
            name="height"
            className={classes.formInput}
            placeholder="Enter your Height"
          />
        </div>
        <div className={classes.formInputs}>
          <label htmlFor="weight" className={classes.formLabel}>
            Weight
          </label>
          <input
            id="weight"
            type="text"
            name="weight"
            className={classes.formInput}
            placeholder="Enter your Weight"
          />
        </div>
        <button className={classes.formInputBtn} type="submit">
          Submit
        </button>
        <GoogleLogin
          className={classes.loginGoogleButton}
          clientId={key}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </form>
    </div>
  );
};

export default FormInputs;
