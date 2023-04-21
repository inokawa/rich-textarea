import{a as S,j as r}from"./useStatic-0a5cdcfd.js";import{r as u}from"./index-90fda323.js";import{r as g}from"./index-a96038f4.js";import{R as x}from"./textarea-9843bea7.js";const M={component:x},T={width:"400px",height:"300px"},E=({top:t,left:o,onSelectBold:i,onSelectItalic:s,onSelectStrike:c})=>S("div",{style:{position:"fixed",top:t,left:o},children:[r("button",{onMouseDown:i,children:r("b",{children:"B"})}),r("button",{onMouseDown:s,children:r("i",{children:"I"})}),r("button",{onMouseDown:c,children:r("s",{children:"S"})})]}),l={render:()=>{const t=u.useRef(null),[o,i]=u.useState(`Select text and click any button.

`),[[s,c,a],h]=u.useState([]),m=s==null||c==null||s===c;return S("div",{style:{position:"relative",paddingTop:16},children:[r(x,{ref:t,value:o,style:T,onChange:e=>i(e.target.value),onSelectionChange:e=>{h([e.selectionStart,e.selectionEnd,e.focused?{top:e.top-e.height*1.5,left:e.left}:void 0])}}),a&&!m&&g.createPortal(r(E,{top:a.top,left:a.left,onSelectBold:()=>{if(!t.current)return;const e=t.current.selectionStart,n=t.current.selectionEnd;t.current.setRangeText(`**${o.slice(e,n)}**`,e,n)},onSelectItalic:()=>{if(!t.current)return;const e=t.current.selectionStart,n=t.current.selectionEnd;t.current.setRangeText(`*${o.slice(e,n)}*`,e,n)},onSelectStrike:()=>{if(!t.current)return;const e=t.current.selectionStart,n=t.current.selectionEnd;t.current.setRangeText(`~~${o.slice(e,n)}~~`,e,n)}}),document.body)]})}};var d,f,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(f=l.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};const $=["Toolbar"];export{l as Toolbar,$ as __namedExportsOrder,M as default};
//# sourceMappingURL=Toolbar.stories-097e05e9.js.map
