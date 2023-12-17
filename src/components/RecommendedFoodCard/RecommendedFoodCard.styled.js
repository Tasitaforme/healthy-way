import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: calc((100% - 44px) / 2);

  //tablet
  /* @media screen and () {
    flex-direction: row;
    flex-wrap: wrap;
  } */
  //mobil
  /* @media screen and () {
    width: 100%;
  } */
`;

export const Item = styled.li`
  flex-basis: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
  padding: 20px 24px;
  /* border-radius: ;
  background-color: ; */
`;

export const ImgThumb = styled.div`
  width: 46px;
  height: 46px;
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 2px;
`;

export const ProductName = styled.p`
  /* font-size: ;
  font-weight: ; */
  line-height: 24px;
  letter-spacing: 0em;
`;

export const Value = styled.p`
  margin-right: 6px;
  /* font-size: ;
  font-weight: ; */
  line-height: 20px;
  letter-spacing: 0em;

  & > span {
    /* font-weight:;
    color:; */
  }
`;
