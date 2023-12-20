import React from 'react';
import sprite from 'assets/sprite.svg';
import {
  UserinfoWrapper,
  UserContentWrapper,
  MenuIcon,
  ArrowIcon,
  UserName,
  LoseMen,
  LoseMenImage,
  IconWrapper,
  GlobalWrapper,
} from './UserInfoNav.styled';
import avatarImg from '../avatar.png';
import loseMenImg from '../../../assets/images/header/Lose-fat-image-men.png';
import weightImg from '../../../assets/images/header/Waight-image.png';
import UserInfoModal from '../../UserInfoModal/UserInfoModal';
import CurrentWeightModal from '../../СurrentWeightModal/СurrentWeightModal';
import TargetSelectionModal from '../../TargetSelectionModal/TargetSelectionModal';
export default function UserInfoNav({
  onClick,
  showModalProfile,
  onWeightClick,
  showModalWeight,
  onTargetClick,
  showModalTarget,
}) {
  return (
    <UserinfoWrapper>
      <GlobalWrapper>
        <IconWrapper>
          <LoseMen>
            <LoseMenImage src={loseMenImg} alt="" />
          </LoseMen>
          <div>
            <p>Goal</p>
            <p>Lose fat</p>
          </div>
          <div>
            <ArrowIcon onClick={onTargetClick}>
              <use href={`${sprite}#arrow-down`} />
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
              65
              <span> kg</span>
            </p>
          </div>
          <div>
            <ArrowIcon onClick={onWeightClick}>
              <use href={`${sprite}#edit`} />
            </ArrowIcon>
          </div>
        </IconWrapper>
      </GlobalWrapper>

      <MenuIcon>
        <use href={`${sprite}#menu`} />
      </MenuIcon>
      <UserContentWrapper>
        <UserName>Konstantin</UserName>
        <div>
          <img src={avatarImg} alt="" />
        </div>
        <ArrowIcon onClick={onClick}>
          <use href={`${sprite}#arrow-down`} />
        </ArrowIcon>
      </UserContentWrapper>
      {showModalProfile && <UserInfoModal />}
      {showModalWeight && <CurrentWeightModal onCloseModal={onWeightClick} />}
      {showModalTarget && <TargetSelectionModal onCloseModal={onTargetClick} />}
    </UserinfoWrapper>
  );
}
