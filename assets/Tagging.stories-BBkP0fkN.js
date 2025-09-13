import{j as r}from"./jsx-runtime-Dp96wDEE.js";import{r as i}from"./iframe-e0PEXjEq.js";import{R as y}from"./textarea-B8ORlT-g.js";import"./preload-helper-D9Z9MdNV.js";import"./observer-C1Yv_ZWd.js";const C={component:y},v=20,S=400,k={height:v,width:S,whiteSpace:"pre",overflowWrap:"normal",overflowX:"auto",overflowY:"hidden",resize:"none"},u=" ",b=({items:t,onSelect:o})=>r.jsxs("div",{style:{position:"absolute",top:v+4,left:0,width:S,fontSize:"12px",border:"solid 1px gray",borderRadius:"3px"},children:[r.jsx("div",{style:{borderBottom:"solid 1px gray"},children:"Current tags"}),r.jsx("ul",{style:{listStyleType:"none",margin:0,padding:0,cursor:"pointer",background:"white"},children:t.map(n=>r.jsx("li",{onMouseDown:()=>o(n),children:n},n))})]}),w=({children:t,selected:o})=>r.jsx("span",{style:{background:o?"lightgray":"whitesmoke",color:"dimgray",borderRadius:"4px",outline:"solid 1px dimgray"},children:t}),p={render:()=>{const[t,o]=i.useState(["Apple","Orange","Banana"]),[n,d]=i.useState(""),[a,x]=i.useState(null),[T,f]=i.useState(!1),h=t.join(u)+(t.length?u:""),c=h.length,g=a==null?-1:t.reduce((e,s,l)=>{if(e[0]!==-1)return e;const m=e[1];return e[1]+=s.length+u.length,m<=a&&a<e[1]&&(e[0]=l),e},[-1,0])[0];return r.jsxs("div",{style:{position:"relative",padding:0},children:[r.jsx(y,{rows:1,style:k,onChange:e=>d(e.target.value.slice(c)),value:h+n,onFocus:()=>f(!0),onBlur:()=>f(!1),onKeyDown:e=>{if(a)switch(e.code){case"Enter":if(e.preventDefault(),!a||!n||t.includes(n))return;o(s=>[...s,n]),d("");break;case"Backspace":if(c<a)return;e.preventDefault(),o(s=>{const l=[...s];return l.splice(g===-1?s.length-1:g,1),l});break;case"Delete":if(c<a)return;e.preventDefault();break}},onSelectionChange:e=>{e.focused?x(e.selectionStart):x(null)},children:()=>[...t.flatMap((e,s)=>[r.jsx(w,{selected:s==g,children:e},e),u]),n||a===c&&r.jsx("span",{style:{color:"darkgray"},children:"Type anything and press Enter key..."},"__placeholder")]}),T&&!!t.length&&r.jsx(b,{items:t,onSelect:e=>{o(s=>s.filter(l=>l!==e))}})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const I=["Tagging"];export{p as Tagging,I as __namedExportsOrder,C as default};
