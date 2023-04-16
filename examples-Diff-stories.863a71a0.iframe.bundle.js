"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[87],{"./stories/examples/Diff.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Diff:()=>Diff,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _a,_b,_c,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/textarea.tsx"),monaco_diff__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/monaco-diff/lib/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_2__.p},style={width:"300px",height:"400px"},createDiffRenderer=(tokens,type)=>value=>{var _a2;const orgLines=Array.from({length:value.length}),modLines=Array.from({length:value.length});for(const token of tokens){for(let i=token.originalStartLineNumber;i<=token.originalEndLineNumber;i++)orgLines[i-1]||(orgLines[i-1]=[]),0===token.modifiedEndLineNumber&&orgLines[i-1].push({start:void 0,end:void 0});for(let i=token.modifiedStartLineNumber;i<=token.modifiedEndLineNumber;i++)modLines[i-1]||(modLines[i-1]=[]),0===token.originalEndLineNumber&&modLines[i-1].push({start:void 0,end:void 0});null==(_a2=token.charChanges)||_a2.forEach((c=>{for(let i=c.originalStartLineNumber;i<=c.originalEndLineNumber;i++)i===c.originalStartLineNumber?c.originalStartLineNumber===c.originalEndLineNumber?(orgLines[i-1]||(orgLines[i-1]=[])).push({start:c.originalStartColumn,end:c.originalEndColumn}):(orgLines[i-1]||(orgLines[i-1]=[])).push({start:c.originalStartColumn,end:void 0}):i===c.originalEndLineNumber?(orgLines[i-1]||(orgLines[i-1]=[])).push({start:void 0,end:c.originalEndColumn}):(orgLines[i-1]||(orgLines[i-1]=[])).push({start:void 0,end:void 0});for(let i=c.modifiedStartLineNumber;i<=c.modifiedEndLineNumber;i++)i===c.modifiedStartLineNumber?c.modifiedStartLineNumber===c.modifiedEndLineNumber?(modLines[i-1]||(modLines[i-1]=[])).push({start:c.modifiedStartColumn,end:c.modifiedEndColumn}):(modLines[i-1]||(modLines[i-1]=[])).push({start:c.modifiedStartColumn,end:void 0}):i===c.modifiedEndLineNumber?(modLines[i-1]||(modLines[i-1]=[])).push({start:void 0,end:c.modifiedEndColumn}):(modLines[i-1]||(modLines[i-1]=[])).push({start:void 0,end:void 0})}))}const bgStyle="base"===type?{background:"rgba(255, 0, 0, 0.2)"}:{background:"rgba(155, 185, 85, 0.2)"};return value.split("\n").map(((s,i)=>{const diff2="base"===type&&orgLines[i]||"target"===type&&modLines[i]||void 0;let node=[s];if(diff2&&diff2.length){let prevEnd=0,prevStart=0;const res=[];for(let di=0;di<diff2.length;di++){const d=diff2[di],start=d.start?d.start-1:0,end=d.end?d.end-1:s.length;res.push(s.slice(prevEnd,start)),res.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:bgStyle,children:s.slice(start,end)},`${i}-${di}`)),prevStart=start,prevEnd=end}res.push(s.slice(prevEnd)),node=res}return node.push(" "),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:diff2&&bgStyle,children:node},i)}))},Diff={render:()=>{const[baseText,setBaseText]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("This line is removed on the right.\njust some text\nabcd\nefgh\nSome more text\nSome more text\nSome more text"),[targetText,setTargetText]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("just some text\nabcz\nzzzzefgh\nSome more text.\nThis line is removed on the left."),tokens=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>(0,monaco_diff__WEBPACK_IMPORTED_MODULE_3__.Z)(baseText.split("\n"),targetText.split("\n"))),[baseText,targetText]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.p,{style,onChange:e=>setBaseText(e.target.value),value:baseText,children:createDiffRenderer(tokens,"base")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.p,{style,onChange:e=>setTargetText(e.target.value),value:targetText,children:createDiffRenderer(tokens,"target")})]})}};Diff.parameters={...Diff.parameters,docs:{...null==(_a=Diff.parameters)?void 0:_a.docs,source:{originalSource:'{\n  render: () => {\n    const [baseText, setBaseText] = useState("This line is removed on the right.\\njust some text\\nabcd\\nefgh\\nSome more text\\nSome more text\\nSome more text");\n    const [targetText, setTargetText] = useState("just some text\\nabcz\\nzzzzefgh\\nSome more text.\\nThis line is removed on the left.");\n    const tokens = useMemo(() => diff(baseText.split("\\n"), targetText.split("\\n")), [baseText, targetText]);\n    return <div>\n        <RichTextarea style={style} onChange={e => setBaseText(e.target.value)} value={baseText}>\n          {createDiffRenderer(tokens, "base")}\n        </RichTextarea>\n        <RichTextarea style={style} onChange={e => setTargetText(e.target.value)} value={targetText}>\n          {createDiffRenderer(tokens, "target")}\n        </RichTextarea>\n      </div>;\n  }\n}',...null==(_c=null==(_b=Diff.parameters)?void 0:_b.docs)?void 0:_c.source}}}},"./src/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Fx:()=>hasPercentageUnit,G6:()=>isSafari,Gr:()=>dispatchClonedMouseEvent,Ku:()=>syncBackdropStyle,NS:()=>dispatchMouseMoveEvent,RH:()=>getHorizontalPadding,UW:()=>stopPropagation,aY:()=>getVerticalPadding,tQ:()=>dispatchMouseOutEvent,vy:()=>getPointedElement});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils.ts");const isSafari=()=>{const ua=navigator.userAgent.toLowerCase();return ua.indexOf("safari")>-1&&ua.indexOf("chrome")<=-1},TEXT_STYLE_KEYS=["direction","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","margin","marginTop","marginBottom","marginLeft","marginRight","border","borderWidth","borderTopWidth","borderBottomWidth","borderLeftWidth","borderRightWidth","borderStyle","borderTopStyle","borderBottomStyle","borderLeftStyle","borderRightStyle","fontSize","fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSizeAdjust","textAlign","textTransform","textIndent","letterSpacing","wordSpacing","lineHeight","whiteSpace","wordBreak","overflowWrap","tabSize","MozTabSize"],getPropertyValue=(style,key)=>style.getPropertyValue(key),setProperty=(style,key,value)=>{style.setProperty(key,value)},getValueFromStyle=(style,key)=>{const value=getPropertyValue(style,key);return value?parseInt(value,10):0},getStyle=e=>getComputedStyle(e),hasPercentageUnit=widthOrHeight=>"string"==typeof widthOrHeight&&widthOrHeight.endsWith("%"),getVerticalPadding=style=>getValueFromStyle(style,"padding-top")+getValueFromStyle(style,"padding-bottom")+getValueFromStyle(style,"border-top")+getValueFromStyle(style,"border-bottom"),getHorizontalPadding=style=>getValueFromStyle(style,"padding-left")+getValueFromStyle(style,"padding-right")+getValueFromStyle(style,"border-left")+getValueFromStyle(style,"border-right"),getPointedElement=(textarea,backdrop,e)=>{const textareaStyle=textarea.style,backdropStyle=backdrop.style,prev=getPropertyValue(textareaStyle,"pointer-events"),backPrev=getPropertyValue(backdropStyle,"pointer-events");setProperty(textareaStyle,"pointer-events","none"),setProperty(backdropStyle,"pointer-events","auto");const pointed=document.elementFromPoint(e.clientX,e.clientY);return setProperty(textareaStyle,"pointer-events",prev),setProperty(backdropStyle,"pointer-events",backPrev),isInsideBackdrop(pointed,backdrop)?pointed:null},isInsideBackdrop=(pointed,backdrop)=>!!pointed&&backdrop!==pointed&&backdrop.contains(pointed),dispatchMouseEvent=(target,type,init)=>{target.dispatchEvent(new MouseEvent(type,init))},dispatchClonedMouseEvent=(pointed,e)=>{dispatchMouseEvent(pointed,e.type,e)},dispatchMouseMoveEvent=(pointed,prevPointed,e)=>{pointed&&dispatchClonedMouseEvent(pointed,e),prevPointed[_utils__WEBPACK_IMPORTED_MODULE_0__.o]!==pointed&&(dispatchMouseOutEvent(prevPointed,e,pointed),pointed&&dispatchMouseEvent(pointed,"mouseover",e))},dispatchMouseOutEvent=(prevPointed,e,pointed)=>{prevPointed[_utils__WEBPACK_IMPORTED_MODULE_0__.o]&&dispatchMouseEvent(prevPointed[_utils__WEBPACK_IMPORTED_MODULE_0__.o],"mouseout",e),prevPointed[_utils__WEBPACK_IMPORTED_MODULE_0__.o]=pointed},stopPropagation=event=>{event.stopPropagation()},syncBackdropStyle=(textarea,backdrop,caretColorRef,style)=>{const computedTextAreaStyle=getStyle(textarea),textareaStyle=textarea.style,backdropStyle=backdrop.style;caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]||(caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]=getPropertyValue(computedTextAreaStyle,"color")),TEXT_STYLE_KEYS.forEach((k=>{backdropStyle[k]=computedTextAreaStyle[k]})),textareaStyle.color=backdropStyle.borderColor="transparent",textareaStyle.caretColor=(null==style?void 0:style.caretColor)||caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]}},"./src/selection.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>initSelectionStore});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils.ts");const initSelectionStore=ref=>{const subscribers=new Set;let compositionEvent,cache=[null,null];const handle={_subscribe:cb=>(subscribers.add(cb),()=>{subscribers.delete(cb)}),_updateSeletion(){setTimeout((()=>{subscribers.forEach((cb=>{cb()}))}))},_setComposition(event){compositionEvent=event},_getSelectionStart(){const el=ref[_utils__WEBPACK_IMPORTED_MODULE_0__.o];if(!el)return null;let pos=el.selectionStart;return compositionEvent&&(pos=Math.min(pos,el.selectionEnd-compositionEvent.data.length)),pos},_getSelectionEnd(){const el=ref[_utils__WEBPACK_IMPORTED_MODULE_0__.o];if(!el)return null;let pos=el.selectionEnd;return compositionEvent&&(pos=Math.min(pos,el.selectionStart+compositionEvent.data.length)),pos},_getSelection(){const selectionStart=handle._getSelectionStart(),selectionEnd=handle._getSelectionEnd();return cache[0]===selectionStart&&cache[1]===selectionEnd||(cache=[selectionStart,selectionEnd]),cache}};return handle}},"./src/textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>RichTextarea});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/use-sync-external-store/shim/index.js"),range_at_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/range-at-index/build/index.js"),range_at_index__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(range_at_index__WEBPACK_IMPORTED_MODULE_3__),_dom__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/dom.ts"),_selection__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/selection.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/useIsomorphicLayoutEffect.ts"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils.ts"),_useStatic__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/useStatic.ts");const CARET_DETECTOR=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"transparent"},children:"​"}),RichTextarea=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({children:render,value,autoHeight,style,onKeyDown,onSelectionChange,...props},propRef)=>{const textAreaRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),backdropRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[[width,height,hPadding,vPadding],setRect]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([0,0,0,0]),[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),caretColorRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),pointedRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),selectionStore=(0,_useStatic__WEBPACK_IMPORTED_MODULE_4__.T)((()=>(0,_selection__WEBPACK_IMPORTED_MODULE_5__.n)(textAreaRef))),[selectionStart,selectionEnd]=(0,use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore)(selectionStore._subscribe,selectionStore._getSelection,selectionStore._getSelection),totalWidth=width+hPadding,totalHeight=height+vPadding,isSizeCalculated=!!(totalWidth+totalHeight);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(propRef,(()=>{const el=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_6__.o],overrides={get selectionStart(){const sel=selectionStore._getSelectionStart();return null==sel?0:sel},get selectionEnd(){const sel=selectionStore._getSelectionEnd();return null==sel?0:sel},setSelectionRange(...args){el.focus(),el.setSelectionRange(...args)},setRangeText(text,start,end,preserve){el.setRangeText?el.setRangeText(text,start,end,preserve):(el.focus(),el.selectionStart=start,el.selectionEnd=end,document.execCommand("insertText",!1,text)),el.dispatchEvent(new Event("input",{bubbles:!0}))}};return new Proxy(el,{get(target,prop){if(overrides[prop])return overrides[prop];const value2=target[prop];return"function"==typeof value2?value2.bind(target):value2}})}),[textAreaRef]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__.L)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_6__.o],backdrop=backdropRef[_utils__WEBPACK_IMPORTED_MODULE_6__.o];if(!textarea||!backdrop)return;const observer=new ResizeObserver((([entry])=>{const{contentRect,borderBoxSize}=entry;if(borderBoxSize&&borderBoxSize[0])return void setRect([contentRect.width,contentRect.height,borderBoxSize[0].inlineSize-contentRect.width,borderBoxSize[0].blockSize-contentRect.height]);const style2=(0,_dom__WEBPACK_IMPORTED_MODULE_8__.C2)(textarea);setRect([contentRect.width,contentRect.height,(0,_dom__WEBPACK_IMPORTED_MODULE_8__.RH)(style2),(0,_dom__WEBPACK_IMPORTED_MODULE_8__.aY)(style2)])})),onFocus=()=>{setFocused(!0)},onBlur=()=>{setFocused(!1)},onScroll=()=>{const{scrollTop,scrollLeft}=textarea;backdrop.style.transform=`translate(${-scrollLeft}px, ${-scrollTop}px)`},onMouseDown=e=>{selectionStore._updateSeletion();const mouseup=()=>{selectionStore._updateSeletion(),document.removeEventListener("mouseup",mouseup)};document.addEventListener("mouseup",mouseup);const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_8__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_8__.Gr)(pointed,e)},onMouseUp=e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_8__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_8__.Gr)(pointed,e)},onMouseMove=e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_8__.vy)(textarea,backdrop,e);(0,_dom__WEBPACK_IMPORTED_MODULE_8__.NS)(pointed,pointedRef,e)},onMouseLeave=e=>{(0,_dom__WEBPACK_IMPORTED_MODULE_8__.tQ)(pointedRef,e,null)},onClick=e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_8__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_8__.Gr)(pointed,e)},onInput=()=>{selectionStore._updateSeletion()},onCompositionStart=e=>{selectionStore._setComposition(e)},onCompositionUpdate=e=>{selectionStore._setComposition(e)},onCompositionEnd=()=>{selectionStore._setComposition()};return textarea.addEventListener("focus",onFocus),textarea.addEventListener("blur",onBlur),textarea.addEventListener("scroll",onScroll),textarea.addEventListener("mousedown",onMouseDown),textarea.addEventListener("mouseup",onMouseUp),textarea.addEventListener("mousemove",onMouseMove),textarea.addEventListener("mouseleave",onMouseLeave),textarea.addEventListener("click",onClick),textarea.addEventListener("input",onInput),textarea.addEventListener("compositionstart",onCompositionStart),textarea.addEventListener("compositionupdate",onCompositionUpdate),textarea.addEventListener("compositionend",onCompositionEnd),observer.observe(textarea),()=>{textarea.removeEventListener("focus",onFocus),textarea.removeEventListener("blur",onBlur),textarea.removeEventListener("scroll",onScroll),textarea.removeEventListener("mousedown",onMouseDown),textarea.removeEventListener("mouseup",onMouseUp),textarea.removeEventListener("mousemove",onMouseMove),textarea.removeEventListener("mouseleave",onMouseLeave),textarea.removeEventListener("click",onClick),textarea.removeEventListener("input",onInput),textarea.removeEventListener("compositionstart",onCompositionStart),textarea.removeEventListener("compositionupdate",onCompositionUpdate),textarea.removeEventListener("compositionend",onCompositionEnd),observer.disconnect()}}),[]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__.L)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_6__.o],backdrop=backdropRef[_utils__WEBPACK_IMPORTED_MODULE_6__.o];backdrop&&textarea&&(0,_dom__WEBPACK_IMPORTED_MODULE_8__.Ku)(textarea,backdrop,caretColorRef,style)}),[style]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(null!=selectionStart&&null!=selectionEnd&&onSelectionChange)if(focused){const rect=range_at_index__WEBPACK_IMPORTED_MODULE_3___default()(backdropRef[_utils__WEBPACK_IMPORTED_MODULE_6__.o],selectionStart,selectionStart+1).getBoundingClientRect();onSelectionChange({focused:!0,top:rect.top,left:rect.left,height:rect.height,selectionStart,selectionEnd},value)}else onSelectionChange({focused:!1,selectionStart,selectionEnd},value)}),[focused,selectionStart,selectionEnd]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_6__.o];autoHeight&&textarea&&(textarea.style.height="auto",textarea.style.height=`${textarea.scrollHeight}px`)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{let w=totalWidth,h=totalHeight;return style&&((0,_dom__WEBPACK_IMPORTED_MODULE_8__.Fx)(style.width)&&(w=style.width),(0,_dom__WEBPACK_IMPORTED_MODULE_8__.Fx)(style.height)&&(h=style.height)),{display:"inline-block",position:"relative",width:w,height:h}}),[totalWidth,totalHeight,style]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{const s={position:"absolute",overflow:"hidden",top:0,left:0,width:totalWidth,height:totalHeight};return style?(["background","backgroundColor"].forEach((k=>{style[k]&&(s[k]=style[k])})),s):s}),[totalWidth,totalHeight,style]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{ref:backdropRef,"aria-hidden":!0,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({width,transform:"translate(0px, 0px)",pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",boxSizing:"content-box",textSizeAdjust:"100%",WebkitTextSizeAdjust:"100%"})),[width]),onClick:_dom__WEBPACK_IMPORTED_MODULE_8__.UW,onMouseDown:_dom__WEBPACK_IMPORTED_MODULE_8__.UW,onMouseUp:_dom__WEBPACK_IMPORTED_MODULE_8__.UW,onMouseOver:_dom__WEBPACK_IMPORTED_MODULE_8__.UW,onMouseOut:_dom__WEBPACK_IMPORTED_MODULE_8__.UW,onMouseMove:_dom__WEBPACK_IMPORTED_MODULE_8__.UW,children:[(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>render?render(value):value),[value,render]),CARET_DETECTOR]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{...props,ref:textAreaRef,value,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({...style,background:"transparent",margin:0,position:"absolute",...!isSizeCalculated&&{position:void 0,verticalAlign:"top"}})),[style,isSizeCalculated]),onKeyDown:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{e.nativeEvent.isComposing||229===e.nativeEvent.keyCode||(null==onKeyDown||onKeyDown(e),selectionStore._updateSeletion())}),[onKeyDown])})]})}));try{RichTextarea.displayName="RichTextarea",RichTextarea.__docgenInfo={description:"Textarea component with some extra props. See {@link RichTextareaProps} and {@link RichTextareaHandle}.",displayName:"RichTextarea",props:{children:{defaultValue:null,description:"Render function to create customized view from value.\n\nThis function should return ReactNodes which texts are positioned the same as textarea (see examples for detailed usage).\n\nOn the rendered nodes, currently limited event handlers will work.\n- `onClick`\n- `onMouseOver`\n- `onMouseOut`\n- `onMouseMove`\n- `onMouseDown`\n- `onMouseUp`\n@defaultValue undefined",name:"children",required:!1,type:{name:"Renderer"}},value:{defaultValue:null,description:"Same as original but only string",name:"value",required:!0,type:{name:"string"}},autoHeight:{defaultValue:null,description:"If true, textarea height is automatically resized and height of style prop does not work.\nSet `maxHeight` to style prop if you need limit.\nSet `rows` prop to 1 if you need single-line textarea.\n@defaultValue undefined",name:"autoHeight",required:!1,type:{name:"boolean"}},onSelectionChange:{defaultValue:null,description:"Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.\n@defaultValue undefined",name:"onSelectionChange",required:!1,type:{name:"(pos: CaretPosition, value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/textarea.tsx#RichTextarea"]={docgenInfo:RichTextarea.__docgenInfo,name:"RichTextarea",path:"src/textarea.tsx#RichTextarea"})}catch(__react_docgen_typescript_loader_error){}},"./src/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/useStatic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useStatic});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils.ts");const useStatic=init=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref[_utils__WEBPACK_IMPORTED_MODULE_1__.o]||(ref[_utils__WEBPACK_IMPORTED_MODULE_1__.o]=init())}},"./src/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>refKey});const refKey="current"}}]);