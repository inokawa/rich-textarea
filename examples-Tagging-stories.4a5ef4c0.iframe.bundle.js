/*! For license information please see examples-Tagging-stories.4a5ef4c0.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[149],{"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_LSK4KSW4_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-LSK4KSW4.mjs"),global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/global/window.js"),global__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),global__WEBPACK_IMPORTED_MODULE_1___default());globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_LSK4KSW4_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_LSK4KSW4_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_LSK4KSW4_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./stories/examples/Tagging.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tagging:()=>Tagging,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _a,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/index.js")),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/textarea.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_3__.p},style={height:20,width:400,whiteSpace:"pre",overflowWrap:"normal",overflowX:"auto",overflowY:"hidden",resize:"none"},Menu=({items,onSelect})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{position:"absolute",top:24,left:0,width:400,fontSize:"12px",border:"solid 1px gray",borderRadius:"3px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{borderBottom:"solid 1px gray"},children:"Current tags"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{style:{listStyleType:"none",margin:0,padding:0,cursor:"pointer",background:"white"},children:items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{onMouseDown:()=>onSelect(item),children:item},item)))})]}),Tag=({children,selected})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{background:selected?"lightgray":"whitesmoke",color:"dimgray",borderRadius:"4px",outline:"solid 1px dimgray"},children}),Tagging={render:()=>{const[tags,setTags]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(["Apple","Orange","Banana"]),[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),[pos,setPos]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),tagsText=tags.join(" ")+(tags.length?" ":""),textStart=tagsText.length,tagIndex=null==pos?-1:tags.reduce(((acc,t,i)=>{if(-1!==acc[0])return acc;const prev=acc[1];return acc[1]+=t.length+" ".length,prev<=pos&&pos<acc[1]&&(acc[0]=i),acc}),[-1,0])[0];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{position:"relative",padding:0},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.p,{rows:1,style,onChange:e=>setText(e.target.value.slice(textStart)),value:tagsText+text,onFocus:()=>setFocused(!0),onBlur:()=>setFocused(!1),onKeyDown:e=>{if(pos)switch(e.code){case"Enter":if(e.preventDefault(),!pos)return;if(!text||tags.includes(text))return;setTags((prev=>[...prev,text])),setText("");break;case"Backspace":if(textStart<pos)return;e.preventDefault(),setTags((prev=>{const next=[...prev];return next.splice(-1===tagIndex?prev.length-1:tagIndex,1),next}));break;case"Delete":if(textStart<pos)return;e.preventDefault()}},onSelectionChange:r=>{r.focused?setPos(r.selectionStart):setPos(null)},children:()=>[...tags.flatMap(((t,i)=>[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tag,{selected:i==tagIndex,children:t},t)," "])),text||pos===textStart&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"darkgray"},children:"Type anything and press Enter key..."},"__placeholder")]}),focused&&!!tags.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Menu,{items:tags,onSelect:text=>{setTags((prev=>prev.filter((p=>p!==text))))}})]})}};Tagging.parameters={...Tagging.parameters,storySource:{source:'{\n  render: () => {\n    const [tags, setTags] = useState<string[]>(["Apple", "Orange", "Banana"]);\n    const [text, setText] = useState("");\n    const [pos, setPos] = useState<number | null>(null);\n    const [focused, setFocused] = useState(false);\n    const tagsText = tags.join(SPACER) + (tags.length ? SPACER : "");\n    const textStart = tagsText.length;\n    const tagIndex = pos == null ? -1 : tags.reduce((acc, t, i) => {\n      if (acc[0] !== -1) return acc;\n      const prev = acc[1];\n      acc[1] += t.length + SPACER.length;\n      if (prev <= pos && pos < acc[1]) {\n        acc[0] = i;\n      }\n      return acc;\n    }, ([-1, 0] as [number, number]))[0];\n    return <div style={{\n      position: "relative",\n      padding: 0\n    }}>\n        <RichTextarea rows={1} style={style} onChange={e => setText(e.target.value.slice(textStart))} value={tagsText + text} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onKeyDown={e => {\n        if (!pos) return;\n        switch (e.code) {\n          case "Enter":\n            e.preventDefault();\n            if (!pos) return;\n            if (!text || tags.includes(text)) return;\n            setTags(prev => [...prev, text]);\n            setText("");\n            break;\n          case "Backspace":\n            if (textStart < pos) return;\n            e.preventDefault();\n            setTags(prev => {\n              const next = [...prev];\n              next.splice(tagIndex === -1 ? prev.length - 1 : tagIndex, 1);\n              return next;\n            });\n            break;\n          case "Delete":\n            if (textStart < pos) return;\n            e.preventDefault();\n            break;\n          default:\n            break;\n        }\n      }} onSelectionChange={r => {\n        if (r.focused) {\n          setPos(r.selectionStart);\n        } else {\n          setPos(null);\n        }\n      }}>\n          {() => {\n          return [...tags.flatMap((t, i) => [<Tag key={t} selected={i == tagIndex}>\n                  {t}\n                </Tag>, SPACER]), text ? text : pos === textStart && <span key={"__placeholder"} style={{\n            color: "darkgray"\n          }}>\n                      Type anything and press Enter key...\n                    </span>];\n        }}\n        </RichTextarea>\n        {focused && !!tags.length && <Menu items={tags} onSelect={text => {\n        setTags(prev => prev.filter(p => p !== text));\n      }} />}\n      </div>;\n  }\n}',...null===(_a=Tagging.parameters)||void 0===_a?void 0:_a.storySource}};const __namedExportsOrder=["Tagging"]},"./src/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,G6:()=>isSafari,Gr:()=>dispatchClonedMouseEvent,Ku:()=>syncBackdropStyle,NS:()=>dispatchMouseMoveEvent,RH:()=>getHorizontalPadding,UW:()=>stopPropagation,aY:()=>getVerticalPadding,tQ:()=>dispatchMouseOutEvent,vy:()=>getPointedElement});const isSafari=()=>{const ua=navigator.userAgent.toLowerCase();return ua.indexOf("safari")>-1&&ua.indexOf("chrome")<=-1},TEXT_STYLE_KEYS=["direction","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","margin","marginTop","marginBottom","marginLeft","marginRight","border","borderWidth","borderTopWidth","borderBottomWidth","borderLeftWidth","borderRightWidth","borderStyle","borderTopStyle","borderBottomStyle","borderLeftStyle","borderRightStyle","fontSize","fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSizeAdjust","textAlign","textTransform","textIndent","letterSpacing","wordSpacing","lineHeight","whiteSpace","wordBreak","overflowWrap","tabSize","MozTabSize"],getPropertyValue=(style,key)=>style.getPropertyValue(key),setProperty=(style,key,value)=>{style.setProperty(key,value)},getValueFromStyle=(style,key)=>{const value=getPropertyValue(style,key);return value?parseInt(value,10):0},getStyle=e=>getComputedStyle(e),getVerticalPadding=style=>getValueFromStyle(style,"padding-top")+getValueFromStyle(style,"padding-bottom")+getValueFromStyle(style,"border-top")+getValueFromStyle(style,"border-bottom"),getHorizontalPadding=style=>getValueFromStyle(style,"padding-left")+getValueFromStyle(style,"padding-right")+getValueFromStyle(style,"border-left")+getValueFromStyle(style,"border-right"),getPointedElement=(textarea,backdrop,e)=>{const textareaStyle=textarea.style,backdropStyle=backdrop.style,prev=getPropertyValue(textareaStyle,"pointer-events"),backPrev=getPropertyValue(backdropStyle,"pointer-events");setProperty(textareaStyle,"pointer-events","none"),setProperty(backdropStyle,"pointer-events","auto");const pointed=document.elementFromPoint(e.clientX,e.clientY);return setProperty(textareaStyle,"pointer-events",prev),setProperty(backdropStyle,"pointer-events",backPrev),isInsideBackdrop(pointed,backdrop)?pointed:null},isInsideBackdrop=(pointed,backdrop)=>!!pointed&&backdrop!==pointed&&backdrop.contains(pointed),dispatchMouseEvent=(target,type,init)=>{target.dispatchEvent(new MouseEvent(type,init))},dispatchClonedMouseEvent=(pointed,e)=>{dispatchMouseEvent(pointed,e.type,e)},dispatchMouseMoveEvent=(pointed,prevPointed,e)=>{pointed&&dispatchClonedMouseEvent(pointed,e),prevPointed.current!==pointed&&(dispatchMouseOutEvent(prevPointed,e,pointed),pointed&&dispatchMouseEvent(pointed,"mouseover",e))},dispatchMouseOutEvent=(prevPointed,e,pointed)=>{prevPointed.current&&dispatchMouseEvent(prevPointed.current,"mouseout",e),prevPointed.current=pointed},stopPropagation=event=>{event.stopPropagation()},syncBackdropStyle=(textarea,backdrop,caretColorRef,style)=>{const computedTextAreaStyle=getStyle(textarea),textareaStyle=textarea.style,backdropStyle=backdrop.style;caretColorRef.current||(caretColorRef.current=getPropertyValue(computedTextAreaStyle,"color")),TEXT_STYLE_KEYS.forEach((k=>{backdropStyle[k]=computedTextAreaStyle[k]})),textareaStyle.color=backdropStyle.borderColor="transparent",textareaStyle.caretColor=(null==style?void 0:style.caretColor)||caretColorRef.current}},"./src/selection.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>initSelectionStore});const NOOP=()=>{},initSelectionStore=ref=>{let listener=NOOP,cache=[null,null],compositionEvent=null;const handle={_subscribe:callback=>(listener=callback,()=>{listener=NOOP}),_update(){setTimeout(listener)},_setComposition(comp){compositionEvent=comp},_getSelectionStart(){const el=ref.current;if(!el)return null;let pos=el.selectionStart;return compositionEvent&&(pos=Math.min(pos,el.selectionEnd-compositionEvent.data.length)),pos},_getSelectionEnd(){const el=ref.current;if(!el)return null;let pos=el.selectionEnd;return compositionEvent&&(pos=Math.min(pos,el.selectionStart+compositionEvent.data.length)),pos},_getSelection(){const selectionStart=handle._getSelectionStart(),selectionEnd=handle._getSelectionEnd();return cache[0]===selectionStart&&cache[1]===selectionEnd||(cache=[selectionStart,selectionEnd]),cache}};return handle}},"./src/textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>RichTextarea});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/use-sync-external-store/shim/index.js"),range_at_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/range-at-index/build/index.js"),range_at_index__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(range_at_index__WEBPACK_IMPORTED_MODULE_3__),_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/dom.ts"),_selection__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/selection.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/useIsomorphicLayoutEffect.ts");const CARET_DETECTOR=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"transparent"},children:"​"}),RichTextarea=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({children:render,value,autoHeight,style,onScroll,onInput,onCompositionStart,onCompositionUpdate,onCompositionEnd,onKeyDown,onClick,onMouseDown,onMouseUp,onMouseMove,onMouseLeave,onFocus,onBlur,onSelectionChange,...props},propRef)=>{const textAreaRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),backdropRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[[left,top],setPos]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([0,0]),[[width,height,hPadding,vPadding],setRect]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([0,0,0,0]),[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),caretColorRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),pointedRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),selectionStore=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((()=>(0,_selection__WEBPACK_IMPORTED_MODULE_4__.n)(textAreaRef)))[0],[selectionStart,selectionEnd]=(0,use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore)(selectionStore._subscribe,selectionStore._getSelection,selectionStore._getSelection),totalWidth=width+hPadding,totalHeight=height+vPadding,isSizeCalculated=!!(totalWidth+totalHeight);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(propRef,(()=>{const el=textAreaRef.current,overrides={get selectionStart(){const sel=selectionStore._getSelectionStart();return null==sel?0:sel},get selectionEnd(){const sel=selectionStore._getSelectionEnd();return null==sel?0:sel},setSelectionRange(...args){el.focus(),el.setSelectionRange(...args)},setRangeText(text,start,end,preserve){el.setRangeText?el.setRangeText(text,start,end,preserve):(el.focus(),el.selectionStart=start,el.selectionEnd=end,document.execCommand("insertText",!1,text)),el.dispatchEvent(new Event("input",{bubbles:!0}))}};return new Proxy(el,{get(target,prop){if(overrides[prop])return overrides[prop];const value=target[prop];return"function"==typeof value?value.bind(target):value}})}),[textAreaRef]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__.L)((()=>{const textarea=textAreaRef.current;if(!textarea)return;const observer=new ResizeObserver((([entry])=>{const{contentRect,borderBoxSize}=entry;if(borderBoxSize&&borderBoxSize[0])return void setRect([contentRect.width,contentRect.height,borderBoxSize[0].inlineSize-contentRect.width,borderBoxSize[0].blockSize-contentRect.height]);const style=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.C2)(textarea);setRect([contentRect.width,contentRect.height,(0,_dom__WEBPACK_IMPORTED_MODULE_6__.RH)(style),(0,_dom__WEBPACK_IMPORTED_MODULE_6__.aY)(style)])}));return observer.observe(textarea),()=>{observer.disconnect()}}),[]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__.L)((()=>{const textarea=textAreaRef.current,backdrop=backdropRef.current;backdrop&&textarea&&(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Ku)(textarea,backdrop,caretColorRef,style)}),[style]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(null!=selectionStart&&null!=selectionEnd&&onSelectionChange)if(focused){const rect=range_at_index__WEBPACK_IMPORTED_MODULE_3___default()(backdropRef.current,selectionStart,selectionStart+1).getBoundingClientRect();onSelectionChange({focused:!0,top:rect.top,left:rect.left,height:rect.height,selectionStart,selectionEnd},value)}else onSelectionChange({focused:!1,selectionStart,selectionEnd},value)}),[focused,selectionStart,selectionEnd]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const textarea=textAreaRef.current;autoHeight&&textarea&&(textarea.style.height="auto",textarea.style.height=`${textarea.scrollHeight}px`)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{let w=totalWidth,h=totalHeight;return style&&("string"==typeof style.width&&style.width.endsWith("%")&&(w=style.width),"string"==typeof style.height&&style.height.endsWith("%")&&(h=style.height)),{display:"inline-block",position:"relative",width:w,height:h}}),[totalWidth,totalHeight,style]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{const s={position:"absolute",overflow:"hidden",top:0,left:0,width:totalWidth,height:totalHeight};return style?(["background","backgroundColor"].forEach((k=>{style[k]&&(s[k]=style[k])})),s):s}),[totalWidth,totalHeight,style]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{ref:backdropRef,"aria-hidden":!0,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({width,transform:`translate(${-left}px, ${-top}px)`,pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",textSizeAdjust:"100%",WebkitTextSizeAdjust:"100%"})),[left,top,width]),onClick:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseDown:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseUp:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseOver:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseOut:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseMove:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,children:[(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>render?render(value):value),[value,render]),CARET_DETECTOR]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{...props,ref:textAreaRef,value,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({...style,background:"transparent",margin:0,position:"absolute",...!isSizeCalculated&&{position:void 0,verticalAlign:"top"}})),[style,isSizeCalculated]),onScroll:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{setPos([e.currentTarget.scrollLeft,e.currentTarget.scrollTop]),null==onScroll||onScroll(e)}),[onScroll]),onInput:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{null==onInput||onInput(e),selectionStore._update()}),[onInput]),onCompositionStart:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{selectionStore._setComposition(e.nativeEvent),null==onCompositionStart||onCompositionStart(e)}),[onCompositionStart]),onCompositionUpdate:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{selectionStore._setComposition(e.nativeEvent),null==onCompositionUpdate||onCompositionUpdate(e)}),[onCompositionUpdate]),onCompositionEnd:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{selectionStore._setComposition(null),null==onCompositionEnd||onCompositionEnd(e)}),[onCompositionEnd]),onKeyDown:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{e.nativeEvent.isComposing||229===e.nativeEvent.keyCode||(null==onKeyDown||onKeyDown(e),selectionStore._update())}),[onKeyDown]),onClick:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{null==onClick||onClick(e);const textarea=textAreaRef.current,backdrop=backdropRef.current;if(!textarea||!backdrop)return;const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Gr)(pointed,e.nativeEvent)}),[onClick]),onMouseDown:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{null==onMouseDown||onMouseDown(e),selectionStore._update();const mouseup=()=>{selectionStore._update(),document.removeEventListener("mouseup",mouseup)};document.addEventListener("mouseup",mouseup);const textarea=textAreaRef.current,backdrop=backdropRef.current;if(!textarea||!backdrop)return;const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Gr)(pointed,e.nativeEvent)}),[onMouseDown]),onMouseUp:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{null==onMouseUp||onMouseUp(e);const textarea=textAreaRef.current,backdrop=backdropRef.current;if(!textarea||!backdrop)return;const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Gr)(pointed,e.nativeEvent)}),[onMouseUp]),onMouseMove:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{null==onMouseMove||onMouseMove(e);const textarea=textAreaRef.current,backdrop=backdropRef.current;if(!textarea||!backdrop)return;const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.vy)(textarea,backdrop,e);(0,_dom__WEBPACK_IMPORTED_MODULE_6__.NS)(pointed,pointedRef,e.nativeEvent)}),[onMouseMove]),onMouseLeave:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{null==onMouseLeave||onMouseLeave(e),(0,_dom__WEBPACK_IMPORTED_MODULE_6__.tQ)(pointedRef,e.nativeEvent,null)}),[onMouseLeave]),onFocus:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{null==onFocus||onFocus(e),setFocused(!0)}),[onFocus]),onBlur:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{null==onBlur||onBlur(e),setFocused(!1)}),[onBlur])})]})}));try{RichTextarea.displayName="RichTextarea",RichTextarea.__docgenInfo={description:"Textarea component with some extra props. See {@link RichTextareaProps} and {@link RichTextareaHandle}.",displayName:"RichTextarea",props:{children:{defaultValue:null,description:"Render function to create customized view from value.\n\nThis function should return ReactNodes which texts are positioned the same as textarea (see examples for detailed usage).\n\nOn the rendered nodes, currently limited event handlers will work.\n- `onClick`\n- `onMouseOver`\n- `onMouseOut`\n- `onMouseMove`\n- `onMouseDown`\n- `onMouseUp`\n@defaultValue undefined",name:"children",required:!1,type:{name:"Renderer"}},value:{defaultValue:null,description:"Same as original but only string",name:"value",required:!0,type:{name:"string"}},autoHeight:{defaultValue:null,description:"If true, textarea height is automatically resized and height of style prop does not work. Set `maxHeight` to style prop if you need limit.\n@defaultValue undefined",name:"autoHeight",required:!1,type:{name:"boolean"}},onSelectionChange:{defaultValue:null,description:"Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.\n@defaultValue undefined",name:"onSelectionChange",required:!1,type:{name:"(pos: CaretPosition, value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/textarea.tsx#RichTextarea"]={docgenInfo:RichTextarea.__docgenInfo,name:"RichTextarea",path:"src/textarea.tsx#RichTextarea"})}catch(__react_docgen_typescript_loader_error){}},"./src/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./node_modules/range-at-index/build/index.js":module=>{module.exports=function RangeAtIndex(el,index,offset,range){var doc=el.ownerDocument;range||(range=doc.createRange());var iterator=doc.createNodeIterator(el,NodeFilter.SHOW_TEXT,null,!1),start={},end={},node=void 0,val=void 0,len=void 0;for(;node=iterator.nextNode();)val=node.nodeValue,len=val.length,!start.node&&len>index&&(start.node=node,start.offset=index),!end.node&&len>=offset&&(end.node=node,end.offset=offset),index-=len,offset-=len;start.node&&range.setStart(start.node,start.offset);end.node&&range.setEnd(end.node,end.offset);return range}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var e=__webpack_require__("./node_modules/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"./node_modules/use-sync-external-store/shim/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")}}]);