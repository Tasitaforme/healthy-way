import{s as o,w as n}from"./index-d28cb229.js";import{a as t}from"./Components.styled-f8098fdd.js";const s=(e,a)=>{if(e)return e.slice().sort(()=>.5-Math.random()).slice(0,a)},c=o.li`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 676px;
  }
`,p=o.ul`
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
`,m=o.li`
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
`;o.img`
  width: 46px;
  height: 46px;
`;const l=o(t)`
  font-weight: 400;
`,x=o.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 6px;
  align-items: center;
  margin-top: 2px;
`,f=async()=>{try{const{data:e}=await n.get("/api/user/recommended-food");return e}catch(e){return e}};export{p as F,c as R,f as a,m as b,l as c,x as d,s as g};
