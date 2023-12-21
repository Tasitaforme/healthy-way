import React from 'react';
import {
  BodyTextFirst,
  BodyTextSecond,
  ButtonTextSecond,
  HeadlineSecond,
  HeadlineThird,
  IconWrap,
  StyledLink,
} from '../StyledComponents/Components.styled';
import sprite from 'assets/sprite.svg';
import { useSelector } from 'react-redux';
import { selectRecommendedFoodInfo } from '../../redux/recommendedFood/selectors';
import { getRandomItems } from '../../helpers';
import {
  FoodInfo,
  FoodItem,
  FoodList,
  FoodName,
} from './RecommendedFood.styled';

export default function RecommendedFood() {
  const food = useSelector(selectRecommendedFoodInfo);
  const randomFood = getRandomItems(food, 4);
  console.log(getRandomItems(food, 4));

  return (
    <>
      <HeadlineSecond>Recommended food</HeadlineSecond>
      <FoodList>
        {randomFood.map((item) => (
          <FoodItem key={item._id}>
            <img src={item.img} alt={item.name} width="46px" />
            <div>
              <FoodName>{item.name}</FoodName>
              <FoodInfo>
                <BodyTextFirst>{item.amount}</BodyTextFirst>
                <BodyTextSecond>{item.calories} calories</BodyTextSecond>
              </FoodInfo>
            </div>
          </FoodItem>
        ))}
      </FoodList>
      <StyledLink to="/recommended-food">
        <ButtonTextSecond>See more</ButtonTextSecond>
        <IconWrap width="16px" height="16px">
          <use href={`${sprite}#arrow-right`} />
        </IconWrap>
      </StyledLink>
    </>
  );
}
