import {
  DiarySection,
  GoBackBtn,
  GoBackWrapper,
  NutririonList,
  RecordMealWrapper,
  MealTitleWrapper,
  GoBackTitle,
  MealTitle,
  MealAndNutritionWrapper,
  StyledBackArrowIcon,
  MealImg,
  MealList,
  MealListItem,
} from './DiaryPage.styled';
import sprite from '../../assets/sprite.svg';
import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodDiaryToday } from '../../redux/diary/operations';
import { selectDiaryMeals } from '../../redux/diary/selectors';
import DiaryItem from './DiaryItem';
import { Link } from 'react-router-dom';
import { MEALS_IMAGES } from './constants';

export default function DiaryPage() {
  const dispatch = useDispatch();
  const food = useSelector(selectDiaryMeals);
  const backLink = location?.state?.from ?? '/main';

  const inited = useRef(false);

  useEffect(() => {
    if (!inited.current) {
      dispatch(getFoodDiaryToday());
      inited.current = true;
    }
  }, [dispatch]);

  const meals = useMemo(() => {
    const { breakfast, snack, lunch, dinner } = food;
    return [
      { type: 'Breakfast', data: breakfast },
      { type: 'Lunch', data: lunch },
      { type: 'Dinner', data: dinner },
      { type: 'Snack', data: snack },
    ].map(({ type, data }) => ({
      type,
      data: data.concat(Array(4).fill({})).slice(0, 4),
      stats: {
        carbonohidrates: data.reduce(
          (acc, { carbonohidrates }) => acc + carbonohidrates,
          0
        ),
        protein: data.reduce((acc, { protein }) => acc + protein, 0),
        fat: data.reduce((acc, { fat }) => acc + fat, 0),
      },
    }));
  }, [food]);

  return (
    <>
      <DiarySection>
        <GoBackWrapper>
          <GoBackBtn as={Link} to={backLink}>
            <StyledBackArrowIcon>
              <use href={`${sprite}#arrow-back`} />
            </StyledBackArrowIcon>
            <GoBackTitle>Diary</GoBackTitle>
          </GoBackBtn>
        </GoBackWrapper>
        <MealList>
          {meals.map(({ type, data, stats }) => {
            return (
              <MealListItem key={type}>
                <MealAndNutritionWrapper>
                  <MealTitleWrapper>
                    <MealImg src={MEALS_IMAGES[type]} alt="breakfast" />
                    <MealTitle>{type}</MealTitle>
                  </MealTitleWrapper>
                  <NutririonList>
                    <li>
                      Carbonohidrates: <span>{stats.carbonohidrates}</span>
                    </li>
                    <li>
                      Protein: <span>{stats.protein}</span>
                    </li>
                    <li>
                      Fat: <span>{stats.fat}</span>
                    </li>
                  </NutririonList>
                </MealAndNutritionWrapper>
                <RecordMealWrapper>
                  <DiaryItem data={data} type={type} stats={stats} />
                </RecordMealWrapper>
              </MealListItem>
            );
          })}
        </MealList>
      </DiarySection>
    </>
  );
}
