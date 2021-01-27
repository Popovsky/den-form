import React from 'react';
import styles from './SignUpForm.module.scss';

const SignUpForm = () => {
  return (
    <form className={styles.form}>
      <h1 className={styles.title}>sign up</h1>
      <label className={styles.firstName}>
        <div>first name</div>
        <input type="text"/>
      </label>
      <label className={styles.lastName}>
        <div>last name</div>
        <input type="text"/>
      </label>
      <label className={styles.email}>
        <div>email</div>
        <input type="text"/>
      </label>
      <label className={styles.checkbox}>
        <input type="checkbox"/>
        <span>send me email in plane text</span>
      </label>
      <label className={styles.personalPhone}>
        <div>personal phone number</div>
        <input type="select"/>
      </label>
      <input className={styles.ppnumber} type="text"/>
      <label className={styles.companyName}>
        <div>company name</div>
        <input type="text"/>
      </label>
      <label className={styles.companyAddress}>
        <div>company address</div>
        <input type="text"/>
      </label>
      <label className={styles.companyPhone}>
        <div>company phone number</div>
        <input type="select"/>
      </label>
      <input className={styles.cpnumber} type="text"/>
      <label className={styles.jobTitle}>
        <div>job title</div>
        <input type="text"/>
      </label>
      <label className={styles.password}>
        <div>password</div>
        <input type="password"/>
      </label>
      <label className={styles.confirmPassword}>
        <div>confirm password</div>
        <input type="password"/>
      </label>
      <label className={styles.accept}>
        <input type="checkbox"/>
        <span>accept <a href="/">privacy policy</a></span>
      </label>
      <input className={styles.submit} type="submit"/>
    </form>
  );
};

export default SignUpForm;