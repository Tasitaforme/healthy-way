import{u as p,j as a,l as x,n as o,C as u}from"./index-75c8b229.js";import{B as d,H as h}from"./Components.styled-65563900.js";import{H as g,S as j,a as b}from"./SignInPage.styled-f5f47880.js";import{F as w,a as r,b as n}from"./Formik.styled-0707a901.js";import{l as y,S as F,F as S}from"./SignInForm.styled-c9b9c3ec.js";import{M as f,F as k,I as T,B as $,T as I}from"./SignUpImage.styled-e0f7c5cc.js";import{w as M,a as D,b as B,c as q,d as v,e as H}from"./watch-desk@2x-2cdfc254.js";function C(){const t={email:"",password:""},c=p(),m=async(s,e)=>{try{await c(x(s)).unwrap(),o.success("You have successfully logged in!")}catch{o.error("Wrong login or password! Try again!")}e.resetForm()};return a.jsx(a.Fragment,{children:a.jsx(w,{initialValues:t,validationSchema:y,onSubmit:m,children:({errors:s,touched:e,isSubmitting:i,isValid:l})=>a.jsxs(F,{children:[a.jsx(r,{type:"email",name:"email",placeholder:"E-mail",className:e.quantity?s.quantity?"input-error":"input-success":"input-normal"}),a.jsx(n,{component:"p",name:"email"}),a.jsx(r,{type:"password",name:"password",placeholder:"Password",autoComplete:"off",className:e.quantity?s.quantity?"input-error":"input-success":"input-normal"}),a.jsx(n,{component:"p",name:"password"}),a.jsx(d,{type:"submit",disabled:!l||i,children:"Sign in"}),a.jsx(S,{to:"/forgot-password",children:"Forgot your password?"})]})})})}function R(){return a.jsx(f,{children:a.jsx(u,{children:a.jsxs(k,{children:[a.jsx(T,{children:a.jsx($,{$imageDesk1x:M,$imageDesk2x:D,$imageTab1x:B,$imageTab2x:q,$imageMob1x:v,$imageMob2x:H,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"})}),a.jsxs(I,{children:[a.jsx(h,{children:"Sign in"}),a.jsx(g,{children:"You need to login to use the service"}),a.jsx(C,{}),a.jsx(j,{children:"If you don't have an account yet"}),a.jsx(b,{to:"/signup",children:"Sign up"})]})]})})})}export{R as default};
