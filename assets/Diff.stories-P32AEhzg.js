import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{C as n}from"./iframe-BvDqdyvn.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{s as i,t as a}from"./src-B_-KEo-D.js";var o,s=t((()=>{o=class{diff(e,t,n={}){let r;typeof n==`function`?(r=n,n={}):`callback`in n&&(r=n.callback);let i=this.castInput(e,n),a=this.castInput(t,n),o=this.removeEmpty(this.tokenize(i,n)),s=this.removeEmpty(this.tokenize(a,n));return this.diffWithOptionsObj(o,s,n,r)}diffWithOptionsObj(e,t,n,r){let i=e=>{if(e=this.postProcess(e,n),r){setTimeout(function(){r(e)},0);return}else return e},a=t.length,o=e.length,s=1,c=a+o;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));let l=n.timeout??1/0,u=Date.now()+l,d=[{oldPos:-1,lastComponent:void 0}],f=this.extractCommon(d[0],t,e,0,n);if(d[0].oldPos+1>=o&&f+1>=a)return i(this.buildValues(d[0].lastComponent,t,e));let p=-1/0,m=1/0,h=()=>{for(let r=Math.max(p,-s);r<=Math.min(m,s);r+=2){let s,c=d[r-1],l=d[r+1];c&&(d[r-1]=void 0);let u=!1;if(l){let e=l.oldPos-r;u=l&&0<=e&&e<a}let h=c&&c.oldPos+1<o;if(!u&&!h){d[r]=void 0;continue}if(s=!h||u&&c.oldPos<l.oldPos?this.addToPath(l,!0,!1,0,n):this.addToPath(c,!1,!0,1,n),f=this.extractCommon(s,t,e,r,n),s.oldPos+1>=o&&f+1>=a)return i(this.buildValues(s.lastComponent,t,e))||!0;d[r]=s,s.oldPos+1>=o&&(m=Math.min(m,r-1)),f+1>=a&&(p=Math.max(p,r+1))}s++};if(r)(function e(){setTimeout(function(){if(s>c||Date.now()>u)return r(void 0);h()||e()},0)})();else for(;s<=c&&Date.now()<=u;){let e=h();if(e)return e}}addToPath(e,t,n,r,i){let a=e.lastComponent;return a&&!i.oneChangePerToken&&a.added===t&&a.removed===n?{oldPos:e.oldPos+r,lastComponent:{count:a.count+1,added:t,removed:n,previousComponent:a.previousComponent}}:{oldPos:e.oldPos+r,lastComponent:{count:1,added:t,removed:n,previousComponent:a}}}extractCommon(e,t,n,r,i){let a=t.length,o=n.length,s=e.oldPos,c=s-r,l=0;for(;c+1<a&&s+1<o&&this.equals(n[s+1],t[c+1],i);)c++,s++,l++,i.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return l&&!i.oneChangePerToken&&(e.lastComponent={count:l,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=s,c}equals(e,t,n){return n.comparator?n.comparator(e,t):e===t||!!n.ignoreCase&&e.toLowerCase()===t.toLowerCase()}removeEmpty(e){let t=[];for(let n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}castInput(e,t){return e}tokenize(e,t){return Array.from(e)}join(e){return e.join(``)}postProcess(e,t){return e}get useLongestToken(){return!1}buildValues(e,t,n){let r=[],i;for(;e;)r.push(e),i=e.previousComponent,delete e.previousComponent,e=i;r.reverse();let a=r.length,o=0,s=0,c=0;for(;o<a;o++){let e=r[o];if(e.removed)e.value=this.join(n.slice(c,c+e.count)),c+=e.count;else{if(!e.added&&this.useLongestToken){let r=t.slice(s,s+e.count);r=r.map(function(e,t){let r=n[c+t];return r.length>e.length?r:e}),e.value=this.join(r)}else e.value=this.join(t.slice(s,s+e.count));s+=e.count,e.added||(c+=e.count)}}return r}}}));function c(e,t,n){return u.diff(e,t,n)}var l,u,d=t((()=>{s(),l=class extends o{},u=new l}));function f(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function p(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return``;for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function m(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function h(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function g(e,t){return m(e,t,``)}function _(e,t){return h(e,t,``)}function v(e,t){return t.slice(0,y(e,t))}function y(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);let i=Array(r),a=0;i[0]=0;for(let e=1;e<r;e++){for(t[e]==t[a]?i[e]=i[a]:i[e]=a;a>0&&t[e]!=t[a];)a=i[a];t[e]==t[a]&&a++}a=0;for(let r=n;r<e.length;r++){for(;a>0&&e[r]!=t[a];)a=i[a];e[r]==t[a]&&a++}return a}function b(e,t){let n=[];for(let r of Array.from(t.segment(e))){let e=r.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(e)?n[n.length-1]+=e:n.push(e)}return n}function x(e,t){if(t)return C(e,t)[1];let n;for(n=e.length-1;n>=0&&e[n].match(/\s/);n--);return e.substring(n+1)}function S(e,t){if(t)return C(e,t)[0];let n=e.match(/^\s*/);return n?n[0]:``}function C(e,t){if(!t)return[S(e),x(e)];if(t.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);let n=b(e,t),r=n[0],i=n[n.length-1];return[/\s/.test(r)?r:``,/\s/.test(i)?i:``]}var w=t((()=>{}));function T(e,t,n,r,i){if(t&&n){let[a,o]=C(t.value,i),[s,c]=C(n.value,i);if(e){let r=f(a,s);e.value=h(e.value,s,r),t.value=g(t.value,r),n.value=g(n.value,r)}if(r){let e=p(o,c);r.value=m(r.value,c,e),t.value=_(t.value,e),n.value=_(n.value,e)}}else if(n){if(e){let e=S(n.value,i);n.value=n.value.substring(e.length)}if(r){let e=S(r.value,i);r.value=r.value.substring(e.length)}}else if(e&&r){let n=S(r.value,i),[a,o]=C(t.value,i),s=f(n,a);t.value=g(t.value,s);let c=p(g(n,s),o);t.value=_(t.value,c),r.value=m(r.value,n,c),e.value=h(e.value,n,n.slice(0,n.length-c.length))}else if(r){let e=S(r.value,i),n=v(x(t.value,i),e);t.value=_(t.value,n)}else if(e){let n=v(x(e.value,i),S(t.value,i));t.value=g(t.value,n)}}var E,D,O,k,ee=t((()=>{s(),w(),E=`a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}`,D=RegExp(`[${E}]+|\\s+|[^${E}]`,`ug`),O=class extends o{equals(e,t,n){return n.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e.trim()===t.trim()}tokenize(e,t={}){let n;if(t.intlSegmenter){let r=t.intlSegmenter;if(r.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);n=b(e,r)}else n=e.match(D)||[];let r=[],i=null;return n.forEach(e=>{/\s/.test(e)?i==null?r.push(e):r.push(r.pop()+e):i!=null&&/\s/.test(i)?r[r.length-1]==i?r.push(r.pop()+e):r.push(i+e):r.push(e),i=e}),r}join(e){return e.map((e,t)=>t==0?e:e.replace(/^\s+/,``)).join(``)}postProcess(e,t){if(!e||t.oneChangePerToken)return e;let n=null,r=null,i=null;return e.forEach(e=>{e.added?r=e:e.removed?i=e:((r||i)&&T(n,i,r,e,t.intlSegmenter),n=e,r=null,i=null)}),(r||i)&&T(n,i,r,null,t.intlSegmenter),e}},new O,k=class extends o{tokenize(e){let t=RegExp(`(\\r?\\n)|[${E}]+|[^\\S\\n\\r]+|[^${E}]`,`ug`);return e.match(t)||[]}},new k}));function te(e,t,n){return M.diff(e,t,n)}function A(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));let n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let e=0;e<r.length;e++){let i=r[e];e%2&&!t.newlineIsToken?n[n.length-1]+=i:n.push(i)}return n}var j,M,N=t((()=>{s(),j=class extends o{constructor(){super(...arguments),this.tokenize=A}equals(e,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(e,t,n)}},M=new j}));function P(e){return e==`.`||e==`!`||e==`?`}var F,I=t((()=>{s(),F=class extends o{tokenize(e){let t=[],n=0;for(let r=0;r<e.length;r++){if(r==e.length-1){t.push(e.slice(n));break}if(P(e[r])&&e[r+1].match(/\s/)){for(t.push(e.slice(n,r+1)),r=n=r+1;e[r+1]?.match(/\s/);)r++;t.push(e.slice(n,r+1)),n=r+1}}return t}},new F})),L,R=t((()=>{s(),L=class extends o{tokenize(e){return e.split(/([{}:;,]|\s+)/)}},new L}));function z(e,t,n,r,i){t||=[],n||=[],r&&(e=r(i===void 0?``:i,e));let a;for(a=0;a<t.length;a+=1)if(t[a]===e)return n[a];let o;if(Object.prototype.toString.call(e)===`[object Array]`){for(t.push(e),o=Array(e.length),n.push(o),a=0;a<e.length;a+=1)o[a]=z(e[a],t,n,r,String(a));return t.pop(),n.pop(),o}if(e&&e.toJSON&&(e=e.toJSON()),typeof e==`object`&&e){t.push(e),o={},n.push(o);let i=[],s;for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&i.push(s);for(i.sort(),a=0;a<i.length;a+=1)s=i[a],o[s]=z(e[s],t,n,r,s);t.pop(),n.pop()}else o=e;return o}var B,V=t((()=>{s(),N(),B=class extends o{constructor(){super(...arguments),this.tokenize=A}get useLongestToken(){return!0}castInput(e,t){let{undefinedReplacement:n,stringifyReplacer:r=(e,t)=>t===void 0?n:t}=t;return typeof e==`string`?e:JSON.stringify(z(e,null,null,r),null,`  `)}equals(e,t,n){return super.equals(e.replace(/,([\r\n])/g,`$1`),t.replace(/,([\r\n])/g,`$1`),n)}},new B})),H,U=t((()=>{s(),H=class extends o{tokenize(e){return e.slice()}join(e){return e}removeEmpty(e){return e}},new H})),ne=t((()=>{N()})),re=t((()=>{d(),ee(),N(),I(),R(),V(),U(),ne()})),W,G,K,q,J,Y,X,Z,Q,$;t((()=>{W=e(n()),a(),re(),G=r(),K={component:i},q={width:`300px`,height:`400px`},J=`rgba(255, 0, 0, 0.2)`,Y=`rgba(155, 185, 85, 0.2)`,X=({type:e,children:t})=>(0,G.jsx)(`span`,{style:{background:e===`base`?J:Y},children:t}),Z=({result:e,type:t,text:n,onChange:r})=>(0,G.jsx)(i,{value:n,onChange:r,style:q,children:n=>n.split(`
`).map((n,r)=>{let i=e[r];return(0,G.jsx)(`div`,{style:i?{background:t===`base`?J:Y}:void 0,children:n?Array.isArray(i)?i.map((e,n)=>!e.added&&!e.removed?e.value:t===`base`&&e.added||t===`target`&&e.removed?null:(0,G.jsx)(X,{type:t,children:e.value},n)):i?(0,G.jsx)(X,{type:t,children:n}):n:(0,G.jsx)(`br`,{})},r)})}),Q={render:()=>{let[e,t]=(0,W.useState)(`This line is removed on the right.
just some text
abcd
efgh
Some more text
Some more text
Some more text`),[n,r]=(0,W.useState)(`just some text
abcz
zzzzefgh
Some more text.
This line is removed on the left.`),i=(0,W.useMemo)(()=>{let t=e=>(e.endsWith(`
`)?e.slice(0,-1):e).split(`
`),r=te(e,n),i=0,a=0,o={},s={};for(let e=0;e<r.length;e++){let{removed:n,added:l,value:u}=r[e],d=t(u);if(!n&&!l&&(i+=d.length,a+=d.length),n){let n=r[e+1];if(n&&n.added){let r=t(n.value),l=Math.max(d.length,r.length);for(let e=0;e<l;e++){let t=d[e],n=r[e];if(t!=null&&n!=null){let e=c(t,n);o[i]=e,s[a]=e}t!=null&&(o[i]||(o[i]=!0),i++),n!=null&&(s[a]||(s[a]=!0),a++)}e++;continue}for(let e of d)o[i]=!0,i++}if(l)for(let e of d)s[a]=!0,a++}return{base:o,target:s}},[e,n]);return(0,G.jsxs)(`div`,{children:[(0,G.jsx)(Z,{type:`base`,result:i.base,text:e,onChange:(0,W.useCallback)(e=>{t(e.target.value)},[])}),(0,G.jsx)(Z,{type:`target`,result:i.target,text:n,onChange:(0,W.useCallback)(e=>{r(e.target.value)},[])})]})}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [baseText, setBaseText] = useState("This line is removed on the right.\\njust some text\\nabcd\\nefgh\\nSome more text\\nSome more text\\nSome more text");
    const [targetText, setTargetText] = useState("just some text\\nabcz\\nzzzzefgh\\nSome more text.\\nThis line is removed on the left.");
    const result = useMemo(() => {
      const getLines = (v: string) => {
        const trimmedValue = v.endsWith("\\n") ? v.slice(0, -1) : v;
        return trimmedValue.split("\\n");
      };
      const diff = diffLines(baseText, targetText);
      let baseCount = 0;
      let targetCount = 0;
      const base: DiffResult = {};
      const target: DiffResult = {};
      for (let diffIndex = 0; diffIndex < diff.length; diffIndex++) {
        const {
          removed,
          added,
          value
        } = diff[diffIndex]!;
        const lines = getLines(value);
        if (!removed && !added) {
          baseCount += lines.length;
          targetCount += lines.length;
        }
        if (removed) {
          const next = diff[diffIndex + 1];
          if (next && next.added) {
            const nextLines = getLines(next.value);
            const maxLength = Math.max(lines.length, nextLines.length);
            for (let i = 0; i < maxLength; i++) {
              const b = lines[i];
              const t = nextLines[i];
              if (b != null && t != null) {
                const charDiff = diffChars(b, t);
                base[baseCount] = charDiff;
                target[targetCount] = charDiff;
              }
              if (b != null) {
                if (!base[baseCount]) {
                  base[baseCount] = true;
                }
                baseCount++;
              }
              if (t != null) {
                if (!target[targetCount]) {
                  target[targetCount] = true;
                }
                targetCount++;
              }
            }
            diffIndex++;
            continue;
          }
          for (const l of lines) {
            base[baseCount] = true;
            baseCount++;
          }
        }
        if (added) {
          for (const l of lines) {
            target[targetCount] = true;
            targetCount++;
          }
        }
      }
      return {
        base,
        target
      };
    }, [baseText, targetText]);
    return <div>
        <Editor type="base" result={result.base} text={baseText} onChange={useCallback(e => {
        setBaseText(e.target.value);
      }, [])} />
        <Editor type="target" result={result.target} text={targetText} onChange={useCallback(e => {
        setTargetText(e.target.value);
      }, [])} />
      </div>;
  }
}`,...Q.parameters?.docs?.source}}},$=[`Diff`]}))();export{Q as Diff,$ as __namedExportsOrder,K as default};