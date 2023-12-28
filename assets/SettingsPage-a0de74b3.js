import{c as E,b as M,d as $,s as i,H as W,h as v,g as j,f as z,u as R,r as S,o as P,p as C,j as e,F,a as H,I as Y,_ as g,J as L,C as G,K as V,i as Z,M as _}from"./index-600d6b10.js";import{d as O,S as I,e as J}from"./SignInForm.styled-5367785f.js";import{a as D,B as N,d as K}from"./Components.styled-5ea00774.js";import"./SignInPage.styled-0c136cc2.js";const Q=/^([A-Za-zА-Яа-яґҐЁёІіЇїЄє]+((['’ʼ \s-][A-Za-zА-Яа-яґҐЁёІіЇїЄє ])?[a-zA-Zа-яА-Я]*))*$/,X=E().shape({name:M().required("Name is required").trim().matches(Q,"Name may contain only letters, apostrophe, dash and spaces."),age:$().required("Age is required").typeError("Age must be a number").positive("Age must be a positive number").integer("Age must be an integer number").min(14,"Age must be greater than or equal to 14").max(120,"Age must be lower than or equal to 120"),height:$().required("Height is required").typeError("Age must be a number").positive("Height must be a positive number").integer("Height must be an integer number").min(65,"Height must be greater than or equal to 65sm").max(250,"Height must be lower than or equal to 250sm"),weight:$().required("Weight is required").typeError("Age must be a number").positive("Weight must be a positive number").integer("Weight must be an integer number").min(40,"Weight must be greater than or equal to 40kg").max(250,"Weight must be lower than or equal to 250kg")}),ee=i(W)`
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
`,p=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
`,f=i(v)`
  width: 100%;
  position: relative;
  display: block;
  border: 1px solid var(--grey-light);
  color: var(--white);
  cursor: pointer;

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
`,y=i(j)`
  margin: 0;

  @media screen and (min-width: 834px) {
    width: 200px;
  }
`,te=i.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  cursor: pointer;

  & + label {
    color: #fff;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.43;
    cursor: pointer;
  }
`,ie=i.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`,ae=i.div`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  margin-right: 12px;
  overflow: hidden;
`,re=i.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ne=i.svg`
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  stroke: var(--green-light);
  fill: none;
`,se=i.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`,h=i.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`,c=i(z)`
  display: none;
`,m=i.span`
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

  ${c}:checked + &::before {
    opacity: 1;
  }
`,w=i.span`
  display: inline-block;
  width: 100%;
`,A=i(w)`
  width: auto;
`,oe=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 834px) {
    width: 464px;
  }
`,de=i.div`
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
`,ce=i.button`
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--green-light);
  line-height: 1.43;
  color: var(--black-secondary);
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow var(--transition-dur-and-fun);

  &:hover {
    box-shadow: var(--box-shadow);
  }

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,le=i.button`
  line-height: 1.43;
  color: var(--grey-light);
  cursor: pointer;
  border-radius: 12px;
  transition: color var(--transition-dur-and-fun);

  &:hover {
    color: var(--green-light);
  }

  @media screen and (min-width: 834px) {
    width: 212px;
  }

  @media screen and (min-width: 834px) {
    width: 192px;
  }
`;function pe(){const t=R(),[d,x]=S.useState(!1),[s,o]=S.useState(null),[r,u]=S.useState(),l=P(C),U={name:l.name,age:l.age,gender:l.gender,height:l.height,weight:l.weight,activityRatio:l.activityRatio.toString()},T=a=>{const n=a.target.files[0];if(!n)return;const k=URL.createObjectURL(n);o(n),u(k),x(!0)},q=async a=>{a.height=Number(a.height),a.weight=Number(a.weight),a.age=Number(a.age),a.activityRatio=Number(a.activityRatio);try{if(await t(Y(a)),g.success("Your profile information has been successfully updated!"),d){const n=new FormData;n.append("avatar",s),await t(L(n))}}catch(n){g.error(`Something went wrong! ${n.message}`)}},B=a=>{a({values:U,isSubmitting:!1}),x(!1),u(null)};return e.jsx(e.Fragment,{children:e.jsx(F,{initialValues:U,validationSchema:X,onSubmit:q,children:({errors:a,values:n,resetForm:k,touched:b})=>e.jsxs(ee,{children:[e.jsxs(p,{children:[e.jsx("label",{children:"Your name"}),e.jsx(f,{name:"name",placeholder:"Enter your name",className:b.name?a.name?"input-error":"input-success":"input-normal"}),e.jsx(y,{name:"name",component:"p"})]}),e.jsxs(p,{children:[e.jsx("p",{children:"Your photo"}),e.jsx(te,{accept:"image/*",id:"avatar",name:"avatar",type:"file",onChange:T}),e.jsxs(ie,{htmlFor:"avatar",children:[e.jsx(ae,{children:e.jsx(re,{src:r||l.avatarURL,alt:"userAvatar"})}),e.jsx(ne,{children:e.jsx("use",{href:`${H}#download`})}),"Download new photo"]}),e.jsx(y,{name:"avatar",component:"div"})]}),e.jsxs(p,{children:[e.jsx("label",{htmlFor:"age",children:"Your age"}),e.jsx(f,{name:"age",placeholder:"Enter your age",className:b.age?a.age?"input-error":"input-success":"input-normal"}),e.jsx(y,{name:"age",component:"div"})]}),e.jsxs(p,{children:[e.jsx("div",{id:"my-gender-group",children:"Gender"}),e.jsxs(se,{role:"group","aria-labelledby":"my-gender-group",children:[e.jsxs(h,{children:[e.jsx(c,{type:"radio",name:"gender",value:"Male"}),e.jsx(m,{}),e.jsx(A,{children:"Male"})]}),e.jsxs(h,{children:[e.jsx(c,{type:"radio",name:"gender",value:"Female"}),e.jsx(m,{}),e.jsx(A,{children:"Female"})]})]})]}),e.jsxs(p,{children:[e.jsx("label",{htmlFor:"height",children:"Height"}),e.jsx(f,{name:"height",placeholder:"Enter your height",className:b.height?a.height?"input-error":"input-success":"input-normal"}),e.jsx(y,{name:"height",component:"div"})]}),e.jsxs(p,{children:[e.jsx("label",{htmlFor:"weight",children:"Weight"}),e.jsx(f,{name:"weight",placeholder:"Enter your weight",className:b.weight?a.weight?"input-error":"input-success":"input-normal"}),e.jsx(y,{name:"weight",component:"div"})]}),e.jsxs(p,{children:[e.jsx("div",{id:"my-activity-group",children:"Your activity"}),e.jsxs(oe,{role:"group","aria-labelledby":"my-activity-group",children:[e.jsxs(h,{children:[e.jsx(c,{type:"radio",name:"activityRatio",value:"1.2",checked:n.activityRatio==="1.2"}),e.jsx(m,{}),e.jsx(w,{children:"1.2 - if you do not have physical activity and sedentary work"})]}),e.jsxs(h,{children:[e.jsx(c,{type:"radio",name:"activityRatio",checked:n.activityRatio==="1.375",value:"1.375"}),e.jsx(m,{}),e.jsx(w,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]}),e.jsxs(h,{children:[e.jsx(c,{type:"radio",name:"activityRatio",checked:n.activityRatio==="1.55",value:"1.55"}),e.jsx(m,{}),e.jsx(w,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]}),e.jsxs(h,{children:[e.jsx(c,{type:"radio",name:"activityRatio",checked:n.activityRatio==="1.725",value:"1.725"}),e.jsx(m,{}),e.jsx(w,{children:"1.725 ​​- if you train fully 6-7 times a week"})]}),e.jsxs(h,{children:[e.jsx(c,{type:"radio",name:"activityRatio",checked:n.activityRatio==="1.9",value:"1.9"}),e.jsx(m,{}),e.jsx(w,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})]})]}),e.jsxs(de,{children:[e.jsx(ce,{type:"submit",children:"Save"}),e.jsx(le,{type:"button",onClick:()=>B(k),children:"Cancel"})]})]})})})}const he="/healthy-way/assets/profile-mob@1x-771a5e6d.png",me="/healthy-way/assets/profile-mob@2x-0612e098.png",ge="/healthy-way/assets/profile-tab@1x-3f1682b6.png",xe="/healthy-way/assets/profile-tab@2x-8263e9ab.png",ue="/healthy-way/assets/profile-desk@1x-076f43bb.png",we="/healthy-way/assets/profile-desk@2x-9605a813.png",ye=i(G)`
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
`,be=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    justify-content: space-evenly;
  }
`,fe=i.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,ve=i.div`
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
`,je=i.div`
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
`,ke=async t=>{try{return await V.put("/api/auth/change-password",t)}catch(d){throw d.response.data}};function $e(){const{email:t}=P(C),d={password:"",newPassword:""},x=async(s,o)=>{try{const r=await ke({email:t,...s});if(r&&r.data&&r.data.message)g.success("Your password has been successfully changed!");else throw new Error("Did you really enter a valid password?")}catch(r){r.message?g.error(`Something went wrong! 
 ${r.message}`):g.error("Something went wrong while changing the password. Try again!")}finally{o.resetForm()}};return e.jsxs("section",{style:{paddingTop:"24px",paddingBottom:"24px"},children:[e.jsx(D,{style:{marginBottom:"12px"},children:"Change password"}),e.jsx(F,{initialValues:d,validationSchema:O,onSubmit:x,children:({errors:s,touched:o,isSubmitting:r,isValid:u})=>e.jsxs(I,{children:[e.jsx(v,{type:"password",name:"password",placeholder:"Password",autoComplete:"off",className:o.password?s.password?"input-error":"input-success":"input-normal"}),e.jsx(j,{component:"p",name:"password"}),e.jsx(v,{type:"password",name:"newPassword",placeholder:"New password",autoComplete:"off",className:o.newPassword?s.newPassword?"input-error":"input-success":"input-normal"}),e.jsx(j,{component:"p",name:"newPassword"}),e.jsx(N,{type:"submit",disabled:!u||r,children:"Update Password"})]})})]})}function Se(){const t=R(),d=Z(),x=async(s,o)=>{try{await t(_(s.password)).unwrap(),g.success("You have successfully deleted your account!"),d("/welcome")}catch(r){g.error(`Something went wrong! 
 ${r.message}!`);return}finally{o.resetForm()}};return e.jsxs("section",{style:{paddingTop:"24px",paddingBottom:"24px"},children:[e.jsx(D,{style:{marginBottom:"12px",color:"var(--error-color)"},children:"Delete account"}),e.jsx(K,{style:{marginBottom:"12px",maxWidth:"380px"},children:"Once you delete your account, there is no going back. Please be certain."}),e.jsx(F,{initialValues:{password:""},validationSchema:J,onSubmit:x,children:({errors:s,touched:o,isSubmitting:r,isValid:u})=>e.jsxs(I,{children:[e.jsx(v,{type:"password",name:"password",placeholder:"Password",autoComplete:"off",className:o.password?s.password?"input-error":"input-success":"input-normal"}),e.jsx(j,{component:"p",name:"password"}),e.jsx(N,{type:"submit",disabled:!u||r,children:"Delete your account"})]})})]})}function Pe(){return e.jsx("main",{children:e.jsxs(ye,{children:[e.jsx(fe,{children:"Profile setting"}),e.jsxs(be,{children:[e.jsx(ve,{$imageDesk1x:ue,$imageDesk2x:we,$imageTab1x:ge,$imageTab2x:xe,$imageMob1x:he,$imageMob2x:me,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"}),e.jsx("section",{children:e.jsx(pe,{})})]}),e.jsxs(je,{children:[e.jsx($e,{}),e.jsx(Se,{})]})]})})}export{Pe as default};
