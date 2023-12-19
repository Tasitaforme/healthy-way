import React from 'react';
import { Formik } from 'formik';
import {
  ButtonTransparent,
  ModalWrap,
  WaterButton,
  WaterField,
  WaterForm,
  WaterLabel,
} from './AddWaterModal.styled';
import {
  BodyTextSecond,
  ButtonTextFirst,
  ButtonTextThird,
  HeadlineFirst,
} from '../StyledComponents/Components.styled';
import { waterSchema } from '../../schemas/formikWater';
import { FormikStyledErrorMessage } from '../StyledComponents/Formik.styled';

export default function AddWaterModal({ handleUpdate, setModalActive }) {
  const onSubmit = (values) => {
    handleUpdate(values);
  };

  return (
    <ModalWrap>
      <HeadlineFirst>Add water intake</HeadlineFirst>
      <Formik
        initialValues={{
          water: '',
        }}
        validationSchema={waterSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting, isValid, dirty }) => (
          <WaterForm>
            <WaterLabel>
              <BodyTextSecond>How much water</BodyTextSecond>
            </WaterLabel>
            <WaterField
              type="text"
              name="water"
              placeholder="Enter milliliters"
              autoComplete="off"
              className={
                touched.water
                  ? errors.water
                    ? 'input-error'
                    : 'input-success'
                  : 'input-normal'
              }
            />
            <FormikStyledErrorMessage component="p" name="water" />
            <WaterButton
              type="submit"
              disabled={!isValid || isSubmitting || !dirty}
            >
              <ButtonTextFirst>Confirm</ButtonTextFirst>
            </WaterButton>
          </WaterForm>
        )}
      </Formik>

      <ButtonTransparent type="button" onClick={() => setModalActive(false)}>
        <ButtonTextThird>Cancel</ButtonTextThird>
      </ButtonTransparent>
    </ModalWrap>
  );
}
