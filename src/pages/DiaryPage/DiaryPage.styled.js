import styled from 'styled-components';
import { ReactComponent as BreakfastIcon } from '../../assets/images/diary/breackfast.svg';
import { ReactComponent as GoBackIcon } from '../../assets/images/diary/goBack.svg';
import { ReactComponent as LunchIcon } from '../../assets/images/diary/lunch.svg';
import { ReactComponent as DinnerIcon } from '../../assets/images/diary/dinner.svg';
import { ReactComponent as SnackIcon } from '../../assets/images/diary/snack.svg';
import { ReactComponent as RecordIcon } from '../../assets/images/diary/recordMeal.svg';

export const DiarySection = styled.section`
  padding: 16px 10px 40px;
`;

export const GoBackWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 9px;
  margin-bottom: 16px;
`;

export const GoBackBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0;
`;

export const StyledGoBackIcon = styled(GoBackIcon)`
  width: 16px;
  height: 16px;
`;

export const StyledBreakfastIcon = styled(BreakfastIcon)``;

export const StyledLunchIcon = styled(LunchIcon)``;

export const StyledDinnerIcon = styled(DinnerIcon)``;

export const StyledSnackIcon = styled(SnackIcon)``;

export const MealWrapper = styled.div``;

export const MealTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NutririonList = styled.ul`
  display: flex;
  gap: 20px;
  width: 178px;
  height: auto;
  margin: 12px 0;
`;

export const NutririonListItem = styled.li``;

export const RecordMealWrapper = styled.div``;

export const List = styled.ul`
  background-color: var(--black-secondary);
  border-radius: 12px;
  padding: 16px 12px;
  margin-bottom: 24px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const RecordBtn = styled.button`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

export const RecordMealIcon = styled(RecordIcon)`
  margin-right: 6px;
`;

export const RecordBtnLabel = styled.label`
  color: var(--green-light);
  cursor: pointer;
`;
