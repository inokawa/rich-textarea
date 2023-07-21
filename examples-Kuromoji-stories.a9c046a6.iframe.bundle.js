"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[103],{"./stories/examples/Kuromoji.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Kuromoji:()=>Kuromoji,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _a,_b,_c,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-dom/index.js"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/textarea.tsx"),kuromojin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/kuromojin/lib/index.js");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_4__.p},style={width:"400px",height:"400px"},Mark=({token:{pos,pos_detail_1,pos_detail_2,pos_detail_3,surface_form},children})=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[tooltip,setTooltip]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),color="名詞"===pos?"rgba(255, 0, 0, 0.2)":"動詞"===pos?"rgba(0, 255, 0, 0.2)":"形容詞"===pos?"rgba(0, 0, 255, 0.2)":"副詞"===pos?"rgba(255, 0, 255, 0.2)":"助詞"===pos?"rgba(0, 255, 255, 0.2)":"助動詞"===pos?"rgba(255, 255, 0, 0.2)":void 0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{ref,style:{position:"relative",background:color,outline:"solid 1px lightgray"},onMouseOver:e=>{if(!ref.current)return;const rect=ref.current.getBoundingClientRect();setTooltip({top:rect.top-2*rect.height,left:rect.left,description:`${surface_form}: ${pos} | ${pos_detail_1} | ${pos_detail_2} | ${pos_detail_3}`})},onMouseOut:()=>setTooltip(null),children:[children,tooltip&&(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{position:"fixed",top:tooltip.top,left:tooltip.left,background:"white",fontSize:16,padding:2,border:"solid 1px gray"},children:tooltip.description}),document.body)]})},Kuromoji={render:()=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("すもももももももものうち。\n\n吾輩 （ わがはい ） は猫である。名前はまだ無い。\n\nあのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。\n\n山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。"),[tokenizer,setTokenizer]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(async()=>{const tokenizer2=await(0,kuromojin__WEBPACK_IMPORTED_MODULE_3__.$U)({dicPath:"/rich-textarea/dict"});setTokenizer(tokenizer2)})()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{marginTop:16},children:[!tokenizer&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"Loading dictionaries"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.p,{style,onChange:e=>setText(e.target.value),value:text,children:v=>{if(!tokenizer)return v;const tokens=tokenizer.tokenize(text),nodes=[];for(const token of tokens)nodes.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Mark,{token,children:token.surface_form},token.word_position));return nodes}})]})}};Kuromoji.parameters={...Kuromoji.parameters,docs:{...null==(_a=Kuromoji.parameters)?void 0:_a.docs,source:{originalSource:'{\n  render: () => {\n    const [text, setText] = useState("すもももももももものうち。\\n\\n吾輩 （ わがはい ） は猫である。名前はまだ無い。\\n\\nあのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。\\n\\n山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。");\n    const [tokenizer, setTokenizer] = useState<Tokenizer | null>(null);\n    useEffect(() => {\n      (async () => {\n        const tokenizer = await getTokenizer({\n          dicPath: process.env.STORYBOOK_DEPLOY ? "/rich-textarea/dict" : "/dict"\n        });\n        setTokenizer(tokenizer);\n      })();\n    }, []);\n    return <div style={{\n      marginTop: 16\n    }}>\n        {!tokenizer && <div>{"Loading dictionaries"}</div>}\n        <RichTextarea style={style} onChange={e => setText(e.target.value)} value={text}>\n          {v => {\n          if (!tokenizer) return v;\n          const tokens = tokenizer.tokenize(text);\n          const nodes: React.ReactElement[] = [];\n          for (const token of tokens) {\n            nodes.push(<Mark key={token.word_position} token={token}>\n                  {token.surface_form}\n                </Mark>);\n          }\n          return nodes;\n        }}\n        </RichTextarea>\n      </div>;\n  }\n}',...null==(_c=null==(_b=Kuromoji.parameters)?void 0:_b.docs)?void 0:_c.source}}}},"./src/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Fx:()=>hasPercentageUnit,G6:()=>isSafari,Gr:()=>dispatchClonedMouseEvent,Ku:()=>syncBackdropStyle,NS:()=>dispatchMouseMoveEvent,RH:()=>getHorizontalPadding,UW:()=>stopPropagation,aY:()=>getVerticalPadding,tQ:()=>dispatchMouseOutEvent,vy:()=>getPointedElement,xz:()=>setEventListener});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils.tsx");const isSafari=()=>{const ua=navigator.userAgent.toLowerCase();return ua.indexOf("safari")>-1&&ua.indexOf("chrome")<=-1},TEXT_STYLE_KEYS=["direction","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","margin","marginTop","marginBottom","marginLeft","marginRight","border","borderWidth","borderTopWidth","borderBottomWidth","borderLeftWidth","borderRightWidth","borderStyle","borderTopStyle","borderBottomStyle","borderLeftStyle","borderRightStyle","fontSize","fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSizeAdjust","textAlign","textTransform","textIndent","letterSpacing","wordSpacing","lineHeight","whiteSpace","wordBreak","overflowWrap","tabSize","MozTabSize"],getPropertyValue=(style,key)=>style.getPropertyValue(key),setProperty=(style,key,value)=>{style.setProperty(key,value)},getValueFromStyle=(style,key)=>{const value=getPropertyValue(style,key);return value?parseInt(value,10):0},getStyle=e=>getComputedStyle(e),hasPercentageUnit=widthOrHeight=>"string"==typeof widthOrHeight&&widthOrHeight.endsWith("%"),getVerticalPadding=style=>getValueFromStyle(style,"padding-top")+getValueFromStyle(style,"padding-bottom")+getValueFromStyle(style,"border-top")+getValueFromStyle(style,"border-bottom"),getHorizontalPadding=style=>getValueFromStyle(style,"padding-left")+getValueFromStyle(style,"padding-right")+getValueFromStyle(style,"border-left")+getValueFromStyle(style,"border-right"),getPointedElement=(textarea,backdrop,e)=>{const textareaStyle=textarea.style,backdropStyle=backdrop.style,prev=getPropertyValue(textareaStyle,"pointer-events"),backPrev=getPropertyValue(backdropStyle,"pointer-events");setProperty(textareaStyle,"pointer-events","none"),setProperty(backdropStyle,"pointer-events","auto");const pointed=document.elementFromPoint(e.clientX,e.clientY);return setProperty(textareaStyle,"pointer-events",prev),setProperty(backdropStyle,"pointer-events",backPrev),isInsideBackdrop(pointed,backdrop)?pointed:null},isInsideBackdrop=(pointed,backdrop)=>!!pointed&&backdrop!==pointed&&backdrop.contains(pointed),dispatchMouseEvent=(target,type,init)=>{target.dispatchEvent(new MouseEvent(type,init))},dispatchClonedMouseEvent=(pointed,e)=>{dispatchMouseEvent(pointed,e.type,e)},dispatchMouseMoveEvent=(pointed,prevPointed,e)=>{pointed&&dispatchClonedMouseEvent(pointed,e),prevPointed[_utils__WEBPACK_IMPORTED_MODULE_0__.o]!==pointed&&(dispatchMouseOutEvent(prevPointed,e,pointed),pointed&&dispatchMouseEvent(pointed,"mouseover",e))},dispatchMouseOutEvent=(prevPointed,e,pointed)=>{prevPointed[_utils__WEBPACK_IMPORTED_MODULE_0__.o]&&dispatchMouseEvent(prevPointed[_utils__WEBPACK_IMPORTED_MODULE_0__.o],"mouseout",e),prevPointed[_utils__WEBPACK_IMPORTED_MODULE_0__.o]=pointed},stopPropagation=event=>{event.stopPropagation()},syncBackdropStyle=(textarea,backdrop,caretColorRef,style)=>{const computedTextAreaStyle=getStyle(textarea),textareaStyle=textarea.style,backdropStyle=backdrop.style;caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]||(caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]=getPropertyValue(computedTextAreaStyle,"color")),TEXT_STYLE_KEYS.forEach((k=>{backdropStyle[k]=computedTextAreaStyle[k]})),textareaStyle.color=backdropStyle.borderColor="transparent",textareaStyle.caretColor=(null==style?void 0:style.caretColor)||caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]},setEventListener=(el,key,cb)=>(el.addEventListener(key,cb),()=>{el.removeEventListener(key,cb)})},"./src/selection.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>initSelectionStore});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils.tsx");const initSelectionStore=(ref,onSelectionUpdate)=>{let compositionEvent,cache=[null,null];const handle={_updateSeletion(){setTimeout((()=>{onSelectionUpdate((()=>{const selectionStart=handle._getSelectionStart(),selectionEnd=handle._getSelectionEnd();return cache[0]===selectionStart&&cache[1]===selectionEnd||(cache=[selectionStart,selectionEnd]),cache})())}))},_setComposition(event){compositionEvent=event},_getSelectionStart(){const el=ref[_utils__WEBPACK_IMPORTED_MODULE_0__.o];if(!el)return null;let pos=el.selectionStart;return compositionEvent&&(pos=Math.min(pos,el.selectionEnd-compositionEvent.data.length)),pos},_getSelectionEnd(){const el=ref[_utils__WEBPACK_IMPORTED_MODULE_0__.o];if(!el)return null;let pos=el.selectionEnd;return compositionEvent&&(pos=Math.min(pos,el.selectionStart+compositionEvent.data.length)),pos}};return handle}},"./src/textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>RichTextarea});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),range_at_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/range-at-index/build/index.js"),range_at_index__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(range_at_index__WEBPACK_IMPORTED_MODULE_2__),_dom__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/dom.ts"),_selection__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/selection.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/useIsomorphicLayoutEffect.ts"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils.tsx"),_useStatic__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/useStatic.ts");const RichTextarea=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({children:render,value,autoHeight,style,onKeyDown,onSelectionChange,...props},propRef)=>{const textAreaRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),backdropRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[[width,height,hPadding,vPadding],setRect]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([0,0,0,0]),[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),caretColorRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),pointedRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[[selectionStart,selectionEnd],setSelection]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([null,null]),selectionStore=(0,_useStatic__WEBPACK_IMPORTED_MODULE_3__.T)((()=>(0,_selection__WEBPACK_IMPORTED_MODULE_4__.n)(textAreaRef,setSelection))),totalWidth=width+hPadding,totalHeight=height+vPadding,isSizeCalculated=!!(totalWidth+totalHeight);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(propRef,(()=>{const el=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_5__.o],overrides={get selectionStart(){const sel=selectionStore._getSelectionStart();return null==sel?0:sel},get selectionEnd(){const sel=selectionStore._getSelectionEnd();return null==sel?0:sel},setSelectionRange(...args){el.focus(),el.setSelectionRange(...args)},setRangeText(text,start,end,preserve){el.setRangeText?el.setRangeText(text,start,end,preserve):(el.focus(),el.selectionStart=start,el.selectionEnd=end,document.execCommand("insertText",!1,text)),el.dispatchEvent(new Event("input",{bubbles:!0}))}};return new Proxy(el,{get(target,prop){if(overrides[prop])return overrides[prop];const value2=target[prop];return"function"==typeof value2?value2.bind(target):value2}})}),[textAreaRef]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.L)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_5__.o],backdrop=backdropRef[_utils__WEBPACK_IMPORTED_MODULE_5__.o];if(!textarea||!backdrop)return;const observer=new ResizeObserver((([entry])=>{const{contentRect,borderBoxSize}=entry;if(borderBoxSize&&borderBoxSize[0])return void setRect([contentRect.width,contentRect.height,borderBoxSize[0].inlineSize-contentRect.width,borderBoxSize[0].blockSize-contentRect.height]);const style2=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.C2)(textarea);setRect([contentRect.width,contentRect.height,(0,_dom__WEBPACK_IMPORTED_MODULE_7__.RH)(style2),(0,_dom__WEBPACK_IMPORTED_MODULE_7__.aY)(style2)])})),cleanUpOnFocus=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.xz)(textarea,"focus",(()=>{setFocused(!0)})),cleanUpOnBlur=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.xz)(textarea,"blur",(()=>{setFocused(!1)})),cleanUpOnScroll=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.xz)(textarea,"scroll",(()=>{const{scrollTop,scrollLeft}=textarea;backdrop.style.transform=`translate(${-scrollLeft}px, ${-scrollTop}px)`})),cleanUpOnMouseDown=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.xz)(textarea,"mousedown",(e=>{selectionStore._updateSeletion();const mouseup=()=>{selectionStore._updateSeletion(),document.removeEventListener("mouseup",mouseup)};document.addEventListener("mouseup",mouseup);const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_7__.Gr)(pointed,e)})),cleanUpOnMouseMove=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.xz)(textarea,"mouseup",(e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_7__.Gr)(pointed,e)})),cleanUpMouseMove=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.xz)(textarea,"mousemove",(e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.vy)(textarea,backdrop,e);(0,_dom__WEBPACK_IMPORTED_MODULE_7__.NS)(pointed,pointedRef,e)})),cleanUpOnMouseLeave=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.xz)(textarea,"mouseleave",(e=>{(0,_dom__WEBPACK_IMPORTED_MODULE_7__.tQ)(pointedRef,e,null)})),cleanUpOnClick=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.xz)(textarea,"click",(e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_7__.Gr)(pointed,e)})),cleanUpOnInput=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.xz)(textarea,"input",(()=>{selectionStore._updateSeletion()})),cleanUpOnCompositionStart=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.xz)(textarea,"compositionstart",(e=>{selectionStore._setComposition(e)})),cleanUpOnCompositionUpdate=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.xz)(textarea,"compositionupdate",(e=>{selectionStore._setComposition(e)})),cleanUpOnCompositionEnd=(0,_dom__WEBPACK_IMPORTED_MODULE_7__.xz)(textarea,"compositionend",(()=>{selectionStore._setComposition()}));return observer.observe(textarea),()=>{cleanUpOnFocus(),cleanUpOnBlur(),cleanUpOnScroll(),cleanUpOnMouseDown(),cleanUpOnMouseMove(),cleanUpMouseMove(),cleanUpOnMouseLeave(),cleanUpOnClick(),cleanUpOnInput(),cleanUpOnCompositionStart(),cleanUpOnCompositionUpdate(),cleanUpOnCompositionEnd(),observer.disconnect()}}),[]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.L)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_5__.o],backdrop=backdropRef[_utils__WEBPACK_IMPORTED_MODULE_5__.o];backdrop&&textarea&&(0,_dom__WEBPACK_IMPORTED_MODULE_7__.Ku)(textarea,backdrop,caretColorRef,style)}),[style]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(null!=selectionStart&&null!=selectionEnd&&onSelectionChange)if(focused){const rect=range_at_index__WEBPACK_IMPORTED_MODULE_2___default()(backdropRef[_utils__WEBPACK_IMPORTED_MODULE_5__.o],selectionStart,selectionStart+1).getBoundingClientRect();onSelectionChange({focused:!0,top:rect.top,left:rect.left,height:rect.height,selectionStart,selectionEnd},value)}else onSelectionChange({focused:!1,selectionStart,selectionEnd},value)}),[focused,selectionStart,selectionEnd]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_5__.o];autoHeight&&textarea&&(textarea.style.height="auto",textarea.style.height=`${textarea.scrollHeight}px`)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{let w=totalWidth,h=totalHeight;return style&&((0,_dom__WEBPACK_IMPORTED_MODULE_7__.Fx)(style.width)&&(w=style.width),(0,_dom__WEBPACK_IMPORTED_MODULE_7__.Fx)(style.height)&&(h=style.height)),{display:"inline-block",position:"relative",width:w,height:h}}),[totalWidth,totalHeight,style]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{const s={position:"absolute",overflow:"hidden",top:0,left:0,width:totalWidth,height:totalHeight};return style?(["background","backgroundColor"].forEach((k=>{style[k]&&(s[k]=style[k])})),s):s}),[totalWidth,totalHeight,style]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{ref:backdropRef,"aria-hidden":!0,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({width,transform:"translate(0px, 0px)",pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",boxSizing:"content-box",textSizeAdjust:"100%",WebkitTextSizeAdjust:"100%"})),[width]),onClick:_dom__WEBPACK_IMPORTED_MODULE_7__.UW,onMouseDown:_dom__WEBPACK_IMPORTED_MODULE_7__.UW,onMouseUp:_dom__WEBPACK_IMPORTED_MODULE_7__.UW,onMouseOver:_dom__WEBPACK_IMPORTED_MODULE_7__.UW,onMouseOut:_dom__WEBPACK_IMPORTED_MODULE_7__.UW,onMouseMove:_dom__WEBPACK_IMPORTED_MODULE_7__.UW,children:[(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>render?render(value):value),[value,render]),_utils__WEBPACK_IMPORTED_MODULE_5__.N]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{...props,ref:textAreaRef,value,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({...style,background:"transparent",margin:0,position:"absolute",...!isSizeCalculated&&{position:void 0,verticalAlign:"top"}})),[style,isSizeCalculated]),onKeyDown:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{e.nativeEvent.isComposing||229===e.nativeEvent.keyCode||(null==onKeyDown||onKeyDown(e),selectionStore._updateSeletion())}),[onKeyDown])})]})}));try{RichTextarea.displayName="RichTextarea",RichTextarea.__docgenInfo={description:"Textarea component with some extra props. See {@link RichTextareaProps} and {@link RichTextareaHandle}.",displayName:"RichTextarea",props:{children:{defaultValue:null,description:"Render function to create customized view from value.\n\nThis function should return ReactNodes which texts are positioned the same as textarea (see examples for detailed usage).\n\nOn the rendered nodes, currently limited event handlers will work.\n- `onClick`\n- `onMouseOver`\n- `onMouseOut`\n- `onMouseMove`\n- `onMouseDown`\n- `onMouseUp`\n@defaultValue undefined",name:"children",required:!1,type:{name:"Renderer"}},value:{defaultValue:null,description:"Same as original but only string",name:"value",required:!0,type:{name:"string"}},autoHeight:{defaultValue:null,description:"If true, textarea height is automatically resized and height of style prop does not work.\nSet `maxHeight` to style prop if you need limit.\nSet `rows` prop to 1 if you need single-line textarea.\n@defaultValue undefined",name:"autoHeight",required:!1,type:{name:"boolean"}},onSelectionChange:{defaultValue:null,description:"Called when selection in textarea changes. It gives position of caret at the time, which is useful to position menu.\n@defaultValue undefined",name:"onSelectionChange",required:!1,type:{name:"(pos: CaretPosition, value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/textarea.tsx#RichTextarea"]={docgenInfo:RichTextarea.__docgenInfo,name:"RichTextarea",path:"src/textarea.tsx#RichTextarea"})}catch(__react_docgen_typescript_loader_error){}},"./src/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/useStatic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useStatic});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils.tsx");const useStatic=init=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref[_utils__WEBPACK_IMPORTED_MODULE_1__.o]||(ref[_utils__WEBPACK_IMPORTED_MODULE_1__.o]=init())}},"./src/utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>CARET_DETECTOR,o:()=>refKey});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const refKey="current",CARET_DETECTOR=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"transparent"},children:"​"})}}]);