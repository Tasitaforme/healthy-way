import React from 'react';
import { Formik, Field } from 'formik';

import { profileSettingSchema } from '../../schemas/profileSettings';

import {
  UserInformationForm,
  UserInformationField,
  UserInformationErrorMessage,
  UserInformationSubmitButton,
  UserInformationCancelButton,
  UserInformationBlock,
  GenderButtonsWrapper,
  UserInformationRadioInput,
  UserInformationRadioFake,
  ActivityButtonsWrapper,
  UserInformationRadioLabel,
  UserInformationRadioText,
  UserGenderText,
} from './UserInformation.styled';

export default function UserInformation() {
  const initialValues = {
    name: 'Konstantin',
    avatar: 'null',
    age: '34',
    gender: 'male',
    height: '170',
    weight: '90',
    activity: '1.2',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={profileSettingSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, setFieldValue }) => (
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
            <label htmlFor="avatar">Your photo</label>
            <input
              name="avatar"
              type="file"
              className={errors.name ? 'input-error' : ''}
              onChange={(event) => {
                setFieldValue('avatar', event.currentTarget.files[0]);
              }}
            />
            <UserInformationErrorMessage name="avatar" component="div" />
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
                <UserInformationRadioFake></UserInformationRadioFake>
                <UserGenderText>Male</UserGenderText>
              </UserInformationRadioLabel>

              <UserInformationRadioLabel>
                <UserInformationRadioInput
                  type="radio"
                  name="gender"
                  value="female"
                />
                <UserInformationRadioFake></UserInformationRadioFake>
                <UserGenderText>Female</UserGenderText>
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

          <UserInformationBlock>
            <div id="my-activity-group">Your activity</div>
            <ActivityButtonsWrapper
              role="group"
              aria-labelledby="my-activity-group"
            >
              <UserInformationRadioLabel>
                <UserInformationRadioInput
                  type="radio"
                  name="activity"
                  value="1.2"
                />
                <UserInformationRadioFake></UserInformationRadioFake>
                <UserInformationRadioText>
                  1.2 - if you do not have physical activity and sedentary work
                </UserInformationRadioText>
              </UserInformationRadioLabel>

              <UserInformationRadioLabel>
                <UserInformationRadioInput
                  type="radio"
                  name="activity"
                  value="1.375"
                />
                <UserInformationRadioFake></UserInformationRadioFake>
                <UserInformationRadioText>
                  1.375 - if you do short runs or light gymnastics 1-3 times a
                  week
                </UserInformationRadioText>
              </UserInformationRadioLabel>

              <UserInformationRadioLabel>
                <UserInformationRadioInput
                  type="radio"
                  name="activity"
                  value="1.55"
                />
                <UserInformationRadioFake></UserInformationRadioFake>
                <UserInformationRadioText>
                  1.55 - if you play sports with average loads 3-5 times a week
                </UserInformationRadioText>
              </UserInformationRadioLabel>

              <UserInformationRadioLabel>
                <UserInformationRadioInput
                  type="radio"
                  name="activity"
                  value="1.725"
                />
                <UserInformationRadioFake></UserInformationRadioFake>
                <UserInformationRadioText>
                  1.725 ​​- if you train fully 6-7 times a week
                </UserInformationRadioText>
              </UserInformationRadioLabel>

              <UserInformationRadioLabel>
                <UserInformationRadioInput
                  type="radio"
                  name="activity"
                  value="1.9"
                />
                <UserInformationRadioFake></UserInformationRadioFake>
                <UserInformationRadioText>
                  1.9 - if your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program
                </UserInformationRadioText>
              </UserInformationRadioLabel>
            </ActivityButtonsWrapper>
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
