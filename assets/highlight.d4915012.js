import{b as s,p as m,w as p}from"./iframe.047c3e6d.js";var a="storybook/highlight",h="storybookHighlight",g=`${a}/add`,u=`${a}/reset`,{document:l}=p,b=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,c=e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"});module&&module.hot&&module.hot.decline&&module.hot.decline();var d=s.getChannel(),x=e=>{let t=h;i();let n=Array.from(new Set(e.elements)),o=l.createElement("style");o.setAttribute("id",t),o.innerHTML=n.map(r=>`${r}{
          ${b(e.color,e.style)}
         }`).join(" "),l.head.appendChild(o)},i=()=>{let e=h,t=l.getElementById(e);t&&t.parentNode.removeChild(t)};d.on(m,i);d.on(u,i);d.on(g,x);export{c as highlightObject,b as highlightStyle};
//# sourceMappingURL=highlight.d4915012.js.map
