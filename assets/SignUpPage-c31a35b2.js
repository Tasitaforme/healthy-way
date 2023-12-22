import{j as e,s as i,u as W,r as C,n as S,a as B,C as G}from"./index-8810eb52.js";import{B as l,M as L,F as I,I as N,T as H,b as P,c as z,d as V}from"./SignUpImage.styled-df52937f.js";import{w as Y,a as Z,b as _,c as O,d as J,e as K}from"./watch-desk@2x-2cdfc254.js";import{a as Q,H as m,B as d}from"./Components.styled-84682f4e.js";import{c as f,a as w,b as k,d as u,e as h,f as M,F as b,g as p}from"./Formik.styled-f7604398.js";const X="/healthy-way/assets/hiking-desk@1x-867f5633.png",ee="/healthy-way/assets/hiking-desk@2x-e58c3520.png",ae="/healthy-way/assets/hiking-tab@1x-1073b886.png",ie="/healthy-way/assets/hiking-tab@2x-51fd2364.png",te="/healthy-way/assets/hiking-mob@1x-19e0c6c9.png",se="/healthy-way/assets/hiking-mob@2x-1b2c3203.png",ne="/healthy-way/assets/fitness-desk@1x-02917009.png",oe="/healthy-way/assets/fitness-desk@2x-9b02aeb0.png",re="/healthy-way/assets/fitness-tab@1x-4e471a75.png",xe="/healthy-way/assets/fitness-tab@2x-27b080de.png",pe="/healthy-way/assets/fitness-mob@1x-942df0aa.png",ce="/healthy-way/assets/fitness-mob@2x-5570cf98.png",de="/healthy-way/assets/parametrs-desk@1x-fb8dec06.png",he="/healthy-way/assets/parametrs-desk@2x-ad138520.png",le="/healthy-way/assets/parameters-tab@1x-f269c222.png",me="/healthy-way/assets/parameters-tab@2x-25197ad8.png",ge="/healthy-way/assets/parameters-mob@1x-fba6cca4.png",ye="/healthy-way/assets/parameters-mob@2x-a074fcff.png",ue="/healthy-way/assets/activity-desk@1x-a756ff63.png",be="/healthy-way/assets/activity-desk@2x-268b7897.png",je="/healthy-way/assets/activity-tab@1x-c17492e3.png",we="/healthy-way/assets/activity-tab@2x-d532ca7f.png",fe="/healthy-way/assets/activity-mob@1x-96e8d684.png",ke="/healthy-way/assets/activity-mob@2x-d105836c.png";function ve({currentStep:a}){return e.jsxs(e.Fragment,{children:[a===1&&e.jsx(l,{$imageDesk1x:Y,$imageDesk2x:Z,$imageTab1x:_,$imageTab2x:O,$imageMob1x:J,$imageMob2x:K,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"}),a===2&&e.jsx(l,{$imageDesk1x:X,$imageDesk2x:ee,$imageTab1x:ae,$imageTab2x:ie,$imageMob1x:te,$imageMob2x:se,$heightMob:"290px",$heightTab:"368px",$heightDesk:"574px"}),a===3&&e.jsx(l,{$imageDesk1x:ne,$imageDesk2x:oe,$imageTab1x:re,$imageTab2x:xe,$imageMob1x:pe,$imageMob2x:ce,$heightMob:"288px",$heightTab:"366px",$heightDesk:"570px"}),a===4&&e.jsx(l,{$imageDesk1x:de,$imageDesk2x:he,$imageTab1x:le,$imageTab2x:me,$imageMob1x:ge,$imageMob2x:ye,$heightMob:"302px",$heightTab:"382px",$heightDesk:"594px"}),a===5&&e.jsx(l,{$imageDesk1x:ue,$imageDesk2x:be,$imageTab1x:je,$imageTab2x:we,$imageMob1x:fe,$imageMob2x:ke,$heightMob:"304px",$heightTab:"384px",$heightDesk:"598px"})]})}const g=i(Q)`
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
`;function $e({currentStep:a}){return e.jsxs(e.Fragment,{children:[a===1&&e.jsxs(e.Fragment,{children:[e.jsx(m,{children:"Sign up"}),e.jsx(g,{children:"You need to register to use the service"})]}),a===2&&e.jsxs(e.Fragment,{children:[e.jsx(m,{children:"Your goal"}),e.jsx(g,{children:"Choose a goal so that we can help you effectively"})]}),a===3&&e.jsxs(e.Fragment,{children:[e.jsx(m,{children:"Select gender, Age"}),e.jsxs(g,{children:["Choose a goal so that we can ",e.jsx("br",{}),"help you effectively"]})]}),a===4&&e.jsxs(e.Fragment,{children:[e.jsx(m,{children:"Body parameters"}),e.jsx(g,{children:"Enter your parameters for correct performance tracking"})]}),a===5&&e.jsxs(e.Fragment,{children:[e.jsx(m,{children:"Your Activity"}),e.jsxs(g,{children:["To correctly calculate calorie ",e.jsx("br",{}),"and water intake"]})]})]})}const Fe=i(f)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
    width: 444px;
  }
`,$=i(w)`
  width: 100%;
`,Te=i(d)`
  margin-top: 40px;
  width: 100%;
`,j=i(k)`
  position: absolute;
  top: 25px;
  left: 10px;
`,F=i.div`
  position: relative;
  &:not(:first-child) {
    margin-top: 20px;
  }
`,Me=/^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,De=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,Se=u().shape({name:h().required("Required").min(2,"Too Short!").max(70,"Too Long!"),email:h().required("Required").email("Invalid email").matches(Me,"Invalid email address"),password:h().required("Required").min(7,"Min length: 7 characters").matches(De,"Use uppercase, lowercase letters, number. Letters only in English.")}),Ae=u().shape({goal:h().required("Required, choose one of three")}),Re=u().shape({gender:h().required("Required, choose one of two"),age:M().required("Required").min(1,"Age can not be less than 1").max(120,"Age can not be more than 120").typeError("Age must be a number")}),Be=u().shape({height:M().required("Required").min(120,"Height can not be less than 120").max(250,"Height can not be more than 250").typeError("Height must be a number"),weight:M().required("Required").min(30,"Weight can not be less than 30").max(250,"Weight can not be more than 250").typeError("Weight must be a number")}),Ee=u().shape({activityRatio:h().required("Required, choose one of five")});function qe({handleNextStep:a,handleSubmit:n,userData:r}){const o=s=>{n(s),a()};return e.jsx(b,{initialValues:r,validationSchema:Se,onSubmit:o,children:({errors:s,touched:t,isValid:x,isSubmitting:c})=>e.jsxs(Fe,{children:[e.jsxs(F,{children:[e.jsx($,{type:"text",name:"name",placeholder:"Name",className:t.name?s.name?"input-error":"input-success":"input-normal"}),e.jsx(j,{component:"p",name:"name"})]}),e.jsxs(F,{children:[e.jsx($,{type:"email",name:"email",placeholder:"E-mail",className:t.email?s.email?"input-error":"input-success":"input-normal"}),e.jsx(j,{component:"p",name:"email"})]}),e.jsxs(F,{children:[e.jsx($,{type:"password",name:"password",placeholder:"Password",className:t.password?s.password?"input-error":"input-success":"input-normal"}),e.jsx(j,{component:"p",name:"password"})]}),e.jsx(Te,{type:"submit",disabled:!x||c,children:"Next"})]})})}const Ue=i(f)`
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
  }
`,T=i.label`
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
`,We=i.div`
  position: relative;
  @media screen and (min-width: 834px) {
    display: flex;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 0px;
  }
`,Ce=i(d)`
  width: 100%;
  margin-top: 24px;
`,E=i(d)`
  width: 192px;
  height: 20px;
  margin: 20px auto 0;
  font-weight: 400;
  background-color: transparent;
  color: var(--Color-Primary-Grey, #b6b6b6);
  &:hover {
    box-shadow: none;
  }
`,Ge=i(j)`
  top: -32px;
  left: 20px;
`;function Le({handleNextStep:a,handleSubmit:n,userData:r,handlePrevStep:o}){const s=t=>{n(t),a()};return e.jsx(b,{initialValues:r,validationSchema:Ae,onSubmit:s,children:({isValid:t,isSubmitting:x})=>e.jsxs(Ue,{children:[e.jsxs(We,{children:[e.jsxs(T,{children:[e.jsx(p,{type:"radio",name:"goal",value:"lose fat"}),"Lose Fat"]}),e.jsxs(T,{children:[e.jsx(p,{type:"radio",name:"goal",value:"maintain"}),"Maintain"]}),e.jsxs(T,{children:[e.jsx(p,{type:"radio",name:"goal",value:"gain muscle"}),"Gain Muscle"]}),e.jsx(Ge,{component:"p",name:"goal"})]}),e.jsx(Ce,{type:"submit",disabled:!t||x,children:"Next"}),e.jsx(E,{onClick:o,children:"Back"})]})})}const q=i(f)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
    width: 444px;
  }
`,U=i(d)`
  width: 192px;
  height: 20px;
  margin: 20px auto 0;
  font-weight: 400;
  background-color: transparent;
  color: var(--Color-Primary-Grey, #b6b6b6);
  &:hover {
    box-shadow: none;
  }
`,Ie=i(d)`
  width: 100%;
  margin-top: 40px;
`,Ne=i.p`
  font-weight: 500;
`,He=i.div`
  position: relative;

  margin-top: 12px;
  display: flex;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`,A=i.label`
  width: 140px;
  display: flex;
  gap: 8px;
  align-items: center;
`,Pe=i.label`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 500;
  position: relative;
`,D=i(k)`
  position: absolute;
  left: 10px;
  top: 58px;
`,ze=i(k)`
  position: absolute;
  top: -26px;
  left: 20px;
`;function Ve({handleNextStep:a,handleSubmit:n,userData:r,handlePrevStep:o}){const s=t=>{n(t),a()};return e.jsx(b,{initialValues:r,validationSchema:Re,onSubmit:s,children:({errors:t,touched:x,isSubmitting:c,isValid:v})=>e.jsxs(q,{children:[e.jsx(Ne,{children:"Gender"}),e.jsxs(He,{children:[e.jsxs(A,{children:[e.jsx(p,{type:"radio",name:"gender",value:"male"}),"Male"]}),e.jsxs(A,{children:[e.jsx(p,{type:"radio",name:"gender",value:"female"}),"Female"]}),e.jsx(ze,{component:"p",name:"gender"})]}),e.jsxs(Pe,{children:["Your age",e.jsx(w,{type:"text",name:"age",placeholder:"Enter your age",className:x.age?t.age?"input-error":"input-success":"input-normal"}),e.jsx(D,{component:"p",name:"age"})]}),e.jsx(Ie,{type:"submit",disabled:!v||c,children:"Next"}),e.jsx(U,{onClick:o,children:"Back"})]})})}const Ye=i(f)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
  }
`,R=i.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 500;
  position: relative;

  &:not(:first-child) {
    margin-top: 24px;
  }
`,Ze=i(d)`
  margin-top: 40px;
  width: 100%;
`;function _e({handleNextStep:a,handleSubmit:n,userData:r,handlePrevStep:o}){const s=t=>{n(t),a()};return e.jsx(b,{initialValues:r,validationSchema:Be,onSubmit:s,children:({errors:t,touched:x,isSubmitting:c,isValid:v})=>e.jsxs(Ye,{children:[e.jsxs(R,{children:["Height",e.jsx(w,{type:"text",name:"height",placeholder:"Enter your height",className:x.height?t.height?"input-error":"input-success":"input-normal"}),e.jsx(D,{component:"p",name:"height"})]}),e.jsxs(R,{children:["Weight",e.jsx(w,{type:"text",name:"weight",placeholder:"Enter your weight",className:x.weight?t.weight?"input-error":"input-success":"input-normal"}),e.jsx(D,{component:"p",name:"weight"})]}),e.jsx(Ze,{type:"submit",disabled:!v||c,children:"Next"}),e.jsx(U,{onClick:o,children:"Back"})]})})}const Oe=i(q)`
  position: relative;

  @media screen and (min-width: 834px) {
    padding: 0px;
    width: 460px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    padding: 0px 116px 0px 0px;
  }
`,y=i.label`
  display: flex;
  gap: 8px;
  align-items: center;

  &:not(:first-child) {
    margin-top: 16px;
  }
`,Je=i(d)`
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
`,Ke=i(E)`
  @media screen and (min-width: 1440px) {
    width: 212px;
    margin-left: 0;
  }
`,Qe=i(k)`
  position: absolute;
  top: -30px;
  left: 18px;
`;function Xe({handleSubmit:a,userData:n,handlePrevStep:r}){const o=W(),s=async t=>{await a(t);try{await o(C(n)),S.success("You have successfully signed up!")}catch{S.error("Wrong data! Try again!")}};return e.jsx(b,{initialValues:n,validationSchema:Ee,onSubmit:s,children:({isSubmitting:t,isValid:x})=>e.jsxs(Oe,{children:[e.jsxs(y,{children:[e.jsx(p,{type:"radio",name:"activityRatio",value:"1.2"}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(y,{children:[e.jsx(p,{type:"radio",name:"activityRatio",value:"1.375"}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(y,{children:[e.jsx(p,{type:"radio",name:"activityRatio",value:"1.55"}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(y,{children:[e.jsx(p,{type:"radio",name:"activityRatio",value:"1.725"}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(y,{children:[e.jsx(p,{type:"radio",name:"activityRatio",value:"1.9"}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]}),e.jsx(Qe,{component:"p",name:"activityRatio"}),e.jsx(Je,{type:"submit",disabled:!x||t,children:"Sign Up"}),e.jsx(Ke,{onClick:r,children:"Back"})]})})}function ea({currentStep:a,handleNextStep:n,handlePrevStep:r}){const[o,s]=B.useState({name:"",email:"",password:"",goal:"",gender:"",age:"",height:"",weight:"",activityRatio:""}),t=x=>{s(c=>({...c,...x}))};return e.jsxs(e.Fragment,{children:[a===1&&e.jsx(qe,{handleNextStep:n,handleSubmit:t,userData:o}),a===2&&e.jsx(Le,{handleNextStep:n,handleSubmit:t,userData:o,handlePrevStep:r}),a===3&&e.jsx(Ve,{handleNextStep:n,handleSubmit:t,userData:o,handlePrevStep:r}),a===4&&e.jsx(_e,{handleNextStep:n,handleSubmit:t,userData:o,handlePrevStep:r}),a===5&&e.jsx(Xe,{handleSubmit:t,userData:o,handlePrevStep:r})]})}function oa(){const[a,n]=B.useState(1),r=()=>{n(s=>s+1)},o=()=>{n(s=>s-1)};return e.jsx(L,{children:e.jsx(G,{children:e.jsxs(I,{children:[e.jsx(N,{children:e.jsx(ve,{currentStep:a})}),e.jsxs(H,{children:[e.jsx($e,{currentStep:a}),e.jsx(ea,{currentStep:a,handleNextStep:r,handlePrevStep:o}),a===1&&e.jsxs(P,{children:[e.jsx(z,{children:"Do you already have an account?"}),e.jsx(V,{to:"/signin",children:"Sign in"})]})]})]})})})}export{oa as default};
