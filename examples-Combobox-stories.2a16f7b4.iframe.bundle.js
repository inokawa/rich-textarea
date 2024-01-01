"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[774],{"./stories/examples/Combobox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Combobox:()=>Combobox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/textarea.tsx"),_mocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/mocks.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import { StoryObj } from "@storybook/react";\nimport React, { useEffect, useMemo, useRef, useState } from "react";\nimport { RichTextarea, RichTextareaHandle } from "../../src";\nimport { CHARACTERS } from "../mocks";\n\nexport default {\n  component: RichTextarea,\n};\n\nconst INPUT_HEIGHT = 20;\nconst INPUT_WIDTH = 400;\n\nconst style: React.CSSProperties = {\n  height: INPUT_HEIGHT,\n  width: INPUT_WIDTH,\n  whiteSpace: "pre",\n  overflowWrap: "normal",\n  resize: "none",\n};\n\nconst Menu = ({\n  index,\n  items,\n  onSelect,\n}: {\n  index: number;\n  items: string[];\n  onSelect: (index: number) => void;\n}) => {\n  const ref = useRef<HTMLUListElement>(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.children[index]?.scrollIntoView();\n  }, [index]);\n\n  return (\n    <div\n      style={{\n        position: "absolute",\n        overflowY: "auto",\n        maxHeight: 200,\n        top: INPUT_HEIGHT + 4,\n        left: 0,\n        width: INPUT_WIDTH,\n        fontSize: "12px",\n        border: "solid 1px gray",\n        borderRadius: "3px",\n      }}\n    >\n      <ul\n        ref={ref}\n        style={{\n          listStyleType: "none",\n          margin: 0,\n          padding: 0,\n          cursor: "pointer",\n          background: "white",\n        }}\n      >\n        {items.map((item, i) => (\n          <li\n            key={item}\n            style={{\n              ...(index === i && {\n                color: "white",\n                background: "#2A6AD3",\n              }),\n            }}\n            onMouseDown={() => onSelect(i)}\n          >\n            {item}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n};\n\nexport const Combobox: StoryObj = {\n  render: () => {\n    const ref = useRef<RichTextareaHandle>(null);\n\n    const [text, setText] = useState("");\n\n    const [index, setIndex] = useState<number>(-1);\n\n    const [focused, setFocused] = useState(false);\n\n    const filtered = useMemo(\n      () =>\n        CHARACTERS.filter((c) =>\n          c.toLowerCase().startsWith(text.toLowerCase())\n        ),\n      [text]\n    );\n\n    const complete = (i: number) => {\n      setText(filtered[i]);\n      setIndex(-1);\n      ref.current?.blur();\n    };\n\n    return (\n      <div style={{ position: "relative", padding: 0 }}>\n        <RichTextarea\n          ref={ref}\n          rows={1}\n          style={style}\n          onChange={(e) => setText(e.target.value)}\n          value={text}\n          placeholder="Please select..."\n          onFocus={() => setFocused(true)}\n          onBlur={() => setFocused(false)}\n          onKeyDown={(e) => {\n            if (!filtered.length) return;\n            switch (e.code) {\n              case "ArrowUp":\n                e.preventDefault();\n                const nextIndex =\n                  index === -1 ? filtered.length - 1 : index - 1;\n                setIndex(nextIndex);\n                break;\n              case "ArrowDown":\n                e.preventDefault();\n                const prevIndex = index >= filtered.length - 1 ? -1 : index + 1;\n                setIndex(prevIndex);\n                break;\n              case "Enter":\n                e.preventDefault();\n              case "Space":\n                if (index === -1) break;\n                complete(index);\n                break;\n              case "Escape":\n                e.preventDefault();\n                setIndex(-1);\n                break;\n              default:\n                break;\n            }\n          }}\n        />\n        {focused && !!filtered.length && (\n          <Menu index={index} items={filtered} onSelect={complete} />\n        )}\n      </div>\n    );\n  },\n};\n',locationsMap:{combobox:{startLoc:{col:34,line:79},endLoc:{col:1,line:149},startBody:{col:34,line:79},endBody:{col:1,line:149}}}}},component:_src__WEBPACK_IMPORTED_MODULE_2__.p};var style={height:20,width:400,whiteSpace:"pre",overflowWrap:"normal",resize:"none"},Menu=function(param){var index=param.index,items=param.items,onSelect=param.onSelect,ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){var _ref_current_children_index;ref.current&&(null===(_ref_current_children_index=ref.current.children[index])||void 0===_ref_current_children_index||_ref_current_children_index.scrollIntoView())},[index]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{position:"absolute",overflowY:"auto",maxHeight:200,top:24,left:0,width:400,fontSize:"12px",border:"solid 1px gray",borderRadius:"3px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{ref:ref,style:{listStyleType:"none",margin:0,padding:0,cursor:"pointer",background:"white"},children:items.map(function(item,i){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{style:_object_spread({},index===i&&{color:"white",background:"#2A6AD3"}),onMouseDown:function(){return onSelect(i)},children:item},item)})})})},Combobox={render:function(){var ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),2),text=_useState[0],setText=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1),2),index=_useState1[0],setIndex=_useState1[1],_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),focused=_useState2[0],setFocused=_useState2[1],filtered=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return _mocks__WEBPACK_IMPORTED_MODULE_3__.k.filter(function(c){return c.toLowerCase().startsWith(text.toLowerCase())})},[text]),complete=function(i){var _ref_current;setText(filtered[i]),setIndex(-1),null===(_ref_current=ref.current)||void 0===_ref_current||_ref_current.blur()};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{position:"relative",padding:0},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.p,{ref:ref,rows:1,style:style,onChange:function(e){return setText(e.target.value)},value:text,placeholder:"Please select...",onFocus:function(){return setFocused(!0)},onBlur:function(){return setFocused(!1)},onKeyDown:function(e){if(filtered.length)switch(e.code){case"ArrowUp":e.preventDefault(),setIndex(-1===index?filtered.length-1:index-1);break;case"ArrowDown":e.preventDefault(),setIndex(index>=filtered.length-1?-1:index+1);break;case"Enter":e.preventDefault();case"Space":if(-1===index)break;complete(index);break;case"Escape":e.preventDefault(),setIndex(-1)}}}),focused&&!!filtered.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Menu,{index:index,items:filtered,onSelect:complete})]})}};let __namedExportsOrder=["Combobox"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=examples-Combobox-stories.2a16f7b4.iframe.bundle.js.map