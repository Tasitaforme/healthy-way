import{s as i,u as S,r as x,d as C,e as I,j as e,f as q,t as D,_ as w,v as E,C as M}from"./index-d28cb229.js";import{d as N,e as T,f as u,i as W,b as P,c as z,g as B,F as H}from"./Formik.styled-d4687912.js";import{C as L,D as Y}from"./DeleteUser-d6f0c1b5.js";import"./SignInForm.styled-ab8bf87f.js";import"./SignInPage.styled-bf438acf.js";import"./Components.styled-f8098fdd.js";const G=/^([A-Za-zА-Яа-яґҐЁёІіЇїЄє]+((['’ʼ \s-][A-Za-zА-Яа-яґҐЁёІіЇїЄє ])?[a-zA-Zа-яА-Я]*))*$/,Z=N().shape({name:T().required("Name is required").trim().matches(G,"Name may contain only letters, apostrophe, dash and spaces."),age:u().required("Age is required").typeError("Age must be a number").positive("Age must be a positive number").integer("Age must be an integer number").min(14,"Age must be greater than or equal to 14").max(120,"Age must be lower than or equal to 120"),height:u().required("Height is required").typeError("Age must be a number").positive("Height must be a positive number").integer("Height must be an integer number").min(65,"Height must be greater than or equal to 65sm").max(250,"Height must be lower than or equal to 250sm"),weight:u().required("Weight is required").typeError("Age must be a number").positive("Weight must be a positive number").integer("Weight must be an integer number").min(40,"Weight must be greater than or equal to 40kg").max(250,"Weight must be lower than or equal to 250kg")}),_=i(W)`
  display: flex;
  flex-direction: column;
  margin-bottom: 52px;
  padding-bottom: 40px;

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
`,m=i(P)`
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
`,p=i(z)`
  margin: 0;

  @media screen and (min-width: 834px) {
    width: 200px;
  }
`,O=i.input`
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
`,V=i.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`,J=i.div`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  margin-right: 12px;
  overflow: hidden;
`,K=i.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Q=i.svg`
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  stroke: var(--green-light);
  fill: none;
`,X=i.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`,d=i.label`
  display: flex;
  align-items: center;
`,n=i(B)`
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

  ${n}:checked + &::before {
    opacity: 1;
  }
`,c=i.span`
  display: inline-block;
  width: 100%;
`,j=i(c)`
  width: auto;
`,ee=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 834px) {
    width: 464px;
  }
`,ie=i.div`
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
`,te=i.button`
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
`,ae=i.button`
  line-height: 1.43;
  color: var(--grey-light);

  @media screen and (min-width: 834px) {
    width: 192px;
  }
`;function re(){const t=S(),[k,b]=x.useState(!1),[$,A]=x.useState(null),[R,y]=x.useState(),o=C(I),f={name:o.name,age:o.age,gender:o.gender,height:o.height,weight:o.weight,activityRatio:o.activityRatio.toString()},U=a=>{const r=a.target.files[0];if(!r)return;const g=URL.createObjectURL(r);A(r),y(g),b(!0)},v=async a=>{a.height=Number(a.height),a.weight=Number(a.weight),a.age=Number(a.age),a.activityRatio=Number(a.activityRatio);try{if(await t(D(a)),w.success("Your profile information has been successfully updated!"),k){const r=new FormData;r.append("avatar",$),await t(E(r))}}catch(r){w.error(`Something went wrong! ${r.message}`)}},F=a=>{a({values:f,isSubmitting:!1}),b(!1),y(null)};return e.jsx(e.Fragment,{children:e.jsx(H,{initialValues:f,validationSchema:Z,onSubmit:v,children:({errors:a,values:r,resetForm:g,touched:h})=>e.jsxs(_,{children:[e.jsxs(s,{children:[e.jsx("label",{children:"Your name"}),e.jsx(m,{name:"name",placeholder:"Enter your name",className:h.name?a.name?"input-error":"input-success":"input-normal"}),e.jsx(p,{name:"name",component:"p"})]}),e.jsxs(s,{children:[e.jsx("p",{children:"Your photo"}),e.jsx(O,{accept:"image/*",id:"avatar",name:"avatar",type:"file",onChange:U}),e.jsxs(V,{htmlFor:"avatar",children:[e.jsx(J,{children:e.jsx(K,{src:R||o.avatarURL,alt:"userAvatar"})}),e.jsx(Q,{children:e.jsx("use",{href:`${q}#download`})}),"Download new photo"]}),e.jsx(p,{name:"avatar",component:"div"})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"age",children:"Your age"}),e.jsx(m,{name:"age",placeholder:"Enter your age",className:h.age?a.age?"input-error":"input-success":"input-normal"}),e.jsx(p,{name:"age",component:"div"})]}),e.jsxs(s,{children:[e.jsx("div",{id:"my-gender-group",children:"Gender"}),e.jsxs(X,{role:"group","aria-labelledby":"my-gender-group",children:[e.jsxs(d,{children:[e.jsx(n,{type:"radio",name:"gender",value:"Male"}),e.jsx(l,{}),e.jsx(j,{children:"Male"})]}),e.jsxs(d,{children:[e.jsx(n,{type:"radio",name:"gender",value:"Female"}),e.jsx(l,{}),e.jsx(j,{children:"Female"})]})]})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"height",children:"Height"}),e.jsx(m,{name:"height",placeholder:"Enter your height",className:h.height?a.height?"input-error":"input-success":"input-normal"}),e.jsx(p,{name:"height",component:"div"})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"weight",children:"Weight"}),e.jsx(m,{name:"weight",placeholder:"Enter your weight",className:h.weight?a.weight?"input-error":"input-success":"input-normal"}),e.jsx(p,{name:"weight",component:"div"})]}),e.jsxs(s,{children:[e.jsx("div",{id:"my-activity-group",children:"Your activity"}),e.jsxs(ee,{role:"group","aria-labelledby":"my-activity-group",children:[e.jsxs(d,{children:[e.jsx(n,{type:"radio",name:"activityRatio",value:"1.2",checked:r.activityRatio==="1.2"}),e.jsx(l,{}),e.jsx(c,{children:"1.2 - if you do not have physical activity and sedentary work"})]}),e.jsxs(d,{children:[e.jsx(n,{type:"radio",name:"activityRatio",checked:r.activityRatio==="1.375",value:"1.375"}),e.jsx(l,{}),e.jsx(c,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]}),e.jsxs(d,{children:[e.jsx(n,{type:"radio",name:"activityRatio",checked:r.activityRatio==="1.55",value:"1.55"}),e.jsx(l,{}),e.jsx(c,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]}),e.jsxs(d,{children:[e.jsx(n,{type:"radio",name:"activityRatio",checked:r.activityRatio==="1.725",value:"1.725"}),e.jsx(l,{}),e.jsx(c,{children:"1.725 ​​- if you train fully 6-7 times a week"})]}),e.jsxs(d,{children:[e.jsx(n,{type:"radio",name:"activityRatio",checked:r.activityRatio==="1.9",value:"1.9"}),e.jsx(l,{}),e.jsx(c,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})]})]}),e.jsxs(ie,{children:[e.jsx(te,{type:"submit",onClick:()=>v(r),children:"Save"}),e.jsx(ae,{type:"button",onClick:()=>F(g),children:"Cancel"})]})]})})})}const ne="/healthy-way/assets/profile-mob@1x-771a5e6d.png",oe="/healthy-way/assets/profile-mob@2x-0612e098.png",se="/healthy-way/assets/profile-tab@1x-3f1682b6.png",de="/healthy-way/assets/profile-tab@2x-8263e9ab.png",le="/healthy-way/assets/profile-desk@1x-076f43bb.png",ce="/healthy-way/assets/profile-desk@2x-9605a813.png",pe=i(M)`
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
`,he=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    justify-content: space-evenly;
  }
`,me=i.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,ge=i.div`
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
`,xe=i.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;function je(){return e.jsx("main",{children:e.jsxs(pe,{children:[e.jsx(me,{children:"Profile setting"}),e.jsxs(he,{children:[e.jsx(ge,{$imageDesk1x:le,$imageDesk2x:ce,$imageTab1x:se,$imageTab2x:de,$imageMob1x:ne,$imageMob2x:oe,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"}),e.jsx("section",{children:e.jsx(re,{})})]}),e.jsxs(xe,{children:[e.jsx(L,{}),e.jsx(Y,{})]})]})})}export{je as default};
