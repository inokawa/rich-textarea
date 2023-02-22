/*! For license information please see basics-1-Textarea-stories.499a5be3.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[457],{"./node_modules/@storybook/react/dist/index.mjs":(module,__webpack_exports__,__webpack_require__)=>{var _a,_chunk_LSK4KSW4_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-LSK4KSW4.mjs"),global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/global/window.js"),global__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");__webpack_require__("@storybook/client-logger");module=__webpack_require__.hmd(module);var{window:globalWindow}=global__WEBPACK_IMPORTED_MODULE_1___default();globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_LSK4KSW4_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_LSK4KSW4_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_LSK4KSW4_mjs__WEBPACK_IMPORTED_MODULE_0__.s;null==(_a=null==module?void 0:module.hot)||_a.decline()},"./node_modules/range-at-index/build/index.js":module=>{module.exports=function RangeAtIndex(el,index,offset,range){var doc=el.ownerDocument;range||(range=doc.createRange());var iterator=doc.createNodeIterator(el,NodeFilter.SHOW_TEXT,null,!1),start={},end={},node=void 0,val=void 0,len=void 0;for(;node=iterator.nextNode();)val=node.nodeValue,len=val.length,!start.node&&len>index&&(start.node=node,start.offset=index),!end.node&&len>=offset&&(end.node=node,end.offset=offset),index-=len,offset-=len;start.node&&range.setStart(start.node,start.offset);end.node&&range.setEnd(end.node,end.offset);return range}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/basics/1-Textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BorderBox:()=>BorderBox,Emoji:()=>Emoji,HelloWorld:()=>HelloWorld,OneLineAutoHeight:()=>OneLineAutoHeight,Rtl:()=>Rtl,Search:()=>Search,Style:()=>Style,WidthMax:()=>WidthMax,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _a,_b,_c,_d,_e,_f,_g,_h,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/index.js")),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/textarea.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/renderers.tsx"),_mocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./stories/mocks.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_3__.p},style={width:"600px",height:"400px"},HelloWorld={render:()=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Lorem ipsum");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.p,{style,onChange:e=>setText(e.target.value),value:text,children:v=>v.split("").map(((t,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:i%2==0?"red":void 0},children:t},i)))})}},basicRegex=(0,_src__WEBPACK_IMPORTED_MODULE_4__.s)([[/[A-Z][A-x]+/g,{color:"blue"}],[/[A-Z][A-Z]+/g,{borderRadius:"3px",backgroundColor:"blue",color:"white"}],[/[!?]+/g,{textDecoration:"underline wavy",color:"red"}],[/(but|and|so|also)+/g,{textDecoration:"line-through",color:"green"}],[/[0123456789]+/g,{color:"violet",fontWeight:"bold"}]]),Style={render:()=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("This is just a TEXTAREA but bit rich!!!\n12345");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.p,{style,onChange:(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e=>setText(e.target.value)),[]),value:text,children:basicRegex})}},OneLineAutoHeight={render:()=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Lorem ipsum");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.p,{style:{width:600},onChange:e=>setText(e.target.value),value:text,rows:1,autoHeight:!0})}},Rtl={render:()=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("אחד !\ntwo !\nשְׁלוֹשָׁה !");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.p,{style:{width:"600px",height:"400px",direction:"rtl"},onChange:e=>setText(e.target.value),value:text,children:v=>v.split("").map(((t,i)=>{const El=i%2!=0?"i":"span";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(El,{children:t},i)}))})}},WidthMax={render:()=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Lorem ipsum");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.p,{style:{border:"solid 2px grey",padding:"0.5rem",width:"100%"},onChange:e=>setText(e.target.value),value:text,children:v=>v.split("").map(((t,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:i%2==0?"red":void 0},children:t},i)))})},name:"Width 100%"},BorderBox={render:()=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Lorem ipsum");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.p,{style:{border:"solid 2px grey",padding:"0.5rem",width:300,height:200},onChange:e=>setText(e.target.value),value:text,children:v=>v.split("").map(((t,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:i%2==0?"red":void 0},children:t},i)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style",{children:"*, *:before, *:after { box-sizing: border-box }"})]})}},emojiRegex=(0,_src__WEBPACK_IMPORTED_MODULE_4__.s)([[/[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/gu,{outline:"solid 1px gray"}]]),Emoji={render:()=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("📫🔒🍳📶 💨🌠🐩🐅📀🍆 🎭🕖👆📱 🏮🌁🌍🏂📰🔓 🎻💟🐻👫🍇🌆🔻 🎬🍻🍋🎡💬🌓🐁 🐻🏭🐟👵🎋🐧 👵🎋🐲🍌 🍨🍪🕐🐳 💋💱🔹📁 📴💬📔🐁🌿 🕐🕝🎂🐳💌👃 🎹🌀💣👓👨💳 🎭🕧👖🌰🌽 🐮👾🌻👫🐉. 🍼🎓🐖🌿🍄 🍻🎂🔨👯💋📄🕦 🏆👟💜🎺📡📅🌙 🔠🍧💯🍓📪 🏪🌞🔼👅 🔼💭💐💲🕤📟 🐭📁🎼🔢📃🍅 🕐🎿🍬🐥🐐🎾📒 💛📶🐘🔺 💦👀🐔💔 🍨📤🐥🐃📊🏯🏃 🐕🐋👳🎈👎. 🐛🏂💔🐅🐃🍮🐀 🔷📫🌁👘🐁 👕📖🐂🍪📞 📦🌶🍌💑📗 🌈📜🎽🐈📀 🎃🕣🍯🌝👶 🍌💻💉💠💼 🎁👪🎠🎽🗾 🐡💏💢🌛👻💗💴. 🐺🐗🎅👮💓🎾 👄👦🔰💸 💏🐗🔭📼 🐢👧🍯🍷👋 🎡👖🌍🔽🕗 📰🌺🐦🐾 💋🕃🎭💩 🎣🍱🔔🔳. 📕🕘🔨🐸💖 🕠🌗📋💦 🔛🐄🐶🐽🍶🎇 🍁🏢🏪🐎🐕 🎰📞🐣🍇📂 🏈🏊💃💫🐥🌸 📪🍧💖🎳🍀 🔣🔝🔴🌅🔜👩 🍠🔯💎🏧 🐍💀🔠🐖📷🔖 🌗🕂🐙🎢👀🐯🍆 🏣👾🐚🔕📮💛👄 🍇🌰🎵👑🎬🌁 🔚🏁🎁🐝🍪🍛 🎾👓🐄🎿🕠🔙 🌹👀💧🔛👞.\n\n    🍷🕖🔷📙 🏢🎬🐂💤🐙🍠📐🔉 💑💑👰👔🔢🐾 💽🎽💛📡📭 🎧📘🔏🍁 👤🎲💛🍔🐚🏤🔥 🐕👋👘🌅🐐👴 🕘📭🏈🍁🔉💿 👰📈🔴🌸👨📻 👤🐡🐅👃🏁🎃 🐢🎻🕢🔢🌊🍤🍱 🐞👬💔💸🏀 🗻👿👠🐆💐💞 🔧🎑📂🐪👮🌚 👘📆🌷🐘. 🍜🐊🍇🔏🏥🕝🔫 💩🌓🌔💥 📨🐝🔭🗾🍙 🍞🎶🔘📌🕗📣🌈🍝 📏🎌📧💂🐶 🔯🎀💌🔫👠💺 👯🐭📵🍁 🐫👳🍜🌎 🍛🎱🍓🌎🍦🐔🎨 🔧🍤🎽🌒🍵 🔯🎓💂📩💄👯💏 🍔🍉🍍👋🍼🍏 🍸🍝🎳🍗💖🌁 🎫👿📲🔛📫 👖🌐🍱🌘🔻📘🏈 🔃📶🐢🏮. 🍌📁💈🔣🐑👩 💋👬👖🎋 💽🐈🍮🍰👚 🔓🔗🍋🐡👤🏨🔃🍫 🔔🎺🍍💡 👦🎦🔊🍛 🌃🔭🕧📖👋💦🎤 🕃🗼🌹📔🏩📲 🍋💿📰🌻 📉🔵🐅🍠. 🌳🐲🏡💽 🌎💟🎅🔃🎬🔹 🌆👞🌖📇💣🐡💩 🐂🐓🏥🌵👴 🏃🐴🔺🍑📩 🔣🔨👄🐅🏁 🏄🐎👵📤 🕗🔲👾🌲📒 🐺💉🎦📙💈 🏂🌃🏊📭 📳🎺🍕🔷🐖 🍓🎼💠🌽🏭🎃 🕤🍞💑🕣🌻🔺🍲 📎🐼💨🐎📈 🍳🍎🕜🌱 🌴🐐📕👈.\n    \n    🎱🐱🎭🔠🎃💡 🐬🌹👉🐒🎮🍵 🐌👃🐺💓👽 🍢👙📠👝📝 🍄💈🕀👹🍲🎒 🎳📯🎉🍚🌀🎣 👒🍡🎡📕 🐭💾🔯👙🗻📟 📝🔮📑👉💰🌎 💙🏡👙🍹🏦. 🔸👳🔜💨💝 📔🎍🏦🎬💭🎊 🍲🐰👥👟 🔕🎿🏣💕📔 🕘🔇🎱🏨💍 🔙🌋🏫📛👭🍎💒 👡🎈🎲📋💑 💴🔝🌋📃🎍 🍳🔙💇🍚🔮 🐥💚🕣🐎🔹🍩🎂 👠🗽💁🍁 💽💊🐯🐾 🎺🔥🔤📢🍵👣👓 🔻👃🌈🕡🍚🍱 🎬🔥🍙🔡. 💙🌘🔗📛💉🍮 🔖🏨👼🏊 💴🔗🍓📬🎂 💁💃🌷🕂🕂 🔺🔩💦🍤🌻🔆 🐐🎸💝🍓 🎆🔬🌶📧🐘 🐇🔝🔗🍕 🏮🌠📺🍸 🎡👴🔇💥👓 🎻👥💴🍖🏭💈 🐺📡🎋💨🍚👖 🎸🐌🌚🔷💢💁 💛📈👴🐅🔗.\n    \n    💕🎫🌝💢👾 🎌🕤🎧🐴📼 🍀📊🐡🌼🌀📳 🎰🐝🎤🍝👇🌄 💪🏀🍸🔁🐗🌖🍮 📎🍓🔴🐄🕡🔛🕕 🎱📏🐾🍇🔕 💧🍙🔂🎡 🕛💒👿🎼🔀 💛👦🌍📒📍🌄 👓🐽🏬🕦🔶 🍜📰🎋🍅🍝💜💫💈 🎨🌁🍗🎊🌳🐡📶 🎵🏠💚🗽🌉 🐕📱🕦📑 💩👤🕖🔖. 📍👋💁🌆🌜 🕔🐺🕀🔭 🌄🌆🏰💚📅📹🔀 🐰💴🕢🔎💹🎋 👥🔑🔯👗 🐶🎺📐💜🌂 🔲👦📬🍧🎶🍵 🐤🍢🐔🎩 🔂🐕💦🎤🍒🐣🔣 📙🔩📘💋🍧👺. 🕑💿🔫📶 🔮💏👀🎿📺📼💋 🐞👤📲🎆🏦🐪 💗🐸🏯🔳🍨 🕣🐀🗼🐂🐳 🍄🍮🍈📚🐄🎷🐄🍡 🍲🔕🔄💜🍉 🏆🍚🔠📠🍹👧. 🏧💻🕣👔👪 🌴📷💽🔼📃💼💲 📺🍪🍠👋🍶🍇 💭👡🍋🌏 💂🐁🍍🐶🎤💠🕟 🕚🌖🐺🔽🐟 🕃💏🐋🔟 🔼🎹🍤🍗🎽📷📚 🔜🌕📫💯 🐾🎻📶🎼🍐 💑👭👊🐖.🎇 🌲🎡🍉📕📥🎎🌒 🌈👂🐩💂🏯💠🍮 💵🔊🌻🕖🌽 📶💮💠🕜 🐟💃🐩🍚 🔪🐼🍺🐧🍆🏧. 💚🐗🍨🍼💙 💗🕜🐂💏 📀🎂🎿🔃👚🏦🐠 👃🍘📐📐🎲 💹🍨🎠🍤🐷 📊👔🕑🕂📍🐦 🍸🍦🕂💦🕜📪📤 🔑🎋👐🌅🌛 🐥📌🏯👮🐃🐟 👼🍙🎑👯🌁💅👝 👦🔥🌶👩🎀 🕠📲📤📆 💀🌉🔽🌗💚🔌. 📀🕀🐝👀📣 💄🍴🐱💶🍣 💴💗💠👜 🐖👖🐳👲🌟 🔢🎴👹🎅🌟🔞 🎭🏩🕓🔪 💶🎮🎧📳💁🐠 💥🎢👙👊🐑📺🌳 🎀🔶🐪🔛. 📼🎣🔼🍩🎥 🌂🌙📚📲🔩🏆 🎓📤🎡🌠 🔚🌌🔗🔠 🎧🎃🌞🐆🔈 🎅🎁🍢💁 📐🐓🐎🐵 🏆📡🕘📊👢 🌛💗🔂🌑🕝👛🍜 💳🎺📩🎫🎀🐅🍵 🏩🔕🏢🍁👘.");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.p,{style,onChange:(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e=>setText(e.target.value)),[]),value:text,children:emojiRegex})}},Search={render:()=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_mocks__WEBPACK_IMPORTED_MODULE_5__.m),[searchText,setSearchText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("dolor");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"search",children:"input search word: "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{name:"search",value:searchText,onChange:e=>setSearchText(e.target.value)})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.p,{style,onChange:(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e=>setText(e.target.value)),[]),value:text,children:searchText?(0,_src__WEBPACK_IMPORTED_MODULE_4__.s)([[new RegExp(searchText.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"ig"),{borderRadius:"3px",backgroundColor:"yellow"}]]):void 0})]})}};HelloWorld.parameters={...HelloWorld.parameters,storySource:{source:'{\n  render: () => {\n    const [text, setText] = useState("Lorem ipsum");\n    return <RichTextarea style={style} onChange={e => setText(e.target.value)} value={text}>\n        {v => {\n        return v.split("").map((t, i) => <span key={i} style={{\n          color: i % 2 === 0 ? "red" : undefined\n        }}>\n              {t}\n            </span>);\n      }}\n      </RichTextarea>;\n  }\n}',...null==(_a=HelloWorld.parameters)?void 0:_a.storySource}},Style.parameters={...Style.parameters,storySource:{source:"{\n  render: () => {\n    const [text, setText] = useState(`This is just a TEXTAREA but bit rich!!!\n12345`);\n    return <RichTextarea style={style} onChange={useCallback(e => setText(e.target.value), [])} value={text}>\n        {basicRegex}\n      </RichTextarea>;\n  }\n}",...null==(_b=Style.parameters)?void 0:_b.storySource}},OneLineAutoHeight.parameters={...OneLineAutoHeight.parameters,storySource:{source:'{\n  render: () => {\n    const [text, setText] = useState("Lorem ipsum");\n    return <RichTextarea style={{\n      width: 600\n    }} onChange={e => setText(e.target.value)} value={text} rows={1} autoHeight />;\n  }\n}',...null==(_c=OneLineAutoHeight.parameters)?void 0:_c.storySource}},Rtl.parameters={...Rtl.parameters,storySource:{source:'{\n  render: () => {\n    const [text, setText] = useState(`אחד !\ntwo !\nשְׁלוֹשָׁה !`);\n    return <RichTextarea style={{\n      width: "600px",\n      height: "400px",\n      direction: "rtl"\n    }} onChange={e => setText(e.target.value)} value={text}>\n        {v => {\n        return v.split("").map((t, i) => {\n          const El = i % 2 !== 0 ? "i" : "span";\n          return <El key={i}>{t}</El>;\n        });\n      }}\n      </RichTextarea>;\n  }\n}',...null==(_d=Rtl.parameters)?void 0:_d.storySource}},WidthMax.parameters={...WidthMax.parameters,storySource:{source:'{\n  render: () => {\n    const [text, setText] = useState("Lorem ipsum");\n    return <RichTextarea style={{\n      border: "solid 2px grey",\n      padding: "0.5rem",\n      width: "100%"\n    }} onChange={e => setText(e.target.value)} value={text}>\n        {v => {\n        return v.split("").map((t, i) => <span key={i} style={{\n          color: i % 2 === 0 ? "red" : undefined\n        }}>\n              {t}\n            </span>);\n      }}\n      </RichTextarea>;\n  },\n  name: "Width 100%"\n}',...null==(_e=WidthMax.parameters)?void 0:_e.storySource}},BorderBox.parameters={...BorderBox.parameters,storySource:{source:'{\n  render: () => {\n    const [text, setText] = useState("Lorem ipsum");\n    return <>\n        <RichTextarea style={{\n        border: "solid 2px grey",\n        padding: "0.5rem",\n        width: 300,\n        height: 200\n      }} onChange={e => setText(e.target.value)} value={text}>\n          {v => {\n          return v.split("").map((t, i) => <span key={i} style={{\n            color: i % 2 === 0 ? "red" : undefined\n          }}>\n                {t}\n              </span>);\n        }}\n        </RichTextarea>\n        <style>{`*, *:before, *:after { box-sizing: border-box }`}</style>\n      </>;\n  }\n}',...null==(_f=BorderBox.parameters)?void 0:_f.storySource}},Emoji.parameters={...Emoji.parameters,storySource:{source:"{\n  render: () => {\n    const [text, setText] = useState(`📫🔒🍳📶 💨🌠🐩🐅📀🍆 🎭🕖👆📱 🏮🌁🌍🏂📰🔓 🎻💟🐻👫🍇🌆🔻 🎬🍻🍋🎡💬🌓🐁 🐻🏭🐟👵🎋🐧 👵🎋🐲🍌 🍨🍪🕐🐳 💋💱🔹📁 📴💬📔🐁🌿 🕐🕝🎂🐳💌👃 🎹🌀💣👓👨💳 🎭🕧👖🌰🌽 🐮👾🌻👫🐉. 🍼🎓🐖🌿🍄 🍻🎂🔨👯💋📄🕦 🏆👟💜🎺📡📅🌙 🔠🍧💯🍓📪 🏪🌞🔼👅 🔼💭💐💲🕤📟 🐭📁🎼🔢📃🍅 🕐🎿🍬🐥🐐🎾📒 💛📶🐘🔺 💦👀🐔💔 🍨📤🐥🐃📊🏯🏃 🐕🐋👳🎈👎. 🐛🏂💔🐅🐃🍮🐀 🔷📫🌁👘🐁 👕📖🐂🍪📞 📦🌶🍌💑📗 🌈📜🎽🐈📀 🎃🕣🍯🌝👶 🍌💻💉💠💼 🎁👪🎠🎽🗾 🐡💏💢🌛👻💗💴. 🐺🐗🎅👮💓🎾 👄👦🔰💸 💏🐗🔭📼 🐢👧🍯🍷👋 🎡👖🌍🔽🕗 📰🌺🐦🐾 💋🕃🎭💩 🎣🍱🔔🔳. 📕🕘🔨🐸💖 🕠🌗📋💦 🔛🐄🐶🐽🍶🎇 🍁🏢🏪🐎🐕 🎰📞🐣🍇📂 🏈🏊💃💫🐥🌸 📪🍧💖🎳🍀 🔣🔝🔴🌅🔜👩 🍠🔯💎🏧 🐍💀🔠🐖📷🔖 🌗🕂🐙🎢👀🐯🍆 🏣👾🐚🔕📮💛👄 🍇🌰🎵👑🎬🌁 🔚🏁🎁🐝🍪🍛 🎾👓🐄🎿🕠🔙 🌹👀💧🔛👞.\n\n    🍷🕖🔷📙 🏢🎬🐂💤🐙🍠📐🔉 💑💑👰👔🔢🐾 💽🎽💛📡📭 🎧📘🔏🍁 👤🎲💛🍔🐚🏤🔥 🐕👋👘🌅🐐👴 🕘📭🏈🍁🔉💿 👰📈🔴🌸👨📻 👤🐡🐅👃🏁🎃 🐢🎻🕢🔢🌊🍤🍱 🐞👬💔💸🏀 🗻👿👠🐆💐💞 🔧🎑📂🐪👮🌚 👘📆🌷🐘. 🍜🐊🍇🔏🏥🕝🔫 💩🌓🌔💥 📨🐝🔭🗾🍙 🍞🎶🔘📌🕗📣🌈🍝 📏🎌📧💂🐶 🔯🎀💌🔫👠💺 👯🐭📵🍁 🐫👳🍜🌎 🍛🎱🍓🌎🍦🐔🎨 🔧🍤🎽🌒🍵 🔯🎓💂📩💄👯💏 🍔🍉🍍👋🍼🍏 🍸🍝🎳🍗💖🌁 🎫👿📲🔛📫 👖🌐🍱🌘🔻📘🏈 🔃📶🐢🏮. 🍌📁💈🔣🐑👩 💋👬👖🎋 💽🐈🍮🍰👚 🔓🔗🍋🐡👤🏨🔃🍫 🔔🎺🍍💡 👦🎦🔊🍛 🌃🔭🕧📖👋💦🎤 🕃🗼🌹📔🏩📲 🍋💿📰🌻 📉🔵🐅🍠. 🌳🐲🏡💽 🌎💟🎅🔃🎬🔹 🌆👞🌖📇💣🐡💩 🐂🐓🏥🌵👴 🏃🐴🔺🍑📩 🔣🔨👄🐅🏁 🏄🐎👵📤 🕗🔲👾🌲📒 🐺💉🎦📙💈 🏂🌃🏊📭 📳🎺🍕🔷🐖 🍓🎼💠🌽🏭🎃 🕤🍞💑🕣🌻🔺🍲 📎🐼💨🐎📈 🍳🍎🕜🌱 🌴🐐📕👈.\n    \n    🎱🐱🎭🔠🎃💡 🐬🌹👉🐒🎮🍵 🐌👃🐺💓👽 🍢👙📠👝📝 🍄💈🕀👹🍲🎒 🎳📯🎉🍚🌀🎣 👒🍡🎡📕 🐭💾🔯👙🗻📟 📝🔮📑👉💰🌎 💙🏡👙🍹🏦. 🔸👳🔜💨💝 📔🎍🏦🎬💭🎊 🍲🐰👥👟 🔕🎿🏣💕📔 🕘🔇🎱🏨💍 🔙🌋🏫📛👭🍎💒 👡🎈🎲📋💑 💴🔝🌋📃🎍 🍳🔙💇🍚🔮 🐥💚🕣🐎🔹🍩🎂 👠🗽💁🍁 💽💊🐯🐾 🎺🔥🔤📢🍵👣👓 🔻👃🌈🕡🍚🍱 🎬🔥🍙🔡. 💙🌘🔗📛💉🍮 🔖🏨👼🏊 💴🔗🍓📬🎂 💁💃🌷🕂🕂 🔺🔩💦🍤🌻🔆 🐐🎸💝🍓 🎆🔬🌶📧🐘 🐇🔝🔗🍕 🏮🌠📺🍸 🎡👴🔇💥👓 🎻👥💴🍖🏭💈 🐺📡🎋💨🍚👖 🎸🐌🌚🔷💢💁 💛📈👴🐅🔗.\n    \n    💕🎫🌝💢👾 🎌🕤🎧🐴📼 🍀📊🐡🌼🌀📳 🎰🐝🎤🍝👇🌄 💪🏀🍸🔁🐗🌖🍮 📎🍓🔴🐄🕡🔛🕕 🎱📏🐾🍇🔕 💧🍙🔂🎡 🕛💒👿🎼🔀 💛👦🌍📒📍🌄 👓🐽🏬🕦🔶 🍜📰🎋🍅🍝💜💫💈 🎨🌁🍗🎊🌳🐡📶 🎵🏠💚🗽🌉 🐕📱🕦📑 💩👤🕖🔖. 📍👋💁🌆🌜 🕔🐺🕀🔭 🌄🌆🏰💚📅📹🔀 🐰💴🕢🔎💹🎋 👥🔑🔯👗 🐶🎺📐💜🌂 🔲👦📬🍧🎶🍵 🐤🍢🐔🎩 🔂🐕💦🎤🍒🐣🔣 📙🔩📘💋🍧👺. 🕑💿🔫📶 🔮💏👀🎿📺📼💋 🐞👤📲🎆🏦🐪 💗🐸🏯🔳🍨 🕣🐀🗼🐂🐳 🍄🍮🍈📚🐄🎷🐄🍡 🍲🔕🔄💜🍉 🏆🍚🔠📠🍹👧. 🏧💻🕣👔👪 🌴📷💽🔼📃💼💲 📺🍪🍠👋🍶🍇 💭👡🍋🌏 💂🐁🍍🐶🎤💠🕟 🕚🌖🐺🔽🐟 🕃💏🐋🔟 🔼🎹🍤🍗🎽📷📚 🔜🌕📫💯 🐾🎻📶🎼🍐 💑👭👊🐖.🎇 🌲🎡🍉📕📥🎎🌒 🌈👂🐩💂🏯💠🍮 💵🔊🌻🕖🌽 📶💮💠🕜 🐟💃🐩🍚 🔪🐼🍺🐧🍆🏧. 💚🐗🍨🍼💙 💗🕜🐂💏 📀🎂🎿🔃👚🏦🐠 👃🍘📐📐🎲 💹🍨🎠🍤🐷 📊👔🕑🕂📍🐦 🍸🍦🕂💦🕜📪📤 🔑🎋👐🌅🌛 🐥📌🏯👮🐃🐟 👼🍙🎑👯🌁💅👝 👦🔥🌶👩🎀 🕠📲📤📆 💀🌉🔽🌗💚🔌. 📀🕀🐝👀📣 💄🍴🐱💶🍣 💴💗💠👜 🐖👖🐳👲🌟 🔢🎴👹🎅🌟🔞 🎭🏩🕓🔪 💶🎮🎧📳💁🐠 💥🎢👙👊🐑📺🌳 🎀🔶🐪🔛. 📼🎣🔼🍩🎥 🌂🌙📚📲🔩🏆 🎓📤🎡🌠 🔚🌌🔗🔠 🎧🎃🌞🐆🔈 🎅🎁🍢💁 📐🐓🐎🐵 🏆📡🕘📊👢 🌛💗🔂🌑🕝👛🍜 💳🎺📩🎫🎀🐅🍵 🏩🔕🏢🍁👘.`);\n    return <RichTextarea style={style} onChange={useCallback(e => setText(e.target.value), [])} value={text}>\n        {emojiRegex}\n      </RichTextarea>;\n  }\n}",...null==(_g=Emoji.parameters)?void 0:_g.storySource}},Search.parameters={...Search.parameters,storySource:{source:'{\n  render: () => {\n    const [text, setText] = useState(LOREM);\n    const [searchText, setSearchText] = useState("dolor");\n    return <div>\n        <div>\n          <label htmlFor="search">input search word: </label>\n          <input name="search" value={searchText} onChange={e => setSearchText(e.target.value)} />\n        </div>\n        <RichTextarea style={style} onChange={useCallback(e => setText(e.target.value), [])} value={text}>\n          {searchText ? createRegexRenderer([[new RegExp(searchText.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&"), "ig"), {\n          borderRadius: "3px",\n          backgroundColor: "yellow"\n        }]]) : undefined}\n        </RichTextarea>\n      </div>;\n  }\n}',...null==(_h=Search.parameters)?void 0:_h.storySource}}},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var e=__webpack_require__("./node_modules/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"./node_modules/use-sync-external-store/shim/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")},"./src/renderers.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>createRegexRenderer});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const createRegexRenderer=matchers=>value=>{const styles={},ranges=[];matchers.forEach((([matcher,style],i)=>{ranges.push(...((reg,text)=>{const results=[];let match=reg.exec(text);for(;match;)results.push(match),match=reg.exec(text);return results})(matcher,value).map((m=>[m.index,m.index+m[0].length,i]))),styles[String(i)]=style}));const chunks=(ranges=>{ranges.sort(((a,b)=>a[0]-b[0]||a[1]-b[1]));const results=[];let last;return ranges.forEach((([start,end,styleId])=>{if(!last||start>=last[1])results.push(last=[start,end,{[styleId]:!0}]);else if(end>last[1])last[2][styleId]=!0,results.push(last=[last[1],end,{[styleId]:!0}]);else if(end<=last[1]){const lastEnd=last[1],lastStyle={...last[2]},lastStyle2={...last[2]};last[0]!==start?last[1]=start:results.pop(),lastStyle[styleId]=!0,results.push(last=[start,end,lastStyle]),end!==lastEnd&&results.push(last=[end,lastEnd,lastStyle2])}})),results})(ranges),res=[];let prevEnd=0;for(let i=0;i<chunks.length;i++){const[start,end,styleIds]=chunks[i];res.push(value.slice(prevEnd,start));const v=value.slice(start,end);res.push(Object.keys(styleIds).reduceRight(((acc,si,index)=>{const styleOrRender=styles[si],key=0===index?String(start):void 0;return"function"==typeof styleOrRender?styleOrRender({children:acc,value:v,key}):(0,jsx_runtime.jsx)("span",{style:styleOrRender,children:acc},key)}),v)),prevEnd=end}return res.push(value.slice(prevEnd)),res};try{createRegexRenderer.displayName="createRegexRenderer",createRegexRenderer.__docgenInfo={description:"An utility to create renderer function with regex.",displayName:"createRegexRenderer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/renderers.tsx#createRegexRenderer"]={docgenInfo:createRegexRenderer.__docgenInfo,name:"createRegexRenderer",path:"src/renderers.tsx#createRegexRenderer"})}catch(__react_docgen_typescript_loader_error){}}}]);