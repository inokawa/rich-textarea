"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[657],{"./stories/examples/Emoji.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Emoji:()=>Emoji,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _a,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/index.js")),react_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-dom/index.js"),_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/textarea.tsx"),node_emoji__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/node-emoji/index.js"),node_emoji__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(node_emoji__WEBPACK_IMPORTED_MODULE_4__);const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_5__.p},style={width:"400px",height:"300px"},MENTION_REG=/:([\-+\w]*)$/,Menu=({chars,index,top,left,complete})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{position:"fixed",top,left,fontSize:"16px",border:"solid 1px gray",borderRadius:"3px",background:"white",cursor:"pointer"},children:chars.map(((c,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{padding:"4px",...index===i&&{color:"white",background:"#2A6AD3"}},onMouseDown:e=>{e.preventDefault(),complete(i)},children:`${c.emoji} ${c.key}`},c.key)))}),Emoji={render:()=>{var _a2;const ref=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Type : to show suggestions 💪\n\n"),[pos,setPos]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),[index,setIndex]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),targetText=pos?text.slice(0,pos.caret):text,match=pos&&targetText.match(MENTION_REG),name=null!=(_a2=null==match?void 0:match[1])?_a2:"",chars=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>node_emoji__WEBPACK_IMPORTED_MODULE_4___default().search(name).slice(0,8)),[name]),complete=i=>{if(!ref.current||!pos)return;const selected=chars[i].emoji;ref.current.setRangeText(`${selected} `,pos.caret-name.length-1,pos.caret,"end"),setPos(null),setIndex(0)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.p,{ref,style,onChange:e=>setText(e.target.value),value:text,onKeyDown:e=>{if(pos&&chars.length)switch(e.code){case"ArrowUp":e.preventDefault();const nextIndex=index<=0?chars.length-1:index-1;setIndex(nextIndex);break;case"ArrowDown":e.preventDefault();const prevIndex=index>=chars.length-1?0:index+1;setIndex(prevIndex);break;case"Enter":e.preventDefault(),complete(index);break;case"Escape":e.preventDefault(),setPos(null),setIndex(0)}},onSelectionChange:r=>{r.focused&&MENTION_REG.test(text.slice(0,r.selectionStart))?(setPos({top:r.top+r.height,left:r.left,caret:r.selectionStart}),setIndex(0)):(setPos(null),setIndex(0))}}),pos&&(0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Menu,{top:pos.top,left:pos.left,chars,index,complete}),document.body)]})}};Emoji.parameters={...Emoji.parameters,storySource:{source:'{\n  render: () => {\n    const ref = useRef<RichTextareaHandle>(null);\n    const [text, setText] = useState(`Type : to show suggestions 💪\\n\\n`);\n    const [pos, setPos] = useState<{\n      top: number;\n      left: number;\n      caret: number;\n    } | null>(null);\n    const [index, setIndex] = useState<number>(0);\n    const targetText = pos ? text.slice(0, pos.caret) : text;\n    const match = pos && targetText.match(MENTION_REG);\n    const name = match?.[1] ?? "";\n    const chars = useMemo(() => emoji.search(name).slice(0, MAX_CHARS), [name]);\n    const complete = (i: number) => {\n      if (!ref.current || !pos) return;\n      const selected = chars[i].emoji;\n      ref.current.setRangeText(`${selected} `, pos.caret - name.length - 1, pos.caret, "end");\n      setPos(null);\n      setIndex(0);\n    };\n    return <div>\n        <RichTextarea ref={ref} style={style} onChange={e => setText(e.target.value)} value={text} onKeyDown={e => {\n        if (!pos || !chars.length) return;\n        switch (e.code) {\n          case "ArrowUp":\n            e.preventDefault();\n            const nextIndex = index <= 0 ? chars.length - 1 : index - 1;\n            setIndex(nextIndex);\n            break;\n          case "ArrowDown":\n            e.preventDefault();\n            const prevIndex = index >= chars.length - 1 ? 0 : index + 1;\n            setIndex(prevIndex);\n            break;\n          case "Enter":\n            e.preventDefault();\n            complete(index);\n            break;\n          case "Escape":\n            e.preventDefault();\n            setPos(null);\n            setIndex(0);\n            break;\n          default:\n            break;\n        }\n      }} onSelectionChange={r => {\n        if (r.focused && MENTION_REG.test(text.slice(0, r.selectionStart))) {\n          setPos({\n            top: r.top + r.height,\n            left: r.left,\n            caret: r.selectionStart\n          });\n          setIndex(0);\n        } else {\n          setPos(null);\n          setIndex(0);\n        }\n      }} />\n        {pos && createPortal(<Menu top={pos.top} left={pos.left} chars={chars} index={index} complete={complete} />, document.body)}\n      </div>;\n  }\n}',...null==(_a=Emoji.parameters)?void 0:_a.storySource}}},"./src/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,G6:()=>isSafari,Gr:()=>dispatchClonedMouseEvent,Ku:()=>syncBackdropStyle,NS:()=>dispatchMouseMoveEvent,RH:()=>getHorizontalPadding,UW:()=>stopPropagation,aY:()=>getVerticalPadding,tQ:()=>dispatchMouseOutEvent,vy:()=>getPointedElement});const isSafari=()=>{const ua=navigator.userAgent.toLowerCase();return ua.indexOf("safari")>-1&&ua.indexOf("chrome")<=-1},TEXT_STYLE_KEYS=["direction","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","margin","marginTop","marginBottom","marginLeft","marginRight","border","borderWidth","borderTopWidth","borderBottomWidth","borderLeftWidth","borderRightWidth","borderStyle","borderTopStyle","borderBottomStyle","borderLeftStyle","borderRightStyle","fontSize","fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSizeAdjust","textAlign","textTransform","textIndent","letterSpacing","wordSpacing","lineHeight","whiteSpace","wordBreak","overflowWrap","tabSize","MozTabSize"],getPropertyValue=(style,key)=>style.getPropertyValue(key),setProperty=(style,key,value)=>{style.setProperty(key,value)},getValueFromStyle=(style,key)=>{const value=getPropertyValue(style,key);return value?parseInt(value,10):0},getStyle=e=>getComputedStyle(e),getVerticalPadding=style=>getValueFromStyle(style,"padding-top")+getValueFromStyle(style,"padding-bottom")+getValueFromStyle(style,"border-top")+getValueFromStyle(style,"border-bottom"),getHorizontalPadding=style=>getValueFromStyle(style,"padding-left")+getValueFromStyle(style,"padding-right")+getValueFromStyle(style,"border-left")+getValueFromStyle(style,"border-right"),getPointedElement=(textarea,backdrop,e)=>{const textareaStyle=textarea.style,backdropStyle=backdrop.style,prev=getPropertyValue(textareaStyle,"pointer-events"),backPrev=getPropertyValue(backdropStyle,"pointer-events");setProperty(textareaStyle,"pointer-events","none"),setProperty(backdropStyle,"pointer-events","auto");const pointed=document.elementFromPoint(e.clientX,e.clientY);return setProperty(textareaStyle,"pointer-events",prev),setProperty(backdropStyle,"pointer-events",backPrev),isInsideBackdrop(pointed,backdrop)?pointed:null},isInsideBackdrop=(pointed,backdrop)=>!!pointed&&backdrop!==pointed&&backdrop.contains(pointed),dispatchMouseEvent=(target,type,init)=>{target.dispatchEvent(new MouseEvent(type,init))},dispatchClonedMouseEvent=(pointed,e)=>{dispatchMouseEvent(pointed,e.type,e)},dispatchMouseMoveEvent=(pointed,prevPointed,e)=>{pointed&&dispatchClonedMouseEvent(pointed,e),prevPointed.current!==pointed&&(dispatchMouseOutEvent(prevPointed,e,pointed),pointed&&dispatchMouseEvent(pointed,"mouseover",e))},dispatchMouseOutEvent=(prevPointed,e,pointed)=>{prevPointed.current&&dispatchMouseEvent(prevPointed.current,"mouseout",e),prevPointed.current=pointed},stopPropagation=event=>{event.stopPropagation()},syncBackdropStyle=(textarea,backdrop,caretColorRef,style)=>{const computedTextAreaStyle=getStyle(textarea),textareaStyle=textarea.style,backdropStyle=backdrop.style;caretColorRef.current||(caretColorRef.current=getPropertyValue(computedTextAreaStyle,"color")),TEXT_STYLE_KEYS.forEach((k=>{backdropStyle[k]=computedTextAreaStyle[k]})),textareaStyle.color=backdropStyle.borderColor="transparent",textareaStyle.caretColor=(null==style?void 0:style.caretColor)||caretColorRef.current}},"./src/selection.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>initSelectionStore});const NOOP=()=>{},initSelectionStore=ref=>{let listener=NOOP,cache=[null,null],compositionEvent=null;const handle={_subscribe:callback=>(listener=callback,()=>{listener=NOOP}),_update(){setTimeout(listener)},_setComposition(comp){compositionEvent=comp},_getSelectionStart(){const el=ref.current;if(!el)return null;let pos=el.selectionStart;return compositionEvent&&(pos=Math.min(pos,el.selectionEnd-compositionEvent.data.length)),pos},_getSelectionEnd(){const el=ref.current;if(!el)return null;let pos=el.selectionEnd;return compositionEvent&&(pos=Math.min(pos,el.selectionStart+compositionEvent.data.length)),pos},_getSelection(){const selectionStart=handle._getSelectionStart(),selectionEnd=handle._getSelectionEnd();return cache[0]===selectionStart&&cache[1]===selectionEnd||(cache=[selectionStart,selectionEnd]),cache}};return handle}},"./src/textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>RichTextarea});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/use-sync-external-store/shim/index.js"),range_at_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/range-at-index/build/index.js"),range_at_index__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(range_at_index__WEBPACK_IMPORTED_MODULE_3__),_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/dom.ts"),_selection__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/selection.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/useIsomorphicLayoutEffect.ts");const CARET_DETECTOR=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"transparent"},children:"​"}),RichTextarea=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({children:render,value,autoHeight,style,onScroll,onInput,onCompositionStart,onCompositionUpdate,onCompositionEnd,onKeyDown,onClick,onMouseDown,onMouseUp,onMouseMove,onMouseLeave,onFocus,onBlur,onSelectionChange,...props},propRef)=>{const textAreaRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),backdropRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[[left,top],setPos]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([0,0]),[[width,height,hPadding,vPadding],setRect]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([0,0,0,0]),[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),caretColorRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),pointedRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),selectionStore=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((()=>(0,_selection__WEBPACK_IMPORTED_MODULE_4__.n)(textAreaRef)))[0],[selectionStart,selectionEnd]=(0,use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore)(selectionStore._subscribe,selectionStore._getSelection,selectionStore._getSelection),totalWidth=width+hPadding,totalHeight=height+vPadding,isSizeCalculated=!!(totalWidth+totalHeight);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(propRef,(()=>{const el=textAreaRef.current,overrides={get selectionStart(){const sel=selectionStore._getSelectionStart();return null==sel?0:sel},get selectionEnd(){const sel=selectionStore._getSelectionEnd();return null==sel?0:sel},setSelectionRange(...args){el.focus(),el.setSelectionRange(...args)},setRangeText(text,start,end,preserve){el.setRangeText?el.setRangeText(text,start,end,preserve):(el.focus(),el.selectionStart=start,el.selectionEnd=end,document.execCommand("insertText",!1,text)),el.dispatchEvent(new Event("input",{bubbles:!0}))}};return new Proxy(el,{get(target,prop){if(overrides[prop])return overrides[prop];const value2=target[prop];return"function"==typeof value2?value2.bind(target):value2}})}),[textAreaRef]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__.L)((()=>{const textarea=textAreaRef.current;if(!textarea)return;const observer=new ResizeObserver((([entry])=>{const{contentRect,borderBoxSize}=entry;if(borderBoxSize&&borderBoxSize[0])return void setRect([contentRect.width,contentRect.height,borderBoxSize[0].inlineSize-contentRect.width,borderBoxSize[0].blockSize-contentRect.height]);const style2=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.C2)(textarea);setRect([contentRect.width,contentRect.height,(0,_dom__WEBPACK_IMPORTED_MODULE_6__.RH)(style2),(0,_dom__WEBPACK_IMPORTED_MODULE_6__.aY)(style2)])}));return observer.observe(textarea),()=>{observer.disconnect()}}),[]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__.L)((()=>{const textarea=textAreaRef.current,backdrop=backdropRef.current;backdrop&&textarea&&(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Ku)(textarea,backdrop,caretColorRef,style)}),[style]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(null!=selectionStart&&null!=selectionEnd&&onSelectionChange)if(focused){const rect=range_at_index__WEBPACK_IMPORTED_MODULE_3___default()(backdropRef.current,selectionStart,selectionStart+1).getBoundingClientRect();onSelectionChange({focused:!0,top:rect.top,left:rect.left,height:rect.height,selectionStart,selectionEnd},value)}else onSelectionChange({focused:!1,selectionStart,selectionEnd},value)}),[focused,selectionStart,selectionEnd]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const textarea=textAreaRef.current;autoHeight&&textarea&&(textarea.style.height="auto",textarea.style.height=`${textarea.scrollHeight}px`)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{let w=totalWidth,h=totalHeight;return style&&("string"==typeof style.width&&style.width.endsWith("%")&&(w=style.width),"string"==typeof style.height&&style.height.endsWith("%")&&(h=style.height)),{display:"inline-block",position:"relative",width:w,height:h}}),[totalWidth,totalHeight,style]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{const s={position:"absolute",overflow:"hidden",top:0,left:0,width:totalWidth,height:totalHeight};return style?(["background","backgroundColor"].forEach((k=>{style[k]&&(s[k]=style[k])})),s):s}),[totalWidth,totalHeight,style]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{ref:backdropRef,"aria-hidden":!0,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({width,transform:`translate(${-left}px, ${-top}px)`,pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",textSizeAdjust:"100%",WebkitTextSizeAdjust:"100%"})),[left,top,width]),onClick:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseDown:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseUp:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseOver:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseOut:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,onMouseMove:_dom__WEBPACK_IMPORTED_MODULE_6__.UW,children:[(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>render?render(value):value),[value,render]),CARET_DETECTOR]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{...props,ref:textAreaRef,value,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({...style,background:"transparent",margin:0,position:"absolute",...!isSizeCalculated&&{position:void 0,verticalAlign:"top"}})),[style,isSizeCalculated]),onScroll:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{setPos([e.currentTarget.scrollLeft,e.currentTarget.scrollTop]),null==onScroll||onScroll(e)}),[onScroll]),onInput:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{null==onInput||onInput(e),selectionStore._update()}),[onInput]),onCompositionStart:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{selectionStore._setComposition(e.nativeEvent),null==onCompositionStart||onCompositionStart(e)}),[onCompositionStart]),onCompositionUpdate:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{selectionStore._setComposition(e.nativeEvent),null==onCompositionUpdate||onCompositionUpdate(e)}),[onCompositionUpdate]),onCompositionEnd:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{selectionStore._setComposition(null),null==onCompositionEnd||onCompositionEnd(e)}),[onCompositionEnd]),onKeyDown:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{e.nativeEvent.isComposing||229===e.nativeEvent.keyCode||(null==onKeyDown||onKeyDown(e),selectionStore._update())}),[onKeyDown]),onClick:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{null==onClick||onClick(e);const textarea=textAreaRef.current,backdrop=backdropRef.current;if(!textarea||!backdrop)return;const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Gr)(pointed,e.nativeEvent)}),[onClick]),onMouseDown:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{null==onMouseDown||onMouseDown(e),selectionStore._update();const mouseup=()=>{selectionStore._update(),document.removeEventListener("mouseup",mouseup)};document.addEventListener("mouseup",mouseup);const textarea=textAreaRef.current,backdrop=backdropRef.current;if(!textarea||!backdrop)return;const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Gr)(pointed,e.nativeEvent)}),[onMouseDown]),onMouseUp:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{null==onMouseUp||onMouseUp(e);const textarea=textAreaRef.current,backdrop=backdropRef.current;if(!textarea||!backdrop)return;const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_6__.Gr)(pointed,e.nativeEvent)}),[onMouseUp]),onMouseMove:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{null==onMouseMove||onMouseMove(e);const textarea=textAreaRef.current,backdrop=backdropRef.current;if(!textarea||!backdrop)return;const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_6__.vy)(textarea,backdrop,e);(0,_dom__WEBPACK_IMPORTED_MODULE_6__.NS)(pointed,pointedRef,e.nativeEvent)}),[onMouseMove]),onMouseLeave:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{null==onMouseLeave||onMouseLeave(e),(0,_dom__WEBPACK_IMPORTED_MODULE_6__.tQ)(pointedRef,e.nativeEvent,null)}),[onMouseLeave]),onFocus:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{null==onFocus||onFocus(e),setFocused(!0)}),[onFocus]),onBlur:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{null==onBlur||onBlur(e),setFocused(!1)}),[onBlur])})]})}));try{RichTextarea.displayName="RichTextarea",RichTextarea.__docgenInfo={description:"Textarea component with some extra props. See {@link RichTextareaProps} and {@link RichTextareaHandle}.",displayName:"RichTextarea",props:{children:{defaultValue:null,description:"Render function to create customized view from value.\n\nThis function should return ReactNodes which texts are positioned the same as textarea (see examples for detailed usage).\n\nOn the rendered nodes, currently limited event handlers will work.\n- `onClick`\n- `onMouseOver`\n- `onMouseOut`\n- `onMouseMove`\n- `onMouseDown`\n- `onMouseUp`\n@defaultValue undefined",name:"children",required:!1,type:{name:"Renderer"}},value:{defaultValue:null,description:"Same as original but only string",name:"value",required:!0,type:{name:"string"}},autoHeight:{defaultValue:null,description:"If true, textarea height is automatically resized and height of style prop does not work. Set `maxHeight` to style prop if you need limit.\n@defaultValue undefined",name:"autoHeight",required:!1,type:{name:"boolean"}},onSelectionChange:{defaultValue:null,description:"Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.\n@defaultValue undefined",name:"onSelectionChange",required:!1,type:{name:"(pos: CaretPosition, value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/textarea.tsx#RichTextarea"]={docgenInfo:RichTextarea.__docgenInfo,name:"RichTextarea",path:"src/textarea.tsx#RichTextarea"})}catch(__react_docgen_typescript_loader_error){}},"./src/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect}}]);