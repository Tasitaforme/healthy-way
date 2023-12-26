import{s as a,m as g,o as T,j as e,p as w,a as _,q as ee,b as te,d as re,f as se,F as ie,c as ne,u as k,t as ae,v as oe,_ as C,w as le,r as y,x as ce,y as z,z as L,A as de,C as xe,B as he,n as E}from"./index-32654d1b.js";import{a as D,W as P,I as f,b as R,S as G,c as b,d as m,B as Q,H as q,e as j,f as Z,g as pe,h as M,i as me,j as v,k as O}from"./Components.styled-f8dc734f.js";import{M as ue,s as V,b as ge,l as je,d as fe,a as we}from"./snack@2x-d5202822.js";import{C as H,A as J,D as Y}from"./index-d4cf752e.js";import{g as ye,a as Ae,R as be,F as Fe,b as Ce,c as Re,d as De}from"./getRecommendedFood-46317a05.js";import{C as Se,D as ke}from"./DeleteUser-10d977ed.js";import"./SignInForm.styled-8dcd286a.js";import"./SignInPage.styled-6244d9c2.js";const Qe=a.div`
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
`,Ie=a.ul`
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
`,Be=a.li`
  @media screen and (min-width: 834px) {
    min-width: 380px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 328px;
  }
`,Pe=a.ul`
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
`;function ve(){const{baseWater:t,BMR:s}=g(T),o=t!==null?t*1e3:0;return e.jsxs(Be,{children:[e.jsx(D,{children:"Daily goal"}),e.jsx(P,{children:e.jsxs(Pe,{children:[e.jsxs("li",{children:[e.jsx(f,{width:"80px",height:"80px",stroke:"var(--green)",children:e.jsx("use",{href:`${w}#bubble`})}),e.jsxs("div",{children:[e.jsx(R,{color:"var(--grey-light)",children:"Calories"}),e.jsx(G,{children:s||0})]})]}),e.jsxs("li",{children:[e.jsx(f,{width:"80px",height:"80px",stroke:"var(--violet)",children:e.jsx("use",{href:`${w}#water`})}),e.jsxs("div",{children:[e.jsx(R,{color:"var(--grey-light)",children:"Water"}),e.jsxs(b,{children:[e.jsx(G,{children:o||0}),e.jsx(m,{color:"var(--grey-light)",children:"ml"})]})]})]})]})})]})}const Oe=a.li`
  @media screen and (min-width: 834px) {
    min-width: 380px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 444px;
  }
`,Ee=a(P)`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 20px;

  @media screen and (min-width: 834px) {
    column-gap: 40px;
  }
`,Ge=a(R)`
  margin-top: 13px;
`,Ke=a.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 12px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 20px;
  }
`,Ue=a.div`
  width: 80px;
  height: 192px;
  padding: 8px;
  border-radius: 20px;
  background-color: var(--black-primary);
  border: 1px solid var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,We=a.p`
  position: absolute;
  top: ${t=>t.$top};
  left: 50%;
  transform: translateX(-50%);

  color: ${t=>t.$color};

  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.38;
`,Ne=a.div`
  position: relative;

  background-color: var(--violet);
  border-radius: 20px;
  height: ${t=>t.height||"5%"};
`,Te=a.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  & > button:nth-child(1) {
    align-self: flex-end;
  }
`,ze=a.div`
  margin: 16px 12px 22px;

  @media screen and (min-width: 400px) {
    margin: 24px 40px;
    max-width: 338px;
  }
`,Le=a(Q)`
  background-color: transparent;
  color: var(--grey-light);
  width: 100%;
  margin-top: 8px;
  padding-bottom: 0;
  &:hover {
    box-shadow: none;
  }
`,qe=a(_)`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`,Ze=a(ee)`
  margin-top: 24px;
`,Me=a(te)`
  & + p {
    margin-top: 12px;
  }
  & + button {
    margin-top: 32px;
  }
`,Ve=a(Q)`
  width: 100%;
`,He=re().shape({water:se().min(100,"A quantity of water must be at least 100 ml").max(5e3,"A quantity of water must be at least 5000 ml").required("A quantity of water is required").typeError("A quantity must be a number")});function Je({handleUpdate:t,setModalActive:s}){const o=n=>{t(n)};return e.jsxs(ze,{children:[e.jsx(q,{children:"Add water intake"}),e.jsx(ie,{initialValues:{water:""},validationSchema:He,onSubmit:o,children:({errors:n,touched:r,isSubmitting:d,isValid:x,dirty:p})=>e.jsxs(qe,{children:[e.jsx(Ze,{children:e.jsx(j,{children:"How much water"})}),e.jsx(Me,{type:"text",name:"water",placeholder:"Enter milliliters",autoComplete:"off",className:r.water?n.water?"input-error":"input-success":"input-normal"}),e.jsx(ne,{component:"p",name:"water"}),e.jsx(Ve,{type:"submit",disabled:!x||d||!p,children:e.jsx(Z,{children:"Confirm"})})]})}),e.jsx(Le,{type:"button",onClick:()=>s(!1),children:e.jsx(pe,{children:"Cancel"})})]})}const X=t=>t.water;function Ye({modalActive:t,setModalActive:s}){const o=k(),{water:n=0,error:r}=g(X),d=g(ae),x=d!==null?d*1e3:0,p=x-n,c=Math.max(0,p),i=Math.round(n*100/x),l=async u=>{s(!1);try{await o(oe({water:+u.water})).unwrap(),C.success("Added to the total amount of water drunk for today!")}catch(A){r&&C.error(`${r}`),C.error(`${A}`)}},h=async()=>{try{await o(le()).unwrap(),C.success("You have successfully remove daily water!")}catch(u){C.error(`${u}`)}};return e.jsxs(Oe,{children:[e.jsx(D,{children:"Water"}),e.jsxs(Ee,{children:[e.jsx(Ue,{children:e.jsx(Ne,{height:`${i}%`,children:e.jsxs(We,{$color:i<84?"var(--violet)":"var(--black-primary)",$top:i<84?"-28px":"28px",children:[i,"%"]})})}),e.jsxs(Te,{children:[e.jsx(M,{type:"button",onClick:()=>h(),children:e.jsx(f,{width:"20px",height:"20px",stroke:"var(--green-light)",children:e.jsx("use",{href:`${w}#trash`})})}),e.jsx(Ge,{children:"Water consumption"}),e.jsxs(Ke,{children:[e.jsxs(b,{children:[e.jsx(me,{children:n||0}),e.jsx(m,{color:"var(--grey-light)",children:"ml"})]}),e.jsxs(b,{children:[e.jsx(m,{children:"left:"}),e.jsx(j,{children:c||0}),e.jsx(m,{color:"var(--grey-light)",children:"ml"})]})]}),e.jsxs(Q,{type:"button",onClick:()=>s(!0),children:[e.jsx(f,{width:"16px",height:"16px",children:e.jsx("use",{href:`${w}#add`})}),e.jsx(Z,{children:"Add water intake"})]})]})]}),t&&e.jsx(ue,{modalActive:t,setModalActive:s,children:e.jsx(Je,{handleUpdate:l,setModalActive:s})})]})}const Xe=t=>{function s(n){const r={calories:0,carbohydrate:0,protein:0,fat:0};return n.forEach(({calories:d,carbohydrate:x,protein:p,fat:c})=>{r.calories+=d,r.carbohydrate+=x,r.protein+=p,r.fat+=c}),{calories:r.calories,carbohydrate:r.carbohydrate,protein:r.protein,fat:r.fat}}return Object.keys(t).reduce((n,r)=>(Array.isArray(t[r])&&n.push({mealType:r,...s(t[r])}),n),[])},$e=(t={})=>{const s={calories:0,carbohydrate:0,protein:0,fat:0};return Object.values(t).forEach(o=>{Array.isArray(o)&&o.forEach(({calories:n,carbohydrate:r,protein:d,fat:x})=>{s.calories+=n,s.carbohydrate+=r,s.protein+=d,s.fat+=x})}),s},_e=a.li`
  min-width: 100%;
  @media screen and (min-width: 1440px) {
    min-width: 560px;
  }
`,et=a(P)`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 40px;
    padding: 36px 40px;
  }
`,tt=a.ul``;H.register(J);const rt=({calories:t,baseCalories:s})=>{const o=y.useMemo(()=>t>=s?100:Math.round(t/s*100),[t,s]),n=t>=s?"red":"rgba(69, 255, 188, 1)",r=t>=s?[0]:[50],d={datasets:[{data:[o,100-o],backgroundColor:[n,"rgba(41, 41, 40, 1)"],borderColor:["rgba(69, 255, 188, 0)"],borderRadius:r,cutout:"80%"}]},x={id:"textCenter",beforeDatasetsDraw(c){const{ctx:i}=c,l=c.getDatasetMeta(0).data[0].x,h=c.getDatasetMeta(0).data[0].y;i.save(),i.font="32px Poppins",i.fillStyle="#ffffff",i.textAlign="center",i.textBaseline="middle",i.fillText(t,l,h-12),i.font="14px sans-serif",i.fillStyle="#B6B6B6",i.fillText("calories",l,h+15)}},p={id:"backgroundCircle",beforeDatasetsDraw(c){const{ctx:i}=c;i.save();const l=c.getDatasetMeta(0).data[0].x,h=c.getDatasetMeta(0).data[0].y,u=c.getDatasetMeta(0).data[0].innerRadius,A=c.getDatasetMeta(0).data[0].outerRadius,F=A-u,S=Math.PI/180;i.beginPath(),i.lineWidth=F,i.strokeStyle="rgba(41, 41, 40, 1)",i.arc(l,h,A-F/2,0,S*360,!1),i.stroke()}};return e.jsx("div",{className:"doughnut",style:{height:168,width:168},children:e.jsx(Y,{plugins:[x,p],data:d})})},st=rt,B=a.li`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
`,it=a.ul`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
`,nt=a(B)`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;H.register(J);const at=({title:t,arcColor:s,nutrient:o,baseNutrient:n=0})=>{const r=y.useMemo(()=>o>=n?100:Math.round(o/n*100),[n,o]),d=o>=n?[0]:[50],x={datasets:[{data:[r,100-r],backgroundColor:[s,"rgba(41, 41, 40, 1)"],borderColor:["rgba(69, 255, 188, 0)"],borderRadius:d,cutout:"80%"}]},p={id:"textCenter",beforeDatasetsDraw(i){const{ctx:l}=i,h=i.getDatasetMeta(0).data[0].x,u=i.getDatasetMeta(0).data[0].y;l.save(),l.font="14px Poppins",l.fillStyle="#B6B6B6",l.textAlign="center",l.textBaseline="middle",l.fillText(`${r}%`,h,u)}},c={id:"backgroundCircle",beforeDatasetsDraw(i){const{ctx:l}=i;l.save();const h=i.getDatasetMeta(0).data[0].x,u=i.getDatasetMeta(0).data[0].y,A=i.getDatasetMeta(0).data[0].innerRadius,F=i.getDatasetMeta(0).data[0].outerRadius,S=F-A,$=Math.PI/180;l.beginPath(),l.lineWidth=S,l.strokeStyle="rgba(41, 41, 40, 1)",l.arc(h,u,F-S/2,0,$*360,!1),l.stroke()}};return e.jsxs(nt,{children:[e.jsx("div",{className:"doughnut",style:{height:48,width:48},children:e.jsx(Y,{plugins:[p,c],data:x})}),e.jsxs("div",{children:[e.jsx(R,{children:t}),e.jsxs(it,{children:[e.jsxs(B,{children:[e.jsx(m,{children:"Goal:"}),e.jsx(j,{children:n||0})]}),e.jsxs(B,{children:[e.jsx(m,{children:"left:"}),e.jsx(j,{children:o>=n?0:n-o})]})]})]})]})},I=at;function ot(){const t=k(),{fat:s,protein:o,carbohydrate:n,BMR:r}=g(T),{meals:d,isLoading:x}=g(V),{fat:p,protein:c,carbohydrate:i,calories:l}=$e(d);y.useEffect(()=>{t(ce()).unwrap()},[p,c,i,l]);const h=["Carbonohidrates","Protein","Fat"];return e.jsxs(_e,{children:[e.jsx(D,{children:"Food"}),x?e.jsx(z,{}):e.jsxs(et,{children:[e.jsx(st,{calories:l,baseCalories:r}),e.jsxs(tt,{children:[e.jsx(I,{title:h[0],arcColor:"#FFC4F7",nutrient:i,baseNutrient:n}),e.jsx(I,{title:h[1],arcColor:"#FFF3B7",nutrient:c,baseNutrient:o}),e.jsx(I,{title:h[2],arcColor:"#B6B6B6",nutrient:p,baseNutrient:s})]})]})]})}const lt=a.li`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 558px;
  }
`,ct=a.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 16px;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 16px;
`;a(f)`
  width: 36px;
  height: 36px;
  /* fill: none;
  stroke: none; */
  display: inline-block;

  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;const dt=a.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`,K="data:image/png;base64,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",U="data:image/png;base64,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",W="data:image/png;base64,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",N="data:image/png;base64,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",xt=a.li`
  display: flex;
  flex-direction: column;
  row-gap: 28px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
  }
`,ht=a.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
  justify-content: flex-start;
  margin-right: 8px;
`,pt=a(R)`
  text-transform: capitalize;
  width: 100px;
`,mt=a.div`
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
`;function ut({data:t,meals:s}){return e.jsxs(xt,{children:[e.jsxs(ht,{children:[t.mealType==="breakfast"&&e.jsx("img",{srcSet:`${K} 1x, ${ge} 2x`,src:K,alt:"Breakfast"}),t.mealType==="lunch"&&e.jsx("img",{srcSet:`${U} 1x, ${je} 2x`,src:U,alt:"Lunch"}),t.mealType==="dinner"&&e.jsx("img",{srcSet:`${W} 1x, ${fe} 2x`,src:W,alt:"Dinner"}),t.mealType==="snack"&&e.jsx("img",{srcSet:`${N} 1x, ${we} 2x`,src:N,alt:"Snack"}),e.jsx(pt,{children:t.mealType})]}),s[`${t.mealType}`]==[]?e.jsx("div",{children:e.jsx("p",{children:"Record your meal"})}):e.jsxs(mt,{children:[e.jsxs(b,{children:[e.jsx(m,{children:"Carbonohidrates:"}),e.jsx(j,{children:t.carbohydrate})]}),e.jsxs(b,{children:[e.jsx(m,{children:"Protein:"}),e.jsx(j,{children:t.protein})]}),e.jsxs(b,{children:[e.jsx(m,{children:"Fat:"}),e.jsx(j,{children:t.fat})]}),e.jsx(M,{type:"button",onClick:()=>console.log("ТУУУ"),children:e.jsx(f,{width:"20px",height:"20px",stroke:"var(--green-light)",children:e.jsx("use",{href:`${w}#trash`})})})]})]})}function gt(){k();const{meals:t,firstLoad:s}=g(V),o=Xe(t);return e.jsxs(lt,{children:[e.jsxs(ct,{children:[e.jsx(D,{children:"Diary"}),e.jsx(v,{to:"/diary",children:e.jsx(O,{children:"See more"})})]}),e.jsx(dt,{children:o.map((n,r)=>e.jsx(ut,{data:n,meals:t},r))})]})}function jt(){const t=g(L),[s,o]=y.useState([]),n=ye(s,4);return y.useEffect(()=>{t&&Ae().then(r=>{o(r)}).catch(r=>console.log(r))},[t]),e.jsxs(be,{children:[e.jsx(D,{children:"Recommended food"}),s.length===0?e.jsx(z,{}):e.jsx(Fe,{children:n.map(r=>e.jsxs(Ce,{children:[e.jsx("img",{src:r.img,alt:r.name,width:"46px"}),e.jsxs("div",{children:[e.jsx(Re,{children:r.name}),e.jsxs(De,{children:[e.jsx(m,{children:r.amount}),e.jsxs(j,{children:[r.calories," calories"]})]})]})]},r._id))}),e.jsxs(v,{to:"/recommended-food",children:[e.jsx(O,{children:"See more"}),e.jsx(f,{width:"16px",height:"16px",children:e.jsx("use",{href:`${w}#arrow-right`})})]})]})}function Dt(){const t=k(),s=g(L),{water:o}=g(X);y.useEffect(()=>{s&&t(de())},[s,o]);const[n,r]=y.useState(!1);n?document.body.style.overflow="hidden":document.body.style.overflow="auto";const d=async()=>{try{await t(he()).unwrap(),E.success("You have successfully logged out!")}catch(x){E.error(`Something went wrong! 
 ${x.message}`)}};return e.jsx("main",{children:e.jsxs(xe,{children:[e.jsxs(Qe,{children:[e.jsx(q,{children:"Today"}),e.jsxs(v,{to:"/dashboard",children:[e.jsx(O,{children:"On the way to the goal"}),e.jsx(f,{width:"16px",height:"16px",children:e.jsx("use",{href:`${w}#arrow-right`})})]})]}),e.jsxs(Ie,{children:[e.jsx(ve,{}),e.jsx(Ye,{modalActive:n,setModalActive:r}),e.jsx(ot,{}),e.jsx(gt,{}),e.jsx(jt,{})]}),e.jsx(Q,{type:"submit",onClick:()=>d(),children:"Sign out"}),e.jsx(Se,{}),e.jsx(ke,{})]})})}export{Dt as default};
