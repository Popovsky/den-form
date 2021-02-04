import React from 'react';
import styles from './SignUpFormItem.module.scss';
import {ErrorMessage, Field} from 'formik';
import InputMask from 'react-input-mask';
import camelCase from 'camelcase';

const SignUpFormItem = ({fieldData, countryPhoneData}) => {
  const {title, type, tag} = fieldData;
  const fieldId = camelCase(title);
  return (
    <>
      <div className={`${styles.box} ${styles[type]}`}>
        <label className={styles.title} htmlFor={fieldId}>{title}</label>
        <Field className={styles.field}
               id={fieldId}
               as={tag}
               type={type}
               name={fieldId}
               children={tag === 'select' ? <>
                 <option value="" disabled>Select your country</option>
                 {
                   countryPhoneData.map(item => {
                     return <option key={item.code}>{`${item.name} (${item.mask.match(/\+\d*/).join('')})`}</option>;
                   })
                 }
               </> : null}/>
        {type === 'checkbox' && <div/>}
        <ErrorMessage className={styles.error} name={fieldId} component="div"/>
      </div>
      {tag === 'select' ?
        <div className={styles.box}>
          <InputMask className={styles.field} mask="(999)999-99-99" name={fieldId + 'Field'}/>
          <ErrorMessage className={styles.error} name={fieldId + 'Field'} component="div"/>
        </div>
        : null}
    </>
  );
};

export default SignUpFormItem;