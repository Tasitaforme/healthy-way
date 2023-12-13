import{s,N as a,j as n,C as d}from"./index-a4082016.js";const l=s(a)`
  padding-top: 8px;
  padding-bottom: 8px;

  display: block;
  justify-content: center;

  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: var(--black-secondary);
  background-color: var(--green-light);
  border-radius: 12px;
  border: none;
  text-align: center;

  transition: box-shadow var(--transition-dur-and-fun);

  &:hover {
    box-shadow: var(--box-shadow);
  }
  @media screen and (min-width: 320px) {
    width: 100%;
  }
  @media screen and (min-width: 834px) {
    width: ${i=>i.size||"auto"};
    padding-inline: ${i=>i.size||"8px"};
  }
`;function e({text:i,onClick:t,paddingInline:o,width:r}){return n.jsx(l,{onClick:t,style:{paddingInline:o,width:r},children:i})}function c(){return n.jsx("main",{children:n.jsxs(d,{children:[n.jsx("h1",{children:"Set goals and achieve them"}),n.jsx("h2",{children:"The service will help you set goals and follow them."}),n.jsx(e,{to:"/signin",text:"Sign in",width:"212px"}),n.jsx(e,{to:"/signin",text:"Sign innnn",paddingInline:"60px"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Set goals"}),n.jsx("li",{children:"Watch your calories"}),n.jsx("li",{children:"Keep track of your water intake"}),n.jsx("li",{children:"Control your weight"})]})]})})}export{c as default};
