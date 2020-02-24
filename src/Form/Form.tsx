import React from 'react'
import { useFormik } from 'formik'

import TextField from '../components/TextField'
import FormControl from '../components/FormControl'
import Button from '../components/Button'
import Dropdown from '../components/Dropdown'
import { H2 } from '../components/Typography'

import { ERROR_MESSAGES, INDUSTRY_OPTIONS } from '../global/locale'

import { IFormValues } from './Form.types'
import { FormWrapper } from './Form.style'

const validate = (values: IFormValues) => {
  const errors: any = {}
    
  if (values.firstName && values.firstName.length < 3) {
    errors.firstName = ERROR_MESSAGES.FIRST_NAME_LEN_ERROR
  }

  if (!values.lastName) {
    errors.lastName = ERROR_MESSAGES.REQUIRED
  }

  if (!values.email) {
    errors.email = ERROR_MESSAGES.REQUIRED
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = ERROR_MESSAGES.INVALID_EMAIL
  }

  return errors;
}

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
  })

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
        <H2>Sign up for our newsletter!</H2>

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

        <FormControl error={
             formik.touched.industry && formik.errors.industry 
             ? formik.errors.industry : ''
        }>
            <Dropdown 
                id="industry"
                name="industry"
                options={INDUSTRY_OPTIONS}
                label="Industry"
            />
        </FormControl>

        <Button type="submit" label="Sign up" />
    </FormWrapper> 
  );
};

export default SignupForm