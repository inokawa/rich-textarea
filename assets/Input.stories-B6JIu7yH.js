import{j as a,s as g,C as D,u as K,r as o,a as j,c as ee,b as te,R as ne,h as q,i as re,d as se}from"./observer-ChNWUPNK.js";import{a as r}from"./index-CeHYjMkx.js";const oe=r.memo(({_ref:l,_handle:c,_render:t,_height:i})=>{const[s,v]=r.useState("");return r.useImperativeHandle(c,()=>v,[]),a.jsx("div",{ref:l,"aria-hidden":!0,onClick:g,onMouseDown:g,onMouseUp:g,onMouseOver:g,onMouseOut:g,onMouseMove:g,children:a.jsx("div",{style:{height:i},children:a.jsxs("div",{style:r.useMemo(()=>({transform:"translate(0px, 0px)",pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",boxSizing:"content-box",textSizeAdjust:"100%",WebkitTextSizeAdjust:"100%",MozTextSizeAdjust:"100%",whiteSpace:"pre"}),[]),children:[r.useMemo(()=>t?t(s):s,[s,t]),D]})})})}),y=r.forwardRef(({children:l,autoHeight:c,style:t,onChange:i,onKeyDown:s,onSelectionChange:v,...M},B)=>{const d=r.useRef(null),h=r.useRef(null),x=r.useRef(null),[[$,I,F,G],J]=r.useState([0,0,0,0]),[C,Q]=r.useState(!1),X=r.useRef(""),[[f,R],Y]=r.useState([null,null]),k=K(()=>{const e=re();return se(d,n=>{if(Y(n),e){if(!d[o]||!h[o])return;const{scrollTop:p,scrollLeft:u}=d[o];h[o].style.transform=`translate(${-u}px, ${-p}px)`}})}),b=$+F,S=I+G,_=!!(b+S);return r.useImperativeHandle(B,()=>{const e=d[o],n={get selectionStart(){return k._getSelectionStart()},get selectionEnd(){return k._getSelectionEnd()},setRangeText(p,u,m,Z){e.setRangeText?e.setRangeText(p,u,m,Z):(e.focus(),e.selectionStart=u,e.selectionEnd=m,document.execCommand("insertText",!1,p)),e.dispatchEvent(new Event("input",{bubbles:!0}))}};return new Proxy(e,{get(p,u){if(n[u])return n[u];const m=p[u];return typeof m=="function"?m.bind(p):m},set(p,u,m){return p[u]=m,!0}})},[]),j(()=>{const e=d[o],n=h[o];if(!(!e||!n))return ee(e,n,k,J,Q)},[]),j(()=>{const e=d[o];e&&x[o](e.value)},[M.value]),j(()=>{const e=d[o],n=h[o];!n||!e||te(e,n,X,t)},[t]),r.useEffect(()=>{if(!(f==null||R==null||!v))if(!C)v({focused:!1,selectionStart:f,selectionEnd:R});else{const n=ne(h[o],f,f+1).getBoundingClientRect();v({focused:!0,top:n.top,left:n.left,height:n.height,selectionStart:f,selectionEnd:R})}},[C,f,R]),r.useEffect(()=>{const e=d[o];!c||!e||(e.style.height="auto",e.style.height=`${e.scrollHeight}px`)}),a.jsxs("div",{style:r.useMemo(()=>{let e=b,n=S;return t&&(q(t.width)&&(e=t.width),q(t.height)&&(n=t.height)),{display:"inline-block",position:"relative",width:e,height:n}},[b,S,t]),children:[a.jsx("div",{style:r.useMemo(()=>{const e={position:"absolute",overflow:"hidden",top:0,left:0,width:b,height:S};return t&&["background","backgroundColor"].forEach(n=>{t[n]&&(e[n]=t[n])}),e},[b,S,t]),children:a.jsx(oe,{_ref:h,_handle:x,_render:l,_height:I})}),a.jsx("input",{...M,ref:d,style:r.useMemo(()=>({...t,background:"transparent",margin:0,position:"absolute",...!_&&{position:void 0,verticalAlign:"top"}}),[t,_]),onChange:r.useCallback(e=>{var n;(n=x[o])==null||n.call(x,e.target.value),i==null||i(e)},[i]),onKeyDown:r.useCallback(e=>{e.nativeEvent.isComposing||e.nativeEvent.keyCode===229||(s==null||s(e),k._updateSeletion())},[s])})]})});y.__docgenInfo={description:`Input component with some extra props. See {@link RichInputProps} and {@link RichInputHandle}.

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
@defaultValue undefined`}},composes:["Omit"]};const ue={component:y},V={paddingLeft:10,paddingRight:10},E={render:()=>{const[l,c]=r.useState("Lorem ipsum");return a.jsx(y,{style:V,onChange:t=>c(t.target.value),value:l,children:t=>t.split("").map((i,s)=>a.jsx("span",{style:{color:s%2===0?"red":void 0},children:i},s))})}},w={render:()=>a.jsx(y,{style:V,defaultValue:"Lorem ipsum",children:l=>l.split("").map((c,t)=>a.jsx("span",{style:{color:t%2===0?"red":void 0},children:c},t))})},T={render:()=>{const[l,c]=r.useState("Lorem ipsum");return a.jsx(y,{style:{width:"100%"},onChange:t=>c(t.target.value),value:l,children:t=>t.split("").map((i,s)=>a.jsx("span",{style:{color:s%2===0?"red":void 0},children:i},s))})},name:"Width 100%"};var O,L,z;E.parameters={...E.parameters,docs:{...(O=E.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(z=(L=E.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var A,P,U;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(U=(P=w.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var W,H,N;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(N=(H=T.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};const le=["Controlled","Uncontrolled","WidthMax"];export{E as Controlled,w as Uncontrolled,T as WidthMax,le as __namedExportsOrder,ue as default};
