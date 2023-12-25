import {
  ButtonTextSecond,
  HeadlineSecond,
  StyledLink,
} from '../StyledComponents/Components.styled';
import { DiaryList, DiaryWrap, TitleWrap } from './Diary.styled';
import DiaryItem from './DiaryItem/DiaryItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiaryInfo } from '../../redux/diary/selectors';
import { getTotalNutrientsForMeals } from '../../helpers';

export default function Diary() {
  const dispatch = useDispatch();
  const { meals } = useSelector(selectDiaryInfo);

  const totalNutrientsForMeals = getTotalNutrientsForMeals(meals);

  return (
    <DiaryWrap>
      <TitleWrap>
        <HeadlineSecond>Diary</HeadlineSecond>
        <StyledLink to="/diary">
          <ButtonTextSecond>See more</ButtonTextSecond>
        </StyledLink>
      </TitleWrap>

      <DiaryList>
        {totalNutrientsForMeals.map((item, index) => (
          <DiaryItem key={index} data={item} meals={meals} />
        ))}
      </DiaryList>
    </DiaryWrap>
  );
}
