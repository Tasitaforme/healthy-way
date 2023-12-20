import{s as r,b as m,c as N,j as e,d as x,a as b,e as R,u as $,f as q,g as H,_ as p,h as P,i as G,k as O,C as _,m as z,n as F}from"./index-59f56a89.js";import{H as u,W as B,I as c,c as g,S,d as v,b as f,B as w,a as D,e as C,f as T,g as A,h as U,i as Y,j as k,k as W}from"./Components.styled-6339e33d.js";import{c as V,e as X,a as J,F as K,b as Q}from"./Formik.styled-f830968b.js";import{c as Z,d as ee}from"./index.esm-5ab79e7d.js";const te=r.div`
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
`,re=r.ul`
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
`;function ne(){const{baseWater:t,BMR:a}=m(N),s=t!==null?t*1e3:0;return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:"Daily goal"}),e.jsx(B,{children:e.jsxs(ae,{children:[e.jsxs("li",{children:[e.jsx(c,{width:"80px",height:"80px",stroke:"var(--green)",children:e.jsx("use",{href:`${x}#bubble`})}),e.jsxs("div",{children:[e.jsx(g,{color:"var(--grey-light)",children:"Calories"}),e.jsx(S,{children:a||0})]})]}),e.jsxs("li",{children:[e.jsx(c,{width:"80px",height:"80px",stroke:"var(--violet)",children:e.jsx("use",{href:`${x}#water`})}),e.jsxs("div",{children:[e.jsx(g,{color:"var(--grey-light)",children:"Water"}),e.jsxs(v,{children:[e.jsx(S,{children:s||0}),e.jsx(f,{color:"var(--grey-light)",children:"ml"})]})]})]})]})})]})}const ie=r(B)`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 20px;

  @media screen and (min-width: 834px) {
    column-gap: 40px;
  }
`,oe=r(g)`
  margin-top: 13px;
`,se=r.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 12px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 20px;
  }
`,le=r.div`
  width: 80px;
  height: 192px;
  padding: 8px;
  border-radius: 20px;
  background-color: var(--black-primary);
  border: 1px solid var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,ce=r.p`
  position: absolute;
  top: ${t=>t.$top};
  left: 50%;
  transform: translateX(-50%);

  color: ${t=>t.$color};

  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.38;
`,de=r.div`
  position: relative;

  background-color: var(--violet);
  border-radius: 20px;
  height: ${t=>t.height||"5%"};
`,xe=r.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  & > button:nth-child(1) {
    align-self: flex-end;
  }
`,he=r.div`
  margin: 16px 12px 22px;

  @media screen and (min-width: 400px) {
    margin: 24px 40px;
    max-width: 338px;
  }
`,pe=r(w)`
  background-color: transparent;
  color: var(--grey-light);
  width: 100%;
  margin-top: 8px;
  padding-bottom: 0;
  &:hover {
    box-shadow: none;
  }
`,me=r(V)`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`,ue=r(X)`
  margin-top: 24px;
`,fe=r(J)`
  & + p {
    margin-top: 12px;
  }
  & + button {
    margin-top: 32px;
  }
`,ge=r(w)`
  width: 100%;
`,we=Z().shape({water:ee().min(100,"A quantity of water must be at least 100 ml").max(5e3,"A quantity of water must be at least 5000 ml").required("A quantity of water is required").typeError("A quantity must be a number")});function je({handleUpdate:t,setModalActive:a}){const s=n=>{t(n)};return e.jsxs(he,{children:[e.jsx(D,{children:"Add water intake"}),e.jsx(K,{initialValues:{water:""},validationSchema:we,onSubmit:s,children:({errors:n,touched:o,isSubmitting:i,isValid:l,dirty:h})=>e.jsxs(me,{children:[e.jsx(ue,{children:e.jsx(C,{children:"How much water"})}),e.jsx(fe,{type:"text",name:"water",placeholder:"Enter milliliters",autoComplete:"off",className:o.water?n.water?"input-error":"input-success":"input-normal"}),e.jsx(Q,{component:"p",name:"water"}),e.jsx(ge,{type:"submit",disabled:!l||i||!h,children:e.jsx(T,{children:"Confirm"})})]})}),e.jsx(pe,{type:"button",onClick:()=>a(!1),children:e.jsx(A,{children:"Cancel"})})]})}const ye=r.div`
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
`,be=r.div`
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
`,ve=document.querySelector("#root_modal");function ke({modalActive:t,setModalActive:a,children:s}){return t?document.body.style.overflow="hidden":document.body.style.overflow="auto",b.useEffect(()=>{const n=o=>{o.code==="Escape"&&a(!1)};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[a]),R.createPortal(e.jsx(ye,{className:t?"active":"",onClick:()=>a(!1),children:e.jsx(be,{className:t?"active":"",onClick:n=>n.stopPropagation(),children:s})}),ve)}const E=t=>t.water;function We({modalActive:t,setModalActive:a}){const s=$(),{water:n,error:o}=m(E),i=m(q),l=i!==null?i*1e3:0,h=l-n,j=Math.max(0,h),d=Math.round(n*100/l),L=async y=>{a(!1);try{await s(H({water:+y.water})).unwrap(),p.success("Added to the total amount of water drunk for today!")}catch(I){o&&p.error(`${o}`),p.error(`${I}`)}},M=async()=>{try{await s(P()).unwrap(),p.success("You have successfully remove daily water!")}catch(y){p.error(`${y}`)}};return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:"Water"}),e.jsxs(ie,{children:[e.jsx(le,{children:e.jsx(de,{height:`${d}%`,children:e.jsxs(ce,{$color:d<84?"var(--violet)":"var(--black-primary)",$top:d<84?"-28px":"28px",children:[d,"%"]})})}),e.jsxs(xe,{children:[e.jsx(U,{type:"button",onClick:()=>M(),children:e.jsx(c,{width:"20px",height:"20px",stroke:"var(--green-light)",children:e.jsx("use",{href:`${x}#trash`})})}),e.jsx(oe,{children:"Water consumption"}),e.jsxs(se,{children:[e.jsxs(v,{children:[e.jsx(Y,{children:n}),e.jsx(f,{color:"var(--grey-light)",children:"ml"})]}),e.jsxs(v,{children:[e.jsx(f,{children:"left:"}),e.jsx(C,{children:j||0}),e.jsx(f,{color:"var(--grey-light)",children:"ml"})]})]}),e.jsxs(w,{type:"button",onClick:()=>a(!0),children:[e.jsx(c,{width:"16px",height:"16px",children:e.jsx("use",{href:`${x}#add`})}),e.jsx(T,{children:"Add water intake"})]})]})]}),t&&e.jsx(ke,{modalActive:t,setModalActive:a,children:e.jsx(je,{handleUpdate:L,setModalActive:a})})]})}function Fe(){return e.jsx(e.Fragment,{children:e.jsx(u,{children:"Food"})})}const Se=r.div`
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
`;const $e=r.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`,Be=r.li`
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
`;function De({data:t}){return e.jsx(Be,{})}function Ce(){const t={meals:[{name:"breakfast",breakfast:[{name:"Салат",carbonohidrates:10,protein:10,fat:10,calories:10},{name:"Салат",carbonohidrates:5,protein:5,fat:5,calories:5}]},{name:"lunch",lunch:[{name:"Салат",carbonohidrates:10,protein:10,fat:10,calories:10},{name:"Салат",carbonohidrates:5,protein:5,fat:5,calories:5}]},{name:"dinner",dinner:[{name:"Салат",carbonohidrates:10,protein:10,fat:10,calories:10},{name:"Салат",carbonohidrates:5,protein:5,fat:5,calories:5}]},{name:"snack",snack:[{name:"Салат",carbonohidrates:10,protein:10,fat:10,calories:10},{name:"Салат",carbonohidrates:5,protein:5,fat:5,calories:5}]}],total:[{name:"calories",calories:20},{name:"carbonohidrates",carbonohidrates:20},{name:"protein",protein:20},{name:"fat",fat:20}]},{meals:a}=t;function s(o){const i={calories:0,carbonohidrates:0,protein:0,fat:0};return o.forEach(({calories:l,carbonohidrates:h,protein:j,fat:d})=>{i.calories+=l,i.carbonohidrates+=h,i.protein+=j,i.fat+=d}),{calories:i.calories,carbonohidrates:i.carbonohidrates,protein:i.protein,fat:i.fat}}const n=a.map(o=>({mealType:o.name,...s(o[o.name])}));return e.jsxs(e.Fragment,{children:[e.jsxs(Se,{children:[e.jsx(u,{children:"Diary"}),e.jsx(k,{to:"/diary",children:e.jsx(W,{children:"See more"})})]}),e.jsx($e,{children:n.map((o,i)=>e.jsx(De,{data:o},i))})]})}function Te(){return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:"Recommended food"}),e.jsxs(k,{to:"/recommended-food",children:[e.jsx(W,{children:"See more"}),e.jsx(c,{width:"16px",height:"16px",children:e.jsx("use",{href:`${x}#arrow-right`})})]})]})}function Ne(){const t=$(),a=m(G),{water:s}=m(E);b.useEffect(()=>{a&&t(O())},[a,t,s]);const[n,o]=b.useState(!1);n?document.body.style.overflow="hidden":document.body.style.overflow="auto";const i=async()=>{try{await t(z()).unwrap(),F.success("You have successfully logged out!")}catch{F.error("Something went wrong !")}};return e.jsx("main",{children:e.jsxs(_,{children:[e.jsxs(te,{children:[e.jsx(D,{children:"Today"}),e.jsxs(k,{to:"/dashboard",children:[e.jsx(W,{children:"On the way to the goal"}),e.jsx(c,{width:"16px",height:"16px",children:e.jsx("use",{href:`${x}#arrow-right`})})]})]}),e.jsxs(re,{children:[e.jsx("li",{children:e.jsx(ne,{})}),e.jsx("li",{children:e.jsx(We,{modalActive:n,setModalActive:o})}),e.jsx("li",{children:e.jsx(Fe,{})}),e.jsx("li",{children:e.jsx(Ce,{})}),e.jsx("li",{children:e.jsx(Te,{})})]}),e.jsx(w,{type:"submit",onClick:()=>i(),children:"Sign out"})]})})}export{Ne as default};
