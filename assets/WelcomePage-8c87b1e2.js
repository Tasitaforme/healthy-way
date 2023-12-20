import{s as a,L as t,j as e,C as o}from"./index-90bad006.js";import{w as r,a as s,b as x,c as g,d,e as c}from"./watch-desk@2x-2cdfc254.js";import{H as l,a as p}from"./Components.styled-f5e7c99c.js";const h=a.div`
  margin-top: 24px;
  margin-bottom: 24px;
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
`,n=a.li`
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
`,m=a(l)`
  margin-top: 16px;
  color: #b6b6b6;
  margin-bottom: 24px;
`,u=a(t)`
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
`,b=a(t)`
  display: inline-flex;
  color: #fff;
  justify-content: center;
  font-weight: 500;
  line-height: 20px;
  width: 122px;
`,$=a.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;function j(){return e.jsx("main",{children:e.jsxs(o,{children:[e.jsx(h,{$imageDesk1x:r,$imageDesk2x:s,$imageTab1x:x,$imageTab2x:g,$imageMob1x:d,$imageMob2x:c,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"}),e.jsx(p,{children:"Set goals and achieve them"}),e.jsx(m,{children:"The service will help you set goals and follow them."}),e.jsx(u,{to:"/signin",children:"Sign in"}),e.jsx(b,{to:"signup",children:"Sign up"}),e.jsxs($,{children:[e.jsx(n,{children:"Set goals"}),e.jsx(n,{children:"Watch your calories"}),e.jsx(n,{children:"Keep track of your water intake"}),e.jsx(n,{children:"Control your weight"})]})]})})}export{j as default};
