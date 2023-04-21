import{a as T,j as d}from"./useStatic-0a5cdcfd.js";import{r as l}from"./index-90fda323.js";import{r as S}from"./index-a96038f4.js";import{C as v}from"./mocks-f32adc4b.js";import{R as I}from"./textarea-9843bea7.js";import{c as A}from"./renderers-f8ca5064.js";const O={component:I},C={width:"400px",height:"300px"},D=8,g=/\B@([\-+\w]*)$/,M=new RegExp(`(${v.map(s=>`@${s}`).join("|")})`,"g"),k=A([[M,{background:"#EAF5F9",color:"#4276AA",borderRadius:"3px"}]]),y=({chars:s,index:o,top:p,left:t,complete:a})=>d("div",{style:{position:"fixed",top:p,left:t,fontSize:"12px",border:"solid 1px gray",borderRadius:"3px",background:"white",cursor:"pointer"},children:s.map((n,r)=>d("div",{style:{padding:"4px",...o===r&&{color:"white",background:"#2A6AD3"}},onMouseDown:u=>{u.preventDefault(),a(r)},children:n},n))}),i={render:()=>{const s=l.useRef(null),[o,p]=l.useState(`Hi, @Captain Gregor and @Jaxxon . Please enter @ to show suggestions.

`),[t,a]=l.useState(null),[n,r]=l.useState(0),u=t?o.slice(0,t.caret):o,x=t&&u.match(g),f=(x==null?void 0:x[1])??"",c=l.useMemo(()=>v.filter(e=>e.toLowerCase().startsWith(f.toLowerCase())).slice(0,D),[f]),m=e=>{if(!s.current||!t)return;const h=c[e];s.current.setRangeText(`@${h} `,t.caret-f.length-1,t.caret,"end"),a(null),r(0)};return T("div",{children:[d(I,{ref:s,style:C,onChange:e=>p(e.target.value),value:o,onKeyDown:e=>{if(!(!t||!c.length))switch(e.code){case"ArrowUp":e.preventDefault();const h=n<=0?c.length-1:n-1;r(h);break;case"ArrowDown":e.preventDefault();const E=n>=c.length-1?0:n+1;r(E);break;case"Enter":e.preventDefault(),m(n);break;case"Escape":e.preventDefault(),a(null),r(0);break}},onSelectionChange:e=>{e.focused&&g.test(o.slice(0,e.selectionStart))?(a({top:e.top+e.height,left:e.left,caret:e.selectionStart}),r(0)):(a(null),r(0))},children:k}),t&&S.createPortal(d(y,{top:t.top,left:t.left,chars:c,index:n,complete:m}),document.body)]})}};var R,b,w;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
    const chars = useMemo(() => CHARACTERS.filter(c => c.toLowerCase().startsWith(name.toLowerCase())).slice(0, MAX_CHARS), [name]);
    const complete = (i: number) => {
      if (!ref.current || !pos) return;
      const selected = chars[i];
      ref.current.setRangeText(\`@\${selected} \`, pos.caret - name.length - 1, pos.caret, "end");
      setPos(null);
      setIndex(0);
    };
    return <div>
        <RichTextarea ref={ref} style={style} onChange={e => setText(e.target.value)} value={text} onKeyDown={e => {
        if (!pos || !chars.length) return;
        switch (e.code) {
          case "ArrowUp":
            e.preventDefault();
            const nextIndex = index <= 0 ? chars.length - 1 : index - 1;
            setIndex(nextIndex);
            break;
          case "ArrowDown":
            e.preventDefault();
            const prevIndex = index >= chars.length - 1 ? 0 : index + 1;
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
        {pos && createPortal(<Menu top={pos.top} left={pos.left} chars={chars} index={index} complete={complete} />, document.body)}
      </div>;
  }
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const $=["Mention"];export{i as Mention,$ as __namedExportsOrder,O as default};
//# sourceMappingURL=Mention.stories-d4810115.js.map
