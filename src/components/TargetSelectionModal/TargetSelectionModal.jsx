import React, { useState } from 'react';
import sprite from 'assets/sprite.svg';

import {
  ModalWrapper,
  CloseBtn,
  Modal,
  ModalTitle,
  ModalText,
  ModalForm,
  TargetWrapper,
  ImgBorder,
  TargetImg,
  TargetText,
  ModalBtn,
  CancelBtn,
} from './TargetSelectionModal.styled';
import { updateGoal } from '../../redux/auth/operations';
import { selectUserInfo } from '../../redux/auth/selectors';

import loseFatMen from '../../assets/images/header/lose-fat-image-men.png';
import loseFatGirl from '../../assets/images/header/lose-fat-image-girl.png';
import muscleImg from '../../assets/images/header/gain-muscle.png';
import maintakeMen from '../../assets/images/header/maintake-image-men.png';
import maintakeGirl from '../../assets/images/header/maintake-image-girl.png';

import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

export default function TargetSelectionModal({ onTargetClick, onCloseModal }) {
  const userInfo = useSelector(selectUserInfo);

  const [newGoal, setNewGoal] = useState('');
  const dispatch = useDispatch();

  let loseFatImg = userInfo.gender === 'Female' ? loseFatGirl : loseFatMen;
  let maintainImg = userInfo.gender === 'Female' ? maintakeGirl : maintakeMen;

  const handleLoseWeight = () => setNewGoal('Lose fat');
  const handMaintain = () => setNewGoal('Maintain');
  const handleGainMuscle = () => setNewGoal('Gain muscle');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateGoal(newGoal));
    toast.success('Your goal has neen successfully updated!');

    if (window.innerWidth < 834) {
      onTargetClick();
      return;
    }
    onCloseModal();
  };

  return (
    <ModalWrapper>
      <CloseBtn type="button" onClick={onCloseModal}>
        <svg width="16px" height="16px" stroke="#fff">
          <use href={`${sprite}#close-circle`} />
        </svg>
      </CloseBtn>

      <Modal>
        <ModalTitle>Target selection</ModalTitle>
        <ModalText>
          The service will adjust your calorie intake to your goal
        </ModalText>

        <ModalForm>
          <ul>
            <TargetWrapper onClick={handleLoseWeight}>
              <ImgBorder>
                <TargetImg src={loseFatImg} alt="Lose fat" />
              </ImgBorder>
              <TargetText>Lose fat</TargetText>
            </TargetWrapper>

            <TargetWrapper onClick={handMaintain}>
              <ImgBorder>
                <TargetImg src={maintainImg} alt="Maintain" />
              </ImgBorder>
              <TargetText>Maintain</TargetText>
            </TargetWrapper>

            <TargetWrapper onClick={handleGainMuscle}>
              <ImgBorder>
                <TargetImg src={muscleImg} alt="Gain muscle" />
              </ImgBorder>
              <TargetText>Gain muscle</TargetText>
            </TargetWrapper>
          </ul>

          <ModalBtn type="submit" onClick={handleSubmit}>
            Confirm
          </ModalBtn>
        </ModalForm>

        <CancelBtn type="button" onClick={onTargetClick}>
          Cancel
        </CancelBtn>
      </Modal>
    </ModalWrapper>
  );
}
