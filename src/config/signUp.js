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
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  sendMeEmailInPlaneText: yup.boolean(),
  personalPhoneNumber: yup.string().required(),
  personalPhoneNumberField: yup.string().required(),
  companyName: yup.string().required(),
  companyAddress: yup.string().required(),
  companyPhoneNumber: yup.string().required(),
  companyPhoneNumberField: yup.string().required(),
  jobTitle: yup.string().required(),
  password: yup.string().required().min(10),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required(),
  acceptPrivacyPolicy: yup.boolean().oneOf([true]),
});