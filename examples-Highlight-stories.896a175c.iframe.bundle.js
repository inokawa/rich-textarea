"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[637],{"./stories/examples/Highlight.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Highlight:()=>Highlight,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _a,_b,_c,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/textarea.tsx"),_mocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./stories/mocks.ts"),react_highlight_words__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-highlight-words/dist/main.js"),react_highlight_words__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_2__);const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_3__.p},style={width:"600px",height:"400px"},Highlight={render:()=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_mocks__WEBPACK_IMPORTED_MODULE_4__.m),[searchText,setSearchText]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("dolor");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"search",children:"input search word: "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{name:"search",value:searchText,onChange:e=>setSearchText(e.target.value)})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.p,{style,onChange:e=>setText(e.target.value),value:text,children:v=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_highlight_words__WEBPACK_IMPORTED_MODULE_2___default(),{searchWords:searchText.split(" "),autoEscape:!0,textToHighlight:v})})]})}};Highlight.parameters={...Highlight.parameters,docs:{...null==(_a=Highlight.parameters)?void 0:_a.docs,source:{originalSource:'{\n  render: () => {\n    const [text, setText] = useState(LOREM);\n    const [searchText, setSearchText] = useState("dolor");\n    return <div>\n        <div>\n          <label htmlFor="search">input search word: </label>\n          <input name="search" value={searchText} onChange={e => setSearchText(e.target.value)} />\n        </div>\n        <RichTextarea style={style} onChange={e => setText(e.target.value)} value={text}>\n          {v => <Highlighter searchWords={searchText.split(" ")} autoEscape={true} textToHighlight={v} />}\n        </RichTextarea>\n      </div>;\n  }\n}',...null==(_c=null==(_b=Highlight.parameters)?void 0:_b.docs)?void 0:_c.source}}}}}]);