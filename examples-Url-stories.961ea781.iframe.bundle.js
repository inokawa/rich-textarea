/*! For license information please see examples-Url-stories.961ea781.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[750],{"./stories/examples/Url.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Url:()=>Url,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/textarea.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/renderers/regex/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_2__.t};var style={width:"400px",height:"300px"},regexRenderer=(0,_src__WEBPACK_IMPORTED_MODULE_3__.x)([[/https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g,function(param){var children=param.children,key=param.key,value=param.value;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:value,target:"_blank",children},key)}]]),Url={render:function(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Click this url https://github.com/inokawa/rich-textarea !\n\n"),2),text=_useState[0],setText=_useState[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.t,{style,onChange:function(e){return setText(e.target.value)},value:text,children:regexRenderer})})}};const __namedExportsOrder=["Url"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/renderers/regex/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>createCSSCustomHighlightRenderer,x:()=>createRegexRenderer});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),execReg=function(reg,text){for(var results=[],match=null;match=reg.exec(text);)results.push(match);return results},useIsomorphicLayoutEffect=__webpack_require__("./src/useIsomorphicLayoutEffect.ts"),react=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _construct(Parent,args,Class){return _construct=function _is_native_reflect_construct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var instance=new(Function.bind.apply(Parent,a));return Class&&_set_prototype_of(instance,Class.prototype),instance},_construct.apply(null,arguments)}function _set_prototype_of(o,p){return _set_prototype_of=Object.setPrototypeOf||function setPrototypeOf(o,p){return o.__proto__=p,o},_set_prototype_of(o,p)}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupported_iterable_to_array(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupported_iterable_to_array(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_array_like_to_array(o,minLen):void 0}}var createRegexRenderer=function(matchers){var allStyles=matchers.map((function(param){return _sliced_to_array(param,2)[1]}));return function(value){var _loop=function(i){var _indexes_,start=indexes[i],end=null!==(_indexes_=indexes[i+1])&&void 0!==_indexes_?_indexes_:value.length;if(start===end)return"continue";var headValue=value.slice(prevEnd,start);headValue&&res.push(headValue);var startStyles=startToStyleMap.get(start),endStyles=endToStyleMap.get(end);startStyles&&(startStyles.forEach((function(s){activeStyles.push(s)})),activeStyles.sort((function(a,b){return allStyles.indexOf(b)-allStyles.indexOf(a)})));var v=value.slice(start,end);res.push(activeStyles.reduceRight((function(acc,styleOrRender,j){var key=0===j?String(start):void 0;return"function"==typeof styleOrRender?styleOrRender({children:acc,value:v,key}):(0,jsx_runtime.jsx)("span",{style:styleOrRender,children:acc},key)}),v)),endStyles&&endStyles.forEach((function(s){activeStyles.splice(activeStyles.indexOf(s),1)})),prevEnd=end},_matchers_reduce=_sliced_to_array(matchers.reduce((function(acc,param){var _param=_sliced_to_array(param,2),matcher=_param[0],style=_param[1];return execReg(matcher,value).forEach((function(m){var start=m.index,end=m.index+m[0].length;acc[0].add(start).add(end);var startStyles=acc[1].get(start),endStyles=acc[2].get(end);startStyles||acc[1].set(start,startStyles=[]),endStyles||acc[2].set(end,endStyles=[]),startStyles.push(style),endStyles.push(style)})),acc}),[new Set,new Map,new Map]),3),indexSet=_matchers_reduce[0],startToStyleMap=_matchers_reduce[1],endToStyleMap=_matchers_reduce[2],indexes=Array.from(indexSet);indexes.sort((function(a,b){return a-b}));for(var prevEnd=0,activeStyles=[],res=[],i=0;i<indexes.length;i++)_loop(i);var tailValue=value.slice(prevEnd);return tailValue&&res.push(tailValue),res}},createCSSHighlightID=function(i){return"rich-textarea-".concat(i)},CSSHighlighter=(0,react.memo)((function(param){var value=param._value,regexes=param._regexes,ref=(0,react.useRef)(null);return(0,useIsomorphicLayoutEffect.E)((function(){var el=ref.current.firstChild,highlights=regexes.flatMap((function(r,i){var highlight=_construct(Highlight,_to_consumable_array(execReg(r,value).map((function(m){var start=m.index,end=m.index+m[0].length,range=new Range;return range.setStart(el,start),range.setEnd(el,end),range}))));return CSS.highlights.set(createCSSHighlightID(i),highlight),highlight}));return function(){highlights.forEach((function(h,i){CSS.highlights.delete(createCSSHighlightID(i)),h.clear()}))}}),[value]),(0,jsx_runtime.jsx)("div",{ref,children:value})})),createCSSCustomHighlightRenderer=function(matchers){var styleStr=matchers.reduce((function(acc,param,i){var style=_sliced_to_array(param,2)[1];return acc+"::highlight(".concat(createCSSHighlightID(i),"){").concat(style,"}")}),""),regexes=matchers.map((function(param){return _sliced_to_array(param,1)[0]}));return function(value){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(CSSHighlighter,{_value:value,_regexes:regexes}),(0,jsx_runtime.jsx)("style",{children:styleStr})]})}}}}]);