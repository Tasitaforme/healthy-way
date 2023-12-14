import React from 'react';
import { Formik } from 'formik';

import {
  UserInformationForm,
  UserInformationLabel,
  UserInformationField,
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
        name: '',
        age: '',
        gender: '',
        height: '',
        weight: '',
        activity: '',
      }}
      onSubmit={async (values) => {}}
    >
      <UserInformationForm encType="multipart/form-data">
        <UserInformationLabel htmlFor="name">Your name</UserInformationLabel>
        <UserInformationField
          id="name"
          name="name"
          placeholder={testUser.name || values.name}
          //   value={testUser.name}
        />

        <button type="submit">Submit</button>
      </UserInformationForm>
    </Formik>
  );
}
