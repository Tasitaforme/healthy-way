// import React from 'react';
import { Formik } from 'formik';
import sprite from 'assets/sprite.svg';
import { weightSchema } from '../../schemas/formikWeight';
import {
  ModalWrapper,
  CloseBtn,
  Modal,
  ModalTitle,
  ModalText,
  DateContainer,
  DateText,
  DateDay,
  WeightForm,
  WeightFormInput,
  WeightFormBtn,
  CancelBtn,
  ErrorMessage,
} from './CurrentWeightModal.styled';
import { useDispatch } from 'react-redux';
import { updateWeight } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

export default function CurrentWeightModal({ onCloseModal, onWeightClick }) {
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    try {
      await dispatch(updateWeight(values.weight));
      toast.success('Your weight has been successfully updated!');
      if (window.innerWidth < 834) {
        onWeightClick();
        return;
      }
      onCloseModal();
    } catch (error) {
      toast.error(`Something went wrong! ${error.message}`);
    }
  };

  const getCurrentDateFormatted = () => {
    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const formattedDate = getCurrentDateFormatted();

  return (
    <ModalWrapper>
      <CloseBtn onClick={onCloseModal}>
        <svg width="16px" height="16px" stroke="#fff">
          <use href={`${sprite}#close-circle`} />
        </svg>
      </CloseBtn>
      <Modal>
        <ModalTitle>Enter your current weight</ModalTitle>
        <ModalText>You can record your weight once a day</ModalText>
        <DateContainer>
          <DateText>Today</DateText>
          <DateDay>{formattedDate}</DateDay>
        </DateContainer>
        <Formik
          initialValues={{
            weight: '',
          }}
          validationSchema={weightSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, isSubmitting, isValid, dirty }) => (
            <WeightForm>
              <WeightFormInput
                type="text"
                name="weight"
                placeholder="Enter your weight"
                autoComplete="off"
                className={
                  touched.weight
                    ? errors.weight
                      ? 'input-error'
                      : 'input-success'
                    : 'input-normal'
                }
              />
              <ErrorMessage component="p" name="weight" />
              <WeightFormBtn
                type="submit"
                disabled={!isValid || isSubmitting || !dirty}
              >
                Confirm
              </WeightFormBtn>
            </WeightForm>
          )}
        </Formik>
        <CancelBtn onClick={() => onWeightClick()}>Cancel</CancelBtn>
      </Modal>
    </ModalWrapper>
  );
}
