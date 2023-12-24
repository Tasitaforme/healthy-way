import{s as e,q as n}from"./index-0e5aaad3.js";import{a as t}from"./Components.styled-d8e02a3a.js";const s=(o,a)=>o.slice().sort(()=>.5-Math.random()).slice(0,a),c=e.li`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 676px;
  }
`,p=e.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
  }
`,m=e.li`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 20px;
  align-items: center;
  background-color: var(--black-secondary);
  border-radius: 12px;

  @media screen and (min-width: 834px) {
    min-width: calc((100% - 20px) / 2);
  }
`;e.img`
  width: 46px;
  height: 46px;
`;const l=e(t)`
  font-weight: 400;
`,x=e.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 6px;
  align-items: center;
  margin-top: 2px;
`,f=async()=>{try{const{data:o}=await n.get("/api/user/recommended-food");return o}catch(o){return o}};export{p as F,c as R,f as a,m as b,l as c,x as d,s as g};
