import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{f as n}from"./iframe-DzT9rkd3.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{_ as i,a,c as o,d as s,f as c,g as l,h as u,i as d,l as f,m as p,n as m,o as h,p as g,r as _,s as v,t as y,u as b,v as x}from"./observer-MXO0llnb.js";var S,C,w,T;function E(){return(E=e((()=>{S=n(),u(),b(),o(),a(),i(),_(),m(),C=r(),w=(0,S.memo)(({_ref:e,_handle:t,_render:n,_height:r})=>{let[i,a]=(0,S.useState)(``);return(0,S.useImperativeHandle)(t,()=>a,[]),(0,C.jsx)(`div`,{ref:e,"aria-hidden":!0,onClick:c,onMouseDown:c,onMouseUp:c,onMouseOver:c,onMouseOut:c,onMouseMove:c,children:(0,C.jsx)(`div`,{style:{height:r},children:(0,C.jsxs)(`div`,{style:(0,S.useMemo)(()=>({transform:`translate(0px, 0px)`,pointerEvents:`none`,userSelect:`none`,msUserSelect:`none`,WebkitUserSelect:`none`,boxSizing:`content-box`,textSizeAdjust:`100%`,WebkitTextSizeAdjust:`100%`,MozTextSizeAdjust:`100%`,whiteSpace:`pre`}),[]),children:[(0,S.useMemo)(()=>n?n(i):i,[i,n]),l]})})})}),T=(0,S.forwardRef)(({children:e,autoHeight:t,style:n,onChange:r,onKeyDown:i,onSelectionChange:a,...o},c)=>{let l=(0,S.useRef)(null),u=(0,S.useRef)(null),m=(0,S.useRef)(null),[[_,b,T,E],D]=(0,S.useState)([0,0,0,0]),[O,k]=(0,S.useState)(!1),A=(0,S.useRef)(``),[[j,M],N]=(0,S.useState)([null,null]),P=d(()=>{let e=s();return v(l,t=>{if(N(t),e){if(!l.current||!u.current)return;let{scrollTop:e,scrollLeft:t}=l[x];u[x].style.transform=`translate(${-t}px, ${-e}px)`}})}),F=_+T,I=b+E,L=!!(F+I);return(0,S.useImperativeHandle)(c,()=>{let e=l[x],t={get selectionStart(){return P._getSelectionStart()},get selectionEnd(){return P._getSelectionEnd()},setRangeText(t,n,r,i){e.setRangeText?e.setRangeText(t,n,r,i):(e.focus(),e.selectionStart=n,e.selectionEnd=r,document.execCommand(`insertText`,!1,t)),e.dispatchEvent(new Event(`input`,{bubbles:!0}))}};return new Proxy(e,{get(e,n){if(t[n])return t[n];let r=e[n];return typeof r==`function`?r.bind(e):r},set(e,t,n){return e[t]=n,!0}})},[]),h(()=>{let e=l[x],t=u[x];if(e&&t)return y(e,t,P,D,k)},[]),h(()=>{let e=l[x];e&&m[x](e.value)},[o.value]),h(()=>{let e=l[x],t=u[x];t&&e&&g(e,t,A,n)},[n]),(0,S.useEffect)(()=>{if(j!=null&&M!=null&&a){if(!O)a({focused:!1,selectionStart:j,selectionEnd:M});else{let e=p(u[x],j,j+1).getBoundingClientRect();a({focused:!0,top:e.top,left:e.left,height:e.height,selectionStart:j,selectionEnd:M})}}},[O,j,M]),(0,S.useEffect)(()=>{let e=l[x];t&&e&&(e.style.height=`auto`,e.style.height=`${e.scrollHeight}px`)}),(0,C.jsxs)(`div`,{style:(0,S.useMemo)(()=>{let e=F,t=I;return n&&(f(n.width)&&(e=n.width),f(n.height)&&(t=n.height)),{display:`inline-block`,position:`relative`,width:e,height:t}},[F,I,n]),children:[(0,C.jsx)(`div`,{style:(0,S.useMemo)(()=>{let e={position:`absolute`,overflow:`hidden`,top:0,left:0,width:F,height:I};return n&&[`background`,`backgroundColor`].forEach(t=>{n[t]&&(e[t]=n[t])}),e},[F,I,n]),children:(0,C.jsx)(w,{_ref:u,_handle:m,_render:e,_height:b})}),(0,C.jsx)(`input`,{...o,ref:l,style:(0,S.useMemo)(()=>({...n,background:`transparent`,margin:0,position:`absolute`,...!L&&{position:void 0,verticalAlign:`top`}}),[n,L]),onChange:(0,S.useCallback)(e=>{m[x]?.(e.target.value),r?.(e)},[r]),onKeyDown:(0,S.useCallback)(e=>{e.nativeEvent.isComposing||e.nativeEvent.keyCode===229||(i?.(e),P._updateSeletion())},[i])})]})}),T.__docgenInfo={description:`Input component with some extra props. See {@link RichInputProps} and {@link RichInputHandle}.

**NOTE: This component is experimental one so it may have some bugs.**`,methods:[],displayName:`RichInput`,props:{children:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => React.ReactNode`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`ReactReactNode`,raw:`React.ReactNode`}}},description:"Render function to create customized view from value.\n\nThis function should return ReactNodes which texts are positioned the same as textarea (see examples for detailed usage).\n\nOn the rendered nodes, currently limited event handlers will work.\n- `onClick`\n- `onMouseOver`\n- `onMouseOut`\n- `onMouseMove`\n- `onMouseDown`\n- `onMouseUp`\n@defaultValue undefined"},autoHeight:{required:!1,tsType:{name:`boolean`},description:"If true, textarea height is automatically resized and height of style prop does not work. Set `maxHeight` to style prop if you need limit.\n@defaultValue undefined"},onSelectionChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(pos: CaretPosition) => void`,signature:{arguments:[{type:{name:`union`,raw:`| {
    focused: false;
    selectionStart: number;
    selectionEnd: number;
  }
| {
    focused: true;
    selectionStart: number;
    selectionEnd: number;
    top: number;
    left: number;
    height: number;
  }`,elements:[{name:`signature`,type:`object`,raw:`{
  focused: false;
  selectionStart: number;
  selectionEnd: number;
}`,signature:{properties:[{key:`focused`,value:{name:`literal`,value:`false`,required:!0}},{key:`selectionStart`,value:{name:`number`,required:!0}},{key:`selectionEnd`,value:{name:`number`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  focused: true;
  selectionStart: number;
  selectionEnd: number;
  top: number;
  left: number;
  height: number;
}`,signature:{properties:[{key:`focused`,value:{name:`literal`,value:`true`,required:!0}},{key:`selectionStart`,value:{name:`number`,required:!0}},{key:`selectionEnd`,value:{name:`number`,required:!0}},{key:`top`,value:{name:`number`,required:!0}},{key:`left`,value:{name:`number`,required:!0}},{key:`height`,value:{name:`number`,required:!0}}]}}]},name:`pos`}],return:{name:`void`}}},description:`Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.
@defaultValue undefined`}},composes:[`Omit`]}})))()}var D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{D=t(n()),E(),O=r(),k={component:T},A={paddingLeft:10,paddingRight:10},j={render:()=>{let[e,t]=(0,D.useState)(`Lorem ipsum`);return(0,O.jsx)(T,{style:A,onChange:e=>t(e.target.value),value:e,children:e=>e.split(``).map((e,t)=>(0,O.jsx)(`span`,{style:{color:t%2==0?`red`:void 0},children:e},t))})}},M={render:()=>(0,O.jsx)(T,{style:A,defaultValue:`Lorem ipsum`,children:e=>e.split(``).map((e,t)=>(0,O.jsx)(`span`,{style:{color:t%2==0?`red`:void 0},children:e},t))})},N={render:()=>{let[e,t]=(0,D.useState)(`Lorem ipsum`);return(0,O.jsx)(T,{style:{width:`100%`},onChange:e=>t(e.target.value),value:e,children:e=>e.split(``).map((e,t)=>(0,O.jsx)(`span`,{style:{color:t%2==0?`red`:void 0},children:e},t))})},name:`Width 100%`},P=[`Controlled`,`Uncontrolled`,`WidthMax`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState("Lorem ipsum");
    return <RichInput style={style} onChange={e => setText(e.target.value)} value={text}>
        {v => {
        return v.split("").map((t, i) => <span key={i} style={{
          color: i % 2 === 0 ? "red" : undefined
        }}>
              {t}
            </span>);
      }}
      </RichInput>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <RichInput style={style} defaultValue={"Lorem ipsum"}>
        {v => {
        return v.split("").map((t, i) => <span key={i} style={{
          color: i % 2 === 0 ? "red" : undefined
        }}>
              {t}
            </span>);
      }}
      </RichInput>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState("Lorem ipsum");
    return <RichInput style={{
      width: "100%"
    }} onChange={e => setText(e.target.value)} value={text}>
        {v => {
        return v.split("").map((t, i) => <span key={i} style={{
          color: i % 2 === 0 ? "red" : undefined
        }}>
              {t}
            </span>);
      }}
      </RichInput>;
  },
  name: "Width 100%"
}`,...N.parameters?.docs?.source}}}})))()}F();export{j as Controlled,M as Uncontrolled,N as WidthMax,P as __namedExportsOrder,k as default};