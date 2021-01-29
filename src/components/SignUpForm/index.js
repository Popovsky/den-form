import React from 'react';
import styles from './SignUpForm.module.scss';
import {signUpItemsArray} from '../../config/signUp';
import SignUpFormItem from './SignUpFormItem';

const SignUpForm = () => {
  return (
    <form className={styles.form}>
      <h1 className={styles.title}>sign up</h1>
      {signUpItemsArray.map(({title, type}, index) => (
        <SignUpFormItem key={index} title={title} type={type}/>
      ))}
      <div className={styles.submitWrapper}>
        <button className={styles.submit} type="submit">sign up</button>
      </div>
    </form>
  );
};

export default SignUpForm;