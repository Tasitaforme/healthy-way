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
  AvatarImg,
} from './UserInfoNav.styled';

import loseMenImg from '../../../assets/images/header/lose-fat-image-men.png';
import maintakeMenImg from '../../../assets/images/header/maintake-image-men.png';

import loseGirlImg from '../../../assets/images/header/lose-fat-image-girl.png';
import maintakeGirlImg from '../../../assets/images/header/maintake-image-girl.png';

import gainMuscleImg from '../../../assets/images/header/gain-muscle.png';
import weightImg from '../../../assets/images/header/weight-image.png';

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
  onTargetClick,
  showModalTarget,
  onDopMenuClick,
  showDopMenuModal,
}) {
  const userInfo = useSelector(selectUserInfo);

  let goalImg;

  switch (userInfo.gender) {
    case 'Female':
      switch (userInfo.goal) {
        case 'Lose fat':
          goalImg = loseGirlImg;
          break;

        case 'Maintain':
          goalImg = maintakeGirlImg;
          break;

        default:
          goalImg = gainMuscleImg;
      }
      break;

    case 'Male':
      switch (userInfo.goal) {
        case 'Lose fat':
          goalImg = loseMenImg;
          break;

        case 'Maintain':
          goalImg = maintakeMenImg;
          break;

        default:
          goalImg = gainMuscleImg;
      }
      break;
  }

  return (
    <UserinfoWrapper>
      <GlobalWrapper>
        <IconWrapper>
          <LoseMen>
            <LoseMenImage src={goalImg} alt="" />
          </LoseMen>
          <div>
            <p>Goal</p>
            <p>{userInfo.goal}</p>
          </div>
          <div>
            {showModalTarget ? (
              <ArrowIcon onClick={onTargetClick}>
                <use href={`${sprite}#arrow-up`} />
              </ArrowIcon>
            ) : (
              <ArrowIcon onClick={onTargetClick}>
                <use href={`${sprite}#arrow-down`} />
              </ArrowIcon>
            )}
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
      {showDopMenuModal ? (
        <MenuIcon onClick={onDopMenuClick} stroke="#b6b6b6">
          <use href={`${sprite}#menu`} />
        </MenuIcon>
      ) : (
        <MenuIcon onClick={onDopMenuClick} stroke="#E3FFA8">
          <use href={`${sprite}#menu`} />
        </MenuIcon>
      )}

      <UserContentWrapper>
        <UserName>{userInfo.name}</UserName>
        <div>
          <AvatarImg src={userInfo.avatarURL} alt="avatar" />
        </div>

        {showModalProfile ? (
          <ArrowIcon onClick={onClick}>
            <use href={`${sprite}#arrow-up`} />
          </ArrowIcon>
        ) : (
          <ArrowIcon onClick={onClick}>
            <use href={`${sprite}#arrow-down`} />
          </ArrowIcon>
        )}
      </UserContentWrapper>
      {showModalProfile && <UserInfoModal onCloseModal={onClick} />}
      {showModalWeight && <CurrentWeightModal onCloseModal={onWeightClick} />}
      {showModalTarget && <TargetSelectionModal onCloseModal={onTargetClick} />}
      {showDopMenuModal && (
        <DopMenuModal
          onCloseModal={onDopMenuClick}
          userInfo={userInfo}
          goalImg={goalImg}
        />
      )}
    </UserinfoWrapper>
  );
}
