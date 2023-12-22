import React from 'react';
import breakfast from 'assets/images/diary/breakfast.png';
import breakfast2x from 'assets/images/diary/breakfast@2x.png';
import lunch from 'assets/images/diary/lunch.png';
import lunch2x from 'assets/images/diary/lunch@2x.png';
import dinner from 'assets/images/diary/dinner.png';
import dinner2x from 'assets/images/diary/dinner@2x.png';
import snack from 'assets/images/diary/snack.png';
import snack2x from 'assets/images/diary/snack@2x.png';

import {
  ItemWrap,
  ItemWrapInfo,
  ItemWrapTitle,
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

export default function DiaryItem({ data, meals }) {
  // console.log(data.mealType);
  // const value = data.mealType;
  // console.log(meals[`${data.mealType}`]);
  // console.log(meals.(data.mealType));

  return (
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
          <img srcSet={`${lunch} 1x, ${lunch2x} 2x`} src={lunch} alt="Lunch" />
        )}
        {data.mealType === 'dinner' && (
          <img
            srcSet={`${dinner} 1x, ${dinner2x} 2x`}
            src={dinner}
            alt="Dinner"
          />
        )}
        {data.mealType === 'snack' && (
          <img srcSet={`${snack} 1x, ${snack2x} 2x`} src={snack} alt="Snack" />
        )}

        <Title>{data.mealType}</Title>
      </ItemWrapTitle>
      {meals[`${data.mealType}`] == [] ? (
        <div>
          <p>Record your meal</p>
        </div>
      ) : (
        <ItemWrapInfo>
          <BodyTextWrap>
            <BodyTextFirst>Carbonohidrates:</BodyTextFirst>
            <BodyTextSecond>{data.carbohydrate}</BodyTextSecond>
          </BodyTextWrap>
          <BodyTextWrap>
            <BodyTextFirst>Protein:</BodyTextFirst>
            <BodyTextSecond>{data.protein}</BodyTextSecond>
          </BodyTextWrap>
          <BodyTextWrap>
            <BodyTextFirst>Fat:</BodyTextFirst>
            <BodyTextSecond>{data.fat}</BodyTextSecond>
          </BodyTextWrap>
          <ButtonIcon type="button" onClick={() => console.log('ТУУУ')}>
            <IconWrap width="20px" height="20px" stroke="var(--green-light)">
              <use href={`${sprite}#trash`} />
            </IconWrap>
          </ButtonIcon>
        </ItemWrapInfo>
      )}
    </ItemWrap>
  );
}
