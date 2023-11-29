/*! For license information please see examples-Combobox-stories.b5a83943.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[774],{"./stories/examples/Combobox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Combobox:()=>Combobox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/textarea.tsx"),_mocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/mocks.ts");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import { StoryObj } from "@storybook/react";\nimport React, { useEffect, useMemo, useRef, useState } from "react";\nimport { RichTextarea, RichTextareaHandle } from "../../src";\nimport { CHARACTERS } from "../mocks";\n\nexport default {\n  component: RichTextarea,\n};\n\nconst INPUT_HEIGHT = 20;\nconst INPUT_WIDTH = 400;\n\nconst style: React.CSSProperties = {\n  height: INPUT_HEIGHT,\n  width: INPUT_WIDTH,\n  whiteSpace: "pre",\n  overflowWrap: "normal",\n  resize: "none",\n};\n\nconst Menu = ({\n  index,\n  items,\n  onSelect,\n}: {\n  index: number;\n  items: string[];\n  onSelect: (index: number) => void;\n}) => {\n  const ref = useRef<HTMLUListElement>(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.children[index]?.scrollIntoView();\n  }, [index]);\n\n  return (\n    <div\n      style={{\n        position: "absolute",\n        overflowY: "auto",\n        maxHeight: 200,\n        top: INPUT_HEIGHT + 4,\n        left: 0,\n        width: INPUT_WIDTH,\n        fontSize: "12px",\n        border: "solid 1px gray",\n        borderRadius: "3px",\n      }}\n    >\n      <ul\n        ref={ref}\n        style={{\n          listStyleType: "none",\n          margin: 0,\n          padding: 0,\n          cursor: "pointer",\n          background: "white",\n        }}\n      >\n        {items.map((item, i) => (\n          <li\n            key={item}\n            style={{\n              ...(index === i && {\n                color: "white",\n                background: "#2A6AD3",\n              }),\n            }}\n            onMouseDown={() => onSelect(i)}\n          >\n            {item}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n};\n\nexport const Combobox: StoryObj = {\n  render: () => {\n    const ref = useRef<RichTextareaHandle>(null);\n\n    const [text, setText] = useState("");\n\n    const [index, setIndex] = useState<number>(-1);\n\n    const [focused, setFocused] = useState(false);\n\n    const filtered = useMemo(\n      () =>\n        CHARACTERS.filter((c) =>\n          c.toLowerCase().startsWith(text.toLowerCase())\n        ),\n      [text]\n    );\n\n    const complete = (i: number) => {\n      setText(filtered[i]);\n      setIndex(-1);\n      ref.current?.blur();\n    };\n\n    return (\n      <div style={{ position: "relative", padding: 0 }}>\n        <RichTextarea\n          ref={ref}\n          rows={1}\n          style={style}\n          onChange={(e) => setText(e.target.value)}\n          value={text}\n          placeholder="Please select..."\n          onFocus={() => setFocused(true)}\n          onBlur={() => setFocused(false)}\n          onKeyDown={(e) => {\n            if (!filtered.length) return;\n            switch (e.code) {\n              case "ArrowUp":\n                e.preventDefault();\n                const nextIndex =\n                  index === -1 ? filtered.length - 1 : index - 1;\n                setIndex(nextIndex);\n                break;\n              case "ArrowDown":\n                e.preventDefault();\n                const prevIndex = index >= filtered.length - 1 ? -1 : index + 1;\n                setIndex(prevIndex);\n                break;\n              case "Enter":\n                e.preventDefault();\n              case "Space":\n                if (index === -1) break;\n                complete(index);\n                break;\n              case "Escape":\n                e.preventDefault();\n                setIndex(-1);\n                break;\n              default:\n                break;\n            }\n          }}\n        />\n        {focused && !!filtered.length && (\n          <Menu index={index} items={filtered} onSelect={complete} />\n        )}\n      </div>\n    );\n  },\n};\n',locationsMap:{combobox:{startLoc:{col:34,line:79},endLoc:{col:1,line:149},startBody:{col:34,line:79},endBody:{col:1,line:149}}}}},component:_src__WEBPACK_IMPORTED_MODULE_1__.p},style={height:20,width:400,whiteSpace:"pre",overflowWrap:"normal",resize:"none"},Menu=({index,items,onSelect})=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{ref.current&&ref.current.children[index]?.scrollIntoView()}),[index]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"absolute",overflowY:"auto",maxHeight:200,top:24,left:0,width:400,fontSize:"12px",border:"solid 1px gray",borderRadius:"3px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{ref,style:{listStyleType:"none",margin:0,padding:0,cursor:"pointer",background:"white"}},items.map(((item,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:item,style:{...index===i&&{color:"white",background:"#2A6AD3"}},onMouseDown:()=>onSelect(i)},item)))))},Combobox={render:()=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[index,setIndex]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),filtered=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>_mocks__WEBPACK_IMPORTED_MODULE_2__.k.filter((c=>c.toLowerCase().startsWith(text.toLowerCase())))),[text]),complete=i=>{setText(filtered[i]),setIndex(-1),ref.current?.blur()};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"relative",padding:0}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.p,{ref,rows:1,style,onChange:e=>setText(e.target.value),value:text,placeholder:"Please select...",onFocus:()=>setFocused(!0),onBlur:()=>setFocused(!1),onKeyDown:e=>{if(filtered.length)switch(e.code){case"ArrowUp":e.preventDefault();const nextIndex=-1===index?filtered.length-1:index-1;setIndex(nextIndex);break;case"ArrowDown":e.preventDefault();const prevIndex=index>=filtered.length-1?-1:index+1;setIndex(prevIndex);break;case"Enter":e.preventDefault();case"Space":if(-1===index)break;complete(index);break;case"Escape":e.preventDefault(),setIndex(-1)}}}),focused&&!!filtered.length&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(Menu,{index,items:filtered,onSelect:complete}))}},__namedExportsOrder=["Combobox"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);