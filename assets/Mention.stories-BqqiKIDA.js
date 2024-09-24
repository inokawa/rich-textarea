import{j as i}from"./observer-Djkfms2H.js";import{r as l}from"./index-RYns6xqu.js";import{r as v}from"./index-CXU7o9CY.js";import{C as w}from"./mocks-Di3JMOQr.js";import{R as E}from"./textarea-zpBFEpjA.js";import{c as S}from"./index-xkcP6x86.js";const L={component:E},D={width:"400px",height:"300px"},A=8,g=/\B@([\-+\w]*)$/,C=new RegExp(`(${w.map(s=>`@${s}`).join("|")})`,"g"),M=S([[C,{background:"#EAF5F9",color:"#4276AA",borderRadius:"3px"}]]),k=({chars:s,index:o,top:p,left:t,complete:a})=>i.jsx("div",{style:{position:"fixed",top:p,left:t,fontSize:"12px",border:"solid 1px gray",borderRadius:"3px",background:"white",cursor:"pointer"},children:s.map((n,r)=>i.jsx("div",{style:{padding:"4px",...o===r&&{color:"white",background:"#2A6AD3"}},onMouseDown:u=>{u.preventDefault(),a(r)},children:n},n))}),d={render:()=>{const s=l.useRef(null),[o,p]=l.useState(`Hi, @Captain Gregor and @Jaxxon . Please enter @ to show suggestions.

`),[t,a]=l.useState(null),[n,r]=l.useState(0),u=t?o.slice(0,t.caret):o,x=t&&u.match(g),f=(x==null?void 0:x[1])??"",c=l.useMemo(()=>w.filter(e=>e.toLowerCase().startsWith(f.toLowerCase())).slice(0,A),[f]),h=e=>{if(!s.current||!t)return;const m=c[e];s.current.setRangeText(`@${m} `,t.caret-f.length-1,t.caret,"end"),a(null),r(0)};return i.jsxs("div",{children:[i.jsx(E,{ref:s,style:D,onChange:e=>p(e.target.value),value:o,onKeyDown:e=>{if(!(!t||!c.length))switch(e.code){case"ArrowUp":e.preventDefault();const m=n<=0?c.length-1:n-1;r(m);break;case"ArrowDown":e.preventDefault();const I=n>=c.length-1?0:n+1;r(I);break;case"Enter":e.preventDefault(),h(n);break;case"Escape":e.preventDefault(),a(null),r(0);break}},onSelectionChange:e=>{e.focused&&g.test(o.slice(0,e.selectionStart))?(a({top:e.top+e.height,left:e.left,caret:e.selectionStart}),r(0)):(a(null),r(0))},children:M}),t&&v.createPortal(i.jsx(k,{top:t.top,left:t.left,chars:c,index:n,complete:h}),document.body)]})}};var R,T,b;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<RichTextareaHandle>(null);
    const [text, setText] = useState(\`Hi, @Captain Gregor and @Jaxxon . Please enter @ to show suggestions.\\n\\n\`);
    const [pos, setPos] = useState<{
      top: number;
      left: number;
      caret: number;
    } | null>(null);
    const [index, setIndex] = useState<number>(0);
    const targetText = pos ? text.slice(0, pos.caret) : text;
    const match = pos && targetText.match(MENTION_REG);
    const name = match?.[1] ?? "";
    const filtered = useMemo(() => CHARACTERS.filter(c => c.toLowerCase().startsWith(name.toLowerCase())).slice(0, MAX_LIST_LENGTH), [name]);
    const complete = (i: number) => {
      if (!ref.current || !pos) return;
      const selected = filtered[i];
      ref.current.setRangeText(\`@\${selected} \`, pos.caret - name.length - 1, pos.caret, "end");
      setPos(null);
      setIndex(0);
    };
    return <div>
        <RichTextarea ref={ref} style={style} onChange={e => setText(e.target.value)} value={text} onKeyDown={e => {
        if (!pos || !filtered.length) return;
        switch (e.code) {
          case "ArrowUp":
            e.preventDefault();
            const nextIndex = index <= 0 ? filtered.length - 1 : index - 1;
            setIndex(nextIndex);
            break;
          case "ArrowDown":
            e.preventDefault();
            const prevIndex = index >= filtered.length - 1 ? 0 : index + 1;
            setIndex(prevIndex);
            break;
          case "Enter":
            e.preventDefault();
            complete(index);
            break;
          case "Escape":
            e.preventDefault();
            setPos(null);
            setIndex(0);
            break;
          default:
            break;
        }
      }} onSelectionChange={r => {
        if (r.focused && MENTION_REG.test(text.slice(0, r.selectionStart))) {
          setPos({
            top: r.top + r.height,
            left: r.left,
            caret: r.selectionStart
          });
          setIndex(0);
        } else {
          setPos(null);
          setIndex(0);
        }
      }}>
          {mentionRenderer}
        </RichTextarea>
        {pos && createPortal(<Menu top={pos.top} left={pos.left} chars={filtered} index={index} complete={complete} />, document.body)}
      </div>;
  }
}`,...(b=(T=d.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const j=["Mention"];export{d as Mention,j as __namedExportsOrder,L as default};
