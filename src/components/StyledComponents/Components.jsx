import styled from 'styled-components';

export const IconWrap = styled.svg`
  width: ${(props) => props.width || '14px'};
  height: ${(props) => props.height || '14px'};
  fill: ${(props) => props.fill || 'none'};
  stroke: ${(props) => props.stroke || 'currentColor'};

  display: inline-block;
`;

export const HeadlineFirst = styled.h1`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 500;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;
export const HeadlineSecond = styled.h2`
  font-size: 18px;
  line-height: 1.33;
  font-weight: 400;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;

export const HeadlineThird = styled.h3`
  font-size: 16px;
  line-height: 1.38;
  font-weight: 500;
  color: ${(props) => props.color || 'var(--white)'};

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const SubtitleFirst = styled.p`
  font-size: 34px;
  line-height: 1.12;
  font-weight: 600;
`;

export const SubtitleSecond = styled.p`
  font-size: 28px;
  line-height: 1.22;
  font-weight: 500;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    line-height: 1.19;
  }
`;

export const BodyTextWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  column-gap: 4px;
`;

export const BodyTextFirst = styled.p`
  font-size: 14px;
  line-height: 1.43;
  font-weight: 400;
  color: ${(props) => props.color || 'var(--white)'};
`;

export const BodyTextSecond = styled(BodyTextFirst)`
  font-weight: 500;
  color: ${(props) => props.color || 'var(--grey-light)'};
`;

export const ButtonTextFirst = styled.p`
  font-size: 14px;
  line-height: 1.43;
  font-weight: 500;
  color: currentColor;
`;

export const ButtonTextSecond = styled(ButtonTextFirst)`
  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const ButtonTextThird = styled(ButtonTextFirst)`
  font-weight: 400;
`;

export const WrapMainBg = styled.div`
  background-color: var(--black-secondary);
  margin-top: 6px;
  padding: 16px 12px;
  border-radius: 12px;

  @media screen and (min-width: 834px) {
    padding: 24px 22px;
  }
`;

export const Button = styled.button`
  align-self: flex-start;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-inline: ${(props) => props.paddingX || '10px'};
  color: ${(props) => props.color || 'var(--black-secondary)'};
  background-color: ${(props) => props.colorBg || 'var(--green-light)'};

  display: flex;
  flex-direction: row;
  column-gap: 8px;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;

  border-radius: 12px;
  border: none;
  text-align: center;
  box-shadow: none;
  transition: box-shadow var(--transition-dur-and-fun);

  &:hover {
    box-shadow: var(--box-shadow);
  }
  /* @media screen and (min-width: 320px) {
    width: 100%;
  }
  @media screen and (min-width: 834px) {
    width: ${(props) => props.width || 'auto'};
    padding-inline: ${(props) => props.size || '8px'};
  } */
`;
