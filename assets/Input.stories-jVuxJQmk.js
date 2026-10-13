import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{f as n}from"./iframe-CCKfv5hY.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{a as i,c as a,d as o,f as s,h as c,i as l,l as u,m as d,n as f,o as p,p as m,r as h,s as g,t as _,u as v}from"./observer-iouYk52n.js";var y,b,x,S;function C(){return(C=e((()=>{y=n(),m(),a(),p(),h(),c(),f(),b=r(),x=(0,y.memo)(({_ref:e,_handle:t,_render:n,_height:r})=>{let[i,a]=(0,y.useState)(``);return(0,y.useImperativeHandle)(t,()=>a,[]),(0,b.jsx)(`div`,{ref:e,"aria-hidden":!0,onClick:v,onMouseDown:v,onMouseUp:v,onMouseOver:v,onMouseOut:v,onMouseMove:v,children:(0,b.jsx)(`div`,{style:{height:r},children:(0,b.jsxs)(`div`,{style:(0,y.useMemo)(()=>({transform:`translate(0px, 0px)`,pointerEvents:`none`,userSelect:`none`,msUserSelect:`none`,WebkitUserSelect:`none`,boxSizing:`content-box`,textSizeAdjust:`100%`,WebkitTextSizeAdjust:`100%`,MozTextSizeAdjust:`100%`,whiteSpace:`pre`}),[]),children:[(0,y.useMemo)(()=>n?n(i):i,[i,n]),d]})})})}),S=(0,y.forwardRef)(({children:e,autoHeight:t,style:n,onChange:r,onKeyDown:a,onSelectionChange:c,...d},f)=>{let p=(0,y.useRef)(null),m=(0,y.useRef)(null),h=(0,y.useRef)(null),[[v,S,C,w],T]=(0,y.useState)([0,0,0,0]),[E,D]=(0,y.useState)(!1),[O,k]=(0,y.useState)(!1),[[A,j],M]=(0,y.useState)([null,null]),[N]=(0,y.useState)(()=>{let e=u();return i(p,t=>{if(M(t),e){if(!p.current||!m.current)return;let{scrollTop:e,scrollLeft:t}=p.current;m.current.style.transform=`translate(${-t}px, ${-e}px)`}})}),P=v+C,F=S+w,I=!!(P+F);return(0,y.useImperativeHandle)(f,()=>{let e=p.current,t={get selectionStart(){return N._getSelectionStart()},get selectionEnd(){return N._getSelectionEnd()},setRangeText(t,n,r,i){e.setRangeText?e.setRangeText(t,n,r,i):(e.focus(),e.selectionStart=n,e.selectionEnd=r,document.execCommand(`insertText`,!1,t)),e.dispatchEvent(new Event(`input`,{bubbles:!0}))}};return new Proxy(e,{get(e,n){if(t[n])return t[n];let r=e[n];return typeof r==`function`?r.bind(e):r},set(e,t,n){return e[t]=n,!0}})},[]),l(()=>{let e=p.current,t=m.current;if(e&&t)return _(e,t,N,T,D)},[]),l(()=>{let e=p.current;e&&(h.current(e.value),k(!!e.value))},[d.value]),l(()=>{let e=p.current,t=m.current;t&&e&&o(e,t)},[n]),(0,y.useEffect)(()=>{if(A!=null&&j!=null&&c){if(!E)c({focused:!1,selectionStart:A,selectionEnd:j});else{let e=s(m.current,A,A+1).getBoundingClientRect();c({focused:!0,top:e.top,left:e.left,height:e.height,selectionStart:A,selectionEnd:j})}}},[E,A,j]),(0,y.useEffect)(()=>{let e=p.current;t&&e&&(e.style.height=`auto`,e.style.height=`${e.scrollHeight}px`)}),(0,b.jsxs)(`div`,{style:(0,y.useMemo)(()=>{let e=P,t=F;return n&&(g(n.width)&&(e=n.width),g(n.height)&&(t=n.height)),{display:`inline-block`,position:`relative`,width:e,height:t}},[P,F,n]),children:[(0,b.jsx)(`div`,{style:(0,y.useMemo)(()=>{let e={position:`absolute`,overflow:`hidden`,top:0,left:0,width:P,height:F};return n&&[`background`,`backgroundColor`].forEach(t=>{n[t]&&(e[t]=n[t])}),e},[P,F,n]),children:(0,b.jsx)(x,{_ref:m,_handle:h,_render:e,_height:S})}),(0,b.jsx)(`input`,{...d,ref:p,style:(0,y.useMemo)(()=>({...n,background:`transparent`,margin:0,position:`absolute`,...!I&&{position:void 0,verticalAlign:`top`},...O&&{WebkitTextFillColor:`transparent`,textDecorationColor:`transparent`,textShadow:`none`}}),[n,I,O]),onChange:(0,y.useCallback)(e=>{h.current?.(e.target.value),k(!!e.target.value),r?.(e)},[r]),onKeyDown:(0,y.useCallback)(e=>{e.nativeEvent.isComposing||e.nativeEvent.keyCode===229||(a?.(e),N._updateSeletion())},[a])})]})}),S.__docgenInfo={description:`Input component with some extra props. See {@link RichInputProps} and {@link RichInputHandle}.

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
@defaultValue undefined`}},composes:[`Omit`]}})))()}var w,T,E,D,O,k,A;function j(){return(j=e((()=>{w=t(n()),C(),T=r(),E={component:S},D={paddingLeft:10,paddingRight:10},O={render:()=>{let[e,t]=(0,w.useState)(`Lorem ipsum`);return(0,T.jsx)(S,{style:D,onChange:e=>t(e.target.value),value:e,children:e=>e.split(``).map((e,t)=>(0,T.jsx)(`span`,{style:{color:t%2==0?`red`:void 0},children:e},t))})}},k={render:()=>(0,T.jsx)(S,{style:D,defaultValue:`Lorem ipsum`,children:e=>e.split(``).map((e,t)=>(0,T.jsx)(`span`,{style:{color:t%2==0?`red`:void 0},children:e},t))})},A=[`Controlled`,`Uncontrolled`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}}})))()}j();export{O as Controlled,k as Uncontrolled,A as __namedExportsOrder,E as default};