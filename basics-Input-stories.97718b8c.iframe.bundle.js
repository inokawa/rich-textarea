/*! For license information please see basics-Input-stories.97718b8c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[418],{"./stories/basics/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Uncontrolled:()=>Uncontrolled,WidthMax:()=>WidthMax,default:()=>Input_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),range_at_index=__webpack_require__("./src/vendor/range-at-index.js"),dom=__webpack_require__("./src/dom.ts"),selection=__webpack_require__("./src/selection.ts"),useIsomorphicLayoutEffect=__webpack_require__("./src/useIsomorphicLayoutEffect.ts"),utils=__webpack_require__("./src/utils.tsx"),useStatic=__webpack_require__("./src/useStatic.ts"),observer=__webpack_require__("./src/observer.ts");const Backdrop=(0,react.memo)((({_ref:backdropRef,_handle:handle,_render:render,_height:height})=>{const[value,setValue]=(0,react.useState)("");return(0,react.useImperativeHandle)(handle,(()=>setValue),[]),(0,jsx_runtime.jsx)("div",{ref:backdropRef,"aria-hidden":!0,onClick:dom.UW,onMouseDown:dom.UW,onMouseUp:dom.UW,onMouseOver:dom.UW,onMouseOut:dom.UW,onMouseMove:dom.UW,children:(0,jsx_runtime.jsx)("div",{style:{height},children:(0,jsx_runtime.jsxs)("div",{style:(0,react.useMemo)((()=>({transform:"translate(0px, 0px)",pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",boxSizing:"content-box",textSizeAdjust:"100%",WebkitTextSizeAdjust:"100%",whiteSpace:"pre"})),[]),children:[(0,react.useMemo)((()=>render?render(value):value),[value,render]),utils.N]})})})})),RichInput=(0,react.forwardRef)((({children:render,autoHeight,style,onChange,onKeyDown,onSelectionChange,...props},ref)=>{const textAreaRef=(0,react.useRef)(null),backdropRef=(0,react.useRef)(null),backdropHandle=(0,react.useRef)(null),[[width,height,hPadding,vPadding],setRect]=(0,react.useState)([0,0,0,0]),[focused,setFocused]=(0,react.useState)(!1),caretColorRef=(0,react.useRef)(""),[[selectionStart,selectionEnd],setSelection]=(0,react.useState)([null,null]),selectionStore=(0,useStatic.T)((()=>{const safari=(0,dom.G6)();return(0,selection.n)(textAreaRef,(range=>{if(setSelection(range),safari){if(!textAreaRef[utils.o]||!backdropRef[utils.o])return;const{scrollTop,scrollLeft}=textAreaRef[utils.o];backdropRef[utils.o].style.transform=`translate(${-scrollLeft}px, ${-scrollTop}px)`}}))})),totalWidth=width+hPadding,totalHeight=height+vPadding,isSizeCalculated=!!(totalWidth+totalHeight);return(0,react.useImperativeHandle)(ref,(()=>{const el=textAreaRef[utils.o],overrides={get selectionStart(){return selectionStore._getSelectionStart()},get selectionEnd(){return selectionStore._getSelectionEnd()},setRangeText(text,start,end,preserve){el.setRangeText?el.setRangeText(text,start,end,preserve):(el.focus(),el.selectionStart=start,el.selectionEnd=end,document.execCommand("insertText",!1,text)),el.dispatchEvent(new Event("input",{bubbles:!0}))}};return new Proxy(el,{get(target,prop){if(overrides[prop])return overrides[prop];const value=target[prop];return"function"==typeof value?value.bind(target):value},set:(target,prop,value)=>(target[prop]=value,!0)})}),[]),(0,useIsomorphicLayoutEffect.L)((()=>{const textarea=textAreaRef[utils.o],backdrop=backdropRef[utils.o];if(textarea&&backdrop)return(0,observer._)(textarea,backdrop,selectionStore,setRect,setFocused)}),[]),(0,useIsomorphicLayoutEffect.L)((()=>{const textarea=textAreaRef[utils.o];textarea&&backdropHandle[utils.o](textarea.value)}),[props.value]),(0,useIsomorphicLayoutEffect.L)((()=>{const textarea=textAreaRef[utils.o],backdrop=backdropRef[utils.o];backdrop&&textarea&&(0,dom.Ku)(textarea,backdrop,caretColorRef,style)}),[style]),(0,react.useEffect)((()=>{if(null!=selectionStart&&null!=selectionEnd&&onSelectionChange)if(focused){const rect=(0,range_at_index.Z)(backdropRef[utils.o],selectionStart,selectionStart+1).getBoundingClientRect();onSelectionChange({focused:!0,top:rect.top,left:rect.left,height:rect.height,selectionStart,selectionEnd})}else onSelectionChange({focused:!1,selectionStart,selectionEnd})}),[focused,selectionStart,selectionEnd]),(0,react.useEffect)((()=>{const textarea=textAreaRef[utils.o];autoHeight&&textarea&&(textarea.style.height="auto",textarea.style.height=`${textarea.scrollHeight}px`)})),(0,jsx_runtime.jsxs)("div",{style:(0,react.useMemo)((()=>{let w=totalWidth,h=totalHeight;return style&&((0,dom.Fx)(style.width)&&(w=style.width),(0,dom.Fx)(style.height)&&(h=style.height)),{display:"inline-block",position:"relative",width:w,height:h}}),[totalWidth,totalHeight,style]),children:[(0,jsx_runtime.jsx)("div",{style:(0,react.useMemo)((()=>{const s={position:"absolute",overflow:"hidden",top:0,left:0,width:totalWidth,height:totalHeight};return style?(["background","backgroundColor"].forEach((k=>{style[k]&&(s[k]=style[k])})),s):s}),[totalWidth,totalHeight,style]),children:(0,jsx_runtime.jsx)(Backdrop,{_ref:backdropRef,_handle:backdropHandle,_render:render,_height:height})}),(0,jsx_runtime.jsx)("input",{...props,ref:textAreaRef,style:(0,react.useMemo)((()=>({...style,background:"transparent",margin:0,position:"absolute",...!isSizeCalculated&&{position:void 0,verticalAlign:"top"}})),[style,isSizeCalculated]),onChange:(0,react.useCallback)((e=>{var _a;null==(_a=backdropHandle[utils.o])||_a.call(backdropHandle,e.target.value),null==onChange||onChange(e)}),[onChange]),onKeyDown:(0,react.useCallback)((e=>{e.nativeEvent.isComposing||229===e.nativeEvent.keyCode||(null==onKeyDown||onKeyDown(e),selectionStore._updateSeletion())}),[onKeyDown])})]})}));const Input_stories={parameters:{storySource:{source:'import { StoryObj } from "@storybook/react";\nimport React, { useState } from "react";\nimport { experimental_RichInput as RichInput } from "../../src";\n\nexport default {\n  component: RichInput,\n};\n\nconst style = { paddingLeft: 10, paddingRight: 10 };\n\nexport const Controlled: StoryObj = {\n  render: () => {\n    const [text, setText] = useState("Lorem ipsum");\n    return (\n      <RichInput\n        style={style}\n        onChange={(e) => setText(e.target.value)}\n        value={text}\n      >\n        {(v) => {\n          return v.split("").map((t, i) => (\n            <span key={i} style={{ color: i % 2 === 0 ? "red" : undefined }}>\n              {t}\n            </span>\n          ));\n        }}\n      </RichInput>\n    );\n  },\n};\n\nexport const Uncontrolled: StoryObj = {\n  render: () => {\n    return (\n      <RichInput style={style} defaultValue={"Lorem ipsum"}>\n        {(v) => {\n          return v.split("").map((t, i) => (\n            <span key={i} style={{ color: i % 2 === 0 ? "red" : undefined }}>\n              {t}\n            </span>\n          ));\n        }}\n      </RichInput>\n    );\n  },\n};\n\nexport const WidthMax: StoryObj = {\n  render: () => {\n    const [text, setText] = useState("Lorem ipsum");\n    return (\n      <RichInput\n        style={{ width: "100%" }}\n        onChange={(e) => setText(e.target.value)}\n        value={text}\n      >\n        {(v) => {\n          return v.split("").map((t, i) => (\n            <span key={i} style={{ color: i % 2 === 0 ? "red" : undefined }}>\n              {t}\n            </span>\n          ));\n        }}\n      </RichInput>\n    );\n  },\n  name: "Width 100%",\n};\n',locationsMap:{controlled:{startLoc:{col:36,line:11},endLoc:{col:1,line:30},startBody:{col:36,line:11},endBody:{col:1,line:30}},uncontrolled:{startLoc:{col:38,line:32},endLoc:{col:1,line:46},startBody:{col:38,line:32},endBody:{col:1,line:46}},"width-max":{startLoc:{col:34,line:48},endLoc:{col:1,line:68},startBody:{col:34,line:48},endBody:{col:1,line:68}}}}},component:RichInput},style={paddingLeft:10,paddingRight:10},Controlled={render:()=>{const[text,setText]=(0,react.useState)("Lorem ipsum");return(0,jsx_runtime.jsx)(RichInput,{style,onChange:e=>setText(e.target.value),value:text,children:v=>v.split("").map(((t,i)=>(0,jsx_runtime.jsx)("span",{style:{color:i%2==0?"red":void 0},children:t},i)))})}},Uncontrolled={render:()=>(0,jsx_runtime.jsx)(RichInput,{style,defaultValue:"Lorem ipsum",children:v=>v.split("").map(((t,i)=>(0,jsx_runtime.jsx)("span",{style:{color:i%2==0?"red":void 0},children:t},i)))})},WidthMax={render:()=>{const[text,setText]=(0,react.useState)("Lorem ipsum");return(0,jsx_runtime.jsx)(RichInput,{style:{width:"100%"},onChange:e=>setText(e.target.value),value:text,children:v=>v.split("").map(((t,i)=>(0,jsx_runtime.jsx)("span",{style:{color:i%2==0?"red":void 0},children:t},i)))})},name:"Width 100%"}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Fx:()=>hasPercentageUnit,G6:()=>isSafari,Gr:()=>dispatchClonedMouseEvent,Ku:()=>syncBackdropStyle,NS:()=>dispatchMouseMoveEvent,RH:()=>getHorizontalPadding,UW:()=>stopPropagation,aY:()=>getVerticalPadding,tQ:()=>dispatchMouseOutEvent,vy:()=>getPointedElement,yl:()=>listenEvent});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils.tsx");const isSafari=()=>{const ua=navigator.userAgent.toLowerCase();return ua.indexOf("safari")>-1&&ua.indexOf("chrome")<=-1},TEXT_STYLE_KEYS=["direction","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","margin","marginTop","marginBottom","marginLeft","marginRight","border","borderWidth","borderTopWidth","borderBottomWidth","borderLeftWidth","borderRightWidth","borderStyle","borderTopStyle","borderBottomStyle","borderLeftStyle","borderRightStyle","fontSize","fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSizeAdjust","textAlign","textTransform","textIndent","letterSpacing","wordSpacing","lineHeight","whiteSpace","wordBreak","overflowWrap","tabSize","MozTabSize"],getPropertyValue=(style,key)=>style.getPropertyValue(key),setProperty=(style,key,value)=>{style.setProperty(key,value)},getValueFromStyle=(style,key)=>{const value=getPropertyValue(style,key);return value?parseInt(value,10):0},getStyle=e=>getComputedStyle(e),hasPercentageUnit=widthOrHeight=>"string"==typeof widthOrHeight&&widthOrHeight.endsWith("%"),getVerticalPadding=style=>getValueFromStyle(style,"padding-top")+getValueFromStyle(style,"padding-bottom")+getValueFromStyle(style,"border-top")+getValueFromStyle(style,"border-bottom"),getHorizontalPadding=style=>getValueFromStyle(style,"padding-left")+getValueFromStyle(style,"padding-right")+getValueFromStyle(style,"border-left")+getValueFromStyle(style,"border-right"),getPointedElement=(textarea,backdrop,e)=>{const textareaStyle=textarea.style,backdropStyle=backdrop.style,prev=getPropertyValue(textareaStyle,"pointer-events"),backPrev=getPropertyValue(backdropStyle,"pointer-events");setProperty(textareaStyle,"pointer-events","none"),setProperty(backdropStyle,"pointer-events","auto");const pointed=document.elementFromPoint(e.clientX,e.clientY);return setProperty(textareaStyle,"pointer-events",prev),setProperty(backdropStyle,"pointer-events",backPrev),isInsideBackdrop(pointed,backdrop)?pointed:null},isInsideBackdrop=(pointed,backdrop)=>!!pointed&&backdrop!==pointed&&backdrop.contains(pointed),dispatchMouseEvent=(target,type,init)=>{target.dispatchEvent(new MouseEvent(type,init))},dispatchClonedMouseEvent=(pointed,e)=>{dispatchMouseEvent(pointed,e.type,e)},dispatchMouseMoveEvent=(pointed,prevPointed,e)=>{pointed&&dispatchClonedMouseEvent(pointed,e),prevPointed!==pointed&&(dispatchMouseOutEvent(prevPointed,e),pointed&&dispatchMouseEvent(pointed,"mouseover",e))},dispatchMouseOutEvent=(prevPointed,e)=>{prevPointed&&dispatchMouseEvent(prevPointed,"mouseout",e)},stopPropagation=event=>{event.stopPropagation()},syncBackdropStyle=(textarea,backdrop,caretColorRef,style)=>{const computedTextAreaStyle=getStyle(textarea),textareaStyle=textarea.style,backdropStyle=backdrop.style;caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]||(caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]=getPropertyValue(computedTextAreaStyle,"color")),TEXT_STYLE_KEYS.forEach((k=>{backdropStyle[k]=computedTextAreaStyle[k]})),textareaStyle.color=backdropStyle.borderColor="transparent",textareaStyle.caretColor=(null==style?void 0:style.caretColor)||caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]},listenEvent=(el,key,cb)=>(el.addEventListener(key,cb),()=>{el.removeEventListener(key,cb)})},"./src/observer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>createTextareaObserver});var _dom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/dom.ts");const createTextareaObserver=(textarea,backdrop,selectionStore,onResize,onFocus)=>{let prevPointed=null;const observer=new ResizeObserver((([entry])=>{const{contentRect:{width,height},borderBoxSize}=entry;if(borderBoxSize&&borderBoxSize[0])return void onResize([width,height,borderBoxSize[0].inlineSize-width,borderBoxSize[0].blockSize-height]);const style=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.C2)(textarea);onResize([width,height,(0,_dom__WEBPACK_IMPORTED_MODULE_0__.RH)(style),(0,_dom__WEBPACK_IMPORTED_MODULE_0__.aY)(style)])})),cleanUpOnFocus=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"focus",(()=>{onFocus(!0)})),cleanUpOnBlur=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"blur",(()=>{onFocus(!1)})),cleanUpOnScroll=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"scroll",(()=>{const{scrollTop,scrollLeft}=textarea;backdrop.style.transform=`translate(${-scrollLeft}px, ${-scrollTop}px)`})),cleanUpOnMouseDown=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"mousedown",(e=>{selectionStore._updateSeletion();const cleanup=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(document,"mouseup",(()=>{selectionStore._updateSeletion(),cleanup()})),pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_0__.Gr)(pointed,e)})),cleanUpOnMouseMove=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"mouseup",(e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_0__.Gr)(pointed,e)})),cleanUpMouseMove=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"mousemove",(e=>{const p=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.vy)(textarea,backdrop,e);(0,_dom__WEBPACK_IMPORTED_MODULE_0__.NS)(p,prevPointed,e),prevPointed=p})),cleanUpOnMouseLeave=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"mouseleave",(e=>{(0,_dom__WEBPACK_IMPORTED_MODULE_0__.tQ)(prevPointed,e),prevPointed=null})),cleanUpOnClick=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"click",(e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_0__.Gr)(pointed,e)})),cleanUpOnInput=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"input",(()=>{selectionStore._updateSeletion()})),cleanUpOnCompositionStart=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"compositionstart",(e=>{selectionStore._setComposition(e)})),cleanUpOnCompositionUpdate=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"compositionupdate",(e=>{selectionStore._setComposition(e)})),cleanUpOnCompositionEnd=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"compositionend",(()=>{selectionStore._setComposition()}));return observer.observe(textarea),()=>{cleanUpOnFocus(),cleanUpOnBlur(),cleanUpOnScroll(),cleanUpOnMouseDown(),cleanUpOnMouseMove(),cleanUpMouseMove(),cleanUpOnMouseLeave(),cleanUpOnClick(),cleanUpOnInput(),cleanUpOnCompositionStart(),cleanUpOnCompositionUpdate(),cleanUpOnCompositionEnd(),observer.disconnect()}}},"./src/selection.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>initSelectionStore});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils.tsx");const initSelectionStore=(ref,onSelectionUpdate)=>{let compositionEvent,prevSelection=[null,null];const handle={_updateSeletion(){setTimeout((()=>{onSelectionUpdate((()=>{const selectionStart=handle._getSelectionStart(),selectionEnd=handle._getSelectionEnd();return prevSelection[0]===selectionStart&&prevSelection[1]===selectionEnd||(prevSelection=[selectionStart,selectionEnd]),prevSelection})())}))},_setComposition(event){compositionEvent=event},_getSelectionStart(){const el=ref[_utils__WEBPACK_IMPORTED_MODULE_0__.o];if(!el)return 0;const pos=el.selectionStart;return compositionEvent?Math.min(pos,el.selectionEnd-compositionEvent.data.length):pos},_getSelectionEnd(){const el=ref[_utils__WEBPACK_IMPORTED_MODULE_0__.o];if(!el)return 0;const pos=el.selectionEnd;return compositionEvent?Math.min(pos,el.selectionStart+compositionEvent.data.length):pos}};return handle}},"./src/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/useStatic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useStatic});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils.tsx");const useStatic=init=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref[_utils__WEBPACK_IMPORTED_MODULE_1__.o]||(ref[_utils__WEBPACK_IMPORTED_MODULE_1__.o]=init())}},"./src/utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>CARET_DETECTOR,o:()=>refKey});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const refKey="current",CARET_DETECTOR=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"transparent"},children:"​"})},"./src/vendor/range-at-index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function RangeAtIndex(el,index,offset,range){var doc=el.ownerDocument;range||(range=doc.createRange());let node,val,len,iterator=doc.createNodeIterator(el,NodeFilter.SHOW_TEXT,null,!1),start={},end={};for(;node=iterator.nextNode();)val=node.nodeValue,len=val.length,!start.node&&len>index&&(start.node=node,start.offset=index),!end.node&&len>=offset&&(end.node=node,end.offset=offset),index-=len,offset-=len;return start.node&&range.setStart(start.node,start.offset),end.node&&range.setEnd(end.node,end.offset),range}}}]);