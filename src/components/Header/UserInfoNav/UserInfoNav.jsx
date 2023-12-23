// import React from 'react';
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
  AvatarImg,
} from './UserInfoNav.styled';

import loseMenImg from '../../../assets/images/header/Lose-fat-image-men.png';
import weightImg from '../../../assets/images/header/Waight-image.png';
import UserInfoModal from '../../UserInfoModal/UserInfoModal';
import CurrentWeightModal from '../../СurrentWeightModal/СurrentWeightModal.jsx';
import TargetSelectionModal from '../../TargetSelectionModal/TargetSelectionModal';
import { DopMenuModal } from '../DopMenuModal/DopMenuModal.jsx';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../../redux/auth/selectors.js';

export default function UserInfoNav({
  onClick,
  showModalProfile,
  onWeightClick,
  showModalWeight,
  // onTargetClick,
  showModalTarget,
  onDopMenuClick,
  showDopMenuModal,
  openModalTarget,
  closeModalTarget,
}) {
  const userInfo = useSelector(selectUserInfo);

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
            <ArrowIcon onClick={openModalTarget}>
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
              {userInfo.weight}
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

      <MenuIcon onClick={onDopMenuClick}>
        <use href={`${sprite}#menu`} />
      </MenuIcon>
      <UserContentWrapper>
        <UserName>{userInfo.name}</UserName>
        <div>
          <AvatarImg src={userInfo.avatarURL} alt="avatar" />
        </div>
        <ArrowIcon onClick={onClick}>
          <use href={`${sprite}#arrow-down`} />
        </ArrowIcon>
      </UserContentWrapper>
      {showModalProfile && <UserInfoModal />}
      {showModalWeight && <CurrentWeightModal onCloseModal={onWeightClick} />}
      {showModalTarget && (
        <TargetSelectionModal
          onCloseModal={closeModalTarget}
          showModalTarget={showModalTarget}
        />
      )}
      {showDopMenuModal && (
        <DopMenuModal onCloseModal={onDopMenuClick} userInfo={userInfo} />
      )}
    </UserinfoWrapper>
  );
}
