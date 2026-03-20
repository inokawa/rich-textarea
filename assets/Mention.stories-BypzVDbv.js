import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{a as n}from"./iframe-C2oZkUU1.js";import{t as r}from"./react-dom-DpihZVm0.js";import{t as i}from"./jsx-runtime-CR4qI0Ep.js";import{a,r as o,t as s}from"./src-B2UdUz5k.js";import{r as c,t as l}from"./mocks-1NYkpA0F.js";var u,d,f,p,m,h,g,_,v,y,b;e((()=>{u=t(n(),1),d=t(r(),1),s(),c(),f=i(),p={component:a},m={width:`400px`,height:`300px`},h=8,g=/\B@([\-+\w]*)$/,_=o([[RegExp(`(${l.map(e=>`@${e}`).join(`|`)})`,`g`),{background:`#EAF5F9`,color:`#4276AA`,borderRadius:`3px`}]]),v=({chars:e,index:t,top:n,left:r,complete:i})=>(0,f.jsx)(`div`,{style:{position:`fixed`,top:n,left:r,fontSize:`12px`,border:`solid 1px gray`,borderRadius:`3px`,background:`white`,cursor:`pointer`},children:e.map((e,n)=>(0,f.jsx)(`div`,{style:{padding:`4px`,...t===n&&{color:`white`,background:`#2A6AD3`}},onMouseDown:e=>{e.preventDefault(),i(n)},children:e},e))}),y={render:()=>{let e=(0,u.useRef)(null),[t,n]=(0,u.useState)(`Hi, @Captain Gregor and @Jaxxon . Please enter @ to show suggestions.

`),[r,i]=(0,u.useState)(null),[o,s]=(0,u.useState)(0),c=r?t.slice(0,r.caret):t,p=(r&&c.match(g))?.[1]??``,y=(0,u.useMemo)(()=>l.filter(e=>e.toLowerCase().startsWith(p.toLowerCase())).slice(0,h),[p]),b=t=>{if(!e.current||!r)return;let n=y[t];e.current.setRangeText(`@${n} `,r.caret-p.length-1,r.caret,`end`),i(null),s(0)};return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(a,{ref:e,style:m,onChange:e=>n(e.target.value),value:t,onKeyDown:e=>{if(!(!r||!y.length))switch(e.code){case`ArrowUp`:e.preventDefault(),s(o<=0?y.length-1:o-1);break;case`ArrowDown`:e.preventDefault(),s(o>=y.length-1?0:o+1);break;case`Enter`:e.preventDefault(),b(o);break;case`Escape`:e.preventDefault(),i(null),s(0);break;default:break}},onSelectionChange:e=>{e.focused&&g.test(t.slice(0,e.selectionStart))?(i({top:e.top+e.height,left:e.left,caret:e.selectionStart}),s(0)):(i(null),s(0))},children:_}),r&&(0,d.createPortal)((0,f.jsx)(v,{top:r.top,left:r.left,chars:y,index:o,complete:b}),document.body)]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Mention`]}))();export{y as Mention,b as __namedExportsOrder,p as default};