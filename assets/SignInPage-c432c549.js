import{s as r,L as j,u as S,a as F,b as v,j as e,l as E,n as m,C as k}from"./index-bfa61eea.js";import{H as A,B as L,F as I,a as P,b as l,c as p,d as N,e as z}from"./Formik.styled-b90eba21.js";import{c as n,a,b as T}from"./index.esm-d5c8c427.js";const u=/^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,h=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,g=/^([A-Za-zА-Яа-яґҐЁёІіЇїЄє]+((['’ʼ \s-][A-Za-zА-Яа-яґҐЁёІіЇїЄє ])?[a-zA-Zа-яА-Я]*))*$/,$=/^(\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9})*$/,R=n().shape({email:a().required("Email is required").email("Invalid email format").matches(u,"Invalid email address"),password:a().required("Password is required").min(7,"The password must be at least 5 characters long").matches(h,"Please create a stronger password. The password must be at least 5 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number")});n().shape({name:a().required("Name is required").matches(g,"Name may contain only letters, apostrophe, dash and spaces."),email:a().required("Email is required").email("Invalid email format").matches(u,"Invalid email address"),password:a().required("Password is required").min(7,"The password must be at least 5 characters long").matches(h,"Please create a stronger password. The password must be at least 5 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number"),confirmPassword:a().required("Confirmation password is required").oneOf([T("password"),null],"Passwords must match")});n().shape({name:a().required("Name is required").matches(g,"Name may contain only letters, apostrophe, dash and spaces."),number:a().min(5).matches($,"A phone number must be digits and contain more than 5 characters. Can contain spaces, dashes, parentheses and can start with +.").required("A phone number is required")});const Z=r(A)`
  color: var(--grey-light);
  margin-top: 16px;
  margin-bottom: 24px;
`,C=r(L)`
  color: var(--grey-light);
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    display: inline-block;
    margin-right: 16px;
  }
`,w=r(j)`
  color: var(--white);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: color var(--transition-dur-and-fun);

  &:hover,
  &:focus {
    color: var(--green-light);
  }
  @media screen and (min-width: 834px) {
    display: inline-block;
  }
`,H=r(I)`
  margin-bottom: 52px;
  & input + input {
    margin-top: 20px;
  }

  & button {
    margin-top: 40px;
    width: 100%;
  }
  @media screen and (min-width: 834px) {
    width: 380px;
  }
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,U=r(w)`
  display: block;
  margin-top: 20px;
  font-weight: 500;
  color: var(--grey-light);
  text-align: center;
`;function _(){var o,d;const s=S(),x={email:(o=s==null?void 0:s.state)==null?void 0:o.email,password:(d=s==null?void 0:s.state)==null?void 0:d.password},y={email:"",password:""};F();const b=v(),f=async(t,i)=>{try{await b(E(t)).unwrap(),m.success("You have successfully logged in!")}catch{m.error("Wrong login or password! Try again!")}i.resetForm()};return e.jsx(e.Fragment,{children:e.jsx(P,{initialValues:x||y,validationSchema:R,onSubmit:f,children:({errors:t,touched:i,isSubmitting:c,isValid:q})=>e.jsxs(H,{children:[e.jsx(l,{type:"email",name:"email",placeholder:"E-mail",className:i.quantity?t.quantity?"input-error":"input-success":"input-normal"}),e.jsx(p,{component:"p",name:"email"}),e.jsx(l,{type:"password",name:"password",placeholder:"Password",autoComplete:"off",className:i.quantity?t.quantity?"input-error":"input-success":"input-normal"}),e.jsx(p,{component:"p",name:"password"}),e.jsx(N,{type:"submit",disabled:!q||c,children:"Sign in"}),e.jsx(U,{to:"/forgot-password",children:"Forgot your password?"})]})})})}function V(){return e.jsx("main",{children:e.jsxs(k,{children:[e.jsx(z,{children:"Sign in"}),e.jsx(Z,{children:"You need to login to use the service"}),e.jsx(_,{}),e.jsx(C,{children:"If you don't have an account yet"}),e.jsx(w,{to:"/signup",children:"Sign up"})]})})}export{V as default};
