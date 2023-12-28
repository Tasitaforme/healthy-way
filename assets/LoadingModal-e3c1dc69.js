import{s as t,h as a,m as r,B as i,k as n,I as p,j as e,M as s,H as d,q as c,t as x}from"./index-953f3a7a.js";const h=t(a)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
    width: 444px;
  }
`,u=t(r)`
  width: 100%;
`,g=t(i)`
  margin-top: 40px;
  width: 100%;
`,b=t(n)`
  position: absolute;
  top: 25px;
  left: 10px;
`,f=t.div`
  position: relative;
  &:not(:first-child) {
    margin-top: 20px;
  }
`,y=t.p`
  position: absolute;
  left: 10px;
  color: #3cbc81;
  font-size: 12px;
`,F=t(p)`
  stroke: none;
  position: absolute;
  top: 10px;
  right: -6px;
  display: flex;
`,w=t.div`
  &:hover {
    cursor: pointer;
  }
`;s.setAppElement("#root");const l={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"12px",background:"#0F0F0F",boxShadow:"0px 4px 14px 0px rgba(227, 255, 168, 0.20",outline:"none",border:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1e3}};function v({isOpen:o}){return e.jsx(s,{isOpen:o,style:l,children:e.jsxs("div",{style:{padding:"10px",width:"250px"},children:[e.jsx(d,{children:"Please wait a moment..."}),e.jsxs(c,{children:[e.jsx("br",{}),"The first request may take some time... Don't worry, that's because we use a free deployment service for our backend.",e.jsx("br",{}),e.jsx("br",{}),"Web services on free instances automatically “fall asleep” after 15 minutes of inactivity. When a new request comes in for the free service, the service is started again so that it can process the request. This may cause a delay in the first response."]}),e.jsx(x,{})]})})}export{f as F,w as I,v as L,h as S,y as V,F as a,u as b,b as c,g as d};
