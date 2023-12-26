import{c as r,b as e,s,e as i,g as o,h as n}from"./index-17b07548.js";import{a as l}from"./SignInPage.styled-f3c6f1eb.js";const t=/^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,a=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,m=r().shape({email:e().required("Email is required").email("Invalid email format").matches(t,"Invalid email address"),password:e().required("Password is required").min(7,"The password must be at least 7 characters long").matches(a,"Your password is at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters is in English.")}),p=r().shape({email:e().required("Email is required").email("Invalid email format").matches(t,"Invalid email address")}),h=r().shape({password:e().required("Password is required").min(7,"The password must be at least 7 characters long").matches(a,"Your password is at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters is in English."),newPassword:e().required("Password is required").min(7,"The password must be at least 7 characters long").matches(a,"Please create a stronger password. The password must be at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters must be English.")}),u=r().shape({password:e().required("Password is required").min(7,"The password must be at least 7 characters long").matches(a,"Your password is at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters is in English.")}),w=s(i)`
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
`,g=s(l)`
  display: block;
  margin-top: 20px;
  font-weight: 500;
  color: var(--grey-light);
  text-align: center;
`,b=s(o)`
  position: absolute;
  top: 26px;
  left: 10px;
`,x=s.div`
  position: relative;
`,q=s(n)`
  width: 100%;
`,E=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;export{b as E,E as F,w as S,x as a,q as b,g as c,h as d,u as e,p as f,m as l};
