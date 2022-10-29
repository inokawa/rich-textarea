/*! For license information please see basics-2-Input-stories.d56bce27.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[433],{"./stories/basics/2-Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,WidthMax:()=>WidthMax,__namedExportsOrder:()=>__namedExportsOrder,default:()=>_2_Input_stories});__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("./node_modules/react/index.js"),shim=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.string.ends-with.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/use-sync-external-store/shim/index.js")),build=__webpack_require__("./node_modules/range-at-index/build/index.js"),build_default=__webpack_require__.n(build),dom=__webpack_require__("./src/dom.ts"),selection=__webpack_require__("./src/selection.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","value","autoHeight","style","onScroll","onInput","onCompositionStart","onCompositionUpdate","onCompositionEnd","onKeyDown","onClick","onMouseDown","onMouseUp","onMouseMove","onMouseLeave","onFocus","onBlur","onSelectionChange"];function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var CARET_DETECTOR=(0,jsx_runtime.jsx)("span",{style:{color:"transparent"},children:"​"}),RichInput=(0,react.forwardRef)((function(_ref,propRef){var render=_ref.children,value=_ref.value,autoHeight=_ref.autoHeight,style=_ref.style,onScroll=_ref.onScroll,onInput=_ref.onInput,onCompositionStart=_ref.onCompositionStart,onCompositionUpdate=_ref.onCompositionUpdate,onCompositionEnd=_ref.onCompositionEnd,onKeyDown=_ref.onKeyDown,onClick=_ref.onClick,onMouseDown=_ref.onMouseDown,onMouseUp=_ref.onMouseUp,onMouseMove=_ref.onMouseMove,onMouseLeave=_ref.onMouseLeave,onFocus=_ref.onFocus,onBlur=_ref.onBlur,onSelectionChange=_ref.onSelectionChange,props=_objectWithoutProperties(_ref,_excluded),textAreaRef=(0,react.useRef)(null),backdropRef=(0,react.useRef)(null),_useState2=_slicedToArray((0,react.useState)([0,0]),2),_useState2$=_slicedToArray(_useState2[0],2),left=_useState2$[0],top=_useState2$[1],setPos=_useState2[1],_useState4=_slicedToArray((0,react.useState)([0,0,0,0]),2),_useState4$=_slicedToArray(_useState4[0],4),width=_useState4$[0],height=_useState4$[1],hPadding=_useState4$[2],vPadding=_useState4$[3],setRect=_useState4[1],_useState6=_slicedToArray((0,react.useState)(!1),2),focused=_useState6[0],setFocused=_useState6[1],caretColorRef=(0,react.useRef)(""),pointedRef=(0,react.useRef)(null),selectionStore=(0,react.useState)((function(){return(0,selection.n)(textAreaRef)}))[0],_useSyncExternalStore2=_slicedToArray((0,shim.useSyncExternalStore)(selectionStore._subscribe,selectionStore._getSelection),2),selectionStart=_useSyncExternalStore2[0],selectionEnd=_useSyncExternalStore2[1],totalWidth=width+hPadding,totalHeight=height+vPadding;return(0,react.useImperativeHandle)(propRef,(function(){var el=textAreaRef.current,overrides={get selectionStart(){var sel=selectionStore._getSelectionStart();return null==sel?0:sel},get selectionEnd(){var sel=selectionStore._getSelectionEnd();return null==sel?0:sel},setSelectionRange:function setSelectionRange(){el.focus(),el.setSelectionRange.apply(el,arguments)},setRangeText:function setRangeText(text,start,end,preserve){el.setRangeText?el.setRangeText(text,start,end,preserve):(el.focus(),el.selectionStart=start,el.selectionEnd=end,document.execCommand("insertText",!1,text)),el.dispatchEvent(new Event("input",{bubbles:!0}))}};return new Proxy(el,{get:function get(target,prop){if(overrides[prop])return overrides[prop];var value=target[prop];return"function"==typeof value?value.bind(target):value}})}),[textAreaRef]),(0,react.useLayoutEffect)((function(){var textarea=textAreaRef.current;if(textarea){var observer=new ResizeObserver((function(_ref2){var _ref4=_slicedToArray(_ref2,1)[0],contentRect=_ref4.contentRect,borderBoxSize=_ref4.borderBoxSize;if(borderBoxSize&&borderBoxSize[0])setRect([contentRect.width,contentRect.height,borderBoxSize[0].inlineSize-contentRect.width,borderBoxSize[0].blockSize-contentRect.height]);else{var style=(0,dom.C2)(textarea);setRect([contentRect.width,contentRect.height,(0,dom.RH)(style),(0,dom.aY)(style)])}}));return observer.observe(textarea),function(){observer.disconnect()}}}),[]),(0,react.useLayoutEffect)((function(){var textarea=textAreaRef.current,backdrop=backdropRef.current;backdrop&&textarea&&(0,dom.Ku)(textarea,backdrop,caretColorRef,style)}),[style]),(0,react.useEffect)((function(){if(null!=selectionStart&&null!=selectionEnd&&onSelectionChange)if(focused){var rect=build_default()(backdropRef.current,selectionStart,selectionStart+1).getBoundingClientRect();onSelectionChange({focused:!0,top:rect.top,left:rect.left,height:rect.height,selectionStart,selectionEnd},value)}else onSelectionChange({focused:!1,selectionStart,selectionEnd},value)}),[focused,selectionStart,selectionEnd]),(0,react.useEffect)((function(){if((0,dom.G6)())return selectionStore._subscribe((function(){var el=textAreaRef.current;el&&setPos([el.scrollLeft,el.scrollTop])}))}),[]),(0,react.useEffect)((function(){var textarea=textAreaRef.current;autoHeight&&textarea&&(textarea.style.height="auto",textarea.style.height=textarea.scrollHeight+"px")})),(0,jsx_runtime.jsxs)("div",{style:(0,react.useMemo)((function(){var w=totalWidth,h=totalHeight;return style&&("string"==typeof style.width&&style.width.endsWith("%")&&(w=style.width),"string"==typeof style.height&&style.height.endsWith("%")&&(h=style.height)),{display:"inline-block",position:"relative",width:w,height:h}}),[totalWidth,totalHeight,style]),children:[(0,jsx_runtime.jsx)("div",{style:(0,react.useMemo)((function(){var s={position:"absolute",overflow:"hidden",top:0,left:0,width:totalWidth,height:totalHeight};return style?(["background","backgroundColor"].forEach((function(k){style[k]&&(s[k]=style[k])})),s):s}),[totalWidth,totalHeight,style]),children:(0,jsx_runtime.jsx)("div",{ref:backdropRef,"aria-hidden":!0,onClick:dom.UW,onMouseDown:dom.UW,onMouseUp:dom.UW,onMouseOver:dom.UW,onMouseOut:dom.UW,onMouseMove:dom.UW,children:(0,jsx_runtime.jsx)("div",{style:{width,height,overflow:"hidden"},children:(0,jsx_runtime.jsxs)("div",{style:(0,react.useMemo)((function(){return{transform:"translate("+-left+"px, "+-top+"px)",pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",textSizeAdjust:"100%",WebkitTextSizeAdjust:"100%",whiteSpace:"pre"}}),[left,top]),children:[(0,react.useMemo)((function(){return render?render(value):value}),[value,render]),CARET_DETECTOR]})})})}),(0,jsx_runtime.jsx)("input",Object.assign({},props,{ref:textAreaRef,value,style:(0,react.useMemo)((function(){return Object.assign({},style,{background:"transparent",margin:0,position:"absolute"})}),[style]),onScroll:(0,react.useCallback)((function(e){setPos([e.currentTarget.scrollLeft,e.currentTarget.scrollTop]),null==onScroll||onScroll(e)}),[onScroll]),onInput:(0,react.useCallback)((function(e){null==onInput||onInput(e),selectionStore._update()}),[onInput]),onCompositionStart:(0,react.useCallback)((function(e){selectionStore._setComposition(e.nativeEvent),null==onCompositionStart||onCompositionStart(e)}),[onCompositionStart]),onCompositionUpdate:(0,react.useCallback)((function(e){selectionStore._setComposition(e.nativeEvent),null==onCompositionUpdate||onCompositionUpdate(e)}),[onCompositionUpdate]),onCompositionEnd:(0,react.useCallback)((function(e){selectionStore._setComposition(null),null==onCompositionEnd||onCompositionEnd(e)}),[onCompositionEnd]),onKeyDown:(0,react.useCallback)((function(e){e.nativeEvent.isComposing||229===e.nativeEvent.keyCode||(null==onKeyDown||onKeyDown(e),selectionStore._update())}),[onKeyDown]),onClick:(0,react.useCallback)((function(e){null==onClick||onClick(e);var textarea=textAreaRef.current,backdrop=backdropRef.current;if(textarea&&backdrop){var pointed=(0,dom.vy)(textarea,backdrop,e);pointed&&(0,dom.Gr)(pointed,e.nativeEvent)}}),[onClick]),onMouseDown:(0,react.useCallback)((function(e){null==onMouseDown||onMouseDown(e),selectionStore._update();document.addEventListener("mouseup",(function mouseup(){selectionStore._update(),document.removeEventListener("mouseup",mouseup)}));var textarea=textAreaRef.current,backdrop=backdropRef.current;if(textarea&&backdrop){var pointed=(0,dom.vy)(textarea,backdrop,e);pointed&&(0,dom.Gr)(pointed,e.nativeEvent)}}),[onMouseDown]),onMouseUp:(0,react.useCallback)((function(e){null==onMouseUp||onMouseUp(e);var textarea=textAreaRef.current,backdrop=backdropRef.current;if(textarea&&backdrop){var pointed=(0,dom.vy)(textarea,backdrop,e);pointed&&(0,dom.Gr)(pointed,e.nativeEvent)}}),[onMouseUp]),onMouseMove:(0,react.useCallback)((function(e){null==onMouseMove||onMouseMove(e);var textarea=textAreaRef.current,backdrop=backdropRef.current;if(textarea&&backdrop){var pointed=(0,dom.vy)(textarea,backdrop,e);(0,dom.NS)(pointed,pointedRef,e.nativeEvent)}}),[onMouseMove]),onMouseLeave:(0,react.useCallback)((function(e){null==onMouseLeave||onMouseLeave(e),(0,dom.tQ)(pointedRef,e.nativeEvent,null)}),[onMouseLeave]),onFocus:(0,react.useCallback)((function(e){null==onFocus||onFocus(e),setFocused(!0)}),[onFocus]),onBlur:(0,react.useCallback)((function(e){null==onBlur||onBlur(e),setFocused(!1)}),[onBlur])}))]})}));try{RichInput.displayName="RichInput",RichInput.__docgenInfo={description:"",displayName:"RichInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},autoHeight:{defaultValue:null,description:"",name:"autoHeight",required:!1,type:{name:"boolean"}},onSelectionChange:{defaultValue:null,description:"",name:"onSelectionChange",required:!1,type:{name:"(pos: CaretPosition, value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/input.tsx#RichInput"]={docgenInfo:RichInput.__docgenInfo,name:"RichInput",path:"src/input.tsx#RichInput"})}catch(__react_docgen_typescript_loader_error){}function _2_Input_stories_slicedToArray(arr,i){return function _2_Input_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _2_Input_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _2_Input_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _2_Input_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _2_Input_stories_arrayLikeToArray(o,minLen)}(arr,i)||function _2_Input_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _2_Input_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const _2_Input_stories={component:RichInput};var style={paddingLeft:10,paddingRight:10},Basic={render:function render(){var _useState2=_2_Input_stories_slicedToArray((0,react.useState)("Lorem ipsum"),2),text=_useState2[0],setText=_useState2[1];return(0,jsx_runtime.jsx)(RichInput,{style,onChange:function onChange(e){return setText(e.target.value)},value:text,children:function children(v){return v.split("").map((function(t,i){return(0,jsx_runtime.jsx)("span",{style:{color:i%2==0?"red":void 0},children:t},i)}))}})}},WidthMax={render:function render(){var _useState4=_2_Input_stories_slicedToArray((0,react.useState)("Lorem ipsum"),2),text=_useState4[0],setText=_useState4[1];return(0,jsx_runtime.jsx)(RichInput,{style:{width:"100%"},onChange:function onChange(e){return setText(e.target.value)},value:text,children:function children(v){return v.split("").map((function(t,i){return(0,jsx_runtime.jsx)("span",{style:{color:i%2==0?"red":void 0},children:t},i)}))}})},name:"Width 100%"},__namedExportsOrder=["Basic","WidthMax"]},"./src/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,G6:()=>isSafari,Gr:()=>dispatchClonedMouseEvent,Ku:()=>syncBackdropStyle,NS:()=>dispatchMouseMoveEvent,RH:()=>getHorizontalPadding,UW:()=>stopPropagation,aY:()=>getVerticalPadding,tQ:()=>dispatchMouseOutEvent,vy:()=>getPointedElement});__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js");var isSafari=function isSafari(){var ua=navigator.userAgent.toLowerCase();return ua.indexOf("safari")>-1&&ua.indexOf("chrome")<=-1},TEXT_STYLE_KEYS=["direction","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","margin","marginTop","marginBottom","marginLeft","marginRight","border","borderWidth","borderTopWidth","borderBottomWidth","borderLeftWidth","borderRightWidth","borderStyle","borderTopStyle","borderBottomStyle","borderLeftStyle","borderRightStyle","fontSize","fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSizeAdjust","textAlign","textTransform","textIndent","letterSpacing","wordSpacing","lineHeight","whiteSpace","wordBreak","overflowWrap","tabSize","MozTabSize"],getPropertyValue=function getPropertyValue(style,key){return style.getPropertyValue(key)},setProperty=function setProperty(style,key,value){style.setProperty(key,value)},getValueFromStyle=function getValueFromStyle(style,key){var value=getPropertyValue(style,key);return value?parseInt(value,10):0},getStyle=getComputedStyle,getVerticalPadding=function getVerticalPadding(style){return getValueFromStyle(style,"padding-top")+getValueFromStyle(style,"padding-bottom")+getValueFromStyle(style,"border-top")+getValueFromStyle(style,"border-bottom")},getHorizontalPadding=function getHorizontalPadding(style){return getValueFromStyle(style,"padding-left")+getValueFromStyle(style,"padding-right")+getValueFromStyle(style,"border-left")+getValueFromStyle(style,"border-right")},getPointedElement=function getPointedElement(textarea,backdrop,e){var textareaStyle=textarea.style,backdropStyle=backdrop.style,prev=getPropertyValue(textareaStyle,"pointer-events"),backPrev=getPropertyValue(backdropStyle,"pointer-events");setProperty(textareaStyle,"pointer-events","none"),setProperty(backdropStyle,"pointer-events","auto");var pointed=document.elementFromPoint(e.clientX,e.clientY);return setProperty(textareaStyle,"pointer-events",prev),setProperty(backdropStyle,"pointer-events",backPrev),isInsideBackdrop(pointed,backdrop)?pointed:null},isInsideBackdrop=function isInsideBackdrop(pointed,backdrop){return!!pointed&&backdrop!==pointed&&backdrop.contains(pointed)},dispatchMouseEvent=function dispatchMouseEvent(target,type,init){target.dispatchEvent(new MouseEvent(type,init))},dispatchClonedMouseEvent=function dispatchClonedMouseEvent(pointed,e){dispatchMouseEvent(pointed,e.type,e)},dispatchMouseMoveEvent=function dispatchMouseMoveEvent(pointed,prevPointed,e){pointed&&dispatchClonedMouseEvent(pointed,e),prevPointed.current!==pointed&&(dispatchMouseOutEvent(prevPointed,e,pointed),pointed&&dispatchMouseEvent(pointed,"mouseover",e))},dispatchMouseOutEvent=function dispatchMouseOutEvent(prevPointed,e,pointed){prevPointed.current&&dispatchMouseEvent(prevPointed.current,"mouseout",e),prevPointed.current=pointed},stopPropagation=function stopPropagation(event){event.stopPropagation()},syncBackdropStyle=function syncBackdropStyle(textarea,backdrop,caretColorRef,style){var computedTextAreaStyle=getStyle(textarea),textareaStyle=textarea.style,backdropStyle=backdrop.style;caretColorRef.current||(caretColorRef.current=getPropertyValue(computedTextAreaStyle,"color")),TEXT_STYLE_KEYS.forEach((function(k){backdropStyle[k]=computedTextAreaStyle[k]})),textareaStyle.color=backdropStyle.borderColor="transparent",textareaStyle.caretColor=(null==style?void 0:style.caretColor)||caretColorRef.current}},"./src/selection.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>initSelectionStore});__webpack_require__("./node_modules/core-js/modules/web.timers.js");var NOOP=function NOOP(){},initSelectionStore=function initSelectionStore(ref){var listener=NOOP,cache=[null,null],compositionEvent=null,handle={_subscribe:function _subscribe(callback){return listener=callback,function(){listener=NOOP}},_update:function _update(){setTimeout(listener)},_setComposition:function _setComposition(comp){compositionEvent=comp},_getSelectionStart:function _getSelectionStart(){var el=ref.current;if(!el)return null;var pos=el.selectionStart;return compositionEvent&&(pos=Math.min(pos,el.selectionEnd-compositionEvent.data.length)),pos},_getSelectionEnd:function _getSelectionEnd(){var el=ref.current;if(!el)return null;var pos=el.selectionEnd;return compositionEvent&&(pos=Math.min(pos,el.selectionStart+compositionEvent.data.length)),pos},_getSelection:function _getSelection(){var selectionStart=handle._getSelectionStart(),selectionEnd=handle._getSelectionEnd();return cache[0]===selectionStart&&cache[1]===selectionEnd?cache:cache=[selectionStart,selectionEnd]}};return handle}},"./node_modules/core-js/modules/es.array.index-of.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$indexOf=__webpack_require__("./node_modules/core-js/internals/array-includes.js").indexOf,arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),nativeIndexOf=[].indexOf,NEGATIVE_ZERO=!!nativeIndexOf&&1/[1].indexOf(1,-0)<0,STRICT_METHOD=arrayMethodIsStrict("indexOf");$({target:"Array",proto:!0,forced:NEGATIVE_ZERO||!STRICT_METHOD},{indexOf:function indexOf(searchElement){return NEGATIVE_ZERO?nativeIndexOf.apply(this,arguments)||0:$indexOf(this,searchElement,arguments.length>1?arguments[1]:void 0)}})},"./node_modules/core-js/modules/es.array.is-array.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/internals/export.js")({target:"Array",stat:!0},{isArray:__webpack_require__("./node_modules/core-js/internals/is-array.js")})},"./node_modules/core-js/modules/web.timers.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),userAgent=__webpack_require__("./node_modules/core-js/internals/engine-user-agent.js"),slice=[].slice,wrap=function(scheduler){return function(handler,timeout){var boundArgs=arguments.length>2,args=boundArgs?slice.call(arguments,2):void 0;return scheduler(boundArgs?function(){("function"==typeof handler?handler:Function(handler)).apply(this,args)}:handler,timeout)}};$({global:!0,bind:!0,forced:/MSIE .\./.test(userAgent)},{setTimeout:wrap(global.setTimeout),setInterval:wrap(global.setInterval)})},"./node_modules/range-at-index/build/index.js":module=>{"use strict";module.exports=function RangeAtIndex(el,index,offset,range){var doc=el.ownerDocument;range||(range=doc.createRange());var iterator=doc.createNodeIterator(el,NodeFilter.SHOW_TEXT,null,!1),start={},end={},node=void 0,val=void 0,len=void 0;for(;node=iterator.nextNode();)val=node.nodeValue,len=val.length,!start.node&&len>index&&(start.node=node,start.offset=index),!end.node&&len>=offset&&(end.node=node,end.offset=offset),index-=len,offset-=len;start.node&&range.setStart(start.node,start.offset);end.node&&range.setEnd(end.node,end.offset);return range}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var e=__webpack_require__("./node_modules/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"./node_modules/use-sync-external-store/shim/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")}}]);