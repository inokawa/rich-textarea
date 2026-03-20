import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{a as n}from"./iframe-CYC-gpG_.js";import{t as r}from"./jsx-runtime-CR4qI0Ep.js";import{a as i,t as a}from"./src-BWBm5TpF.js";import{r as o,t as s}from"./mocks-1NYkpA0F.js";var c,l,u,d,f,p,m,h,g;e((()=>{c=t(n()),a(),o(),l=r(),u={component:i},d=20,f=400,p={height:d,width:f,whiteSpace:`pre`,overflowWrap:`normal`,resize:`none`},m=({index:e,items:t,onSelect:n})=>{let r=(0,c.useRef)(null);return(0,c.useEffect)(()=>{r.current&&r.current.children[e]?.scrollIntoView()},[e]),(0,l.jsx)(`div`,{style:{position:`absolute`,overflowY:`auto`,maxHeight:200,top:d+4,left:0,width:f,fontSize:`12px`,border:`solid 1px gray`,borderRadius:`3px`},children:(0,l.jsx)(`ul`,{ref:r,style:{listStyleType:`none`,margin:0,padding:0,cursor:`pointer`,background:`white`},children:t.map((t,r)=>(0,l.jsx)(`li`,{style:{...e===r&&{color:`white`,background:`#2A6AD3`}},onMouseDown:()=>n(r),children:t},t))})})},h={render:()=>{let e=(0,c.useRef)(null),[t,n]=(0,c.useState)(``),[r,a]=(0,c.useState)(-1),[o,u]=(0,c.useState)(!1),d=(0,c.useMemo)(()=>s.filter(e=>e.toLowerCase().startsWith(t.toLowerCase())),[t]),f=t=>{n(d[t]),a(-1),e.current?.blur()};return(0,l.jsxs)(`div`,{style:{position:`relative`,padding:0},children:[(0,l.jsx)(i,{ref:e,rows:1,style:p,onChange:e=>n(e.target.value),value:t,placeholder:`Please select...`,onFocus:()=>u(!0),onBlur:()=>u(!1),onKeyDown:e=>{if(d.length)switch(e.code){case`ArrowUp`:e.preventDefault(),a(r===-1?d.length-1:r-1);break;case`ArrowDown`:e.preventDefault(),a(r>=d.length-1?-1:r+1);break;case`Enter`:e.preventDefault();case`Space`:if(r===-1)break;f(r);break;case`Escape`:e.preventDefault(),a(-1);break;default:break}}}),o&&!!d.length&&(0,l.jsx)(m,{index:r,items:d,onSelect:f})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Combobox`]}))();export{h as Combobox,g as __namedExportsOrder,u as default};