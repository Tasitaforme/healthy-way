import React, { useEffect, useState } from 'react';
import sprite from 'assets/sprite.svg';

import {
  ModalWrapper,
  CloseBtn,
  Modal,
  ModalTitle,
  ModalText,
  TargetWrapper,
  ImgBorder,
  TargetImg,
  TargetText,
  ModalBtn,
  CancelBtn,
  ModalBackdrop,
} from './TargetSelectionModal.styled';
import { updateGoal } from '../../redux/auth/operations';
import { selectUserInfo } from '../../redux/auth/selectors';
import { currentUser } from '../../redux/auth/operations';

import loseFatMen from '../../assets/images/header/lose-fat-image-men.png';
import loseFatGirl from '../../assets/images/header/lose-fat-image-girl.png';
import muscleImg from '../../assets/images/header/gain-muscle.png';
import maintakeMen from '../../assets/images/header/maintake-image-men.png';
import maintakeGirl from '../../assets/images/header/maintake-image-girl.png';

import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

export default function TargetSelectionModal({
  onCloseModal,
  setShowModalTarget,
  showModalTarget,
}) {
  const userInfo = useSelector(selectUserInfo);

  const [newGoal, setNewGoal] = useState('');
  const dispatch = useDispatch();

  let loseFatImg = userInfo.gender === 'Female' ? loseFatGirl : loseFatMen;
  let maintainImg = userInfo.gender === 'Female' ? maintakeGirl : maintakeMen;

  useEffect(() => {
    const handlerEscape = (e) => {
      if (e.code === 'Escape') {
        setShowModalTarget(false);
      }
    };
    window.addEventListener('keydown', handlerEscape);

    return () => {
      window.removeEventListener('keydown', handlerEscape);
    };
  }, [setShowModalTarget]);

  const handleLoseWeight = () => setNewGoal('Lose fat');
  const handMaintain = () => setNewGoal('Maintain');
  const handleGainMuscle = () => setNewGoal('Gain muscle');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateGoal(newGoal));
    dispatch(currentUser);
    toast.success('Your goal has neen successfully updated!');
    setShowModalTarget(false);
  };

  return (
    <ModalBackdrop
      className={showModalTarget ? 'active' : ''}
      onClick={() => setShowModalTarget(false)}
    >
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <CloseBtn type="button" onClick={onCloseModal}>
          <svg width="16px" height="16px" stroke="#b6b6b6">
            <use href={`${sprite}#close-circle`} />
          </svg>
        </CloseBtn>

        <Modal>
          <ModalTitle>Target selection</ModalTitle>
          <ModalText>
            The service will adjust your calorie intake to your goal
          </ModalText>

          <form>
            <ul>
              <TargetWrapper
                tabIndex={0}
                onClick={handleLoseWeight}
                className={userInfo.goal === 'Lose fat' ? 'current-goal' : ' '}
              >
                <ImgBorder>
                  <TargetImg src={loseFatImg} alt="Lose fat" />
                </ImgBorder>
                <TargetText>Lose fat</TargetText>
              </TargetWrapper>

              <TargetWrapper
                tabIndex={0}
                onClick={handMaintain}
                className={userInfo.goal === 'Maintain' ? 'current-goal' : ' '}
              >
                <ImgBorder>
                  <TargetImg src={maintainImg} alt="Maintain" />
                </ImgBorder>
                <TargetText>Maintain</TargetText>
              </TargetWrapper>

              <TargetWrapper
                tabIndex={0}
                onClick={handleGainMuscle}
                className={
                  userInfo.goal === 'Gain muscle' ? 'current-goal' : ' '
                }
              >
                <ImgBorder>
                  <TargetImg src={muscleImg} alt="Gain muscle" />
                </ImgBorder>
                <TargetText>Gain muscle</TargetText>
              </TargetWrapper>
            </ul>

            <ModalBtn type="submit" onClick={handleSubmit}>
              Confirm
            </ModalBtn>
          </form>

          <CancelBtn type="button" onClick={() => setShowModalTarget(false)}>
            Cancel
          </CancelBtn>
        </Modal>
      </ModalWrapper>
    </ModalBackdrop>
  );
}
