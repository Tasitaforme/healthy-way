import{m as x,s as o,g as p,i as l,j as e,F as h,h as g,_ as n,C as u}from"./index-05a0b694.js";import{B as w,H as b}from"./Components.styled-01e6ba64.js";import{S as f,H as j,a as y}from"./SignInPage.styled-7641e5b5.js";import{S as F,f as S}from"./SignInForm.styled-d25e8c76.js";import{M as k,F as $,I as T,B as M,T as v}from"./SignUpImage.styled-63081110.js";import{w as D,a as B,b as I,c as P,d as E,e as H}from"./watch-desk@2x-2cdfc254.js";const W=x.create({baseURL:"https://healthy-way-app.onrender.com"}),C=async t=>{try{const{data:s}=await W.post("/api/auth/forgot-password",t);return s}catch(s){return s.response.data}},m=o(p)`
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
`;function L(){const t={email:""},s=l(),c=async(r,i)=>{try{const a=await C(r);if(a&&a.success)n.success("A new password has been sent to your email!"),s("/signin");else throw new m(a&&a.message?a.message:"Something went wrong!")}catch(a){n.error(`Something went wrong! 
 ${a.message}`)}finally{i.resetForm()}};return e.jsx(h,{initialValues:t,validationSchema:S,onSubmit:c,children:({errors:r,touched:i,isSubmitting:a,isValid:d})=>e.jsxs(A,{children:[e.jsx(g,{type:"email",name:"email",autoComplete:"on",placeholder:"E-mail",className:i.email?r.email?"input-error":"input-success":"input-normal"}),e.jsx(m,{component:"p",name:"email"}),e.jsx(w,{type:"submit",disabled:!d||a,children:"Send"})]})})}const N=o(f)`
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
`;function J(){return e.jsx(k,{children:e.jsx(u,{children:e.jsxs($,{children:[e.jsx(T,{children:e.jsx(M,{$imageDesk1x:D,$imageDesk2x:B,$imageTab1x:I,$imageTab2x:P,$imageMob1x:E,$imageMob2x:H,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"})}),e.jsxs(v,{children:[e.jsx(b,{children:"Forgot your password"}),e.jsx(j,{children:"We will send you an email with recovery instructions"}),e.jsx(L,{}),e.jsxs(R,{children:[e.jsx(N,{children:"Do you already have an account?"}),e.jsx(y,{to:"/signin",children:"Sign in"})]})]})]})})})}export{J as default};
