import{j as e,s as t,c as v,b,d as D,r as $,F as w,a as j,e as B,f as h,g as L,h as A,u as W,i as H,k as P,n as N,C as V}from"./index-17b07548.js";import{B as m,M as z,F as Y,I as Z,T as _,S as O,a as J,b as K}from"./SignUpImage.styled-bb8e2cde.js";import{w as Q,a as X,b as ee,c as ae,d as ie,e as te}from"./watch-desk@2x-2cdfc254.js";import{a as se,H as g,B as d}from"./Components.styled-2d0af848.js";import{S as ne,F as M,a as S,b as k,V as re,I as f,c as oe}from"./FormUserData.styled-74ac610b.js";import"./SignInPage.styled-f3c6f1eb.js";const xe="/healthy-way/assets/hiking-desk@1x-867f5633.png",ce="/healthy-way/assets/hiking-desk@2x-e58c3520.png",pe="/healthy-way/assets/hiking-tab@1x-1073b886.png",he="/healthy-way/assets/hiking-tab@2x-51fd2364.png",de="/healthy-way/assets/hiking-mob@1x-19e0c6c9.png",le="/healthy-way/assets/hiking-mob@2x-1b2c3203.png",me="/healthy-way/assets/fitness-desk@1x-02917009.png",ge="/healthy-way/assets/fitness-desk@2x-9b02aeb0.png",ue="/healthy-way/assets/fitness-tab@1x-4e471a75.png",ye="/healthy-way/assets/fitness-tab@2x-27b080de.png",be="/healthy-way/assets/fitness-mob@1x-942df0aa.png",we="/healthy-way/assets/fitness-mob@2x-5570cf98.png",je="/healthy-way/assets/parametrs-desk@1x-fb8dec06.png",fe="/healthy-way/assets/parametrs-desk@2x-ad138520.png",ke="/healthy-way/assets/parameters-tab@1x-f269c222.png",ve="/healthy-way/assets/parameters-tab@2x-25197ad8.png",$e="/healthy-way/assets/parameters-mob@1x-fba6cca4.png",Fe="/healthy-way/assets/parameters-mob@2x-a074fcff.png",Te="/healthy-way/assets/activity-desk@1x-a756ff63.png",Me="/healthy-way/assets/activity-desk@2x-268b7897.png",Se="/healthy-way/assets/activity-tab@1x-c17492e3.png",Re="/healthy-way/assets/activity-tab@2x-d532ca7f.png",De="/healthy-way/assets/activity-mob@1x-96e8d684.png",Ae="/healthy-way/assets/activity-mob@2x-d105836c.png";function Ee({currentStep:a}){return e.jsxs(e.Fragment,{children:[a===1&&e.jsx(m,{$imageDesk1x:Q,$imageDesk2x:X,$imageTab1x:ee,$imageTab2x:ae,$imageMob1x:ie,$imageMob2x:te,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"}),a===2&&e.jsx(m,{$imageDesk1x:xe,$imageDesk2x:ce,$imageTab1x:pe,$imageTab2x:he,$imageMob1x:de,$imageMob2x:le,$heightMob:"290px",$heightTab:"368px",$heightDesk:"574px"}),a===3&&e.jsx(m,{$imageDesk1x:me,$imageDesk2x:ge,$imageTab1x:ue,$imageTab2x:ye,$imageMob1x:be,$imageMob2x:we,$heightMob:"288px",$heightTab:"366px",$heightDesk:"570px"}),a===4&&e.jsx(m,{$imageDesk1x:je,$imageDesk2x:fe,$imageTab1x:ke,$imageTab2x:ve,$imageMob1x:$e,$imageMob2x:Fe,$heightMob:"302px",$heightTab:"382px",$heightDesk:"594px"}),a===5&&e.jsx(m,{$imageDesk1x:Te,$imageDesk2x:Me,$imageTab1x:Se,$imageTab2x:Re,$imageMob1x:De,$imageMob2x:Ae,$heightMob:"304px",$heightTab:"384px",$heightDesk:"598px"})]})}const u=t(se)`
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
`;function Be({currentStep:a}){return e.jsxs(e.Fragment,{children:[a===1&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Sign up"}),e.jsx(u,{children:"You need to register to use the service"})]}),a===2&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Your goal"}),e.jsx(u,{children:"Choose a goal so that we can help you effectively"})]}),a===3&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Select gender, Age"}),e.jsxs(u,{children:["Choose a goal so that we can ",e.jsx("br",{}),"help you effectively"]})]}),a===4&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Body parameters"}),e.jsx(u,{children:"Enter your parameters for correct performance tracking"})]}),a===5&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Your Activity"}),e.jsxs(u,{children:["To correctly calculate calorie ",e.jsx("br",{}),"and water intake"]})]})]})}const Ne=/^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,qe=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,Ce=v().shape({name:b().required("Required").min(2,"Too Short!").max(70,"Too Long!"),email:b().required("Required").email("Invalid email").matches(Ne,"Invalid email address"),password:b().required("Required").min(7,"Min length: 7 characters").matches(qe,"Use uppercase, lowercase letters, number. Letters only in English.")}),Le=v().shape({goal:b().required("Required, choose one of three")}),Ue=v().shape({gender:b().required("Required, choose one of two"),age:D().required("Required").min(1,"Age can not be less than 1").max(120,"Age can not be more than 120").typeError("Age must be a number")}),Ge=v().shape({height:D().required("Required").min(140,"Height can not be less than 140").max(240,"Height can not be more than 240").typeError("Height must be a number"),weight:D().required("Required").min(40,"Weight can not be less than 40").max(220,"Weight can not be more than 220").typeError("Weight must be a number")});function Ie({handleNextStep:a,handleSubmit:c,userData:p}){const[i,x]=$.useState(!1),s=r=>{c(r),a()};return e.jsx(w,{initialValues:p,validationSchema:Ce,onSubmit:s,children:({errors:r,touched:n,isValid:o,isSubmitting:F})=>e.jsxs(ne,{children:[e.jsxs(M,{children:[e.jsx(S,{type:"text",name:"name",placeholder:"Name",className:n.name?r.name?"input-error":"input-success":"input-normal"}),e.jsx(k,{component:"p",name:"name"})]}),e.jsxs(M,{children:[e.jsx(S,{type:"email",name:"email",placeholder:"E-mail",className:n.email?r.email?"input-error":"input-success":"input-normal"}),e.jsx(k,{component:"p",name:"email"})]}),e.jsxs(M,{children:[e.jsx(S,{type:i?"text":"password",name:"password",placeholder:"Password",autoComplete:"off",className:n.password?r.password?"input-error":"input-success":"input-normal",onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1)}),e.jsx(k,{component:"p",name:"password"}),!r.password&&n.password&&e.jsx(re,{children:"Password is secure"}),n.password&&!r.password&&e.jsx(f,{width:"32px",height:"32px",children:e.jsx("use",{href:`${j}#correct`})}),n.password&&r.password&&e.jsx(f,{width:"32px",height:"32px",children:e.jsx("use",{href:`${j}#error`})}),!n.password&&!i&&e.jsx(f,{width:"32px",height:"32px",children:e.jsx("use",{href:`${j}#eye-off`})}),i&&!n.password&&e.jsx(f,{width:"32px",height:"32px",children:e.jsx("use",{href:`${j}#eye`})})]}),e.jsx(oe,{type:"submit",disabled:!o||F,children:"Next"})]})})}const We=t(B)`
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
`,He=t.div`
  position: relative;
  @media screen and (min-width: 834px) {
    display: flex;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 0px;
  }
`,Pe=t(d)`
  width: 100%;
  margin-top: 24px;
`,U=t(d)`
  width: 192px;
  height: 20px;
  margin: 20px auto 0;
  font-weight: 400;
  background-color: transparent;
  color: var(--Color-Primary-Grey, #b6b6b6);
  &:hover {
    box-shadow: none;
  }
`,Ve=t(k)`
  top: -32px;
  left: 20px;
`;function ze({handleNextStep:a,handleSubmit:c,userData:p,handlePrevStep:i}){const x=s=>{c(s),a()};return e.jsx(w,{initialValues:p,validationSchema:Le,onSubmit:x,children:({isValid:s,isSubmitting:r})=>e.jsxs(We,{children:[e.jsxs(He,{children:[e.jsxs(R,{children:[e.jsx(h,{type:"radio",name:"goal",value:"Lose fat"}),"Lose Fat"]}),e.jsxs(R,{children:[e.jsx(h,{type:"radio",name:"goal",value:"Maintain"}),"Maintain"]}),e.jsxs(R,{children:[e.jsx(h,{type:"radio",name:"goal",value:"Gain muscle"}),"Gain Muscle"]}),e.jsx(Ve,{component:"p",name:"goal"})]}),e.jsx(Pe,{type:"submit",disabled:!s||r,children:"Next"}),e.jsx(U,{onClick:i,children:"Back"})]})})}const G=t(B)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
    width: 444px;
  }
`,I=t(d)`
  width: 192px;
  height: 20px;
  margin: 20px auto 0;
  font-weight: 400;
  background-color: transparent;
  color: var(--Color-Primary-Grey, #b6b6b6);
  &:hover {
    box-shadow: none;
  }
`,Ye=t(d)`
  width: 100%;
  margin-top: 40px;
`,Ze=t.p`
  font-weight: 500;
`,_e=t.div`
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
`,Oe=t.label`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 500;
  position: relative;
`,E=t(L)`
  position: absolute;
  left: 10px;
  top: 58px;
`,Je=t(L)`
  position: absolute;
  top: -26px;
  left: 20px;
`;function Ke({handleNextStep:a,handleSubmit:c,userData:p,handlePrevStep:i}){const x=s=>{c({...s,age:Number(s.age)}),a()};return e.jsx(w,{initialValues:p,validationSchema:Ue,onSubmit:x,children:({errors:s,touched:r,isSubmitting:n,isValid:o})=>e.jsxs(G,{children:[e.jsx(Ze,{children:"Gender"}),e.jsxs(_e,{children:[e.jsxs(q,{children:[e.jsx(h,{type:"radio",name:"gender",value:"Male"}),"Male"]}),e.jsxs(q,{children:[e.jsx(h,{type:"radio",name:"gender",value:"Female"}),"Female"]}),e.jsx(Je,{component:"p",name:"gender"})]}),e.jsxs(Oe,{children:["Your age",e.jsx(A,{type:"text",name:"age",placeholder:"Enter your age",className:r.age?s.age?"input-error":"input-success":"input-normal"}),e.jsx(E,{component:"p",name:"age"})]}),e.jsx(Ye,{type:"submit",disabled:!o||n,children:"Next"}),e.jsx(I,{onClick:i,children:"Back"})]})})}const Qe=t(B)`
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
`,Xe=t(d)`
  margin-top: 40px;
  width: 100%;
`;function ea({handleNextStep:a,handleSubmit:c,userData:p,handlePrevStep:i}){const x=s=>{c({...s,weight:Number(s.weight),height:Number(s.height)}),a()};return e.jsx(w,{initialValues:p,validationSchema:Ge,onSubmit:x,children:({errors:s,touched:r,isSubmitting:n,isValid:o})=>e.jsxs(Qe,{children:[e.jsxs(C,{children:["Height",e.jsx(A,{type:"text",name:"height",placeholder:"Enter your height",className:r.height?s.height?"input-error":"input-success":"input-normal"}),e.jsx(E,{component:"p",name:"height"})]}),e.jsxs(C,{children:["Weight",e.jsx(A,{type:"text",name:"weight",placeholder:"Enter your weight",className:r.weight?s.weight?"input-error":"input-success":"input-normal"}),e.jsx(E,{component:"p",name:"weight"})]}),e.jsx(Xe,{type:"submit",disabled:!o||n,children:"Next"}),e.jsx(I,{onClick:i,children:"Back"})]})})}const aa=t(G)`
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
`,ia=t(d)`
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
`,ta=t(U)`
  @media screen and (min-width: 1440px) {
    width: 212px;
    margin-left: 0;
  }
`,sa=t.p`
  position: absolute;
  top: -20px;
  left: 18px;
  font-size: 12px;
  color: #e74a3b;
`;function na({userData:a,handlePrevStep:c,handleSubmitForm:p,handleChange:i}){const[x,s]=$.useState(!1),r=()=>{x||p()},n=o=>{s(o)};return e.jsx(w,{initialValues:a,onSubmit:r,children:()=>e.jsxs(aa,{children:[e.jsxs(y,{children:[e.jsx(h,{onChange:o=>i(Number(o.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.2",checked:a.activityRatio===1.2}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(y,{children:[e.jsx(h,{onChange:o=>i(Number(o.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.375",checked:a.activityRatio===1.375}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(y,{children:[e.jsx(h,{onChange:o=>i(Number(o.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.55",checked:a.activityRatio===1.55}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(y,{children:[e.jsx(h,{onChange:o=>i(Number(o.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.725",checked:a.activityRatio===1.725}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(y,{children:[e.jsx(h,{onChange:o=>i(Number(o.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.9",checked:a.activityRatio===1.9}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]}),x&&a.activityRatio===""&&e.jsx(sa,{children:"Required, choose one of five"}),e.jsx(ia,{type:"submit",onClick:()=>{a.activityRatio===""?n(!0):n(!1)},children:"Sign Up"}),e.jsx(ta,{onClick:c,children:"Back"})]})})}function ra({currentStep:a,handleNextStep:c,handlePrevStep:p}){const[i,x]=$.useState({name:"",email:"",password:"",goal:"",gender:"",age:"",height:"",weight:"",activityRatio:""}),s=W(),r=H(),n=l=>{x(T=>({...T,...l}))},o=l=>{x(T=>({...T,activityRatio:l}))},F=async()=>{try{await s(P(i)).unwrap(),N.success("You have successfully signed up!"),r("/signin")}catch(l){N.error(`Something went wrong! ${l.message}`)}};return e.jsxs(e.Fragment,{children:[a===1&&e.jsx(Ie,{handleNextStep:c,handleSubmit:n,userData:i}),a===2&&e.jsx(ze,{handleNextStep:c,handleSubmit:n,userData:i,handlePrevStep:p}),a===3&&e.jsx(Ke,{handleNextStep:c,handleSubmit:n,userData:i,handlePrevStep:p}),a===4&&e.jsx(ea,{handleNextStep:c,handleSubmit:n,userData:i,handlePrevStep:p}),a===5&&e.jsx(na,{userData:i,handlePrevStep:p,handleSubmitForm:F,handleChange:o})]})}function la(){const[a,c]=$.useState(1),p=()=>{c(x=>x+1)},i=()=>{c(x=>x-1)};return e.jsx(z,{children:e.jsx(V,{children:e.jsxs(Y,{children:[e.jsx(Z,{children:e.jsx(Ee,{currentStep:a})}),e.jsxs(_,{children:[e.jsx(Be,{currentStep:a}),e.jsx(ra,{currentStep:a,handleNextStep:p,handlePrevStep:i}),a===1&&e.jsxs(O,{children:[e.jsx(J,{children:"Do you already have an account?"}),e.jsx(K,{to:"/signin",children:"Sign in"})]})]})]})})})}export{la as default};
