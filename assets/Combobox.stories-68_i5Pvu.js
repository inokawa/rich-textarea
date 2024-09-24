import{j as a}from"./observer-Djkfms2H.js";import{r}from"./index-RYns6xqu.js";import{C as I}from"./mocks-Di3JMOQr.js";import{R as b}from"./textarea-zpBFEpjA.js";const R={component:b},w=20,v=400,S={height:w,width:v,whiteSpace:"pre",overflowWrap:"normal",resize:"none"},D=({index:s,items:c,onSelect:l})=>{const e=r.useRef(null);return r.useEffect(()=>{var n;e.current&&((n=e.current.children[s])==null||n.scrollIntoView())},[s]),a.jsx("div",{style:{position:"absolute",overflowY:"auto",maxHeight:200,top:w+4,left:0,width:v,fontSize:"12px",border:"solid 1px gray",borderRadius:"3px"},children:a.jsx("ul",{ref:e,style:{listStyleType:"none",margin:0,padding:0,cursor:"pointer",background:"white"},children:c.map((n,i)=>a.jsx("li",{style:{...s===i&&{color:"white",background:"#2A6AD3"}},onMouseDown:()=>l(i),children:n},n))})})},u={render:()=>{const s=r.useRef(null),[c,l]=r.useState(""),[e,n]=r.useState(-1),[i,x]=r.useState(!1),o=r.useMemo(()=>I.filter(t=>t.toLowerCase().startsWith(c.toLowerCase())),[c]),p=t=>{var d;l(o[t]),n(-1),(d=s.current)==null||d.blur()};return a.jsxs("div",{style:{position:"relative",padding:0},children:[a.jsx(b,{ref:s,rows:1,style:S,onChange:t=>l(t.target.value),value:c,placeholder:"Please select...",onFocus:()=>x(!0),onBlur:()=>x(!1),onKeyDown:t=>{if(o.length)switch(t.code){case"ArrowUp":t.preventDefault();const d=e===-1?o.length-1:e-1;n(d);break;case"ArrowDown":t.preventDefault();const g=e>=o.length-1?-1:e+1;n(g);break;case"Enter":t.preventDefault();case"Space":if(e===-1)break;p(e);break;case"Escape":t.preventDefault(),n(-1);break}}}),i&&!!o.length&&a.jsx(D,{index:e,items:o,onSelect:p})]})}};var f,h,m;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<RichTextareaHandle>(null);
    const [text, setText] = useState("");
    const [index, setIndex] = useState<number>(-1);
    const [focused, setFocused] = useState(false);
    const filtered = useMemo(() => CHARACTERS.filter(c => c.toLowerCase().startsWith(text.toLowerCase())), [text]);
    const complete = (i: number) => {
      setText(filtered[i]);
      setIndex(-1);
      ref.current?.blur();
    };
    return <div style={{
      position: "relative",
      padding: 0
    }}>
        <RichTextarea ref={ref} rows={1} style={style} onChange={e => setText(e.target.value)} value={text} placeholder="Please select..." onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onKeyDown={e => {
        if (!filtered.length) return;
        switch (e.code) {
          case "ArrowUp":
            e.preventDefault();
            const nextIndex = index === -1 ? filtered.length - 1 : index - 1;
            setIndex(nextIndex);
            break;
          case "ArrowDown":
            e.preventDefault();
            const prevIndex = index >= filtered.length - 1 ? -1 : index + 1;
            setIndex(prevIndex);
            break;
          case "Enter":
            e.preventDefault();
          case "Space":
            if (index === -1) break;
            complete(index);
            break;
          case "Escape":
            e.preventDefault();
            setIndex(-1);
            break;
          default:
            break;
        }
      }} />
        {focused && !!filtered.length && <Menu index={index} items={filtered} onSelect={complete} />}
      </div>;
  }
}`,...(m=(h=u.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const E=["Combobox"];export{u as Combobox,E as __namedExportsOrder,R as default};
