import{j as s}from"./observer-Djkfms2H.js";import{r as x}from"./index-RYns6xqu.js";import{R as i}from"./textarea-zpBFEpjA.js";import{c as h}from"./index-xkcP6x86.js";const R={component:i},l={width:"400px",height:"300px"},p=h([[/https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g,({children:t,key:r,value:a})=>s.jsx("a",{href:a,target:"_blank",children:t},r)]]),e={render:()=>{const[t,r]=x.useState(`Click this url https://github.com/inokawa/rich-textarea !

`);return s.jsx("div",{children:s.jsx(i,{style:l,onChange:a=>r(a.target.value),value:t,children:p})})}};var n,o,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState(\`Click this url https://github.com/inokawa/rich-textarea !\\n\\n\`);
    return <div>
        <RichTextarea style={style} onChange={e => setText(e.target.value)} value={text}>
          {regexRenderer}
        </RichTextarea>
      </div>;
  }
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const v=["Url"];export{e as Url,v as __namedExportsOrder,R as default};
