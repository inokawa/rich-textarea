import{j as s}from"./jsx-runtime-LTdcGt0a.js";import{r as x}from"./iframe-Cl4hEd6m.js";import{R as c}from"./textarea-njaAF5CD.js";import{c as h}from"./index-D3P2RQUb.js";import"./observer-DAOSdsVF.js";const v={component:c},l={width:"400px",height:"300px"},p=h([[/https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g,({children:t,key:r,value:a})=>s.jsx("a",{href:a,target:"_blank",children:t},r)]]),e={render:()=>{const[t,r]=x.useState(`Click this url https://github.com/inokawa/rich-textarea !

`);return s.jsx("div",{children:s.jsx(c,{style:l,onChange:a=>r(a.target.value),value:t,children:p})})}};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState(\`Click this url https://github.com/inokawa/rich-textarea !\\n\\n\`);
    return <div>
        <RichTextarea style={style} onChange={e => setText(e.target.value)} value={text}>
          {regexRenderer}
        </RichTextarea>
      </div>;
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const f=["Url"];export{e as Url,f as __namedExportsOrder,v as default};
