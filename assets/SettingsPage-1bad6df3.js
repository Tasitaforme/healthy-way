import{s as i,u as U,r as m,d as C,e as S,j as e,w as N,x as I,C as F}from"./index-e2f70753.js";import{d as E,e as G,f as x,i as T,a as W,b as B,g as M,F as q}from"./Formik.styled-dc7eaa58.js";const D=/^([A-Za-zА-Яа-яґҐЁёІіЇїЄє]+((['’ʼ \s-][A-Za-zА-Яа-яґҐЁёІіЇїЄє ])?[a-zA-Zа-яА-Я]*))*$/,z=E().shape({name:G().required("Name is required").trim().matches(D,"Name may contain only letters, apostrophe, dash and spaces."),age:x().required("Age is required").positive("Age must be a positive number").integer("Age must be an integer number").min(14,"Age must be greater than or equal to 14"),height:x().required("Height is required").positive("Height must be a positive number").integer("Height must be an integer number").min(65,"Height must be greater than or equal to 65sm").max(250,"Height must be lower than or equal to 250sm"),weight:x().required("Weight is required").positive("Weight must be a positive number").integer("Weight must be an integer number").min(40,"Weight must be greater than or equal to 40kg").max(250,"Weight must be lower than or equal to 250kg")}),Z=i(T)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 491px;
    column-gap: 60px;
    margin: 0 auto;
  }
`,s=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
`,p=i(W)`
  width: 100%;
  position: relative;
  display: block;
  border: 1px solid var(--grey-light);
  color: var(--white);

  &.input-error {
    border-color: var(--error-color);
  }

  &::placeholder {
    color: var(--white);
  }

  &:focus,
  &:active,
  &:hover {
    outline: none;
    border-color: var(--green-light);
  }

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,h=i(B)`
  margin: 0;
`,L=i.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  & + label {
    color: #fff;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.43;
    cursor: pointer;
  }
`,P=i.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`,X=i.div`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  margin-right: 12px;
  overflow: hidden;
`,H=i.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,J=i.img`
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  stroke: green;
`,Q=i.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`,d=i.label`
  display: flex;
  align-items: center;
`,n=i(M)`
  display: none;
`,l=i.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid var(--grey-light);
  position: relative;
  margin-right: 8px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 6px;
    height: 6px;
    background-color: var(--green-light);
    border-radius: 50px;
    opacity: 0;
    transition: 250ms;
  }

  ${n}:checked + &::before {
    opacity: 1;
  }
`,c=i.span`
  display: inline-block;
  width: 100%;
`,w=i(c)`
  width: auto;
`,V=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 834px) {
    width: 464px;
  }
`,Y=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`,K=i.button`
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--green-light);
  line-height: 1.43;
  color: var(--black-secondary);
  font-weight: 500;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,O=i.button`
  line-height: 1.43;
  color: var(--grey-light);

  @media screen and (min-width: 834px) {
    width: 192px;
  }
`,_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGCSURBVHgBjVNNTsJAGH1DSgKs6h4inECOQG+gGwM7ewK9AXAC5QTsgJi44ATACeAGBSGuqwvFWPv5hjK1Nlh4SduZ7++975sOkAFP+jaOIJftLNytZNjJirGSbBZKt1zWA7y7NeX6aTX09wXh+BuY1lRrGSvwZFjNozhXkCoQ9tLJGpEt7HHZyENNdI62K/3ayIiVZVVRrY5JiGzKjoLEL6uma3xrGT3wc1FRTWfXggA3AbZnqQmQLZzs107SE+Cjw3Y8GPlk83AAG3ms6+ewb+S9yNO5hQyU1fUCR2BaiFWwbz9AeGWmbKCVWlB9Dq1qcvR3dwo0Lr8gjn7omnHK7TRTZJOZidM5sQINw8jz5oCKnieDMUsv9kGarREAjomjYtPC1heU7N9Crv8sA9dCrk0Wey93yWN2k23RZn/i7XW34blO1jJs4ESQ4JI583gGrNdVHNApRXRMDrl7Drur9ypZVVE2l1Ua/UPJErW00IT8a6d/ChhEV7jwzzXe+ul78gOBgrXwG/pO0gAAAABJRU5ErkJggg==";function ee(){const t=U(),[v,u]=m.useState(!1),[j,A]=m.useState(null),[k,b]=m.useState(),o=C(S),y={name:o.name,age:o.age,gender:o.gender,height:o.height,weight:o.weight,activityRatio:o.activityRatio.toString()},R=a=>{const r=a.target.files[0];if(!r)return;const g=URL.createObjectURL(r);A(r),b(g),u(!0)},f=a=>{if(a.height=Number(a.height),a.weight=Number(a.weight),a.age=Number(a.age),a.activityRatio=Number(a.activityRatio),t(N(a)),v){const r=new FormData;r.append("avatarURL",j),t(I(r))}},$=a=>{a({values:y,isSubmitting:!1}),u(!1),b(null)};return e.jsx(q,{initialValues:y,validationSchema:z,onSubmit:f,children:({errors:a,values:r,resetForm:g})=>e.jsxs(Z,{children:[e.jsxs(s,{children:[e.jsx("label",{children:"Your name"}),e.jsx(p,{name:"name",placeholder:"Enter your name",className:a.name?"input-error":""}),e.jsx(h,{name:"name",component:"p"})]}),e.jsxs(s,{children:[e.jsx("p",{children:"Your photo"}),e.jsx(L,{accept:"image/*",id:"avatar",name:"avatar",type:"file",onChange:R}),e.jsxs(P,{htmlFor:"avatar",children:[e.jsx(X,{children:e.jsx(H,{src:k||o.avatarURL,alt:"userAvatar"})}),e.jsx(J,{src:_}),"Download new photo"]}),e.jsx(h,{name:"avatar",component:"div"})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"age",children:"Your age"}),e.jsx(p,{name:"age",placeholder:"Enter your age",className:a.age?"input-error":""}),e.jsx(h,{name:"age",component:"div"})]}),e.jsxs(s,{children:[e.jsx("div",{id:"my-gender-group",children:"Gender"}),e.jsxs(Q,{role:"group","aria-labelledby":"my-gender-group",children:[e.jsxs(d,{children:[e.jsx(n,{type:"radio",name:"gender",value:"Male"}),e.jsx(l,{}),e.jsx(w,{children:"Male"})]}),e.jsxs(d,{children:[e.jsx(n,{type:"radio",name:"gender",value:"Female"}),e.jsx(l,{}),e.jsx(w,{children:"Female"})]})]})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"height",children:"Height"}),e.jsx(p,{name:"height",placeholder:"Enter your height",className:a.height?"input-error":""}),e.jsx(h,{name:"height",component:"div"})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"weight",children:"Weight"}),e.jsx(p,{name:"weight",placeholder:"Enter your weight",className:a.weight?"input-error":""}),e.jsx(h,{name:"weight",component:"div"})]}),e.jsxs(s,{children:[e.jsx("div",{id:"my-activity-group",children:"Your activity"}),e.jsxs(V,{role:"group","aria-labelledby":"my-activity-group",children:[e.jsxs(d,{children:[e.jsx(n,{type:"radio",name:"activityRatio",value:"1.2",checked:r.activityRatio==="1.2"}),e.jsx(l,{}),e.jsx(c,{children:"1.2 - if you do not have physical activity and sedentary work"})]}),e.jsxs(d,{children:[e.jsx(n,{type:"radio",name:"activityRatio",checked:r.activityRatio==="1.375",value:"1.375"}),e.jsx(l,{}),e.jsx(c,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]}),e.jsxs(d,{children:[e.jsx(n,{type:"radio",name:"activityRatio",checked:r.activityRatio==="1.55",value:"1.55"}),e.jsx(l,{}),e.jsx(c,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]}),e.jsxs(d,{children:[e.jsx(n,{type:"radio",name:"activityRatio",checked:r.activityRatio==="1.725",value:"1.725"}),e.jsx(l,{}),e.jsx(c,{children:"1.725 ​​- if you train fully 6-7 times a week"})]}),e.jsxs(d,{children:[e.jsx(n,{type:"radio",name:"activityRatio",checked:r.activityRatio==="1.9",value:"1.9"}),e.jsx(l,{}),e.jsx(c,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})]})]}),e.jsxs(Y,{children:[e.jsx(K,{type:"submit",onClick:()=>f(r),children:"Save"}),e.jsx(O,{type:"button",onClick:()=>$(g),children:"Cancel"})]})]})})}const ie="/healthy-way/assets/profile-mob@1x-771a5e6d.png",te="/healthy-way/assets/profile-mob@2x-0612e098.png",ae="/healthy-way/assets/profile-tab@1x-3f1682b6.png",re="/healthy-way/assets/profile-tab@2x-8263e9ab.png",ne="/healthy-way/assets/profile-desk@1x-076f43bb.png",oe="/healthy-way/assets/profile-desk@2x-9605a813.png",se=i(F)`
  padding-top: 16px;
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-bottom: 174px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    padding-bottom: 72px;
  }
`,de=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    justify-content: space-evenly;
  }
`,le=i.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,ce=i.div`
  margin-top: 16px;
  margin-bottom: 24px;
  width: 100%;
  height: ${t=>t.$heightMob};
  background-image: ${t=>`url(${t.$imageMob1x})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${t=>`url(${t.$imageMob2x})`};
  }

  @media screen and (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    height: ${t=>t.$heightTab};
    background-image: ${t=>`url(${t.$imageTab1x})`};
    width: 380px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${t=>`url(${t.$imageTab2x})`};
    }
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
    height: ${t=>t.$heightDesk};
    background-image: ${t=>`url(${t.$imageDesk1x})`};
    width: 592px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${t=>`url(${t.$imageDesk2x})`};
    }
  }
`;function ge(){return e.jsx("main",{children:e.jsxs(se,{children:[e.jsx(le,{children:"Profile setting"}),e.jsxs(de,{children:[e.jsx(ce,{$imageDesk1x:ne,$imageDesk2x:oe,$imageTab1x:ae,$imageTab2x:re,$imageMob1x:ie,$imageMob2x:te,$heightMob:"296px",$heightTab:"376px",$heightDesk:"588px"}),e.jsx("section",{children:e.jsx(ee,{})})]})]})})}export{ge as default};
