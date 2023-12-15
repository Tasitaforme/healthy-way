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
} from '../StyledComponents/Components';
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

export default function Water({ modalActive, setModalActive }) {
  // const [modalWaterActive, setModalWaterActive] = useState(false);

  //TODO потрібні дані
  const waterDayGoal = 1500;
  const waterReal = 1250;

  const waterLeft = waterDayGoal - waterReal;
  const waterPercent = Math.round((waterReal * 100) / waterDayGoal);

  // TODO дія по submit в формі в модалці
  //  const dispatch = useDispatch();
  const handleUpdate = (waterQuantity) => {
    //  dispatch(updateContact({ id: contact.id, body }));
    setModalActive(false);
    console.log(waterQuantity);
    console.log('оновлюємо дані про воду');
  };
  // TODO дія по кліну на смітничок
  // TODO Видалити інформацію про спожиту воду користувачем за поточну дату
  // TODO /api/user/water-intake
  const handleDelete = (quantity) => {
    console.log('видаляємо дані про воду');
    // dispatch(deleteContact(contactId));
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
        // <Modal active={modalActive} setActive={setModalActive}>
        <AddWaterModal
          // update={handleUpdate}
          // contact={contact}
          // setContact={setContact}
          modalActive={modalActive}
          setModalActive={setModalActive}
          handleUpdate={handleUpdate}
        />
        // </Modal>
      )}
    </>
  );
}
