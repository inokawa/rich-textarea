import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-6r5P-tC5.js";import{r as b}from"./index-DuwxzmwQ.js";import{C as g}from"./mocks-Di3JMOQr.js";import{R}from"./textarea-CHRlKw5_.js";import{c as w}from"./index-CWLpF5TT.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DLf0Ep8C.js";import"./observer-BRJyxK-O.js";const L={component:R},E={width:"400px",height:"300px"},I=8,h=/\B@([\-+\w]*)$/,v=new RegExp(`(${g.map(o=>`@${o}`).join("|")})`,"g"),S=w([[v,{background:"#EAF5F9",color:"#4276AA",borderRadius:"3px"}]]),D=({chars:o,index:s,top:p,left:t,complete:a})=>i.jsx("div",{style:{position:"fixed",top:p,left:t,fontSize:"12px",border:"solid 1px gray",borderRadius:"3px",background:"white",cursor:"pointer"},children:o.map((n,r)=>i.jsx("div",{style:{padding:"4px",...s===r&&{color:"white",background:"#2A6AD3"}},onMouseDown:u=>{u.preventDefault(),a(r)},children:n},n))}),d={render:()=>{const o=l.useRef(null),[s,p]=l.useState(`Hi, @Captain Gregor and @Jaxxon . Please enter @ to show suggestions.

`),[t,a]=l.useState(null),[n,r]=l.useState(0),u=t?s.slice(0,t.caret):s,x=(t&&u.match(h))?.[1]??"",c=l.useMemo(()=>g.filter(e=>e.toLowerCase().startsWith(x.toLowerCase())).slice(0,I),[x]),m=e=>{if(!o.current||!t)return;const f=c[e];o.current.setRangeText(`@${f} `,t.caret-x.length-1,t.caret,"end"),a(null),r(0)};return i.jsxs("div",{children:[i.jsx(R,{ref:o,style:E,onChange:e=>p(e.target.value),value:s,onKeyDown:e=>{if(!(!t||!c.length))switch(e.code){case"ArrowUp":e.preventDefault();const f=n<=0?c.length-1:n-1;r(f);break;case"ArrowDown":e.preventDefault();const T=n>=c.length-1?0:n+1;r(T);break;case"Enter":e.preventDefault(),m(n);break;case"Escape":e.preventDefault(),a(null),r(0);break}},onSelectionChange:e=>{e.focused&&h.test(s.slice(0,e.selectionStart))?(a({top:e.top+e.height,left:e.left,caret:e.selectionStart}),r(0)):(a(null),r(0))},children:S}),t&&b.createPortal(i.jsx(D,{top:t.top,left:t.left,chars:c,index:n,complete:m}),document.body)]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const j=["Mention"];export{d as Mention,j as __namedExportsOrder,L as default};
