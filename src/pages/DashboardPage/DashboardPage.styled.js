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

  color: #b6b6b6;
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
  color: #fff;

  width: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  flex-direction: column;
  align-items: center;
`;
export const Table = styled.div`
  background-color: #0f0f0f;

  overflow: hidden;
  width: 100%;
  height: 110px;

  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListChart = styled.ul`
  background-color: #000;
  margin: auto;
  display: flex;
  gap: 20px;
  list-style: none;
  align-items: center;
`;

export const LiCart = styled.li`
  color: #fff;
  margin: auto;
  width: 676px;
`;
export const ChartBlock = styled.div`
  background-color: #0f0f0f;
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
  background-color: #000;
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
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(20 / 14);
`;
export const TextAverageValue = styled.p`
  color: #b6b6b6;
  font-weight: 500;
`;
export const TableBlock = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  width: 1372px;
  color: #fff;
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
export const SelectForm = styled.select`
  background-color: #000;
  color: white;
  border: none;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
`;

export const SelectOption = styled.div`
  display: flex;
  .react-select__menu {
    max-height: 144px;
  }
`;
/* background-color: #0f0f0f; */
/* overflow: hidden; */
/* &:hover,
  :focus {
    background-color: #0f0f0f;
    color: #e3ffa8;
  } */
