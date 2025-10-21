import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-CStsT4ii.js";import{R as n}from"./textarea-h1w2im-A.js";import{c as i}from"./index-CtQaIodW.js";import"./preload-helper-PPVm8Dsz.js";import"./observer-B5cSeiuM.js";const g={component:n},c={width:"400px",height:"300px"},x=i([[/https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g,({children:t,key:r,value:a})=>s.jsx("a",{href:a,target:"_blank",children:t},r)]]),e={render:()=>{const[t,r]=o.useState(`Click this url https://github.com/inokawa/rich-textarea !

`);return s.jsx("div",{children:s.jsx(n,{style:c,onChange:a=>r(a.target.value),value:t,children:x})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState(\`Click this url https://github.com/inokawa/rich-textarea !\\n\\n\`);
    return <div>
        <RichTextarea style={style} onChange={e => setText(e.target.value)} value={text}>
          {regexRenderer}
        </RichTextarea>
      </div>;
  }
}`,...e.parameters?.docs?.source}}};const R=["Url"];export{e as Url,R as __namedExportsOrder,g as default};
