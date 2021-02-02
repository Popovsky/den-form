import React from 'react';
import styles from './SignUpForm.module.scss';
import {signUpItemsArray, signUpValidationSchema} from '../../config/signUp';
import SignUpFormItem from './SignUpFormItem';

const SignUpForm = ({countryPhoneData}) => {
  const handleSubmit = async event => {
    event.preventDefault();
    const formData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      sendMe: event.target[3].checked,
      personalPhoneNumber: event.target[5].value,
      companyName: event.target[6].value,
      companyAddress: event.target[7].value,
      companyPhoneNumber: event.target[9].value,
      jobTitle: event.target[10].value,
      password: event.target[11].value,
      confirmPassword: event.target[12].value,
      accept: event.target[13].checked,
    };
    console.log(formData);
    const isValid = await signUpValidationSchema.isValid(formData);
    console.log(isValid);
  };
  console.log(countryPhoneData);
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.title}>sign up</h1>
      {signUpItemsArray.map(({title, type, tag}, index) => {
        return <SignUpFormItem key={index} title={title} type={type} tag={tag} countryPhoneData={countryPhoneData}/>;
      })}
      <div className={styles.submitWrapper}>
        <button className={styles.submit} type="submit">sign up</button>
      </div>
    </form>
  );
};

export default SignUpForm;