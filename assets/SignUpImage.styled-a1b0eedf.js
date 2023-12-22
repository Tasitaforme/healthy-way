import{s as e,L as n}from"./index-3cc89d4c.js";import{a,b as p}from"./Components.styled-e4a8c982.js";const r=e(a)`
  color: var(--grey-light);
  margin-top: 16px;
  margin-bottom: 24px;
`,o=e(p)`
  color: var(--grey-light);
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-top: 100px;
    display: inline-block;
    margin-right: 16px;
  }

  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`,m=e(n)`
  color: var(--white);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: color var(--transition-dur-and-fun);

  &:hover,
  &:focus {
    color: var(--green-light);
  }
  @media screen and (min-width: 834px) {
    display: inline-block;
  }
`,x=e.div`
  padding: 0px 0px 40px 0px;

  @media screen and (min-width: 834px) {
    padding: 0px 168px 60px 168px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 104px;
    justify-content: center;
    padding: 0px 116px 0px 116px;
  }
`,s=e.main`
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    margin-top: 40px;
  }
`,g=e.div`
  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: center;
  }
`,c=e.div`
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    margin-top: 80px;
  }
`,l=e.div`
  margin-top: 48px;
  width: 100%;

  @media screen and (min-width: 834px) {
    margin-top: 206px;
    padding: 0px 32px 0px 32px;
    display: flex;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 168px;
    padding: 0px;
  }
`,h=e.div`
  width: 100%;
  height: ${i=>i.$heightMob};
  background-image: ${i=>`url(${i.$imageMob1x})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${i=>`url(${i.$imageMob2x})`};
  }

  @media screen and (min-width: 834px) {
    height: ${i=>i.$heightTab};
    background-image: ${i=>`url(${i.$imageTab1x})`};
    width: 380px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${i=>`url(${i.$imageTab2x})`};
    }
  }

  @media screen and (min-width: 1440px) {
    height: ${i=>i.$heightDesk};
    background-image: ${i=>`url(${i.$imageDesk1x})`};
    width: 592px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${i=>`url(${i.$imageDesk2x})`};
    }
  }
`;export{h as B,x as F,r as H,g as I,s as M,o as S,c as T,m as a,l as b};
