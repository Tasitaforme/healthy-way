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
} from './CurrentWeightModal.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateWeight } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

export default function CurrentWeightModal({ onCloseModal, onWeightClick }) {
  const [newWeight, setNewWeight] = useState(0);

  const dispatch = useDispatch();

  const handleChangeWeight = (e) => {
    setNewWeight(e.currentTarget.value);
    console.log(newWeight);
  };

  const handleConfirmClick = (e) => {
    e.preventDefault();
    dispatch(updateWeight(newWeight));
    toast.success('Your weight has been successfully updated!');

    if (window.innerWidth < 834) {
      onWeightClick();
      return;
    }
    onCloseModal();
  };

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
            onChange={handleChangeWeight}
          />
          <WeightFormBtn type="submit" onClick={handleConfirmClick}>
            Confirm
          </WeightFormBtn>
        </WeightForm>
      </Modal>
      <CancelBtn onClick={onWeightClick}>Cancel</CancelBtn>
    </ModalWrapper>
  );
}
