import React from 'react';
import styles from './SignUpForm.module.scss';
import {Formik, Form} from 'formik';
import {signUpValidationSchema, signUpItemsArray} from '../../config/signUp';
import SignUpFormItem from './SignUpFormItem';

const SignUpForm = ({countryPhoneData}) => {
  return (
    <Formik
      initialValues={
        {
          firstName: '',
          lastName: '',
          email: '',
          sendMeEmailInPlaneText: false,
          personalPhoneNumber: '',
          personalPhoneNumberField: '',
          companyName: '',
          companyAddress: '',
          companyPhoneNumber: '',
          companyPhoneNumberField: '',
          jobTitle: '',
          password: '',
          confirmPassword: '',
          acceptPrivacyPolicy: false,
        }
      }
      validationSchema={signUpValidationSchema}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({isSubmitting}) => (
        <Form className={styles.form}>
          {signUpItemsArray.map((item, index) => {
            return <SignUpFormItem key={index} fieldData={item} countryPhoneData={countryPhoneData}/>;
          })}
          <div className={styles.submitWrapper}>
            <button className={styles.submit} type="submit" disabled={isSubmitting}>
              sign up
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;