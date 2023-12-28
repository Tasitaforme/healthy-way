import{o as c,s,h as x,k as d,j as a,F as p,i as l,B as h,_ as r,C as g,H as u}from"./index-e45df4c0.js";import{S as w,H as b,a as j}from"./SignInPage.styled-bf6dbf50.js";import{S as y,f}from"./SignInForm.styled-86976633.js";import{F,I as S,B as k,T as $}from"./SignUpImage.styled-b2fafd00.js";import{w as T,a as v,b as D,c as M,d as B,e as I}from"./watch-desk@2x-2cdfc254.js";const P=c.create({baseURL:"https://healthy-way-app.onrender.com"}),E=async o=>{try{const{data:e}=await P.post("/api/auth/forgot-password",o);return e}catch(e){throw e.response.data}},H=s(x)`
  position: absolute;
  top: 30px;
  left: 10px;
`,W=s(y)`
  position: relative;
  margin-bottom: 56px;

  @media screen and (min-width: 834px) {
    margin-bottom: 206px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 248px;
  }
`;function C(){const o={email:""},e=d(),n=async(t,i)=>{try{await E(t),r.success("A new password has been sent to your email!"),e("/signin")}catch(m){r.error(`Something went wrong! 
 ${m.message}`)}finally{i.resetForm()}};return a.jsx(p,{initialValues:o,validationSchema:f,onSubmit:n,children:({errors:t,touched:i})=>a.jsxs(W,{children:[a.jsx(l,{type:"email",name:"email",autoComplete:"on",placeholder:"E-mail",className:i.email?t.email?"input-error":"input-success":"input-normal"}),a.jsx(H,{component:"p",name:"email"}),a.jsx(h,{type:"submit",children:"Send"})]})})}const L=s(w)`
  margin-top: 0px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,N=s.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    width: 380px;
  }
`;function q(){return a.jsx("main",{children:a.jsx(g,{children:a.jsxs(F,{children:[a.jsx(S,{children:a.jsx(k,{$imageDesk1x:T,$imageDesk2x:v,$imageTab1x:D,$imageTab2x:M,$imageMob1x:B,$imageMob2x:I,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"})}),a.jsxs($,{children:[a.jsx(u,{children:"Forgot your password"}),a.jsx(b,{children:"We will send you an email with recovery instructions"}),a.jsx(C,{}),a.jsxs(N,{children:[a.jsx(L,{children:"Do you already have an account?"}),a.jsx(j,{to:"/signin",children:"Sign in"})]})]})]})})})}export{q as default};
