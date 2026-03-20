import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{a as n}from"./iframe-CYC-gpG_.js";import{t as r}from"./jsx-runtime-CR4qI0Ep.js";import{a as i,t as a}from"./src-BWBm5TpF.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{o=t(n()),a(),s=r(),c={component:i},l=20,u=400,d={height:l,width:u,whiteSpace:`pre`,overflowWrap:`normal`,overflowX:`auto`,overflowY:`hidden`,resize:`none`},f=` `,p=({items:e,onSelect:t})=>(0,s.jsxs)(`div`,{style:{position:`absolute`,top:l+4,left:0,width:u,fontSize:`12px`,border:`solid 1px gray`,borderRadius:`3px`},children:[(0,s.jsx)(`div`,{style:{borderBottom:`solid 1px gray`},children:`Current tags`}),(0,s.jsx)(`ul`,{style:{listStyleType:`none`,margin:0,padding:0,cursor:`pointer`,background:`white`},children:e.map(e=>(0,s.jsx)(`li`,{onMouseDown:()=>t(e),children:e},e))})]}),m=({children:e,selected:t})=>(0,s.jsx)(`span`,{style:{background:t?`lightgray`:`whitesmoke`,color:`dimgray`,borderRadius:`4px`,outline:`solid 1px dimgray`},children:e}),h={render:()=>{let[e,t]=(0,o.useState)([`Apple`,`Orange`,`Banana`]),[n,r]=(0,o.useState)(``),[a,c]=(0,o.useState)(null),[l,u]=(0,o.useState)(!1),h=e.join(f)+(e.length?f:``),g=h.length,_=a==null?-1:e.reduce((e,t,n)=>{if(e[0]!==-1)return e;let r=e[1];return e[1]+=t.length+1,r<=a&&a<e[1]&&(e[0]=n),e},[-1,0])[0];return(0,s.jsxs)(`div`,{style:{position:`relative`,padding:0},children:[(0,s.jsx)(i,{rows:1,style:d,onChange:e=>r(e.target.value.slice(g)),value:h+n,onFocus:()=>u(!0),onBlur:()=>u(!1),onKeyDown:i=>{if(a)switch(i.code){case`Enter`:if(i.preventDefault(),!a||!n||e.includes(n))return;t(e=>[...e,n]),r(``);break;case`Backspace`:if(g<a)return;i.preventDefault(),t(e=>{let t=[...e];return t.splice(_===-1?e.length-1:_,1),t});break;case`Delete`:if(g<a)return;i.preventDefault();break;default:break}},onSelectionChange:e=>{e.focused?c(e.selectionStart):c(null)},children:()=>[...e.flatMap((e,t)=>[(0,s.jsx)(m,{selected:t==_,children:e},e),f]),n||a===g&&(0,s.jsx)(`span`,{style:{color:`darkgray`},children:`Type anything and press Enter key...`},`__placeholder`)]}),l&&!!e.length&&(0,s.jsx)(p,{items:e,onSelect:e=>{t(t=>t.filter(t=>t!==e))}})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(["Apple", "Orange", "Banana"]);
    const [text, setText] = useState("");
    const [pos, setPos] = useState<number | null>(null);
    const [focused, setFocused] = useState(false);
    const tagsText = tags.join(SPACER) + (tags.length ? SPACER : "");
    const textStart = tagsText.length;
    const tagIndex = pos == null ? -1 : tags.reduce((acc, t, i) => {
      if (acc[0] !== -1) return acc;
      const prev = acc[1];
      acc[1] += t.length + SPACER.length;
      if (prev <= pos && pos < acc[1]) {
        acc[0] = i;
      }
      return acc;
    }, [-1, 0] as [number, number])[0];
    return <div style={{
      position: "relative",
      padding: 0
    }}>
        <RichTextarea rows={1} style={style} onChange={e => setText(e.target.value.slice(textStart))} value={tagsText + text} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onKeyDown={e => {
        if (!pos) return;
        switch (e.code) {
          case "Enter":
            e.preventDefault();
            if (!pos) return;
            if (!text || tags.includes(text)) return;
            setTags(prev => [...prev, text]);
            setText("");
            break;
          case "Backspace":
            if (textStart < pos) return;
            e.preventDefault();
            setTags(prev => {
              const next = [...prev];
              next.splice(tagIndex === -1 ? prev.length - 1 : tagIndex, 1);
              return next;
            });
            break;
          case "Delete":
            if (textStart < pos) return;
            e.preventDefault();
            break;
          default:
            break;
        }
      }} onSelectionChange={r => {
        if (r.focused) {
          setPos(r.selectionStart);
        } else {
          setPos(null);
        }
      }}>
          {() => {
          return [...tags.flatMap((t, i) => [<Tag key={t} selected={i == tagIndex}>
                  {t}
                </Tag>, SPACER]), text ? text : pos === textStart && <span key={"__placeholder"} style={{
            color: "darkgray"
          }}>
                      Type anything and press Enter key...
                    </span>];
        }}
        </RichTextarea>
        {focused && !!tags.length && <Menu items={tags} onSelect={text => {
        setTags(prev => prev.filter(p => p !== text));
      }} />}
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Tagging`]}))();export{h as Tagging,g as __namedExportsOrder,c as default};