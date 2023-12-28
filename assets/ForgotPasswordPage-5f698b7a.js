import{m as c,s,g as x,i as d,j as a,F as p,h as l,_ as i,C as h}from"./index-600d6b10.js";import{B as g,H as u}from"./Components.styled-5ea00774.js";import{S as w,H as b,a as j}from"./SignInPage.styled-0c136cc2.js";import{S as f,f as y}from"./SignInForm.styled-5367785f.js";import{F,I as S,B as k,T as $}from"./SignUpImage.styled-32197928.js";import{w as T,a as v,b as D,c as M,d as B,e as I}from"./watch-desk@2x-2cdfc254.js";const P=c.create({baseURL:"https://healthy-way-app.onrender.com"}),E=async o=>{try{const{data:e}=await P.post("/api/auth/forgot-password",o);return e}catch(e){throw e.response.data}},H=s(x)`
  position: absolute;
  top: 30px;
  left: 10px;
`,W=s(f)`
  position: relative;
  margin-bottom: 56px;

  @media screen and (min-width: 834px) {
    margin-bottom: 206px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 248px;
  }
`;function C(){const o={email:""},e=d(),n=async(t,r)=>{try{await E(t),i.success("A new password has been sent to your email!"),e("/signin")}catch(m){i.error(`Something went wrong! 
 ${m.message}`)}finally{r.resetForm()}};return a.jsx(p,{initialValues:o,validationSchema:y,onSubmit:n,children:({errors:t,touched:r})=>a.jsxs(W,{children:[a.jsx(l,{type:"email",name:"email",autoComplete:"on",placeholder:"E-mail",className:r.email?t.email?"input-error":"input-success":"input-normal"}),a.jsx(H,{component:"p",name:"email"}),a.jsx(g,{type:"submit",children:"Send"})]})})}const L=s(w)`
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
`;function z(){return a.jsx("main",{children:a.jsx(h,{children:a.jsxs(F,{children:[a.jsx(S,{children:a.jsx(k,{$imageDesk1x:T,$imageDesk2x:v,$imageTab1x:D,$imageTab2x:M,$imageMob1x:B,$imageMob2x:I,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"})}),a.jsxs($,{children:[a.jsx(u,{children:"Forgot your password"}),a.jsx(b,{children:"We will send you an email with recovery instructions"}),a.jsx(C,{}),a.jsxs(N,{children:[a.jsx(L,{children:"Do you already have an account?"}),a.jsx(j,{to:"/signin",children:"Sign in"})]})]})]})})})}export{z as default};
