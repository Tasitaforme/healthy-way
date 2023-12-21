import{s as e}from"./index-5f90541d.js";import"./Components.styled-a8d0f2d2.js";const p=e.div`
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
`,d=e.main`
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    margin-top: 40px;
  }
`,t=e.div`
  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: center;
  }
`,r=e.div`
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
`,m=e.div`
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
`,x=e.div`
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
`;export{x as B,p as F,t as I,d as M,m as S,r as T};
