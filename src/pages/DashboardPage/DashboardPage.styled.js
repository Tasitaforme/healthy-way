import styled from 'styled-components';

export const TextWeight = styled.span`
  margin: 0;
  font-size: 40px;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(20 / 14);
`;
export const TextLabel = styled.span`
  margin: 0;
  color: var(--grey-light);
  text-align: center;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
`;
export const ListStat = styled.ul`
  padding: 0;
  margin-top: 24px;
  margin-right: auto;
  margin-bottom: 36px;
  margin-left: 21px;
  display: flex;
  gap: 23px;
  object-fit: cover;
`;
export const ListItem = styled.li`
  width: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  flex-direction: column;
  align-items: center;
`;
export const Table = styled.div`
  background-color: var(--black-secondary);
  overflow: hidden;
  width: 100%;
  height: 110px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListChart = styled.ul`
  margin: auto;
  display: flex;
  gap: 20px;
  list-style: none;
  align-items: center;
`;

export const LiCart = styled.li`
  margin: auto;
  width: 676px;
`;
export const ChartBlock = styled.div`
  background-color: var(--black-secondary);
  padding-top: 25px;
  padding-right: 20px;
  padding-bottom: 24px;
  padding-left: 14px;
  overflow: hidden;
  width: 676px;
  height: 382px;
  border-radius: 12px;
  display: flex;
  align-items: center;
`;

export const DashboardBlock = styled.div`
  margin: auto;
  width: 1440px;
  height: 590px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 40px;
`;

export const AverageBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 8px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(20 / 14);
`;
export const TextAverageValue = styled.p`
  color: var(--grey-light);
  font-weight: 500;
`;
export const TableBlock = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  width: 1372px;
  display: flex;
  flex-wrap: wrap;
`;

export const SelectBlock = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  width: 1372px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectOption = styled.div`
  /* padding: 0; */
  display: flex;
  gap: 12px;
  align-items: center;
  /* .react-select__menu {
    max-height: 144px;
  } */
`;
