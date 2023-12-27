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

import CurrentWeightModal from '../../СurrentWeightModal/СurrentWeightModal';

import weightImg from '../../../assets/images/header/weight-image.png';

export const DopMenuModal = ({
  onCloseModal,
  userInfo,
  goalImg,
  setShowModalTarget,
  showModalTarget,
  setShowModalWeight,
  showModalWeight,
}) => {
  const openTargetMenu = () => {
    setShowModalTarget(true);
  };

  const openWeightMenu = () => {
    setShowModalWeight(true);
  };

  return (
    <ModalWrapper>
      <CloseBtn onClick={onCloseModal}>
        <svg width="16px" height="16px" stroke="#b6b6b6">
          <use href={`${sprite}#close-circle`} />
        </svg>
      </CloseBtn>

      <GlobalWrapper>
        <IconWrapper>
          <LoseMen>
            <LoseMenImage src={goalImg} alt="Lose fat" />
          </LoseMen>

          <div>
            <p>Goal</p>
            <p>{userInfo.goal}</p>
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
      {(showModalTarget && <TargetSelectionModal />) ||
        (showModalWeight && <CurrentWeightModal />)}
    </ModalWrapper>
  );
};
