import React from 'react'
import { useFormik } from 'formik'

import TextField from '../components/TextField'
import FormControl from '../components/FormControl'

import { IFormValues } from './Form.types'
import { FormWrapper } from './Form.style'

const validate = (values: IFormValues) => {
  const errors: any = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      industry: '',
    },
    validate,
    validateOnBlur: false,
    onSubmit: (values: IFormValues) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
        <FormControl error={
            formik.touched.firstName && formik.errors.firstName 
            ? formik.errors.firstName : ''
        }>
            <TextField 
                label="First Name"
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
        </FormControl>

        <FormControl error={
            formik.touched.lastName && formik.errors.lastName 
            ? formik.errors.lastName : ''
        }>
            <TextField 
                label="Last Name"
                id="lastName"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
            />
        </FormControl>

        <FormControl error={
            formik.touched.email && formik.errors.email 
            ? formik.errors.email : ''
        }>
            <TextField 
                label="Email Address"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
        </FormControl>

        <button type="submit">Submit</button>
    </FormWrapper>
  );
};

export default SignupForm