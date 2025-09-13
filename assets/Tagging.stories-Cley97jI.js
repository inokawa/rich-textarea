import{j as r}from"./observer-ChNWUPNK.js";import{a as i}from"./index-CeHYjMkx.js";import{R as T}from"./textarea-D05uwaBC.js";const I={component:T},m=20,k=400,j={height:m,width:k,whiteSpace:"pre",overflowWrap:"normal",overflowX:"auto",overflowY:"hidden",resize:"none"},u=" ",E=({items:t,onSelect:o})=>r.jsxs("div",{style:{position:"absolute",top:m+4,left:0,width:k,fontSize:"12px",border:"solid 1px gray",borderRadius:"3px"},children:[r.jsx("div",{style:{borderBottom:"solid 1px gray"},children:"Current tags"}),r.jsx("ul",{style:{listStyleType:"none",margin:0,padding:0,cursor:"pointer",background:"white"},children:t.map(n=>r.jsx("li",{onMouseDown:()=>o(n),children:n},n))})]}),D=({children:t,selected:o})=>r.jsx("span",{style:{background:o?"lightgray":"whitesmoke",color:"dimgray",borderRadius:"4px",outline:"solid 1px dimgray"},children:t}),p={render:()=>{const[t,o]=i.useState(["Apple","Orange","Banana"]),[n,d]=i.useState(""),[a,x]=i.useState(null),[b,f]=i.useState(!1),h=t.join(u)+(t.length?u:""),c=h.length,g=a==null?-1:t.reduce((e,s,l)=>{if(e[0]!==-1)return e;const w=e[1];return e[1]+=s.length+u.length,w<=a&&a<e[1]&&(e[0]=l),e},[-1,0])[0];return r.jsxs("div",{style:{position:"relative",padding:0},children:[r.jsx(T,{rows:1,style:j,onChange:e=>d(e.target.value.slice(c)),value:h+n,onFocus:()=>f(!0),onBlur:()=>f(!1),onKeyDown:e=>{if(a)switch(e.code){case"Enter":if(e.preventDefault(),!a||!n||t.includes(n))return;o(s=>[...s,n]),d("");break;case"Backspace":if(c<a)return;e.preventDefault(),o(s=>{const l=[...s];return l.splice(g===-1?s.length-1:g,1),l});break;case"Delete":if(c<a)return;e.preventDefault();break}},onSelectionChange:e=>{e.focused?x(e.selectionStart):x(null)},children:()=>[...t.flatMap((e,s)=>[r.jsx(D,{selected:s==g,children:e},e),u]),n||a===c&&r.jsx("span",{style:{color:"darkgray"},children:"Type anything and press Enter key..."},"__placeholder")]}),b&&!!t.length&&r.jsx(E,{items:t,onSelect:e=>{o(s=>s.filter(l=>l!==e))}})]})}};var y,v,S;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(v=p.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const _=["Tagging"];export{p as Tagging,_ as __namedExportsOrder,I as default};
