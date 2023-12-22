import styled from 'styled-components';
import {
  WrapMainBg,
  HeadlineThird,
} from 'components/StyledComponents/Components.styled';

export const WaterWrap = styled.li`
  @media screen and (min-width: 834px) {
    min-width: 380px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 444px;
  }
`;

export const WrapMain = styled(WrapMainBg)`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 20px;

  @media screen and (min-width: 834px) {
    column-gap: 40px;
  }
`;

export const Headline = styled(HeadlineThird)`
  margin-top: 13px;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 12px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 20px;
  }
`;

export const LeftSide = styled.div`
  width: 80px;
  height: 192px;
  padding: 8px;
  border-radius: 20px;
  background-color: var(--black-primary);
  border: 1px solid var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Percent = styled.p`
  position: absolute;
  top: ${(props) => props.$top};
  left: 50%;
  transform: translateX(-50%);

  color: ${(props) => props.$color};

  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.38;
`;

export const PercentBox = styled.div`
  position: relative;

  background-color: var(--violet);
  border-radius: 20px;
  height: ${(props) => props.height || '5%'};
`;

export const RightSide = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  & > button:nth-child(1) {
    align-self: flex-end;
  }
`;
