/*! For license information please see examples-Mention-stories.fd08ed61.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[986],{"./node_modules/@storybook/react/dist/index.mjs":(module,__webpack_exports__,__webpack_require__)=>{var _a,_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/react/dist/chunk-R4NKYYJA.mjs"),__webpack_require__("./node_modules/@storybook/global/dist/index.mjs")),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("@storybook/preview-api");__webpack_require__("@storybook/client-logger");module=__webpack_require__.hmd(module);var{window:globalWindow}=_storybook_global__WEBPACK_IMPORTED_MODULE_2__.C;globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_3__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s;null==(_a=null==module?void 0:module.hot)||_a.decline()},"./node_modules/range-at-index/build/index.js":module=>{module.exports=function RangeAtIndex(el,index,offset,range){var doc=el.ownerDocument;range||(range=doc.createRange());var iterator=doc.createNodeIterator(el,NodeFilter.SHOW_TEXT,null,!1),start={},end={},node=void 0,len=void 0;for(;node=iterator.nextNode();)len=node.nodeValue.length,!start.node&&len>index&&(start.node=node,start.offset=index),!end.node&&len>=offset&&(end.node=node,end.offset=offset),index-=len,offset-=len;start.node&&range.setStart(start.node,start.offset);end.node&&range.setEnd(end.node,end.offset);return range}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/examples/Mention.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Mention:()=>Mention,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _a,_b,_c,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/index.js")),react_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-dom/index.js"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/textarea.tsx"),_src__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/renderers.tsx"),_mocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./stories/mocks.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_4__.p},style={width:"400px",height:"300px"},MENTION_REG=/\B@([\-+\w]*)$/,MENTION_HIGHLIGHT_REG=new RegExp(`(${_mocks__WEBPACK_IMPORTED_MODULE_5__.k.map((c=>`@${c}`)).join("|")})`,"g"),mentionRenderer=(0,_src__WEBPACK_IMPORTED_MODULE_6__.s)([[MENTION_HIGHLIGHT_REG,{background:"#EAF5F9",color:"#4276AA",borderRadius:"3px"}]]),Menu=({chars,index,top,left,complete})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{position:"fixed",top,left,fontSize:"12px",border:"solid 1px gray",borderRadius:"3px",background:"white",cursor:"pointer"},children:chars.map(((c,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{padding:"4px",...index===i&&{color:"white",background:"#2A6AD3"}},onMouseDown:e=>{e.preventDefault(),complete(i)},children:c},c)))}),Mention={render:()=>{var _a2;const ref=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Hi, @Captain Gregor and @Jaxxon . Please enter @ to show suggestions.\n\n"),[pos,setPos]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),[index,setIndex]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),targetText=pos?text.slice(0,pos.caret):text,match=pos&&targetText.match(MENTION_REG),name=null!=(_a2=null==match?void 0:match[1])?_a2:"",chars=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>_mocks__WEBPACK_IMPORTED_MODULE_5__.k.filter((c=>c.toLowerCase().startsWith(name.toLowerCase()))).slice(0,8)),[name]),complete=i=>{if(!ref.current||!pos)return;const selected=chars[i];ref.current.setRangeText(`@${selected} `,pos.caret-name.length-1,pos.caret,"end"),setPos(null),setIndex(0)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.p,{ref,style,onChange:e=>setText(e.target.value),value:text,onKeyDown:e=>{if(pos&&chars.length)switch(e.code){case"ArrowUp":e.preventDefault();const nextIndex=index<=0?chars.length-1:index-1;setIndex(nextIndex);break;case"ArrowDown":e.preventDefault();const prevIndex=index>=chars.length-1?0:index+1;setIndex(prevIndex);break;case"Enter":e.preventDefault(),complete(index);break;case"Escape":e.preventDefault(),setPos(null),setIndex(0)}},onSelectionChange:r=>{r.focused&&MENTION_REG.test(text.slice(0,r.selectionStart))?(setPos({top:r.top+r.height,left:r.left,caret:r.selectionStart}),setIndex(0)):(setPos(null),setIndex(0))},children:mentionRenderer}),pos&&(0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Menu,{top:pos.top,left:pos.left,chars,index,complete}),document.body)]})}};Mention.parameters={...Mention.parameters,docs:{...null==(_a=Mention.parameters)?void 0:_a.docs,source:{originalSource:'{\n  render: () => {\n    const ref = useRef<RichTextareaHandle>(null);\n    const [text, setText] = useState(`Hi, @Captain Gregor and @Jaxxon . Please enter @ to show suggestions.\\n\\n`);\n    const [pos, setPos] = useState<{\n      top: number;\n      left: number;\n      caret: number;\n    } | null>(null);\n    const [index, setIndex] = useState<number>(0);\n    const targetText = pos ? text.slice(0, pos.caret) : text;\n    const match = pos && targetText.match(MENTION_REG);\n    const name = match?.[1] ?? "";\n    const chars = useMemo(() => CHARACTERS.filter(c => c.toLowerCase().startsWith(name.toLowerCase())).slice(0, MAX_CHARS), [name]);\n    const complete = (i: number) => {\n      if (!ref.current || !pos) return;\n      const selected = chars[i];\n      ref.current.setRangeText(`@${selected} `, pos.caret - name.length - 1, pos.caret, "end");\n      setPos(null);\n      setIndex(0);\n    };\n    return <div>\n        <RichTextarea ref={ref} style={style} onChange={e => setText(e.target.value)} value={text} onKeyDown={e => {\n        if (!pos || !chars.length) return;\n        switch (e.code) {\n          case "ArrowUp":\n            e.preventDefault();\n            const nextIndex = index <= 0 ? chars.length - 1 : index - 1;\n            setIndex(nextIndex);\n            break;\n          case "ArrowDown":\n            e.preventDefault();\n            const prevIndex = index >= chars.length - 1 ? 0 : index + 1;\n            setIndex(prevIndex);\n            break;\n          case "Enter":\n            e.preventDefault();\n            complete(index);\n            break;\n          case "Escape":\n            e.preventDefault();\n            setPos(null);\n            setIndex(0);\n            break;\n          default:\n            break;\n        }\n      }} onSelectionChange={r => {\n        if (r.focused && MENTION_REG.test(text.slice(0, r.selectionStart))) {\n          setPos({\n            top: r.top + r.height,\n            left: r.left,\n            caret: r.selectionStart\n          });\n          setIndex(0);\n        } else {\n          setPos(null);\n          setIndex(0);\n        }\n      }}>\n          {mentionRenderer}\n        </RichTextarea>\n        {pos && createPortal(<Menu top={pos.top} left={pos.left} chars={chars} index={index} complete={complete} />, document.body)}\n      </div>;\n  }\n}',...null==(_c=null==(_b=Mention.parameters)?void 0:_b.docs)?void 0:_c.source}}}},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var e=__webpack_require__("./node_modules/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"./node_modules/use-sync-external-store/shim/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")},"./src/renderers.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>createRegexRenderer});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const createRegexRenderer=matchers=>value=>{const styles={},ranges=[];matchers.forEach((([matcher,style],i)=>{ranges.push(...((reg,text)=>{const results=[];let match=reg.exec(text);for(;match;)results.push(match),match=reg.exec(text);return results})(matcher,value).map((m=>[m.index,m.index+m[0].length,i]))),styles[String(i)]=style}));const chunks=(ranges=>{ranges.sort(((a,b)=>a[0]-b[0]||a[1]-b[1]));const results=[];let last;return ranges.forEach((([start,end,styleId])=>{if(!last||start>=last[1])results.push(last=[start,end,{[styleId]:!0}]);else if(end>last[1])last[2][styleId]=!0,results.push(last=[last[1],end,{[styleId]:!0}]);else if(end<=last[1]){const lastEnd=last[1],lastStyle={...last[2]},lastStyle2={...last[2]};last[0]!==start?last[1]=start:results.pop(),lastStyle[styleId]=!0,results.push(last=[start,end,lastStyle]),end!==lastEnd&&results.push(last=[end,lastEnd,lastStyle2])}})),results})(ranges),res=[];let prevEnd=0;for(let i=0;i<chunks.length;i++){const[start,end,styleIds]=chunks[i];res.push(value.slice(prevEnd,start));const v=value.slice(start,end);res.push(Object.keys(styleIds).reduceRight(((acc,si,index)=>{const styleOrRender=styles[si],key=0===index?String(start):void 0;return"function"==typeof styleOrRender?styleOrRender({children:acc,value:v,key}):(0,jsx_runtime.jsx)("span",{style:styleOrRender,children:acc},key)}),v)),prevEnd=end}return res.push(value.slice(prevEnd)),res};try{createRegexRenderer.displayName="createRegexRenderer",createRegexRenderer.__docgenInfo={description:"An utility to create renderer function with regex.",displayName:"createRegexRenderer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/renderers.tsx#createRegexRenderer"]={docgenInfo:createRegexRenderer.__docgenInfo,name:"createRegexRenderer",path:"src/renderers.tsx#createRegexRenderer"})}catch(__react_docgen_typescript_loader_error){}}}]);