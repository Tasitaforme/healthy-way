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
  @media screen and (min-width: 320px) {
    font-size: 14px;
  }

  @media screen and (min-width: 834px) {
    font-size: 10px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
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
  @media screen and (min-width: 320px) {
    gap: 23px;
  }
  @media screen and (min-width: 834px) {
    gap: 6px;
  }
  @media screen and (min-width: 1440px) {
    gap: 23px;
  }
`;
export const ListItem = styled.li`
  width: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 320px) {
    width: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 20px;
  }
`;
export const Table = styled.div`
  background-color: var(--black-secondary);
  width: 100%;
  height: 100px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 320px) {
    width: 1372px;
  }
  @media screen and (min-width: 834px) {
    width: 780px;
  }
  @media screen and (min-width: 1440px) {
    height: 110px;
    width: 1372px;
  }
`;

export const Scroll = styled.div`
  @media screen and (max-width: 833px) {
    padding-bottom: 8px;
    max-width: 310px;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: 94px;
    scrollbar-color: #ffffff1a #0f0f0f;
    &::-webkit-scrollbar {
      height: 8px;
      width: 300px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ffffff1a;
      border-radius: 12px;
    }
    &::-webkit-scrollbar-track {
      background-color: #0f0f0f;
      border-radius: 12px;
    }
  }
`;

export const ListChart = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 27px;
  list-style: none;
  align-items: center;

  @media screen and (min-width: 320px) {
    width: 310px;
    gap: 27px;
  }

  @media screen and (min-width: 834px) {
    margin: auto;
    width: 834px;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: nowrap;
    width: 1440px;
    gap: 20px;
  }
`;

export const LiCart = styled.li`
  width: 100%;
  @media screen and (min-width: 834px) {
    width: 834px;
  }
  @media screen and (min-width: 1440px) {
    width: 676px;
  }
`;
export const ChartBlock = styled.div`
  background-color: var(--black-secondary);
  padding-top: 25px;
  padding-right: 20px;
  padding-bottom: 24px;
  padding-left: 14px;
  height: 382px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 320px) {
    width: 676px;
  }
  @media screen and (min-width: 834px) {
    width: 780px;
  }
  @media screen and (min-width: 1440px) {
    width: 676px;
  }
`;

export const DashboardBlock = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 834px) {
    width: 834px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: nowrap;
    width: 1440px;
  }
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
  width: 100%;
  margin-top: 27px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 60px;
  @media screen and (min-width: 320px) {
    margin-top: 27px;
    width: 310px;
  }

  @media screen and (min-width: 834px) {
    margin-top: 40px;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
    width: 100%;
  }
`;

export const SelectBlock = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectOption = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
