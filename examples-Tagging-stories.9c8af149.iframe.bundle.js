/*! For license information please see examples-Tagging-stories.9c8af149.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[149],{"./stories/examples/Tagging.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tagging:()=>Tagging,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/textarea.tsx");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import { StoryObj } from "@storybook/react";\nimport React, { useState } from "react";\nimport { RichTextarea } from "../../src";\n\nexport default {\n  component: RichTextarea,\n};\n\nconst INPUT_HEIGHT = 20;\nconst INPUT_WIDTH = 400;\n\nconst style: React.CSSProperties = {\n  height: INPUT_HEIGHT,\n  width: INPUT_WIDTH,\n  whiteSpace: "pre",\n  overflowWrap: "normal",\n  overflowX: "auto",\n  overflowY: "hidden",\n  resize: "none",\n};\n\nconst SPACER = " ";\n\nconst Menu = ({\n  items,\n  onSelect,\n}: {\n  items: string[];\n  onSelect: (name: string) => void;\n}) => {\n  return (\n    <div\n      style={{\n        position: "absolute",\n        top: INPUT_HEIGHT + 4,\n        left: 0,\n        width: INPUT_WIDTH,\n        fontSize: "12px",\n        border: "solid 1px gray",\n        borderRadius: "3px",\n      }}\n    >\n      <div\n        style={{\n          borderBottom: "solid 1px gray",\n        }}\n      >\n        Current tags\n      </div>\n      <ul\n        style={{\n          listStyleType: "none",\n          margin: 0,\n          padding: 0,\n          cursor: "pointer",\n          background: "white",\n        }}\n      >\n        {items.map((item) => (\n          <li key={item} onMouseDown={() => onSelect(item)}>\n            {item}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n};\n\nconst Tag = ({\n  children,\n  selected,\n}: {\n  children: string;\n  selected: boolean;\n}) => {\n  return (\n    <span\n      style={{\n        background: selected ? "lightgray" : "whitesmoke",\n        color: "dimgray",\n        borderRadius: "4px",\n        outline: "solid 1px dimgray",\n      }}\n    >\n      {children}\n    </span>\n  );\n};\n\nexport const Tagging: StoryObj = {\n  render: () => {\n    const [tags, setTags] = useState<string[]>(["Apple", "Orange", "Banana"]);\n    const [text, setText] = useState("");\n    const [pos, setPos] = useState<number | null>(null);\n\n    const [focused, setFocused] = useState(false);\n\n    const tagsText = tags.join(SPACER) + (tags.length ? SPACER : "");\n    const textStart = tagsText.length;\n    const tagIndex =\n      pos == null\n        ? -1\n        : tags.reduce(\n            (acc, t, i) => {\n              if (acc[0] !== -1) return acc;\n              const prev = acc[1];\n              acc[1] += t.length + SPACER.length;\n              if (prev <= pos && pos < acc[1]) {\n                acc[0] = i;\n              }\n              return acc;\n            },\n            [-1, 0] as [number, number]\n          )[0];\n\n    return (\n      <div style={{ position: "relative", padding: 0 }}>\n        <RichTextarea\n          rows={1}\n          style={style}\n          onChange={(e) => setText(e.target.value.slice(textStart))}\n          value={tagsText + text}\n          onFocus={() => setFocused(true)}\n          onBlur={() => setFocused(false)}\n          onKeyDown={(e) => {\n            if (!pos) return;\n            switch (e.code) {\n              case "Enter":\n                e.preventDefault();\n                if (!pos) return;\n                if (!text || tags.includes(text)) return;\n                setTags((prev) => [...prev, text]);\n                setText("");\n                break;\n              case "Backspace":\n                if (textStart < pos) return;\n                e.preventDefault();\n                setTags((prev) => {\n                  const next = [...prev];\n                  next.splice(tagIndex === -1 ? prev.length - 1 : tagIndex, 1);\n                  return next;\n                });\n                break;\n              case "Delete":\n                if (textStart < pos) return;\n                e.preventDefault();\n                break;\n              default:\n                break;\n            }\n          }}\n          onSelectionChange={(r) => {\n            if (r.focused) {\n              setPos(r.selectionStart);\n            } else {\n              setPos(null);\n            }\n          }}\n        >\n          {() => {\n            return [\n              ...tags.flatMap((t, i) => [\n                <Tag key={t} selected={i == tagIndex}>\n                  {t}\n                </Tag>,\n                SPACER,\n              ]),\n              text\n                ? text\n                : pos === textStart && (\n                    <span key={"__placeholder"} style={{ color: "darkgray" }}>\n                      Type anything and press Enter key...\n                    </span>\n                  ),\n            ];\n          }}\n        </RichTextarea>\n        {focused && !!tags.length && (\n          <Menu\n            items={tags}\n            onSelect={(text) => {\n              setTags((prev) => prev.filter((p) => p !== text));\n            }}\n          />\n        )}\n      </div>\n    );\n  },\n};\n',locationsMap:{tagging:{startLoc:{col:33,line:90},endLoc:{col:1,line:189},startBody:{col:33,line:90},endBody:{col:1,line:189}}}}},component:_src__WEBPACK_IMPORTED_MODULE_2__.p},style={height:20,width:400,whiteSpace:"pre",overflowWrap:"normal",overflowX:"auto",overflowY:"hidden",resize:"none"},Menu=({items,onSelect})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{position:"absolute",top:24,left:0,width:400,fontSize:"12px",border:"solid 1px gray",borderRadius:"3px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{borderBottom:"solid 1px gray"},children:"Current tags"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{style:{listStyleType:"none",margin:0,padding:0,cursor:"pointer",background:"white"},children:items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{onMouseDown:()=>onSelect(item),children:item},item)))})]}),Tag=({children,selected})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{background:selected?"lightgray":"whitesmoke",color:"dimgray",borderRadius:"4px",outline:"solid 1px dimgray"},children}),Tagging={render:()=>{const[tags,setTags]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(["Apple","Orange","Banana"]),[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),[pos,setPos]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),tagsText=tags.join(" ")+(tags.length?" ":""),textStart=tagsText.length,tagIndex=null==pos?-1:tags.reduce(((acc,t,i)=>{if(-1!==acc[0])return acc;const prev=acc[1];return acc[1]+=t.length+1,prev<=pos&&pos<acc[1]&&(acc[0]=i),acc}),[-1,0])[0];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{position:"relative",padding:0},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.p,{rows:1,style,onChange:e=>setText(e.target.value.slice(textStart)),value:tagsText+text,onFocus:()=>setFocused(!0),onBlur:()=>setFocused(!1),onKeyDown:e=>{if(pos)switch(e.code){case"Enter":if(e.preventDefault(),!pos)return;if(!text||tags.includes(text))return;setTags((prev=>[...prev,text])),setText("");break;case"Backspace":if(textStart<pos)return;e.preventDefault(),setTags((prev=>{const next=[...prev];return next.splice(-1===tagIndex?prev.length-1:tagIndex,1),next}));break;case"Delete":if(textStart<pos)return;e.preventDefault()}},onSelectionChange:r=>{r.focused?setPos(r.selectionStart):setPos(null)},children:()=>[...tags.flatMap(((t,i)=>[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tag,{selected:i==tagIndex,children:t},t)," "])),text||pos===textStart&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"darkgray"},children:"Type anything and press Enter key..."},"__placeholder")]}),focused&&!!tags.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Menu,{items:tags,onSelect:text2=>{setTags((prev=>prev.filter((p=>p!==text2))))}})]})}}},"./node_modules/range-at-index/build/index.js":module=>{module.exports=function RangeAtIndex(el,index,offset,range){var doc=el.ownerDocument;range||(range=doc.createRange());var iterator=doc.createNodeIterator(el,NodeFilter.SHOW_TEXT,null,!1),start={},end={},node=void 0,len=void 0;for(;node=iterator.nextNode();)len=node.nodeValue.length,!start.node&&len>index&&(start.node=node,start.offset=index),!end.node&&len>=offset&&(end.node=node,end.offset=offset),index-=len,offset-=len;start.node&&range.setStart(start.node,start.offset);end.node&&range.setEnd(end.node,end.offset);return range}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Fx:()=>hasPercentageUnit,G6:()=>isSafari,Gr:()=>dispatchClonedMouseEvent,Ku:()=>syncBackdropStyle,NS:()=>dispatchMouseMoveEvent,RH:()=>getHorizontalPadding,UW:()=>stopPropagation,aY:()=>getVerticalPadding,tQ:()=>dispatchMouseOutEvent,vy:()=>getPointedElement,yl:()=>listenEvent});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils.tsx");const isSafari=()=>{const ua=navigator.userAgent.toLowerCase();return ua.indexOf("safari")>-1&&ua.indexOf("chrome")<=-1},TEXT_STYLE_KEYS=["direction","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","margin","marginTop","marginBottom","marginLeft","marginRight","border","borderWidth","borderTopWidth","borderBottomWidth","borderLeftWidth","borderRightWidth","borderStyle","borderTopStyle","borderBottomStyle","borderLeftStyle","borderRightStyle","fontSize","fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSizeAdjust","textAlign","textTransform","textIndent","letterSpacing","wordSpacing","lineHeight","whiteSpace","wordBreak","overflowWrap","tabSize","MozTabSize"],getPropertyValue=(style,key)=>style.getPropertyValue(key),setProperty=(style,key,value)=>{style.setProperty(key,value)},getValueFromStyle=(style,key)=>{const value=getPropertyValue(style,key);return value?parseInt(value,10):0},getStyle=e=>getComputedStyle(e),hasPercentageUnit=widthOrHeight=>"string"==typeof widthOrHeight&&widthOrHeight.endsWith("%"),getVerticalPadding=style=>getValueFromStyle(style,"padding-top")+getValueFromStyle(style,"padding-bottom")+getValueFromStyle(style,"border-top")+getValueFromStyle(style,"border-bottom"),getHorizontalPadding=style=>getValueFromStyle(style,"padding-left")+getValueFromStyle(style,"padding-right")+getValueFromStyle(style,"border-left")+getValueFromStyle(style,"border-right"),getPointedElement=(textarea,backdrop,e)=>{const textareaStyle=textarea.style,backdropStyle=backdrop.style,prev=getPropertyValue(textareaStyle,"pointer-events"),backPrev=getPropertyValue(backdropStyle,"pointer-events");setProperty(textareaStyle,"pointer-events","none"),setProperty(backdropStyle,"pointer-events","auto");const pointed=document.elementFromPoint(e.clientX,e.clientY);return setProperty(textareaStyle,"pointer-events",prev),setProperty(backdropStyle,"pointer-events",backPrev),isInsideBackdrop(pointed,backdrop)?pointed:null},isInsideBackdrop=(pointed,backdrop)=>!!pointed&&backdrop!==pointed&&backdrop.contains(pointed),dispatchMouseEvent=(target,type,init)=>{target.dispatchEvent(new MouseEvent(type,init))},dispatchClonedMouseEvent=(pointed,e)=>{dispatchMouseEvent(pointed,e.type,e)},dispatchMouseMoveEvent=(pointed,prevPointed,e)=>{pointed&&dispatchClonedMouseEvent(pointed,e),prevPointed!==pointed&&(dispatchMouseOutEvent(prevPointed,e),pointed&&dispatchMouseEvent(pointed,"mouseover",e))},dispatchMouseOutEvent=(prevPointed,e)=>{prevPointed&&dispatchMouseEvent(prevPointed,"mouseout",e)},stopPropagation=event=>{event.stopPropagation()},syncBackdropStyle=(textarea,backdrop,caretColorRef,style)=>{const computedTextAreaStyle=getStyle(textarea),textareaStyle=textarea.style,backdropStyle=backdrop.style;caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]||(caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]=getPropertyValue(computedTextAreaStyle,"color")),TEXT_STYLE_KEYS.forEach((k=>{backdropStyle[k]=computedTextAreaStyle[k]})),textareaStyle.color=backdropStyle.borderColor="transparent",textareaStyle.caretColor=(null==style?void 0:style.caretColor)||caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]},listenEvent=(el,key,cb)=>(el.addEventListener(key,cb),()=>{el.removeEventListener(key,cb)})},"./src/observer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>createTextareaObserver});var _dom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/dom.ts");const createTextareaObserver=(textarea,backdrop,selectionStore,onResize,onFocus)=>{let prevPointed=null;const observer=new ResizeObserver((([entry])=>{const{contentRect:{width,height},borderBoxSize}=entry;if(borderBoxSize&&borderBoxSize[0])return void onResize([width,height,borderBoxSize[0].inlineSize-width,borderBoxSize[0].blockSize-height]);const style=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.C2)(textarea);onResize([width,height,(0,_dom__WEBPACK_IMPORTED_MODULE_0__.RH)(style),(0,_dom__WEBPACK_IMPORTED_MODULE_0__.aY)(style)])})),cleanUpOnFocus=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"focus",(()=>{onFocus(!0)})),cleanUpOnBlur=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"blur",(()=>{onFocus(!1)})),cleanUpOnScroll=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"scroll",(()=>{const{scrollTop,scrollLeft}=textarea;backdrop.style.transform=`translate(${-scrollLeft}px, ${-scrollTop}px)`})),cleanUpOnMouseDown=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"mousedown",(e=>{selectionStore._updateSeletion();const cleanup=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(document,"mouseup",(()=>{selectionStore._updateSeletion(),cleanup()})),pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_0__.Gr)(pointed,e)})),cleanUpOnMouseMove=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"mouseup",(e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_0__.Gr)(pointed,e)})),cleanUpMouseMove=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"mousemove",(e=>{const p=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.vy)(textarea,backdrop,e);(0,_dom__WEBPACK_IMPORTED_MODULE_0__.NS)(p,prevPointed,e),prevPointed=p})),cleanUpOnMouseLeave=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"mouseleave",(e=>{(0,_dom__WEBPACK_IMPORTED_MODULE_0__.tQ)(prevPointed,e),prevPointed=null})),cleanUpOnClick=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"click",(e=>{const pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_0__.Gr)(pointed,e)})),cleanUpOnInput=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"input",(()=>{selectionStore._updateSeletion()})),cleanUpOnCompositionStart=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"compositionstart",(e=>{selectionStore._setComposition(e)})),cleanUpOnCompositionUpdate=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"compositionupdate",(e=>{selectionStore._setComposition(e)})),cleanUpOnCompositionEnd=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"compositionend",(()=>{selectionStore._setComposition()}));return observer.observe(textarea),()=>{cleanUpOnFocus(),cleanUpOnBlur(),cleanUpOnScroll(),cleanUpOnMouseDown(),cleanUpOnMouseMove(),cleanUpMouseMove(),cleanUpOnMouseLeave(),cleanUpOnClick(),cleanUpOnInput(),cleanUpOnCompositionStart(),cleanUpOnCompositionUpdate(),cleanUpOnCompositionEnd(),observer.disconnect()}}},"./src/selection.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>initSelectionStore});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils.tsx");const initSelectionStore=(ref,onSelectionUpdate)=>{let compositionEvent,cache=[null,null];const handle={_updateSeletion(){setTimeout((()=>{onSelectionUpdate((()=>{const selectionStart=handle._getSelectionStart(),selectionEnd=handle._getSelectionEnd();return cache[0]===selectionStart&&cache[1]===selectionEnd||(cache=[selectionStart,selectionEnd]),cache})())}))},_setComposition(event){compositionEvent=event},_getSelectionStart(){const el=ref[_utils__WEBPACK_IMPORTED_MODULE_0__.o];if(!el)return null;let pos=el.selectionStart;return compositionEvent&&(pos=Math.min(pos,el.selectionEnd-compositionEvent.data.length)),pos},_getSelectionEnd(){const el=ref[_utils__WEBPACK_IMPORTED_MODULE_0__.o];if(!el)return null;let pos=el.selectionEnd;return compositionEvent&&(pos=Math.min(pos,el.selectionStart+compositionEvent.data.length)),pos}};return handle}},"./src/textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>RichTextarea});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),range_at_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/range-at-index/build/index.js"),range_at_index__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(range_at_index__WEBPACK_IMPORTED_MODULE_2__),_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/dom.ts"),_selection__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/selection.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/useIsomorphicLayoutEffect.ts"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils.tsx"),_useStatic__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/useStatic.ts"),_observer__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/observer.ts");const Backdrop=(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((({_ref:backdropRef,_handle:handle,_render:render,_width:width})=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");return(0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(handle,(()=>setValue),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{ref:backdropRef,"aria-hidden":!0,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({width,transform:"translate(0px, 0px)",pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",boxSizing:"content-box",textSizeAdjust:"100%",WebkitTextSizeAdjust:"100%"})),[width]),onClick:_dom__WEBPACK_IMPORTED_MODULE_3__.UW,onMouseDown:_dom__WEBPACK_IMPORTED_MODULE_3__.UW,onMouseUp:_dom__WEBPACK_IMPORTED_MODULE_3__.UW,onMouseOver:_dom__WEBPACK_IMPORTED_MODULE_3__.UW,onMouseOut:_dom__WEBPACK_IMPORTED_MODULE_3__.UW,onMouseMove:_dom__WEBPACK_IMPORTED_MODULE_3__.UW,children:[(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>render?render(value):value),[value,render]),_utils__WEBPACK_IMPORTED_MODULE_4__.N]})})),RichTextarea=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({children:render,autoHeight,style,onChange,onKeyDown,onSelectionChange,...props},ref)=>{const textAreaRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),backdropRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),backdropHandle=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[[width,height,hPadding,vPadding],setRect]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([0,0,0,0]),[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),caretColorRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),[[selectionStart,selectionEnd],setSelection]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([null,null]),selectionStore=(0,_useStatic__WEBPACK_IMPORTED_MODULE_5__.T)((()=>(0,_selection__WEBPACK_IMPORTED_MODULE_6__.n)(textAreaRef,setSelection))),totalWidth=width+hPadding,totalHeight=height+vPadding,isSizeCalculated=!!(totalWidth+totalHeight);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref,(()=>{const el=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_4__.o],overrides={get selectionStart(){const sel=selectionStore._getSelectionStart();return null==sel?0:sel},get selectionEnd(){const sel=selectionStore._getSelectionEnd();return null==sel?0:sel},setSelectionRange(...args){el.focus(),el.setSelectionRange(...args)},setRangeText(text,start,end,preserve){el.setRangeText?el.setRangeText(text,start,end,preserve):(el.focus(),el.selectionStart=start,el.selectionEnd=end,document.execCommand("insertText",!1,text)),el.dispatchEvent(new Event("input",{bubbles:!0}))}};return new Proxy(el,{get(target,prop){if(overrides[prop])return overrides[prop];const value=target[prop];return"function"==typeof value?value.bind(target):value},set:(target,prop,value)=>(target[prop]=value,!0)})}),[]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__.L)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_4__.o],backdrop=backdropRef[_utils__WEBPACK_IMPORTED_MODULE_4__.o];if(textarea&&backdrop)return(0,_observer__WEBPACK_IMPORTED_MODULE_8__._)(textarea,backdrop,selectionStore,setRect,setFocused)}),[]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__.L)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_4__.o];textarea&&backdropHandle[_utils__WEBPACK_IMPORTED_MODULE_4__.o](textarea.value)}),[props.value]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__.L)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_4__.o],backdrop=backdropRef[_utils__WEBPACK_IMPORTED_MODULE_4__.o];backdrop&&textarea&&(0,_dom__WEBPACK_IMPORTED_MODULE_3__.Ku)(textarea,backdrop,caretColorRef,style)}),[style]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(null!=selectionStart&&null!=selectionEnd&&onSelectionChange)if(focused){const rect=range_at_index__WEBPACK_IMPORTED_MODULE_2___default()(backdropRef[_utils__WEBPACK_IMPORTED_MODULE_4__.o],selectionStart,selectionStart+1).getBoundingClientRect();onSelectionChange({focused:!0,top:rect.top,left:rect.left,height:rect.height,selectionStart,selectionEnd})}else onSelectionChange({focused:!1,selectionStart,selectionEnd})}),[focused,selectionStart,selectionEnd]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_4__.o];autoHeight&&textarea&&(textarea.style.height="auto",textarea.style.height=`${textarea.scrollHeight}px`)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{let w=totalWidth,h=totalHeight;return style&&((0,_dom__WEBPACK_IMPORTED_MODULE_3__.Fx)(style.width)&&(w=style.width),(0,_dom__WEBPACK_IMPORTED_MODULE_3__.Fx)(style.height)&&(h=style.height)),{display:"inline-block",position:"relative",width:w,height:h}}),[totalWidth,totalHeight,style]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{const s={position:"absolute",overflow:"hidden",top:0,left:0,width:totalWidth,height:totalHeight};return style?(["background","backgroundColor"].forEach((k=>{style[k]&&(s[k]=style[k])})),s):s}),[totalWidth,totalHeight,style]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Backdrop,{_ref:backdropRef,_handle:backdropHandle,_render:render,_width:width})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{...props,ref:textAreaRef,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({...style,background:"transparent",margin:0,position:"absolute",...!isSizeCalculated&&{position:void 0,verticalAlign:"top"}})),[style,isSizeCalculated]),onChange:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{var _a;null==(_a=backdropHandle[_utils__WEBPACK_IMPORTED_MODULE_4__.o])||_a.call(backdropHandle,e.target.value),null==onChange||onChange(e)}),[onChange]),onKeyDown:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{e.nativeEvent.isComposing||229===e.nativeEvent.keyCode||(null==onKeyDown||onKeyDown(e),selectionStore._updateSeletion())}),[onKeyDown])})]})}))},"./src/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/useStatic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useStatic});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils.tsx");const useStatic=init=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref[_utils__WEBPACK_IMPORTED_MODULE_1__.o]||(ref[_utils__WEBPACK_IMPORTED_MODULE_1__.o]=init())}},"./src/utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>CARET_DETECTOR,o:()=>refKey});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const refKey="current",CARET_DETECTOR=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"transparent"},children:"​"})}}]);