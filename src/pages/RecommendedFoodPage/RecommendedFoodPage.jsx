import { Container } from 'components/StyledComponents/Container';
import {
  BackgroundImage,
  RecFoodList,
  RecFoodSection,
  Title,
  Wrapper,
} from './RecommendedFoodPage.styled';
import { getRandomItems } from '../../helpers';
import { getRecommendedFood } from '../../requests/getRecommendedFood';
import { useEffect, useState } from 'react';
import {
  FoodInfo,
  FoodItem,
  FoodName,
} from '../../components/RecommendedFood/RecommendedFood.styled';
import {
  BodyTextFirst,
  BodyTextSecond,
} from '../../components/StyledComponents/Components.styled';
import Loader from '../../components/Loader/Loader';

export default function RecommendedFoodPage() {
  const [recFood, setRecFood] = useState([]);
  const randomFood = getRandomItems(recFood, 10);

  useEffect(() => {
    getRecommendedFood()
      .then((data) => {
        setRecFood(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <RecFoodSection>
        <Container>
          <Title>Recommended food</Title>
          <Wrapper>
            <BackgroundImage
              alt="Illustration of women with food"
              width="536px"
            />
            {recFood.length === 0 ? (
              <Loader />
            ) : (
              <RecFoodList>
                {randomFood.map((item) => (
                  <FoodItem key={item._id}>
                    <img src={item.img} alt={item.name} width="46px" />
                    <div>
                      <FoodName>{item.name}</FoodName>
                      <FoodInfo>
                        <BodyTextFirst>{item.amount}</BodyTextFirst>
                        <BodyTextSecond>
                          {item.calories} calories
                        </BodyTextSecond>
                      </FoodInfo>
                    </div>
                  </FoodItem>
                ))}
              </RecFoodList>
            )}
          </Wrapper>
        </Container>
      </RecFoodSection>
    </main>
  );
}
