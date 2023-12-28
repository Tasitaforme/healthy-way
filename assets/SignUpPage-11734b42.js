import{j as e,s as i,a as P,H as m,e as $,f as w,g as D,r as F,F as j,d as f,h as B,B as d,i as h,k as C,m as E,u as V,b as z,c as Y,o as Z,p as O,n as N,C as _}from"./index-953f3a7a.js";import{B as g,F as J,I as K,T as Q,S as X,a as ee,b as ae}from"./SignUpImage.styled-a94fa15c.js";import{w as ie,a as te,b as se,c as ne,d as re,e as oe}from"./watch-desk@2x-2cdfc254.js";import{S as ce,F as M,b as S,c as v,V as xe,I as pe,a as k,d as he,L as de}from"./LoadingModal-e3c1dc69.js";import"./SignInPage.styled-248b12d2.js";const le="/healthy-way/assets/hiking-desk@1x-867f5633.png",me="/healthy-way/assets/hiking-desk@2x-e58c3520.png",ge="/healthy-way/assets/hiking-tab@1x-1073b886.png",ue="/healthy-way/assets/hiking-tab@2x-51fd2364.png",ye="/healthy-way/assets/hiking-mob@1x-19e0c6c9.png",be="/healthy-way/assets/hiking-mob@2x-1b2c3203.png",we="/healthy-way/assets/fitness-desk@1x-02917009.png",je="/healthy-way/assets/fitness-desk@2x-9b02aeb0.png",fe="/healthy-way/assets/fitness-tab@1x-4e471a75.png",ke="/healthy-way/assets/fitness-tab@2x-27b080de.png",ve="/healthy-way/assets/fitness-mob@1x-942df0aa.png",$e="/healthy-way/assets/fitness-mob@2x-5570cf98.png",Fe="/healthy-way/assets/parametrs-desk@1x-fb8dec06.png",Te="/healthy-way/assets/parametrs-desk@2x-ad138520.png",Me="/healthy-way/assets/parameters-tab@1x-f269c222.png",Se="/healthy-way/assets/parameters-tab@2x-25197ad8.png",Re="/healthy-way/assets/parameters-mob@1x-fba6cca4.png",De="/healthy-way/assets/parameters-mob@2x-a074fcff.png",Ee="/healthy-way/assets/activity-desk@1x-a756ff63.png",Ae="/healthy-way/assets/activity-desk@2x-268b7897.png",Be="/healthy-way/assets/activity-tab@1x-c17492e3.png",Ne="/healthy-way/assets/activity-tab@2x-d532ca7f.png",qe="/healthy-way/assets/activity-mob@1x-96e8d684.png",Le="/healthy-way/assets/activity-mob@2x-d105836c.png";function Ce({currentStep:a}){return e.jsxs(e.Fragment,{children:[a===1&&e.jsx(g,{$imageDesk1x:ie,$imageDesk2x:te,$imageTab1x:se,$imageTab2x:ne,$imageMob1x:re,$imageMob2x:oe,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"}),a===2&&e.jsx(g,{$imageDesk1x:le,$imageDesk2x:me,$imageTab1x:ge,$imageTab2x:ue,$imageMob1x:ye,$imageMob2x:be,$heightMob:"290px",$heightTab:"368px",$heightDesk:"574px"}),a===3&&e.jsx(g,{$imageDesk1x:we,$imageDesk2x:je,$imageTab1x:fe,$imageTab2x:ke,$imageMob1x:ve,$imageMob2x:$e,$heightMob:"288px",$heightTab:"366px",$heightDesk:"570px"}),a===4&&e.jsx(g,{$imageDesk1x:Fe,$imageDesk2x:Te,$imageTab1x:Me,$imageTab2x:Se,$imageMob1x:Re,$imageMob2x:De,$heightMob:"302px",$heightTab:"382px",$heightDesk:"594px"}),a===5&&e.jsx(g,{$imageDesk1x:Ee,$imageDesk2x:Ae,$imageTab1x:Be,$imageTab2x:Ne,$imageMob1x:qe,$imageMob2x:Le,$heightMob:"304px",$heightTab:"384px",$heightDesk:"598px"})]})}const u=i(P)`
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
`;function Ie({currentStep:a}){return e.jsxs(e.Fragment,{children:[a===1&&e.jsxs(e.Fragment,{children:[e.jsx(m,{children:"Sign up"}),e.jsx(u,{children:"You need to register to use the service"})]}),a===2&&e.jsxs(e.Fragment,{children:[e.jsx(m,{children:"Your goal"}),e.jsx(u,{children:"Choose a goal so that we can help you effectively"})]}),a===3&&e.jsxs(e.Fragment,{children:[e.jsx(m,{children:"Select gender and age"}),e.jsxs(u,{children:["Enter your gender and age for correct ",e.jsx("br",{}),"performance tracking"]})]}),a===4&&e.jsxs(e.Fragment,{children:[e.jsx(m,{children:"Body parameters"}),e.jsx(u,{children:"Enter your parameters for correct performance tracking"})]}),a===5&&e.jsxs(e.Fragment,{children:[e.jsx(m,{children:"Your Activity"}),e.jsxs(u,{children:["To correctly calculate calorie ",e.jsx("br",{}),"and water intake"]})]})]})}const Ue=/^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,Ge=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,We=$().shape({name:w().required("Required").min(2,"Too Short!").max(70,"Too Long!"),email:w().required("Required").email("Invalid email").matches(Ue,"Invalid email address"),password:w().required("Required").min(7,"Min length: 7 characters").matches(Ge,"Use uppercase, lowercase letters, number. Letters only in English.")}),He=$().shape({goal:w().required("Required, choose one of three")}),Pe=$().shape({gender:w().required("Required, choose one of two"),age:D().required("Required").min(1,"Age can not be less than 1").max(90,"Age can not be more than 90").typeError("Age must be a number")}),Ve=$().shape({height:D().required("Required").min(140,"Height can not be less than 140").max(240,"Height can not be more than 240").typeError("Height must be a number"),weight:D().required("Required").min(40,"Weight can not be less than 40").max(220,"Weight can not be more than 220").typeError("Weight must be a number")});function ze({handleNextStep:a,handleSubmit:r,userData:c}){const[s,t]=F.useState(!1),n=o=>{r(o),a()};return e.jsx(j,{initialValues:c,validationSchema:We,onSubmit:n,children:({errors:o,touched:p})=>e.jsxs(ce,{children:[e.jsxs(M,{children:[e.jsx(S,{type:"text",name:"name",placeholder:"Name",className:p.name?o.name?"input-error":"input-success":"input-normal"}),e.jsx(v,{component:"p",name:"name"})]}),e.jsxs(M,{children:[e.jsx(S,{type:"email",name:"email",placeholder:"E-mail",className:p.email?o.email?"input-error":"input-success":"input-normal"}),e.jsx(v,{component:"p",name:"email"})]}),e.jsxs(M,{children:[e.jsx(S,{type:s?"text":"password",name:"password",placeholder:"Password",autoComplete:"off",className:p.password?o.password?"input-error":"input-success":"input-normal"}),e.jsx(v,{component:"p",name:"password"}),!o.password&&p.password&&e.jsx(xe,{children:"Password is secure"}),e.jsxs(pe,{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[p.password&&!o.password&&e.jsx(k,{width:"32px",height:"32px",children:e.jsx("use",{href:`${f}#correct`})}),p.password&&o.password&&e.jsx(k,{width:"32px",height:"32px",children:e.jsx("use",{href:`${f}#error`})}),!p.password&&!s&&e.jsx(k,{width:"32px",height:"32px",children:e.jsx("use",{href:`${f}#eye-off`})}),s&&!p.password&&e.jsx(k,{width:"32px",height:"32px",children:e.jsx("use",{href:`${f}#eye`})})]})]}),e.jsx(he,{type:"submit",children:"Next"})]})})}const Ye=i(B)`
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
`,Ze=i.div`
  position: relative;
  @media screen and (min-width: 834px) {
    display: flex;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 0px;
  }
`,Oe=i(d)`
  width: 100%;
  margin-top: 24px;
`,I=i(d)`
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
`,_e=i(v)`
  top: -32px;
  left: 20px;
`;function Je({handleNextStep:a,handleSubmit:r,userData:c,handlePrevStep:s}){const t=n=>{r(n),a()};return e.jsx(j,{initialValues:c,validationSchema:He,onSubmit:t,children:()=>e.jsxs(Ye,{children:[e.jsxs(Ze,{children:[e.jsxs(R,{children:[e.jsx(h,{type:"radio",name:"goal",value:"Lose fat"}),"Lose Fat"]}),e.jsxs(R,{children:[e.jsx(h,{type:"radio",name:"goal",value:"Maintain"}),"Maintain"]}),e.jsxs(R,{children:[e.jsx(h,{type:"radio",name:"goal",value:"Gain muscle"}),"Gain Muscle"]}),e.jsx(_e,{component:"p",name:"goal"})]}),e.jsx(Oe,{type:"submit",children:"Next"}),e.jsx(I,{onClick:s,children:"Back"})]})})}const U=i(B)`
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
`,Ke=i(d)`
  width: 100%;
  margin-top: 40px;
`,Qe=i.p`
  font-weight: 500;
`,Xe=i.div`
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
`,ea=i.label`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 500;
  position: relative;
`,A=i(C)`
  position: absolute;
  left: 10px;
  top: 58px;
`,aa=i(C)`
  position: absolute;
  top: -26px;
  left: 20px;
`;function ia({handleNextStep:a,handleSubmit:r,userData:c,handlePrevStep:s}){const t=n=>{r({...n,age:Number(n.age)}),a()};return e.jsx(j,{initialValues:c,validationSchema:Pe,onSubmit:t,children:({errors:n,touched:o})=>e.jsxs(U,{children:[e.jsx(Qe,{children:"Gender"}),e.jsxs(Xe,{children:[e.jsxs(q,{children:[e.jsx(h,{type:"radio",name:"gender",value:"Male"}),"Male"]}),e.jsxs(q,{children:[e.jsx(h,{type:"radio",name:"gender",value:"Female"}),"Female"]}),e.jsx(aa,{component:"p",name:"gender"})]}),e.jsxs(ea,{children:["Your age",e.jsx(E,{type:"text",name:"age",placeholder:"Enter your age",className:o.age?n.age?"input-error":"input-success":"input-normal"}),e.jsx(A,{component:"p",name:"age"})]}),e.jsx(Ke,{type:"submit",children:"Next"}),e.jsx(G,{onClick:s,children:"Back"})]})})}const ta=i(B)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
  }
`,L=i.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 500;
  position: relative;

  &:not(:first-child) {
    margin-top: 24px;
  }
`,sa=i(d)`
  margin-top: 40px;
  width: 100%;
`;function na({handleNextStep:a,handleSubmit:r,userData:c,handlePrevStep:s}){const t=n=>{r({...n,weight:Number(n.weight),height:Number(n.height)}),a()};return e.jsx(j,{initialValues:c,validationSchema:Ve,onSubmit:t,children:({errors:n,touched:o})=>e.jsxs(ta,{children:[e.jsxs(L,{children:["Height",e.jsx(E,{type:"text",name:"height",placeholder:"Enter your height",className:o.height?n.height?"input-error":"input-success":"input-normal"}),e.jsx(A,{component:"p",name:"height"})]}),e.jsxs(L,{children:["Weight",e.jsx(E,{type:"text",name:"weight",placeholder:"Enter your weight",className:o.weight?n.weight?"input-error":"input-success":"input-normal"}),e.jsx(A,{component:"p",name:"weight"})]}),e.jsx(sa,{type:"submit",children:"Next"}),e.jsx(G,{onClick:s,children:"Back"})]})})}const ra=i(U)`
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
`,oa=i(d)`
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
`,ca=i(I)`
  @media screen and (min-width: 1440px) {
    width: 212px;
    margin-left: 0;
  }
`,xa=i.p`
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
`;function pa({userData:a,handlePrevStep:r,handleSubmitForm:c,handleChange:s}){const[t,n]=F.useState(!1),o=()=>{t||c()},p=x=>{n(x)};return e.jsx(j,{initialValues:a,onSubmit:o,children:()=>e.jsxs(ra,{children:[e.jsxs(y,{children:[e.jsx(h,{onChange:x=>s(Number(x.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.2",checked:a.activityRatio===1.2}),e.jsx(b,{children:"1.2 - if you do not have physical activity and sedentary work"})]}),e.jsxs(y,{children:[e.jsx(h,{onChange:x=>s(Number(x.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.375",checked:a.activityRatio===1.375}),e.jsx(b,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]}),e.jsxs(y,{children:[e.jsx(h,{onChange:x=>s(Number(x.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.55",checked:a.activityRatio===1.55}),e.jsx(b,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]}),e.jsxs(y,{children:[e.jsx(h,{onChange:x=>s(Number(x.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.725",checked:a.activityRatio===1.725}),e.jsx(b,{children:"1.725 - if you train fully 6-7 times a week"})]}),e.jsxs(y,{children:[e.jsx(h,{onChange:x=>s(Number(x.currentTarget.value)),type:"radio",name:"activityRatio",value:"1.9",checked:a.activityRatio===1.9}),e.jsx(b,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]}),t&&a.activityRatio===""&&e.jsx(xa,{children:"Required, choose one of five"}),e.jsx(oa,{type:"submit",onClick:()=>{a.activityRatio===""?p(!0):p(!1)},children:"Sign Up"}),e.jsx(ca,{onClick:r,children:"Back"})]})})}function ha({currentStep:a,handleNextStep:r,handlePrevStep:c}){const{isLoading:s}=V(z),[t,n]=F.useState({name:"",email:"",password:"",goal:"",gender:"",age:"",height:"",weight:"",activityRatio:""}),o=Y(),p=Z(),x=l=>{n(T=>({...T,...l}))},W=l=>{n(T=>({...T,activityRatio:l}))},H=async()=>{try{await o(O(t)).unwrap(),N.success(`You have successfully signed up! 
 A confirmation letter has been sent to your email, please check it!`),p("/signin")}catch(l){N.error(`Something went wrong! 
 ${l.message}!`)}};return e.jsxs(e.Fragment,{children:[a===1&&e.jsx(ze,{handleNextStep:r,handleSubmit:x,userData:t}),a===2&&e.jsx(Je,{handleNextStep:r,handleSubmit:x,userData:t,handlePrevStep:c}),a===3&&e.jsx(ia,{handleNextStep:r,handleSubmit:x,userData:t,handlePrevStep:c}),a===4&&e.jsx(na,{handleNextStep:r,handleSubmit:x,userData:t,handlePrevStep:c}),a===5&&e.jsx(pa,{userData:t,handlePrevStep:c,handleSubmitForm:H,handleChange:W}),s&&e.jsx(de,{isOpen:s})]})}function ya(){const[a,r]=F.useState(1),c=()=>{r(t=>t+1)},s=()=>{r(t=>t-1)};return e.jsx("main",{children:e.jsx(_,{children:e.jsxs(J,{children:[e.jsx(K,{children:e.jsx(Ce,{currentStep:a})}),e.jsxs(Q,{children:[e.jsx(Ie,{currentStep:a}),e.jsx(ha,{currentStep:a,handleNextStep:c,handlePrevStep:s}),a===1&&e.jsxs(X,{children:[e.jsx(ee,{children:"Do you already have an account?"}),e.jsx(ae,{to:"/signin",children:"Sign in"})]})]})]})})})}export{ya as default};
