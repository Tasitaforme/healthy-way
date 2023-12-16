import { createPortal } from 'react-dom';
import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import {
  ButtonTransparent,
  FormikStyledButton,
  FormikStyledErrorMessage,
  FormikStyledField,
  FormikStyledForm,
  FormikStyledFormLabel,
  ModalBackdrop,
  ModalContainer,
} from './AddWaterModal.styled';
import {
  BodyTextSecond,
  ButtonTextFirst,
  ButtonTextSecond,
  ButtonTextThird,
  HeadlineFirst,
} from '../StyledComponents/Components.styled';
import { waterSchema } from '../../schemas/formikWater';
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
            <FormikStyledForm>
              <FormikStyledFormLabel>
                <BodyTextSecond>How much water</BodyTextSecond>
              </FormikStyledFormLabel>
              <FormikStyledField
                type="text"
                name="quantity"
                placeholder="Enter milliliters"
                className={
                  touched.quantity
                    ? errors.quantity
                      ? 'input-error'
                      : !errors.quantity
                      ? 'input-success'
                      : 'input-error'
                    : 'input-normal'
                }
              />
              <FormikStyledErrorMessage component="p" name="quantity" />
              <FormikStyledButton
                type="submit"
                disabled={!isValid || isSubmitting || !dirty}
              >
                <ButtonTextFirst>Confirm</ButtonTextFirst>
              </FormikStyledButton>
            </FormikStyledForm>
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
