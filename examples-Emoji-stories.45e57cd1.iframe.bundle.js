"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[657],{"./stories/examples/Emoji.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Emoji:()=>Emoji,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/textarea.tsx"),node_emoji__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/node-emoji/index.js"),node_emoji__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(node_emoji__WEBPACK_IMPORTED_MODULE_2__);const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import { StoryObj } from "@storybook/react";\nimport React, { useMemo, useRef, useState } from "react";\nimport { createPortal } from "react-dom";\nimport { RichTextarea } from "../../src";\nimport emoji from "node-emoji";\nimport { RichTextareaHandle } from "../../src";\n\nexport default {\n  component: RichTextarea,\n};\n\nconst style = { width: "400px", height: "300px" };\n\nconst MAX_LIST_LENGTH = 8;\nconst MENTION_REG = /:([\\-+\\w]*)$/;\n\nconst Menu = ({\n  chars,\n  index,\n  top,\n  left,\n  complete,\n}: {\n  chars: emoji.Emoji[];\n  index: number;\n  top: number;\n  left: number;\n  complete: (index: number) => void;\n}) => {\n  return (\n    <div\n      style={{\n        position: "fixed",\n        top: top,\n        left: left,\n        fontSize: "16px",\n        border: "solid 1px gray",\n        borderRadius: "3px",\n        background: "white",\n        cursor: "pointer",\n      }}\n    >\n      {chars.map((c, i) => (\n        <div\n          key={c.key}\n          style={{\n            padding: "4px",\n            ...(index === i && {\n              color: "white",\n              background: "#2A6AD3",\n            }),\n          }}\n          onMouseDown={(e) => {\n            e.preventDefault();\n            complete(i);\n          }}\n        >\n          {`${c.emoji} ${c.key}`}\n        </div>\n      ))}\n    </div>\n  );\n};\n\nexport const Emoji: StoryObj = {\n  render: () => {\n    const ref = useRef<RichTextareaHandle>(null);\n    const [text, setText] = useState(`Type : to show suggestions 💪\\n\\n`);\n    const [pos, setPos] = useState<{\n      top: number;\n      left: number;\n      caret: number;\n    } | null>(null);\n    const [index, setIndex] = useState<number>(0);\n\n    const targetText = pos ? text.slice(0, pos.caret) : text;\n    const match = pos && targetText.match(MENTION_REG);\n    const name = match?.[1] ?? "";\n    const filtered = useMemo(\n      () => emoji.search(name).slice(0, MAX_LIST_LENGTH),\n      [name]\n    );\n    const complete = (i: number) => {\n      if (!ref.current || !pos) return;\n      const selected = filtered[i].emoji;\n      ref.current.setRangeText(\n        `${selected} `,\n        pos.caret - name.length - 1,\n        pos.caret,\n        "end"\n      );\n      setPos(null);\n      setIndex(0);\n    };\n\n    return (\n      <div>\n        <RichTextarea\n          ref={ref}\n          style={style}\n          onChange={(e) => setText(e.target.value)}\n          value={text}\n          onKeyDown={(e) => {\n            if (!pos || !filtered.length) return;\n            switch (e.code) {\n              case "ArrowUp":\n                e.preventDefault();\n                const nextIndex = index <= 0 ? filtered.length - 1 : index - 1;\n                setIndex(nextIndex);\n                break;\n              case "ArrowDown":\n                e.preventDefault();\n                const prevIndex = index >= filtered.length - 1 ? 0 : index + 1;\n                setIndex(prevIndex);\n                break;\n              case "Enter":\n                e.preventDefault();\n                complete(index);\n                break;\n              case "Escape":\n                e.preventDefault();\n                setPos(null);\n                setIndex(0);\n                break;\n              default:\n                break;\n            }\n          }}\n          onSelectionChange={(r) => {\n            if (\n              r.focused &&\n              MENTION_REG.test(text.slice(0, r.selectionStart))\n            ) {\n              setPos({\n                top: r.top + r.height,\n                left: r.left,\n                caret: r.selectionStart,\n              });\n              setIndex(0);\n            } else {\n              setPos(null);\n              setIndex(0);\n            }\n          }}\n        />\n        {pos &&\n          createPortal(\n            <Menu\n              top={pos.top}\n              left={pos.left}\n              chars={filtered}\n              index={index}\n              complete={complete}\n            />,\n            document.body\n          )}\n      </div>\n    );\n  },\n};\n',locationsMap:{emoji:{startLoc:{col:31,line:65},endLoc:{col:1,line:160},startBody:{col:31,line:65},endBody:{col:1,line:160}}}}},component:_src__WEBPACK_IMPORTED_MODULE_3__.p},style={width:"400px",height:"300px"},MENTION_REG=/:([\-+\w]*)$/,Menu=({chars,index,top,left,complete})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"fixed",top,left,fontSize:"16px",border:"solid 1px gray",borderRadius:"3px",background:"white",cursor:"pointer"}},chars.map(((c,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:c.key,style:{padding:"4px",...index===i&&{color:"white",background:"#2A6AD3"}},onMouseDown:e=>{e.preventDefault(),complete(i)}},`${c.emoji} ${c.key}`)))),Emoji={render:()=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Type : to show suggestions 💪\n\n"),[pos,setPos]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[index,setIndex]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),targetText=pos?text.slice(0,pos.caret):text,match=pos&&targetText.match(MENTION_REG),name=match?.[1]??"",filtered=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>node_emoji__WEBPACK_IMPORTED_MODULE_2___default().search(name).slice(0,8)),[name]),complete=i=>{if(!ref.current||!pos)return;const selected=filtered[i].emoji;ref.current.setRangeText(`${selected} `,pos.caret-name.length-1,pos.caret,"end"),setPos(null),setIndex(0)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_3__.p,{ref,style,onChange:e=>setText(e.target.value),value:text,onKeyDown:e=>{if(pos&&filtered.length)switch(e.code){case"ArrowUp":e.preventDefault();const nextIndex=index<=0?filtered.length-1:index-1;setIndex(nextIndex);break;case"ArrowDown":e.preventDefault();const prevIndex=index>=filtered.length-1?0:index+1;setIndex(prevIndex);break;case"Enter":e.preventDefault(),complete(index);break;case"Escape":e.preventDefault(),setPos(null),setIndex(0)}},onSelectionChange:r=>{r.focused&&MENTION_REG.test(text.slice(0,r.selectionStart))?(setPos({top:r.top+r.height,left:r.left,caret:r.selectionStart}),setIndex(0)):(setPos(null),setIndex(0))}}),pos&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(Menu,{top:pos.top,left:pos.left,chars:filtered,index,complete}),document.body))}}},"./src/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Fx:()=>hasPercentageUnit,G6:()=>isSafari,Gr:()=>dispatchClonedMouseEvent,Ku:()=>syncBackdropStyle,NS:()=>dispatchMouseMoveEvent,RH:()=>getHorizontalPadding,UW:()=>stopPropagation,aY:()=>getVerticalPadding,tQ:()=>dispatchMouseOutEvent,vy:()=>getPointedElement,yl:()=>listenEvent});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils.tsx");const isSafari=()=>{const ua=navigator.userAgent.toLowerCase();return ua.indexOf("safari")>-1&&ua.indexOf("chrome")<=-1},TEXT_STYLE_KEYS=["direction","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","margin","marginTop","marginBottom","marginLeft","marginRight","border","borderWidth","borderTopWidth","borderBottomWidth","borderLeftWidth","borderRightWidth","borderStyle","borderTopStyle","borderBottomStyle","borderLeftStyle","borderRightStyle","fontSize","fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSizeAdjust","textAlign","textTransform","textIndent","letterSpacing","wordSpacing","lineHeight","whiteSpace","wordBreak","overflowWrap","tabSize","MozTabSize"],getPropertyValue=(style,key)=>style.getPropertyValue(key),setProperty=(style,key,value)=>{style.setProperty(key,value)},getValueFromStyle=(style,key)=>{const value=getPropertyValue(style,key);return value?parseInt(value,10):0},getStyle=e=>getComputedStyle(e),hasPercentageUnit=widthOrHeight=>"string"==typeof widthOrHeight&&widthOrHeight.endsWith("%"),getVerticalPadding=style=>getValueFromStyle(style,"padding-top")+getValueFromStyle(style,"padding-bottom")+getValueFromStyle(style,"border-top")+getValueFromStyle(style,"border-bottom"),getHorizontalPadding=style=>getValueFromStyle(style,"padding-left")+getValueFromStyle(style,"padding-right")+getValueFromStyle(style,"border-left")+getValueFromStyle(style,"border-right"),getPointedElement=(textarea,backdrop,e)=>{const textareaStyle=textarea.style,backdropStyle=backdrop.style,prev=getPropertyValue(textareaStyle,"pointer-events"),backPrev=getPropertyValue(backdropStyle,"pointer-events");setProperty(textareaStyle,"pointer-events","none"),setProperty(backdropStyle,"pointer-events","auto");const pointed=document.elementFromPoint(e.clientX,e.clientY);return setProperty(textareaStyle,"pointer-events",prev),setProperty(backdropStyle,"pointer-events",backPrev),isInsideBackdrop(pointed,backdrop)?pointed:null},isInsideBackdrop=(pointed,backdrop)=>!!pointed&&backdrop!==pointed&&backdrop.contains(pointed),dispatchMouseEvent=(target,type,init)=>{target.dispatchEvent(new MouseEvent(type,init))},dispatchClonedMouseEvent=(pointed,e)=>{dispatchMouseEvent(pointed,e.type,e)},dispatchMouseMoveEvent=(pointed,prevPointed,e)=>{pointed&&dispatchClonedMouseEvent(pointed,e),prevPointed!==pointed&&(dispatchMouseOutEvent(prevPointed,e),pointed&&dispatchMouseEvent(pointed,"mouseover",e))},dispatchMouseOutEvent=(prevPointed,e)=>{prevPointed&&dispatchMouseEvent(prevPointed,"mouseout",e)},stopPropagation=event=>{event.stopPropagation()},syncBackdropStyle=(textarea,backdrop,caretColorRef,style)=>{const computedTextAreaStyle=getStyle(textarea),textareaStyle=textarea.style,backdropStyle=backdrop.style;caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]||(caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]=getPropertyValue(computedTextAreaStyle,"color")),TEXT_STYLE_KEYS.forEach((k=>{backdropStyle[k]=computedTextAreaStyle[k]})),textareaStyle.color=backdropStyle.borderColor="transparent",textareaStyle.caretColor=style?.caretColor||caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]},listenEvent=(el,key,cb)=>(el.addEventListener(key,cb),()=>{el.removeEventListener(key,cb)})},"./src/observer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>createTextareaObserver});var _dom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/dom.ts");const createTextareaObserver=(textarea,backdrop,selectionStore,onResize,onFocus)=>{let prevPointed=null;const observer=new ResizeObserver((([entry])=>{const{contentRect:{width,height},borderBoxSize}=entry;if(borderBoxSize&&borderBoxSize[0])return void onResize([width,height,borderBoxSize[0].inlineSize-width,borderBoxSize[0].blockSize-height]);const style=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.C2)(textarea);onResize([width,height,(0,_dom__WEBPACK_IMPORTED_MODULE_0__.RH)(style),(0,_dom__WEBPACK_IMPORTED_MODULE_0__.aY)(style)])})),cleanUpOnFocus=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"focus",(()=>{onFocus(!0)})),cleanUpOnBlur=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"blur",(()=>{onFocus(!1)})),cleanUpOnScroll=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"scroll",(()=>{const{scrollTop,scrollLeft}=textarea;backdrop.style.transform=`translate(${-scrollLeft}px, ${-scrollTop}px)`})),cleanUpOnMouseDown=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"mousedown",(e=>{selectionStore._updateSeletion();const cleanup=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(document,"mouseup",(()=>{selectionStore._updateSeletion(),cleanup()})),pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_0__.Gr)(pointed,e)})),cleanUpOnMouseMove=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"mouseup",(e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_0__.Gr)(pointed,e)})),cleanUpMouseMove=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"mousemove",(e=>{const p=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.vy)(textarea,backdrop,e);(0,_dom__WEBPACK_IMPORTED_MODULE_0__.NS)(p,prevPointed,e),prevPointed=p})),cleanUpOnMouseLeave=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"mouseleave",(e=>{(0,_dom__WEBPACK_IMPORTED_MODULE_0__.tQ)(prevPointed,e),prevPointed=null})),cleanUpOnClick=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"click",(e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_0__.Gr)(pointed,e)})),cleanUpOnInput=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"input",(()=>{selectionStore._updateSeletion()})),cleanUpOnCompositionStart=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"compositionstart",(e=>{selectionStore._setComposition(e)})),cleanUpOnCompositionUpdate=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"compositionupdate",(e=>{selectionStore._setComposition(e)})),cleanUpOnCompositionEnd=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"compositionend",(()=>{selectionStore._setComposition()}));return observer.observe(textarea),()=>{cleanUpOnFocus(),cleanUpOnBlur(),cleanUpOnScroll(),cleanUpOnMouseDown(),cleanUpOnMouseMove(),cleanUpMouseMove(),cleanUpOnMouseLeave(),cleanUpOnClick(),cleanUpOnInput(),cleanUpOnCompositionStart(),cleanUpOnCompositionUpdate(),cleanUpOnCompositionEnd(),observer.disconnect()}}},"./src/selection.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>initSelectionStore});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils.tsx");const initSelectionStore=(ref,onSelectionUpdate)=>{let compositionEvent,prevSelection=[null,null];const handle={_updateSeletion(){setTimeout((()=>{onSelectionUpdate((()=>{const selectionStart=handle._getSelectionStart(),selectionEnd=handle._getSelectionEnd();return prevSelection[0]===selectionStart&&prevSelection[1]===selectionEnd||(prevSelection=[selectionStart,selectionEnd]),prevSelection})())}))},_setComposition(event){compositionEvent=event},_getSelectionStart(){const el=ref[_utils__WEBPACK_IMPORTED_MODULE_0__.o];if(!el)return 0;const pos=el.selectionStart;return compositionEvent?Math.min(pos,el.selectionEnd-compositionEvent.data.length):pos},_getSelectionEnd(){const el=ref[_utils__WEBPACK_IMPORTED_MODULE_0__.o];if(!el)return 0;const pos=el.selectionEnd;return compositionEvent?Math.min(pos,el.selectionStart+compositionEvent.data.length):pos}};return handle}},"./src/textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>RichTextarea});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_vendor_range_at_index__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/vendor/range-at-index.js"),_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/dom.ts"),_selection__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/selection.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/useIsomorphicLayoutEffect.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils.tsx"),_useStatic__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/useStatic.ts"),_observer__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/observer.ts");const Backdrop=(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((({_ref:backdropRef,_handle:handle,_render:render,_width:width})=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");return(0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(handle,(()=>setValue),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{ref:backdropRef,"aria-hidden":!0,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({width,transform:"translate(0px, 0px)",pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",boxSizing:"content-box",textSizeAdjust:"100%",WebkitTextSizeAdjust:"100%"})),[width]),onClick:_dom__WEBPACK_IMPORTED_MODULE_2__.UW,onMouseDown:_dom__WEBPACK_IMPORTED_MODULE_2__.UW,onMouseUp:_dom__WEBPACK_IMPORTED_MODULE_2__.UW,onMouseOver:_dom__WEBPACK_IMPORTED_MODULE_2__.UW,onMouseOut:_dom__WEBPACK_IMPORTED_MODULE_2__.UW,onMouseMove:_dom__WEBPACK_IMPORTED_MODULE_2__.UW,children:[(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>render?render(value):value),[value,render]),_utils__WEBPACK_IMPORTED_MODULE_3__.N]})})),RichTextarea=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({children:render,autoHeight,style,onChange,onKeyDown,onSelectionChange,...props},ref)=>{const textAreaRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),backdropRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),backdropHandle=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[[width,height,hPadding,vPadding],setRect]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([0,0,0,0]),[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),caretColorRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),[[selectionStart,selectionEnd],setSelection]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([null,null]),selectionStore=(0,_useStatic__WEBPACK_IMPORTED_MODULE_4__.T)((()=>(0,_selection__WEBPACK_IMPORTED_MODULE_5__.n)(textAreaRef,setSelection))),totalWidth=width+hPadding,totalHeight=height+vPadding,isSizeCalculated=!!(totalWidth+totalHeight);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref,(()=>{const el=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_3__.o],overrides={get selectionStart(){return selectionStore._getSelectionStart()},get selectionEnd(){return selectionStore._getSelectionEnd()},setRangeText(text,start,end,preserve){el.setRangeText?el.setRangeText(text,start,end,preserve):(el.focus(),el.selectionStart=start,el.selectionEnd=end,document.execCommand("insertText",!1,text)),el.dispatchEvent(new Event("input",{bubbles:!0}))}};return new Proxy(el,{get(target,prop){if(overrides[prop])return overrides[prop];const value=target[prop];return"function"==typeof value?value.bind(target):value},set:(target,prop,value)=>(target[prop]=value,!0)})}),[]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.L)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_3__.o],backdrop=backdropRef[_utils__WEBPACK_IMPORTED_MODULE_3__.o];if(textarea&&backdrop)return(0,_observer__WEBPACK_IMPORTED_MODULE_7__._)(textarea,backdrop,selectionStore,setRect,setFocused)}),[]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.L)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_3__.o];textarea&&backdropHandle[_utils__WEBPACK_IMPORTED_MODULE_3__.o](textarea.value)}),[props.value]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.L)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_3__.o],backdrop=backdropRef[_utils__WEBPACK_IMPORTED_MODULE_3__.o];backdrop&&textarea&&(0,_dom__WEBPACK_IMPORTED_MODULE_2__.Ku)(textarea,backdrop,caretColorRef,style)}),[style]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(null!=selectionStart&&null!=selectionEnd&&onSelectionChange)if(focused){const rect=(0,_vendor_range_at_index__WEBPACK_IMPORTED_MODULE_8__.Z)(backdropRef[_utils__WEBPACK_IMPORTED_MODULE_3__.o],selectionStart,selectionStart+1).getBoundingClientRect();onSelectionChange({focused:!0,top:rect.top,left:rect.left,height:rect.height,selectionStart,selectionEnd})}else onSelectionChange({focused:!1,selectionStart,selectionEnd})}),[focused,selectionStart,selectionEnd]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_3__.o];autoHeight&&textarea&&(textarea.style.height="auto",textarea.style.height=`${textarea.scrollHeight}px`)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{let w=totalWidth,h=totalHeight;return style&&((0,_dom__WEBPACK_IMPORTED_MODULE_2__.Fx)(style.width)&&(w=style.width),(0,_dom__WEBPACK_IMPORTED_MODULE_2__.Fx)(style.height)&&(h=style.height)),{display:"inline-block",position:"relative",width:w,height:h}}),[totalWidth,totalHeight,style]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{const s={position:"absolute",overflow:"hidden",top:0,left:0,width:totalWidth,height:totalHeight};return style?(["background","backgroundColor"].forEach((k=>{style[k]&&(s[k]=style[k])})),s):s}),[totalWidth,totalHeight,style]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Backdrop,{_ref:backdropRef,_handle:backdropHandle,_render:render,_width:width})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{...props,ref:textAreaRef,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({...style,background:"transparent",margin:0,position:"absolute",...!isSizeCalculated&&{position:void 0,verticalAlign:"top"}})),[style,isSizeCalculated]),onChange:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{backdropHandle[_utils__WEBPACK_IMPORTED_MODULE_3__.o]?.(e.target.value),onChange?.(e)}),[onChange]),onKeyDown:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{e.nativeEvent.isComposing||229===e.nativeEvent.keyCode||(onKeyDown?.(e),selectionStore._updateSeletion())}),[onKeyDown])})]})}))},"./src/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/useStatic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useStatic});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils.tsx");const useStatic=init=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref[_utils__WEBPACK_IMPORTED_MODULE_1__.o]||(ref[_utils__WEBPACK_IMPORTED_MODULE_1__.o]=init())}},"./src/utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>CARET_DETECTOR,o:()=>refKey});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const refKey="current",CARET_DETECTOR=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"transparent"},children:"​"})},"./src/vendor/range-at-index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function RangeAtIndex(el,index,offset,range){var doc=el.ownerDocument;range||(range=doc.createRange());let node,val,len,iterator=doc.createNodeIterator(el,NodeFilter.SHOW_TEXT,null,!1),start={},end={};for(;node=iterator.nextNode();)val=node.nodeValue,len=val.length,!start.node&&len>index&&(start.node=node,start.offset=index),!end.node&&len>=offset&&(end.node=node,end.offset=offset),index-=len,offset-=len;return start.node&&range.setStart(start.node,start.offset),end.node&&range.setEnd(end.node,end.offset),range}}}]);