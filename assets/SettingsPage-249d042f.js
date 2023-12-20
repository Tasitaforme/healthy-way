import{s as t,b as f,c,j as e,C}from"./index-7be5ce58.js";import{f as J,a as U,b as I,d as B,F as Y}from"./Formik.styled-8733402c.js";import{c as k,a as G,d as g}from"./index.esm-343e1570.js";const Q=/^([A-Za-zА-Яа-яґҐЁёІіЇїЄє]+((['’ʼ \s-][A-Za-zА-Яа-яґҐЁёІіЇїЄє ])?[a-zA-Zа-яА-Я]*))*$/,E=k().shape({name:G().required("Name is required").trim().matches(Q,"Name may contain only letters, apostrophe, dash and spaces."),age:g().required("Age is required").positive("Age must be a positive number").integer("Age must be an integer number").min(14,"Age must be greater than or equal to 14"),height:g().required("Height is required").positive("Height must be a positive number").integer("Height must be an integer number").min(65,"Height must be greater than or equal to 65sm").max(250,"Height must be lower than or equal to 250sm"),weight:g().required("Weight is required").positive("Weight must be a positive number").integer("Weight must be an integer number").min(40,"Weight must be greater than or equal to 40kg").max(250,"Weight must be lower than or equal to 250kg")}),S=t(J)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 491px;
    column-gap: 60px;
    margin: 0 auto;
  }
`,r=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
`,d=t(U)`
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
`,l=t(I)`
  margin: 0;
`,z=t.input`
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
`,H=t.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`,L=t.div`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  margin-right: 12px;
  overflow: hidden;
`,M=t.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,N=t.img`
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`,F=t.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`,n=t.label`
  display: flex;
  align-items: center;
`,a=t(B)`
  display: none;
`,s=t.span`
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

  ${a}:checked + &::before {
    opacity: 1;
  }
`,o=t.span`
  display: inline-block;
  width: 100%;
`,A=t(o)`
  width: auto;
`,X=t.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,W=t.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    gap: 0px;
    margin-bottom: 174px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`,T=t.button`
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--green-light);
  line-height: 1.43;
  color: var(--black-secondary);
  font-weight: 500;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    width: 192px;
  }
`,Z=t.button`
  line-height: 1.43;
  color: var(--grey-light);

  @media screen and (min-width: 834px) {
    width: 192px;
  }
`,O="data:image/png;base64,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",P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGCSURBVHgBjVNNTsJAGH1DSgKs6h4inECOQG+gGwM7ewK9AXAC5QTsgJi44ATACeAGBSGuqwvFWPv5hjK1Nlh4SduZ7++975sOkAFP+jaOIJftLNytZNjJirGSbBZKt1zWA7y7NeX6aTX09wXh+BuY1lRrGSvwZFjNozhXkCoQ9tLJGpEt7HHZyENNdI62K/3ayIiVZVVRrY5JiGzKjoLEL6uma3xrGT3wc1FRTWfXggA3AbZnqQmQLZzs107SE+Cjw3Y8GPlk83AAG3ms6+ewb+S9yNO5hQyU1fUCR2BaiFWwbz9AeGWmbKCVWlB9Dq1qcvR3dwo0Lr8gjn7omnHK7TRTZJOZidM5sQINw8jz5oCKnieDMUsv9kGarREAjomjYtPC1heU7N9Crv8sA9dCrk0Wey93yWN2k23RZn/i7XW34blO1jJs4ESQ4JI583gGrNdVHNApRXRMDrl7Drur9ypZVVE2l1Ua/UPJErW00IT8a6d/ChhEV7jwzzXe+ul78gOBgrXwG/pO0gAAAABJRU5ErkJggg==";function R(){f();const[ae,p]=c.useState(!1),[re,u]=c.useState(null),[w,x]=c.useState(),m={name:"Konstantin",age:"34",gender:"male",height:"170",weight:"90",activity:"1.2"},y=i=>{const h=i.target.files[0];if(!h)return;const v=URL.createObjectURL(h);u(h),x(v),p(!0)},b=i=>{},j=i=>{i({values:m,isSubmitting:!1}),p(!1),x(null)};return e.jsx(Y,{initialValues:m,validationSchema:E,children:i=>e.jsxs(S,{children:[e.jsxs(r,{children:[e.jsx("label",{children:"Your name"}),e.jsx(d,{name:"name",placeholder:"Enter your name",className:i.errors.name?"input-error":""}),e.jsx(l,{name:"name",component:"p"})]}),e.jsxs(r,{children:[e.jsx("p",{children:"Your photo"}),e.jsx(z,{id:"avatar",name:"avatar",type:"file",onChange:y}),e.jsxs(H,{htmlFor:"avatar",children:[e.jsx(L,{children:e.jsx(M,{src:w||O,alt:"userAvatar"})}),e.jsx(N,{src:P}),"Download new photo"]}),e.jsx(l,{name:"avatar",component:"div"})]}),e.jsxs(r,{children:[e.jsx("label",{htmlFor:"age",children:"Your age"}),e.jsx(d,{name:"age",placeholder:"Enter your age",className:i.errors.age?"input-error":""}),e.jsx(l,{name:"age",component:"div"})]}),e.jsxs(r,{children:[e.jsx("div",{id:"my-gender-group",children:"Gender"}),e.jsxs(F,{role:"group","aria-labelledby":"my-gender-group",children:[e.jsxs(n,{children:[e.jsx(a,{type:"radio",name:"gender",value:"male"}),e.jsx(s,{}),e.jsx(A,{children:"Male"})]}),e.jsxs(n,{children:[e.jsx(a,{type:"radio",name:"gender",value:"female"}),e.jsx(s,{}),e.jsx(A,{children:"Female"})]})]})]}),e.jsxs(r,{children:[e.jsx("label",{htmlFor:"height",children:"Height"}),e.jsx(d,{name:"height",placeholder:"Enter your height",className:i.errors.height?"input-error":""}),e.jsx(l,{name:"height",component:"div"})]}),e.jsxs(r,{children:[e.jsx("label",{htmlFor:"weight",children:"Weight"}),e.jsx(d,{name:"weight",placeholder:"Enter your weight",className:i.errors.weight?"input-error":""}),e.jsx(l,{name:"weight",component:"div"})]}),e.jsxs(r,{children:[e.jsx("div",{id:"my-activity-group",children:"Your activity"}),e.jsxs(X,{role:"group","aria-labelledby":"my-activity-group",children:[e.jsxs(n,{children:[e.jsx(a,{type:"radio",name:"activity",value:"1.2"}),e.jsx(s,{}),e.jsx(o,{children:"1.2 - if you do not have physical activity and sedentary work"})]}),e.jsxs(n,{children:[e.jsx(a,{type:"radio",name:"activity",value:"1.375"}),e.jsx(s,{}),e.jsx(o,{children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]}),e.jsxs(n,{children:[e.jsx(a,{type:"radio",name:"activity",value:"1.55"}),e.jsx(s,{}),e.jsx(o,{children:"1.55 - if you play sports with average loads 3-5 times a week"})]}),e.jsxs(n,{children:[e.jsx(a,{type:"radio",name:"activity",value:"1.725"}),e.jsx(s,{}),e.jsx(o,{children:"1.725 ​​- if you train fully 6-7 times a week"})]}),e.jsxs(n,{children:[e.jsx(a,{type:"radio",name:"activity",value:"1.9"}),e.jsx(s,{}),e.jsx(o,{children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})]})]}),e.jsxs(W,{children:[e.jsx(T,{type:"submit",onClick:()=>b(i.values),children:"Save"}),e.jsx(Z,{type:"button",onClick:()=>j(i.resetForm),children:"Cancel"})]})]})})}const D="/healthy-way/assets/profile-mob@1x-771a5e6d.png",K="/healthy-way/assets/profile-mob@2x-0612e098.png",V="/healthy-way/assets/profile-tab@1x-3f1682b6.png",q="/healthy-way/assets/profile-tab@2x-8263e9ab.png",$="/healthy-way/assets/profile-desk@1x-076f43bb.png",_="/healthy-way/assets/profile-desk@2x-9605a813.png",ee=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: space-around;
    margin-bottom: 80px;
  }
`,te=t.h1`
  margin: 16px auto;
  font-size: 24px;
  font-weight: 500;

  @media screen and (min-width: 834px) {
    margin-top: 24px;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 500;
    line-height: 1.2;
  }

  @media screen and (min-width: 834px) {
    margin-top: 24px;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 500;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
    margin-bottom: 24px;
  }
`,ie=t.img`
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
    height: 528px;
  }
`;function le(){return e.jsx("main",{children:e.jsxs(C,{children:[e.jsx(te,{children:"Profile setting"}),e.jsxs(ee,{children:[e.jsx(ie,{srcSet:`${D} 300w, ${K} 600w, ${V} 380w, ${q} 760w, ${$} 592w, ${_} 1184w`,alt:"User profile image",sizes:"(min-width: 1440px) 592px, (min-width: 834px) 380px, 300px"}),e.jsx("section",{children:e.jsx(R,{})})]})]})})}export{le as default};
