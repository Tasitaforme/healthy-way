import{s as o,r as i,K as c,j as n}from"./index-4154ed12.js";const l=o.div`
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
`,d=o.div`
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
`,p=document.querySelector("#root_modal");function f({modalActive:a,setModalActive:e,children:s}){return a?document.body.style.overflow="hidden":document.body.style.overflow="auto",i.useEffect(()=>{const t=r=>{r.code==="Escape"&&e(!1)};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e]),c.createPortal(n.jsx(l,{className:a?"active":"",onClick:()=>e(!1),children:n.jsx(d,{className:a?"active":"",onClick:t=>t.stopPropagation(),children:s})}),p)}const y=a=>a.diary,g=a=>a.diary.meals,u="/healthy-way/assets/breakfast@2x-7078c5bd.png",h="/healthy-way/assets/lunch@2x-e5d461bc.png",x="/healthy-way/assets/dinner@2x-692021a9.png",v="/healthy-way/assets/snack@2x-1b2c93f7.png";export{f as M,v as a,u as b,g as c,x as d,h as l,y as s};
