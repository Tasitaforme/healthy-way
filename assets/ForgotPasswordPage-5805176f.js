import{c as x,s as o,a as p,j as e,_ as n,C as l}from"./index-b6ef643f.js";import{B as h,H as g}from"./Components.styled-9f6f33a1.js";import{S as u,H as w,a as b}from"./SignInPage.styled-adcb4520.js";import{c as f,F as j,b as y}from"./Formik.styled-e4c15651.js";import{S as F,f as S}from"./SignInForm.styled-570b355a.js";import{M as k,F as $,I as T,B as M,T as v}from"./SignUpImage.styled-2a5deb42.js";import{w as D,a as B,b as I,c as P,d as E,e as H}from"./watch-desk@2x-2cdfc254.js";const W=x.create({baseURL:"https://healthy-way-app.onrender.com"}),C=async t=>{try{const{data:s}=await W.post("/api/auth/forgot-password",t);return s}catch(s){return s.response.data}},m=o(f)`
  position: absolute;
  top: 30px;
  left: 10px;
`,A=o(F)`
  position: relative;
  margin-bottom: 56px;

  @media screen and (min-width: 834px) {
    margin-bottom: 206px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 248px;
  }
`;function L(){const t={email:""},s=p(),c=async(r,i)=>{try{const a=await C(r);if(a&&a.success)n.success("A new password has been sent to your email!"),s("/signin");else throw new m(a&&a.message?a.message:"Something went wrong!")}catch(a){n.error(`Something went wrong! 
 ${a.message}`)}finally{i.resetForm()}};return e.jsx(j,{initialValues:t,validationSchema:S,onSubmit:c,children:({errors:r,touched:i,isSubmitting:a,isValid:d})=>e.jsxs(A,{children:[e.jsx(y,{type:"email",name:"email",autoComplete:"on",placeholder:"E-mail",className:i.email?r.email?"input-error":"input-success":"input-normal"}),e.jsx(m,{component:"p",name:"email"}),e.jsx(h,{type:"submit",disabled:!d||a,children:"Send"})]})})}const N=o(u)`
  margin-top: 0px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,R=o.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    width: 380px;
  }
`;function K(){return e.jsx(k,{children:e.jsx(l,{children:e.jsxs($,{children:[e.jsx(T,{children:e.jsx(M,{$imageDesk1x:D,$imageDesk2x:B,$imageTab1x:I,$imageTab2x:P,$imageMob1x:E,$imageMob2x:H,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"})}),e.jsxs(v,{children:[e.jsx(g,{children:"Forgot your password"}),e.jsx(w,{children:"We will send you an email with recovery instructions"}),e.jsx(L,{}),e.jsxs(R,{children:[e.jsx(N,{children:"Do you already have an account?"}),e.jsx(b,{to:"/signin",children:"Sign in"})]})]})]})})})}export{K as default};
