import{s as n,r as c,O as l,j as o,c as m,b as d,d as t}from"./index-513d067b.js";const u=n.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(5, 5, 5, 0.8);
  margin: 0 auto;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  pointer-events: none;

  transition: opacity var(--transition-dur-and-fun);
  opacity: 0;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`,p=n.div`
  position: relative;
  margin-top: 116px;
  margin-left: 10px;
  margin-right: 10px;

  background-color: var(--black-secondary);
  border-radius: 12px;
  opacity: 1;

  transform: scale(0);
  transition: transform var(--transition-dur-and-fun);

  max-height: calc(100% - 20px);
  overflow-y: auto;

  &.active {
    transform: scale(1);
  }
  @media screen and (min-width: 834px) {
    margin-top: 212px;
    margin-left: auto;
    margin-right: auto;
  }
`,h=document.querySelector("#root_modal");function y({modalActive:e,setModalActive:r,children:s}){return e?document.body.style.overflow="hidden":document.body.style.overflow="auto",c.useEffect(()=>{const a=i=>{i.code==="Escape"&&r(!1)};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[r]),l.createPortal(o.jsx(u,{className:e?"active":"",onClick:()=>r(!1),children:o.jsx(p,{className:e?"active":"",onClick:a=>a.stopPropagation(),children:s})}),h)}const f=e=>e.diary,g=e=>e.diary.meals,x="/healthy-way/assets/breakfast@2x-7078c5bd.png",v="/healthy-way/assets/lunch@2x-e5d461bc.png",w="/healthy-way/assets/dinner@2x-692021a9.png",q="/healthy-way/assets/snack@2x-1b2c93f7.png",k=m().shape({name:d().required(),carbohydrate:t().required().positive("Carbonohidrates must be a positive number").min(1,"Carbonohidrates must be greater than or equal to 1").max(1e3,"Carbonohidrates must be lower than or equal to 1000"),protein:t().required().positive("Protein must be a positive number").min(1,"Protein must be greater than or equal to 1").max(1e3,"Protein must be lower than or equal to 1000"),fat:t().required().positive("Fat must be a positive number").min(1,"Fat must be greater than or equal to 1").max(1e3,"Fat must be lower than or equal to 1000"),calories:t().required().positive("Fat must be a positive number").min(1,"Fat must be greater than or equal to 1").max(1e3,"Fat must be lower than or equal to 1000")});export{y as M,w as a,x as b,q as c,k as d,g as e,v as l,f as s};
