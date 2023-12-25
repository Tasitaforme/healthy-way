import{s as i,u as v,r as g,B as I,j as e,f,d as L,k as S,L as q}from"./index-d20d7bb4.js";import{a as A,d as R,e as W,f as j,F as E,b as u}from"./Formik.styled-250139d1.js";import{b as N,l as D,d as T,a as $,M as z,c as P}from"./snack@2x-088e9822.js";const G=i.section`
  padding: 16px 10px 40px;

  @media (min-width: 768px) {
    padding: 24px 27px 40px;
  }
`,V=i.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  margin-bottom: 16px;
`,_=i.span`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0;
`;i.svg`
  width: 16px;
  height: 16px;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;const H=i.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`,J=i.ul`
  @media (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`,K=i.li`
  @media (min-width: 1200px) {
    width: calc((100% - 1 * 20px) / 2);
    margin-bottom: 0;
  }
`,k=i.img`
  width: 32px;
  height: 32px;
`,F=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,O=i.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`,M=i.h2`
  font-size: 18px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`,Q=i.ul`
  display: flex;
  gap: 20px;
  margin: 12px 0;
  @media (min-width: 768px) {
    margin-right: 74px;
  }
  @media (min-width: 1200px) {
    margin-right: 40px;
  }
`;i.li``;const U=i.div``,X=i.ul`
  background-color: var(--black-secondary);
  border-radius: 12px;
  padding: 16px 12px;
  margin-bottom: 24px;

  @media (min-width: 1200px) {
    margin-bottom: 0%;
  }
`,Y=i.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`,Z=i.button`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;i.svg`
  margin-right: 6px;
`;const ee=i.span`
  color: var(--green-light);
  cursor: pointer;
`,ie=i.svg`
  width: 16px;
  height: 16px;
  stroke: var(--grey-light);

  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
`,te=i.svg`
  width: 16px;
  height: 16px;
  stroke: var(--green-light);
`,re=i.div`
  width: 300px;
  height: 546px;
  background-color: var(--black-secondar);
  padding: 16px 12px;

  @media (min-width: 768px) {
    width: 708px;
    height: 408px;
    padding: 24px;
  }
`,ae=i.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;
`,ne=i(A)``,se=i.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
`,oe=i.div`
  display: flex;
  gap: 16px;
`,b=i.div`
  display: flex;
  flex-direction: column;
`,de=i(b)`
  @media (min-width: 768px) {
    width: 250px;
  }
`,le=i(b)`
  @media (min-width: 768px) {
    width: 100px;
  }
`,ce=i(b)`
  @media (min-width: 768px) {
    width: 86px;
  }
`,pe=i(b)`
  max-width: 110px;
  @media (min-width: 768px) {
    width: 61px;
  }
`,xe=i(b)`
  max-width: 110px;
  @media (min-width: 768px) {
    width: 78px;
  }
`,he=i.svg`
  width: 20px;
  height: 20px;
  stroke: var(--green-light);
  margin-top: 10px;
`,me=i.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-top: 40px;
`,ue=i.svg`
  width: 16px;
  height: 16px;
  stroke: var(--green-light);
`,ge=i.span`
  color: var(--green-light);
  cursor: pointer;
`,fe=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    margin-top: 70px;
  }
`,be=i.button`
  background-color: var(--green-light);
  border-radius: 12px;
  width: 100%;
  padding: 8px 0;
  margin-top: 40px;
  color: var(--black-secondary);

  @media (min-width: 768px) {
    width: 212px;
  }
`,je=i.button`
  color: var(--grey-light);
  padding: 8px 0;
  margin-top: 10px;

  @media (min-width: 768px) {
    width: 212px;
  }
`,ye=i.div`
  display: flex;
  align-items: center;
`,we=i.h4`
  font-size: 14px;
`,ve=i.svg`
  width: 16px;
  height: 16px;
  stroke: var(--grey-light);
`,ke=i.p`
  font-size: 14px;
  color: var(--grey-light);
  margin-left: 6px;
`,C={Breakfast:N,Lunch:D,Dinner:T,Snack:$},Fe=R().shape({name:W().required(),carbohydrate:j().required().positive("Carbonohidrates must be a positive number").min(100,"Carbonohidrates must be greater than or equal to 100").max(2e3,"Carbonohidrates must be lower than or equal to 2000"),protein:j().required().positive("Protein must be a positive number").min(100,"Protein must be greater than or equal to 100").max(2e3,"Protein must be lower than or equal to 2000"),fat:j().required().positive("Fat must be a positive number").min(100,"Fat must be greater than or equal to 100").max(2e3,"Fat must be lower than or equal to 2000"),calories:j().required().positive("Fat must be a positive number").min(100,"Fat must be greater than or equal to 100").max(2e3,"Fat must be lower than or equal to 2000")}),Me=({modalData:r,setModalData:a})=>{const h=v(),{type:n,name:s="",carbohydrate:l="",protein:o="",fat:m="",calories:c=""}=r,y=g.useCallback(async d=>{console.log(d);try{const t=await h(I({...d,diary:n}));a(!1),console.log("Res",t)}catch(t){console.log("ERR",t)}},[h,a,n]);return e.jsx(z,{modalActive:!!r,setModalActive:a,children:e.jsxs(re,{children:[e.jsx(ae,{children:"Record your meal"}),e.jsxs(F,{children:[e.jsx(k,{src:C[n],alt:"breakfast"}),e.jsx(M,{children:n})]}),e.jsx(E,{initialValues:{name:s,carbohydrate:l,protein:o,fat:m,calories:c},validationSchema:Fe,onSubmit:y,children:({errors:d,touched:t,isSubmitting:p,isValid:x,dirty:B})=>e.jsxs(ne,{children:[e.jsxs(se,{children:[e.jsx(de,{children:e.jsx(u,{type:"text",name:"name",placeholder:"The name of the product or dish",autoComplete:"off",className:t.name?d.name?"input-error":"input-success":"input-normal"})}),e.jsx(le,{children:e.jsx(u,{type:"number",name:"carbohydrate",placeholder:"Carbonoh.",autoComplete:"off",className:t.carbohydrate?d.carbohydrate?"input-error":"input-success":"input-normal"})}),e.jsx(ce,{children:e.jsx(u,{type:"number",name:"protein",placeholder:"Protein",autoComplete:"off",className:t.protein?d.protein?"input-error":"input-success":"input-normal"})}),e.jsxs(oe,{children:[e.jsx(pe,{children:e.jsx(u,{type:"number",name:"fat",placeholder:"Fat",autoComplete:"off",className:t.fat?d.fat?"input-error":"input-success":"input-normal"})}),e.jsx(xe,{children:e.jsx(u,{type:"number",name:"calories",placeholder:"Calories",autoComplete:"off",className:t.calories?d.calories?"input-error":"input-success":"input-normal"})}),e.jsx(he,{children:e.jsx("use",{href:`${f}#trash`})})]})]}),e.jsxs(me,{children:[e.jsx(ue,{children:e.jsx("use",{href:`${f}#add`})}),e.jsx(ge,{children:"Add more"})]}),e.jsxs(fe,{children:[e.jsx(be,{type:"submit",disabled:!x||p||!B||!t,children:"Confirm"}),e.jsx(je,{type:"button",onClick:()=>a(!1),children:"Cancel"})]})]})})]})})};function w(...r){const a={name:r.name,carbohydrate:r.carbohydrate,protein:r.protein,fat:r.fat};return e.jsxs(ye,{children:[e.jsx(we,{children:a.name}),e.jsx(ve,{children:e.jsx("use",{href:`${f}#edit`})}),e.jsx(ke,{children:"Edit"})]})}function Ce({data:r,type:a}){const[h,n]=g.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:r.map((s,l,o)=>e.jsxs(Y,{children:[e.jsx("p",{children:l+1}),s!=null&&s.id?e.jsx(w,{}):l===0||o[l-1].id?e.jsxs(Z,{onClick:()=>n({type:a}),children:[e.jsx(te,{children:e.jsx("use",{href:`${f}#add`})}),e.jsx(ee,{children:"Record your meal"})]}):e.jsx(w,{})]},(s==null?void 0:s.id)||l))}),e.jsx(Me,{modalData:h,setModalData:n})]})}function Se(){var l;const r=v(),a=L(P),h=((l=location==null?void 0:location.state)==null?void 0:l.from)??"/main",n=g.useRef(!1);g.useEffect(()=>{n.current||(r(S()),n.current=!0)},[r]);const s=g.useMemo(()=>{const{breakfast:o,snack:m,lunch:c,dinner:y}=a;return[{type:"Breakfast",data:o},{type:"Lunch",data:c},{type:"Dinner",data:y},{type:"Snack",data:m}].map(({type:d,data:t})=>({type:d,data:t.concat(Array(4).fill({})).slice(0,4),stats:{carbohydrate:t.reduce((p,{carbohydrate:x})=>p+x,0),protein:t.reduce((p,{protein:x})=>p+x,0),fat:t.reduce((p,{fat:x})=>p+x,0)}}))},[a]);return e.jsx(e.Fragment,{children:e.jsxs(G,{children:[e.jsx(V,{children:e.jsxs(_,{as:q,to:h,children:[e.jsx(ie,{children:e.jsx("use",{href:`${f}#arrow-back`})}),e.jsx(H,{children:"Diary"})]})}),e.jsx(J,{children:s.map(({type:o,data:m,stats:c})=>e.jsxs(K,{children:[e.jsxs(O,{children:[e.jsxs(F,{children:[e.jsx(k,{src:C[o],alt:"breakfast"}),e.jsx(M,{children:o})]}),e.jsxs(Q,{children:[e.jsxs("li",{children:["Carbonohidrates: ",e.jsx("span",{children:c.carbohydrate})]}),e.jsxs("li",{children:["Protein: ",e.jsx("span",{children:c.protein})]}),e.jsxs("li",{children:["Fat: ",e.jsx("span",{children:c.fat})]})]})]}),e.jsx(U,{children:e.jsx(Ce,{data:m,type:o,stats:c})})]},o))})]})})}export{Se as default};
