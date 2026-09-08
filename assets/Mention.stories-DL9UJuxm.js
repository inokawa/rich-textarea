import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{f as n}from"./iframe-DzT9rkd3.js";import{t as r}from"./react-dom-Bg1MmIS0.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{n as a,t as o}from"./textarea-Dl0AkFiW.js";import{n as s,r as c}from"./regex-DJKTU-W_.js";import{r as l,t as u}from"./mocks-DRfMhr1A.js";var d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{d=t(n()),f=r(),a(),c(),l(),p=i(),m={component:o},h={width:`400px`,height:`300px`},g=8,_=/\B@([\-+\w]*)$/,v=RegExp(`(${u.map(e=>`@${e}`).join(`|`)})`,`g`),y=s([[v,{background:`#EAF5F9`,color:`#4276AA`,borderRadius:`3px`}]]),b=({chars:e,index:t,top:n,left:r,complete:i})=>(0,p.jsx)(`div`,{style:{position:`fixed`,top:n,left:r,fontSize:`12px`,border:`solid 1px gray`,borderRadius:`3px`,background:`white`,cursor:`pointer`},children:e.map((e,n)=>(0,p.jsx)(`div`,{style:{padding:`4px`,...t===n&&{color:`white`,background:`#2A6AD3`}},onMouseDown:e=>{e.preventDefault(),i(n)},children:e},e))}),x={render:()=>{let e=(0,d.useRef)(null),[t,n]=(0,d.useState)(`Hi, @Captain Gregor and @Jaxxon . Please enter @ to show suggestions.

`),[r,i]=(0,d.useState)(null),[a,s]=(0,d.useState)(0),c=r?t.slice(0,r.caret):t,l=(r&&c.match(_))?.[1]??``,m=(0,d.useMemo)(()=>u.filter(e=>e.toLowerCase().startsWith(l.toLowerCase())).slice(0,g),[l]),v=t=>{if(!e.current||!r)return;let n=m[t];e.current.setRangeText(`@${n} `,r.caret-l.length-1,r.caret,`end`),i(null),s(0)};return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(o,{ref:e,style:h,onChange:e=>n(e.target.value),value:t,onKeyDown:e=>{if(r&&m.length)switch(e.code){case`ArrowUp`:e.preventDefault();let t=a<=0?m.length-1:a-1;s(t);break;case`ArrowDown`:e.preventDefault();let n=a>=m.length-1?0:a+1;s(n);break;case`Enter`:e.preventDefault(),v(a);break;case`Escape`:e.preventDefault(),i(null),s(0)}},onSelectionChange:e=>{e.focused&&_.test(t.slice(0,e.selectionStart))?(i({top:e.top+e.height,left:e.left,caret:e.selectionStart}),s(0)):(i(null),s(0))},children:y}),r&&(0,f.createPortal)((0,p.jsx)(b,{top:r.top,left:r.left,chars:m,index:a,complete:v}),document.body)]})}},S=[`Mention`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as Mention,S as __namedExportsOrder,m as default};