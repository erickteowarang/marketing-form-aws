# Marketing Form AWS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a simple form that's designed to be hooked up to an AWS serverless solution. It is built with Formik and custom field components/validation.

## Architectural Setup

![Screenshot](https://imgur.com/iEhSpYS.jpg)

The notes on the side: 

1. The client accesses the form via their device and enters their details, submits their data via a HTTPS POST to the API.

2. CloudFront encrypts the form data with a public RSA key and sends it to the serverless app. 

3. The serverless app runs a Lambda function to decrypt and validate the form data.

4. If there is a validation error or any other form of error when saving it to the DB, sends an error response back to the client.

5. The encrypted data is saved in a DynamoDB table

6. If an admin user wishes to see the data, a Lambda function is used to decrypt the data.

7. The decrypted data is sent back to the admin for review.

### Potential Issues with Solution

- CloudFront field-level encryption might not be needed for such a small form like this, although it is always good to secure user data. 
- If encryption is not needed, it might be better to use OAuth or JWT Tokens to secure the public API from malicious attacks. 
- Any API error messages returned in step 4 should be clear and concise so the user knows what to do. 
- Having two Lambda functions that can decrypt the data might be a security risk if one of them is breached.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Things to Add

- Handling side effects when the API is called (either using redux and redux-sagas or other libraries)

- More unit tests for each component, perhaps using enzyme and shallow rendering

- Handle form submission (it should call the AWS API and submit the data there)

- Add a loader for when the form is being submitted
