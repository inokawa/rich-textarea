import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-6r5P-tC5.js";import{u as B,r as s,a as C,c as D,s as $,R as F,h as q,b as g,C as K,i as G,d as J}from"./observer-BRJyxK-O.js";import"./preload-helper-D9Z9MdNV.js";const Q=n.memo(({_ref:u,_handle:l,_render:t,_height:p})=>{const[a,v]=n.useState("");return n.useImperativeHandle(l,()=>v,[]),o.jsx("div",{ref:u,"aria-hidden":!0,onClick:g,onMouseDown:g,onMouseUp:g,onMouseOver:g,onMouseOut:g,onMouseMove:g,children:o.jsx("div",{style:{height:p},children:o.jsxs("div",{style:n.useMemo(()=>({transform:"translate(0px, 0px)",pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",boxSizing:"content-box",textSizeAdjust:"100%",WebkitTextSizeAdjust:"100%",MozTextSizeAdjust:"100%",whiteSpace:"pre"}),[]),children:[n.useMemo(()=>t?t(a):a,[a,t]),K]})})})}),y=n.forwardRef(({children:u,autoHeight:l,style:t,onChange:p,onKeyDown:a,onSelectionChange:v,...j},L)=>{const c=n.useRef(null),h=n.useRef(null),T=n.useRef(null),[[z,M,H,A],P]=n.useState([0,0,0,0]),[I,U]=n.useState(!1),W=n.useRef(""),[[f,S],N]=n.useState([null,null]),R=B(()=>{const e=G();return J(c,r=>{if(N(r),e){if(!c[s]||!h[s])return;const{scrollTop:d,scrollLeft:i}=c[s];h[s].style.transform=`translate(${-i}px, ${-d}px)`}})}),x=z+H,b=M+A,_=!!(x+b);return n.useImperativeHandle(L,()=>{const e=c[s],r={get selectionStart(){return R._getSelectionStart()},get selectionEnd(){return R._getSelectionEnd()},setRangeText(d,i,m,V){e.setRangeText?e.setRangeText(d,i,m,V):(e.focus(),e.selectionStart=i,e.selectionEnd=m,document.execCommand("insertText",!1,d)),e.dispatchEvent(new Event("input",{bubbles:!0}))}};return new Proxy(e,{get(d,i){if(r[i])return r[i];const m=d[i];return typeof m=="function"?m.bind(d):m},set(d,i,m){return d[i]=m,!0}})},[]),C(()=>{const e=c[s],r=h[s];if(!(!e||!r))return D(e,r,R,P,U)},[]),C(()=>{const e=c[s];e&&T[s](e.value)},[j.value]),C(()=>{const e=c[s],r=h[s];!r||!e||$(e,r,W,t)},[t]),n.useEffect(()=>{if(!(f==null||S==null||!v))if(!I)v({focused:!1,selectionStart:f,selectionEnd:S});else{const r=F(h[s],f,f+1).getBoundingClientRect();v({focused:!0,top:r.top,left:r.left,height:r.height,selectionStart:f,selectionEnd:S})}},[I,f,S]),n.useEffect(()=>{const e=c[s];!l||!e||(e.style.height="auto",e.style.height=`${e.scrollHeight}px`)}),o.jsxs("div",{style:n.useMemo(()=>{let e=x,r=b;return t&&(q(t.width)&&(e=t.width),q(t.height)&&(r=t.height)),{display:"inline-block",position:"relative",width:e,height:r}},[x,b,t]),children:[o.jsx("div",{style:n.useMemo(()=>{const e={position:"absolute",overflow:"hidden",top:0,left:0,width:x,height:b};return t&&["background","backgroundColor"].forEach(r=>{t[r]&&(e[r]=t[r])}),e},[x,b,t]),children:o.jsx(Q,{_ref:h,_handle:T,_render:u,_height:M})}),o.jsx("input",{...j,ref:c,style:n.useMemo(()=>({...t,background:"transparent",margin:0,position:"absolute",...!_&&{position:void 0,verticalAlign:"top"}}),[t,_]),onChange:n.useCallback(e=>{T[s]?.(e.target.value),p?.(e)},[p]),onKeyDown:n.useCallback(e=>{e.nativeEvent.isComposing||e.nativeEvent.keyCode===229||(a?.(e),R._updateSeletion())},[a])})]})});y.__docgenInfo={description:`Input component with some extra props. See {@link RichInputProps} and {@link RichInputHandle}.

**NOTE: This component is experimental one so it may have some bugs.**`,methods:[],displayName:"RichInput",props:{children:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => React.ReactNode",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"Render function to create customized view from value.\n\nThis function should return ReactNodes which texts are positioned the same as textarea (see examples for detailed usage).\n\nOn the rendered nodes, currently limited event handlers will work.\n- `onClick`\n- `onMouseOver`\n- `onMouseOut`\n- `onMouseMove`\n- `onMouseDown`\n- `onMouseUp`\n@defaultValue undefined"},autoHeight:{required:!1,tsType:{name:"boolean"},description:"If true, textarea height is automatically resized and height of style prop does not work. Set `maxHeight` to style prop if you need limit.\n@defaultValue undefined"},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(pos: CaretPosition) => void",signature:{arguments:[{type:{name:"union",raw:`| {
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
  }`,elements:[{name:"signature",type:"object",raw:`{
  focused: false;
  selectionStart: number;
  selectionEnd: number;
}`,signature:{properties:[{key:"focused",value:{name:"literal",value:"false",required:!0}},{key:"selectionStart",value:{name:"number",required:!0}},{key:"selectionEnd",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  focused: true;
  selectionStart: number;
  selectionEnd: number;
  top: number;
  left: number;
  height: number;
}`,signature:{properties:[{key:"focused",value:{name:"literal",value:"true",required:!0}},{key:"selectionStart",value:{name:"number",required:!0}},{key:"selectionEnd",value:{name:"number",required:!0}},{key:"top",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]}}]},name:"pos"}],return:{name:"void"}}},description:`Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.
@defaultValue undefined`}},composes:["Omit"]};const te={component:y},O={paddingLeft:10,paddingRight:10},k={render:()=>{const[u,l]=n.useState("Lorem ipsum");return o.jsx(y,{style:O,onChange:t=>l(t.target.value),value:u,children:t=>t.split("").map((p,a)=>o.jsx("span",{style:{color:a%2===0?"red":void 0},children:p},a))})}},w={render:()=>o.jsx(y,{style:O,defaultValue:"Lorem ipsum",children:u=>u.split("").map((l,t)=>o.jsx("span",{style:{color:t%2===0?"red":void 0},children:l},t))})},E={render:()=>{const[u,l]=n.useState("Lorem ipsum");return o.jsx(y,{style:{width:"100%"},onChange:t=>l(t.target.value),value:u,children:t=>t.split("").map((p,a)=>o.jsx("span",{style:{color:a%2===0?"red":void 0},children:p},a))})},name:"Width 100%"};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};const ne=["Controlled","Uncontrolled","WidthMax"];export{k as Controlled,w as Uncontrolled,E as WidthMax,ne as __namedExportsOrder,te as default};
