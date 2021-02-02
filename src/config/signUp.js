import * as yup from 'yup';

export const signUpItemsArray = [
  {
    title: 'first name',
    type: 'text',
    tag: 'input',
  },
  {
    title: 'last name',
    type: 'text',
    tag: 'input',
  },
  {
    title: 'email',
    type: 'text',
    tag: 'input',
  },
  {
    title: 'send me email in plane text',
    type: 'checkbox',
    tag: 'input',
  },
  {
    title: 'personal phone number',
    type: '',
    tag: 'select',
  },
  {
    title: '',
    type: 'tel',
    tag: 'input',
  },
  {
    title: 'company name',
    type: 'text',
    tag: 'input',
  },
  {
    title: 'company address',
    type: 'text',
    tag: 'input',
  },
  {
    title: 'company phone number',
    type: '',
    tag: 'select',
  },
  {
    title: '',
    type: 'tel',
    tag: 'input',
  },
  {
    title: 'job title',
    type: 'text',
    tag: 'input',
  },
  {
    title: 'password',
    type: 'password',
    tag: 'input',
  },
  {
    title: 'confirm password',
    type: 'password',
    tag: 'input',
  },
  {
    title: 'accept privacy policy',
    type: 'checkbox',
    tag: 'input',
  },
];

export const signUpValidationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  sendMe: yup.boolean(),
  personalPhoneNumber: yup.number().positive().integer().min(8).required(),
  companyName: yup.string().required(),
  companyAddress: yup.string().required(),
  companyPhoneNumber: yup.number().positive().integer().min(8).required(),
  jobTitle: yup.string().required(),
  password: yup.string().required().min(10),
  passwordMin: yup.string().oneOf([yup.ref('password'), null]).min(10),
  passwordLC: yup.string().oneOf([yup.ref('password'), null]).matches(/[a-z]/),
  passwordUC: yup.string().oneOf([yup.ref('password'), null]).matches(/[A-Z]/),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required(),
  accept: yup.boolean().oneOf([true]),
});