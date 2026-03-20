import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{a as n}from"./iframe-C2oZkUU1.js";import{t as r}from"./react-dom-DpihZVm0.js";import{t as i}from"./jsx-runtime-CR4qI0Ep.js";import{a,t as o}from"./src-B2UdUz5k.js";var s,c,l,u,d,f,p,m;e((()=>{s=t(n(),1),c=t(r(),1),o(),l=i(),u={component:a},d={width:`400px`,height:`300px`},f=({top:e,left:t,onSelectBold:n,onSelectItalic:r,onSelectStrike:i})=>(0,l.jsxs)(`div`,{style:{position:`fixed`,top:e,left:t},children:[(0,l.jsx)(`button`,{onMouseDown:n,children:(0,l.jsx)(`b`,{children:`B`})}),(0,l.jsx)(`button`,{onMouseDown:r,children:(0,l.jsx)(`i`,{children:`I`})}),(0,l.jsx)(`button`,{onMouseDown:i,children:(0,l.jsx)(`s`,{children:`S`})})]}),p={render:()=>{let e=(0,s.useRef)(null),[t,n]=(0,s.useState)(`Select text and click any button.

`),[[r,i,o],u]=(0,s.useState)([]);return(0,l.jsxs)(`div`,{style:{position:`relative`,paddingTop:16},children:[(0,l.jsx)(a,{ref:e,value:t,style:d,onChange:e=>n(e.target.value),onSelectionChange:e=>{u([e.selectionStart,e.selectionEnd,e.focused?{top:e.top-e.height*1.5,left:e.left}:void 0])}}),o&&!(r==null||i==null||r===i)&&(0,c.createPortal)((0,l.jsx)(f,{top:o.top,left:o.left,onSelectBold:()=>{if(!e.current)return;let n=e.current.selectionStart,r=e.current.selectionEnd;e.current.setRangeText(`**${t.slice(n,r)}**`,n,r)},onSelectItalic:()=>{if(!e.current)return;let n=e.current.selectionStart,r=e.current.selectionEnd;e.current.setRangeText(`*${t.slice(n,r)}*`,n,r)},onSelectStrike:()=>{if(!e.current)return;let n=e.current.selectionStart,r=e.current.selectionEnd;e.current.setRangeText(`~~${t.slice(n,r)}~~`,n,r)}}),document.body)]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Toolbar`]}))();export{p as Toolbar,m as __namedExportsOrder,u as default};