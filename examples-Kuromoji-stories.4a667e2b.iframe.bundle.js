"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[103],{"./stories/examples/Kuromoji.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Kuromoji:()=>Kuromoji,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-dom/index.js"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/textarea.tsx"),kuromojin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/kuromojin/lib/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_4__.p};var style={width:"400px",height:"400px"},Mark=function(param){var _param_token=param.token,pos=_param_token.pos,pos_detail_1=_param_token.pos_detail_1,pos_detail_2=_param_token.pos_detail_2,pos_detail_3=_param_token.pos_detail_3,surface_form=_param_token.surface_form,children=param.children,ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),2),tooltip=_useState[0],setTooltip=_useState[1],color="名詞"===pos?"rgba(255, 0, 0, 0.2)":"動詞"===pos?"rgba(0, 255, 0, 0.2)":"形容詞"===pos?"rgba(0, 0, 255, 0.2)":"副詞"===pos?"rgba(255, 0, 255, 0.2)":"助詞"===pos?"rgba(0, 255, 255, 0.2)":"助動詞"===pos?"rgba(255, 255, 0, 0.2)":void 0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{ref,style:{position:"relative",background:color,outline:"solid 1px lightgray"},onMouseOver:function(e){if(ref.current){var rect=ref.current.getBoundingClientRect();setTooltip({top:rect.top-2*rect.height,left:rect.left,description:"".concat(surface_form,": ").concat(pos," | ").concat(pos_detail_1," | ").concat(pos_detail_2," | ").concat(pos_detail_3)})}},onMouseOut:function(){return setTooltip(null)},children:[children,tooltip&&(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{position:"fixed",top:tooltip.top,left:tooltip.left,background:"white",fontSize:16,padding:2,border:"solid 1px gray"},children:tooltip.description}),document.body)]})},Kuromoji={render:function(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("すもももももももものうち。\n\n吾輩 （ わがはい ） は猫である。名前はまだ無い。\n\nあのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。\n\n山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。"),2),text=_useState[0],setText=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),2),tokenizer=_useState1[0],setTokenizer=_useState1[1];return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){!function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}((function(){var tokenizer;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,(0,kuromojin__WEBPACK_IMPORTED_MODULE_3__.$U)({dicPath:"/rich-textarea/dict"})];case 1:return tokenizer=_state.sent(),setTokenizer(tokenizer),[2]}}))}))()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{marginTop:16},children:[!tokenizer&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"Loading dictionaries"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.p,{style,onChange:function(e){return setText(e.target.value)},value:text,children:function(v){if(!tokenizer)return v;var tokens=tokenizer.tokenize(text),nodes=[],_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=tokens[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var token=_step.value;nodes.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Mark,{token,children:token.surface_form},token.word_position))}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}return nodes}})]})}};const __namedExportsOrder=["Kuromoji"]}}]);