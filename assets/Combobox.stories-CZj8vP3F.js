import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{f as n}from"./iframe-DzT9rkd3.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./textarea-Dl0AkFiW.js";import{r as o,t as s}from"./mocks-DRfMhr1A.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{c=t(n()),i(),o(),l=r(),u={component:a},d=20,f=400,p={height:d,width:f,whiteSpace:`pre`,overflowWrap:`normal`,resize:`none`},m=({index:e,items:t,onSelect:n})=>{let r=(0,c.useRef)(null);return(0,c.useEffect)(()=>{r.current&&r.current.children[e]?.scrollIntoView()},[e]),(0,l.jsx)(`div`,{style:{position:`absolute`,overflowY:`auto`,maxHeight:200,top:24,left:0,width:f,fontSize:`12px`,border:`solid 1px gray`,borderRadius:`3px`},children:(0,l.jsx)(`ul`,{ref:r,style:{listStyleType:`none`,margin:0,padding:0,cursor:`pointer`,background:`white`},children:t.map((t,r)=>(0,l.jsx)(`li`,{style:{...e===r&&{color:`white`,background:`#2A6AD3`}},onMouseDown:()=>n(r),children:t},t))})})},h={render:()=>{let e=(0,c.useRef)(null),[t,n]=(0,c.useState)(``),[r,i]=(0,c.useState)(-1),[o,u]=(0,c.useState)(!1),d=(0,c.useMemo)(()=>s.filter(e=>e.toLowerCase().startsWith(t.toLowerCase())),[t]),f=t=>{n(d[t]),i(-1),e.current?.blur()};return(0,l.jsxs)(`div`,{style:{position:`relative`,padding:0},children:[(0,l.jsx)(a,{ref:e,rows:1,style:p,onChange:e=>n(e.target.value),value:t,placeholder:`Please select...`,onFocus:()=>u(!0),onBlur:()=>u(!1),onKeyDown:e=>{if(d.length)switch(e.code){case`ArrowUp`:e.preventDefault();let t=r===-1?d.length-1:r-1;i(t);break;case`ArrowDown`:e.preventDefault();let n=r>=d.length-1?-1:r+1;i(n);break;case`Enter`:e.preventDefault();case`Space`:if(r===-1)break;f(r);break;case`Escape`:e.preventDefault(),i(-1)}}}),o&&!!d.length&&(0,l.jsx)(m,{index:r,items:d,onSelect:f})]})}},g=[`Combobox`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as Combobox,g as __namedExportsOrder,u as default};