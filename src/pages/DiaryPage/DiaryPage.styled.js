import styled from 'styled-components';

export const DiarySection = styled.section`
  padding: 16px 10px 40px;

  @media (min-width: 768px) {
    padding: 24px 27px 40px;
  }
`;

export const GoBackWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
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

export const GoBackTitle = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const MealList = styled.ul`
  @media (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const MealListItem = styled.li`
  @media (min-width: 1200px) {
    width: calc((100% - 1 * 20px) / 2);
    margin-bottom: 0;
  }
`;

export const MealImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const MealTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MealAndNutritionWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const MealTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const NutririonList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 12px 0;
  @media (min-width: 768px) {
    margin-right: 74px;
  }
  @media (min-width: 1200px) {
    margin-right: 40px;
  }
`;

export const NutririonListItem = styled.li``;

export const RecordMealWrapper = styled.div``;

export const List = styled.ul`
  background-color: var(--black-secondary);
  border-radius: 12px;
  padding: 16px 12px;
  margin-bottom: 24px;

  @media (min-width: 1200px) {
    margin-bottom: 0%;
  }
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

export const RecordBtnLabel = styled.span`
  color: var(--green-light);
  cursor: pointer;
`;

export const StyledBackArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--grey-light);

  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;

export const StyledAddMealIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--green-light);
`;

export const ModalWrapper = styled.div`
  width: 300px;
  height: 546px;
  background-color: var(--black-secondar);
  padding: 16px 12px;
`;

export const ModalTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
`;
