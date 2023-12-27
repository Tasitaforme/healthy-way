import{j as e,s as t,c as v,b,d as D,r as $,F as w,a as j,e as B,f as h,g as I,h as A,u as W,i as H,k as P,n as N,C as V}from"./index-c677023d.js";import{B as m,M as z,F as Y,I as Z,T as _,S as O,a as J,b as K}from"./SignUpImage.styled-f9beff63.js";import{w as Q,a as X,b as ee,c as ae,d as ie,e as te}from"./watch-desk@2x-2cdfc254.js";import{a as se,H as g,B as d}from"./Components.styled-a32c9ac4.js";import{S as ne,F as M,b as S,c as k,V as re,I as oe,a as f,d as ce}from"./FormUserData.styled-cfc84bcc.js";import"./SignInPage.styled-7eaee1a8.js";const xe="/healthy-way/assets/hiking-desk@1x-867f5633.png",pe="/healthy-way/assets/hiking-desk@2x-e58c3520.png",he="/healthy-way/assets/hiking-tab@1x-1073b886.png",de="/healthy-way/assets/hiking-tab@2x-51fd2364.png",le="/healthy-way/assets/hiking-mob@1x-19e0c6c9.png",me="/healthy-way/assets/hiking-mob@2x-1b2c3203.png",ge="/healthy-way/assets/fitness-desk@1x-02917009.png",ue="/healthy-way/assets/fitness-desk@2x-9b02aeb0.png",ye="/healthy-way/assets/fitness-tab@1x-4e471a75.png",be="/healthy-way/assets/fitness-tab@2x-27b080de.png",we="/healthy-way/assets/fitness-mob@1x-942df0aa.png",je="/healthy-way/assets/fitness-mob@2x-5570cf98.png",fe="/healthy-way/assets/parametrs-desk@1x-fb8dec06.png",ke="/healthy-way/assets/parametrs-desk@2x-ad138520.png",ve="/healthy-way/assets/parameters-tab@1x-f269c222.png",$e="/healthy-way/assets/parameters-tab@2x-25197ad8.png",Fe="/healthy-way/assets/parameters-mob@1x-fba6cca4.png",Te="/healthy-way/assets/parameters-mob@2x-a074fcff.png",Me="/healthy-way/assets/activity-desk@1x-a756ff63.png",Se="/healthy-way/assets/activity-desk@2x-268b7897.png",Re="/healthy-way/assets/activity-tab@1x-c17492e3.png",De="/healthy-way/assets/activity-tab@2x-d532ca7f.png",Ae="/healthy-way/assets/activity-mob@1x-96e8d684.png",Ee="/healthy-way/assets/activity-mob@2x-d105836c.png";function Be({currentStep:a}){return e.jsxs(e.Fragment,{children:[a===1&&e.jsx(m,{$imageDesk1x:Q,$imageDesk2x:X,$imageTab1x:ee,$imageTab2x:ae,$imageMob1x:ie,$imageMob2x:te,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"}),a===2&&e.jsx(m,{$imageDesk1x:xe,$imageDesk2x:pe,$imageTab1x:he,$imageTab2x:de,$imageMob1x:le,$imageMob2x:me,$heightMob:"290px",$heightTab:"368px",$heightDesk:"574px"}),a===3&&e.jsx(m,{$imageDesk1x:ge,$imageDesk2x:ue,$imageTab1x:ye,$imageTab2x:be,$imageMob1x:we,$imageMob2x:je,$heightMob:"288px",$heightTab:"366px",$heightDesk:"570px"}),a===4&&e.jsx(m,{$imageDesk1x:fe,$imageDesk2x:ke,$imageTab1x:ve,$imageTab2x:$e,$imageMob1x:Fe,$imageMob2x:Te,$heightMob:"302px",$heightTab:"382px",$heightDesk:"594px"}),a===5&&e.jsx(m,{$imageDesk1x:Me,$imageDesk2x:Se,$imageTab1x:Re,$imageTab2x:De,$imageMob1x:Ae,$imageMob2x:Ee,$heightMob:"304px",$heightTab:"384px",$heightDesk:"598px"})]})}const u=t(se)`
  font-size: 18px;
  color: var(--Color-Primary-Grey, #b6b6b6);
  margin-top: 16px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    text-align: center;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`;function Ne({currentStep:a}){return e.jsxs(e.Fragment,{children:[a===1&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Sign up"}),e.jsx(u,{children:"You need to register to use the service"})]}),a===2&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Your goal"}),e.jsx(u,{children:"Choose a goal so that we can help you effectively"})]}),a===3&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Select gender, Age"}),e.jsxs(u,{children:["Choose a goal so that we can ",e.jsx("br",{}),"help you effectively"]})]}),a===4&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Body parameters"}),e.jsx(u,{children:"Enter your parameters for correct performance tracking"})]}),a===5&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Your Activity"}),e.jsxs(u,{children:["To correctly calculate calorie ",e.jsx("br",{}),"and water intake"]})]})]})}const qe=/^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,Ce=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,Ie=v().shape({name:b().required("Required").min(2,"Too Short!").max(70,"Too Long!"),email:b().required("Required").email("Invalid email").matches(qe,"Invalid email address"),password:b().required("Required").min(7,"Min length: 7 characters").matches(Ce,"Use uppercase, lowercase letters, number. Letters only in English.")}),Le=v().shape({goal:b().required("Required, choose one of three")}),Ue=v().shape({gender:b().required("Required, choose one of two"),age:D().required("Required").min(1,"Age can not be less than 1").max(120,"Age can not be more than 120").typeError("Age must be a number")}),Ge=v().shape({height:D().required("Required").min(140,"Height can not be less than 140").max(240,"Height can not be more than 240").typeError("Height must be a number"),weight:D().required("Required").min(40,"Weight can not be less than 40").max(220,"Weight can not be more than 220").typeError("Weight must be a number")});function We({handleNextStep:a,handleSubmit:x,userData:p}){const[i,c]=$.useState(!1),s=r=>{x(r),a()};return e.jsx(w,{initialValues:p,validationSchema:Ie,onSubmit:s,children:({errors:r,touched:n,isValid:o,isSubmitting:F})=>e.jsxs(ne,{children:[e.jsxs(M,{children:[e.jsx(S,{type:"text",name:"name",placeholder:"Name",className:n.name?r.name?"input-error":"input-success":"input-normal"}),e.jsx(k,{component:"p",name:"name"})]}),e.jsxs(M,{children:[e.jsx(S,{type:"email",name:"email",placeholder:"E-mail",className:n.email?r.email?"input-error":"input-success":"input-normal"}),e.jsx(k,{component:"p",name:"email"})]}),e.jsxs(M,{children:[e.jsx(S,{type:i?"text":"password",name:"password",placeholder:"Password",autoComplete:"off",className:n.password?r.password?"input-error":"input-success":"input-normal"}),e.jsx(k,{component:"p",name:"password"}),!r.password&&n.password&&e.jsx(re,{children:"Password is secure"}),e.jsxs(oe,{onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[n.password&&!r.password&&e.jsx(f,{width:"32px",height:"32px",children:e.jsx("use",{href:`${j}#correct`})}),n.password&&r.password&&e.jsx(f,{width:"32px",height:"32px",children:e.jsx("use",{href:`${j}#error`})}),!n.password&&!i&&e.jsx(f,{width:"32px",height:"32px",children:e.jsx("use",{href:`${j}#eye-off`})}),i&&!n.password&&e.jsx(f,{width:"32px",height:"32px",children:e.jsx("use",{href:`${j}#eye`})})]})]}),e.jsx(ce,{type:"submit",disabled:!o||F,children:"Next"})]})})}const He=t(B)`
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
  }
`,R=t.label`
  display: flex;
  align-items: center;
  gap: 8px;
  &:not(:first-child) {
    margin-top: 24px;
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 834px) {
    &:not(:first-child) {
      margin-top: 0px;
    }
    width: 110px;
  }

  @media screen and (min-width: 1440px) {
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
`,Pe=t.div`
  position: relative;
  @media screen and (min-width: 834px) {
    display: flex;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 0px;
  }
`,Ve=t(d)`
  width: 100%;
  margin-top: 24px;
`,L=t(d)`
  width: 192px;
  height: 20px;
  margin: 20px auto 0;
  font-weight: 400;
  background-color: transparent;
  color: var(--Color-Primary-Grey, #b6b6b6);
  &:hover {
    box-shadow: none;
  }
`,ze=t(k)`
  top: -32px;
  left: 20px;
`;function Ye({handleNextStep:a,handleSubmit:x,userData:p,handlePrevStep:i}){const c=s=>{x(s),a()};return e.jsx(w,{initialValues:p,validationSchema:Le,onSubmit:c,children:({isValid:s,isSubmitting:r})=>e.jsxs(He,{children:[e.jsxs(Pe,{children:[e.jsxs(R,{children:[e.jsx(h,{type:"radio",name:"goal",value:"Lose fat"}),"Lose Fat"]}),e.jsxs(R,{children:[e.jsx(h,{type:"radio",name:"goal",value:"Maintain"}),"Maintain"]}),e.jsxs(R,{children:[e.jsx(h,{type:"radio",name:"goal",value:"Gain muscle"}),"Gain Muscle"]}),e.jsx(ze,{component:"p",name:"goal"})]}),e.jsx(Ve,{type:"submit",disabled:!s||r,children:"Next"}),e.jsx(L,{onClick:i,children:"Back"})]})})}const U=t(B)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
    width: 444px;
  }
`,G=t(d)`
  width: 192px;
  height: 20px;
  margin: 20px auto 0;
  font-weight: 400;
  background-color: transparent;
  color: var(--Color-Primary-Grey, #b6b6b6);
  &:hover {
    box-shadow: none;
  }
`,Ze=t(d)`
  width: 100%;
  margin-top: 40px;
`,_e=t.p`
  font-weight: 500;
`,Oe=t.div`
  position: relative;

  margin-top: 12px;
  display: flex;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`,q=t.label`
  width: 140px;
  display: flex;
  gap: 8px;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`,Je=t.label`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 500;
  position: relative;
`,E=t(I)`
  position: absolute;
  left: 10px;
  top: 58px;
`,Ke=t(I)`
  position: absolute;
  top: -26px;
  left: 20px;
`;function Qe({handleNextStep:a,handleSubmit:x,userData:p,handlePrevStep:i}){const c=s=>{x({...s,age:Number(s.age)}),a()};return e.jsx(w,{initialValues:p,validationSchema:Ue,onSubmit:c,children:({errors:s,touched:r,isSubmitting:n,isValid:o})=>e.jsxs(U,{children:[e.jsx(_e,{children:"Gender"}),e.jsxs(Oe,{children:[e.jsxs(q,{children:[e.jsx(h,{type:"radio",name:"gender",value:"Male"}),"Male"]}),e.jsxs(q,{children:[e.jsx(h,{type:"radio",name:"gender",value:"Female"}),"Female"]}),e.jsx(Ke,{component:"p",name:"gender"})]}),e.jsxs(Je,{children:["Your age",e.jsx(A,{type:"text",name:"age",placeholder:"Enter your age",className:r.age?s.age?"input-error":"input-success":"input-normal"}),e.jsx(E,{component:"p",name:"age"})]}),e.jsx(Ze,{type:"submit",disabled:!o||n,children:"Next"}),e.jsx(G,{onClick:i,children:"Back"})]})})}const Xe=t(B)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
  }
`,C=t.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 500;
  position: relative;

  &:not(:first-child) {
    margin-top: 24px;
  }
`,ea=t(d)`
  margin-top: 40px;
  width: 100%;
`;function aa({handleNextStep:a,handleSubmit:x,userData:p,handlePrevStep:i}){const c=s=>{x({...s,weight:Number(s.weight),height:Number(s.height)}),a()};return e.jsx(w,{initialValues:p,validationSchema:Ge,onSubmit:c,children:({errors:s,touched:r,isSubmitting:n,isValid:o})=>e.jsxs(Xe,{children:[e.jsxs(C,{children:["Height",e.jsx(A,{type:"text",name:"height",placeholder:"Enter your height",className:r.height?s.height?"input-error":"input-success":"input-normal"}),e.jsx(E,{component:"p",name:"height"})]}),e.jsxs(C,{children:["Weight",e.jsx(A,{type:"text",name:"weight",placeholder:"Enter your weight",className:r.weight?s.weight?"input-error":"input-success":"input-normal"}),e.jsx(E,{component:"p",name:"weight"})]}),e.jsx(ea,{type:"submit",disabled:!o||n,children:"Next"}),e.jsx(G,{onClick:i,children:"Back"})]})})}const ia=t(U)`
  position: relative;

  @media screen and (min-width: 834px) {
    padding: 0px;
    width: 460px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    padding: 0px 116px 0px 0px;
  }
`,y=t.label`
  display: flex;
  gap: 8px;
  align-items: center;

  &:not(:first-child) {
    margin-top: 16px;
  }

  &:hover {
    cursor: pointer;
  }
`,ta=t(d)`
  width: 100%;
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    width: 380px;
    margin: 16px auto 0;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 16px 0 0;
  }
`,sa=t(L)`
  @media screen and (min-width: 1440px) {
    width: 212px;
    margin-left: 0;
  }
`,na=t.p`
  position: absolute;
  top: -20px;
  left: 18px;
  font-size: 12px;
  color: #e74a3b;
`;function ra({userData:a,handlePrevStep:x,handleSubmitForm:p,handleChange:i}){const[c,s]=$.useState(!1),r=()=>{c||p()},n=o=>{s(o)};return e.jsx(w,{initialValues:a,onSubmit:r,children:()=>e.jsxs(ia,{children:[e.jsxs(y,{children:[e.jsx(h,{onChange:o=>i(Number(o.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.2",checked:a.activityRatio===1.2}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(y,{children:[e.jsx(h,{onChange:o=>i(Number(o.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.375",checked:a.activityRatio===1.375}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(y,{children:[e.jsx(h,{onChange:o=>i(Number(o.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.55",checked:a.activityRatio===1.55}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(y,{children:[e.jsx(h,{onChange:o=>i(Number(o.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.725",checked:a.activityRatio===1.725}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(y,{children:[e.jsx(h,{onChange:o=>i(Number(o.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.9",checked:a.activityRatio===1.9}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]}),c&&a.activityRatio===""&&e.jsx(na,{children:"Required, choose one of five"}),e.jsx(ta,{type:"submit",onClick:()=>{a.activityRatio===""?n(!0):n(!1)},children:"Sign Up"}),e.jsx(sa,{onClick:x,children:"Back"})]})})}function oa({currentStep:a,handleNextStep:x,handlePrevStep:p}){const[i,c]=$.useState({name:"",email:"",password:"",goal:"",gender:"",age:"",height:"",weight:"",activityRatio:""}),s=W(),r=H(),n=l=>{c(T=>({...T,...l}))},o=l=>{c(T=>({...T,activityRatio:l}))},F=async()=>{try{await s(P(i)).unwrap(),N.success("You have successfully signed up!"),r("/signin")}catch(l){N.error(`Something went wrong! ${l.message}`)}};return e.jsxs(e.Fragment,{children:[a===1&&e.jsx(We,{handleNextStep:x,handleSubmit:n,userData:i}),a===2&&e.jsx(Ye,{handleNextStep:x,handleSubmit:n,userData:i,handlePrevStep:p}),a===3&&e.jsx(Qe,{handleNextStep:x,handleSubmit:n,userData:i,handlePrevStep:p}),a===4&&e.jsx(aa,{handleNextStep:x,handleSubmit:n,userData:i,handlePrevStep:p}),a===5&&e.jsx(ra,{userData:i,handlePrevStep:p,handleSubmitForm:F,handleChange:o})]})}function ma(){const[a,x]=$.useState(1),p=()=>{x(c=>c+1)},i=()=>{x(c=>c-1)};return e.jsx(z,{children:e.jsx(V,{children:e.jsxs(Y,{children:[e.jsx(Z,{children:e.jsx(Be,{currentStep:a})}),e.jsxs(_,{children:[e.jsx(Ne,{currentStep:a}),e.jsx(oa,{currentStep:a,handleNextStep:p,handlePrevStep:i}),a===1&&e.jsxs(O,{children:[e.jsx(J,{children:"Do you already have an account?"}),e.jsx(K,{to:"/signin",children:"Sign in"})]})]})]})})})}export{ma as default};
