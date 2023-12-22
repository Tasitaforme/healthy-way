import{s as n,L as e}from"./index-664b27fd.js";import{a,b as t}from"./Components.styled-8218cd64.js";const m=n(a)`
  color: var(--grey-light);
  margin-top: 16px;
  margin-bottom: 24px;
`,d=n(t)`
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
`,p=n(e)`
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
`,x=n.div`
  padding: 0px 0px 40px 0px;

  @media screen and (min-width: 834px) {
    padding: 0px 168px 60px 168px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 104px;
    justify-content: center;
    padding: 0px 116px 60px 116px;
  }
`,g=n.main`
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    margin-top: 40px;
  }
`,s=n.div`
  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: center;
  }
`,c=n.div`
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
`,l=n.div`
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
`,h=n(d)`
  margin-bottom: 0px;

  @media screen and (min-width: 834px) {
    margin-top: 0px;
    margin-right: 0px;
  }
`,u=n(p)``,b=n.div`
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
`;export{b as B,x as F,m as H,s as I,g as M,d as S,c as T,p as a,l as b,h as c,u as d};
