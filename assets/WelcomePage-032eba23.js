import{s as n,C as r,L as a,j as i}from"./index-b6ef643f.js";import{w as o,a as d,b as m,c as s,d as x,e as c}from"./watch-desk@2x-2cdfc254.js";import{H as p,a as g}from"./Components.styled-9f6f33a1.js";const l=n(r)`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`,h=n(p)`
  @media screen and (min-width: 834px) {
    text-align: center;
  }
`,u=n.div`
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  height: ${e=>e.$heightMob};
  background-image: ${e=>`url(${e.$imageMob1x})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${e=>`url(${e.$imageMob2x})`};
  }
  @media screen and (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    margin-bottom: 80px;
    height: ${e=>e.$heightTab};
    background-image: ${e=>`url(${e.$imageTab1x})`};
    width: 380px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${e=>`url(${e.$imageTab2x})`};
    }
  }
  @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
    height: ${e=>e.$heightDesk};
    background-image: ${e=>`url(${e.$imageDesk1x})`};
    width: 592px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${e=>`url(${e.$imageDesk2x})`};
    }
  }
`,f=n.div`
  @media screen and (min-width: 834px) {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 444px;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
    align-items: flex-start;
    margin-bottom: 80px;
  }
`,t=n.li`
  display: flex;
  align-items: center;
  gap: 8px;
  &::before {
    content: '';
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: #e3ffa8;
  }
`,b=n.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
    align-content: center;
  }
`,w=n(g)`
  margin-top: 16px;
  color: #b6b6b6;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 419px;
    margin: 0 auto;
    margin-top: 16px;
    margin-bottom: 24px;
    text-align: center;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
    text-align: start;
  }
`,$=n(a)`
  display: inline-flex;
  padding: 8px 10px;
  border-radius: 12px;
  background: #e3ffa8;
  color: #0f0f0f;
  justify-content: center;
  font-weight: 500;
  line-height: 20px;
  width: 142px;
  margin-right: 16px;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    width: 192px;
  }
`,k=n(a)`
  display: inline-flex;
  color: #fff;
  justify-content: center;
  font-weight: 500;
  line-height: 20px;
  width: 122px;
  align-items: center;
  cursor: pointer;
`,j=n.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: 834px) {
    margin-top: 80px;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-between;
    margin-bottom: 286px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 0px;
  }
`;function D(){return i.jsx("main",{children:i.jsxs(l,{children:[i.jsx(u,{$imageDesk1x:o,$imageDesk2x:d,$imageTab1x:m,$imageTab2x:s,$imageMob1x:x,$imageMob2x:c,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"}),i.jsxs(f,{children:[i.jsx(h,{children:"Set goals and achieve them"}),i.jsx(w,{children:"The service will help you set goals and follow them."}),i.jsxs(b,{children:[i.jsx($,{to:"/signin",children:"Sign in"}),i.jsx(k,{to:"signup",children:"Sign up"})]}),i.jsxs(j,{children:[i.jsx(t,{children:"Set goals"}),i.jsx(t,{children:"Watch your calories"}),i.jsx(t,{children:"Keep track of your water intake"}),i.jsx(t,{children:"Control your weight"})]})]})]})})}export{D as default};
