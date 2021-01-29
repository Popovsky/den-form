import React from 'react';
import styles from './SignUpFormItem.module.scss';

const SignUpFormItem = ({title, type}) => {
  return (
    <label className={styles[type]}>
      <span>{title}</span>
      <input type={type}/>
      {type === 'checkbox' && <div/>}
    </label>
  );
};

export default SignUpFormItem;