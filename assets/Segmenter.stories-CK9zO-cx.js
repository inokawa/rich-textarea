import{j as e}from"./jsx-runtime-LTdcGt0a.js";import{r}from"./iframe-Cl4hEd6m.js";import{R as d}from"./textarea-njaAF5CD.js";import"./observer-DAOSdsVF.js";const G={component:d},w={width:"300px",height:"200px"},t={render:()=>{const[g,p]=r.useState(`すもももももももものうち。

吾輩 （ わがはい ） は猫である。名前はまだ無い。`),[s,m]=r.useState("ja"),[a,h]=r.useState("word"),o=!!(Intl!=null&&Intl.Segmenter);return e.jsxs("div",{children:[!o&&e.jsx("div",{children:"Intl.Segmenter is not supported in this browser."}),e.jsxs("div",{children:[e.jsx("input",{value:s,onChange:n=>m(n.target.value)}),e.jsxs("select",{value:a,onChange:n=>h(n.target.value),children:[e.jsx("option",{value:"grapheme",children:"grapheme"}),e.jsx("option",{value:"word",children:"word"}),e.jsx("option",{value:"sentence",children:"sentence"})]})]}),e.jsx(d,{style:w,onChange:n=>p(n.target.value),value:g,children:n=>{if(!o)return n;try{const v=new Intl.Segmenter(s,{granularity:a}).segment(n),i=[];for(const{segment:S,index:y,isWordLike:j}of v)i.push(e.jsx("span",{style:{background:j?"palegreen":void 0,outline:"solid 1px green"},children:S},y));return i}catch{return n}}})]})}};var l,c,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    type Granularity = "grapheme" | "word" | "sentence";
    const [text, setText] = useState("すもももももももものうち。\\n\\n吾輩 （ わがはい ） は猫である。名前はまだ無い。");
    const [locale, setLocale] = useState("ja");
    const [granularity, setGranularity] = useState<Granularity>("word");
    const hasSegmenter = !!Intl?.Segmenter;
    return <div>
        {!hasSegmenter && <div>{"Intl.Segmenter is not supported in this browser."}</div>}
        <div>
          <input value={locale} onChange={e => setLocale(e.target.value)} />
          <select value={granularity} onChange={e => setGranularity(e.target.value as Granularity)}>
            <option value={"grapheme"}>grapheme</option>
            <option value={"word"}>word</option>
            <option value={"sentence"}>sentence</option>
          </select>
        </div>
        <RichTextarea style={style} onChange={e => setText(e.target.value)} value={text}>
          {v => {
          if (!hasSegmenter) return v;
          try {
            const segmenter = new Intl.Segmenter(locale, {
              granularity
            });
            const tokens = segmenter.segment(v);
            const nodes: React.ReactElement[] = [];
            for (const {
              segment,
              index,
              isWordLike
            } of tokens) {
              nodes.push(<span key={index} style={{
                background: isWordLike ? "palegreen" : undefined,
                outline: "solid 1px green"
              }}>
                    {segment}
                  </span>);
            }
            return nodes;
          } catch (e) {
            return v;
          }
        }}
        </RichTextarea>
      </div>;
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const I=["Segmenter"];export{t as Segmenter,I as __namedExportsOrder,G as default};
