import{a as T,j as a}from"./useStatic-0a5cdcfd.js";import{r as i}from"./index-90fda323.js";import{R as m}from"./textarea-9843bea7.js";const A={component:m},k=20,b=400,E={height:k,width:b,whiteSpace:"pre",overflowWrap:"normal",overflowX:"auto",overflowY:"hidden",resize:"none"},u=" ",P=({items:t,onSelect:o})=>T("div",{style:{position:"absolute",top:k+4,left:0,width:b,fontSize:"12px",border:"solid 1px gray",borderRadius:"3px"},children:[a("div",{style:{borderBottom:"solid 1px gray"},children:"Current tags"}),a("ul",{style:{listStyleType:"none",margin:0,padding:0,cursor:"pointer",background:"white"},children:t.map(n=>a("li",{onMouseDown:()=>o(n),children:n},n))})]}),R=({children:t,selected:o})=>a("span",{style:{background:o?"lightgray":"whitesmoke",color:"dimgray",borderRadius:"4px",outline:"solid 1px dimgray"},children:t}),p={render:()=>{const[t,o]=i.useState(["Apple","Orange","Banana"]),[n,d]=i.useState(""),[r,x]=i.useState(null),[w,f]=i.useState(!1),h=t.join(u)+(t.length?u:""),c=h.length,g=r==null?-1:t.reduce((e,s,l)=>{if(e[0]!==-1)return e;const D=e[1];return e[1]+=s.length+u.length,D<=r&&r<e[1]&&(e[0]=l),e},[-1,0])[0];return T("div",{style:{position:"relative",padding:0},children:[a(m,{rows:1,style:E,onChange:e=>d(e.target.value.slice(c)),value:h+n,onFocus:()=>f(!0),onBlur:()=>f(!1),onKeyDown:e=>{if(r)switch(e.code){case"Enter":if(e.preventDefault(),!r||!n||t.includes(n))return;o(s=>[...s,n]),d("");break;case"Backspace":if(c<r)return;e.preventDefault(),o(s=>{const l=[...s];return l.splice(g===-1?s.length-1:g,1),l});break;case"Delete":if(c<r)return;e.preventDefault();break}},onSelectionChange:e=>{e.focused?x(e.selectionStart):x(null)},children:()=>[...t.flatMap((e,s)=>[a(R,{selected:s==g,children:e},e),u]),n||r===c&&a("span",{style:{color:"darkgray"},children:"Type anything and press Enter key..."},"__placeholder")]}),w&&!!t.length&&a(P,{items:t,onSelect:e=>{o(s=>s.filter(l=>l!==e))}})]})}};var y,v,S;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    }, ([-1, 0] as [number, number]))[0];
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
}`,...(S=(v=p.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const B=["Tagging"];export{p as Tagging,B as __namedExportsOrder,A as default};
//# sourceMappingURL=Tagging.stories-9adc9d51.js.map
