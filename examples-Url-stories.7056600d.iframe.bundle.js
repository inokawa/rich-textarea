/*! For license information please see examples-Url-stories.7056600d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[684],{"./node_modules/@storybook/react/dist/index.mjs":(module,__webpack_exports__,__webpack_require__)=>{var _a,_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/react/dist/chunk-R4NKYYJA.mjs"),__webpack_require__("./node_modules/@storybook/global/dist/index.mjs")),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("@storybook/preview-api");__webpack_require__("@storybook/client-logger");module=__webpack_require__.hmd(module);var{window:globalWindow}=_storybook_global__WEBPACK_IMPORTED_MODULE_2__.C;globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_3__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s;null==(_a=null==module?void 0:module.hot)||_a.decline()},"./node_modules/range-at-index/build/index.js":module=>{module.exports=function RangeAtIndex(el,index,offset,range){var doc=el.ownerDocument;range||(range=doc.createRange());var iterator=doc.createNodeIterator(el,NodeFilter.SHOW_TEXT,null,!1),start={},end={},node=void 0,len=void 0;for(;node=iterator.nextNode();)len=node.nodeValue.length,!start.node&&len>index&&(start.node=node,start.offset=index),!end.node&&len>=offset&&(end.node=node,end.offset=offset),index-=len,offset-=len;start.node&&range.setStart(start.node,start.offset);end.node&&range.setEnd(end.node,end.offset);return range}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var e=__webpack_require__("./node_modules/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"./node_modules/use-sync-external-store/shim/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")},"./src/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Fx:()=>hasPercentageUnit,G6:()=>isSafari,Gr:()=>dispatchClonedMouseEvent,Ku:()=>syncBackdropStyle,NS:()=>dispatchMouseMoveEvent,RH:()=>getHorizontalPadding,UW:()=>stopPropagation,aY:()=>getVerticalPadding,tQ:()=>dispatchMouseOutEvent,vy:()=>getPointedElement});const isSafari=()=>{const ua=navigator.userAgent.toLowerCase();return ua.indexOf("safari")>-1&&ua.indexOf("chrome")<=-1},TEXT_STYLE_KEYS=["direction","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","margin","marginTop","marginBottom","marginLeft","marginRight","border","borderWidth","borderTopWidth","borderBottomWidth","borderLeftWidth","borderRightWidth","borderStyle","borderTopStyle","borderBottomStyle","borderLeftStyle","borderRightStyle","fontSize","fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSizeAdjust","textAlign","textTransform","textIndent","letterSpacing","wordSpacing","lineHeight","whiteSpace","wordBreak","overflowWrap","tabSize","MozTabSize"],getPropertyValue=(style,key)=>style.getPropertyValue(key),setProperty=(style,key,value)=>{style.setProperty(key,value)},getValueFromStyle=(style,key)=>{const value=getPropertyValue(style,key);return value?parseInt(value,10):0},getStyle=e=>getComputedStyle(e),hasPercentageUnit=widthOrHeight=>"string"==typeof widthOrHeight&&widthOrHeight.endsWith("%"),getVerticalPadding=style=>getValueFromStyle(style,"padding-top")+getValueFromStyle(style,"padding-bottom")+getValueFromStyle(style,"border-top")+getValueFromStyle(style,"border-bottom"),getHorizontalPadding=style=>getValueFromStyle(style,"padding-left")+getValueFromStyle(style,"padding-right")+getValueFromStyle(style,"border-left")+getValueFromStyle(style,"border-right"),getPointedElement=(textarea,backdrop,e)=>{const textareaStyle=textarea.style,backdropStyle=backdrop.style,prev=getPropertyValue(textareaStyle,"pointer-events"),backPrev=getPropertyValue(backdropStyle,"pointer-events");setProperty(textareaStyle,"pointer-events","none"),setProperty(backdropStyle,"pointer-events","auto");const pointed=document.elementFromPoint(e.clientX,e.clientY);return setProperty(textareaStyle,"pointer-events",prev),setProperty(backdropStyle,"pointer-events",backPrev),isInsideBackdrop(pointed,backdrop)?pointed:null},isInsideBackdrop=(pointed,backdrop)=>!!pointed&&backdrop!==pointed&&backdrop.contains(pointed),dispatchMouseEvent=(target,type,init)=>{target.dispatchEvent(new MouseEvent(type,init))},dispatchClonedMouseEvent=(pointed,e)=>{dispatchMouseEvent(pointed,e.type,e)},dispatchMouseMoveEvent=(pointed,prevPointed,e)=>{pointed&&dispatchClonedMouseEvent(pointed,e),prevPointed.current!==pointed&&(dispatchMouseOutEvent(prevPointed,e,pointed),pointed&&dispatchMouseEvent(pointed,"mouseover",e))},dispatchMouseOutEvent=(prevPointed,e,pointed)=>{prevPointed.current&&dispatchMouseEvent(prevPointed.current,"mouseout",e),prevPointed.current=pointed},stopPropagation=event=>{event.stopPropagation()},syncBackdropStyle=(textarea,backdrop,caretColorRef,style)=>{const computedTextAreaStyle=getStyle(textarea),textareaStyle=textarea.style,backdropStyle=backdrop.style;caretColorRef.current||(caretColorRef.current=getPropertyValue(computedTextAreaStyle,"color")),TEXT_STYLE_KEYS.forEach((k=>{backdropStyle[k]=computedTextAreaStyle[k]})),textareaStyle.color=backdropStyle.borderColor="transparent",textareaStyle.caretColor=(null==style?void 0:style.caretColor)||caretColorRef.current}},"./src/renderers.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>createRegexRenderer});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const execReg=(reg,text)=>{const results=[];let match=reg.exec(text);for(;match;)results.push(match),match=reg.exec(text);return results},createRegexRenderer=matchers=>value=>{var _a;const matches=matchers.map((([matcher,style])=>[execReg(matcher,value).map((m=>[m.index,m.index+m[0].length])),style])),[indexSet,startToStyleMap,endToStyleMap]=matches.reduce(((acc,[ranges,style])=>(ranges.forEach((([start,end])=>{acc[0].add(start).add(end);let startStyles=acc[1].get(start),endStyles=acc[2].get(end);startStyles||acc[1].set(start,startStyles=[]),endStyles||acc[2].set(end,endStyles=[]),startStyles.push(style),endStyles.push(style)})),acc)),[new Set,new Map,new Map]),indexes=Array.from(indexSet);indexes.sort(((a,b)=>a-b));let prevEnd=0;const activeStyles=[],res=[];for(let i=0;i<indexes.length;i++){const start=indexes[i],end=null!=(_a=indexes[i+1])?_a:value.length;if(start===end)continue;const headValue=value.slice(prevEnd,start);headValue&&res.push(headValue);const startStyles=startToStyleMap.get(start),endStyles=endToStyleMap.get(end);startStyles&&(startStyles.forEach((s=>{activeStyles.push(s)})),activeStyles.sort(((a,b)=>matchers.findIndex((([,s])=>s===b))-matchers.findIndex((([,s])=>s===a)))));const v=value.slice(start,end);res.push(activeStyles.reduceRight(((acc,styleOrRender,j)=>{const key=0===j?String(start):void 0;return"function"==typeof styleOrRender?styleOrRender({children:acc,value:v,key}):(0,jsx_runtime.jsx)("span",{style:styleOrRender,children:acc},key)}),v)),endStyles&&endStyles.forEach((s=>{activeStyles.splice(activeStyles.indexOf(s),1)})),prevEnd=end}const tailValue=value.slice(prevEnd);return tailValue&&res.push(tailValue),res};try{createRegexRenderer.displayName="createRegexRenderer",createRegexRenderer.__docgenInfo={description:"An utility to create renderer function with regex.\n\nThe priority is descending order.",displayName:"createRegexRenderer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/renderers.tsx#createRegexRenderer"]={docgenInfo:createRegexRenderer.__docgenInfo,name:"createRegexRenderer",path:"src/renderers.tsx#createRegexRenderer"})}catch(__react_docgen_typescript_loader_error){}},"./src/selection.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>useStore});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useStore=ref=>{const storeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return storeRef.current||(storeRef.current=(ref=>{const subscribers=new Set;let compositionEvent,cache=[null,null];const handle={_subscribe:cb=>(subscribers.add(cb),()=>{subscribers.delete(cb)}),_updateSeletion(){setTimeout((()=>{subscribers.forEach((cb=>{cb()}))}))},_setComposition(event){compositionEvent=event},_getSelectionStart(){const el=ref.current;if(!el)return null;let pos=el.selectionStart;return compositionEvent&&(pos=Math.min(pos,el.selectionEnd-compositionEvent.data.length)),pos},_getSelectionEnd(){const el=ref.current;if(!el)return null;let pos=el.selectionEnd;return compositionEvent&&(pos=Math.min(pos,el.selectionStart+compositionEvent.data.length)),pos},_getSelection(){const selectionStart=handle._getSelectionStart(),selectionEnd=handle._getSelectionEnd();return cache[0]===selectionStart&&cache[1]===selectionEnd||(cache=[selectionStart,selectionEnd]),cache}};return handle})(ref))}},"./src/textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>RichTextarea});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/use-sync-external-store/shim/index.js"),range_at_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/range-at-index/build/index.js"),range_at_index__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(range_at_index__WEBPACK_IMPORTED_MODULE_3__),_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/dom.ts"),_selection__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/selection.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/useIsomorphicLayoutEffect.ts");const CARET_DETECTOR=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"transparent"},children:"​"}),RichTextarea=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({children:render,value,autoHeight,style,onKeyDown,onSelectionChange,...props},propRef)=>{const textAreaRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),backdropRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[[width,height,hPadding,vPadding],setRect]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([0,0,0,0]),[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),caretColorRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),pointedRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),selectionStore=(0,_selection__WEBPACK_IMPORTED_MODULE_4__.o)(textAreaRef),[selectionStart,selectionEnd]=(0,use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore)(selectionStore._subscribe,selectionStore._getSelection,selectionStore._getSelection),totalWidth=width+hPadding,totalHeight=height+vPadding,isSizeCalculated=!!(totalWidth+totalHeight);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(propRef,(()=>{const el=textAreaRef.current,overrides={get selectionStart(){const sel=selectionStore._getSelectionStart();return null==sel?0:sel},get selectionEnd(){const sel=selectionStore._getSelectionEnd();return null==sel?0:sel},setSelectionRange(...args){el.focus(),el.setSelectionRange(...args)},setRangeText(text,start,end,preserve){el.setRangeText?el.setRangeText(text,start,end,preserve):(el.focus(),el.selectionStart=start,el.selectionEnd=end,document.execCommand("insertText",!1,text)),el.dispatchEvent(new Event("input",{bubbles:!0}))}};return new Proxy(el,{get(target,prop){if(overrides[prop])return overrides[prop];const value2=target[prop];return"function"==typeof value2?value2.bind(target):value2}})}),[textAreaRef]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__.L)((()=>{const textarea=textAreaRef.current,backdrop=backdropRef.current;if(!textarea||!backdrop)return;const observer=new ResizeObserver((([entry])=>{const{contentRect,borderBoxSize}=entry;if(borderBoxSize&&borderBoxSize[0])return void setRect([contentRect.width,contentRect.height,borderBoxSize[0].inlineSize-contentRect.width,borderBoxSize[0].blockSize-contentRect.height]);const style2=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.C2)(textarea);setRect([contentRect.width,contentRect.height,(0,_dom__WEBPACK_IMPORTED_MODULE_6__.RH)(style2),(0,_dom__WEBPACK_IMPORTED_MODULE_6__.aY)(style2)])})),onFocus=()=>{setFocused(!0)},onBlur=()=>{setFocused(!1)},onScroll=()=>{const{scrollTop,scrollLeft}=textarea;backdrop.style.transform=`translate(${-scrollLeft}px, ${-scrollTop}px)`},onMouseDown=e=>{selectionStore._updateSeletion();const mouseup=()=>{selectionStore._updateSeletion(),document.removeEventListener("mouseup",mouseup)};document.addEventListener("mouseup",mouseup);const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Gr)(pointed,e)},onMouseUp=e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Gr)(pointed,e)},onMouseMove=e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.vy)(textarea,backdrop,e);(0,_dom__WEBPACK_IMPORTED_MODULE_6__.NS)(pointed,pointedRef,e)},onMouseLeave=e=>{(0,_dom__WEBPACK_IMPORTED_MODULE_6__.tQ)(pointedRef,e,null)},onClick=e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Gr)(pointed,e)},onInput=()=>{selectionStore._updateSeletion()},onCompositionStart=e=>{selectionStore._setComposition(e)},onCompositionUpdate=e=>{selectionStore._setComposition(e)},onCompositionEnd=()=>{selectionStore._setComposition()};return textarea.addEventListener("focus",onFocus),textarea.addEventListener("blur",onBlur),textarea.addEventListener("scroll",onScroll),textarea.addEventListener("mousedown",onMouseDown),textarea.addEventListener("mouseup",onMouseUp),textarea.addEventListener("mousemove",onMouseMove),textarea.addEventListener("mouseleave",onMouseLeave),textarea.addEventListener("click",onClick),textarea.addEventListener("input",onInput),textarea.addEventListener("compositionstart",onCompositionStart),textarea.addEventListener("compositionupdate",onCompositionUpdate),textarea.addEventListener("compositionend",onCompositionEnd),observer.observe(textarea),()=>{textarea.removeEventListener("focus",onFocus),textarea.removeEventListener("blur",onBlur),textarea.removeEventListener("scroll",onScroll),textarea.removeEventListener("mousedown",onMouseDown),textarea.removeEventListener("mouseup",onMouseUp),textarea.removeEventListener("mousemove",onMouseMove),textarea.removeEventListener("mouseleave",onMouseLeave),textarea.removeEventListener("click",onClick),textarea.removeEventListener("input",onInput),textarea.removeEventListener("compositionstart",onCompositionStart),textarea.removeEventListener("compositionupdate",onCompositionUpdate),textarea.removeEventListener("compositionend",onCompositionEnd),observer.disconnect()}}),[]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__.L)((()=>{const textarea=textAreaRef.current,backdrop=backdropRef.current;backdrop&&textarea&&(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Ku)(textarea,backdrop,caretColorRef,style)}),[style]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(null!=selectionStart&&null!=selectionEnd&&onSelectionChange)if(focused){const rect=range_at_index__WEBPACK_IMPORTED_MODULE_3___default()(backdropRef.current,selectionStart,selectionStart+1).getBoundingClientRect();onSelectionChange({focused:!0,top:rect.top,left:rect.left,height:rect.height,selectionStart,selectionEnd},value)}else onSelectionChange({focused:!1,selectionStart,selectionEnd},value)}),[focused,selectionStart,selectionEnd]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const textarea=textAreaRef.current;autoHeight&&textarea&&(textarea.style.height="auto",textarea.style.height=`${textarea.scrollHeight}px`)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{let w=totalWidth,h=totalHeight;return style&&((0,_dom__WEBPACK_IMPORTED_MODULE_6__.Fx)(style.width)&&(w=style.width),(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Fx)(style.height)&&(h=style.height)),{display:"inline-block",position:"relative",width:w,height:h}}),[totalWidth,totalHeight,style]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{const s={position:"absolute",overflow:"hidden",top:0,left:0,width:totalWidth,height:totalHeight};return style?(["background","backgroundColor"].forEach((k=>{style[k]&&(s[k]=style[k])})),s):s}),[totalWidth,totalHeight,style]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{ref:backdropRef,"aria-hidden":!0,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({width,transform:"translate(0px, 0px)",pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",boxSizing:"content-box",textSizeAdjust:"100%",WebkitTextSizeAdjust:"100%"})),[width]),onClick:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseDown:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseUp:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseOver:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseOut:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseMove:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,children:[(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>render?render(value):value),[value,render]),CARET_DETECTOR]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{...props,ref:textAreaRef,value,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({...style,background:"transparent",margin:0,position:"absolute",...!isSizeCalculated&&{position:void 0,verticalAlign:"top"}})),[style,isSizeCalculated]),onKeyDown:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{e.nativeEvent.isComposing||229===e.nativeEvent.keyCode||(null==onKeyDown||onKeyDown(e),selectionStore._updateSeletion())}),[onKeyDown])})]})}));try{RichTextarea.displayName="RichTextarea",RichTextarea.__docgenInfo={description:"Textarea component with some extra props. See {@link RichTextareaProps} and {@link RichTextareaHandle}.",displayName:"RichTextarea",props:{children:{defaultValue:null,description:"Render function to create customized view from value.\n\nThis function should return ReactNodes which texts are positioned the same as textarea (see examples for detailed usage).\n\nOn the rendered nodes, currently limited event handlers will work.\n- `onClick`\n- `onMouseOver`\n- `onMouseOut`\n- `onMouseMove`\n- `onMouseDown`\n- `onMouseUp`\n@defaultValue undefined",name:"children",required:!1,type:{name:"Renderer"}},value:{defaultValue:null,description:"Same as original but only string",name:"value",required:!0,type:{name:"string"}},autoHeight:{defaultValue:null,description:"If true, textarea height is automatically resized and height of style prop does not work.\nSet `maxHeight` to style prop if you need limit.\nSet `rows` prop to 1 if you need single-line textarea.\n@defaultValue undefined",name:"autoHeight",required:!1,type:{name:"boolean"}},onSelectionChange:{defaultValue:null,description:"Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.\n@defaultValue undefined",name:"onSelectionChange",required:!1,type:{name:"(pos: CaretPosition, value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/textarea.tsx#RichTextarea"]={docgenInfo:RichTextarea.__docgenInfo,name:"RichTextarea",path:"src/textarea.tsx#RichTextarea"})}catch(__react_docgen_typescript_loader_error){}},"./src/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./stories/examples/Url.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Url:()=>Url,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/index.js")),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/textarea.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/renderers.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_3__.p},style={width:"400px",height:"300px"},regexRenderer=(0,_src__WEBPACK_IMPORTED_MODULE_4__.s)([[/https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g,({children,key,value})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:value,target:"_blank",children},key)]]),Url={render:()=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Click this url https://github.com/inokawa/rich-textarea !\n\n");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.p,{style,onChange:e=>setText(e.target.value),value:text,children:regexRenderer})})}};Url.parameters={...Url.parameters,docs:{...Url.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [text, setText] = useState(`Click this url https://github.com/inokawa/rich-textarea !\n\n`);\n    return /* @__PURE__ */jsx("div", {\n      children: /* @__PURE__ */jsx(RichTextarea, {\n        style,\n        onChange: e => setText(e.target.value),\n        value: text,\n        children: regexRenderer\n      })\n    });\n  }\n}',...Url.parameters?.docs?.source}}}}}]);