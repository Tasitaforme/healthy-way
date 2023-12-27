import styled from 'styled-components';

import foodDesk1x from '../../assets/images/food/food-desk@1x.png';
import foodDesk2x from '../../assets/images/food/food-desk@2x.png';
import foodTab1x from '../../assets/images/food/food-tab@1x.png';
import foodTab2x from '../../assets/images/food/food-tab@2x.png';
import foodMob1x from '../../assets/images/food/food-mob@1x.png';
import foodMob2x from '../../assets/images/food/food-mob@2x.png';
import { HeadlineFirst } from '../../components/StyledComponents/Components.styled';

export const RecFoodSection = styled.section`
  padding-top: 16px;
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    padding-top: 24px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    padding-bottom: 60px;
  }
`;

export const Title = styled(HeadlineFirst)`
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    column-gap: 44px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const BackgroundImage = styled.div`
  width: 300px;
  height: 312px;
  flex-shrink: 0;

  background-image: url(${foodMob1x});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${foodMob2x});
  }

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 396px;
    background-image: url(${foodTab1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${foodTab2x});
    }
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
    height: 560px;
    background-image: url(${foodDesk1x});
    margin-left: 116px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${foodDesk2x});
    }
  }
`;

export const RecFoodList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
  }
  @media screen and (min-width: 1440px) {
    width: 676px;
  }
`;
