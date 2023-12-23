import{c,s,b as n,j as e}from"./index-75c8b229.js";c.defaults.baseURL="https://healthy-way-app.onrender.com/api/user/";const a=async()=>{try{return(await c.get("/recommended-food")).data}catch(o){console.log(o)}},r=s.ul`
  /* display: flex;
  flex-direction: column; */

  column-count: 2;
  gap: 20px;
  /* width: calc((100% - 44px) / 2); */

  //tablet
  /* @media screen and () {
    flex-direction: row;
    flex-wrap: wrap;
  } */
  //mobil
  /* @media screen and () {
    width: 100%;
  } */
`,l=s.li`
  flex-basis: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
  padding: 20px 24px;
  /* border-radius: ;
  background-color: ; */
`,m=s.div`
  width: 46px;
  height: 46px;
`,p=s.img`
  display: block;
  max-width: 100%;
  height: auto;
`,x=s.div`
  display: flex;
  flex-direction: column;
  column-gap: 2px;
`,h=s.p`
  /* font-size: ;
  font-weight: ; */
  line-height: 24px;
  letter-spacing: 0em;
`,g=s.p`
  margin-right: 6px;
  /* font-size: ;
  font-weight: ; */
  line-height: 20px;
  letter-spacing: 0em;

  & > span {
    /* font-weight:;
    color:; */
  }
`,u=()=>{const[o,d]=n.useState([]);return n.useEffect(()=>{(async()=>{const i=(await a()).sort(()=>.5-Math.random()).slice(0,10);d(i)})()},[]),e.jsx(r,{children:o.map(t=>e.jsxs(l,{children:[e.jsx(m,{children:e.jsx(p,{src:t.img,alt:t.name})}),e.jsxs(x,{children:[e.jsx(h,{children:t.name}),e.jsxs(g,{children:[t.amount," ",e.jsxs("span",{children:[t.calories," calories"]})]})]})]},t._id))})},f=()=>e.jsx("div",{children:e.jsx(u,{})}),j="/healthy-way/assets/IllustrationRecommended-06d01b32.jpg",w=s.div`
  /* display: flex; */
`,y=s.div`
  display: flex;
`;s.h1``;const R=s.img`
  width: 536px;
  height: 560px;
`,F=()=>e.jsxs(w,{children:[e.jsx("h1",{children:"Recommended food"}),e.jsxs(y,{children:[e.jsx(R,{src:j,alt:"IllustrationRecommended"}),e.jsx(f,{})]})]});export{F as default};
