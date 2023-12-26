import{s as n,o as r,B as c,r as a,j as e,C as x,x as p}from"./index-ea397ace.js";import{H as m,d as l,e as g}from"./Components.styled-b05377d2.js";import{g as h,a as f,b as u,c as w,d as b}from"./getRecommendedFood-7d036e37.js";const j="/healthy-way/assets/food-desk@1x-a984dc19.png",y="/healthy-way/assets/food-desk@2x-1318a229.png",k="/healthy-way/assets/food-tab@1x-20ca8956.png",F="/healthy-way/assets/food-tab@2x-f20df540.png",R="/healthy-way/assets/food-mob@1x-411148cb.png",v="/healthy-way/assets/food-mob@2x-5a8c6e43.png",I=n.section`
  padding-top: 16px;
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    padding-top: 24px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    padding-bottom: 60px;
  }
`,$=n(m)`
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 20px;
  }
`,T=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    column-gap: 44px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`,B=n.div`
  width: 300px;
  height: 312px;
  flex-shrink: 0;

  background-image: url(${R});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${v});
  }

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 396px;
    background-image: url(${k});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${F});
    }
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
    height: 560px;
    background-image: url(${j});
    margin-left: 116px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${y});
    }
  }
`,L=n.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
  }
  @media screen and (min-width: 1440px) {
    width: 676px;
  }
`;function D(){const i=r(c),[d,t]=a.useState([]),s=h(d,10);return a.useEffect(()=>{i&&f().then(o=>{t(o)}).catch(o=>console.log(o))},[i]),e.jsx("main",{children:e.jsx(I,{children:e.jsxs(x,{children:[e.jsx($,{children:"Recommended food"}),e.jsxs(T,{children:[e.jsx(B,{alt:"Illustration of women with food",width:"536px"}),d.length===0?e.jsx(p,{}):e.jsx(L,{children:s.map(o=>e.jsxs(u,{children:[e.jsx("img",{src:o.img,alt:o.name,width:"46px"}),e.jsxs("div",{children:[e.jsx(w,{children:o.name}),e.jsxs(b,{children:[e.jsx(l,{children:o.amount}),e.jsxs(g,{children:[o.calories," calories"]})]})]})]},o._id))})]})]})})})}export{D as default};
