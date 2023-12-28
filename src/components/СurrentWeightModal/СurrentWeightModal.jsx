import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { Formik } from 'formik';
import { updateWeight, currentUser } from '../../redux/auth/operations';
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
  ModalBackdrop,
} from './CurrentWeightModal.styled';

export default function CurrentWeightModal({
  onCloseModal,
  setShowModalWeight,
  showModalWeight,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    const handlerEscape = (e) => {
      if (e.code === 'Escape') {
        setShowModalWeight(false);
      }
    };
    window.addEventListener('keydown', handlerEscape);

    return () => {
      window.removeEventListener('keydown', handlerEscape);
    };
  }, [setShowModalWeight]);

  const onSubmit = async (values) => {
    try {
      await dispatch(updateWeight(values.weight));
      toast.success('Your weight has been successfully updated!');
      setShowModalWeight(false);
      dispatch(currentUser);
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
    <ModalBackdrop
      className={showModalWeight ? 'active' : ''}
      onClick={() => setShowModalWeight(false)}
    >
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onCloseModal}>
          <svg width="16px" height="16px" stroke="#b6b6b6">
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
          <CancelBtn onClick={() => setShowModalWeight(false)}>
            Cancel
          </CancelBtn>
        </Modal>
      </ModalWrapper>
    </ModalBackdrop>
  );
}
