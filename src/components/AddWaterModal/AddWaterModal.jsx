import { createPortal } from 'react-dom';
import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import {
  ButtonTransparent,
  ModalBackdrop,
  ModalContainer,
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
const modalRoot = document.querySelector('#root_modal');

export default function AddWaterModal({
  modalActive,
  setModalActive,
  handleUpdate,
}) {
  if (modalActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    const handlerEscape = (e) => {
      if (e.code === 'Escape') {
        setModalActive(false);
      }
    };
    window.addEventListener('keydown', handlerEscape);

    return () => {
      window.removeEventListener('keydown', handlerEscape);
    };
  }, [setModalActive]);

  const onSubmit = async (values) => {
    handleUpdate(values.quantity);
  };

  return createPortal(
    <ModalBackdrop
      className={modalActive ? 'active' : ''}
      onClick={() => setModalActive(false)}
    >
      <ModalContainer
        className={modalActive ? 'active' : ''}
        onClick={(e) => e.stopPropagation()}
      >
        <HeadlineFirst>Add water intake</HeadlineFirst>
        <Formik
          initialValues={{
            quantity: '',
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
                name="quantity"
                placeholder="Enter milliliters"
                className={
                  touched.quantity
                    ? errors.quantity
                      ? 'input-error'
                      : 'input-success'
                    : 'input-normal'
                }
              />
              <FormikStyledErrorMessage component="p" name="quantity" />
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
      </ModalContainer>
    </ModalBackdrop>,
    modalRoot
  );
}
