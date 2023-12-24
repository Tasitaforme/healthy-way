import{s as i,d as u,e as E,j as e,f as b,r as j,g as te,u as v,h as re,i as se,_ as y,k as ne,m as ae,o as z,p as ie,q as oe,t as ce,C as de,v as le,n as K}from"./index-4d5c998f.js";import{a as C,W as O,I as w,b as S,S as U,c as F,d as m,B as k,H as Z,e as f,f as M,g as xe,h as V,i as he,j as G,k as N}from"./Components.styled-ef638a6f.js";import{c as pe,h as me,a as Q,d as ue,f as ge,F as H,b as B}from"./Formik.styled-93b49657.js";import{C as J,A as Y,D as X}from"./index-e72ee734.js";import{b as fe,l as je,d as we,s as ye}from"./snack@2x-c4dbc989.js";import{g as be,a as Ae,R as Fe,F as Ce,b as Re,c as Se,d as ke}from"./getRecommendedFood-38966d5d.js";import{c as De,S as ve}from"./SignInForm.styled-19859ee7.js";import"./SignInPage.styled-78ef24cc.js";const Pe=i.div`
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
`,Qe=i.ul`
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
`,Be=i.li`
  @media screen and (min-width: 834px) {
    min-width: 380px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 328px;
  }
`,Ie=i.ul`
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
`;function Ee(){const{baseWater:t,BMR:r}=u(E),o=t!==null?t*1e3:0;return e.jsxs(Be,{children:[e.jsx(C,{children:"Daily goal"}),e.jsx(O,{children:e.jsxs(Ie,{children:[e.jsxs("li",{children:[e.jsx(w,{width:"80px",height:"80px",stroke:"var(--green)",children:e.jsx("use",{href:`${b}#bubble`})}),e.jsxs("div",{children:[e.jsx(S,{color:"var(--grey-light)",children:"Calories"}),e.jsx(U,{children:r||0})]})]}),e.jsxs("li",{children:[e.jsx(w,{width:"80px",height:"80px",stroke:"var(--violet)",children:e.jsx("use",{href:`${b}#water`})}),e.jsxs("div",{children:[e.jsx(S,{color:"var(--grey-light)",children:"Water"}),e.jsxs(F,{children:[e.jsx(U,{children:o||0}),e.jsx(m,{color:"var(--grey-light)",children:"ml"})]})]})]})]})})]})}const Oe=i.li`
  @media screen and (min-width: 834px) {
    min-width: 380px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 444px;
  }
`,Ge=i(O)`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 20px;

  @media screen and (min-width: 834px) {
    column-gap: 40px;
  }
`,Ne=i(S)`
  margin-top: 13px;
`,Ke=i.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 12px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 20px;
  }
`,Ue=i.div`
  width: 80px;
  height: 192px;
  padding: 8px;
  border-radius: 20px;
  background-color: var(--black-primary);
  border: 1px solid var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,We=i.p`
  position: absolute;
  top: ${t=>t.$top};
  left: 50%;
  transform: translateX(-50%);

  color: ${t=>t.$color};

  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.38;
`,Te=i.div`
  position: relative;

  background-color: var(--violet);
  border-radius: 20px;
  height: ${t=>t.height||"5%"};
`,qe=i.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  & > button:nth-child(1) {
    align-self: flex-end;
  }
`,Le=i.div`
  margin: 16px 12px 22px;

  @media screen and (min-width: 400px) {
    margin: 24px 40px;
    max-width: 338px;
  }
`,ze=i(k)`
  background-color: transparent;
  color: var(--grey-light);
  width: 100%;
  margin-top: 8px;
  padding-bottom: 0;
  &:hover {
    box-shadow: none;
  }
`,Ze=i(pe)`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`,Me=i(me)`
  margin-top: 24px;
`,Ve=i(Q)`
  & + p {
    margin-top: 12px;
  }
  & + button {
    margin-top: 32px;
  }
`,He=i(k)`
  width: 100%;
`,Je=ue().shape({water:ge().min(100,"A quantity of water must be at least 100 ml").max(5e3,"A quantity of water must be at least 5000 ml").required("A quantity of water is required").typeError("A quantity must be a number")});function Ye({handleUpdate:t,setModalActive:r}){const o=n=>{t(n)};return e.jsxs(Le,{children:[e.jsx(Z,{children:"Add water intake"}),e.jsx(H,{initialValues:{water:""},validationSchema:Je,onSubmit:o,children:({errors:n,touched:s,isSubmitting:d,isValid:x,dirty:p})=>e.jsxs(Ze,{children:[e.jsx(Me,{children:e.jsx(f,{children:"How much water"})}),e.jsx(Ve,{type:"text",name:"water",placeholder:"Enter milliliters",autoComplete:"off",className:s.water?n.water?"input-error":"input-success":"input-normal"}),e.jsx(B,{component:"p",name:"water"}),e.jsx(He,{type:"submit",disabled:!x||d||!p,children:e.jsx(M,{children:"Confirm"})})]})}),e.jsx(ze,{type:"button",onClick:()=>r(!1),children:e.jsx(xe,{children:"Cancel"})})]})}const Xe=i.div`
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
`,$e=i.div`
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
`,_e=document.querySelector("#root_modal");function et({modalActive:t,setModalActive:r,children:o}){return t?document.body.style.overflow="hidden":document.body.style.overflow="auto",j.useEffect(()=>{const n=s=>{s.code==="Escape"&&r(!1)};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[r]),te.createPortal(e.jsx(Xe,{className:t?"active":"",onClick:()=>r(!1),children:e.jsx($e,{className:t?"active":"",onClick:n=>n.stopPropagation(),children:o})}),_e)}const $=t=>t.water;function tt({modalActive:t,setModalActive:r}){const o=v(),{water:n=0,error:s}=u($),d=u(re),x=d!==null?d*1e3:0,p=x-n,l=Math.max(0,p),a=Math.round(n*100/x),c=async g=>{r(!1);try{await o(se({water:+g.water})).unwrap(),y.success("Added to the total amount of water drunk for today!")}catch(A){s&&y.error(`${s}`),y.error(`${A}`)}},h=async()=>{try{await o(ne()).unwrap(),y.success("You have successfully remove daily water!")}catch(g){y.error(`${g}`)}};return e.jsxs(Oe,{children:[e.jsx(C,{children:"Water"}),e.jsxs(Ge,{children:[e.jsx(Ue,{children:e.jsx(Te,{height:`${a}%`,children:e.jsxs(We,{$color:a<84?"var(--violet)":"var(--black-primary)",$top:a<84?"-28px":"28px",children:[a,"%"]})})}),e.jsxs(qe,{children:[e.jsx(V,{type:"button",onClick:()=>h(),children:e.jsx(w,{width:"20px",height:"20px",stroke:"var(--green-light)",children:e.jsx("use",{href:`${b}#trash`})})}),e.jsx(Ne,{children:"Water consumption"}),e.jsxs(Ke,{children:[e.jsxs(F,{children:[e.jsx(he,{children:n||0}),e.jsx(m,{color:"var(--grey-light)",children:"ml"})]}),e.jsxs(F,{children:[e.jsx(m,{children:"left:"}),e.jsx(f,{children:l||0}),e.jsx(m,{color:"var(--grey-light)",children:"ml"})]})]}),e.jsxs(k,{type:"button",onClick:()=>r(!0),children:[e.jsx(w,{width:"16px",height:"16px",children:e.jsx("use",{href:`${b}#add`})}),e.jsx(M,{children:"Add water intake"})]})]})]}),t&&e.jsx(et,{modalActive:t,setModalActive:r,children:e.jsx(Ye,{handleUpdate:c,setModalActive:r})})]})}const _=t=>t.diary,rt=t=>{function r(n){const s={calories:0,carbohydrate:0,protein:0,fat:0};return n.forEach(({calories:d,carbohydrate:x,protein:p,fat:l})=>{s.calories+=d,s.carbohydrate+=x,s.protein+=p,s.fat+=l}),{calories:s.calories,carbohydrate:s.carbohydrate,protein:s.protein,fat:s.fat}}return Object.keys(t).map(n=>({mealType:n,...r(t[n])}))},st=t=>{const r={calories:0,carbohydrate:0,protein:0,fat:0};return Object.values(t).forEach(o=>{o.forEach(({calories:n,carbohydrate:s,protein:d,fat:x})=>{r.calories+=n,r.carbohydrate+=s,r.protein+=d,r.fat+=x})}),r},nt=i.li`
  min-width: 100%;
  @media screen and (min-width: 1440px) {
    min-width: 560px;
  }
`,at=i(O)`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 40px;
    padding: 36px 40px;
  }
`,it=i.ul``;J.register(Y);const ot=({calories:t,baseCalories:r})=>{const o=j.useMemo(()=>t>=r?100:Math.round(t/r*100),[t,r]),n=t>=r?"red":"rgba(69, 255, 188, 1)",s=t>=r?[0]:[50],d={datasets:[{data:[o,100-o],backgroundColor:[n,"rgba(41, 41, 40, 1)"],borderColor:["rgba(69, 255, 188, 0)"],borderRadius:s,cutout:"80%"}]},x={id:"textCenter",beforeDatasetsDraw(l){const{ctx:a}=l,c=l.getDatasetMeta(0).data[0].x,h=l.getDatasetMeta(0).data[0].y;a.save(),a.font="32px Poppins",a.fillStyle="#ffffff",a.textAlign="center",a.textBaseline="middle",a.fillText(t,c,h-12),a.font="14px sans-serif",a.fillStyle="#B6B6B6",a.fillText("calories",c,h+15)}},p={id:"backgroundCircle",beforeDatasetsDraw(l){const{ctx:a}=l;a.save();const c=l.getDatasetMeta(0).data[0].x,h=l.getDatasetMeta(0).data[0].y,g=l.getDatasetMeta(0).data[0].innerRadius,A=l.getDatasetMeta(0).data[0].outerRadius,R=A-g,D=Math.PI/180;a.beginPath(),a.lineWidth=R,a.strokeStyle="rgba(41, 41, 40, 1)",a.arc(c,h,A-R/2,0,D*360,!1),a.stroke()}};return e.jsx("div",{className:"doughnut",style:{height:168,width:168},children:e.jsx(X,{plugins:[x,p],data:d})})},ct=ot,I=i.li`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
`,dt=i.ul`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
`,lt=i(I)`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;J.register(Y);const xt=({title:t,arcColor:r,nutrient:o,baseNutrient:n=0})=>{const s=j.useMemo(()=>o>=n?100:Math.round(o/n*100),[n,o]),d=o>=n?[0]:[50],x={datasets:[{data:[s,100-s],backgroundColor:[r,"rgba(41, 41, 40, 1)"],borderColor:["rgba(69, 255, 188, 0)"],borderRadius:d,cutout:"80%"}]},p={id:"textCenter",beforeDatasetsDraw(a){const{ctx:c}=a,h=a.getDatasetMeta(0).data[0].x,g=a.getDatasetMeta(0).data[0].y;c.save(),c.font="14px Poppins",c.fillStyle="#B6B6B6",c.textAlign="center",c.textBaseline="middle",c.fillText(`${s}%`,h,g)}},l={id:"backgroundCircle",beforeDatasetsDraw(a){const{ctx:c}=a;c.save();const h=a.getDatasetMeta(0).data[0].x,g=a.getDatasetMeta(0).data[0].y,A=a.getDatasetMeta(0).data[0].innerRadius,R=a.getDatasetMeta(0).data[0].outerRadius,D=R-A,ee=Math.PI/180;c.beginPath(),c.lineWidth=D,c.strokeStyle="rgba(41, 41, 40, 1)",c.arc(h,g,R-D/2,0,ee*360,!1),c.stroke()}};return e.jsxs(lt,{children:[e.jsx("div",{className:"doughnut",style:{height:48,width:48},children:e.jsx(X,{plugins:[p,l],data:x})}),e.jsxs("div",{children:[e.jsx(S,{children:t}),e.jsxs(dt,{children:[e.jsxs(I,{children:[e.jsx(m,{children:"Goal:"}),e.jsx(f,{children:n||0})]}),e.jsxs(I,{children:[e.jsx(m,{children:"left:"}),e.jsx(f,{children:o>=n?0:n-o})]})]})]})]})},P=xt;function ht(){const t=v(),{fat:r,protein:o,carbohydrate:n,BMR:s}=u(E),{meals:d,isLoading:x}=u(_),{fat:p,protein:l,carbohydrate:a,calories:c}=st(d);j.useEffect(()=>{t(ae()).unwrap()},[p,l,a,c]);const h=["Carbonohidrates","Protein","Fat"];return e.jsxs(nt,{children:[e.jsx(C,{children:"Food"}),!x&&e.jsxs(at,{children:[e.jsx(ct,{calories:c,baseCalories:s}),e.jsxs(it,{children:[e.jsx(P,{title:h[0],arcColor:"#FFC4F7",nutrient:a,baseNutrient:n}),e.jsx(P,{title:h[1],arcColor:"#FFF3B7",nutrient:l,baseNutrient:o}),e.jsx(P,{title:h[2],arcColor:"#B6B6B6",nutrient:p,baseNutrient:r})]})]})]})}const pt=i.li`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 558px;
  }
`,mt=i.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 16px;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 16px;
`;i(w)`
  width: 36px;
  height: 36px;
  /* fill: none;
  stroke: none; */
  display: inline-block;

  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;const ut=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`,W="data:image/png;base64,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",T="data:image/png;base64,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",q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAB19JREFUeNq1mGlsVFUYhvllYkRR0IqtwIAxiIbwRwUVBVc0mBg1rjWCKLjgAgJ/2DeBtpYCgbCUrbK1wEChSim0HQpdWbpNl2mncDtbZzoznU4phJ+v5z1ze3PlzpQ2SJMvd3rvzDnPfd/vO9uA/v7dunXLdOPGjd9u3ry5R1wVq7Ojs7TZDwY/i3tV4tlxcZ3W2dlpGnCv/q5fvz5ddGLJrfUiKU8RcQ0/Zdmw8ESL/H9bkRPbRSTureczeY/f5W8I97+BdHd3T3b6w4roRHRux6GLHqFGAPWuEDuLFnzOEEA+Asor1bwrMCH3w6KBtEMX3XqQmBD1VywMw31PsIu/lW1sO+8A22Tb/YUxMReEKqIRpwbSG8ypg8lwtzb1+j3ayjapFvvoMwwtotTbixy9WhMOh+H1OCRMucWMjo4O3tOed4f9CLhtCAXcOrXc+Eq0zT7YV19sIoyU2B3sMkCI5EYwGITf75cAFYVmCaTYrZFn/jZ4HVa01p5CyyUzGksPIeBp1rfBl5RQdKFX++gvJVVhDCCEEA1Af78geytOH96IcMiPtuYStFw2o+HCX7halYs2pRo+rydG4vt77EuLWdbbihyEMdhEGwhDKP195gzVKcvdBZtQwmrZjUun0xH0Kfrv8bdsw5DszKlMkfCs5GjqKIRhEkeBifqWjZXnUFmwW8AcxJW8bagqMuuf3xGKxcI+mU8GdThWzM6yGRpqb2+P2kFXZxC2ssPSnpJjqWi8co73e41AIECVDVCqddP06liYyBwvdF+OqYzDegFVuVs0mH/2r490GPYiu+IA6lorY0GxEKKqRAatzDnEq7lzR6vartaitvgkqvPTZWSk/ITTWZu053uyk1BSsMughBosCsMz5hEd4jwp7VIrK6pV4VAQSk2R1oirqQr1JUelOnkZy3Bkx2Ic3bEUXncrfNfqsHLrNFwoPqDZyt/HVMlo2xzOVcdFdRmAONa4Gstx8WgKavIjHXhaatDucaAkO1UCZW6cK6ssZ99a7E2dh4tHkmF32XAp56Ao+zKUHViB0oOr+DK9AtEZAnEFwfypuj1/aFdrfQWKMxbDfrkA3RzwfC7YirNRm78PRUeSJFBhZjLOZqbgRMYf2DT3M8wZm4AF40bil1FDsPL152DZPgeVp3YaC6Kri6G/11NQygCrM9RJdeihlsyeVlSYUxFoc0SS1edBXeEhCZezPBEZsyajaPdC5O1ZiJ3zP8Wspx4lhBYzhj8ir3mbF8HnVvqU3GQgy4BSewBUSJ/QLZWFzJWITc3VcDZUoDY3XUwFeTjw5ThsfseEtDeGR65vDseqlxIwf2wcPnp8IKYNexgfiut3AmrR+NFwNdv6DMRcigpUe2YvHPXlCPndcNur0XAuC/WWLHjsNdj+4bNYNn4oVr/8hIRKUSP19eGYIWBmmQZrSn0vPi+dOM4ApVTmo/xwMtvW7jGHCCQt0y2i1OS1oixzDZrKT8Gn1OHKyS1oKs2Bv6kaaW+bsFLAUJ1Nb0mVhEJDsXbiE/g8fqCEmi7iGxHfivhBhWp3uyLqV/yNy6K9uvPH4PdodsqVBVl0U4YD+qQLhUJa6XqvNcjELkz9nQBUhFctNgjbUiYPw+zRg/GjqhCV+l6nls/lhL0sB9ZzR+BzNsOj/Fe1RHX25zi0l3JFKXuD70GHHRunjqFVMtZNjCi18rVhEdBJT2KmKZLQs0dKGC1sxWYBcxSdoaCwsAahgPf2suckm02F5qgL9mhJZ4gLGxfIzpe8EIfFzz+G5ROGIvm1BE25Jc/HicQehC/jH0KiiJkjHuFQIEb4uoji4RB8Hmfs+YxThzqx8oF+/WNY+zBa8rPUPIpnhUmQJAHEpF4+Pg5/CutmjRqE7wRIj33rPn5PP8YZxiBOXWQgiza50jJSxlLJ294Kd9ABp/Uytr5nkqokic6pijoEqIk+At+OfAAzRdl/nfAgJg26DxZzltaOBmPMH4s22+vmMy6cDMtVfnYF7TCXb0GNvQjpU0dh3rghWDHhcWnb0hce04DSpozG9BED8f6Q+7Flwa/wtXl6zUsqwzBskbhIEkCGXOIbcdZv7/ChtPEsym15MK+ej81TTNjzwdMSYu2rCVjzSjwWvzxSjNoD8fPYeOxPSzGoHU0dtZiUqBvCTG3/5IwKpb+39pO3sfzFOGx49xkxSg/G7KcfxDemBzBjzFCcSU+7I4xbLmEd7EunjhFqQ8S6Fn2C6yXXlqGXCvKw8NUxWDRpDFZPnYBlk5/F+i+mQLE16C2PWa18eW632eedtkFV3KIYF/uaWgQz7MF0EBxU+TzmIo3tqomssM8+bRQJRaUy9ctaIxxLlQBa3AZpsInKJ+o2iv3ZSmsHDLwa1OpnEIQ5Q5voQh9gjPbRX+6dCKWumQjWXxCGdmDBNtn23Z4LKYThkKAqRiu5+6QNt+VHh3YUo56cUBVpESv5HhxY+SQQlVPPAHiVoRZDz4EWoe7qwKrP+UU49diuisd4PbbwM9VUj/t+E9uafh/p/Qu8xs54telpQQAAAABJRU5ErkJggg==",L="data:image/png;base64,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",gt=i.li`
  display: flex;
  flex-direction: column;
  row-gap: 28px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
  }
`,ft=i.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
  justify-content: flex-start;
  margin-right: 8px;
`,jt=i(S)`
  text-transform: capitalize;
  width: 100px;
`,wt=i.div`
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
`;function yt({data:t,meals:r}){return e.jsxs(gt,{children:[e.jsxs(ft,{children:[t.mealType==="breakfast"&&e.jsx("img",{srcSet:`${W} 1x, ${fe} 2x`,src:W,alt:"Breakfast"}),t.mealType==="lunch"&&e.jsx("img",{srcSet:`${T} 1x, ${je} 2x`,src:T,alt:"Lunch"}),t.mealType==="dinner"&&e.jsx("img",{srcSet:`${q} 1x, ${we} 2x`,src:q,alt:"Dinner"}),t.mealType==="snack"&&e.jsx("img",{srcSet:`${L} 1x, ${ye} 2x`,src:L,alt:"Snack"}),e.jsx(jt,{children:t.mealType})]}),r[`${t.mealType}`]==[]?e.jsx("div",{children:e.jsx("p",{children:"Record your meal"})}):e.jsxs(wt,{children:[e.jsxs(F,{children:[e.jsx(m,{children:"Carbonohidrates:"}),e.jsx(f,{children:t.carbohydrate})]}),e.jsxs(F,{children:[e.jsx(m,{children:"Protein:"}),e.jsx(f,{children:t.protein})]}),e.jsxs(F,{children:[e.jsx(m,{children:"Fat:"}),e.jsx(f,{children:t.fat})]}),e.jsx(V,{type:"button",onClick:()=>console.log("ТУУУ"),children:e.jsx(w,{width:"20px",height:"20px",stroke:"var(--green-light)",children:e.jsx("use",{href:`${b}#trash`})})})]})]})}function bt(){v();const{meals:t,firstLoad:r}=u(_),o=rt(t);return e.jsxs(pt,{children:[e.jsxs(mt,{children:[e.jsx(C,{children:"Diary"}),e.jsx(G,{to:"/diary",children:e.jsx(N,{children:"See more"})})]}),e.jsx(ut,{children:o.map((n,s)=>e.jsx(yt,{data:n,meals:t},s))})]})}function At(){const t=u(z),[r,o]=j.useState([]),n=be(r,4);return j.useEffect(()=>{t&&Ae().then(s=>{o(s)}).catch(s=>console.log(s))},[t]),e.jsxs(Fe,{children:[e.jsx(C,{children:"Recommended food"}),r.length===0?e.jsx(ie,{}):e.jsx(Ce,{children:n.map(s=>e.jsxs(Re,{children:[e.jsx("img",{src:s.img,alt:s.name,width:"46px"}),e.jsxs("div",{children:[e.jsx(Se,{children:s.name}),e.jsxs(ke,{children:[e.jsx(m,{children:s.amount}),e.jsxs(f,{children:[s.calories," calories"]})]})]})]},s._id))}),e.jsxs(G,{to:"/recommended-food",children:[e.jsx(N,{children:"See more"}),e.jsx(w,{width:"16px",height:"16px",children:e.jsx("use",{href:`${b}#arrow-right`})})]})]})}const Ft=async t=>{try{const{data:r}=await oe.put("/api/auth/change-password",t);return r}catch(r){return r}};function Ct(){const{email:t}=u(E),r={password:"",newPassword:""},o=async(n,s)=>{try{await Ft({email:t,...n}),y.success("Your password has been successfully changed!")}catch(d){y.error(`${d}`)}s.resetForm()};return e.jsxs("section",{style:{paddingTop:"24px",paddingBottom:"24px"},children:[e.jsx(C,{style:{marginBottom:"12px"},children:"Change password"}),e.jsx(H,{initialValues:r,validationSchema:De,onSubmit:o,children:({errors:n,touched:s,isSubmitting:d,isValid:x})=>e.jsxs(ve,{children:[e.jsx(Q,{type:"password",name:"password",placeholder:"Password",autoComplete:"off",className:s.quantity?n.quantity?"input-error":"input-success":"input-normal"}),e.jsx(B,{component:"p",name:"password"}),e.jsx(Q,{type:"password",name:"newPassword",placeholder:"New password",autoComplete:"off",className:s.quantity?n.quantity?"input-error":"input-success":"input-normal"}),e.jsx(B,{component:"p",name:"newPassword"}),e.jsx(k,{type:"submit",disabled:!x||d,children:"Update Password"})]})})]})}function It(){const t=v(),r=u(z),{water:o}=u($);j.useEffect(()=>{r&&t(ce())},[r,o]);const[n,s]=j.useState(!1);n?document.body.style.overflow="hidden":document.body.style.overflow="auto";const d=async()=>{try{await t(le()).unwrap(),K.success("You have successfully logged out!")}catch{K.error("Something went wrong !")}};return e.jsx("main",{children:e.jsxs(de,{children:[e.jsxs(Pe,{children:[e.jsx(Z,{children:"Today"}),e.jsxs(G,{to:"/dashboard",children:[e.jsx(N,{children:"On the way to the goal"}),e.jsx(w,{width:"16px",height:"16px",children:e.jsx("use",{href:`${b}#arrow-right`})})]})]}),e.jsxs(Qe,{children:[e.jsx(Ee,{}),e.jsx(tt,{modalActive:n,setModalActive:s}),e.jsx(ht,{}),e.jsx(bt,{}),e.jsx(At,{})]}),e.jsx(k,{type:"submit",onClick:()=>d(),children:"Sign out"}),e.jsx(Ct,{})]})})}export{It as default};
