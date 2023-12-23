import{s as n,d as m,e as N,j as e,f as v,b as g,g as J,u as S,h as K,i as Q,_ as f,k as Z,m as ee,o as A,p as te,q as re,C as ae,t as ne,n as I}from"./index-75c8b229.js";import{a as j,W as T,I as y,b as C,S as q,c as M,d as w,B as D,H as G,e as F,f as H,g as oe,h as ie,i as se,j as E,k as L}from"./Components.styled-65563900.js";import{c as de,h as ce,a as P,d as le,f as xe,F as O,b as R}from"./Formik.styled-0707a901.js";import{C as _,A as U,D as Y}from"./index-cb71b53d.js";import{c as pe,S as he}from"./SignInForm.styled-c9b9c3ec.js";import"./SignInPage.styled-f5f47880.js";const ue=n.div`
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
`,me=n.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  margin-bottom: 80px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 20px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 54px;
  }
`,ge=n.li`
  @media screen and (min-width: 834px) {
    min-width: 380px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 328px;
  }
`,fe=n.ul`
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
`;function we(){const{baseWater:t,BMR:a}=m(N),s=t!==null?t*1e3:0;return e.jsxs(ge,{children:[e.jsx(j,{children:"Daily goal"}),e.jsx(T,{children:e.jsxs(fe,{children:[e.jsxs("li",{children:[e.jsx(y,{width:"80px",height:"80px",stroke:"var(--green)",children:e.jsx("use",{href:`${v}#bubble`})}),e.jsxs("div",{children:[e.jsx(C,{color:"var(--grey-light)",children:"Calories"}),e.jsx(q,{children:a||0})]})]}),e.jsxs("li",{children:[e.jsx(y,{width:"80px",height:"80px",stroke:"var(--violet)",children:e.jsx("use",{href:`${v}#water`})}),e.jsxs("div",{children:[e.jsx(C,{color:"var(--grey-light)",children:"Water"}),e.jsxs(M,{children:[e.jsx(q,{children:s||0}),e.jsx(w,{color:"var(--grey-light)",children:"ml"})]})]})]})]})})]})}const ye=n.li`
  @media screen and (min-width: 834px) {
    min-width: 380px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 444px;
  }
`,je=n(T)`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 20px;

  @media screen and (min-width: 834px) {
    column-gap: 40px;
  }
`,be=n(C)`
  margin-top: 13px;
`,ve=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 12px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 20px;
  }
`,ke=n.div`
  width: 80px;
  height: 192px;
  padding: 8px;
  border-radius: 20px;
  background-color: var(--black-primary);
  border: 1px solid var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,Ce=n.p`
  position: absolute;
  top: ${t=>t.$top};
  left: 50%;
  transform: translateX(-50%);

  color: ${t=>t.$color};

  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.38;
`,Fe=n.div`
  position: relative;

  background-color: var(--violet);
  border-radius: 20px;
  height: ${t=>t.height||"5%"};
`,De=n.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  & > button:nth-child(1) {
    align-self: flex-end;
  }
`,We=n.div`
  margin: 16px 12px 22px;

  @media screen and (min-width: 400px) {
    margin: 24px 40px;
    max-width: 338px;
  }
`,Se=n(D)`
  background-color: transparent;
  color: var(--grey-light);
  width: 100%;
  margin-top: 8px;
  padding-bottom: 0;
  &:hover {
    box-shadow: none;
  }
`,Be=n(de)`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`,Me=n(ce)`
  margin-top: 24px;
`,Pe=n(P)`
  & + p {
    margin-top: 12px;
  }
  & + button {
    margin-top: 32px;
  }
`,Re=n(D)`
  width: 100%;
`,$e=le().shape({water:xe().min(100,"A quantity of water must be at least 100 ml").max(5e3,"A quantity of water must be at least 5000 ml").required("A quantity of water is required").typeError("A quantity must be a number")});function Ne({handleUpdate:t,setModalActive:a}){const s=r=>{t(r)};return e.jsxs(We,{children:[e.jsx(G,{children:"Add water intake"}),e.jsx(O,{initialValues:{water:""},validationSchema:$e,onSubmit:s,children:({errors:r,touched:i,isSubmitting:c,isValid:x,dirty:h})=>e.jsxs(Be,{children:[e.jsx(Me,{children:e.jsx(F,{children:"How much water"})}),e.jsx(Pe,{type:"text",name:"water",placeholder:"Enter milliliters",autoComplete:"off",className:i.water?r.water?"input-error":"input-success":"input-normal"}),e.jsx(R,{component:"p",name:"water"}),e.jsx(Re,{type:"submit",disabled:!x||c||!h,children:e.jsx(H,{children:"Confirm"})})]})}),e.jsx(Se,{type:"button",onClick:()=>a(!1),children:e.jsx(oe,{children:"Cancel"})})]})}const Te=n.div`
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
`,Ee=n.div`
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
`,Le=document.querySelector("#root_modal");function Ie({modalActive:t,setModalActive:a,children:s}){return t?document.body.style.overflow="hidden":document.body.style.overflow="auto",g.useEffect(()=>{const r=i=>{i.code==="Escape"&&a(!1)};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[a]),J.createPortal(e.jsx(Te,{className:t?"active":"",onClick:()=>a(!1),children:e.jsx(Ee,{className:t?"active":"",onClick:r=>r.stopPropagation(),children:s})}),Le)}const z=t=>t.water;function qe({modalActive:t,setModalActive:a}){const s=S(),{water:r=0,error:i}=m(z),c=m(K),x=c!==null?c*1e3:0,h=x-r,l=Math.max(0,h),o=Math.round(r*100/x),d=async u=>{a(!1);try{await s(Q({water:+u.water})).unwrap(),f.success("Added to the total amount of water drunk for today!")}catch(b){i&&f.error(`${i}`),f.error(`${b}`)}},p=async()=>{try{await s(Z()).unwrap(),f.success("You have successfully remove daily water!")}catch(u){f.error(`${u}`)}};return e.jsxs(ye,{children:[e.jsx(j,{children:"Water"}),e.jsxs(je,{children:[e.jsx(ke,{children:e.jsx(Fe,{height:`${o}%`,children:e.jsxs(Ce,{$color:o<84?"var(--violet)":"var(--black-primary)",$top:o<84?"-28px":"28px",children:[o,"%"]})})}),e.jsxs(De,{children:[e.jsx(ie,{type:"button",onClick:()=>p(),children:e.jsx(y,{width:"20px",height:"20px",stroke:"var(--green-light)",children:e.jsx("use",{href:`${v}#trash`})})}),e.jsx(be,{children:"Water consumption"}),e.jsxs(ve,{children:[e.jsxs(M,{children:[e.jsx(se,{children:r||0}),e.jsx(w,{color:"var(--grey-light)",children:"ml"})]}),e.jsxs(M,{children:[e.jsx(w,{children:"left:"}),e.jsx(F,{children:l||0}),e.jsx(w,{color:"var(--grey-light)",children:"ml"})]})]}),e.jsxs(D,{type:"button",onClick:()=>a(!0),children:[e.jsx(y,{width:"16px",height:"16px",children:e.jsx("use",{href:`${v}#add`})}),e.jsx(H,{children:"Add water intake"})]})]})]}),t&&e.jsx(Ie,{modalActive:t,setModalActive:a,children:e.jsx(Ne,{handleUpdate:d,setModalActive:a})})]})}const V=t=>t.diary,Ae=(t,a)=>t.slice().sort(()=>.5-Math.random()).slice(0,a),Ge=t=>{function a(r){const i={calories:0,carbohydrate:0,protein:0,fat:0};return r.forEach(({calories:c,carbohydrate:x,protein:h,fat:l})=>{i.calories+=c,i.carbohydrate+=x,i.protein+=h,i.fat+=l}),{calories:i.calories,carbohydrate:i.carbohydrate,protein:i.protein,fat:i.fat}}return Object.keys(t).map(r=>({mealType:r,...a(t[r])}))},He=t=>{const a={calories:0,carbohydrate:0,protein:0,fat:0};return Object.values(t).forEach(s=>{s.forEach(({calories:r,carbohydrate:i,protein:c,fat:x})=>{a.calories+=r,a.carbohydrate+=i,a.protein+=c,a.fat+=x})}),a},Oe=n.li`
  min-width: 100%;
  @media screen and (min-width: 1440px) {
    min-width: 560px;
  }
`,_e=n(T)`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 40px;
    padding: 36px 40px;
  }
`,Ue=n.ul``;_.register(U);const Ye=({calories:t,baseCalories:a})=>{const s=g.useMemo(()=>t>=a?100:Math.round(t/a*100),[t,a]),r=t>=a?"red":"rgba(69, 255, 188, 1)",i=t>=a?[0]:[50],c={datasets:[{data:[s,100-s],backgroundColor:[r,"rgba(41, 41, 40, 1)"],borderColor:["rgba(69, 255, 188, 0)"],borderRadius:i,cutout:"80%"}]},x={id:"textCenter",beforeDatasetsDraw(l){const{ctx:o}=l,d=l.getDatasetMeta(0).data[0].x,p=l.getDatasetMeta(0).data[0].y;o.save(),o.font="32px Poppins",o.fillStyle="#ffffff",o.textAlign="center",o.textBaseline="middle",o.fillText(t,d,p-12),o.font="14px sans-serif",o.fillStyle="#B6B6B6",o.fillText("calories",d,p+15)}},h={id:"backgroundCircle",beforeDatasetsDraw(l){const{ctx:o}=l;o.save();const d=l.getDatasetMeta(0).data[0].x,p=l.getDatasetMeta(0).data[0].y,u=l.getDatasetMeta(0).data[0].innerRadius,b=l.getDatasetMeta(0).data[0].outerRadius,k=b-u,W=Math.PI/180;o.beginPath(),o.lineWidth=k,o.strokeStyle="rgba(41, 41, 40, 1)",o.arc(d,p,b-k/2,0,W*360,!1),o.stroke()}};return e.jsx("div",{className:"doughnut",style:{height:168,width:168},children:e.jsx(Y,{plugins:[x,h],data:c})})},ze=Ye,$=n.li`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
`,Ve=n.ul`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
`,Xe=n($)`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;_.register(U);const Je=({title:t,arcColor:a,nutrient:s,baseNutrient:r=0})=>{const i=g.useMemo(()=>s>=r?100:Math.round(s/r*100),[r,s]),c=s>=r?[0]:[50],x={datasets:[{data:[i,100-i],backgroundColor:[a,"rgba(41, 41, 40, 1)"],borderColor:["rgba(69, 255, 188, 0)"],borderRadius:c,cutout:"80%"}]},h={id:"textCenter",beforeDatasetsDraw(o){const{ctx:d}=o,p=o.getDatasetMeta(0).data[0].x,u=o.getDatasetMeta(0).data[0].y;d.save(),d.font="14px Poppins",d.fillStyle="#B6B6B6",d.textAlign="center",d.textBaseline="middle",d.fillText(`${i}%`,p,u)}},l={id:"backgroundCircle",beforeDatasetsDraw(o){const{ctx:d}=o;d.save();const p=o.getDatasetMeta(0).data[0].x,u=o.getDatasetMeta(0).data[0].y,b=o.getDatasetMeta(0).data[0].innerRadius,k=o.getDatasetMeta(0).data[0].outerRadius,W=k-b,X=Math.PI/180;d.beginPath(),d.lineWidth=W,d.strokeStyle="rgba(41, 41, 40, 1)",d.arc(p,u,k-W/2,0,X*360,!1),d.stroke()}};return e.jsxs(Xe,{children:[e.jsx("div",{className:"doughnut",style:{height:48,width:48},children:e.jsx(Y,{plugins:[h,l],data:x})}),e.jsxs("div",{children:[e.jsx(C,{children:t}),e.jsxs(Ve,{children:[e.jsxs($,{children:[e.jsx(w,{children:"Goal:"}),e.jsx(F,{children:r||0})]}),e.jsxs($,{children:[e.jsx(w,{children:"left:"}),e.jsx(F,{children:s>=r?0:r-s})]})]})]})]})},B=Je;function Ke(){const t=S(),{fat:a,protein:s,carbohydrate:r,BMR:i}=m(N),{meals:c,isLoading:x}=m(V),{fat:h,protein:l,carbohydrate:o,calories:d}=He(c);g.useEffect(()=>{t(ee()).unwrap()},[h,l,o,d]);const p=["Carbonohidrates","Protein","Fat"];return e.jsxs(Oe,{children:[e.jsx(j,{children:"Food"}),!x&&e.jsxs(_e,{children:[e.jsx(ze,{calories:d,baseCalories:i}),e.jsxs(Ue,{children:[e.jsx(B,{title:p[0],arcColor:"#FFC4F7",nutrient:o,baseNutrient:r}),e.jsx(B,{title:p[1],arcColor:"#FFF3B7",nutrient:l,baseNutrient:s}),e.jsx(B,{title:p[2],arcColor:"#B6B6B6",nutrient:h,baseNutrient:a})]})]})]})}const Qe=n.li`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 558px;
  }
`,Ze=n.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 16px;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 16px;
`;n(y)`
  width: 36px;
  height: 36px;
  /* fill: none;
  stroke: none; */
  display: inline-block;

  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;n.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`;n.li`
  display: flex;
  flex-direction: column;
  row-gap: 28px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
  }
`;n.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
  justify-content: flex-start;
  margin-right: 8px;
`;n(C)`
  text-transform: capitalize;
  width: 100px;
`;n.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 12px;
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
`;function et(){S();const{meals:t,firstLoad:a}=m(V);return Ge(t),e.jsx(Qe,{children:e.jsxs(Ze,{children:[e.jsx(j,{children:"Diary"}),e.jsx(E,{to:"/diary",children:e.jsx(L,{children:"See more"})})]})})}const tt=n.li`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 676px;
  }
`,rt=n.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
  }
`,at=n.li`
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
`;n.img`
  width: 46px;
  height: 46px;
`;const nt=n(j)`
  font-weight: 400;
`,ot=n.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 6px;
  align-items: center;
  margin-top: 2px;
`,it=async()=>{try{const{data:t}=await A.get("/api/user/recommended-food");return t}catch(t){return t}};function st(){const[t,a]=g.useState([]),s=Ae(t,4);return g.useEffect(()=>{it().then(r=>{a(r)}).catch(r=>console.log(r))},[]),e.jsxs(tt,{children:[e.jsx(j,{children:"Recommended food"}),e.jsx(rt,{children:s.map(r=>e.jsxs(at,{children:[e.jsx("img",{src:r.img,alt:r.name,width:"46px"}),e.jsxs("div",{children:[e.jsx(nt,{children:r.name}),e.jsxs(ot,{children:[e.jsx(w,{children:r.amount}),e.jsxs(F,{children:[r.calories," calories"]})]})]})]},r._id))}),e.jsxs(E,{to:"/recommended-food",children:[e.jsx(L,{children:"See more"}),e.jsx(y,{width:"16px",height:"16px",children:e.jsx("use",{href:`${v}#arrow-right`})})]})]})}const dt=async t=>{try{const{data:a}=await A.put("/api/auth/change-password",t);return a}catch(a){return a}};function ct(){const{email:t}=m(N),a={password:"",newPassword:""},s=async(r,i)=>{try{await dt({email:t,...r}),f.success("Your password has been successfully changed!")}catch(c){f.error(`${c}`)}i.resetForm()};return e.jsxs("section",{style:{paddingTop:"24px",paddingBottom:"24px"},children:[e.jsx(j,{style:{marginBottom:"12px"},children:"Change password"}),e.jsx(O,{initialValues:a,validationSchema:pe,onSubmit:s,children:({errors:r,touched:i,isSubmitting:c,isValid:x})=>e.jsxs(he,{children:[e.jsx(P,{type:"password",name:"password",placeholder:"Password",autoComplete:"off",className:i.quantity?r.quantity?"input-error":"input-success":"input-normal"}),e.jsx(R,{component:"p",name:"password"}),e.jsx(P,{type:"password",name:"newPassword",placeholder:"New password",autoComplete:"off",className:i.quantity?r.quantity?"input-error":"input-success":"input-normal"}),e.jsx(R,{component:"p",name:"newPassword"}),e.jsx(D,{type:"submit",disabled:!x||c,children:"Update Password"})]})})]})}function gt(){const t=S(),a=m(te),{water:s}=m(z);g.useEffect(()=>{a&&t(re())},[a,s]);const[r,i]=g.useState(!1);r?document.body.style.overflow="hidden":document.body.style.overflow="auto";const c=async()=>{try{await t(ne()).unwrap(),I.success("You have successfully logged out!")}catch{I.error("Something went wrong !")}};return e.jsx("main",{children:e.jsxs(ae,{children:[e.jsxs(ue,{children:[e.jsx(G,{children:"Today"}),e.jsxs(E,{to:"/dashboard",children:[e.jsx(L,{children:"On the way to the goal"}),e.jsx(y,{width:"16px",height:"16px",children:e.jsx("use",{href:`${v}#arrow-right`})})]})]}),e.jsxs(me,{children:[e.jsx(we,{}),e.jsx(qe,{modalActive:r,setModalActive:i}),e.jsx(Ke,{}),e.jsx(et,{}),e.jsx(st,{})]}),e.jsx(D,{type:"submit",onClick:()=>c(),children:"Sign out"}),e.jsx(ct,{})]})})}export{gt as default};
