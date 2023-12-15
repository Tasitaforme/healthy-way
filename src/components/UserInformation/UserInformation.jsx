import React from 'react';
import { Field, Form } from 'formik';
import { Formik } from 'formik';

import { profileSettingSchema } from '../../schemas/formik';

import {
  UserInformationForm,
  UserInformationField,
  UserInformationErrorMessage,
  UserInformationSubmitButton,
  UserInformationCancelButton,
  UserInformationBlock,
  GenderButtonsWrapper,
  UserInformationRadioText,
  UserInformationRadioInput,
  UserInformationRadioLabel,
} from './UserInformation.styled';

export default function UserInformation() {
  const testUser = {
    name: 'Konstantin',
    age: '34',
    gender: 'male',
    height: '170',
    weight: '90',
    activity: '1.2',
  };

  return (
    <Formik
      initialValues={{
        name: 'Konstantin',
        age: '34',
        gender: 'male',
        height: '170',
        weight: '90',
        activity: '',
      }}
      validationSchema={profileSettingSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors }) => (
        <UserInformationForm>
          <UserInformationBlock>
            <label htmlFor="name">Your name</label>
            <UserInformationField
              name="name"
              placeholder="Enter your name"
              className={errors.name ? 'input-error' : ''}
            />
            <UserInformationErrorMessage name="name" component="div" />
          </UserInformationBlock>

          <UserInformationBlock>
            <label htmlFor="age">Your age</label>
            <UserInformationField
              name="age"
              placeholder="Enter your age"
              className={errors.name ? 'input-error' : ''}
            />
            <UserInformationErrorMessage name="age" component="div" />
          </UserInformationBlock>

          <UserInformationBlock>
            <div id="my-gender-group">Gender</div>
            <GenderButtonsWrapper
              role="group"
              aria-labelledby="my-gender-group"
            >
              <UserInformationRadioLabel>
                <UserInformationRadioInput
                  type="radio"
                  name="gender"
                  value="male"
                />
                <UserInformationRadioText>Male</UserInformationRadioText>
              </UserInformationRadioLabel>

              <UserInformationRadioLabel>
                <UserInformationRadioInput
                  type="radio"
                  name="gender"
                  value="female"
                />
                <UserInformationRadioText>Female</UserInformationRadioText>
              </UserInformationRadioLabel>
            </GenderButtonsWrapper>
          </UserInformationBlock>

          <UserInformationBlock>
            <label htmlFor="height">Height</label>
            <UserInformationField
              name="height"
              placeholder="Enter your height"
              className={errors.name ? 'input-error' : ''}
            />
            <UserInformationErrorMessage name="height" component="div" />
          </UserInformationBlock>

          <UserInformationBlock>
            <label htmlFor="weight">Weight</label>
            <UserInformationField
              name="weight"
              placeholder="Enter your weight"
              className={errors.name ? 'input-error' : ''}
            />
            <UserInformationErrorMessage name="weight" component="div" />
          </UserInformationBlock>

          <UserInformationSubmitButton type="submit">
            Save
          </UserInformationSubmitButton>
          <UserInformationCancelButton type="button">
            Cancel
          </UserInformationCancelButton>
        </UserInformationForm>
      )}
    </Formik>
  );
}
