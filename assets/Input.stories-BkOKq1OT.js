import{j as a,s as x,C as D,u as K,r as o,a as I,c as ee,b as te,R as ne,h as L,i as re,d as se}from"./observer-Djkfms2H.js";import{r}from"./index-RYns6xqu.js";const oe=r.memo(({_ref:c,_handle:l,_render:t,_height:i})=>{const[s,g]=r.useState("");return r.useImperativeHandle(l,()=>g,[]),a.jsx("div",{ref:c,"aria-hidden":!0,onClick:x,onMouseDown:x,onMouseUp:x,onMouseOver:x,onMouseOut:x,onMouseMove:x,children:a.jsx("div",{style:{height:i},children:a.jsxs("div",{style:r.useMemo(()=>({transform:"translate(0px, 0px)",pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",boxSizing:"content-box",textSizeAdjust:"100%",WebkitTextSizeAdjust:"100%",MozTextSizeAdjust:"100%",whiteSpace:"pre"}),[]),children:[r.useMemo(()=>t?t(s):s,[s,t]),D]})})})}),b=r.forwardRef(({children:c,autoHeight:l,style:t,onChange:i,onKeyDown:s,onSelectionChange:g,..._},N)=>{const d=r.useRef(null),f=r.useRef(null),v=r.useRef(null),[[F,M,q,G],J]=r.useState([0,0,0,0]),[C,Q]=r.useState(!1),X=r.useRef(""),[[m,E],Y]=r.useState([null,null]),T=K(()=>{const e=re();return se(d,n=>{if(Y(n),e){if(!d[o]||!f[o])return;const{scrollTop:p,scrollLeft:u}=d[o];f[o].style.transform=`translate(${-u}px, ${-p}px)`}})}),S=F+q,R=M+G,w=!!(S+R);return r.useImperativeHandle(N,()=>{const e=d[o],n={get selectionStart(){return T._getSelectionStart()},get selectionEnd(){return T._getSelectionEnd()},setRangeText(p,u,h,Z){e.setRangeText?e.setRangeText(p,u,h,Z):(e.focus(),e.selectionStart=u,e.selectionEnd=h,document.execCommand("insertText",!1,p)),e.dispatchEvent(new Event("input",{bubbles:!0}))}};return new Proxy(e,{get(p,u){if(n[u])return n[u];const h=p[u];return typeof h=="function"?h.bind(p):h},set(p,u,h){return p[u]=h,!0}})},[]),I(()=>{const e=d[o],n=f[o];if(!(!e||!n))return ee(e,n,T,J,Q)},[]),I(()=>{const e=d[o];e&&v[o](e.value)},[_.value]),I(()=>{const e=d[o],n=f[o];!n||!e||te(e,n,X,t)},[t]),r.useEffect(()=>{if(!(m==null||E==null||!g))if(!C)g({focused:!1,selectionStart:m,selectionEnd:E});else{const n=ne(f[o],m,m+1).getBoundingClientRect();g({focused:!0,top:n.top,left:n.left,height:n.height,selectionStart:m,selectionEnd:E})}},[C,m,E]),r.useEffect(()=>{const e=d[o];!l||!e||(e.style.height="auto",e.style.height=`${e.scrollHeight}px`)}),a.jsxs("div",{style:r.useMemo(()=>{let e=S,n=R;return t&&(L(t.width)&&(e=t.width),L(t.height)&&(n=t.height)),{display:"inline-block",position:"relative",width:e,height:n}},[S,R,t]),children:[a.jsx("div",{style:r.useMemo(()=>{const e={position:"absolute",overflow:"hidden",top:0,left:0,width:S,height:R};return t&&["background","backgroundColor"].forEach(n=>{t[n]&&(e[n]=t[n])}),e},[S,R,t]),children:a.jsx(oe,{_ref:f,_handle:v,_render:c,_height:M})}),a.jsx("input",{..._,ref:d,style:r.useMemo(()=>({...t,background:"transparent",margin:0,position:"absolute",...!w&&{position:void 0,verticalAlign:"top"}}),[t,w]),onChange:r.useCallback(e=>{var n;(n=v[o])==null||n.call(v,e.target.value),i==null||i(e)},[i]),onKeyDown:r.useCallback(e=>{e.nativeEvent.isComposing||e.nativeEvent.keyCode===229||(s==null||s(e),T._updateSeletion())},[s])})]})});b.__docgenInfo={description:`Input component with some extra props. See {@link RichInputProps} and {@link RichInputHandle}.

**NOTE: This component is experimental one so it may have some bugs.**`,methods:[],displayName:"RichInput"};const ue={component:b},$={paddingLeft:10,paddingRight:10},j={render:()=>{const[c,l]=r.useState("Lorem ipsum");return a.jsx(b,{style:$,onChange:t=>l(t.target.value),value:c,children:t=>t.split("").map((i,s)=>a.jsx("span",{style:{color:s%2===0?"red":void 0},children:i},s))})}},k={render:()=>a.jsx(b,{style:$,defaultValue:"Lorem ipsum",children:c=>c.split("").map((l,t)=>a.jsx("span",{style:{color:t%2===0?"red":void 0},children:l},t))})},y={render:()=>{const[c,l]=r.useState("Lorem ipsum");return a.jsx(b,{style:{width:"100%"},onChange:t=>l(t.target.value),value:c,children:t=>t.split("").map((i,s)=>a.jsx("span",{style:{color:s%2===0?"red":void 0},children:i},s))})},name:"Width 100%"};var A,W,z;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(W=j.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var O,P,U;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(U=(P=k.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var H,B,V;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(V=(B=y.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const ce=["Controlled","Uncontrolled","WidthMax"];export{j as Controlled,k as Uncontrolled,y as WidthMax,ce as __namedExportsOrder,ue as default};
