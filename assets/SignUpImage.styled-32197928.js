import{s as e}from"./index-600d6b10.js";import{S as n,a}from"./SignInPage.styled-0c136cc2.js";const t=e.div`
  padding: 24px 0px 40px 0px;

  @media screen and (min-width: 834px) {
    padding: 40px 168px 60px 168px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 104px;
    justify-content: center;
    padding: 0px 116px 60px 116px;
  }
`,r=e.div`
  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: center;
  }
`,x=e.div`
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
    width: 444px;
  }
`,m=e.div`
  margin-top: 48px;
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    margin-top: 206px;
    padding: 0px 32px 0px 32px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 168px;
    padding: 0px;
  }
`,o=e(n)`
  margin-bottom: 0px;

  @media screen and (min-width: 834px) {
    margin-top: 0px;
    margin-right: 0px;
  }
`,g=e(a)``,s=e.div`
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
`;export{s as B,t as F,r as I,m as S,x as T,o as a,g as b};
