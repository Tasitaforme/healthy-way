import{j as e,s as i,r as D,u as L,a as W,b as I,n as E,C as P}from"./index-57e1a65c.js";import{B as m,M as z,F as H,I as V,T as Y,S as Z,a as _,b as O}from"./SignUpImage.styled-edc1a765.js";import{w as J,a as K,b as Q,c as X,d as ee,e as ae}from"./watch-desk@2x-2cdfc254.js";import{a as ie,H as g,B as h}from"./Components.styled-f7b77a39.js";import{a as k,b as f,c as A,d as v,e as b,f as S,F as w,g as d}from"./Formik.styled-5864c298.js";import"./SignInPage.styled-46f2f3e9.js";const te="/healthy-way/assets/hiking-desk@1x-867f5633.png",se="/healthy-way/assets/hiking-desk@2x-e58c3520.png",ne="/healthy-way/assets/hiking-tab@1x-1073b886.png",oe="/healthy-way/assets/hiking-tab@2x-51fd2364.png",re="/healthy-way/assets/hiking-mob@1x-19e0c6c9.png",ce="/healthy-way/assets/hiking-mob@2x-1b2c3203.png",xe="/healthy-way/assets/fitness-desk@1x-02917009.png",pe="/healthy-way/assets/fitness-desk@2x-9b02aeb0.png",de="/healthy-way/assets/fitness-tab@1x-4e471a75.png",he="/healthy-way/assets/fitness-tab@2x-27b080de.png",le="/healthy-way/assets/fitness-mob@1x-942df0aa.png",me="/healthy-way/assets/fitness-mob@2x-5570cf98.png",ge="/healthy-way/assets/parametrs-desk@1x-fb8dec06.png",ue="/healthy-way/assets/parametrs-desk@2x-ad138520.png",ye="/healthy-way/assets/parameters-tab@1x-f269c222.png",be="/healthy-way/assets/parameters-tab@2x-25197ad8.png",we="/healthy-way/assets/parameters-mob@1x-fba6cca4.png",je="/healthy-way/assets/parameters-mob@2x-a074fcff.png",fe="/healthy-way/assets/activity-desk@1x-a756ff63.png",ke="/healthy-way/assets/activity-desk@2x-268b7897.png",ve="/healthy-way/assets/activity-tab@1x-c17492e3.png",$e="/healthy-way/assets/activity-tab@2x-d532ca7f.png",Fe="/healthy-way/assets/activity-mob@1x-96e8d684.png",Te="/healthy-way/assets/activity-mob@2x-d105836c.png";function Me({currentStep:a}){return e.jsxs(e.Fragment,{children:[a===1&&e.jsx(m,{$imageDesk1x:J,$imageDesk2x:K,$imageTab1x:Q,$imageTab2x:X,$imageMob1x:ee,$imageMob2x:ae,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"}),a===2&&e.jsx(m,{$imageDesk1x:te,$imageDesk2x:se,$imageTab1x:ne,$imageTab2x:oe,$imageMob1x:re,$imageMob2x:ce,$heightMob:"290px",$heightTab:"368px",$heightDesk:"574px"}),a===3&&e.jsx(m,{$imageDesk1x:xe,$imageDesk2x:pe,$imageTab1x:de,$imageTab2x:he,$imageMob1x:le,$imageMob2x:me,$heightMob:"288px",$heightTab:"366px",$heightDesk:"570px"}),a===4&&e.jsx(m,{$imageDesk1x:ge,$imageDesk2x:ue,$imageTab1x:ye,$imageTab2x:be,$imageMob1x:we,$imageMob2x:je,$heightMob:"302px",$heightTab:"382px",$heightDesk:"594px"}),a===5&&e.jsx(m,{$imageDesk1x:fe,$imageDesk2x:ke,$imageTab1x:ve,$imageTab2x:$e,$imageMob1x:Fe,$imageMob2x:Te,$heightMob:"304px",$heightTab:"384px",$heightDesk:"598px"})]})}const u=i(ie)`
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
`;function Se({currentStep:a}){return e.jsxs(e.Fragment,{children:[a===1&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Sign up"}),e.jsx(u,{children:"You need to register to use the service"})]}),a===2&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Your goal"}),e.jsx(u,{children:"Choose a goal so that we can help you effectively"})]}),a===3&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Select gender, Age"}),e.jsxs(u,{children:["Choose a goal so that we can ",e.jsx("br",{}),"help you effectively"]})]}),a===4&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Body parameters"}),e.jsx(u,{children:"Enter your parameters for correct performance tracking"})]}),a===5&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Your Activity"}),e.jsxs(u,{children:["To correctly calculate calorie ",e.jsx("br",{}),"and water intake"]})]})]})}const Re=i(k)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
    width: 444px;
  }
`,F=i(f)`
  width: 100%;
`,De=i(h)`
  margin-top: 40px;
  width: 100%;
`,j=i(A)`
  position: absolute;
  top: 25px;
  left: 10px;
`,T=i.div`
  position: relative;
  &:not(:first-child) {
    margin-top: 20px;
  }
`,Ae=i.p`
  position: absolute;
  left: 10px;
  color: #3cbc81;
  font-size: 12px;
`,Ee=/^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,Be=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,Ne=v().shape({name:b().required("Required").min(2,"Too Short!").max(70,"Too Long!"),email:b().required("Required").email("Invalid email").matches(Ee,"Invalid email address"),password:b().required("Required").min(7,"Min length: 7 characters").matches(Be,"Use uppercase, lowercase letters, number. Letters only in English.")}),qe=v().shape({goal:b().required("Required, choose one of three")}),Ce=v().shape({gender:b().required("Required, choose one of two"),age:S().required("Required").min(1,"Age can not be less than 1").max(120,"Age can not be more than 120").typeError("Age must be a number")}),Ue=v().shape({height:S().required("Required").min(140,"Height can not be less than 140").max(240,"Height can not be more than 240").typeError("Height must be a number"),weight:S().required("Required").min(40,"Weight can not be less than 40").max(220,"Weight can not be more than 220").typeError("Weight must be a number")});function Ge({handleNextStep:a,handleSubmit:o,userData:c}){const s=n=>{o(n),a()};return e.jsx(w,{initialValues:c,validationSchema:Ne,onSubmit:s,children:({errors:n,touched:t,isValid:p,isSubmitting:x})=>e.jsxs(Re,{children:[e.jsxs(T,{children:[e.jsx(F,{type:"text",name:"name",placeholder:"Name",className:t.name?n.name?"input-error":"input-success":"input-normal"}),e.jsx(j,{component:"p",name:"name"})]}),e.jsxs(T,{children:[e.jsx(F,{type:"email",name:"email",placeholder:"E-mail",className:t.email?n.email?"input-error":"input-success":"input-normal"}),e.jsx(j,{component:"p",name:"email"})]}),e.jsxs(T,{children:[e.jsx(F,{type:"password",name:"password",placeholder:"Password",className:t.password?n.password?"input-error":"input-success":"input-normal"}),e.jsx(j,{component:"p",name:"password"}),!n.password&&t.password&&e.jsx(Ae,{children:"Password is secure"})]}),e.jsx(De,{type:"submit",disabled:!p||x,children:"Next"})]})})}const Le=i(k)`
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
`,Ie=i(h)`
  width: 100%;
  margin-top: 24px;
`,q=i(h)`
  width: 192px;
  height: 20px;
  margin: 20px auto 0;
  font-weight: 400;
  background-color: transparent;
  color: var(--Color-Primary-Grey, #b6b6b6);
  &:hover {
    box-shadow: none;
  }
`,Pe=i(j)`
  top: -32px;
  left: 20px;
`;function ze({handleNextStep:a,handleSubmit:o,userData:c,handlePrevStep:s}){const n=t=>{o(t),a()};return e.jsx(w,{initialValues:c,validationSchema:qe,onSubmit:n,children:({isValid:t,isSubmitting:p})=>e.jsxs(Le,{children:[e.jsxs(We,{children:[e.jsxs(M,{children:[e.jsx(d,{type:"radio",name:"goal",value:"Lose fat"}),"Lose Fat"]}),e.jsxs(M,{children:[e.jsx(d,{type:"radio",name:"goal",value:"Maintain"}),"Maintain"]}),e.jsxs(M,{children:[e.jsx(d,{type:"radio",name:"goal",value:"Gain muscle"}),"Gain Muscle"]}),e.jsx(Pe,{component:"p",name:"goal"})]}),e.jsx(Ie,{type:"submit",disabled:!t||p,children:"Next"}),e.jsx(q,{onClick:s,children:"Back"})]})})}const C=i(k)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
    width: 444px;
  }
`,U=i(h)`
  width: 192px;
  height: 20px;
  margin: 20px auto 0;
  font-weight: 400;
  background-color: transparent;
  color: var(--Color-Primary-Grey, #b6b6b6);
  &:hover {
    box-shadow: none;
  }
`,He=i(h)`
  width: 100%;
  margin-top: 40px;
`,Ve=i.p`
  font-weight: 500;
`,Ye=i.div`
  position: relative;

  margin-top: 12px;
  display: flex;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`,B=i.label`
  width: 140px;
  display: flex;
  gap: 8px;
  align-items: center;
`,Ze=i.label`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 500;
  position: relative;
`,R=i(A)`
  position: absolute;
  left: 10px;
  top: 58px;
`,_e=i(A)`
  position: absolute;
  top: -26px;
  left: 20px;
`;function Oe({handleNextStep:a,handleSubmit:o,userData:c,handlePrevStep:s}){const n=t=>{o({...t,age:Number(t.age)}),a()};return e.jsx(w,{initialValues:c,validationSchema:Ce,onSubmit:n,children:({errors:t,touched:p,isSubmitting:x,isValid:r})=>e.jsxs(C,{children:[e.jsx(Ve,{children:"Gender"}),e.jsxs(Ye,{children:[e.jsxs(B,{children:[e.jsx(d,{type:"radio",name:"gender",value:"Male"}),"Male"]}),e.jsxs(B,{children:[e.jsx(d,{type:"radio",name:"gender",value:"Female"}),"Female"]}),e.jsx(_e,{component:"p",name:"gender"})]}),e.jsxs(Ze,{children:["Your age",e.jsx(f,{type:"text",name:"age",placeholder:"Enter your age",className:p.age?t.age?"input-error":"input-success":"input-normal"}),e.jsx(R,{component:"p",name:"age"})]}),e.jsx(He,{type:"submit",disabled:!r||x,children:"Next"}),e.jsx(U,{onClick:s,children:"Back"})]})})}const Je=i(k)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
  }
`,N=i.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 500;
  position: relative;

  &:not(:first-child) {
    margin-top: 24px;
  }
`,Ke=i(h)`
  margin-top: 40px;
  width: 100%;
`;function Qe({handleNextStep:a,handleSubmit:o,userData:c,handlePrevStep:s}){const n=t=>{o({...t,weight:Number(t.weight),height:Number(t.height)}),a()};return e.jsx(w,{initialValues:c,validationSchema:Ue,onSubmit:n,children:({errors:t,touched:p,isSubmitting:x,isValid:r})=>e.jsxs(Je,{children:[e.jsxs(N,{children:["Height",e.jsx(f,{type:"text",name:"height",placeholder:"Enter your height",className:p.height?t.height?"input-error":"input-success":"input-normal"}),e.jsx(R,{component:"p",name:"height"})]}),e.jsxs(N,{children:["Weight",e.jsx(f,{type:"text",name:"weight",placeholder:"Enter your weight",className:p.weight?t.weight?"input-error":"input-success":"input-normal"}),e.jsx(R,{component:"p",name:"weight"})]}),e.jsx(Ke,{type:"submit",disabled:!r||x,children:"Next"}),e.jsx(U,{onClick:s,children:"Back"})]})})}const Xe=i(C)`
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
`,ea=i(h)`
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
`,aa=i(q)`
  @media screen and (min-width: 1440px) {
    width: 212px;
    margin-left: 0;
  }
`,ia=i.p`
  position: absolute;
  top: -20px;
  left: 18px;
  font-size: 12px;
  color: #e74a3b;
`;function ta({userData:a,handlePrevStep:o,handleSubmitForm:c,handleChange:s}){const[n,t]=D.useState(!1),p=()=>{n||c()},x=r=>{t(r)};return e.jsx(w,{initialValues:a,onSubmit:p,children:()=>e.jsxs(Xe,{children:[e.jsxs(y,{children:[e.jsx(d,{onChange:r=>s(Number(r.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.2",checked:a.activityRatio===1.2}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(y,{children:[e.jsx(d,{onChange:r=>s(Number(r.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.375",checked:a.activityRatio===1.375}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(y,{children:[e.jsx(d,{onChange:r=>s(Number(r.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.55",checked:a.activityRatio===1.55}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(y,{children:[e.jsx(d,{onChange:r=>s(Number(r.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.725",checked:a.activityRatio===1.725}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(y,{children:[e.jsx(d,{onChange:r=>s(Number(r.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.9",checked:a.activityRatio===1.9}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]}),n&&a.activityRatio===""&&e.jsx(ia,{children:"Required, choose one of five"}),e.jsx(ea,{type:"submit",onClick:()=>{a.activityRatio===""?x(!0):x(!1)},children:"Sign Up"}),e.jsx(aa,{onClick:o,children:"Back"})]})})}function sa({currentStep:a,handleNextStep:o,handlePrevStep:c}){const[s,n]=D.useState({name:"",email:"",password:"",goal:"",gender:"",age:"",height:"",weight:"",activityRatio:""}),t=L(),p=W(),x=l=>{n($=>({...$,...l}))},r=l=>{n($=>({...$,activityRatio:l}))},G=async()=>{try{await t(I(s)).unwrap(),E.success("You have successfully signed up!"),p("/signin")}catch(l){E.error(`Something went wrong! ${l.message}`)}};return e.jsxs(e.Fragment,{children:[a===1&&e.jsx(Ge,{handleNextStep:o,handleSubmit:x,userData:s}),a===2&&e.jsx(ze,{handleNextStep:o,handleSubmit:x,userData:s,handlePrevStep:c}),a===3&&e.jsx(Oe,{handleNextStep:o,handleSubmit:x,userData:s,handlePrevStep:c}),a===4&&e.jsx(Qe,{handleNextStep:o,handleSubmit:x,userData:s,handlePrevStep:c}),a===5&&e.jsx(ta,{userData:s,handlePrevStep:c,handleSubmitForm:G,handleChange:r})]})}function da(){const[a,o]=D.useState(1),c=()=>{o(n=>n+1)},s=()=>{o(n=>n-1)};return e.jsx(z,{children:e.jsx(P,{children:e.jsxs(H,{children:[e.jsx(V,{children:e.jsx(Me,{currentStep:a})}),e.jsxs(Y,{children:[e.jsx(Se,{currentStep:a}),e.jsx(sa,{currentStep:a,handleNextStep:c,handlePrevStep:s}),a===1&&e.jsxs(Z,{children:[e.jsx(_,{children:"Do you already have an account?"}),e.jsx(O,{to:"/signin",children:"Sign in"})]})]})]})})})}export{da as default};
