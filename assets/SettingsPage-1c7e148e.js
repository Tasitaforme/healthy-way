import{s as i,u as S,r as x,d as I,e as C,j as e,f as q,w as M,_ as w,x as D,C as N}from"./index-8bfa6acf.js";import{d as T,e as E,f as u,i as W,a as z,b as P,g as B,F as H}from"./Formik.styled-3475f2fe.js";const L=/^([A-Za-zА-Яа-яґҐЁёІіЇїЄє]+((['’ʼ \s-][A-Za-zА-Яа-яґҐЁёІіЇїЄє ])?[a-zA-Zа-яА-Я]*))*$/,Y=T().shape({name:E().required("Name is required").trim().matches(L,"Name may contain only letters, apostrophe, dash and spaces."),age:u().required("Age is required").positive("Age must be a positive number").integer("Age must be an integer number").min(14,"Age must be greater than or equal to 14"),height:u().required("Height is required").positive("Height must be a positive number").integer("Height must be an integer number").min(65,"Height must be greater than or equal to 65sm").max(250,"Height must be lower than or equal to 250sm"),weight:u().required("Weight is required").positive("Weight must be a positive number").integer("Weight must be an integer number").min(40,"Weight must be greater than or equal to 40kg").max(250,"Weight must be lower than or equal to 250kg")}),G=i(W)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 491px;
    column-gap: 60px;
    margin: 0 auto;
  }
`,s=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
`,m=i(z)`
  width: 100%;
  position: relative;
  display: block;
  border: 1px solid var(--grey-light);
  color: var(--white);

  &.input-error {
    border-color: var(--error-color);
  }

  &::placeholder {
    color: var(--white);
  }

  &:focus,
  &:active,
  &:hover {
    outline: none;
    border-color: var(--green-light);
  }

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,h=i(P)`
  margin: 0;

  @media screen and (min-width: 834px) {
    width: 200px;
  }
`,Z=i.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  & + label {
    color: #fff;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.43;
    cursor: pointer;
  }
`,_=i.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`,O=i.div`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  margin-right: 12px;
  overflow: hidden;
`,V=i.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,J=i.svg`
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  stroke: var(--green-light);
  fill: none;
`,K=i.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`,d=i.label`
  display: flex;
  align-items: center;
`,r=i(B)`
  display: none;
`,l=i.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid var(--grey-light);
  position: relative;
  margin-right: 8px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 6px;
    height: 6px;
    background-color: var(--green-light);
    border-radius: 50px;
    opacity: 0;
    transition: 250ms;
  }

  ${r}:checked + &::before {
    opacity: 1;
  }
`,c=i.span`
  display: inline-block;
  width: 100%;
`,j=i(c)`
  width: auto;
`,Q=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 834px) {
    width: 464px;
  }
`,X=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`,ee=i.button`
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--green-light);
  line-height: 1.43;
  color: var(--black-secondary);
  font-weight: 500;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,ie=i.button`
  line-height: 1.43;
  color: var(--grey-light);

  @media screen and (min-width: 834px) {
    width: 192px;
  }
`;function te(){const t=S(),[k,b]=x.useState(!1),[$,R]=x.useState(null),[A,y]=x.useState(),o=I(C),f={name:o.name,age:o.age,gender:o.gender,height:o.height,weight:o.weight,activityRatio:o.activityRatio.toString()},U=a=>{const n=a.target.files[0];if(!n)return;const g=URL.createObjectURL(n);R(n),y(g),b(!0)},v=async a=>{a.height=Number(a.height),a.weight=Number(a.weight),a.age=Number(a.age),a.activityRatio=Number(a.activityRatio);try{if(await t(M(a)),w.success("Your profile information has been successfully updated!"),k){const n=new FormData;n.append("avatar",$),await t(D(n))}}catch(n){w.error(`Something went wrong! ${n.message}`)}},F=a=>{a({values:f,isSubmitting:!1}),b(!1),y(null)};return e.jsx(H,{initialValues:f,validationSchema:Y,onSubmit:v,children:({errors:a,values:n,resetForm:g,touched:p})=>e.jsxs(G,{children:[e.jsxs(s,{children:[e.jsx("label",{children:"Your name"}),e.jsx(m,{name:"name",placeholder:"Enter your name",className:p.name?a.name?"input-error":"input-success":"input-normal"}),e.jsx(h,{name:"name",component:"p"})]}),e.jsxs(s,{children:[e.jsx("p",{children:"Your photo"}),e.jsx(Z,{accept:"image/*",id:"avatar",name:"avatar",type:"file",onChange:U}),e.jsxs(_,{htmlFor:"avatar",children:[e.jsx(O,{children:e.jsx(V,{src:A||o.avatarURL,alt:"userAvatar"})}),e.jsx(J,{children:e.jsx("use",{href:`${q}#download`})}),"Download new photo"]}),e.jsx(h,{name:"avatar",component:"div"})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"age",children:"Your age"}),e.jsx(m,{name:"age",placeholder:"Enter your age",className:p.age?a.age?"input-error":"input-success":"input-normal"}),e.jsx(h,{name:"age",component:"div"})]}),e.jsxs(s,{children:[e.jsx("div",{id:"my-gender-group",children:"Gender"}),e.jsxs(K,{role:"group","aria-labelledby":"my-gender-group",children:[e.jsxs(d,{children:[e.jsx(r,{type:"radio",name:"gender",value:"Male"}),e.jsx(l,{}),e.jsx(j,{children:"Male"})]}),e.jsxs(d,{children:[e.jsx(r,{type:"radio",name:"gender",value:"Female"}),e.jsx(l,{}),e.jsx(j,{children:"Female"})]})]})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"height",children:"Height"}),e.jsx(m,{name:"height",placeholder:"Enter your height",className:p.height?a.height?"input-error":"input-success":"input-normal"}),e.jsx(h,{name:"height",component:"div"})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"weight",children:"Weight"}),e.jsx(m,{name:"weight",placeholder:"Enter your weight",className:p.weight?a.weight?"input-error":"input-success":"input-normal"}),e.jsx(h,{name:"weight",component:"div"})]}),e.jsxs(s,{children:[e.jsx("div",{id:"my-activity-group",children:"Your activity"}),e.jsxs(Q,{role:"group","aria-labelledby":"my-activity-group",children:[e.jsxs(d,{children:[e.jsx(r,{type:"radio",name:"activityRatio",value:"1.2",checked:n.activityRatio==="1.2"}),e.jsx(l,{}),e.jsx(c,{children:"1.2 - if you do not have physical activity and sedentary work"})]}),e.jsxs(d,{children:[e.jsx(r,{type:"radio",name:"activityRatio",checked:n.activityRatio==="1.375",value:"1.375"}),e.jsx(l,{}),e.jsx(c,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]}),e.jsxs(d,{children:[e.jsx(r,{type:"radio",name:"activityRatio",checked:n.activityRatio==="1.55",value:"1.55"}),e.jsx(l,{}),e.jsx(c,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]}),e.jsxs(d,{children:[e.jsx(r,{type:"radio",name:"activityRatio",checked:n.activityRatio==="1.725",value:"1.725"}),e.jsx(l,{}),e.jsx(c,{children:"1.725 ​​- if you train fully 6-7 times a week"})]}),e.jsxs(d,{children:[e.jsx(r,{type:"radio",name:"activityRatio",checked:n.activityRatio==="1.9",value:"1.9"}),e.jsx(l,{}),e.jsx(c,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})]})]}),e.jsxs(X,{children:[e.jsx(ee,{type:"submit",onClick:()=>v(n),children:"Save"}),e.jsx(ie,{type:"button",onClick:()=>F(g),children:"Cancel"})]})]})})}const ae="/healthy-way/assets/profile-mob@1x-771a5e6d.png",ne="/healthy-way/assets/profile-mob@2x-0612e098.png",re="/healthy-way/assets/profile-tab@1x-3f1682b6.png",oe="/healthy-way/assets/profile-tab@2x-8263e9ab.png",se="/healthy-way/assets/profile-desk@1x-076f43bb.png",de="/healthy-way/assets/profile-desk@2x-9605a813.png",le=i(N)`
  padding-top: 16px;
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-bottom: 174px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    padding-bottom: 72px;
  }
`,ce=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    justify-content: space-evenly;
  }
`,he=i.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,pe=i.div`
  margin-top: 16px;
  margin-bottom: 24px;
  width: 100%;
  height: ${t=>t.$heightMob};
  background-image: ${t=>`url(${t.$imageMob1x})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${t=>`url(${t.$imageMob2x})`};
  }

  @media screen and (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    height: ${t=>t.$heightTab};
    background-image: ${t=>`url(${t.$imageTab1x})`};
    width: 380px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${t=>`url(${t.$imageTab2x})`};
    }
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
    height: ${t=>t.$heightDesk};
    background-image: ${t=>`url(${t.$imageDesk1x})`};
    width: 592px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${t=>`url(${t.$imageDesk2x})`};
    }
  }
`;function xe(){return e.jsx("main",{children:e.jsxs(le,{children:[e.jsx(he,{children:"Profile setting"}),e.jsxs(ce,{children:[e.jsx(pe,{$imageDesk1x:se,$imageDesk2x:de,$imageTab1x:re,$imageTab2x:oe,$imageMob1x:ae,$imageMob2x:ne,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"}),e.jsx("section",{children:e.jsx(te,{})})]})]})})}export{xe as default};
