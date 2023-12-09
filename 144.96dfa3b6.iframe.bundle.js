"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[144],{"./src/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Fx:()=>hasPercentageUnit,G6:()=>isSafari,Gr:()=>dispatchClonedMouseEvent,Ku:()=>syncBackdropStyle,NS:()=>dispatchMouseMoveEvent,RH:()=>getHorizontalPadding,UW:()=>stopPropagation,aY:()=>getVerticalPadding,tQ:()=>dispatchMouseOutEvent,vy:()=>getPointedElement,yl:()=>listenEvent});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils.tsx"),isSafari=function(){if("undefined"==typeof navigator)return!1;var ua=navigator.userAgent.toLowerCase();return ua.indexOf("safari")>-1&&-1>=ua.indexOf("chrome")},TEXT_STYLE_KEYS=["direction","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","margin","marginTop","marginBottom","marginLeft","marginRight","border","borderWidth","borderTopWidth","borderBottomWidth","borderLeftWidth","borderRightWidth","borderStyle","borderTopStyle","borderBottomStyle","borderLeftStyle","borderRightStyle","fontSize","fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSizeAdjust","textAlign","textTransform","textIndent","letterSpacing","wordSpacing","lineHeight","whiteSpace","wordBreak","overflowWrap","tabSize","MozTabSize"],getPropertyValue=function(style,key){return style.getPropertyValue(key)},setProperty=function(style,key,value){style.setProperty(key,value)},getValueFromStyle=function(style,key){var value=getPropertyValue(style,key);return value?parseInt(value,10):0},getStyle=function(e){return getComputedStyle(e)},hasPercentageUnit=function(widthOrHeight){return"string"==typeof widthOrHeight&&widthOrHeight.endsWith("%")},getVerticalPadding=function(style){return getValueFromStyle(style,"padding-top")+getValueFromStyle(style,"padding-bottom")+getValueFromStyle(style,"border-top")+getValueFromStyle(style,"border-bottom")},getHorizontalPadding=function(style){return getValueFromStyle(style,"padding-left")+getValueFromStyle(style,"padding-right")+getValueFromStyle(style,"border-left")+getValueFromStyle(style,"border-right")},getPointedElement=function(textarea,backdrop,e){var POINTER_EVENTS="pointer-events",textareaStyle=textarea.style,backdropStyle=backdrop.style,prev=getPropertyValue(textareaStyle,POINTER_EVENTS),backPrev=getPropertyValue(backdropStyle,POINTER_EVENTS);setProperty(textareaStyle,POINTER_EVENTS,"none"),setProperty(backdropStyle,POINTER_EVENTS,"auto");var pointed=document.elementFromPoint(e.clientX,e.clientY);return(setProperty(textareaStyle,POINTER_EVENTS,prev),setProperty(backdropStyle,POINTER_EVENTS,backPrev),isInsideBackdrop(pointed,backdrop))?pointed:null},isInsideBackdrop=function(pointed,backdrop){return!!pointed&&backdrop!==pointed&&backdrop.contains(pointed)},dispatchMouseEvent=function(target,type,init){target.dispatchEvent(new MouseEvent(type,init))},dispatchClonedMouseEvent=function(pointed,e){dispatchMouseEvent(pointed,e.type,e)},dispatchMouseMoveEvent=function(pointed,prevPointed,e){pointed&&dispatchClonedMouseEvent(pointed,e),prevPointed!==pointed&&(dispatchMouseOutEvent(prevPointed,e),pointed&&dispatchMouseEvent(pointed,"mouseover",e))},dispatchMouseOutEvent=function(prevPointed,e){prevPointed&&dispatchMouseEvent(prevPointed,"mouseout",e)},stopPropagation=function(event){event.stopPropagation()},syncBackdropStyle=function(textarea,backdrop,caretColorRef,style){var computedTextAreaStyle=getStyle(textarea),textareaStyle=textarea.style,backdropStyle=backdrop.style;caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]||(caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]=getPropertyValue(computedTextAreaStyle,"color")),TEXT_STYLE_KEYS.forEach(function(k){backdropStyle[k]=computedTextAreaStyle[k]}),textareaStyle.color=backdropStyle.borderColor="transparent",textareaStyle.caretColor=(null==style?void 0:style.caretColor)||caretColorRef[_utils__WEBPACK_IMPORTED_MODULE_0__.o]},listenEvent=function(el,key,cb){return el.addEventListener(key,cb),function(){el.removeEventListener(key,cb)}}},"./src/observer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>createTextareaObserver});var _dom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/dom.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var createTextareaObserver=function(textarea,backdrop,selectionStore,onResize,onFocus){var prevPointed=null,observer=new ResizeObserver(function(param){var entry=_sliced_to_array(param,1)[0],_entry_contentRect=entry.contentRect,width=_entry_contentRect.width,height=_entry_contentRect.height,borderBoxSize=entry.borderBoxSize;if(borderBoxSize&&borderBoxSize[0]){onResize([width,height,borderBoxSize[0].inlineSize-width,borderBoxSize[0].blockSize-height]);return}var style=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.C2)(textarea);onResize([width,height,(0,_dom__WEBPACK_IMPORTED_MODULE_0__.RH)(style),(0,_dom__WEBPACK_IMPORTED_MODULE_0__.aY)(style)])}),cleanUpOnFocus=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"focus",function(){onFocus(!0)}),cleanUpOnBlur=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"blur",function(){onFocus(!1)}),cleanUpOnScroll=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"scroll",function(){var scrollTop=textarea.scrollTop,scrollLeft=textarea.scrollLeft;backdrop.style.transform="translate(".concat(-scrollLeft,"px, ").concat(-scrollTop,"px)")}),cleanUpOnMouseDown=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"mousedown",function(e){selectionStore._updateSeletion();var cleanup=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(document,"mouseup",function(){selectionStore._updateSeletion(),cleanup()}),pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_0__.Gr)(pointed,e)}),cleanUpOnMouseMove=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"mouseup",function(e){var pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_0__.Gr)(pointed,e)}),cleanUpMouseMove=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"mousemove",function(e){var p=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.vy)(textarea,backdrop,e);(0,_dom__WEBPACK_IMPORTED_MODULE_0__.NS)(p,prevPointed,e),prevPointed=p}),cleanUpOnMouseLeave=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"mouseleave",function(e){(0,_dom__WEBPACK_IMPORTED_MODULE_0__.tQ)(prevPointed,e),prevPointed=null}),cleanUpOnClick=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"click",function(e){var pointed=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.vy)(textarea,backdrop,e);pointed&&(0,_dom__WEBPACK_IMPORTED_MODULE_0__.Gr)(pointed,e)}),cleanUpOnInput=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"input",function(){selectionStore._updateSeletion()}),cleanUpOnCompositionStart=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"compositionstart",function(e){selectionStore._setComposition(e)}),cleanUpOnCompositionUpdate=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"compositionupdate",function(e){selectionStore._setComposition(e)}),cleanUpOnCompositionEnd=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.yl)(textarea,"compositionend",function(){selectionStore._setComposition()});return observer.observe(textarea),function(){cleanUpOnFocus(),cleanUpOnBlur(),cleanUpOnScroll(),cleanUpOnMouseDown(),cleanUpOnMouseMove(),cleanUpMouseMove(),cleanUpOnMouseLeave(),cleanUpOnClick(),cleanUpOnInput(),cleanUpOnCompositionStart(),cleanUpOnCompositionUpdate(),cleanUpOnCompositionEnd(),observer.disconnect()}}},"./src/selection.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>initSelectionStore});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils.tsx"),initSelectionStore=function(ref,onSelectionUpdate){var compositionEvent,prevSelection=[null,null],getSelection=function(){var selectionStart=handle._getSelectionStart(),selectionEnd=handle._getSelectionEnd();return prevSelection[0]===selectionStart&&prevSelection[1]===selectionEnd?prevSelection:prevSelection=[selectionStart,selectionEnd]},handle={_updateSeletion:function _updateSeletion(){setTimeout(function(){onSelectionUpdate(getSelection())})},_setComposition:function _setComposition(event){compositionEvent=event},_getSelectionStart:function _getSelectionStart(){var el=ref[_utils__WEBPACK_IMPORTED_MODULE_0__.o];if(!el)return 0;var pos=el.selectionStart;return compositionEvent?Math.min(pos,el.selectionEnd-compositionEvent.data.length):pos},_getSelectionEnd:function _getSelectionEnd(){var el=ref[_utils__WEBPACK_IMPORTED_MODULE_0__.o];if(!el)return 0;var pos=el.selectionEnd;return compositionEvent?Math.min(pos,el.selectionStart+compositionEvent.data.length):pos}};return handle}},"./src/textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>RichTextarea});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_vendor_range_at_index__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/vendor/range-at-index.js"),_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/dom.ts"),_selection__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/selection.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/useIsomorphicLayoutEffect.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils.tsx"),_useStatic__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/useStatic.ts"),_observer__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/observer.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Backdrop=(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function(param){var backdropRef=param._ref,handle=param._handle,render=param._render,width=param._width,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),2),value=_useState[0],setValue=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(handle,function(){return setValue},[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{ref:backdropRef,"aria-hidden":!0,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return{width:width,transform:"translate(0px, 0px)",pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",boxSizing:"content-box",textSizeAdjust:"100%",WebkitTextSizeAdjust:"100%",MozTextSizeAdjust:"100%"}},[width]),onClick:_dom__WEBPACK_IMPORTED_MODULE_2__.UW,onMouseDown:_dom__WEBPACK_IMPORTED_MODULE_2__.UW,onMouseUp:_dom__WEBPACK_IMPORTED_MODULE_2__.UW,onMouseOver:_dom__WEBPACK_IMPORTED_MODULE_2__.UW,onMouseOut:_dom__WEBPACK_IMPORTED_MODULE_2__.UW,onMouseMove:_dom__WEBPACK_IMPORTED_MODULE_2__.UW,children:[(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return render?render(value):value},[value,render]),_utils__WEBPACK_IMPORTED_MODULE_3__.N]})}),RichTextarea=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var render=_param.children,autoHeight=_param.autoHeight,style=_param.style,onChange=_param.onChange,onKeyDown=_param.onKeyDown,onSelectionChange=_param.onSelectionChange,props=_object_without_properties(_param,["children","autoHeight","style","onChange","onKeyDown","onSelectionChange"]),textAreaRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),backdropRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),backdropHandle=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([0,0,0,0]),2),_useState_=_sliced_to_array(_useState[0],4),width=_useState_[0],height=_useState_[1],hPadding=_useState_[2],vPadding=_useState_[3],setRect=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),focused=_useState1[0],setFocused=_useState1[1],caretColorRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([null,null]),2),_useState_1=_sliced_to_array(_useState2[0],2),selectionStart=_useState_1[0],selectionEnd=_useState_1[1],setSelection=_useState2[1],selectionStore=(0,_useStatic__WEBPACK_IMPORTED_MODULE_4__.T)(function(){return(0,_selection__WEBPACK_IMPORTED_MODULE_5__.n)(textAreaRef,setSelection)}),totalWidth=width+hPadding,totalHeight=height+vPadding,isSizeCalculated=!!(totalWidth+totalHeight);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref,function(){var el=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_3__.o],overrides={get selectionStart(){return selectionStore._getSelectionStart()},get selectionEnd(){return selectionStore._getSelectionEnd()},setRangeText:function setRangeText(text,start,end,preserve){el.setRangeText?el.setRangeText(text,start,end,preserve):(el.focus(),el.selectionStart=start,el.selectionEnd=end,document.execCommand("insertText",!1,text)),el.dispatchEvent(new Event("input",{bubbles:!0}))}};return new Proxy(el,{get:function get(target,prop){if(overrides[prop])return overrides[prop];var value=target[prop];return"function"==typeof value?value.bind(target):value},set:function set(target,prop,value){return target[prop]=value,!0}})},[]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.L)(function(){var textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_3__.o],backdrop=backdropRef[_utils__WEBPACK_IMPORTED_MODULE_3__.o];if(textarea&&backdrop)return(0,_observer__WEBPACK_IMPORTED_MODULE_7__._)(textarea,backdrop,selectionStore,setRect,setFocused)},[]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.L)(function(){var textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_3__.o];textarea&&backdropHandle[_utils__WEBPACK_IMPORTED_MODULE_3__.o](textarea.value)},[props.value]),(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.L)(function(){var textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_3__.o],backdrop=backdropRef[_utils__WEBPACK_IMPORTED_MODULE_3__.o];backdrop&&textarea&&(0,_dom__WEBPACK_IMPORTED_MODULE_2__.Ku)(textarea,backdrop,caretColorRef,style)},[style]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){if(null!=selectionStart&&null!=selectionEnd&&onSelectionChange){if(focused){var rect=(0,_vendor_range_at_index__WEBPACK_IMPORTED_MODULE_8__.Z)(backdropRef[_utils__WEBPACK_IMPORTED_MODULE_3__.o],selectionStart,selectionStart+1).getBoundingClientRect();onSelectionChange({focused:!0,top:rect.top,left:rect.left,height:rect.height,selectionStart:selectionStart,selectionEnd:selectionEnd})}else onSelectionChange({focused:!1,selectionStart:selectionStart,selectionEnd:selectionEnd})}},[focused,selectionStart,selectionEnd]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){var textarea=textAreaRef[_utils__WEBPACK_IMPORTED_MODULE_3__.o];autoHeight&&textarea&&(textarea.style.height="auto",textarea.style.height="".concat(textarea.scrollHeight,"px"))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){var w=totalWidth,h=totalHeight;return style&&((0,_dom__WEBPACK_IMPORTED_MODULE_2__.Fx)(style.width)&&(w=style.width),(0,_dom__WEBPACK_IMPORTED_MODULE_2__.Fx)(style.height)&&(h=style.height)),{display:"inline-block",position:"relative",width:w,height:h}},[totalWidth,totalHeight,style]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){var s={position:"absolute",overflow:"hidden",top:0,left:0,width:totalWidth,height:totalHeight};return style&&["background","backgroundColor"].forEach(function(k){style[k]&&(s[k]=style[k])}),s},[totalWidth,totalHeight,style]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Backdrop,{_ref:backdropRef,_handle:backdropHandle,_render:render,_width:width})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",_object_spread_props(_object_spread({},props),{ref:textAreaRef,style:(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return _object_spread(_object_spread_props(_object_spread({},style),{background:"transparent",margin:0,position:"absolute"}),!isSizeCalculated&&{position:void 0,verticalAlign:"top"})},[style,isSizeCalculated]),onChange:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(e){var _backdropHandle_refKey;null===(_backdropHandle_refKey=backdropHandle[_utils__WEBPACK_IMPORTED_MODULE_3__.o])||void 0===_backdropHandle_refKey||_backdropHandle_refKey.call(backdropHandle,e.target.value),null==onChange||onChange(e)},[onChange]),onKeyDown:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(e){e.nativeEvent.isComposing||229===e.nativeEvent.keyCode||(null==onKeyDown||onKeyDown(e),selectionStore._updateSeletion())},[onKeyDown])}))]})})},"./src/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/useStatic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useStatic});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils.tsx"),useStatic=function(init){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref[_utils__WEBPACK_IMPORTED_MODULE_1__.o]||(ref[_utils__WEBPACK_IMPORTED_MODULE_1__.o]=init())}},"./src/utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>CARET_DETECTOR,o:()=>refKey});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),refKey="current",CARET_DETECTOR=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"transparent"},children:"​"})},"./src/vendor/range-at-index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__=function(el,index,offset,range){var node,len,doc=el.ownerDocument;range||(range=doc.createRange());for(var iterator=doc.createNodeIterator(el,NodeFilter.SHOW_TEXT,null,!1),start={},end={};node=iterator.nextNode();)len=node.nodeValue.length,!start.node&&len>index&&(start.node=node,start.offset=index),!end.node&&len>=offset&&(end.node=node,end.offset=offset),index-=len,offset-=len;return start.node&&range.setStart(start.node,start.offset),end.node&&range.setEnd(end.node,end.offset),range}}}]);