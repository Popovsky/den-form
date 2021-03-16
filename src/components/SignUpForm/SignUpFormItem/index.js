import React, {useState} from 'react';
import styles from './SignUpFormItem.module.scss';
import {ErrorMessage, Field} from 'formik';
import InputMask from 'react-input-mask';
import camelCase from 'camelcase';
import {passwordComplexity} from '../../../config/signUp';

const SignUpFormItem = ({fieldData, countryPhoneData, handleChange, values}) => {
  const passwordComplexityNameArray = Object.keys(passwordComplexity);
  const {title, type, tag} = fieldData;
  const fieldId = camelCase(title);
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordType, setPasswordType] = useState('');
  const passwordHandleChange = event => {
    handleChange(event);
    setPasswordValue(event.target.value);
    switch (event.target.value) {
      case event.target.value.match(passwordComplexity.light)?.[0]: {
        setPasswordType(passwordComplexityNameArray[0]);
        break;
      }
      case event.target.value.match(passwordComplexity.medium)?.[0]: {
        setPasswordType(passwordComplexityNameArray[1]);
        break;
      }
      case event.target.value.match(passwordComplexity.strong)?.[0]: {
        setPasswordType(passwordComplexityNameArray[2]);
        break;
      }
      default:
        setPasswordType('');
        break;
    }
    console.log(event.target.value);
    console.log(passwordType);
  };
  return (
    <>
      <div className={`${styles.box} ${styles[type] || ''}`}>
        <label className={`${styles.title} ${styles[passwordType] || ''}`} htmlFor={fieldId}>
          {fieldId === 'acceptPrivacyPolicy' ?
            <>
              {`${title.split(' ').shift()} `}
              <a href="https://www.google.com">{title.split(' ').slice(1).join(' ')}</a>
            </>
            : title}
        </label>
        {fieldId === 'password' ?
          <Field className={styles.field}
                 id={fieldId}
                 type={type}
                 name={fieldId}
                 value={passwordValue}
                 onChange={passwordHandleChange}/> :
          <Field className={styles.field}
                 id={fieldId}
                 as={tag}
                 type={type}
                 name={fieldId}
                 children={tag === 'select' ?
                   <>
                     <option value="" disabled>Select your country</option>
                     {countryPhoneData.map(item => {
                       return <option className={styles.option} key={item.code}>{`${item.name} (${item.mask.match(/\+\d*/).join('')})`}</option>;
                     })}
                   </> : null}/>}

        {type === 'checkbox' && <div/>}
        <ErrorMessage className={styles.error} name={fieldId} component="div"/>
      </div>
      {tag === 'select' ?
        <div className={styles.box}>
          <InputMask className={styles.field}
                     onChange={handleChange}
                     value={values.values[fieldId + 'Field']}
                     mask="(999)999-99-99"
                     name={fieldId + 'Field'}/>
          <ErrorMessage className={styles.error} name={fieldId + 'Field'} component="div"/>
        </div>
        : null}
    </>
  );
};

export default SignUpFormItem;