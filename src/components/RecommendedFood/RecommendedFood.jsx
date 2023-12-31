import React, { useEffect, useState } from 'react';
import {
  BodyTextFirst,
  BodyTextSecond,
  ButtonTextSecond,
  HeadlineSecond,
  IconWrap,
  StyledLink,
} from '../StyledComponents/Components.styled';
import sprite from 'assets/sprite.svg';
import { getRandomItems } from '../../helpers';
import {
  FoodInfo,
  FoodItem,
  FoodList,
  FoodName,
  RecFoodWrap,
} from './RecommendedFood.styled';
import { getRecommendedFood } from '../../requests/getRecommendedFood';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/selectors';

export default function RecommendedFood() {
  const isLogin = useSelector(selectIsLogin);
  const [recFood, setRecFood] = useState([]);
  const randomFood = getRandomItems(recFood, 4);

  useEffect(() => {
    if (isLogin) {
      getRecommendedFood()
        .then((data) => {
          setRecFood(data);
        })
        .catch((error) => console.log(error));
    }
  }, [isLogin]);

  return (
    <RecFoodWrap>
      <HeadlineSecond>Recommended food</HeadlineSecond>
      {recFood.length === 0 ? (
        <Loader />
      ) : (
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
      )}

      <StyledLink to="/recommended-food">
        <ButtonTextSecond>See more</ButtonTextSecond>
        <IconWrap width="16px" height="16px">
          <use href={`${sprite}#arrow-right`} />
        </IconWrap>
      </StyledLink>
    </RecFoodWrap>
  );
}
