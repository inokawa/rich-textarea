"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[518],{"./src/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Fx:()=>hasPercentageUnit,G6:()=>isSafari,Gr:()=>dispatchClonedMouseEvent,Ku:()=>syncBackdropStyle,NS:()=>dispatchMouseMoveEvent,RH:()=>getHorizontalPadding,UW:()=>stopPropagation,aY:()=>getVerticalPadding,tQ:()=>dispatchMouseOutEvent,vy:()=>getPointedElement});const isSafari=()=>{const ua=navigator.userAgent.toLowerCase();return ua.indexOf("safari")>-1&&ua.indexOf("chrome")<=-1},TEXT_STYLE_KEYS=["direction","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","margin","marginTop","marginBottom","marginLeft","marginRight","border","borderWidth","borderTopWidth","borderBottomWidth","borderLeftWidth","borderRightWidth","borderStyle","borderTopStyle","borderBottomStyle","borderLeftStyle","borderRightStyle","fontSize","fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSizeAdjust","textAlign","textTransform","textIndent","letterSpacing","wordSpacing","lineHeight","whiteSpace","wordBreak","overflowWrap","tabSize","MozTabSize"],getPropertyValue=(style,key)=>style.getPropertyValue(key),setProperty=(style,key,value)=>{style.setProperty(key,value)},getValueFromStyle=(style,key)=>{const value=getPropertyValue(style,key);return value?parseInt(value,10):0},getStyle=e=>getComputedStyle(e),hasPercentageUnit=widthOrHeight=>"string"==typeof widthOrHeight&&widthOrHeight.endsWith("%"),getVerticalPadding=style=>getValueFromStyle(style,"padding-top")+getValueFromStyle(style,"padding-bottom")+getValueFromStyle(style,"border-top")+getValueFromStyle(style,"border-bottom"),getHorizontalPadding=style=>getValueFromStyle(style,"padding-left")+getValueFromStyle(style,"padding-right")+getValueFromStyle(style,"border-left")+getValueFromStyle(style,"border-right"),getPointedElement=(textarea,backdrop,e)=>{const textareaStyle=textarea.style,backdropStyle=backdrop.style,prev=getPropertyValue(textareaStyle,"pointer-events"),backPrev=getPropertyValue(backdropStyle,"pointer-events");setProperty(textareaStyle,"pointer-events","none"),setProperty(backdropStyle,"pointer-events","auto");const pointed=document.elementFromPoint(e.clientX,e.clientY);return setProperty(textareaStyle,"pointer-events",prev),setProperty(backdropStyle,"pointer-events",backPrev),isInsideBackdrop(pointed,backdrop)?pointed:null},isInsideBackdrop=(pointed,backdrop)=>!!pointed&&backdrop!==pointed&&backdrop.contains(pointed),dispatchMouseEvent=(target,type,init)=>{target.dispatchEvent(new MouseEvent(type,init))},dispatchClonedMouseEvent=(pointed,e)=>{dispatchMouseEvent(pointed,e.type,e)},dispatchMouseMoveEvent=(pointed,prevPointed,e)=>{pointed&&dispatchClonedMouseEvent(pointed,e),prevPointed.current!==pointed&&(dispatchMouseOutEvent(prevPointed,e,pointed),pointed&&dispatchMouseEvent(pointed,"mouseover",e))},dispatchMouseOutEvent=(prevPointed,e,pointed)=>{prevPointed.current&&dispatchMouseEvent(prevPointed.current,"mouseout",e),prevPointed.current=pointed},stopPropagation=event=>{event.stopPropagation()},syncBackdropStyle=(textarea,backdrop,caretColorRef,style)=>{const computedTextAreaStyle=getStyle(textarea),textareaStyle=textarea.style,backdropStyle=backdrop.style;caretColorRef.current||(caretColorRef.current=getPropertyValue(computedTextAreaStyle,"color")),TEXT_STYLE_KEYS.forEach((k=>{backdropStyle[k]=computedTextAreaStyle[k]})),textareaStyle.color=backdropStyle.borderColor="transparent",textareaStyle.caretColor=(null==style?void 0:style.caretColor)||caretColorRef.current}},"./src/selection.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>useStore});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useStore=ref=>{const storeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return storeRef.current||(storeRef.current=(ref=>{const subscribers=new Set;let compositionEvent,cache=[null,null];const handle={_subscribe:cb=>(subscribers.add(cb),()=>{subscribers.delete(cb)}),_updateSeletion(){setTimeout((()=>{subscribers.forEach((cb=>{cb()}))}))},_setComposition(event){compositionEvent=event},_getSelectionStart(){const el=ref.current;if(!el)return null;let pos=el.selectionStart;return compositionEvent&&(pos=Math.min(pos,el.selectionEnd-compositionEvent.data.length)),pos},_getSelectionEnd(){const el=ref.current;if(!el)return null;let pos=el.selectionEnd;return compositionEvent&&(pos=Math.min(pos,el.selectionStart+compositionEvent.data.length)),pos},_getSelection(){const selectionStart=handle._getSelectionStart(),selectionEnd=handle._getSelectionEnd();return cache[0]===selectionStart&&cache[1]===selectionEnd||(cache=[selectionStart,selectionEnd]),cache}};return handle})(ref))}},"./src/textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>RichTextarea});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/use-sync-external-store/shim/index.js"),range_at_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/range-at-index/build/index.js"),range_at_index__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(range_at_index__WEBPACK_IMPORTED_MODULE_3__),_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/dom.ts"),_selection__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/selection.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/useIsomorphicLayoutEffect.ts");const CARET_DETECTOR=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"transparent"},children:"​"}),RichTextarea=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({children:render,value,autoHeight,style,onKeyDown,onSelectionChange,...props},propRef)=>{const textAreaRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),backdropRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[[width,height,hPadding,vPadding],setRect]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([0,0,0,0]),[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),caretColorRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),pointedRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),selectionStore=(0,_selection__WEBPACK_IMPORTED_MODULE_4__.o)(textAreaRef),[selectionStart,selectionEnd]=(0,use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore)(selectionStore._subscribe,selectionStore._getSelection,selectionStore._getSelection),totalWidth=width+hPadding,totalHeight=height+vPadding,isSizeCalculated=!!(totalWidth+totalHeight);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(propRef,(()=>{const el=textAreaRef.current,overrides={get selectionStart(){const sel=selectionStore._getSelectionStart();return null==sel?0:sel},get selectionEnd(){const sel=selectionStore._getSelectionEnd();return null==sel?0:sel},setSelectionRange(...args){el.focus(),el.setSelectionRange(...args)},setRangeText(text,start,end,preserve){el.setRangeText?el.setRangeText(text,start,end,preserve):(el.focus(),el.selectionStart=start,el.selectionEnd=end,document.execCommand("insertText",!1,text)),el.dispatchEvent(new Event("input",{bubbles:!0}))}};return new Proxy(el,{get(target,prop){if(overrides[prop])return overrides[prop];const value2=target[prop];return"function"==typeof value2?value2.bind(target):value2}})}),[textAreaRef]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__.L)((()=>{const textarea=textAreaRef.current,backdrop=backdropRef.current;if(!textarea||!backdrop)return;const observer=new ResizeObserver((([entry])=>{const{contentRect,borderBoxSize}=entry;if(borderBoxSize&&borderBoxSize[0])return void setRect([contentRect.width,contentRect.height,borderBoxSize[0].inlineSize-contentRect.width,borderBoxSize[0].blockSize-contentRect.height]);const style2=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.C2)(textarea);setRect([contentRect.width,contentRect.height,(0,_dom__WEBPACK_IMPORTED_MODULE_6__.RH)(style2),(0,_dom__WEBPACK_IMPORTED_MODULE_6__.aY)(style2)])})),onFocus=()=>{setFocused(!0)},onBlur=()=>{setFocused(!1)},onScroll=()=>{const{scrollTop,scrollLeft}=textarea;backdrop.style.transform=`translate(${-scrollLeft}px, ${-scrollTop}px)`},onMouseDown=e=>{selectionStore._updateSeletion();const mouseup=()=>{selectionStore._updateSeletion(),document.removeEventListener("mouseup",mouseup)};document.addEventListener("mouseup",mouseup);const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Gr)(pointed,e)},onMouseUp=e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Gr)(pointed,e)},onMouseMove=e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.vy)(textarea,backdrop,e);(0,_dom__WEBPACK_IMPORTED_MODULE_6__.NS)(pointed,pointedRef,e)},onMouseLeave=e=>{(0,_dom__WEBPACK_IMPORTED_MODULE_6__.tQ)(pointedRef,e,null)},onClick=e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Gr)(pointed,e)},onInput=()=>{selectionStore._updateSeletion()},onCompositionStart=e=>{selectionStore._setComposition(e)},onCompositionUpdate=e=>{selectionStore._setComposition(e)},onCompositionEnd=()=>{selectionStore._setComposition()};return textarea.addEventListener("focus",onFocus),textarea.addEventListener("blur",onBlur),textarea.addEventListener("scroll",onScroll),textarea.addEventListener("mousedown",onMouseDown),textarea.addEventListener("mouseup",onMouseUp),textarea.addEventListener("mousemove",onMouseMove),textarea.addEventListener("mouseleave",onMouseLeave),textarea.addEventListener("click",onClick),textarea.addEventListener("input",onInput),textarea.addEventListener("compositionstart",onCompositionStart),textarea.addEventListener("compositionupdate",onCompositionUpdate),textarea.addEventListener("compositionend",onCompositionEnd),observer.observe(textarea),()=>{textarea.removeEventListener("focus",onFocus),textarea.removeEventListener("blur",onBlur),textarea.removeEventListener("scroll",onScroll),textarea.removeEventListener("mousedown",onMouseDown),textarea.removeEventListener("mouseup",onMouseUp),textarea.removeEventListener("mousemove",onMouseMove),textarea.removeEventListener("mouseleave",onMouseLeave),textarea.removeEventListener("click",onClick),textarea.removeEventListener("input",onInput),textarea.removeEventListener("compositionstart",onCompositionStart),textarea.removeEventListener("compositionupdate",onCompositionUpdate),textarea.removeEventListener("compositionend",onCompositionEnd),observer.disconnect()}}),[]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__.L)((()=>{const textarea=textAreaRef.current,backdrop=backdropRef.current;backdrop&&textarea&&(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Ku)(textarea,backdrop,caretColorRef,style)}),[style]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(null!=selectionStart&&null!=selectionEnd&&onSelectionChange)if(focused){const rect=range_at_index__WEBPACK_IMPORTED_MODULE_3___default()(backdropRef.current,selectionStart,selectionStart+1).getBoundingClientRect();onSelectionChange({focused:!0,top:rect.top,left:rect.left,height:rect.height,selectionStart,selectionEnd},value)}else onSelectionChange({focused:!1,selectionStart,selectionEnd},value)}),[focused,selectionStart,selectionEnd]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const textarea=textAreaRef.current;autoHeight&&textarea&&(textarea.style.height="auto",textarea.style.height=`${textarea.scrollHeight}px`)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{let w=totalWidth,h=totalHeight;return style&&((0,_dom__WEBPACK_IMPORTED_MODULE_6__.Fx)(style.width)&&(w=style.width),(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Fx)(style.height)&&(h=style.height)),{display:"inline-block",position:"relative",width:w,height:h}}),[totalWidth,totalHeight,style]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{const s={position:"absolute",overflow:"hidden",top:0,left:0,width:totalWidth,height:totalHeight};return style?(["background","backgroundColor"].forEach((k=>{style[k]&&(s[k]=style[k])})),s):s}),[totalWidth,totalHeight,style]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{ref:backdropRef,"aria-hidden":!0,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({width,transform:"translate(0px, 0px)",pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",boxSizing:"content-box",textSizeAdjust:"100%",WebkitTextSizeAdjust:"100%"})),[width]),onClick:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseDown:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseUp:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseOver:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseOut:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseMove:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,children:[(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>render?render(value):value),[value,render]),CARET_DETECTOR]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{...props,ref:textAreaRef,value,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({...style,background:"transparent",margin:0,position:"absolute",...!isSizeCalculated&&{position:void 0,verticalAlign:"top"}})),[style,isSizeCalculated]),onKeyDown:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{e.nativeEvent.isComposing||229===e.nativeEvent.keyCode||(null==onKeyDown||onKeyDown(e),selectionStore._updateSeletion())}),[onKeyDown])})]})}));try{RichTextarea.displayName="RichTextarea",RichTextarea.__docgenInfo={description:"Textarea component with some extra props. See {@link RichTextareaProps} and {@link RichTextareaHandle}.",displayName:"RichTextarea",props:{children:{defaultValue:null,description:"Render function to create customized view from value.\n\nThis function should return ReactNodes which texts are positioned the same as textarea (see examples for detailed usage).\n\nOn the rendered nodes, currently limited event handlers will work.\n- `onClick`\n- `onMouseOver`\n- `onMouseOut`\n- `onMouseMove`\n- `onMouseDown`\n- `onMouseUp`\n@defaultValue undefined",name:"children",required:!1,type:{name:"Renderer"}},value:{defaultValue:null,description:"Same as original but only string",name:"value",required:!0,type:{name:"string"}},autoHeight:{defaultValue:null,description:"If true, textarea height is automatically resized and height of style prop does not work.\nSet `maxHeight` to style prop if you need limit.\nSet `rows` prop to 1 if you need single-line textarea.\n@defaultValue undefined",name:"autoHeight",required:!1,type:{name:"boolean"}},onSelectionChange:{defaultValue:null,description:"Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.\n@defaultValue undefined",name:"onSelectionChange",required:!1,type:{name:"(pos: CaretPosition, value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/textarea.tsx#RichTextarea"]={docgenInfo:RichTextarea.__docgenInfo,name:"RichTextarea",path:"src/textarea.tsx#RichTextarea"})}catch(__react_docgen_typescript_loader_error){}},"./src/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./stories/examples/Textlint.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Textlint:()=>Textlint,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/index.js")),react_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-dom/index.js"),_src__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/textarea.tsx"),_textlint_kernel__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@textlint/kernel/module/src/index.js"),_textlint_textlint_plugin_text__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./node_modules/@textlint/kernel/lib/src/textlint-kernel-interface.js"),__webpack_require__("./node_modules/@textlint/textlint-plugin-text/module/src/index.js")),textlint_rule_sentence_length__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/textlint-rule-sentence-length/lib/sentence-length.js"),textlint_rule_no_nfd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/textlint-rule-no-nfd/lib/textlint-rule-no-nfd.js"),textlint_rule_no_nfd__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(textlint_rule_no_nfd__WEBPACK_IMPORTED_MODULE_8__),_textlint_rule_textlint_rule_no_invalid_control_character__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@textlint-rule/textlint-rule-no-invalid-control-character/lib/textlint-rule-no-invalid-control-character.js"),_textlint_rule_textlint_rule_no_invalid_control_character__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_textlint_rule_textlint_rule_no_invalid_control_character__WEBPACK_IMPORTED_MODULE_9__),textlint_rule_no_zero_width_spaces__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/textlint-rule-no-zero-width-spaces/lib/index.js"),textlint_rule_no_kangxi_radicals__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/textlint-rule-no-kangxi-radicals/lib/index.js");const kernel=new _textlint_kernel__WEBPACK_IMPORTED_MODULE_4__.v8,options={ext:".txt",plugins:[{pluginId:"text",plugin:_textlint_textlint_plugin_text__WEBPACK_IMPORTED_MODULE_6__.Z}],rules:[{ruleId:"sentence-length",rule:textlint_rule_sentence_length__WEBPACK_IMPORTED_MODULE_7__.Z},{ruleId:"no-nfd",rule:textlint_rule_no_nfd__WEBPACK_IMPORTED_MODULE_8___default()},{ruleId:"no-invalid-control-character",rule:_textlint_rule_textlint_rule_no_invalid_control_character__WEBPACK_IMPORTED_MODULE_9___default()},{ruleId:"no-zero-width-spaces",rule:textlint_rule_no_zero_width_spaces__WEBPACK_IMPORTED_MODULE_10__.Z},{ruleId:"no-kangxi-radicals",rule:textlint_rule_no_kangxi_radicals__WEBPACK_IMPORTED_MODULE_11__.ZP}]},__WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_12__.p},style={width:"300px",height:"200px"},Mark=({token:{column,message,fix},children})=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),[tooltip,setTooltip]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{ref,style:{textDecoration:"underline dashed red"},onMouseOver:e=>{if(!ref.current)return;const rect=ref.current.getBoundingClientRect();setTooltip({top:rect.top-2*rect.height,left:rect.left,description:message})},onMouseOut:()=>setTooltip(null),children:[children,tooltip&&(0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{position:"fixed",top:tooltip.top,left:tooltip.left,background:"white",fontSize:16,padding:2,border:"solid 1px gray"},children:tooltip.description}),document.body)]})},Textlint={render:()=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("⾼齢者の活躍と地域における⽀えあいの推進。\nホ゜ケット エンシ゛ン\nテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト"),[tokens,setTokens]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{(async()=>{const res=await kernel.lintText(text,options);setTokens(res.messages)})()}),[text]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{marginTop:16},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_12__.p,{style,onChange:e=>setText(e.target.value),value:text,children:v=>{if(!tokens.length)return v;const nodes=[],tokensByLine=tokens.reduce(((acc,t)=>(acc[t.line]||(acc[t.line]=[]),acc[t.line].push(t),acc)),{});return v.split("\n").forEach(((l,i)=>{let res=[l];if(tokensByLine[i+1]){const texts=[];let prevEnd=0,prevStart=0;for(const token of tokensByLine[i+1]){const start=token.column-1,end=start+1;texts.push(l.slice(prevEnd,start)),texts.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Mark,{token,children:l.slice(start,end)},start)),prevEnd=end,prevStart=start}texts.push(l.slice(prevEnd)),res=texts}res.push(" "),nodes.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:res},i))})),nodes}})})}};Textlint.parameters={...Textlint.parameters,docs:{...Textlint.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [text, setText] = useState("\\u2FBC\\u9F62\\u8005\\u306E\\u6D3B\\u8E8D\\u3068\\u5730\\u57DF\\u306B\\u304A\\u3051\\u308B\\u2F40\\u3048\\u3042\\u3044\\u306E\\u63A8\\u9032\\u3002\\n\\u30DB\\u309C\\u30B1\\u30C3\\u30C8 \\u30A8\\u30F3\\u30B7\\u309B\\u30F3\\n\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8\\u30C6\\u30B9\\u30C8");\n    const [tokens, setTokens] = useState([]);\n    useEffect(() => {\n      (async () => {\n        const res = await kernel.lintText(text, options);\n        setTokens(res.messages);\n      })();\n    }, [text]);\n    return /* @__PURE__ */jsx("div", {\n      style: {\n        marginTop: 16\n      },\n      children: /* @__PURE__ */jsx(RichTextarea, {\n        style,\n        onChange: e => setText(e.target.value),\n        value: text,\n        children: v => {\n          if (!tokens.length) return v;\n          const nodes = [];\n          const tokensByLine = tokens.reduce((acc, t) => {\n            if (!acc[t.line]) acc[t.line] = [];\n            acc[t.line].push(t);\n            return acc;\n          }, {});\n          v.split("\\n").forEach((l, i) => {\n            let res = [l];\n            if (tokensByLine[i + 1]) {\n              const texts = [];\n              let prevEnd = 0;\n              let prevStart = 0;\n              for (const token of tokensByLine[i + 1]) {\n                const start = token.column - 1;\n                const end = start + 1;\n                texts.push(l.slice(prevEnd, start));\n                texts.push( /* @__PURE__ */jsx(Mark, {\n                  token,\n                  children: l.slice(start, end)\n                }, start));\n                prevEnd = end;\n                prevStart = start;\n              }\n              texts.push(l.slice(prevEnd));\n              res = texts;\n            }\n            res.push(" ");\n            nodes.push( /* @__PURE__ */jsx("div", {\n              children: res\n            }, i));\n          });\n          return nodes;\n        }\n      })\n    });\n  }\n}',...Textlint.parameters?.docs?.source}}}}}]);