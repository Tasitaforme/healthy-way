import{d as s,e,c as i}from"./Formik.styled-c50314a8.js";import{s as r}from"./index-696ca15b.js";import{a as o}from"./SignInPage.styled-04f7fdc5.js";const t=/^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,a=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,c=s().shape({email:e().required("Email is required").email("Invalid email format").matches(t,"Invalid email address"),password:e().required("Password is required").min(7,"The password must be at least 7 characters long")}),l=s().shape({email:e().required("Email is required").email("Invalid email format").matches(t,"Invalid email address")}),h=s().shape({password:e().required("Password is required").min(7,"The password must be at least 7 characters long").matches(a,"Your password is at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters is in English."),newPassword:e().required("Password is required").min(7,"The password must be at least 7 characters long").matches(a,"Please create a stronger password. The password must be at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters must be English.")}),p=s().shape({password:e().required("Password is required").min(7,"The password must be at least 7 characters long").matches(a,"Your password is at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters is in English.")}),u=r(i)`
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
`,w=r(o)`
  display: block;
  margin-top: 20px;
  font-weight: 500;
  color: var(--grey-light);
  text-align: center;
`;export{w as F,u as S,h as c,p as d,l as f,c as l};
