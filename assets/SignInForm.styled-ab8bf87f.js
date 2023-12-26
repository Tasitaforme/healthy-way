import{d as a,e,a as i,c as o,b as n}from"./Formik.styled-d4687912.js";import{s}from"./index-d28cb229.js";import{a as d}from"./SignInPage.styled-bf438acf.js";const t=/^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,r=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,p=a().shape({email:e().required("Email is required").email("Invalid email format").matches(t,"Invalid email address"),password:e().required("Password is required").min(7,"The password must be at least 7 characters long")}),h=a().shape({email:e().required("Email is required").email("Invalid email format").matches(t,"Invalid email address")}),u=a().shape({password:e().required("Password is required").min(7,"The password must be at least 7 characters long").matches(r,"Your password is at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters is in English."),newPassword:e().required("Password is required").min(7,"The password must be at least 7 characters long").matches(r,"Please create a stronger password. The password must be at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters must be English.")}),w=a().shape({password:e().required("Password is required").min(7,"The password must be at least 7 characters long").matches(r,"Your password is at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters is in English.")}),g=s(i)`
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
`,b=s(d)`
  display: block;
  margin-top: 20px;
  font-weight: 500;
  color: var(--grey-light);
  text-align: center;
`,x=s(o)`
  position: absolute;
  top: 26px;
  left: 10px;
`,q=s.div`
  position: relative;
`,F=s(n)`
  width: 100%;
`,S=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;export{x as E,S as F,g as S,q as a,F as b,b as c,u as d,w as e,h as f,p as l};
