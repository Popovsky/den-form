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

export const signUpValidationSchema = (phoneMaskLength) => yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email().required('Email is required'),
  sendMeEmailInPlaneText: yup.boolean(),
  personalPhoneNumber: yup.string().required('Personal phone number is required'),
  personalPhoneNumberField: yup.string().required(),
  companyName: yup.string().required('Company name is required'),
  companyAddress: yup.string().required('Company address is required'),
  companyPhoneNumber: yup.string().required('Company phone number is required'),
  companyPhoneNumberField: yup.string().required(),
  jobTitle: yup.string().required('Job title is required'),
  password: yup.string().min(10).required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required('Confirm password is required'),
  acceptPrivacyPolicy: yup.boolean().oneOf([true], 'Accept privacy policy is required'),
});