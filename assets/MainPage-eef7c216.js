import{s as r,b as x,c as N,j as e,d as h,a as b,e as q,u as D,f as H,g as P,_ as f,h as G,i as _,k as O,m as z,C as A,o as U,n as S}from"./index-78f4ce3d.js";import{H as p,W as C,I as c,c as g,S as $,d as v,b as u,B as w,a as T,e as k,f as E,g as Y,h as V,i as X,j as F,k as W}from"./Components.styled-2be2943c.js";import{c as J,e as K,a as Q,F as Z,b as ee}from"./Formik.styled-917d7486.js";import{c as te,d as re}from"./index.esm-21db067f.js";const ne=r.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 20px;
    margin-bottom: 16px;
  }
`,ie=r.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  margin-bottom: 80px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
    margin-bottom: 40px;

    & li:nth-child(1),
    li:nth-child(2) {
      flex-basis: calc((100% - 20px) / 2);
    }
    & li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      flex-basis: 100%;
    }
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 54px;

    & li:nth-child(1),
    li:nth-child(2) {
      flex-basis: calc((100% - 2 * 20px) / 3);
    }

    & li:nth-child(3) {
      flex-basis: calc((100% - 2 * 20px) / 3);
    }

    & li:nth-child(4),
    li:nth-child(5) {
      flex-basis: calc((100% - 20px) / 2);
    }
  }
`,ae=r.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media screen and (min-width: 834px) {
    row-gap: 32px;
  }
  & li {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 20px;
  }
`;function oe(){const{baseWater:t,BMR:n}=x(N),i=t!==null?t*1e3:0;return e.jsxs(e.Fragment,{children:[e.jsx(p,{children:"Daily goal"}),e.jsx(C,{children:e.jsxs(ae,{children:[e.jsxs("li",{children:[e.jsx(c,{width:"80px",height:"80px",stroke:"var(--green)",children:e.jsx("use",{href:`${h}#bubble`})}),e.jsxs("div",{children:[e.jsx(g,{color:"var(--grey-light)",children:"Calories"}),e.jsx($,{children:n||0})]})]}),e.jsxs("li",{children:[e.jsx(c,{width:"80px",height:"80px",stroke:"var(--violet)",children:e.jsx("use",{href:`${h}#water`})}),e.jsxs("div",{children:[e.jsx(g,{color:"var(--grey-light)",children:"Water"}),e.jsxs(v,{children:[e.jsx($,{children:i||0}),e.jsx(u,{color:"var(--grey-light)",children:"ml"})]})]})]})]})})]})}const se=r(C)`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 20px;

  @media screen and (min-width: 834px) {
    column-gap: 40px;
  }
`,le=r(g)`
  margin-top: 13px;
`,ce=r.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 12px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 20px;
  }
`,de=r.div`
  width: 80px;
  height: 192px;
  padding: 8px;
  border-radius: 20px;
  background-color: var(--black-primary);
  border: 1px solid var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,xe=r.p`
  position: absolute;
  top: ${t=>t.$top};
  left: 50%;
  transform: translateX(-50%);

  color: ${t=>t.$color};

  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.38;
`,he=r.div`
  position: relative;

  background-color: var(--violet);
  border-radius: 20px;
  height: ${t=>t.height||"5%"};
`,pe=r.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  & > button:nth-child(1) {
    align-self: flex-end;
  }
`,me=r.div`
  margin: 16px 12px 22px;

  @media screen and (min-width: 400px) {
    margin: 24px 40px;
    max-width: 338px;
  }
`,fe=r(w)`
  background-color: transparent;
  color: var(--grey-light);
  width: 100%;
  margin-top: 8px;
  padding-bottom: 0;
  &:hover {
    box-shadow: none;
  }
`,ue=r(J)`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`,ge=r(K)`
  margin-top: 24px;
`,we=r(Q)`
  & + p {
    margin-top: 12px;
  }
  & + button {
    margin-top: 32px;
  }
`,je=r(w)`
  width: 100%;
`,ye=te().shape({water:re().min(100,"A quantity of water must be at least 100 ml").max(5e3,"A quantity of water must be at least 5000 ml").required("A quantity of water is required").typeError("A quantity must be a number")});function be({handleUpdate:t,setModalActive:n}){const i=a=>{t(a)};return e.jsxs(me,{children:[e.jsx(T,{children:"Add water intake"}),e.jsx(Z,{initialValues:{water:""},validationSchema:ye,onSubmit:i,children:({errors:a,touched:s,isSubmitting:o,isValid:l,dirty:m})=>e.jsxs(ue,{children:[e.jsx(ge,{children:e.jsx(k,{children:"How much water"})}),e.jsx(we,{type:"text",name:"water",placeholder:"Enter milliliters",autoComplete:"off",className:s.water?a.water?"input-error":"input-success":"input-normal"}),e.jsx(ee,{component:"p",name:"water"}),e.jsx(je,{type:"submit",disabled:!l||o||!m,children:e.jsx(E,{children:"Confirm"})})]})}),e.jsx(fe,{type:"button",onClick:()=>n(!1),children:e.jsx(Y,{children:"Cancel"})})]})}const ve=r.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(5, 5, 5, 0.8);
  margin: 0 auto;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  pointer-events: none;

  transition: opacity var(--transition-dur-and-fun);
  opacity: 0;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`,ke=r.div`
  position: relative;
  margin-top: 116px;
  margin-left: 10px;
  margin-right: 10px;

  background-color: var(--black-secondary);
  border-radius: 12px;
  opacity: 1;

  transform: scale(0);
  transition: transform var(--transition-dur-and-fun);

  max-height: calc(100% - 20px);
  overflow-y: auto;

  &.active {
    transform: scale(1);
  }
  @media screen and (min-width: 834px) {
    margin-top: 212px;
    margin-left: auto;
    margin-right: auto;
  }
`,Fe=document.querySelector("#root_modal");function We({modalActive:t,setModalActive:n,children:i}){return t?document.body.style.overflow="hidden":document.body.style.overflow="auto",b.useEffect(()=>{const a=s=>{s.code==="Escape"&&n(!1)};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[n]),q.createPortal(e.jsx(ve,{className:t?"active":"",onClick:()=>n(!1),children:e.jsx(ke,{className:t?"active":"",onClick:a=>a.stopPropagation(),children:i})}),Fe)}const L=t=>t.water;function Se({modalActive:t,setModalActive:n}){const i=D(),{water:a,error:s}=x(L),o=x(H),l=o!==null?o*1e3:0,m=l-a,j=Math.max(0,m),d=Math.round(a*100/l),I=async y=>{n(!1);try{await i(P({water:+y.water})).unwrap(),f.success("Added to the total amount of water drunk for today!")}catch(R){s&&f.error(`${s}`),f.error(`${R}`)}},M=async()=>{try{await i(G()).unwrap(),f.success("You have successfully remove daily water!")}catch(y){f.error(`${y}`)}};return e.jsxs(e.Fragment,{children:[e.jsx(p,{children:"Water"}),e.jsxs(se,{children:[e.jsx(de,{children:e.jsx(he,{height:`${d}%`,children:e.jsxs(xe,{$color:d<84?"var(--violet)":"var(--black-primary)",$top:d<84?"-28px":"28px",children:[d,"%"]})})}),e.jsxs(pe,{children:[e.jsx(V,{type:"button",onClick:()=>M(),children:e.jsx(c,{width:"20px",height:"20px",stroke:"var(--green-light)",children:e.jsx("use",{href:`${h}#trash`})})}),e.jsx(le,{children:"Water consumption"}),e.jsxs(ce,{children:[e.jsxs(v,{children:[e.jsx(X,{children:a}),e.jsx(u,{color:"var(--grey-light)",children:"ml"})]}),e.jsxs(v,{children:[e.jsx(u,{children:"left:"}),e.jsx(k,{children:j||0}),e.jsx(u,{color:"var(--grey-light)",children:"ml"})]})]}),e.jsxs(w,{type:"button",onClick:()=>n(!0),children:[e.jsx(c,{width:"16px",height:"16px",children:e.jsx("use",{href:`${h}#add`})}),e.jsx(E,{children:"Add water intake"})]})]})]}),t&&e.jsx(We,{modalActive:t,setModalActive:n,children:e.jsx(be,{handleUpdate:I,setModalActive:n})})]})}function $e(){return e.jsx(e.Fragment,{children:e.jsx(p,{children:"Food"})})}const Be=r.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 16px;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 16px;
`;r(c)`
  width: 36px;
  height: 36px;
  /* fill: none;
  stroke: none; */
  display: inline-block;

  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;const De=r.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`,Ce=r.li`
  display: flex;
  flex-direction: row;
  row-gap: 28px;
`;r.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
  justify-content: flex-start;
  margin-right: 8px;
`;r(g)`
  text-transform: capitalize;
  width: 100px;
`;r.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  align-items: center;
  justify-content: flex-start;

  & div:nth-child(1) {
    width: 164px;
  }
  & div:nth-child(2) {
    width: 92px;
  }
  & div:nth-child(2) {
    width: 66px;
  }
`;function Te({data:t}){return e.jsx(Ce,{})}function Ee(){const t={meals:[{name:"breakfast",breakfast:[{name:"Салат",carbonohidrates:10,protein:10,fat:10,calories:10},{name:"Салат",carbonohidrates:5,protein:5,fat:5,calories:5}]},{name:"lunch",lunch:[{name:"Салат",carbonohidrates:10,protein:10,fat:10,calories:10},{name:"Салат",carbonohidrates:5,protein:5,fat:5,calories:5}]},{name:"dinner",dinner:[{name:"Салат",carbonohidrates:10,protein:10,fat:10,calories:10},{name:"Салат",carbonohidrates:5,protein:5,fat:5,calories:5}]},{name:"snack",snack:[{name:"Салат",carbonohidrates:10,protein:10,fat:10,calories:10},{name:"Салат",carbonohidrates:5,protein:5,fat:5,calories:5}]}],total:[{name:"calories",calories:20},{name:"carbonohidrates",carbonohidrates:20},{name:"protein",protein:20},{name:"fat",fat:20}]},{meals:n}=t;function i(s){const o={calories:0,carbonohidrates:0,protein:0,fat:0};return s.forEach(({calories:l,carbonohidrates:m,protein:j,fat:d})=>{o.calories+=l,o.carbonohidrates+=m,o.protein+=j,o.fat+=d}),{calories:o.calories,carbonohidrates:o.carbonohidrates,protein:o.protein,fat:o.fat}}const a=n.map(s=>({mealType:s.name,...i(s[s.name])}));return e.jsxs(e.Fragment,{children:[e.jsxs(Be,{children:[e.jsx(p,{children:"Diary"}),e.jsx(F,{to:"/diary",children:e.jsx(W,{children:"See more"})})]}),e.jsx(De,{children:a.map((s,o)=>e.jsx(Te,{data:s},o))})]})}const Le=t=>t.recommendedFood.items,B=(t,n)=>t.slice().sort(()=>.5-Math.random()).slice(0,n),Ie=r.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 16px;
  margin-bottom: 16px;

  & li:nth-child(3),
  & li:nth-child(4) {
    display: none;
  }

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;

    & li:nth-child(3),
    & li:nth-child(4) {
      display: flex;
      flex-basis: calc((100% - 20px) / 2);
    }
  }
`,Me=r.li`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 20px;
  align-items: center;
  background-color: var(--black-secondary);
  border-radius: 12px;

  @media screen and (min-width: 834px) {
    min-width: calc((100% - 20px) / 2);
  }
`;r.img`
  width: 46px;
  height: 46px;
`;const Re=r(p)`
  font-weight: 400;
`,Ne=r.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 6px;
  align-items: center;
  margin-top: 2px;
`;function qe(){const t=x(Le),n=B(t,4);return console.log(B(t,4)),e.jsxs(e.Fragment,{children:[e.jsx(p,{children:"Recommended food"}),e.jsx(Ie,{children:n.map(i=>e.jsxs(Me,{children:[e.jsx("img",{src:i.img,alt:i.name,width:"46px"}),e.jsxs("div",{children:[e.jsx(Re,{children:i.name}),e.jsxs(Ne,{children:[e.jsx(u,{children:i.amount}),e.jsxs(k,{children:[i.calories," calories"]})]})]})]},i._id))}),e.jsxs(F,{to:"/recommended-food",children:[e.jsx(W,{children:"See more"}),e.jsx(c,{width:"16px",height:"16px",children:e.jsx("use",{href:`${h}#arrow-right`})})]})]})}function Oe(){const t=D(),n=x(_),{water:i}=x(L);b.useEffect(()=>{n&&(t(O()),t(z()))},[n,t,i]);const[a,s]=b.useState(!1);a?document.body.style.overflow="hidden":document.body.style.overflow="auto";const o=async()=>{try{await t(U()).unwrap(),S.success("You have successfully logged out!")}catch{S.error("Something went wrong !")}};return e.jsx("main",{children:e.jsxs(A,{children:[e.jsxs(ne,{children:[e.jsx(T,{children:"Today"}),e.jsxs(F,{to:"/dashboard",children:[e.jsx(W,{children:"On the way to the goal"}),e.jsx(c,{width:"16px",height:"16px",children:e.jsx("use",{href:`${h}#arrow-right`})})]})]}),e.jsxs(ie,{children:[e.jsx("li",{children:e.jsx(oe,{})}),e.jsx("li",{children:e.jsx(Se,{modalActive:a,setModalActive:s})}),e.jsx("li",{children:e.jsx($e,{})}),e.jsx("li",{children:e.jsx(Ee,{})}),e.jsx("li",{children:e.jsx(qe,{})})]}),e.jsx(w,{type:"submit",onClick:()=>o(),children:"Sign out"})]})})}export{Oe as default};
