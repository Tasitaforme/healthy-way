import{d as a,e,c as i}from"./Formik.styled-0707a901.js";import{s as r}from"./index-75c8b229.js";import{a as o}from"./SignInPage.styled-f5f47880.js";const t=/^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,s=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,c=a().shape({email:e().required("Email is required").email("Invalid email format").matches(t,"Invalid email address"),password:e().required("Password is required").min(7,"The password must be at least 7 characters long")}),l=a().shape({email:e().required("Email is required").email("Invalid email format").matches(t,"Invalid email address")}),p=a().shape({password:e().required("Password is required").min(7,"The password must be at least 7 characters long").matches(s,"Your password is at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters is in English."),newPassword:e().required("Password is required").min(7,"The password must be at least 7 characters long").matches(s,"Please create a stronger password. The password must be at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters must be English.")}),h=r(i)`
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
`,u=r(o)`
  display: block;
  margin-top: 20px;
  font-weight: 500;
  color: var(--grey-light);
  text-align: center;
`;export{u as F,h as S,p as c,l as f,c as l};
