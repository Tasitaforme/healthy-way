import styled from 'styled-components';

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

export const StyledGoBackIcon = styled.svg`
  width: 16px;
  height: 16px;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const GoBackTitle = styled.h2`
  color: #fff;
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const MealWrapper = styled.div``;

export const MealTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MealAndNutritionWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 196px;
  }
`;

export const MealTitle = styled.h3`
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 22px;
  }
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

export const RecordMealIcon = styled.svg`
  margin-right: 6px;
`;

export const RecordBtnLabel = styled.label`
  color: var(--green-light);
  cursor: pointer;
`;

export const StyledBackArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--grey-light);
`;

export const StyledAddMealIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--green-light);
`;
