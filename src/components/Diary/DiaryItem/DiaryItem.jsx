import React, { useEffect, useRef, useState } from 'react';
import breakfast from 'assets/images/diary/breakfast.png';
import breakfast2x from 'assets/images/diary/breakfast@2x.png';
import lunch from 'assets/images/diary/lunch.png';
import lunch2x from 'assets/images/diary/lunch@2x.png';
import dinner from 'assets/images/diary/dinner.png';
import dinner2x from 'assets/images/diary/dinner@2x.png';
import snack from 'assets/images/diary/snack.png';
import snack2x from 'assets/images/diary/snack@2x.png';

import {
  BtnText,
  ItemWrap,
  ItemWrapInfo,
  ItemWrapTitle,
  RecordBtn,
  Title,
} from './DiaryItem.styled';

import {
  BodyTextFirst,
  BodyTextSecond,
  BodyTextWrap,
  ButtonIcon,
  IconWrap,
} from '../../StyledComponents/Components.styled';

import sprite from 'assets/sprite.svg';
import DiaryMainModal from '../DiaryMainModal/DiaryMainModal';

export default function DiaryItem({ data, meals }) {
  const [modalData, setModalData] = useState(false);

  return (
    <>
      <ItemWrap>
        <ItemWrapTitle>
          {data.mealType === 'breakfast' && (
            <img
              srcSet={`${breakfast} 1x, ${breakfast2x} 2x`}
              src={breakfast}
              alt="Breakfast"
            />
          )}
          {data.mealType === 'lunch' && (
            <img
              srcSet={`${lunch} 1x, ${lunch2x} 2x`}
              src={lunch}
              alt="Lunch"
            />
          )}
          {data.mealType === 'dinner' && (
            <img
              srcSet={`${dinner} 1x, ${dinner2x} 2x`}
              src={dinner}
              alt="Dinner"
            />
          )}
          {data.mealType === 'snack' && (
            <img
              srcSet={`${snack} 1x, ${snack2x} 2x`}
              src={snack}
              alt="Snack"
            />
          )}

          <Title>{data.mealType}</Title>
        </ItemWrapTitle>
        {meals[`${data.mealType}`].length === 0 ? (
          <RecordBtn
            onClick={() => setModalData({ type: data.mealType, meals })}
          >
            <IconWrap width="16px" height="16px">
              <use href={`${sprite}#add`} />
            </IconWrap>
            <BtnText>Record your meal</BtnText>
          </RecordBtn>
        ) : (
          <ItemWrapInfo>
            <BodyTextWrap>
              <BodyTextFirst>Carbonohidrates:</BodyTextFirst>
              <BodyTextSecond>{Math.round(data.carbohydrate)}</BodyTextSecond>
            </BodyTextWrap>
            <BodyTextWrap>
              <BodyTextFirst>Protein:</BodyTextFirst>
              <BodyTextSecond>{Math.round(data.protein)}</BodyTextSecond>
            </BodyTextWrap>
            <BodyTextWrap>
              <BodyTextFirst>Fat:</BodyTextFirst>
              <BodyTextSecond>{Math.round(data.fat)}</BodyTextSecond>
            </BodyTextWrap>
            <ButtonIcon
              type="button"
              onClick={() => setModalData({ type: data.mealType, meals })}
            >
              <IconWrap width="20px" height="20px" stroke="var(--green-light)">
                <use href={`${sprite}#trash`} />
              </IconWrap>
            </ButtonIcon>
          </ItemWrapInfo>
        )}
      </ItemWrap>
      <DiaryMainModal modalData={modalData} setModalData={setModalData} />
    </>
  );
}
