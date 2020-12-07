import React from 'react';
import useStyles from './styles';

const FormInputs = () => {
  const classes = useStyles();

  return (
    <div className={classes.contentRight}>
      <form className={classes.form}>
        <h1 className={classes.formTitle}>SIGN UP</h1>
        <div className={classes.formInputs}>
          <label htmlFor="username" className={classes.formLabel}>
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className={classes.formInput}
            placeholder="Enter your name"
          />
        </div>
        <div className={classes.formInputs}>
          <label htmlFor="email" className={classes.formLabel}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={classes.formInput}
            placeholder="Enter your email"
          />
        </div>
        <div className={classes.formInputs}>
          <label htmlFor="password" className={classes.formLabel}>
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className={classes.formInput}
            placeholder="Enter your password"
          />
        </div>
        <div className={classes.formInputs}>
          <label htmlFor="password2" className={classes.formLabel}>
            Confirm your Password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className={classes.formInput}
            placeholder="Confirm your password"
          />
        </div>
        <button className={classes.formInputBtn} type="submit">
          Sign Up
        </button>
        <span className={classes.formInputLogin}>
          Already have an account? Login <a href="/">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormInputs;
