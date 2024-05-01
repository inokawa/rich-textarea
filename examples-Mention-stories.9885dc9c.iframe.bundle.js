/*! For license information please see examples-Mention-stories.9885dc9c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[247],{"./stories/examples/Mention.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Mention:()=>Mention,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-dom/index.js"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/textarea.tsx"),_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/renderers.tsx"),_mocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./stories/mocks.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_3__.t};var style={width:"400px",height:"300px"},MENTION_REG=/\B@([\-+\w]*)$/,MENTION_HIGHLIGHT_REG=new RegExp("(".concat(_mocks__WEBPACK_IMPORTED_MODULE_4__.j.map((function(c){return"@".concat(c)})).join("|"),")"),"g"),mentionRenderer=(0,_src__WEBPACK_IMPORTED_MODULE_5__.x)([[MENTION_HIGHLIGHT_REG,{background:"#EAF5F9",color:"#4276AA",borderRadius:"3px"}]]),Menu=function(param){var chars=param.chars,index=param.index,top=param.top,left=param.left,complete=param.complete;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{position:"fixed",top,left,fontSize:"12px",border:"solid 1px gray",borderRadius:"3px",background:"white",cursor:"pointer"},children:chars.map((function(c,i){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:_object_spread({padding:"4px"},index===i&&{color:"white",background:"#2A6AD3"}),onMouseDown:function(e){e.preventDefault(),complete(i)},children:c},c)}))})},Mention={render:function(){var _match_,ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Hi, @Captain Gregor and @Jaxxon . Please enter @ to show suggestions.\n\n"),2),text=_useState[0],setText=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),2),pos=_useState1[0],setPos=_useState1[1],_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),2),index=_useState2[0],setIndex=_useState2[1],targetText=pos?text.slice(0,pos.caret):text,match=pos&&targetText.match(MENTION_REG),name=null!==(_match_=null==match?void 0:match[1])&&void 0!==_match_?_match_:"",filtered=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return _mocks__WEBPACK_IMPORTED_MODULE_4__.j.filter((function(c){return c.toLowerCase().startsWith(name.toLowerCase())})).slice(0,8)}),[name]),complete=function(i){if(ref.current&&pos){var selected=filtered[i];ref.current.setRangeText("@".concat(selected," "),pos.caret-name.length-1,pos.caret,"end"),setPos(null),setIndex(0)}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.t,{ref,style,onChange:function(e){return setText(e.target.value)},value:text,onKeyDown:function(e){if(pos&&filtered.length)switch(e.code){case"ArrowUp":e.preventDefault();var nextIndex=index<=0?filtered.length-1:index-1;setIndex(nextIndex);break;case"ArrowDown":e.preventDefault();var prevIndex=index>=filtered.length-1?0:index+1;setIndex(prevIndex);break;case"Enter":e.preventDefault(),complete(index);break;case"Escape":e.preventDefault(),setPos(null),setIndex(0)}},onSelectionChange:function(r){r.focused&&MENTION_REG.test(text.slice(0,r.selectionStart))?(setPos({top:r.top+r.height,left:r.left,caret:r.selectionStart}),setIndex(0)):(setPos(null),setIndex(0))},children:mentionRenderer}),pos&&(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Menu,{top:pos.top,left:pos.left,chars:filtered,index,complete}),document.body)]})}};const __namedExportsOrder=["Mention"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/renderers.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>createRegexRenderer});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var createRegexRenderer=function(matchers){var allStyles=matchers.map((function(param){return _sliced_to_array(param,2)[1]}));return function(value){var _loop=function(i){var _indexes_,start=indexes[i],end=null!==(_indexes_=indexes[i+1])&&void 0!==_indexes_?_indexes_:value.length;if(start===end)return"continue";var headValue=value.slice(prevEnd,start);headValue&&res.push(headValue);var startStyles=startToStyleMap.get(start),endStyles=endToStyleMap.get(end);startStyles&&(startStyles.forEach((function(s){activeStyles.push(s)})),activeStyles.sort((function(a,b){return allStyles.indexOf(b)-allStyles.indexOf(a)})));var v=value.slice(start,end);res.push(activeStyles.reduceRight((function(acc,styleOrRender,j){var key=0===j?String(start):void 0;return"function"==typeof styleOrRender?styleOrRender({children:acc,value:v,key}):(0,jsx_runtime.jsx)("span",{style:styleOrRender,children:acc},key)}),v)),endStyles&&endStyles.forEach((function(s){activeStyles.splice(activeStyles.indexOf(s),1)})),prevEnd=end},_matchers_reduce=_sliced_to_array(matchers.reduce((function(acc,param){var _param=_sliced_to_array(param,2),matcher=_param[0],style=_param[1];return function(reg,text){for(var results=[],match=null;match=reg.exec(text);)results.push(match);return results}(matcher,value).forEach((function(m){var start=m.index,end=m.index+m[0].length;acc[0].add(start).add(end);var startStyles=acc[1].get(start),endStyles=acc[2].get(end);startStyles||acc[1].set(start,startStyles=[]),endStyles||acc[2].set(end,endStyles=[]),startStyles.push(style),endStyles.push(style)})),acc}),[new Set,new Map,new Map]),3),indexSet=_matchers_reduce[0],startToStyleMap=_matchers_reduce[1],endToStyleMap=_matchers_reduce[2],indexes=Array.from(indexSet);indexes.sort((function(a,b){return a-b}));for(var prevEnd=0,activeStyles=[],res=[],i=0;i<indexes.length;i++)_loop(i);var tailValue=value.slice(prevEnd);return tailValue&&res.push(tailValue),res}}}}]);