import React from 'react';
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

import loseFatMen from '../../assets/images/header/Lose-fat-image-men.png';
import MusculeMen from '../../assets/images/header/Gain-muscle.png';
import MaintakeMen from '../../assets/images/header/Maintake-image-men.png';

export default function TargetSelectionModal({ onCloseModal }) {
  return (
    <ModalWrapper>
      <CloseBtn onClick={onCloseModal}>
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
            <TargetWrapper>
              <ImgBorder>
                <TargetImg src={loseFatMen} alt="Lose fat" />
              </ImgBorder>
              <TargetText>Lose fat</TargetText>
            </TargetWrapper>
            <TargetWrapper>
              <ImgBorder>
                <TargetImg src={MaintakeMen} alt="Maintain" />
              </ImgBorder>
              <TargetText>Maintain</TargetText>
            </TargetWrapper>
            <TargetWrapper>
              <ImgBorder>
                <TargetImg src={MusculeMen} alt="Gain muscle" />
              </ImgBorder>
              <TargetText>Gain muscle</TargetText>
            </TargetWrapper>
          </ul>
          <ModalBtn type="submit">Confirm</ModalBtn>
        </ModalForm>
      </Modal>
      <CancelBtn onClick={onCloseModal}>Cancel</CancelBtn>
    </ModalWrapper>
  );
}
