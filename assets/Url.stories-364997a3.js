import{j as s}from"./useStatic-0a5cdcfd.js";import{r as h}from"./index-90fda323.js";import{R as i}from"./textarea-9843bea7.js";import{c as x}from"./renderers-f8ca5064.js";const R={component:i},l={width:"400px",height:"300px"},d=x([[/https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g,({children:t,key:r,value:a})=>s("a",{href:a,target:"_blank",children:t},r)]]),e={render:()=>{const[t,r]=h.useState(`Click this url https://github.com/inokawa/rich-textarea !

`);return s("div",{children:s(i,{style:l,onChange:a=>r(a.target.value),value:t,children:d})})}};var n,o,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState(\`Click this url https://github.com/inokawa/rich-textarea !\\n\\n\`);
    return <div>
        <RichTextarea style={style} onChange={e => setText(e.target.value)} value={text}>
          {regexRenderer}
        </RichTextarea>
      </div>;
  }
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const v=["Url"];export{e as Url,v as __namedExportsOrder,R as default};
//# sourceMappingURL=Url.stories-364997a3.js.map
