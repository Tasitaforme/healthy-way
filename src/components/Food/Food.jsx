import { HeadlineSecond } from '../StyledComponents/Components.styled';
import { useSelector } from 'react-redux';
import { selectDiaryInfo } from '../../redux/diary/selectors';
import { getTotalNutrients } from '../../helpers';
import { selectUserInfo } from '../../redux/auth/selectors';
import { FoodWrap, NutrientsList, WrapMain } from './Food.styled';
import BigDoughnutChart from './Doughnuts/DoughnutCalories';
import DoughnutNutrients from './Doughnuts/DoughnutNutrients';
import Loader from '../Loader/Loader';

export default function Food() {
  const {
    fat: baseFat,
    protein: baseProtein,
    carbohydrate: baseCarbohydrate,
    BMR: baseCalories,
  } = useSelector(selectUserInfo);

  const { meals, isLoading } = useSelector(selectDiaryInfo);
  const { fat, protein, carbohydrate, calories } = getTotalNutrients(meals);

  const nutrientsTitles = ['Carbonohidrates', 'Protein', 'Fat'];

  return (
    <FoodWrap>
      <HeadlineSecond>Food</HeadlineSecond>
      {isLoading ? (
        <Loader />
      ) : (
        <WrapMain>
          <BigDoughnutChart
            calories={Math.round(calories)}
            baseCalories={baseCalories}
          />

          <NutrientsList>
            <DoughnutNutrients
              title={nutrientsTitles[0]}
              arcColor={'#FFC4F7'}
              nutrient={carbohydrate}
              baseNutrient={baseCarbohydrate}
            />
            <DoughnutNutrients
              title={nutrientsTitles[1]}
              arcColor={'#FFF3B7'}
              nutrient={protein}
              baseNutrient={baseProtein}
            />
            <DoughnutNutrients
              title={nutrientsTitles[2]}
              arcColor={'#B6B6B6'}
              nutrient={fat}
              baseNutrient={baseFat}
            />
          </NutrientsList>
        </WrapMain>
      )}
    </FoodWrap>
  );
}
