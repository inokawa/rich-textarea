import{i as M,f as E,w as A,q as b,Y as h}from"./iframe.047c3e6d.js";var c="backgrounds",{document:l,window:L}=A,B=()=>L.matchMedia("(prefers-reduced-motion: reduce)").matches,H=(r,e=[],t)=>{if(r==="transparent")return"transparent";if(e.find(a=>a.value===r))return r;let n=e.find(a=>a.name===t);if(n)return n.value;if(t){let a=e.map(o=>o.name).join(", ");M.warn(E`
        Backgrounds Addon: could not find the default color "${t}".
        These are the available colors for your story based on your configuration:
        ${a}.
      `)}return"transparent"},k=r=>{(Array.isArray(r)?r:[r]).forEach(T)},T=r=>{let e=l.getElementById(r);e&&e.parentElement.removeChild(e)},F=(r,e)=>{let t=l.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let n=l.createElement("style");n.setAttribute("id",r),n.innerHTML=e,l.head.appendChild(n)}},I=(r,e,t)=>{let n=l.getElementById(r);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let a=l.createElement("style");a.setAttribute("id",r),a.innerHTML=e;let o=`addon-backgrounds-grid${t?`-docs-${t}`:""}`,d=l.getElementById(o);d?d.parentElement.insertBefore(a,d):l.head.appendChild(a)}},z=(r,e)=>{var g;let{globals:t,parameters:n}=e,a=(g=t[c])==null?void 0:g.value,o=n[c],d=b(()=>o.disable?"transparent":H(a,o.values,o.default),[o,a]),i=b(()=>d&&d!=="transparent",[d]),p=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=b(()=>{let s="transition: background-color 0.3s;";return`
      ${p} {
        background: ${d} !important;
        ${B()?"":s}
      }
    `},[d,p]);return h(()=>{let s=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!i){k(s);return}I(s,u,e.viewMode==="docs"?e.id:null)},[i,u,e]),r()},C=(r,e)=>{var x,v,y;let{globals:t,parameters:n}=e,a=n[c].grid,o=((x=t[c])==null?void 0:x.grid)===!0&&a.disable!==!0,{cellAmount:d,cellSize:i,opacity:p}=a,u=e.viewMode==="docs",g=n.layout===void 0||n.layout==="padded"?16:0,s=(v=a.offsetX)!=null?v:u?20:g,$=(y=a.offsetY)!=null?y:u?20:g,f=b(()=>{let m=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",w=[`${i*d}px ${i*d}px`,`${i*d}px ${i*d}px`,`${i}px ${i}px`,`${i}px ${i}px`].join(", ");return`
      ${m} {
        background-size: ${w} !important;
        background-position: ${s}px ${$}px, ${s}px ${$}px, ${s}px ${$}px, ${s}px ${$}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${p}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${p}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${p/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${p/2}) 1px, transparent 1px) !important;
      }
    `},[i]);return h(()=>{let m=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!o){k(m);return}F(m,f)},[o,f,e]),r()},S=[C,z],Y={[c]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},_={[c]:null};export{S as decorators,_ as globals,Y as parameters};
//# sourceMappingURL=preview.afa3e229.js.map
