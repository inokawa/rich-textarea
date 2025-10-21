import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-CStsT4ii.js";import{r as x}from"./index-DNaMWeV4.js";import{R as d}from"./textarea-h1w2im-A.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CyyTsE6b.js";import"./observer-B5cSeiuM.js";const v={component:d},S={width:"400px",height:"300px"},h=({top:t,left:o,onSelectBold:i,onSelectItalic:s,onSelectStrike:c})=>n.jsxs("div",{style:{position:"fixed",top:t,left:o},children:[n.jsx("button",{onMouseDown:i,children:n.jsx("b",{children:"B"})}),n.jsx("button",{onMouseDown:s,children:n.jsx("i",{children:"I"})}),n.jsx("button",{onMouseDown:c,children:n.jsx("s",{children:"S"})})]}),l={render:()=>{const t=u.useRef(null),[o,i]=u.useState(`Select text and click any button.

`),[[s,c,a],f]=u.useState([]),p=s==null||c==null||s===c;return n.jsxs("div",{style:{position:"relative",paddingTop:16},children:[n.jsx(d,{ref:t,value:o,style:S,onChange:e=>i(e.target.value),onSelectionChange:e=>{f([e.selectionStart,e.selectionEnd,e.focused?{top:e.top-e.height*1.5,left:e.left}:void 0])}}),a&&!p&&x.createPortal(n.jsx(h,{top:a.top,left:a.left,onSelectBold:()=>{if(!t.current)return;const e=t.current.selectionStart,r=t.current.selectionEnd;t.current.setRangeText(`**${o.slice(e,r)}**`,e,r)},onSelectItalic:()=>{if(!t.current)return;const e=t.current.selectionStart,r=t.current.selectionEnd;t.current.setRangeText(`*${o.slice(e,r)}*`,e,r)},onSelectStrike:()=>{if(!t.current)return;const e=t.current.selectionStart,r=t.current.selectionEnd;t.current.setRangeText(`~~${o.slice(e,r)}~~`,e,r)}}),document.body)]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<RichTextareaHandle>(null);
    const [text, setText] = useState(\`Select text and click any button.\\n\\n\`);
    const [[selectionStart, selectionEnd, pos], setSelection] = useState<[number, number, {
      top: number;
      left: number;
    } | undefined] | []>([]);
    const hideMenu = selectionStart == null || selectionEnd == null || selectionStart === selectionEnd;
    return <div style={{
      position: "relative",
      paddingTop: 16
    }}>
        <RichTextarea ref={ref} value={text} style={style} onChange={e => setText(e.target.value)} onSelectionChange={p => {
        setSelection([p.selectionStart, p.selectionEnd, p.focused ? {
          top: p.top - p.height * 1.5 /* FIXME */,
          left: p.left
        } : undefined]);
      }} />
        {pos && !hideMenu && createPortal(<Menu top={pos.top} left={pos.left} onSelectBold={() => {
        if (!ref.current) return;
        const start = ref.current.selectionStart;
        const end = ref.current.selectionEnd;
        ref.current.setRangeText(\`**\${text.slice(start, end)}**\`, start, end);
      }} onSelectItalic={() => {
        if (!ref.current) return;
        const start = ref.current.selectionStart;
        const end = ref.current.selectionEnd;
        ref.current.setRangeText(\`*\${text.slice(start, end)}*\`, start, end);
      }} onSelectStrike={() => {
        if (!ref.current) return;
        const start = ref.current.selectionStart;
        const end = ref.current.selectionEnd;
        ref.current.setRangeText(\`~~\${text.slice(start, end)}~~\`, start, end);
      }} />, document.body)}
      </div>;
  }
}`,...l.parameters?.docs?.source}}};const y=["Toolbar"];export{l as Toolbar,y as __namedExportsOrder,v as default};
