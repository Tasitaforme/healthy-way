import{s as o,a as n,a0 as t}from"./index-eeab6bbc.js";const r=(e,a)=>{if(e)return e.slice().sort(()=>.5-Math.random()).slice(0,a)},s=o.li`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 676px;
  }
`,c=o.ul`
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
`,p=o.li`
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
`;const l=o(n)`
  font-weight: 400;
`,m=o.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 6px;
  align-items: center;
  margin-top: 2px;
`,x=async()=>{try{const{data:e}=await t.get("/api/user/recommended-food");return e}catch(e){return e}};export{c as F,s as R,x as a,p as b,l as c,m as d,r as g};
