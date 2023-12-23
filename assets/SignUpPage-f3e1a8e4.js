import{j as e,s as i,u as U,a as G,r as L,n as S,b as B,C}from"./index-f6028f7a.js";import{B as m,M as W,F as I,I as H,T as P,S as z,a as V,b as Y}from"./SignUpImage.styled-c9bbaf08.js";import{w as Z,a as _,b as O,c as J,d as K,e as Q}from"./watch-desk@2x-2cdfc254.js";import{a as X,H as l,B as d}from"./Components.styled-d9798f12.js";import{c as f,a as j,b as k,d as y,e as h,f as T,F as b,g as c}from"./Formik.styled-ca7e573b.js";import"./SignInPage.styled-d573fbc2.js";const ee="/healthy-way/assets/hiking-desk@1x-867f5633.png",ae="/healthy-way/assets/hiking-desk@2x-e58c3520.png",ie="/healthy-way/assets/hiking-tab@1x-1073b886.png",te="/healthy-way/assets/hiking-tab@2x-51fd2364.png",se="/healthy-way/assets/hiking-mob@1x-19e0c6c9.png",ne="/healthy-way/assets/hiking-mob@2x-1b2c3203.png",oe="/healthy-way/assets/fitness-desk@1x-02917009.png",re="/healthy-way/assets/fitness-desk@2x-9b02aeb0.png",xe="/healthy-way/assets/fitness-tab@1x-4e471a75.png",pe="/healthy-way/assets/fitness-tab@2x-27b080de.png",ce="/healthy-way/assets/fitness-mob@1x-942df0aa.png",de="/healthy-way/assets/fitness-mob@2x-5570cf98.png",he="/healthy-way/assets/parametrs-desk@1x-fb8dec06.png",me="/healthy-way/assets/parametrs-desk@2x-ad138520.png",le="/healthy-way/assets/parameters-tab@1x-f269c222.png",ge="/healthy-way/assets/parameters-tab@2x-25197ad8.png",ue="/healthy-way/assets/parameters-mob@1x-fba6cca4.png",ye="/healthy-way/assets/parameters-mob@2x-a074fcff.png",be="/healthy-way/assets/activity-desk@1x-a756ff63.png",we="/healthy-way/assets/activity-desk@2x-268b7897.png",je="/healthy-way/assets/activity-tab@1x-c17492e3.png",fe="/healthy-way/assets/activity-tab@2x-d532ca7f.png",ke="/healthy-way/assets/activity-mob@1x-96e8d684.png",ve="/healthy-way/assets/activity-mob@2x-d105836c.png";function $e({currentStep:a}){return e.jsxs(e.Fragment,{children:[a===1&&e.jsx(m,{$imageDesk1x:Z,$imageDesk2x:_,$imageTab1x:O,$imageTab2x:J,$imageMob1x:K,$imageMob2x:Q,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"}),a===2&&e.jsx(m,{$imageDesk1x:ee,$imageDesk2x:ae,$imageTab1x:ie,$imageTab2x:te,$imageMob1x:se,$imageMob2x:ne,$heightMob:"290px",$heightTab:"368px",$heightDesk:"574px"}),a===3&&e.jsx(m,{$imageDesk1x:oe,$imageDesk2x:re,$imageTab1x:xe,$imageTab2x:pe,$imageMob1x:ce,$imageMob2x:de,$heightMob:"288px",$heightTab:"366px",$heightDesk:"570px"}),a===4&&e.jsx(m,{$imageDesk1x:he,$imageDesk2x:me,$imageTab1x:le,$imageTab2x:ge,$imageMob1x:ue,$imageMob2x:ye,$heightMob:"302px",$heightTab:"382px",$heightDesk:"594px"}),a===5&&e.jsx(m,{$imageDesk1x:be,$imageDesk2x:we,$imageTab1x:je,$imageTab2x:fe,$imageMob1x:ke,$imageMob2x:ve,$heightMob:"304px",$heightTab:"384px",$heightDesk:"598px"})]})}const g=i(X)`
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
`;function Fe({currentStep:a}){return e.jsxs(e.Fragment,{children:[a===1&&e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Sign up"}),e.jsx(g,{children:"You need to register to use the service"})]}),a===2&&e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Your goal"}),e.jsx(g,{children:"Choose a goal so that we can help you effectively"})]}),a===3&&e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Select gender, Age"}),e.jsxs(g,{children:["Choose a goal so that we can ",e.jsx("br",{}),"help you effectively"]})]}),a===4&&e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Body parameters"}),e.jsx(g,{children:"Enter your parameters for correct performance tracking"})]}),a===5&&e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Your Activity"}),e.jsxs(g,{children:["To correctly calculate calorie ",e.jsx("br",{}),"and water intake"]})]})]})}const Me=i(f)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
    width: 444px;
  }
`,$=i(j)`
  width: 100%;
`,Te=i(d)`
  margin-top: 40px;
  width: 100%;
`,w=i(k)`
  position: absolute;
  top: 25px;
  left: 10px;
`,F=i.div`
  position: relative;
  &:not(:first-child) {
    margin-top: 20px;
  }
`,De=/^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,Se=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,Re=y().shape({name:h().required("Required").min(2,"Too Short!").max(70,"Too Long!"),email:h().required("Required").email("Invalid email").matches(De,"Invalid email address"),password:h().required("Required").min(7,"Min length: 7 characters").matches(Se,"Use uppercase, lowercase letters, number. Letters only in English.")}),Ae=y().shape({goal:h().required("Required, choose one of three")}),Be=y().shape({gender:h().required("Required, choose one of two"),age:T().required("Required").min(1,"Age can not be less than 1").max(120,"Age can not be more than 120").typeError("Age must be a number")}),Ee=y().shape({height:T().required("Required").min(120,"Height can not be less than 120").max(250,"Height can not be more than 250").typeError("Height must be a number"),weight:T().required("Required").min(30,"Weight can not be less than 30").max(250,"Weight can not be more than 250").typeError("Weight must be a number")}),qe=y().shape({activityRatio:h().required("Required, choose one of five")});function Ne({handleNextStep:a,handleSubmit:n,userData:r}){const o=s=>{n(s),a()};return e.jsx(b,{initialValues:r,validationSchema:Re,onSubmit:o,children:({errors:s,touched:t,isValid:x,isSubmitting:p})=>e.jsxs(Me,{children:[e.jsxs(F,{children:[e.jsx($,{type:"text",name:"name",placeholder:"Name",className:t.name?s.name?"input-error":"input-success":"input-normal"}),e.jsx(w,{component:"p",name:"name"})]}),e.jsxs(F,{children:[e.jsx($,{type:"email",name:"email",placeholder:"E-mail",className:t.email?s.email?"input-error":"input-success":"input-normal"}),e.jsx(w,{component:"p",name:"email"})]}),e.jsxs(F,{children:[e.jsx($,{type:"password",name:"password",placeholder:"Password",className:t.password?s.password?"input-error":"input-success":"input-normal"}),e.jsx(w,{component:"p",name:"password"})]}),e.jsx(Te,{type:"submit",disabled:!x||p,children:"Next"})]})})}const Ue=i(f)`
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
  }
`,M=i.label`
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
`,Ge=i.div`
  position: relative;
  @media screen and (min-width: 834px) {
    display: flex;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 0px;
  }
`,Le=i(d)`
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
`,Ce=i(w)`
  top: -32px;
  left: 20px;
`;function We({handleNextStep:a,handleSubmit:n,userData:r,handlePrevStep:o}){const s=t=>{n(t),a()};return e.jsx(b,{initialValues:r,validationSchema:Ae,onSubmit:s,children:({isValid:t,isSubmitting:x})=>e.jsxs(Ue,{children:[e.jsxs(Ge,{children:[e.jsxs(M,{children:[e.jsx(c,{type:"radio",name:"goal",value:"Lose fat"}),"Lose Fat"]}),e.jsxs(M,{children:[e.jsx(c,{type:"radio",name:"goal",value:"Maintain"}),"Maintain"]}),e.jsxs(M,{children:[e.jsx(c,{type:"radio",name:"goal",value:"Gain muscle"}),"Gain Muscle"]}),e.jsx(Ce,{component:"p",name:"goal"})]}),e.jsx(Le,{type:"submit",disabled:!t||x,children:"Next"}),e.jsx(E,{onClick:o,children:"Back"})]})})}const q=i(f)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
    width: 444px;
  }
`,N=i(d)`
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
`,He=i.p`
  font-weight: 500;
`,Pe=i.div`
  position: relative;

  margin-top: 12px;
  display: flex;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`,R=i.label`
  width: 140px;
  display: flex;
  gap: 8px;
  align-items: center;
`,ze=i.label`
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
`,Ve=i(k)`
  position: absolute;
  top: -26px;
  left: 20px;
`;function Ye({handleNextStep:a,handleSubmit:n,userData:r,handlePrevStep:o}){const s=t=>{n({...t,age:Number(t.age)}),a()};return e.jsx(b,{initialValues:r,validationSchema:Be,onSubmit:s,children:({errors:t,touched:x,isSubmitting:p,isValid:v})=>e.jsxs(q,{children:[e.jsx(He,{children:"Gender"}),e.jsxs(Pe,{children:[e.jsxs(R,{children:[e.jsx(c,{type:"radio",name:"gender",value:"Male"}),"Male"]}),e.jsxs(R,{children:[e.jsx(c,{type:"radio",name:"gender",value:"Female"}),"Female"]}),e.jsx(Ve,{component:"p",name:"gender"})]}),e.jsxs(ze,{children:["Your age",e.jsx(j,{type:"text",name:"age",placeholder:"Enter your age",className:x.age?t.age?"input-error":"input-success":"input-normal"}),e.jsx(D,{component:"p",name:"age"})]}),e.jsx(Ie,{type:"submit",disabled:!v||p,children:"Next"}),e.jsx(N,{onClick:o,children:"Back"})]})})}const Ze=i(f)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
  }
`,A=i.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 500;
  position: relative;

  &:not(:first-child) {
    margin-top: 24px;
  }
`,_e=i(d)`
  margin-top: 40px;
  width: 100%;
`;function Oe({handleNextStep:a,handleSubmit:n,userData:r,handlePrevStep:o}){const s=t=>{n({...t,weight:Number(t.weight),height:Number(t.height)}),a()};return e.jsx(b,{initialValues:r,validationSchema:Ee,onSubmit:s,children:({errors:t,touched:x,isSubmitting:p,isValid:v})=>e.jsxs(Ze,{children:[e.jsxs(A,{children:["Height",e.jsx(j,{type:"text",name:"height",placeholder:"Enter your height",className:x.height?t.height?"input-error":"input-success":"input-normal"}),e.jsx(D,{component:"p",name:"height"})]}),e.jsxs(A,{children:["Weight",e.jsx(j,{type:"text",name:"weight",placeholder:"Enter your weight",className:x.weight?t.weight?"input-error":"input-success":"input-normal"}),e.jsx(D,{component:"p",name:"weight"})]}),e.jsx(_e,{type:"submit",disabled:!v||p,children:"Next"}),e.jsx(N,{onClick:o,children:"Back"})]})})}const Je=i(q)`
  position: relative;

  @media screen and (min-width: 834px) {
    padding: 0px;
    width: 460px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    padding: 0px 116px 0px 0px;
  }
`,u=i.label`
  display: flex;
  gap: 8px;
  align-items: center;

  &:not(:first-child) {
    margin-top: 16px;
  }
`,Ke=i(d)`
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
`,Qe=i(E)`
  @media screen and (min-width: 1440px) {
    width: 212px;
    margin-left: 0;
  }
`,Xe=i(k)`
  position: absolute;
  top: -30px;
  left: 18px;
`;function ea({handleSubmit:a,userData:n,handlePrevStep:r}){const o=U(),s=G(),t=async x=>{await a({...x,activityRatio:Number(x.activityRatio)});try{await o(L(n)).unwrap(),S.success("You have successfully signed up!"),s("/signin")}catch{S.error("This email is in use")}};return e.jsx(b,{initialValues:n,validationSchema:qe,onSubmit:t,children:({isSubmitting:x,isValid:p})=>e.jsxs(Je,{children:[e.jsxs(u,{children:[e.jsx(c,{type:"radio",name:"activityRatio",value:"1.2"}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(u,{children:[e.jsx(c,{type:"radio",name:"activityRatio",value:"1.375"}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(u,{children:[e.jsx(c,{type:"radio",name:"activityRatio",value:"1.55"}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(u,{children:[e.jsx(c,{type:"radio",name:"activityRatio",value:"1.725"}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(u,{children:[e.jsx(c,{type:"radio",name:"activityRatio",value:"1.9"}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]}),e.jsx(Xe,{component:"p",name:"activityRatio"}),e.jsx(Ke,{type:"submit",disabled:!p||x,children:"Sign Up"}),e.jsx(Qe,{onClick:r,children:"Back"})]})})}function aa({currentStep:a,handleNextStep:n,handlePrevStep:r}){const[o,s]=B.useState({name:"",email:"",password:"",goal:"",gender:"",age:"",height:"",weight:"",activityRatio:""}),t=x=>{s(p=>({...p,...x}))};return e.jsxs(e.Fragment,{children:[a===1&&e.jsx(Ne,{handleNextStep:n,handleSubmit:t,userData:o}),a===2&&e.jsx(We,{handleNextStep:n,handleSubmit:t,userData:o,handlePrevStep:r}),a===3&&e.jsx(Ye,{handleNextStep:n,handleSubmit:t,userData:o,handlePrevStep:r}),a===4&&e.jsx(Oe,{handleNextStep:n,handleSubmit:t,userData:o,handlePrevStep:r}),a===5&&e.jsx(ea,{handleSubmit:t,userData:o,handlePrevStep:r})]})}function xa(){const[a,n]=B.useState(1),r=()=>{n(s=>s+1)},o=()=>{n(s=>s-1)};return e.jsx(W,{children:e.jsx(C,{children:e.jsxs(I,{children:[e.jsx(H,{children:e.jsx($e,{currentStep:a})}),e.jsxs(P,{children:[e.jsx(Fe,{currentStep:a}),e.jsx(aa,{currentStep:a,handleNextStep:r,handlePrevStep:o}),a===1&&e.jsxs(z,{children:[e.jsx(V,{children:"Do you already have an account?"}),e.jsx(Y,{to:"/signin",children:"Sign in"})]})]})]})})})}export{xa as default};
