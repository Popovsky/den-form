import React, {createElement, useState} from 'react';
import styles from './SignUpFormItem.module.scss';
import InputMask from 'react-input-mask';

const SignUpFormItem = ({title, type, tag, countryPhoneData}) => {
  const [value, setValue] = useState('');
  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <label className={`${styles.label} ${styles[type]}`}>
      <span>{title}</span>
      {type === 'tel' ?
        <InputMask mask="(999)999-99-99" className={styles.formItem}/> :
        createElement(
          tag,
          {type, className: styles.formItem, onChange: handleChange, value},
          tag === 'select' ? countryPhoneData.map(item => {
            return <option key={item.code}>{`${item.name} (${item.mask.match(/\+\d*/).join('')})`}</option>;
          }) : null)}
      {type === 'checkbox' && <div/>}
    </label>
  );
}
;

export default SignUpFormItem;