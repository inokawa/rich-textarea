"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[946],{"./stories/examples/Prism.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Prism:()=>Prism,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/textarea.tsx"),prism_react_renderer__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/prism-react-renderer/dist/index.js"),prism_react_renderer_themes_dracula__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/prism-react-renderer/themes/dracula/index.js"),prettier__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/prettier/standalone.js"),prettier__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(prettier__WEBPACK_IMPORTED_MODULE_14__),prettier_parser_typescript__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/prettier/parser-typescript.js"),prettier_parser_typescript__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(prettier_parser_typescript__WEBPACK_IMPORTED_MODULE_15__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_17__.p};var style={width:"600px",caretColor:"white",backgroundColor:"rgb(40, 42, 54)",maxHeight:"500px"},renderer=function renderer(value){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(prism_react_renderer__WEBPACK_IMPORTED_MODULE_18__.ZP,Object.assign({},prism_react_renderer__WEBPACK_IMPORTED_MODULE_18__.lG,{theme:prism_react_renderer_themes_dracula__WEBPACK_IMPORTED_MODULE_19__.Z,code:value,language:"jsx",children:function children(_ref){var className=_ref.className,style=_ref.style,tokens=_ref.tokens,getLineProps=_ref.getLineProps,getTokenProps=_ref.getTokenProps;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className,style,children:tokens.map((function(line,i){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",Object.assign({},getLineProps({line,key:i}),{children:line.map((function(token,key){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span",Object.assign({},getTokenProps({token,key})))}))}))}))})}}))};renderer.displayName="renderer";var Prism={render:function render(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_13__.useState)('import React, { useState } from "react";\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}'),2),text=_useState2[0],setText=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("button",{onClick:function onClick(){return setText((function(prev){return prettier__WEBPACK_IMPORTED_MODULE_14___default().format(prev,{parser:"typescript",plugins:[prettier_parser_typescript__WEBPACK_IMPORTED_MODULE_15___default()]})}))},children:"format"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_src__WEBPACK_IMPORTED_MODULE_17__.p,{style,onChange:function onChange(e){return setText(e.target.value)},value:text,autoHeight:!0,children:renderer})})]})}},__namedExportsOrder=["Prism"]}}]);