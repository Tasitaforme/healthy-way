import React, { useState } from 'react';
import {
  BodyTextFirst,
  BodyTextSecond,
  BodyTextWrap,
  Button,
  ButtonIcon,
  ButtonTextFirst,
  HeadlineSecond,
  IconWrap,
  SubtitleSecond,
} from '../StyledComponents/Components.styled';
import sprite from 'assets/sprite.svg';
import {
  Headline,
  LeftSide,
  Percent,
  PercentBox,
  RightSide,
  TextWrap,
  WrapMain,
} from './Water.styled';
import AddWaterModal from '../AddWaterModal/AddWaterModal';
import ModalMain from '../ModalMain/ModalMain';
import { useDispatch, useSelector } from 'react-redux';
import { removeDailyWater } from '../../redux/water/operations';
import { selectWaterInfo } from '../../redux/water/selectors';

export default function Water({ modalActive, setModalActive }) {
  //TODO потрібні дані
  const { water: waterReal } = useSelector(selectWaterInfo);

  console.log(waterReal);
  const waterDayGoal = 1500;
  // const waterReal = 1250;

  const waterLeft = waterDayGoal - waterReal;
  const waterPercent = Math.round((waterReal * 100) / waterDayGoal);

  // TODO дія по submit в формі в модалці
  const dispatch = useDispatch();
  const handleUpdate = (waterQuantity) => {
    dispatch(addDailyWater(waterQuantity));
    setModalActive(false);
    console.log(waterQuantity);
    console.log('оновлюємо дані про воду');
  };
  // TODO дія по кліну на смітничок
  // TODO Видалити інформацію про спожиту воду користувачем за поточну дату
  // TODO /api/user/water-intake
  const handleDelete = () => {
    dispatch(removeDailyWater());
  };

  return (
    <>
      <HeadlineSecond>Water</HeadlineSecond>
      <WrapMain>
        <LeftSide>
          <PercentBox height={`${waterPercent}%`}>
            <Percent
              $color={
                waterPercent < 84 ? 'var(--violet)' : 'var(--black-primary)'
              }
              $top={waterPercent < 84 ? '-28px' : '28px'}
            >
              {waterPercent}%
            </Percent>
          </PercentBox>
        </LeftSide>
        <RightSide>
          <ButtonIcon type="button" onClick={() => handleDelete()}>
            <IconWrap width="20px" height="20px" stroke="var(--green-light)">
              <use href={`${sprite}#trash`} />
            </IconWrap>
          </ButtonIcon>

          <Headline>Water consumption</Headline>
          <TextWrap>
            <BodyTextWrap>
              <SubtitleSecond>{waterReal}</SubtitleSecond>
              <BodyTextFirst color="var(--grey-light)">ml</BodyTextFirst>
            </BodyTextWrap>
            <BodyTextWrap>
              <BodyTextFirst>left:</BodyTextFirst>
              <BodyTextSecond>{waterLeft}</BodyTextSecond>
              <BodyTextFirst color="var(--grey-light)">ml</BodyTextFirst>
            </BodyTextWrap>
          </TextWrap>

          <Button type="button" onClick={() => setModalActive(true)}>
            <IconWrap width="16px" height="16px">
              <use href={`${sprite}#add`} />
            </IconWrap>
            <ButtonTextFirst>Add water intake</ButtonTextFirst>
          </Button>
        </RightSide>
      </WrapMain>
      {modalActive && (
        // <AddWaterModal
        //   modalActive={modalActive}
        //   setModalActive={setModalActive}
        //   handleUpdate={handleUpdate}
        // />
        <ModalMain modalActive={modalActive} setModalActive={setModalActive}>
          <AddWaterModal handleUpdate={handleUpdate}></AddWaterModal>
        </ModalMain>
      )}
    </>
  );
}
