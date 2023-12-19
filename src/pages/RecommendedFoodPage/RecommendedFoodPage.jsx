import { RecommendedFoodList } from '../../components/RecommendedFoodList/RecommendedFoodList';
import IllustrationRecommended from '../../assets/images/recommended/IllustrationRecommended.jpg';
import { Wrapper, WrapperContent, Img } from './RecommendedFoodPage.styled';

const RecommendedFoodPage = () => {
  return (
    <Wrapper>
      <h1>Recommended food</h1>
      <WrapperContent>
        <Img src={IllustrationRecommended} alt="IllustrationRecommended"></Img>
        <RecommendedFoodList />
      </WrapperContent>
    </Wrapper>
  );
};

export default RecommendedFoodPage;

// import React from 'react';

// export default function RecommendedFoodPage() {
//   return <div>RecommendedFoodPage</div>;
// }
