import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-CStsT4ii.js";import{C as w}from"./mocks-Di3JMOQr.js";import{R as x}from"./textarea-h1w2im-A.js";import"./preload-helper-PPVm8Dsz.js";import"./observer-B5cSeiuM.js";const y={component:x},f=20,m=400,v={height:f,width:m,whiteSpace:"pre",overflowWrap:"normal",resize:"none"},g=({index:s,items:c,onSelect:l})=>{const e=r.useRef(null);return r.useEffect(()=>{e.current&&e.current.children[s]?.scrollIntoView()},[s]),a.jsx("div",{style:{position:"absolute",overflowY:"auto",maxHeight:200,top:f+4,left:0,width:m,fontSize:"12px",border:"solid 1px gray",borderRadius:"3px"},children:a.jsx("ul",{ref:e,style:{listStyleType:"none",margin:0,padding:0,cursor:"pointer",background:"white"},children:c.map((n,i)=>a.jsx("li",{style:{...s===i&&{color:"white",background:"#2A6AD3"}},onMouseDown:()=>l(i),children:n},n))})})},d={render:()=>{const s=r.useRef(null),[c,l]=r.useState(""),[e,n]=r.useState(-1),[i,u]=r.useState(!1),o=r.useMemo(()=>w.filter(t=>t.toLowerCase().startsWith(c.toLowerCase())),[c]),p=t=>{l(o[t]),n(-1),s.current?.blur()};return a.jsxs("div",{style:{position:"relative",padding:0},children:[a.jsx(x,{ref:s,rows:1,style:v,onChange:t=>l(t.target.value),value:c,placeholder:"Please select...",onFocus:()=>u(!0),onBlur:()=>u(!1),onKeyDown:t=>{if(o.length)switch(t.code){case"ArrowUp":t.preventDefault();const h=e===-1?o.length-1:e-1;n(h);break;case"ArrowDown":t.preventDefault();const b=e>=o.length-1?-1:e+1;n(b);break;case"Enter":t.preventDefault();case"Space":if(e===-1)break;p(e);break;case"Escape":t.preventDefault(),n(-1);break}}}),i&&!!o.length&&a.jsx(g,{index:e,items:o,onSelect:p})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const R=["Combobox"];export{d as Combobox,R as __namedExportsOrder,y as default};
