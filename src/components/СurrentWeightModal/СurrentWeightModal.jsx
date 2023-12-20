import React from 'react';
import sprite from 'assets/sprite.svg';
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
} from '../СurrentWeightModal/CurrentWeightModal.styled';
export default function СurrentWeightModal({ onCloseModal }) {
  function getCurrentDateFormatted() {
    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    return `${day}.${month}.${year}`;
  }
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
        <WeightForm>
          <WeightFormInput
            type="number"
            name="weight"
            placeholder="Enter your weight"
            autoComplete="off"
            required
            autoFocus
          />
          <WeightFormBtn type="submit">Confirm</WeightFormBtn>
        </WeightForm>
      </Modal>
      <CancelBtn onClick={onCloseModal}>Cancel</CancelBtn>
    </ModalWrapper>
  );
}
