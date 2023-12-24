import{j as e,s as t,r as D,u as L,a as W,b as I,n as E,C as H}from"./index-696ca15b.js";import{B as m,M as P,F as z,I as V,T as Y,S as Z,a as _,b as O}from"./SignUpImage.styled-a75427d4.js";import{w as J,a as K,b as Q,c as X,d as ee,e as ae}from"./watch-desk@2x-2cdfc254.js";import{a as te,H as g,B as d}from"./Components.styled-910bfb1a.js";import{c as k,a as f,b as A,d as v,e as b,f as S,F as w,g as h}from"./Formik.styled-c50314a8.js";import"./SignInPage.styled-04f7fdc5.js";const ie="/healthy-way/assets/hiking-desk@1x-867f5633.png",se="/healthy-way/assets/hiking-desk@2x-e58c3520.png",ne="/healthy-way/assets/hiking-tab@1x-1073b886.png",re="/healthy-way/assets/hiking-tab@2x-51fd2364.png",oe="/healthy-way/assets/hiking-mob@1x-19e0c6c9.png",ce="/healthy-way/assets/hiking-mob@2x-1b2c3203.png",xe="/healthy-way/assets/fitness-desk@1x-02917009.png",pe="/healthy-way/assets/fitness-desk@2x-9b02aeb0.png",he="/healthy-way/assets/fitness-tab@1x-4e471a75.png",de="/healthy-way/assets/fitness-tab@2x-27b080de.png",le="/healthy-way/assets/fitness-mob@1x-942df0aa.png",me="/healthy-way/assets/fitness-mob@2x-5570cf98.png",ge="/healthy-way/assets/parametrs-desk@1x-fb8dec06.png",ue="/healthy-way/assets/parametrs-desk@2x-ad138520.png",ye="/healthy-way/assets/parameters-tab@1x-f269c222.png",be="/healthy-way/assets/parameters-tab@2x-25197ad8.png",we="/healthy-way/assets/parameters-mob@1x-fba6cca4.png",je="/healthy-way/assets/parameters-mob@2x-a074fcff.png",fe="/healthy-way/assets/activity-desk@1x-a756ff63.png",ke="/healthy-way/assets/activity-desk@2x-268b7897.png",ve="/healthy-way/assets/activity-tab@1x-c17492e3.png",$e="/healthy-way/assets/activity-tab@2x-d532ca7f.png",Fe="/healthy-way/assets/activity-mob@1x-96e8d684.png",Te="/healthy-way/assets/activity-mob@2x-d105836c.png";function Me({currentStep:a}){return e.jsxs(e.Fragment,{children:[a===1&&e.jsx(m,{$imageDesk1x:J,$imageDesk2x:K,$imageTab1x:Q,$imageTab2x:X,$imageMob1x:ee,$imageMob2x:ae,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"}),a===2&&e.jsx(m,{$imageDesk1x:ie,$imageDesk2x:se,$imageTab1x:ne,$imageTab2x:re,$imageMob1x:oe,$imageMob2x:ce,$heightMob:"290px",$heightTab:"368px",$heightDesk:"574px"}),a===3&&e.jsx(m,{$imageDesk1x:xe,$imageDesk2x:pe,$imageTab1x:he,$imageTab2x:de,$imageMob1x:le,$imageMob2x:me,$heightMob:"288px",$heightTab:"366px",$heightDesk:"570px"}),a===4&&e.jsx(m,{$imageDesk1x:ge,$imageDesk2x:ue,$imageTab1x:ye,$imageTab2x:be,$imageMob1x:we,$imageMob2x:je,$heightMob:"302px",$heightTab:"382px",$heightDesk:"594px"}),a===5&&e.jsx(m,{$imageDesk1x:fe,$imageDesk2x:ke,$imageTab1x:ve,$imageTab2x:$e,$imageMob1x:Fe,$imageMob2x:Te,$heightMob:"304px",$heightTab:"384px",$heightDesk:"598px"})]})}const u=t(te)`
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
`;function Se({currentStep:a}){return e.jsxs(e.Fragment,{children:[a===1&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Sign up"}),e.jsx(u,{children:"You need to register to use the service"})]}),a===2&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Your goal"}),e.jsx(u,{children:"Choose a goal so that we can help you effectively"})]}),a===3&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Select gender, Age"}),e.jsxs(u,{children:["Choose a goal so that we can ",e.jsx("br",{}),"help you effectively"]})]}),a===4&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Body parameters"}),e.jsx(u,{children:"Enter your parameters for correct performance tracking"})]}),a===5&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Your Activity"}),e.jsxs(u,{children:["To correctly calculate calorie ",e.jsx("br",{}),"and water intake"]})]})]})}const Re=t(k)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
    width: 444px;
  }
`,F=t(f)`
  width: 100%;
`,De=t(d)`
  margin-top: 40px;
  width: 100%;
`,j=t(A)`
  position: absolute;
  top: 25px;
  left: 10px;
`,T=t.div`
  position: relative;
  &:not(:first-child) {
    margin-top: 20px;
  }
`,Ae=/^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,Ee=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,Be=v().shape({name:b().required("Required").min(2,"Too Short!").max(70,"Too Long!"),email:b().required("Required").email("Invalid email").matches(Ae,"Invalid email address"),password:b().required("Required").min(7,"Min length: 7 characters").matches(Ee,"Use uppercase, lowercase letters, number. Letters only in English.")}),Ne=v().shape({goal:b().required("Required, choose one of three")}),qe=v().shape({gender:b().required("Required, choose one of two"),age:S().required("Required").min(1,"Age can not be less than 1").max(120,"Age can not be more than 120").typeError("Age must be a number")}),Ce=v().shape({height:S().required("Required").min(140,"Height can not be less than 140").max(240,"Height can not be more than 240").typeError("Height must be a number"),weight:S().required("Required").min(40,"Weight can not be less than 40").max(220,"Weight can not be more than 220").typeError("Weight must be a number")});function Ue({handleNextStep:a,handleSubmit:r,userData:c}){const s=n=>{r(n),a()};return e.jsx(w,{initialValues:c,validationSchema:Be,onSubmit:s,children:({errors:n,touched:i,isValid:x,isSubmitting:p})=>e.jsxs(Re,{children:[e.jsxs(T,{children:[e.jsx(F,{type:"text",name:"name",placeholder:"Name",className:i.name?n.name?"input-error":"input-success":"input-normal"}),e.jsx(j,{component:"p",name:"name"})]}),e.jsxs(T,{children:[e.jsx(F,{type:"email",name:"email",placeholder:"E-mail",className:i.email?n.email?"input-error":"input-success":"input-normal"}),e.jsx(j,{component:"p",name:"email"})]}),e.jsxs(T,{children:[e.jsx(F,{type:"password",name:"password",placeholder:"Password",className:i.password?n.password?"input-error":"input-success":"input-normal"}),e.jsx(j,{component:"p",name:"password"})]}),e.jsx(De,{type:"submit",disabled:!x||p,children:"Next"})]})})}const Ge=t(k)`
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
  }
`,M=t.label`
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
`,Le=t.div`
  position: relative;
  @media screen and (min-width: 834px) {
    display: flex;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 0px;
  }
`,We=t(d)`
  width: 100%;
  margin-top: 24px;
`,q=t(d)`
  width: 192px;
  height: 20px;
  margin: 20px auto 0;
  font-weight: 400;
  background-color: transparent;
  color: var(--Color-Primary-Grey, #b6b6b6);
  &:hover {
    box-shadow: none;
  }
`,Ie=t(j)`
  top: -32px;
  left: 20px;
`;function He({handleNextStep:a,handleSubmit:r,userData:c,handlePrevStep:s}){const n=i=>{r(i),a()};return e.jsx(w,{initialValues:c,validationSchema:Ne,onSubmit:n,children:({isValid:i,isSubmitting:x})=>e.jsxs(Ge,{children:[e.jsxs(Le,{children:[e.jsxs(M,{children:[e.jsx(h,{type:"radio",name:"goal",value:"Lose fat"}),"Lose Fat"]}),e.jsxs(M,{children:[e.jsx(h,{type:"radio",name:"goal",value:"Maintain"}),"Maintain"]}),e.jsxs(M,{children:[e.jsx(h,{type:"radio",name:"goal",value:"Gain muscle"}),"Gain Muscle"]}),e.jsx(Ie,{component:"p",name:"goal"})]}),e.jsx(We,{type:"submit",disabled:!i||x,children:"Next"}),e.jsx(q,{onClick:s,children:"Back"})]})})}const C=t(k)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
    width: 444px;
  }
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
`,Pe=t(d)`
  width: 100%;
  margin-top: 40px;
`,ze=t.p`
  font-weight: 500;
`,Ve=t.div`
  position: relative;

  margin-top: 12px;
  display: flex;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`,B=t.label`
  width: 140px;
  display: flex;
  gap: 8px;
  align-items: center;
`,Ye=t.label`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 500;
  position: relative;
`,R=t(A)`
  position: absolute;
  left: 10px;
  top: 58px;
`,Ze=t(A)`
  position: absolute;
  top: -26px;
  left: 20px;
`;function _e({handleNextStep:a,handleSubmit:r,userData:c,handlePrevStep:s}){const n=i=>{r({...i,age:Number(i.age)}),a()};return e.jsx(w,{initialValues:c,validationSchema:qe,onSubmit:n,children:({errors:i,touched:x,isSubmitting:p,isValid:o})=>e.jsxs(C,{children:[e.jsx(ze,{children:"Gender"}),e.jsxs(Ve,{children:[e.jsxs(B,{children:[e.jsx(h,{type:"radio",name:"gender",value:"Male"}),"Male"]}),e.jsxs(B,{children:[e.jsx(h,{type:"radio",name:"gender",value:"Female"}),"Female"]}),e.jsx(Ze,{component:"p",name:"gender"})]}),e.jsxs(Ye,{children:["Your age",e.jsx(f,{type:"text",name:"age",placeholder:"Enter your age",className:x.age?i.age?"input-error":"input-success":"input-normal"}),e.jsx(R,{component:"p",name:"age"})]}),e.jsx(Pe,{type:"submit",disabled:!o||p,children:"Next"}),e.jsx(U,{onClick:s,children:"Back"})]})})}const Oe=t(k)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
  }
`,N=t.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 500;
  position: relative;

  &:not(:first-child) {
    margin-top: 24px;
  }
`,Je=t(d)`
  margin-top: 40px;
  width: 100%;
`;function Ke({handleNextStep:a,handleSubmit:r,userData:c,handlePrevStep:s}){const n=i=>{r({...i,weight:Number(i.weight),height:Number(i.height)}),a()};return e.jsx(w,{initialValues:c,validationSchema:Ce,onSubmit:n,children:({errors:i,touched:x,isSubmitting:p,isValid:o})=>e.jsxs(Oe,{children:[e.jsxs(N,{children:["Height",e.jsx(f,{type:"text",name:"height",placeholder:"Enter your height",className:x.height?i.height?"input-error":"input-success":"input-normal"}),e.jsx(R,{component:"p",name:"height"})]}),e.jsxs(N,{children:["Weight",e.jsx(f,{type:"text",name:"weight",placeholder:"Enter your weight",className:x.weight?i.weight?"input-error":"input-success":"input-normal"}),e.jsx(R,{component:"p",name:"weight"})]}),e.jsx(Je,{type:"submit",disabled:!o||p,children:"Next"}),e.jsx(U,{onClick:s,children:"Back"})]})})}const Qe=t(C)`
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
`,Xe=t(d)`
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
`,ea=t(q)`
  @media screen and (min-width: 1440px) {
    width: 212px;
    margin-left: 0;
  }
`,aa=t.p`
  position: absolute;
  top: -20px;
  left: 18px;
  font-size: 12px;
  color: #e74a3b;
`;function ta({userData:a,handlePrevStep:r,handleSubmitForm:c,handleChange:s}){const[n,i]=D.useState(!1),x=()=>{n||c()},p=o=>{i(o)};return e.jsx(w,{initialValues:a,onSubmit:x,children:()=>e.jsxs(Qe,{children:[e.jsxs(y,{children:[e.jsx(h,{onChange:o=>s(Number(o.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.2",checked:a.activityRatio===1.2}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(y,{children:[e.jsx(h,{onChange:o=>s(Number(o.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.375",checked:a.activityRatio===1.375}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(y,{children:[e.jsx(h,{onChange:o=>s(Number(o.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.55",checked:a.activityRatio===1.55}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(y,{children:[e.jsx(h,{onChange:o=>s(Number(o.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.725",checked:a.activityRatio===1.725}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(y,{children:[e.jsx(h,{onChange:o=>s(Number(o.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.9",checked:a.activityRatio===1.9}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]}),n&&a.activityRatio===""&&e.jsx(aa,{children:"Required, choose one of five"}),e.jsx(Xe,{type:"submit",onClick:()=>{a.activityRatio===""?p(!0):(p(!1),x())},children:"Sign Up"}),e.jsx(ea,{onClick:r,children:"Back"})]})})}function ia({currentStep:a,handleNextStep:r,handlePrevStep:c}){const[s,n]=D.useState({name:"",email:"",password:"",goal:"",gender:"",age:"",height:"",weight:"",activityRatio:""}),i=L(),x=W(),p=l=>{n($=>({...$,...l}))},o=l=>{n($=>({...$,activityRatio:l}))},G=async()=>{try{await i(I(s)).unwrap(),E.success("You have successfully signed up!"),x("/signin")}catch(l){E.error(`Something went wrong! ${l.message}`)}};return e.jsxs(e.Fragment,{children:[a===1&&e.jsx(Ue,{handleNextStep:r,handleSubmit:p,userData:s}),a===2&&e.jsx(He,{handleNextStep:r,handleSubmit:p,userData:s,handlePrevStep:c}),a===3&&e.jsx(_e,{handleNextStep:r,handleSubmit:p,userData:s,handlePrevStep:c}),a===4&&e.jsx(Ke,{handleNextStep:r,handleSubmit:p,userData:s,handlePrevStep:c}),a===5&&e.jsx(ta,{userData:s,handlePrevStep:c,handleSubmitForm:G,handleChange:o})]})}function pa(){const[a,r]=D.useState(1),c=()=>{r(n=>n+1)},s=()=>{r(n=>n-1)};return e.jsx(P,{children:e.jsx(H,{children:e.jsxs(z,{children:[e.jsx(V,{children:e.jsx(Me,{currentStep:a})}),e.jsxs(Y,{children:[e.jsx(Se,{currentStep:a}),e.jsx(ia,{currentStep:a,handleNextStep:c,handlePrevStep:s}),a===1&&e.jsxs(Z,{children:[e.jsx(_,{children:"Do you already have an account?"}),e.jsx(O,{to:"/signin",children:"Sign in"})]})]})]})})})}export{pa as default};
