import{r as x}from"./index.8e45f264.js";var p={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=x.exports,u=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,m=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function i(o,r,f){var e,t={},n=null,_=null;f!==void 0&&(n=""+f),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(_=r.ref);for(e in r)c.call(r,e)&&!y.hasOwnProperty(e)&&(t[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:u,type:o,key:n,ref:_,props:t,_owner:m.current}}s.Fragment=a;s.jsx=i;s.jsxs=i;(function(o){o.exports=s})(p);const d=p.exports.jsx,v=p.exports.jsxs;export{v as a,d as j};
//# sourceMappingURL=jsx-runtime.96752331.js.map
