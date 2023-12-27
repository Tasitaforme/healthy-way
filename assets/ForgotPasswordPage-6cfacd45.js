import{m as d,s,g as x,i as p,j as a,F as l,h,_ as n,C as g}from"./index-c677023d.js";import{B as u,H as w}from"./Components.styled-a32c9ac4.js";import{S as b,H as j,a as f}from"./SignInPage.styled-7eaee1a8.js";import{S as y,f as F}from"./SignInForm.styled-e1779cd7.js";import{M as S,F as k,I as $,B as T,T as M}from"./SignUpImage.styled-f9beff63.js";import{w as v,a as D,b as B,c as I,d as P,e as E}from"./watch-desk@2x-2cdfc254.js";const H=d.create({baseURL:"https://healthy-way-app.onrender.com"}),W=async o=>{try{const{data:e}=await H.post("/api/auth/forgot-password",o);return e}catch(e){throw e.response.data}},C=s(x)`
  position: absolute;
  top: 30px;
  left: 10px;
`,A=s(y)`
  position: relative;
  margin-bottom: 56px;

  @media screen and (min-width: 834px) {
    margin-bottom: 206px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 248px;
  }
`;function L(){const o={email:""},e=p(),m=async(t,i)=>{try{await W(t),n.success("A new password has been sent to your email!"),e("/signin")}catch(r){n.error(`Something went wrong! 
 ${r.message}`)}finally{i.resetForm()}};return a.jsx(l,{initialValues:o,validationSchema:F,onSubmit:m,children:({errors:t,touched:i,isSubmitting:r,isValid:c})=>a.jsxs(A,{children:[a.jsx(h,{type:"email",name:"email",autoComplete:"on",placeholder:"E-mail",className:i.email?t.email?"input-error":"input-success":"input-normal"}),a.jsx(C,{component:"p",name:"email"}),a.jsx(u,{type:"submit",disabled:!c||r,children:"Send"})]})})}const N=s(b)`
  margin-top: 0px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,R=s.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    width: 380px;
  }
`;function J(){return a.jsx(S,{children:a.jsx(g,{children:a.jsxs(k,{children:[a.jsx($,{children:a.jsx(T,{$imageDesk1x:v,$imageDesk2x:D,$imageTab1x:B,$imageTab2x:I,$imageMob1x:P,$imageMob2x:E,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"})}),a.jsxs(M,{children:[a.jsx(w,{children:"Forgot your password"}),a.jsx(j,{children:"We will send you an email with recovery instructions"}),a.jsx(L,{}),a.jsxs(R,{children:[a.jsx(N,{children:"Do you already have an account?"}),a.jsx(f,{to:"/signin",children:"Sign in"})]})]})]})})})}export{J as default};
