import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-CStsT4ii.js";import{R as l}from"./textarea-h1w2im-A.js";import"./preload-helper-PPVm8Dsz.js";import"./observer-B5cSeiuM.js";const R={component:l},S={width:"300px",height:"200px"},t={render:()=>{const[c,u]=r.useState(`すもももももももものうち。

吾輩 （ わがはい ） は猫である。名前はまだ無い。`),[s,d]=r.useState("ja"),[a,g]=r.useState("word"),o=!!Intl?.Segmenter;return e.jsxs("div",{children:[!o&&e.jsx("div",{children:"Intl.Segmenter is not supported in this browser."}),e.jsxs("div",{children:[e.jsx("input",{value:s,onChange:n=>d(n.target.value)}),e.jsxs("select",{value:a,onChange:n=>g(n.target.value),children:[e.jsx("option",{value:"grapheme",children:"grapheme"}),e.jsx("option",{value:"word",children:"word"}),e.jsx("option",{value:"sentence",children:"sentence"})]})]}),e.jsx(l,{style:S,onChange:n=>u(n.target.value),value:c,children:n=>{if(!o)return n;try{const m=new Intl.Segmenter(s,{granularity:a}).segment(n),i=[];for(const{segment:h,index:x,isWordLike:v}of m)i.push(e.jsx("span",{style:{background:v?"palegreen":void 0,outline:"solid 1px green"},children:h},x));return i}catch{return n}}})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const C=["Segmenter"];export{t as Segmenter,C as __namedExportsOrder,R as default};
