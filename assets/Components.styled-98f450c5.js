import{s as e,L as i}from"./index-e68b9b4e.js";const a=e.button`
  margin: 0;
  padding: 0;
  border: none;
  line-height: 1;
  font-size: 1px;
`,s=e.svg`
  width: ${n=>n.width||"14px"};
  height: ${n=>n.height||"14px"};
  fill: ${n=>n.fill||"none"};
  stroke: ${n=>n.stroke||"currentColor"};

  display: inline-block;
`,d=e.h1`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 500;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,l=e.h2`
  font-size: 18px;
  line-height: 1.33;
  font-weight: 400;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,h=e.h3`
  font-size: 16px;
  line-height: 1.38;
  font-weight: 500;
  color: ${n=>n.color||"var(--white)"};

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,c=e.p`
  font-size: 34px;
  line-height: 1.12;
  font-weight: 600;
`,p=e.p`
  font-size: 28px;
  line-height: 1.22;
  font-weight: 500;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    line-height: 1.19;
  }
`,g=e.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  column-gap: 4px;
`,o=e.p`
  font-size: 14px;
  line-height: 1.43;
  font-weight: 400;
  color: ${n=>n.color||"var(--white)"};
`,x=e(o)`
  font-weight: 500;
  color: ${n=>n.color||"var(--grey-light)"};
`,t=e.p`
  font-size: 14px;
  line-height: 1.43;
  font-weight: 500;
  color: currentColor;
`,f=e(t)`
  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 1.38;
  }
`,w=e(t)`
  font-weight: 400;
`,u=e.div`
  background-color: var(--black-secondary);
  margin-top: 6px;
  padding: 16px 12px;
  border-radius: 12px;

  @media screen and (min-width: 834px) {
    padding: 24px 22px;
  }
`,m=e.button`
  align-self: flex-start;
  padding-block: ${n=>n.$paddingY||"8px"};
  padding-inline: ${n=>n.$paddingX||"10px"};
  color: ${n=>n.$color||"var(--black-secondary)"};
  background-color: ${n=>n.$colorBg||"var(--green-light)"};
  width: ${n=>n.$width||""};
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
`,b=e(i)`
  color: var(--grey-light);
  transition: color var(--transition-dur-and-fun);

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  column-gap: 6px;

  &:hover,
  &:focus {
    color: var(--green-light);
  }
`;export{m as B,d as H,s as I,c as S,u as W,l as a,h as b,g as c,o as d,x as e,t as f,w as g,a as h,p as i,b as j,f as k};
