/*! For license information please see examples-Tagging-stories.6384a739.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[149],{"./node_modules/range-at-index/build/index.js":module=>{module.exports=function RangeAtIndex(el,index,offset,range){var doc=el.ownerDocument;range||(range=doc.createRange());var iterator=doc.createNodeIterator(el,NodeFilter.SHOW_TEXT,null,!1),start={},end={},node=void 0,len=void 0;for(;node=iterator.nextNode();)len=node.nodeValue.length,!start.node&&len>index&&(start.node=node,start.offset=index),!end.node&&len>=offset&&(end.node=node,end.offset=offset),index-=len,offset-=len;start.node&&range.setStart(start.node,start.offset);end.node&&range.setEnd(end.node,end.offset);return range}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/examples/Tagging.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tagging:()=>Tagging,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _a,_b,_c,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/textarea.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_2__.p},style={height:20,width:400,whiteSpace:"pre",overflowWrap:"normal",overflowX:"auto",overflowY:"hidden",resize:"none"},Menu=({items,onSelect})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{position:"absolute",top:24,left:0,width:400,fontSize:"12px",border:"solid 1px gray",borderRadius:"3px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{borderBottom:"solid 1px gray"},children:"Current tags"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{style:{listStyleType:"none",margin:0,padding:0,cursor:"pointer",background:"white"},children:items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{onMouseDown:()=>onSelect(item),children:item},item)))})]}),Tag=({children,selected})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{background:selected?"lightgray":"whitesmoke",color:"dimgray",borderRadius:"4px",outline:"solid 1px dimgray"},children}),Tagging={render:()=>{const[tags,setTags]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(["Apple","Orange","Banana"]),[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),[pos,setPos]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),tagsText=tags.join(" ")+(tags.length?" ":""),textStart=tagsText.length,tagIndex=null==pos?-1:tags.reduce(((acc,t,i)=>{if(-1!==acc[0])return acc;const prev=acc[1];return acc[1]+=t.length+1,prev<=pos&&pos<acc[1]&&(acc[0]=i),acc}),[-1,0])[0];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{position:"relative",padding:0},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.p,{rows:1,style,onChange:e=>setText(e.target.value.slice(textStart)),value:tagsText+text,onFocus:()=>setFocused(!0),onBlur:()=>setFocused(!1),onKeyDown:e=>{if(pos)switch(e.code){case"Enter":if(e.preventDefault(),!pos)return;if(!text||tags.includes(text))return;setTags((prev=>[...prev,text])),setText("");break;case"Backspace":if(textStart<pos)return;e.preventDefault(),setTags((prev=>{const next=[...prev];return next.splice(-1===tagIndex?prev.length-1:tagIndex,1),next}));break;case"Delete":if(textStart<pos)return;e.preventDefault()}},onSelectionChange:r=>{r.focused?setPos(r.selectionStart):setPos(null)},children:()=>[...tags.flatMap(((t,i)=>[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tag,{selected:i==tagIndex,children:t},t)," "])),text||pos===textStart&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"darkgray"},children:"Type anything and press Enter key..."},"__placeholder")]}),focused&&!!tags.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Menu,{items:tags,onSelect:text2=>{setTags((prev=>prev.filter((p=>p!==text2))))}})]})}};Tagging.parameters={...Tagging.parameters,docs:{...null==(_a=Tagging.parameters)?void 0:_a.docs,source:{originalSource:'{\n  render: () => {\n    const [tags, setTags] = useState<string[]>(["Apple", "Orange", "Banana"]);\n    const [text, setText] = useState("");\n    const [pos, setPos] = useState<number | null>(null);\n    const [focused, setFocused] = useState(false);\n    const tagsText = tags.join(SPACER) + (tags.length ? SPACER : "");\n    const textStart = tagsText.length;\n    const tagIndex = pos == null ? -1 : tags.reduce((acc, t, i) => {\n      if (acc[0] !== -1) return acc;\n      const prev = acc[1];\n      acc[1] += t.length + SPACER.length;\n      if (prev <= pos && pos < acc[1]) {\n        acc[0] = i;\n      }\n      return acc;\n    }, ([-1, 0] as [number, number]))[0];\n    return <div style={{\n      position: "relative",\n      padding: 0\n    }}>\n        <RichTextarea rows={1} style={style} onChange={e => setText(e.target.value.slice(textStart))} value={tagsText + text} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onKeyDown={e => {\n        if (!pos) return;\n        switch (e.code) {\n          case "Enter":\n            e.preventDefault();\n            if (!pos) return;\n            if (!text || tags.includes(text)) return;\n            setTags(prev => [...prev, text]);\n            setText("");\n            break;\n          case "Backspace":\n            if (textStart < pos) return;\n            e.preventDefault();\n            setTags(prev => {\n              const next = [...prev];\n              next.splice(tagIndex === -1 ? prev.length - 1 : tagIndex, 1);\n              return next;\n            });\n            break;\n          case "Delete":\n            if (textStart < pos) return;\n            e.preventDefault();\n            break;\n          default:\n            break;\n        }\n      }} onSelectionChange={r => {\n        if (r.focused) {\n          setPos(r.selectionStart);\n        } else {\n          setPos(null);\n        }\n      }}>\n          {() => {\n          return [...tags.flatMap((t, i) => [<Tag key={t} selected={i == tagIndex}>\n                  {t}\n                </Tag>, SPACER]), text ? text : pos === textStart && <span key={"__placeholder"} style={{\n            color: "darkgray"\n          }}>\n                      Type anything and press Enter key...\n                    </span>];\n        }}\n        </RichTextarea>\n        {focused && !!tags.length && <Menu items={tags} onSelect={text => {\n        setTags(prev => prev.filter(p => p !== text));\n      }} />}\n      </div>;\n  }\n}',...null==(_c=null==(_b=Tagging.parameters)?void 0:_b.docs)?void 0:_c.source}}}},"./src/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Fx:()=>hasPercentageUnit,G6:()=>isSafari,Gr:()=>dispatchClonedMouseEvent,Ku:()=>syncBackdropStyle,NS:()=>dispatchMouseMoveEvent,RH:()=>getHorizontalPadding,UW:()=>stopPropagation,aY:()=>getVerticalPadding,tQ:()=>dispatchMouseOutEvent,vy:()=>getPointedElement});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils.ts");const isSafari=()=>{const ua=navigator.userAgent.toLowerCase();return ua.indexOf("safari")>-1&&ua.indexOf("chrome")<=-1},TEXT_STYLE_KEYS=["direction","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","margin","marginTop","marginBottom","marginLeft","marginRight","border","borderWidth","borderTopWidth","borderBottomWidth","borderLeftWidth","borderRightWidth","borderStyle","borderTopStyle","borderBottomStyle","borderLeftStyle","borderRightStyle","fontSize","fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSizeAdjust","textAlign","textTransform","textIndent","letterSpacing","wordSpacing","lineHeight","whiteSpace","wordBreak","overflowWrap","tabSize","MozTabSize"],getPropertyValue=(style,key)=>style.getPropertyValue(key),setProperty=(style,key,value)=>{style.setProperty(key,value)},getValueFromStyle=(style,key)=>{const value=getPropertyValue(style,key);return value?parseInt(value,10):0},getStyle=e=>getComputedStyle(e),hasPercentageUnit=widthOrHeight=>"string"==typeof widthOrHeight&&widthOrHeight.endsWith("%"),getVerticalPadding=style=>getValueFromStyle(style,"padding-top")+getValueFromStyle(style,"padding-bottom")+getValueFromStyle(style,"border-top")+getValueFromStyle(style,"border-bottom"),getHorizontalPadding=style=>getValueFromStyle(style,"padding-left")+getValueFromStyle(style,"padding-right")+getValueFromStyle(style,"border-left")+getValueFromStyle(style,"border-right"),getPointedElement=(textarea,backdrop,e)=>{const textareaStyle=textarea.style,backdropStyle=backdrop.style,prev=getPropertyValue(textareaStyle,"pointer-events"),backPrev=getPropertyValue(backdropStyle,"pointer-events");setProperty(textareaStyle,"pointer-events","none"),setProperty(backdropStyle,"pointer-events","auto");const pointed=document.elementFromPoint(e.clientX,e.clientY);return setProperty(textareaStyle,"pointer-events",prev),setProperty(backdropStyle,"pointer-events",backPrev),isInsideBackdrop(pointed,backdrop)?pointed:null},isInsideBackdrop=(pointed,backdrop)=>!!pointed&&backdrop!==pointed&&backdrop.contains(pointed),dispatchMouseEvent=(target,type,init)=>{target.dispatchEvent(new MouseEvent(type,init))},dispatchClonedMouseEvent=(pointed,e)=>{dispatchMouseEvent(pointed,e.type,e)},dispatchMouseMoveEvent=(pointed,prevPointed,e)=>{pointed&&dispatchClonedMouseEvent(pointed,e),prevPointed[_utils__WEBPACK_IMPORTED_MODULE_0__.o]!==pointed&&(dispatchMouseOutEvent(prevPointed,e,pointed),pointed&&dispatchMouseEvent(pointed,"mouseover",e))},dispatchMouseOutEvent=(prevPointed,e,pointed)=>{prevPointed[_utils__WEBPACK_IMPORTED_MODULE_0__.o]&&dispatchMouseEvent(prevPointed[_utils__WEBPACK_IMPORTED_MODULE_0__.o],"mouseout",e),prevPointed[_utils__WEBPACK_IMPORTED_MODULE_0__.o]=pointed},stopPropagation=event=>{event.stopPropagation()},syncBackdropStyle=(textarea,backdrop,caretColorRef,style)=>{const computedTextAreaStyle=getStyle(textarea),textareaStyle=textarea.style,backdropStyle=backdrop.style;caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]||(caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]=getPropertyValue(computedTextAreaStyle,"color")),TEXT_STYLE_KEYS.forEach((k=>{backdropStyle[k]=computedTextAreaStyle[k]})),textareaStyle.color=backdropStyle.borderColor="transparent",textareaStyle.caretColor=(null==style?void 0:style.caretColor)||caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]}},"./src/selection.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>initSelectionStore});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils.ts");const initSelectionStore=(ref,onSelectionUpdate)=>{let compositionEvent,cache=[null,null];const handle={_updateSeletion(){setTimeout((()=>{onSelectionUpdate((()=>{const selectionStart=handle._getSelectionStart(),selectionEnd=handle._getSelectionEnd();return cache[0]===selectionStart&&cache[1]===selectionEnd||(cache=[selectionStart,selectionEnd]),cache})())}))},_setComposition(event){compositionEvent=event},_getSelectionStart(){const el=ref[_utils__WEBPACK_IMPORTED_MODULE_0__.o];if(!el)return null;let pos=el.selectionStart;return compositionEvent&&(pos=Math.min(pos,el.selectionEnd-compositionEvent.data.length)),pos},_getSelectionEnd(){const el=ref[_utils__WEBPACK_IMPORTED_MODULE_0__.o];if(!el)return null;let pos=el.selectionEnd;return compositionEvent&&(pos=Math.min(pos,el.selectionStart+compositionEvent.data.length)),pos}};return handle}},"./src/textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>RichTextarea});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),range_at_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/range-at-index/build/index.js"),range_at_index__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(range_at_index__WEBPACK_IMPORTED_MODULE_2__),_dom__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/dom.ts"),_selection__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/selection.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/useIsomorphicLayoutEffect.ts"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils.ts"),_useStatic__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/useStatic.ts");const CARET_DETECTOR=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"transparent"},children:"​"}),RichTextarea=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({children:render,value,autoHeight,style,onKeyDown,onSelectionChange,...props},propRef)=>{const textAreaRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),backdropRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[[width,height,hPadding,vPadding],setRect]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([0,0,0,0]),[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),caretColorRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),pointedRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[[selectionStart,selectionEnd],setSelection]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([null,null]),selectionStore=(0,_useStatic__WEBPACK_IMPORTED_MODULE_3__.T)((()=>(0,_selection__WEBPACK_IMPORTED_MODULE_4__.n)(textAreaRef,setSelection))),totalWidth=width+hPadding,totalHeight=height+vPadding,isSizeCalculated=!!(totalWidth+totalHeight);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(propRef,(()=>{const el=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_5__.o],overrides={get selectionStart(){const sel=selectionStore._getSelectionStart();return null==sel?0:sel},get selectionEnd(){const sel=selectionStore._getSelectionEnd();return null==sel?0:sel},setSelectionRange(...args){el.focus(),el.setSelectionRange(...args)},setRangeText(text,start,end,preserve){el.setRangeText?el.setRangeText(text,start,end,preserve):(el.focus(),el.selectionStart=start,el.selectionEnd=end,document.execCommand("insertText",!1,text)),el.dispatchEvent(new Event("input",{bubbles:!0}))}};return new Proxy(el,{get(target,prop){if(overrides[prop])return overrides[prop];const value2=target[prop];return"function"==typeof value2?value2.bind(target):value2}})}),[textAreaRef]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.L)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_5__.o],backdrop=backdropRef[_utils__WEBPACK_IMPORTED_MODULE_5__.o];if(!textarea||!backdrop)return;const observer=new ResizeObserver((([entry])=>{const{contentRect,borderBoxSize}=entry;if(borderBoxSize&&borderBoxSize[0])return void setRect([contentRect.width,contentRect.height,borderBoxSize[0].inlineSize-contentRect.width,borderBoxSize[0].blockSize-contentRect.height]);const style2=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.C2)(textarea);setRect([contentRect.width,contentRect.height,(0,_dom__WEBPACK_IMPORTED_MODULE_7__.RH)(style2),(0,_dom__WEBPACK_IMPORTED_MODULE_7__.aY)(style2)])})),onFocus=()=>{setFocused(!0)},onBlur=()=>{setFocused(!1)},onScroll=()=>{const{scrollTop,scrollLeft}=textarea;backdrop.style.transform=`translate(${-scrollLeft}px, ${-scrollTop}px)`},onMouseDown=e=>{selectionStore._updateSeletion();const mouseup=()=>{selectionStore._updateSeletion(),document.removeEventListener("mouseup",mouseup)};document.addEventListener("mouseup",mouseup);const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_7__.Gr)(pointed,e)},onMouseUp=e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_7__.Gr)(pointed,e)},onMouseMove=e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.vy)(textarea,backdrop,e);(0,_dom__WEBPACK_IMPORTED_MODULE_7__.NS)(pointed,pointedRef,e)},onMouseLeave=e=>{(0,_dom__WEBPACK_IMPORTED_MODULE_7__.tQ)(pointedRef,e,null)},onClick=e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_7__.Gr)(pointed,e)},onInput=()=>{selectionStore._updateSeletion()},onCompositionStart=e=>{selectionStore._setComposition(e)},onCompositionUpdate=e=>{selectionStore._setComposition(e)},onCompositionEnd=()=>{selectionStore._setComposition()};return textarea.addEventListener("focus",onFocus),textarea.addEventListener("blur",onBlur),textarea.addEventListener("scroll",onScroll),textarea.addEventListener("mousedown",onMouseDown),textarea.addEventListener("mouseup",onMouseUp),textarea.addEventListener("mousemove",onMouseMove),textarea.addEventListener("mouseleave",onMouseLeave),textarea.addEventListener("click",onClick),textarea.addEventListener("input",onInput),textarea.addEventListener("compositionstart",onCompositionStart),textarea.addEventListener("compositionupdate",onCompositionUpdate),textarea.addEventListener("compositionend",onCompositionEnd),observer.observe(textarea),()=>{textarea.removeEventListener("focus",onFocus),textarea.removeEventListener("blur",onBlur),textarea.removeEventListener("scroll",onScroll),textarea.removeEventListener("mousedown",onMouseDown),textarea.removeEventListener("mouseup",onMouseUp),textarea.removeEventListener("mousemove",onMouseMove),textarea.removeEventListener("mouseleave",onMouseLeave),textarea.removeEventListener("click",onClick),textarea.removeEventListener("input",onInput),textarea.removeEventListener("compositionstart",onCompositionStart),textarea.removeEventListener("compositionupdate",onCompositionUpdate),textarea.removeEventListener("compositionend",onCompositionEnd),observer.disconnect()}}),[]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.L)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_5__.o],backdrop=backdropRef[_utils__WEBPACK_IMPORTED_MODULE_5__.o];backdrop&&textarea&&(0,_dom__WEBPACK_IMPORTED_MODULE_7__.Ku)(textarea,backdrop,caretColorRef,style)}),[style]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(null!=selectionStart&&null!=selectionEnd&&onSelectionChange)if(focused){const rect=range_at_index__WEBPACK_IMPORTED_MODULE_2___default()(backdropRef[_utils__WEBPACK_IMPORTED_MODULE_5__.o],selectionStart,selectionStart+1).getBoundingClientRect();onSelectionChange({focused:!0,top:rect.top,left:rect.left,height:rect.height,selectionStart,selectionEnd},value)}else onSelectionChange({focused:!1,selectionStart,selectionEnd},value)}),[focused,selectionStart,selectionEnd]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_5__.o];autoHeight&&textarea&&(textarea.style.height="auto",textarea.style.height=`${textarea.scrollHeight}px`)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{let w=totalWidth,h=totalHeight;return style&&((0,_dom__WEBPACK_IMPORTED_MODULE_7__.Fx)(style.width)&&(w=style.width),(0,_dom__WEBPACK_IMPORTED_MODULE_7__.Fx)(style.height)&&(h=style.height)),{display:"inline-block",position:"relative",width:w,height:h}}),[totalWidth,totalHeight,style]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{const s={position:"absolute",overflow:"hidden",top:0,left:0,width:totalWidth,height:totalHeight};return style?(["background","backgroundColor"].forEach((k=>{style[k]&&(s[k]=style[k])})),s):s}),[totalWidth,totalHeight,style]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{ref:backdropRef,"aria-hidden":!0,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({width,transform:"translate(0px, 0px)",pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",boxSizing:"content-box",textSizeAdjust:"100%",WebkitTextSizeAdjust:"100%"})),[width]),onClick:_dom__WEBPACK_IMPORTED_MODULE_7__.UW,onMouseDown:_dom__WEBPACK_IMPORTED_MODULE_7__.UW,onMouseUp:_dom__WEBPACK_IMPORTED_MODULE_7__.UW,onMouseOver:_dom__WEBPACK_IMPORTED_MODULE_7__.UW,onMouseOut:_dom__WEBPACK_IMPORTED_MODULE_7__.UW,onMouseMove:_dom__WEBPACK_IMPORTED_MODULE_7__.UW,children:[(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>render?render(value):value),[value,render]),CARET_DETECTOR]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{...props,ref:textAreaRef,value,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({...style,background:"transparent",margin:0,position:"absolute",...!isSizeCalculated&&{position:void 0,verticalAlign:"top"}})),[style,isSizeCalculated]),onKeyDown:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{e.nativeEvent.isComposing||229===e.nativeEvent.keyCode||(null==onKeyDown||onKeyDown(e),selectionStore._updateSeletion())}),[onKeyDown])})]})}));try{RichTextarea.displayName="RichTextarea",RichTextarea.__docgenInfo={description:"Textarea component with some extra props. See {@link RichTextareaProps} and {@link RichTextareaHandle}.",displayName:"RichTextarea",props:{children:{defaultValue:null,description:"Render function to create customized view from value.\n\nThis function should return ReactNodes which texts are positioned the same as textarea (see examples for detailed usage).\n\nOn the rendered nodes, currently limited event handlers will work.\n- `onClick`\n- `onMouseOver`\n- `onMouseOut`\n- `onMouseMove`\n- `onMouseDown`\n- `onMouseUp`\n@defaultValue undefined",name:"children",required:!1,type:{name:"Renderer"}},value:{defaultValue:null,description:"Same as original but only string",name:"value",required:!0,type:{name:"string"}},autoHeight:{defaultValue:null,description:"If true, textarea height is automatically resized and height of style prop does not work.\nSet `maxHeight` to style prop if you need limit.\nSet `rows` prop to 1 if you need single-line textarea.\n@defaultValue undefined",name:"autoHeight",required:!1,type:{name:"boolean"}},onSelectionChange:{defaultValue:null,description:"Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.\n@defaultValue undefined",name:"onSelectionChange",required:!1,type:{name:"(pos: CaretPosition, value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/textarea.tsx#RichTextarea"]={docgenInfo:RichTextarea.__docgenInfo,name:"RichTextarea",path:"src/textarea.tsx#RichTextarea"})}catch(__react_docgen_typescript_loader_error){}},"./src/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/useStatic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useStatic});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils.ts");const useStatic=init=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref[_utils__WEBPACK_IMPORTED_MODULE_1__.o]||(ref[_utils__WEBPACK_IMPORTED_MODULE_1__.o]=init())}},"./src/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>refKey});const refKey="current"}}]);