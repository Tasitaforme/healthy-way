import{s as i,o as w,p as O,j as e,a as y,e as J,q as me,h as C,c as ue,d as ge,F as Y,g as R,u as S,t as fe,v as je,_ as A,w as we,r as f,x as X,y as ye,z as be,A as Ae,B as $,D as Fe,E as Ce,G as Re,C as Se}from"./index-f29e7426.js";import{a as D,W as K,I as u,b as v,S as V,c as j,d as p,B as W,H as U,e as m,f as T,g as _,h as z,i as De,j as L,k as M}from"./Components.styled-def94d11.js";import{M as ee,s as q,d as ke,b as te,l as ie,a as ne,c as re}from"./formikDiary-ecd0cb3a.js";import{C as se,A as ae,D as oe}from"./index-9a475b8d.js";import{g as ve,a as Qe,R as Be,F as Ie,b as Pe,c as Ee,d as We}from"./getRecommendedFood-c9222d39.js";const Ne=i.main`
  padding-top: 16px;
  padding-bottom: 80px;
  @media screen and (min-width: 834px) {
    padding-top: 24px;
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    padding-bottom: 54px;
  }
`,Ge=i.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`,Oe=i.ul`
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
`,Ke=i.li`
  @media screen and (min-width: 834px) {
    min-width: 380px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 328px;
  }
`,Ue=i.ul`
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
`;function Te(){const{baseWater:t,BMR:r}=w(O),a=t!==null?t*1e3:0;return e.jsxs(Ke,{children:[e.jsx(D,{children:"Daily goal"}),e.jsx(K,{children:e.jsxs(Ue,{children:[e.jsxs("li",{children:[e.jsx(u,{width:"80px",height:"80px",stroke:"var(--green)",children:e.jsx("use",{href:`${y}#bubble`})}),e.jsxs("div",{children:[e.jsx(v,{color:"var(--grey-light)",children:"Calories"}),e.jsx(V,{children:r||0})]})]}),e.jsxs("li",{children:[e.jsx(u,{width:"80px",height:"80px",stroke:"var(--violet)",children:e.jsx("use",{href:`${y}#water`})}),e.jsxs("div",{children:[e.jsx(v,{color:"var(--grey-light)",children:"Water"}),e.jsxs(j,{children:[e.jsx(V,{children:a||0}),e.jsx(p,{color:"var(--grey-light)",children:"ml"})]})]})]})]})})]})}const ze=i.li`
  @media screen and (min-width: 834px) {
    min-width: 380px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 444px;
  }
`,Le=i(K)`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 20px;

  @media screen and (min-width: 834px) {
    column-gap: 40px;
  }
`,Me=i(v)`
  margin-top: 13px;
`,qe=i.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 12px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 20px;
  }
`,Ze=i.div`
  width: 80px;
  height: 192px;
  padding: 8px;
  border-radius: 20px;
  background-color: var(--black-primary);
  border: 1px solid var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,Ve=i.p`
  position: absolute;
  top: ${t=>t.$top};
  left: 50%;
  transform: translateX(-50%);

  color: ${t=>t.$color};

  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.38;
`,He=i.div`
  position: relative;

  background-color: var(--violet);
  border-radius: 20px;
  height: ${t=>t.height||"5%"};
`,Je=i.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  & > button:nth-child(1) {
    align-self: flex-end;
  }
`,Ye=i.div`
  margin: 16px 12px 22px;

  @media screen and (min-width: 400px) {
    margin: 24px 40px;
    max-width: 338px;
  }
`,ce=i(W)`
  background-color: transparent;
  color: var(--grey-light);
  width: 100%;
  margin-top: 8px;
  padding-bottom: 0;
  &:hover {
    box-shadow: none;
  }
`,Xe=i(J)`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`,$e=i(me)`
  margin-top: 24px;
`,_e=i(C)`
  & + p {
    margin-top: 12px;
  }
  & + button {
    margin-top: 32px;
  }
`,et=i(W)`
  width: 100%;
`,tt=ue().shape({water:ge().min(100,"A quantity of water must be at least 100 ml").max(5e3,"A quantity of water must be at least 5000 ml").required("A quantity of water is required").typeError("A quantity must be a number")});function it({handleUpdate:t,setModalActive:r}){const a=o=>{t(o)};return e.jsxs(Ye,{children:[e.jsx(U,{children:"Add water intake"}),e.jsx(Y,{initialValues:{water:""},validationSchema:tt,onSubmit:a,children:({errors:o,touched:s,isSubmitting:x,isValid:h,dirty:d})=>e.jsxs(Xe,{children:[e.jsx($e,{children:e.jsx(m,{children:"How much water"})}),e.jsx(_e,{type:"text",name:"water",placeholder:"Enter milliliters",autoComplete:"off",className:s.water?o.water?"input-error":"input-success":"input-normal"}),e.jsx(R,{component:"p",name:"water"}),e.jsx(et,{type:"submit",disabled:!h||x||!d,children:e.jsx(T,{children:"Confirm"})})]})}),e.jsx(ce,{type:"button",onClick:()=>r(!1),children:e.jsx(_,{children:"Cancel"})})]})}const nt=t=>t.water;function rt({modalActive:t,setModalActive:r}){const a=S(),{water:o=0,error:s}=w(nt),x=w(fe),h=x!==null?x*1e3:0,d=h-o,l=Math.max(0,d),n=Math.round(o*100/h),c=async b=>{r(!1);try{await a(je({water:+b.water})).unwrap(),A.success("Added to the total amount of water drunk for today!")}catch(F){s&&A.error(`${s}`),A.error(`${F}`)}},g=async()=>{try{await a(we()).unwrap(),A.success("You have successfully remove daily water!")}catch(b){A.error(`${b}`)}};return e.jsxs(ze,{children:[e.jsx(D,{children:"Water"}),e.jsxs(Le,{children:[e.jsx(Ze,{children:e.jsx(He,{height:`${n}%`,children:e.jsxs(Ve,{$color:n<84?"var(--violet)":"var(--black-primary)",$top:n<84?"-28px":"28px",children:[n,"%"]})})}),e.jsxs(Je,{children:[e.jsx(z,{type:"button",onClick:()=>g(),children:e.jsx(u,{width:"20px",height:"20px",stroke:"var(--green-light)",children:e.jsx("use",{href:`${y}#trash`})})}),e.jsx(Me,{children:"Water consumption"}),e.jsxs(qe,{children:[e.jsxs(j,{children:[e.jsx(De,{children:o||0}),e.jsx(p,{color:"var(--grey-light)",children:"ml"})]}),e.jsxs(j,{children:[e.jsx(p,{children:"left:"}),e.jsx(m,{children:l||0}),e.jsx(p,{color:"var(--grey-light)",children:"ml"})]})]}),e.jsxs(W,{type:"button",onClick:()=>r(!0),children:[e.jsx(u,{width:"16px",height:"16px",children:e.jsx("use",{href:`${y}#add`})}),e.jsx(T,{children:"Add water intake"})]})]})]}),t&&e.jsx(ee,{modalActive:t,setModalActive:r,children:e.jsx(it,{handleUpdate:c,setModalActive:r})})]})}const st=t=>{function r(o){const s={calories:0,carbohydrate:0,protein:0,fat:0};return o.forEach(({calories:x,carbohydrate:h,protein:d,fat:l})=>{s.calories+=x,s.carbohydrate+=h,s.protein+=d,s.fat+=l}),{calories:s.calories,carbohydrate:s.carbohydrate,protein:s.protein,fat:s.fat}}return Object.keys(t).reduce((o,s)=>(Array.isArray(t[s])&&o.push({mealType:s,...r(t[s])}),o),[])},at=(t={})=>{const r={calories:0,carbohydrate:0,protein:0,fat:0};return Object.values(t).forEach(a=>{Array.isArray(a)&&a.forEach(({calories:o,carbohydrate:s,protein:x,fat:h})=>{r.calories+=o,r.carbohydrate+=s,r.protein+=x,r.fat+=h})}),r},ot=i.li`
  min-width: 100%;
  @media screen and (min-width: 1440px) {
    min-width: 560px;
  }
`,ct=i(K)`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 40px;
    padding: 36px 40px;
  }
`,lt=i.ul``;se.register(ae);const dt=({calories:t,baseCalories:r})=>{const a=f.useMemo(()=>t>=r?100:Math.round(t/r*100),[t,r]),o=t>=r?"red":"rgba(69, 255, 188, 1)",s=t>=r?[0]:[50],x={datasets:[{data:[a,100-a],backgroundColor:[o,"rgba(41, 41, 40, 1)"],borderColor:["rgba(69, 255, 188, 0)"],borderRadius:s,cutout:"80%"}]},h={id:"textCenter",beforeDatasetsDraw(l){const{ctx:n}=l,c=l.getDatasetMeta(0).data[0].x,g=l.getDatasetMeta(0).data[0].y;n.save(),n.font="32px Poppins",n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.fillText(t,c,g-12),n.font="14px sans-serif",n.fillStyle="#B6B6B6",n.fillText("calories",c,g+15)}},d={id:"backgroundCircle",beforeDatasetsDraw(l){const{ctx:n}=l;n.save();const c=l.getDatasetMeta(0).data[0].x,g=l.getDatasetMeta(0).data[0].y,b=l.getDatasetMeta(0).data[0].innerRadius,F=l.getDatasetMeta(0).data[0].outerRadius,k=F-b,Q=Math.PI/180;n.beginPath(),n.lineWidth=k,n.strokeStyle="rgba(41, 41, 40, 1)",n.arc(c,g,F-k/2,0,Q*360,!1),n.stroke()}};return e.jsx("div",{className:"doughnut",style:{height:168,width:168},children:e.jsx(oe,{plugins:[h,d],data:x})})},xt=dt,G=i.li`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
`,ht=i.ul`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
`,pt=i(G)`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;se.register(ae);const mt=({title:t,arcColor:r,nutrient:a,baseNutrient:o=0})=>{const s=f.useMemo(()=>a>=o?100:Math.round(a/o*100),[o,a]),x=a>=o?[0]:[50],h={datasets:[{data:[s,100-s],backgroundColor:[r,"rgba(41, 41, 40, 1)"],borderColor:["rgba(69, 255, 188, 0)"],borderRadius:x,cutout:"80%"}]},d={id:"textCenter",beforeDatasetsDraw(n){const{ctx:c}=n,g=n.getDatasetMeta(0).data[0].x,b=n.getDatasetMeta(0).data[0].y;c.save(),c.font="14px Poppins",c.fillStyle="#B6B6B6",c.textAlign="center",c.textBaseline="middle",c.fillText(`${s}%`,g,b)}},l={id:"backgroundCircle",beforeDatasetsDraw(n){const{ctx:c}=n;c.save();const g=n.getDatasetMeta(0).data[0].x,b=n.getDatasetMeta(0).data[0].y,F=n.getDatasetMeta(0).data[0].innerRadius,k=n.getDatasetMeta(0).data[0].outerRadius,Q=k-F,pe=Math.PI/180;c.beginPath(),c.lineWidth=Q,c.strokeStyle="rgba(41, 41, 40, 1)",c.arc(g,b,k-Q/2,0,pe*360,!1),c.stroke()}};return e.jsxs(pt,{children:[e.jsx("div",{className:"doughnut",style:{height:"48px",width:"48px",flexShrink:0},children:e.jsx(oe,{plugins:[d,l],data:h})}),e.jsxs("div",{children:[e.jsx(v,{children:t}),e.jsxs(ht,{children:[e.jsxs(G,{children:[e.jsx(p,{children:"Goal:"}),e.jsx(m,{children:o||0})]}),e.jsxs(G,{children:[e.jsx(p,{children:"left:"}),e.jsx(m,{children:a>=o?0:parseFloat(o-a).toFixed(0)})]})]})]})]})},N=mt;function ut(){S();const{fat:t,protein:r,carbohydrate:a,BMR:o}=w(O),{meals:s,isLoading:x}=w(q),{fat:h,protein:d,carbohydrate:l,calories:n}=at(s),c=["Carbonohidrates","Protein","Fat"];return e.jsxs(ot,{children:[e.jsx(D,{children:"Food"}),x?e.jsx(X,{}):e.jsxs(ct,{children:[e.jsx(xt,{calories:n,baseCalories:o}),e.jsxs(lt,{children:[e.jsx(N,{title:c[0],arcColor:"#FFC4F7",nutrient:l,baseNutrient:a}),e.jsx(N,{title:c[1],arcColor:"#FFF3B7",nutrient:d,baseNutrient:r}),e.jsx(N,{title:c[2],arcColor:"#B6B6B6",nutrient:h,baseNutrient:t})]})]})]})}const gt=i.li`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 558px;
  }
`,ft=i.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 16px;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 16px;
`;i(u)`
  width: 36px;
  height: 36px;
  /* fill: none;
  stroke: none; */
  display: inline-block;

  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;const jt=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`,B="data:image/png;base64,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",I="data:image/png;base64,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",P="data:image/png;base64,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",E="data:image/png;base64,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",wt=i.li`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    align-items: center;
    row-gap: 28px;
  }
`,yt=i.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
  justify-content: flex-start;
  margin-right: 8px;
`,bt=i(v)`
  text-transform: capitalize;
  width: 100px;
`,le=i.div`
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
  & div:nth-child(3) {
    width: 66px;
  }
`,de=i.button`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  color: var(--green-light);
  border: none;
  padding: 0;
`,xe=i(T)`
  color: currentColor;
  margin-left: 6px;
`,At=i.div`
  min-height: 346px;
  margin: 16px 12px 22px;

  @media screen and (min-width: 834px) {
    margin: 24px;
    min-width: 630px;
  }
`,Ft=i.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 24px;
  margin-bottom: 16px;
`,Ct=i(D)`
  text-transform: capitalize;
  width: 100px;
`,Rt=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  align-items: flex-start;
  justify-content: flex-start;
`,St=i.li``,Dt=i(p)`
  margin-bottom: 12px;
  text-transform: capitalize;
  color: var(--green-light);
`,H=i.div`
  margin-top: 40px;
  margin-bottom: 40px;
`,kt=i(J)`
  display: flex;
  flex-direction: column;

  row-gap: 16px;
  min-width: 276px;

  @media screen and (min-width: 834px) {
    min-width: 630px;
    align-items: flex-end;
  }
`,vt=i.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 12px;
  }
`,Z=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,Qt=i(Z)`
  @media screen and (min-width: 834px) {
    width: 255px;
  }
`,Bt=i(Z)`
  @media screen and (min-width: 834px) {
    width: 100px;
  }
`,It=i(Z)`
  @media screen and (min-width: 834px) {
    width: 96px;
  }
`,Pt=i.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 12px;

  @media screen and (min-width: 834px) {
    width: auto;
  }
`,he=i.div`
  display: flex;
  flex-direction: column;
  width: calc((100% - 12px) / 2);

  @media screen and (min-width: 834px) {
    width: 60px;
  }
`,Et=i(he)``,Wt=i.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 60px;

  @media screen and (min-width: 834px) {
    flex-direction: row-reverse;
    column-gap: 12px;
    width: 416px;
    justify-content: flex-end;
  }
`,Nt=i(W)`
  width: 100%;
  @media screen and (min-width: 834px) {
    width: calc(100% / 2 - 12px);
  }
`,Gt=i(ce)`
  width: 100%;
  @media screen and (min-width: 834px) {
    width: calc(100% / 2 - 12px);
  }
`;function Ot({type:t,setFormActive:r,setModalActive:a}){const o={name:"",carbohydrate:"",protein:"",fat:"",calories:""},s=S();function x(d){return d.charAt(0).toUpperCase()+d.slice(1)}const h=async(d,l)=>{try{await s(ye({diary:x(t),...d})).unwrap(),A.success("You have successfully added your meal!"),r(!1),a(!1)}catch(n){console.log(n),A.error(`Something went wrong! 
 ${n.message}`)}l.resetForm()};return e.jsx(Y,{initialValues:o,validationSchema:ke,onSubmit:h,children:({errors:d,touched:l,isSubmitting:n,isValid:c})=>e.jsxs(kt,{children:[e.jsxs(vt,{children:[e.jsxs(Qt,{children:[e.jsx(C,{type:"text",name:"name",placeholder:"The name of the product or dish",autoComplete:"off",className:l.name?d.name?"input-error":"input-success":"input-normal"}),e.jsx(R,{component:"p",name:"name"})]}),e.jsxs(Bt,{children:[e.jsx(C,{type:"number",name:"carbohydrate",placeholder:"Carbonoh.",autoComplete:"off",className:l.carbohydrate?d.carbohydrate?"input-error":"input-success":"input-normal"}),e.jsx(R,{component:"p",name:"carbohydrate"})]}),e.jsxs(It,{children:[e.jsx(C,{type:"number",name:"protein",placeholder:"Protein",autoComplete:"off",className:l.protein?d.protein?"input-error":"input-success":"input-normal"}),e.jsx(R,{component:"p",name:"protein"})]}),e.jsxs(Pt,{children:[e.jsxs(he,{children:[e.jsx(C,{type:"number",name:"fat",placeholder:"Fat",autoComplete:"off",className:l.fat?d.fat?"input-error":"input-success":"input-normal"}),e.jsx(R,{component:"p",name:"fat"})]}),e.jsxs(Et,{children:[e.jsx(C,{type:"number",name:"calories",placeholder:"Calories",autoComplete:"off",className:l.calories?d.calories?"input-error":"input-success":"input-normal"}),e.jsx(R,{component:"p",name:"calories"})]})]})]}),e.jsxs(Wt,{children:[e.jsx(Nt,{type:"submit",disabled:!c||n,children:"Confirm"}),e.jsx(Gt,{type:"button",onClick:()=>{r(!1),a(!1)},children:e.jsx(_,{children:"Cancel"})})]})]})})}function Kt({modalData:t,setModalData:r}){const{type:a}=t,o=be(),s=S(),{meals:x}=w(q),[h,d]=f.useState(!1),l=async n=>{try{await s(Ae(n)).unwrap(),A.success("You have successfully removed your meal!")}catch(c){A.error(`Something went wrong! 
 ${c}`)}};return e.jsx(e.Fragment,{children:e.jsx(ee,{modalActive:!!t,setModalActive:r,children:e.jsxs(At,{children:[e.jsx(U,{children:"Record your meal"}),e.jsxs(Ft,{children:[a==="breakfast"&&e.jsx("img",{srcSet:`${B} 1x, ${te} 2x`,src:B,alt:"Breakfast"}),a==="lunch"&&e.jsx("img",{srcSet:`${I} 1x, ${ie} 2x`,src:I,alt:"Lunch"}),a==="dinner"&&e.jsx("img",{srcSet:`${P} 1x, ${ne} 2x`,src:P,alt:"Dinner"}),a==="snack"&&e.jsx("img",{srcSet:`${E} 1x, ${re} 2x`,src:E,alt:"Snack"}),e.jsx(Ct,{children:a})]}),h||x[`${a}`]&&e.jsx(Rt,{children:x[`${a}`].map(n=>e.jsxs(St,{children:[e.jsx(Dt,{children:n.name}),e.jsxs(le,{children:[e.jsxs(j,{children:[e.jsx(p,{children:"Carbonohidrates:"}),e.jsx(m,{children:n.carbohydrate})]}),e.jsxs(j,{children:[e.jsx(p,{children:"Protein:"}),e.jsx(m,{children:n.protein})]}),e.jsxs(j,{children:[e.jsx(p,{children:"Fat:"}),e.jsx(m,{children:n.fat})]}),e.jsxs(j,{children:[e.jsx(p,{children:"Calories:"}),e.jsx(m,{children:n.calories})]}),e.jsx(z,{type:"button",onClick:()=>{l({id:n.id,diary:a})},children:e.jsx(u,{width:"20px",height:"20px",stroke:"var(--green-light)",children:e.jsx("use",{href:`${y}#trash`})})})]})]},o))}),!h&&e.jsx(H,{children:e.jsxs(de,{onClick:()=>d(!0),children:[e.jsx(u,{width:"16px",height:"16px",children:e.jsx("use",{href:`${y}#add`})}),e.jsx(xe,{children:"Add more"})]})}),h&&e.jsx(Ot,{setFormActive:d,setModalActive:r,type:a}),e.jsx(H,{})]})})})}function Ut({data:t,meals:r}){const[a,o]=f.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(wt,{children:[e.jsxs(yt,{children:[t.mealType==="breakfast"&&e.jsx("img",{srcSet:`${B} 1x, ${te} 2x`,src:B,alt:"Breakfast"}),t.mealType==="lunch"&&e.jsx("img",{srcSet:`${I} 1x, ${ie} 2x`,src:I,alt:"Lunch"}),t.mealType==="dinner"&&e.jsx("img",{srcSet:`${P} 1x, ${ne} 2x`,src:P,alt:"Dinner"}),t.mealType==="snack"&&e.jsx("img",{srcSet:`${E} 1x, ${re} 2x`,src:E,alt:"Snack"}),e.jsx(bt,{children:t.mealType})]}),r[`${t.mealType}`].length===0?e.jsxs(de,{onClick:()=>o({type:t.mealType,meals:r}),children:[e.jsx(u,{width:"16px",height:"16px",children:e.jsx("use",{href:`${y}#add`})}),e.jsx(xe,{children:"Record your meal"})]}):e.jsxs(le,{children:[e.jsxs(j,{children:[e.jsx(p,{children:"Carbonohidrates:"}),e.jsx(m,{children:t.carbohydrate})]}),e.jsxs(j,{children:[e.jsx(p,{children:"Protein:"}),e.jsx(m,{children:t.protein})]}),e.jsxs(j,{children:[e.jsx(p,{children:"Fat:"}),e.jsx(m,{children:t.fat})]}),e.jsx(z,{type:"button",onClick:()=>o({type:t.mealType,meals:r}),children:e.jsx(u,{width:"20px",height:"20px",stroke:"var(--green-light)",children:e.jsx("use",{href:`${y}#trash`})})})]})]}),e.jsx(Kt,{modalData:a,setModalData:o})]})}function Tt(){S();const{meals:t}=w(q),r=st(t);return e.jsxs(gt,{children:[e.jsxs(ft,{children:[e.jsx(D,{children:"Diary"}),e.jsx(L,{to:"/diary",children:e.jsx(M,{children:"See more"})})]}),e.jsx(jt,{children:r.map((a,o)=>e.jsx(Ut,{data:a,meals:t},o))})]})}function zt(){const t=w($),[r,a]=f.useState([]),o=ve(r,4);return f.useEffect(()=>{t&&Qe().then(s=>{a(s)}).catch(s=>console.log(s))},[t]),e.jsxs(Be,{children:[e.jsx(D,{children:"Recommended food"}),r.length===0?e.jsx(X,{}):e.jsx(Ie,{children:o.map(s=>e.jsxs(Pe,{children:[e.jsx("img",{src:s.img,alt:s.name,width:"46px"}),e.jsxs("div",{children:[e.jsx(Ee,{children:s.name}),e.jsxs(We,{children:[e.jsx(p,{children:s.amount}),e.jsxs(m,{children:[s.calories," calories"]})]})]})]},s._id))}),e.jsxs(L,{to:"/recommended-food",children:[e.jsx(M,{children:"See more"}),e.jsx(u,{width:"16px",height:"16px",children:e.jsx("use",{href:`${y}#arrow-right`})})]})]})}function Ht(){const t=S(),r=w($),{weight:a,goal:o}=w(O);f.useEffect(()=>{r&&t(Fe())},[r,t]),f.useEffect(()=>{r&&t(Ce())},[t]),f.useEffect(()=>{r&&t(Re())},[a,o]);const[s,x]=f.useState(!1);return s?document.body.style.overflow="hidden":document.body.style.overflow="auto",e.jsx(Ne,{children:e.jsxs(Se,{children:[e.jsxs(Ge,{children:[e.jsx(U,{children:"Today"}),e.jsxs(L,{to:"/dashboard",children:[e.jsx(M,{children:"On the way to the goal"}),e.jsx(u,{width:"16px",height:"16px",children:e.jsx("use",{href:`${y}#arrow-right`})})]})]}),e.jsxs(Oe,{children:[e.jsx(Te,{}),e.jsx(rt,{modalActive:s,setModalActive:x}),e.jsx(ut,{}),e.jsx(Tt,{}),e.jsx(zt,{})]})]})})}export{Ht as default};
