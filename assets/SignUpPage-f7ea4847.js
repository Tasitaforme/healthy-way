import{j as e,s as i,c as $,b as w,d as D,r as F,F as j,a as f,e as B,f as h,g as I,h as E,u as H,i as P,k as V,n as N,C as z}from"./index-600d6b10.js";import{B as m,F as Y,I as Z,T as _,S as O,a as J,b as K}from"./SignUpImage.styled-32197928.js";import{w as Q,a as X,b as ee,c as ae,d as ie,e as te}from"./watch-desk@2x-2cdfc254.js";import{a as se,H as g,B as d}from"./Components.styled-5ea00774.js";import{S as ne,F as M,b as S,c as v,V as re,I as oe,a as k,d as ce}from"./FormUserData.styled-4942d128.js";import"./SignInPage.styled-0c136cc2.js";const xe="/healthy-way/assets/hiking-desk@1x-867f5633.png",pe="/healthy-way/assets/hiking-desk@2x-e58c3520.png",he="/healthy-way/assets/hiking-tab@1x-1073b886.png",de="/healthy-way/assets/hiking-tab@2x-51fd2364.png",le="/healthy-way/assets/hiking-mob@1x-19e0c6c9.png",me="/healthy-way/assets/hiking-mob@2x-1b2c3203.png",ge="/healthy-way/assets/fitness-desk@1x-02917009.png",ue="/healthy-way/assets/fitness-desk@2x-9b02aeb0.png",ye="/healthy-way/assets/fitness-tab@1x-4e471a75.png",be="/healthy-way/assets/fitness-tab@2x-27b080de.png",we="/healthy-way/assets/fitness-mob@1x-942df0aa.png",je="/healthy-way/assets/fitness-mob@2x-5570cf98.png",fe="/healthy-way/assets/parametrs-desk@1x-fb8dec06.png",ke="/healthy-way/assets/parametrs-desk@2x-ad138520.png",ve="/healthy-way/assets/parameters-tab@1x-f269c222.png",$e="/healthy-way/assets/parameters-tab@2x-25197ad8.png",Fe="/healthy-way/assets/parameters-mob@1x-fba6cca4.png",Te="/healthy-way/assets/parameters-mob@2x-a074fcff.png",Me="/healthy-way/assets/activity-desk@1x-a756ff63.png",Se="/healthy-way/assets/activity-desk@2x-268b7897.png",Re="/healthy-way/assets/activity-tab@1x-c17492e3.png",De="/healthy-way/assets/activity-tab@2x-d532ca7f.png",Ee="/healthy-way/assets/activity-mob@1x-96e8d684.png",Ae="/healthy-way/assets/activity-mob@2x-d105836c.png";function Be({currentStep:a}){return e.jsxs(e.Fragment,{children:[a===1&&e.jsx(m,{$imageDesk1x:Q,$imageDesk2x:X,$imageTab1x:ee,$imageTab2x:ae,$imageMob1x:ie,$imageMob2x:te,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"}),a===2&&e.jsx(m,{$imageDesk1x:xe,$imageDesk2x:pe,$imageTab1x:he,$imageTab2x:de,$imageMob1x:le,$imageMob2x:me,$heightMob:"290px",$heightTab:"368px",$heightDesk:"574px"}),a===3&&e.jsx(m,{$imageDesk1x:ge,$imageDesk2x:ue,$imageTab1x:ye,$imageTab2x:be,$imageMob1x:we,$imageMob2x:je,$heightMob:"288px",$heightTab:"366px",$heightDesk:"570px"}),a===4&&e.jsx(m,{$imageDesk1x:fe,$imageDesk2x:ke,$imageTab1x:ve,$imageTab2x:$e,$imageMob1x:Fe,$imageMob2x:Te,$heightMob:"302px",$heightTab:"382px",$heightDesk:"594px"}),a===5&&e.jsx(m,{$imageDesk1x:Me,$imageDesk2x:Se,$imageTab1x:Re,$imageTab2x:De,$imageMob1x:Ee,$imageMob2x:Ae,$heightMob:"304px",$heightTab:"384px",$heightDesk:"598px"})]})}const u=i(se)`
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
`;function Ne({currentStep:a}){return e.jsxs(e.Fragment,{children:[a===1&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Sign up"}),e.jsx(u,{children:"You need to register to use the service"})]}),a===2&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Your goal"}),e.jsx(u,{children:"Choose a goal so that we can help you effectively"})]}),a===3&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Select gender and age"}),e.jsxs(u,{children:["Enter your gender and age for correct ",e.jsx("br",{}),"performance tracking"]})]}),a===4&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Body parameters"}),e.jsx(u,{children:"Enter your parameters for correct performance tracking"})]}),a===5&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Your Activity"}),e.jsxs(u,{children:["To correctly calculate calorie ",e.jsx("br",{}),"and water intake"]})]})]})}const qe=/^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,Ce=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,Ie=$().shape({name:w().required("Required").min(2,"Too Short!").max(70,"Too Long!"),email:w().required("Required").email("Invalid email").matches(qe,"Invalid email address"),password:w().required("Required").min(7,"Min length: 7 characters").matches(Ce,"Use uppercase, lowercase letters, number. Letters only in English.")}),Le=$().shape({goal:w().required("Required, choose one of three")}),Ue=$().shape({gender:w().required("Required, choose one of two"),age:D().required("Required").min(1,"Age can not be less than 1").max(90,"Age can not be more than 90").typeError("Age must be a number")}),Ge=$().shape({height:D().required("Required").min(140,"Height can not be less than 140").max(240,"Height can not be more than 240").typeError("Height must be a number"),weight:D().required("Required").min(40,"Weight can not be less than 40").max(220,"Weight can not be more than 220").typeError("Weight must be a number")});function We({handleNextStep:a,handleSubmit:r,userData:c}){const[t,n]=F.useState(!1),s=o=>{r(o),a()};return e.jsx(j,{initialValues:c,validationSchema:Ie,onSubmit:s,children:({errors:o,touched:x})=>e.jsxs(ne,{children:[e.jsxs(M,{children:[e.jsx(S,{type:"text",name:"name",placeholder:"Name",className:x.name?o.name?"input-error":"input-success":"input-normal"}),e.jsx(v,{component:"p",name:"name"})]}),e.jsxs(M,{children:[e.jsx(S,{type:"email",name:"email",placeholder:"E-mail",className:x.email?o.email?"input-error":"input-success":"input-normal"}),e.jsx(v,{component:"p",name:"email"})]}),e.jsxs(M,{children:[e.jsx(S,{type:t?"text":"password",name:"password",placeholder:"Password",autoComplete:"off",className:x.password?o.password?"input-error":"input-success":"input-normal"}),e.jsx(v,{component:"p",name:"password"}),!o.password&&x.password&&e.jsx(re,{children:"Password is secure"}),e.jsxs(oe,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[x.password&&!o.password&&e.jsx(k,{width:"32px",height:"32px",children:e.jsx("use",{href:`${f}#correct`})}),x.password&&o.password&&e.jsx(k,{width:"32px",height:"32px",children:e.jsx("use",{href:`${f}#error`})}),!x.password&&!t&&e.jsx(k,{width:"32px",height:"32px",children:e.jsx("use",{href:`${f}#eye-off`})}),t&&!x.password&&e.jsx(k,{width:"32px",height:"32px",children:e.jsx("use",{href:`${f}#eye`})})]})]}),e.jsx(ce,{type:"submit",children:"Next"})]})})}const He=i(B)`
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
  }
`,R=i.label`
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
`,Pe=i.div`
  position: relative;
  @media screen and (min-width: 834px) {
    display: flex;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 0px;
  }
`,Ve=i(d)`
  width: 100%;
  margin-top: 24px;
`,L=i(d)`
  width: 192px;
  height: 20px;
  margin: 20px auto 0;
  font-weight: 400;
  background-color: transparent;
  color: var(--Color-Primary-Grey, #b6b6b6);

  transition: color var(--transition-dur-and-fun);

  &:hover,
  &:focus {
    box-shadow: none;
    color: var(--green-light);
  }
`,ze=i(v)`
  top: -32px;
  left: 20px;
`;function Ye({handleNextStep:a,handleSubmit:r,userData:c,handlePrevStep:t}){const n=s=>{r(s),a()};return e.jsx(j,{initialValues:c,validationSchema:Le,onSubmit:n,children:()=>e.jsxs(He,{children:[e.jsxs(Pe,{children:[e.jsxs(R,{children:[e.jsx(h,{type:"radio",name:"goal",value:"Lose fat"}),"Lose Fat"]}),e.jsxs(R,{children:[e.jsx(h,{type:"radio",name:"goal",value:"Maintain"}),"Maintain"]}),e.jsxs(R,{children:[e.jsx(h,{type:"radio",name:"goal",value:"Gain muscle"}),"Gain Muscle"]}),e.jsx(ze,{component:"p",name:"goal"})]}),e.jsx(Ve,{type:"submit",children:"Next"}),e.jsx(L,{onClick:t,children:"Back"})]})})}const U=i(B)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
    width: 444px;
  }
`,G=i(d)`
  width: 192px;
  height: 20px;
  margin: 20px auto 0;
  font-weight: 400;
  background-color: transparent;
  color: var(--Color-Primary-Grey, #b6b6b6);
  transition: color var(--transition-dur-and-fun);

  &:hover,
  &:focus {
    box-shadow: none;
    color: var(--green-light);
  }
`,Ze=i(d)`
  width: 100%;
  margin-top: 40px;
`,_e=i.p`
  font-weight: 500;
`,Oe=i.div`
  position: relative;

  margin-top: 12px;
  display: flex;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`,q=i.label`
  width: 140px;
  display: flex;
  gap: 8px;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`,Je=i.label`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 500;
  position: relative;
`,A=i(I)`
  position: absolute;
  left: 10px;
  top: 58px;
`,Ke=i(I)`
  position: absolute;
  top: -26px;
  left: 20px;
`;function Qe({handleNextStep:a,handleSubmit:r,userData:c,handlePrevStep:t}){const n=s=>{r({...s,age:Number(s.age)}),a()};return e.jsx(j,{initialValues:c,validationSchema:Ue,onSubmit:n,children:({errors:s,touched:o})=>e.jsxs(U,{children:[e.jsx(_e,{children:"Gender"}),e.jsxs(Oe,{children:[e.jsxs(q,{children:[e.jsx(h,{type:"radio",name:"gender",value:"Male"}),"Male"]}),e.jsxs(q,{children:[e.jsx(h,{type:"radio",name:"gender",value:"Female"}),"Female"]}),e.jsx(Ke,{component:"p",name:"gender"})]}),e.jsxs(Je,{children:["Your age",e.jsx(E,{type:"text",name:"age",placeholder:"Enter your age",className:o.age?s.age?"input-error":"input-success":"input-normal"}),e.jsx(A,{component:"p",name:"age"})]}),e.jsx(Ze,{type:"submit",children:"Next"}),e.jsx(G,{onClick:t,children:"Back"})]})})}const Xe=i(B)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
  }
`,C=i.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 500;
  position: relative;

  &:not(:first-child) {
    margin-top: 24px;
  }
`,ea=i(d)`
  margin-top: 40px;
  width: 100%;
`;function aa({handleNextStep:a,handleSubmit:r,userData:c,handlePrevStep:t}){const n=s=>{r({...s,weight:Number(s.weight),height:Number(s.height)}),a()};return e.jsx(j,{initialValues:c,validationSchema:Ge,onSubmit:n,children:({errors:s,touched:o})=>e.jsxs(Xe,{children:[e.jsxs(C,{children:["Height",e.jsx(E,{type:"text",name:"height",placeholder:"Enter your height",className:o.height?s.height?"input-error":"input-success":"input-normal"}),e.jsx(A,{component:"p",name:"height"})]}),e.jsxs(C,{children:["Weight",e.jsx(E,{type:"text",name:"weight",placeholder:"Enter your weight",className:o.weight?s.weight?"input-error":"input-success":"input-normal"}),e.jsx(A,{component:"p",name:"weight"})]}),e.jsx(ea,{type:"submit",children:"Next"}),e.jsx(G,{onClick:t,children:"Back"})]})})}const ia=i(U)`
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

  &:hover {
    cursor: pointer;
  }
`,ta=i(d)`
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
`,sa=i(L)`
  @media screen and (min-width: 1440px) {
    width: 212px;
    margin-left: 0;
  }
`,na=i.p`
  position: absolute;
  top: -20px;
  left: 18px;
  font-size: 12px;
  color: #e74a3b;
`,b=i.p`
  display: block;
  width: 280px;

  @media screen and (min-width: 834px) {
    width: 438px;
  }

  @media screen and (min-width: 1440px) {
    width: 308px;
  }
`;function ra({userData:a,handlePrevStep:r,handleSubmitForm:c,handleChange:t}){const[n,s]=F.useState(!1),o=()=>{n||c()},x=p=>{s(p)};return e.jsx(j,{initialValues:a,onSubmit:o,children:()=>e.jsxs(ia,{children:[e.jsxs(y,{children:[e.jsx(h,{onChange:p=>t(Number(p.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.2",checked:a.activityRatio===1.2}),e.jsx(b,{children:"1.2 - if you do not have physical activity and sedentary work"})]}),e.jsxs(y,{children:[e.jsx(h,{onChange:p=>t(Number(p.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.375",checked:a.activityRatio===1.375}),e.jsx(b,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]}),e.jsxs(y,{children:[e.jsx(h,{onChange:p=>t(Number(p.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.55",checked:a.activityRatio===1.55}),e.jsx(b,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]}),e.jsxs(y,{children:[e.jsx(h,{onChange:p=>t(Number(p.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.725",checked:a.activityRatio===1.725}),e.jsx(b,{children:"1.725 - if you train fully 6-7 times a week"})]}),e.jsxs(y,{children:[e.jsx(h,{onChange:p=>t(Number(p.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.9",checked:a.activityRatio===1.9}),e.jsx(b,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]}),n&&a.activityRatio===""&&e.jsx(na,{children:"Required, choose one of five"}),e.jsx(ta,{type:"submit",onClick:()=>{a.activityRatio===""?x(!0):x(!1)},children:"Sign Up"}),e.jsx(sa,{onClick:r,children:"Back"})]})})}function oa({currentStep:a,handleNextStep:r,handlePrevStep:c}){const[t,n]=F.useState({name:"",email:"",password:"",goal:"",gender:"",age:"",height:"",weight:"",activityRatio:""}),s=H(),o=P(),x=l=>{n(T=>({...T,...l}))},p=l=>{n(T=>({...T,activityRatio:l}))},W=async()=>{try{await s(V(t)).unwrap(),N.success(`You have successfully signed up! 
 A confirmation letter has been sent to your email, please check it!`),o("/signin")}catch(l){N.error(`Something went wrong! 
 ${l.message}`)}};return e.jsxs(e.Fragment,{children:[a===1&&e.jsx(We,{handleNextStep:r,handleSubmit:x,userData:t}),a===2&&e.jsx(Ye,{handleNextStep:r,handleSubmit:x,userData:t,handlePrevStep:c}),a===3&&e.jsx(Qe,{handleNextStep:r,handleSubmit:x,userData:t,handlePrevStep:c}),a===4&&e.jsx(aa,{handleNextStep:r,handleSubmit:x,userData:t,handlePrevStep:c}),a===5&&e.jsx(ra,{userData:t,handlePrevStep:c,handleSubmitForm:W,handleChange:p})]})}function ma(){const[a,r]=F.useState(1),c=()=>{r(n=>n+1)},t=()=>{r(n=>n-1)};return e.jsx("main",{children:e.jsx(z,{children:e.jsxs(Y,{children:[e.jsx(Z,{children:e.jsx(Be,{currentStep:a})}),e.jsxs(_,{children:[e.jsx(Ne,{currentStep:a}),e.jsx(oa,{currentStep:a,handleNextStep:c,handlePrevStep:t}),a===1&&e.jsxs(O,{children:[e.jsx(J,{children:"Do you already have an account?"}),e.jsx(K,{to:"/signin",children:"Sign in"})]})]})]})})})}export{ma as default};
