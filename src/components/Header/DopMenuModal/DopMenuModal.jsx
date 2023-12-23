import sprite from 'assets/sprite.svg';

import {
  ModalWrapper,
  GlobalWrapper,
  CloseBtn,
  IconWrapper,
  ArrowIcon,
  LoseMen,
  LoseMenImage,
  SpanText,
} from './DopMenuModal.styled';
import TargetSelectionModal from '../../TargetSelectionModal/TargetSelectionModal';
import { useState } from 'react';
import CurrentWeightModal from '../../СurrentWeightModal/СurrentWeightModal';
// import loseFatMen from '../../assets/images/header/Lose-fat-image-men.png';
// import { loseMenImg } from '/images/header/Lose-fat-image-men.png';
// import { weightImg } from '/images/header/Waight-image.png';

import loseMenImg from '../../../assets/images/header/Lose-fat-image-men.png';
import weightImg from '../../../assets/images/header/Waight-image.png';

export const DopMenuModal = ({ onCloseModal, userInfo }) => {
  const [targetModalOpen, setTargetModalOpen] = useState(false);
  const [weightModalOpen, setWeightModalOpen] = useState(false);

  const openTargetMenu = () => {
    setTargetModalOpen((targetModalOpen) => !targetModalOpen);
  };

  const openWeightMenu = () => {
    setWeightModalOpen((weightModalOpen) => !weightModalOpen);
  };

  return (
    <ModalWrapper>
      <CloseBtn onClick={onCloseModal}>
        <svg width="16px" height="16px" stroke="#fff">
          <use href={`${sprite}#close-circle`} />
        </svg>
      </CloseBtn>

      <GlobalWrapper>
        <IconWrapper>
          <LoseMen>
            <LoseMenImage src={loseMenImg} alt="Lose fat" />
          </LoseMen>

          <div>
            <p>Goal</p>
            <p>Lose fat</p>
          </div>

          <div>
            <ArrowIcon onClick={openTargetMenu}>
              <use href={`${sprite}#arrow-right`} />
            </ArrowIcon>
          </div>
        </IconWrapper>

        <IconWrapper>
          <LoseMen>
            <LoseMenImage src={weightImg} alt="" />
          </LoseMen>

          <div>
            <p>Weight</p>
            <p>
              {userInfo.weight}
              <SpanText> kg</SpanText>
            </p>
          </div>

          <div>
            <ArrowIcon onClick={openWeightMenu}>
              <use href={`${sprite}#edit`} />
            </ArrowIcon>
          </div>
        </IconWrapper>
      </GlobalWrapper>
      {(targetModalOpen && <TargetSelectionModal />) ||
        (weightModalOpen && <CurrentWeightModal />)}
    </ModalWrapper>
  );
};
