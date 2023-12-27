import{c as a,b as e,s,e as i,g as o,h as d}from"./index-513d067b.js";import{a as n}from"./SignInPage.styled-8b731aa4.js";const r=/^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,t=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,c=a().shape({email:e().required("Email is required").email("Invalid email format").matches(r,"Invalid email address"),password:e().required("Password is required").min(7,"The password must be at least 7 characters long")}),p=a().shape({email:e().required("Email is required").email("Invalid email format").matches(r,"Invalid email address")}),h=a().shape({password:e().required("Password is required").min(7,"The password must be at least 7 characters long"),newPassword:e().required("Password is required").min(7,"The password must be at least 7 characters long").matches(t,"Please create a stronger password. The password must be at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters must be English.")}),u=a().shape({password:e().required("Password is required").min(7,"The password must be at least 7 characters long").matches(t,"Your password is at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters is in English.")}),w=s(i)`
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
`,g=s(n)`
  display: block;
  margin-top: 20px;
  font-weight: 500;
  color: var(--grey-light);
  text-align: center;
`,x=s(o)`
  position: absolute;
  top: 26px;
  left: 10px;
`,b=s.div`
  position: relative;
`,q=s(d)`
  width: 100%;
`,F=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;export{x as E,F,w as S,b as a,q as b,g as c,h as d,u as e,p as f,c as l};
