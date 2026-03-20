import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{a as n}from"./iframe-C2oZkUU1.js";import{t as r}from"./jsx-runtime-CR4qI0Ep.js";import{i,t as a}from"./src-B2UdUz5k.js";var o,s,c,l,u,d,f,p;e((()=>{o=t(n(),1),a(),s=r(),c={component:i},l={paddingLeft:10,paddingRight:10},u={render:()=>{let[e,t]=(0,o.useState)(`Lorem ipsum`);return(0,s.jsx)(i,{style:l,onChange:e=>t(e.target.value),value:e,children:e=>e.split(``).map((e,t)=>(0,s.jsx)(`span`,{style:{color:t%2==0?`red`:void 0},children:e},t))})}},d={render:()=>(0,s.jsx)(i,{style:l,defaultValue:`Lorem ipsum`,children:e=>e.split(``).map((e,t)=>(0,s.jsx)(`span`,{style:{color:t%2==0?`red`:void 0},children:e},t))})},f={render:()=>{let[e,t]=(0,o.useState)(`Lorem ipsum`);return(0,s.jsx)(i,{style:{width:`100%`},onChange:e=>t(e.target.value),value:e,children:e=>e.split(``).map((e,t)=>(0,s.jsx)(`span`,{style:{color:t%2==0?`red`:void 0},children:e},t))})},name:`Width 100%`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState("Lorem ipsum");
    return <RichInput style={style} onChange={e => setText(e.target.value)} value={text}>
        {v => {
        return v.split("").map((t, i) => <span key={i} style={{
          color: i % 2 === 0 ? "red" : undefined
        }}>
              {t}
            </span>);
      }}
      </RichInput>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <RichInput style={style} defaultValue={"Lorem ipsum"}>
        {v => {
        return v.split("").map((t, i) => <span key={i} style={{
          color: i % 2 === 0 ? "red" : undefined
        }}>
              {t}
            </span>);
      }}
      </RichInput>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState("Lorem ipsum");
    return <RichInput style={{
      width: "100%"
    }} onChange={e => setText(e.target.value)} value={text}>
        {v => {
        return v.split("").map((t, i) => <span key={i} style={{
          color: i % 2 === 0 ? "red" : undefined
        }}>
              {t}
            </span>);
      }}
      </RichInput>;
  },
  name: "Width 100%"
}`,...f.parameters?.docs?.source}}},p=[`Controlled`,`Uncontrolled`,`WidthMax`]}))();export{u as Controlled,d as Uncontrolled,f as WidthMax,p as __namedExportsOrder,c as default};