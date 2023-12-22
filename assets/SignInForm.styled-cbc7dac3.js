import{d as a,e,h as t,c as n}from"./Formik.styled-f7604398.js";import{s as r}from"./index-8810eb52.js";import{a as o}from"./SignUpImage.styled-df52937f.js";const s=/^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,m=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,i=/^([A-Za-zА-Яа-яґҐЁёІіЇїЄє]+((['’ʼ \s-][A-Za-zА-Яа-яґҐЁёІіЇїЄє ])?[a-zA-Zа-яА-Я]*))*$/,d=/^(\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9})*$/,h=a().shape({email:e().required("Email is required").email("Invalid email format").matches(s,"Invalid email address"),password:e().required("Password is required").min(7,"The password must be at least 5 characters long")}),u=a().shape({email:e().required("Email is required").email("Invalid email format").matches(s,"Invalid email address")});a().shape({name:e().required("Name is required").matches(i,"Name may contain only letters, apostrophe, dash and spaces."),email:e().required("Email is required").email("Invalid email format").matches(s,"Invalid email address"),password:e().required("Password is required").min(7,"The password must be at least 5 characters long").matches(m,"Please create a stronger password. The password must be at least 5 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number"),confirmPassword:e().required("Confirmation password is required").oneOf([t("password"),null],"Passwords must match")});a().shape({name:e().required("Name is required").matches(i,"Name may contain only letters, apostrophe, dash and spaces."),number:e().min(5).matches(d,"A phone number must be digits and contain more than 5 characters. Can contain spaces, dashes, parentheses and can start with +.").required("A phone number is required")});const w=r(n)`
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
`,q=r(o)`
  display: block;
  margin-top: 20px;
  font-weight: 500;
  color: var(--grey-light);
  text-align: center;
`;export{q as F,w as S,u as f,h as l};
