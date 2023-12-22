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
  ModalWrapper,
  ModalTitle,
} from './DiaryPage.styled';
import dinnerImage from '../../assets/images/diary/dinner@2x.png';
import breakfastImage from '../../assets/images/diary/breakfast@2x.png';
import lunchImage from '../../assets/images/diary/lunch@2x.png';
import snackImage from '../../assets/images/diary/snack@2x.png';
import sprite from '../../assets/sprite.svg';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodDiaryToday } from '../../redux/diary/operations';
import { selectDiaryInfo } from '../../redux/diary/selectors';
import DiaryItem from './DiaryItem';
import ModalMain from '../../components/ModalMain/ModalMain';

const images = {
  Breakfast: breakfastImage,
  Lunch: lunchImage,
  Dinner: dinnerImage,
  Snack: snackImage,
};

export default function DiaryPage() {
  const dispatch = useDispatch();
  const {
    food,
    //isLoading, errors
  } = useSelector(selectDiaryInfo);

  const inited = useRef(false);

  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (!inited.current) {
      dispatch(getFoodDiaryToday());
      inited.current = true;
    }
  }, [dispatch]);

  const meals = useMemo(() => {
    const { breakfast, snack, lunch, dinner } = food;
    return [
      { key: 'Breakfast', data: breakfast },
      { key: 'Lunch', data: lunch },
      { key: 'Dinner', data: dinner },
      { key: 'Snack', data: snack },
    ].map(({ key, data }) => ({
      key,
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

  const onAddItem = () => setModalActive(true);

  return (
    <>
      <DiarySection>
        <GoBackWrapper>
          <GoBackBtn>
            <StyledBackArrowIcon>
              <use href={`${sprite}#arrow-back`} />
            </StyledBackArrowIcon>
            <GoBackTitle>Diary</GoBackTitle>
          </GoBackBtn>
        </GoBackWrapper>
        <MealList>
          {meals.map(({ key, data, stats }) => {
            return (
              <MealListItem key={key}>
                <MealAndNutritionWrapper>
                  <MealTitleWrapper>
                    <MealImg src={images[key]} alt="breakfast" />
                    <MealTitle>{key}</MealTitle>
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
                  <DiaryItem data={data} onAddItem={onAddItem} />
                </RecordMealWrapper>
              </MealListItem>
            );
          })}
        </MealList>
      </DiarySection>
      {modalActive && (
        <ModalMain modalActive={modalActive} setModalActive={setModalActive}>
          <ModalWrapper>
            <ModalTitle>Record your meal</ModalTitle>
          </ModalWrapper>
        </ModalMain>
      )}
    </>
  );
}
