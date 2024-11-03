import{r as _}from"./index-RYns6xqu.js";var U={exports:{}},O={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=_,x=Symbol.for("react.element"),F=Symbol.for("react.fragment"),D=Object.prototype.hasOwnProperty,Y=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function P(t,e,n){var o,l={},i=null,r=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(r=e.ref);for(o in e)D.call(e,o)&&!$.hasOwnProperty(o)&&(l[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)l[o]===void 0&&(l[o]=e[o]);return{$$typeof:x,type:t,key:i,ref:r,props:l,_owner:Y.current}}O.Fragment=F;O.jsx=P;O.jsxs=P;U.exports=O;var X=U.exports;const{min:w,max:C}=Math,m="current",Z=X.jsx("span",{style:{color:"transparent"},children:"​"});function tt(t,e,n,o){var l=t.ownerDocument;o||(o=l.createRange());let i=l.createNodeIterator(t,NodeFilter.SHOW_TEXT,null,!1),r={},s={},u,g,f;for(;u=i.nextNode();)g=u.nodeValue,f=g.length,!r.node&&f>e&&(r.node=u,r.offset=e),!s.node&&f>=n&&(s.node=u,s.offset=n),e-=f,n-=f;return r.node&&o.setStart(r.node,C(r.offset,0)),s.node&&o.setEnd(s.node,C(s.offset,0)),o}const et=()=>{if(typeof navigator>"u")return!1;const t=navigator.userAgent.toLowerCase();return t.indexOf("safari")>-1&&t.indexOf("chrome")<=-1},H=["direction","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","margin","marginTop","marginBottom","marginLeft","marginRight","border","borderWidth","borderTopWidth","borderBottomWidth","borderLeftWidth","borderRightWidth","borderStyle","borderTopStyle","borderBottomStyle","borderLeftStyle","borderRightStyle","fontSize","fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSizeAdjust","textAlign","textTransform","textIndent","letterSpacing","wordSpacing","lineHeight","whiteSpace","wordBreak","overflowWrap","tabSize","MozTabSize"],b=(t,e)=>t.getPropertyValue(e),v=(t,e,n)=>{t.setProperty(e,n)},p=(t,e)=>{const n=b(t,e);return n?parseInt(n,10):0},L=t=>getComputedStyle(t),nt=t=>typeof t=="string"&&t.endsWith("%"),K=t=>p(t,"padding-top")+p(t,"padding-bottom")+p(t,"border-top")+p(t,"border-bottom"),q=t=>p(t,"padding-left")+p(t,"padding-right")+p(t,"border-left")+p(t,"border-right"),h=(t,e,n)=>{const o="pointer-events",l=t.style,i=e.style,r=b(l,o),s=b(i,o);v(l,o,"none"),v(i,o,"auto");const u=document.elementFromPoint(n.clientX,n.clientY);return v(l,o,r),v(i,o,s),J(u,e)?u:null},J=(t,e)=>!!t&&e!==t&&e.contains(t),T=(t,e,n)=>{t.dispatchEvent(new MouseEvent(e,n))},y=(t,e)=>{T(t,e.type,e)},G=(t,e,n)=>{t&&y(t,n),e!==t&&(M(e,n),t&&T(t,"mouseover",n))},M=(t,e)=>{t&&T(t,"mouseout",e)},ot=t=>{t.stopPropagation()},rt=(t,e,n,o)=>{const l=L(t),i=t.style,r=e.style;n[m]||(n[m]=b(l,"color")),H.forEach(s=>{r[s]=l[s]}),i.color=r.borderColor="transparent",i.caretColor=(o==null?void 0:o.caretColor)||n[m]},a=(t,e,n)=>(t.addEventListener(e,n),()=>{t.removeEventListener(e,n)}),st=(t,e)=>{let n=[null,null],o;const l=()=>{const r=i._getSelectionStart(),s=i._getSelectionEnd();return n[0]===r&&n[1]===s||(n=[r,s]),n},i={_updateSeletion(){setTimeout(()=>{e(l())})},_setComposition(r){o=r},_getSelectionStart(){const r=t[m];if(!r)return 0;const s=r.selectionStart;return o?w(s,r.selectionEnd-o.data.length):s},_getSelectionEnd(){const r=t[m];if(!r)return 0;const s=r.selectionEnd;return o?w(s,r.selectionStart+o.data.length):s}};return i},it=typeof window<"u"?_.useLayoutEffect:_.useEffect,ct=t=>{const e=_.useRef();return e[m]||(e[m]=t())},lt=(t,e,n,o,l)=>{let i=null;const r=new ResizeObserver(([c])=>{const{contentRect:{width:d,height:S},borderBoxSize:E}=c;if(E&&E[0]){o([d,S,E[0].inlineSize-d,E[0].blockSize-S]);return}const R=L(t);o([d,S,q(R),K(R)])}),s=a(t,"focus",()=>{l(!0)}),u=a(t,"blur",()=>{l(!1)}),g=a(t,"scroll",()=>{const{scrollTop:c,scrollLeft:d}=t;e.style.transform=`translate(${-d}px, ${-c}px)`}),f=a(t,"mousedown",c=>{n._updateSeletion();const d=a(document,"mouseup",()=>{n._updateSeletion(),d()}),S=h(t,e,c);S&&y(S,c)}),I=a(t,"mouseup",c=>{const d=h(t,e,c);d&&y(d,c)}),B=a(t,"mousemove",c=>{const d=h(t,e,c);G(d,i,c),i=d}),W=a(t,"mouseleave",c=>{M(i,c),i=null}),z=a(t,"click",c=>{const d=h(t,e,c);d&&y(d,c)}),j=a(t,"input",()=>{n._updateSeletion()}),N=a(t,"compositionstart",c=>{n._setComposition(c)}),A=a(t,"compositionupdate",c=>{n._setComposition(c)}),V=a(t,"compositionend",()=>{n._setComposition()});return r.observe(t),()=>{s(),u(),g(),f(),I(),B(),W(),z(),j(),N(),A(),V(),r.disconnect()}};export{Z as C,tt as R,it as a,rt as b,lt as c,st as d,nt as h,et as i,X as j,m as r,ot as s,ct as u};