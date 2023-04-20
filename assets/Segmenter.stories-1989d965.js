import{a as r,j as n}from"./useStatic-0a5cdcfd.js";import{r as s}from"./index-90fda323.js";import{R as g}from"./textarea-9843bea7.js";const R={component:g},k={width:"300px",height:"200px"},t={render:()=>{const[p,m]=s.useState(`すもももももももものうち。

吾輩 （ わがはい ） は猫である。名前はまだ無い。`),[a,h]=s.useState("ja"),[o,v]=s.useState("word"),i=!!(Intl!=null&&Intl.Segmenter);return r("div",{children:[!i&&n("div",{children:"Intl.Segmenter is not supported in this browser."}),r("div",{children:[n("input",{value:a,onChange:e=>h(e.target.value)}),r("select",{value:o,onChange:e=>v(e.target.value),children:[n("option",{value:"grapheme",children:"grapheme"}),n("option",{value:"word",children:"word"}),n("option",{value:"sentence",children:"sentence"})]})]}),n(g,{style:k,onChange:e=>m(e.target.value),value:p,children:e=>{if(!i)return e;try{const S=new Intl.Segmenter(a,{granularity:o}).segment(e),l=[];for(const{segment:y,index:f,isWordLike:w}of S)l.push(n("span",{style:{background:w?"palegreen":void 0,outline:"solid 1px green"},children:y},f));return l}catch{return e}}})]})}};var c,u,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState("すもももももももものうち。\\n\\n吾輩 （ わがはい ） は猫である。名前はまだ無い。");
    const [locale, setLocale] = useState("ja");
    const [granularity, setGranularity] = useState<string>("word");
    const hasSegmenter = !!(Intl as any)?.Segmenter;
    return <div>
        {!hasSegmenter && <div>{"Intl.Segmenter is not supported in this browser."}</div>}
        <div>
          <input value={locale} onChange={e => setLocale(e.target.value)} />
          <select value={granularity} onChange={e => setGranularity(e.target.value)}>
            <option value={"grapheme"}>grapheme</option>
            <option value={"word"}>word</option>
            <option value={"sentence"}>sentence</option>
          </select>
        </div>
        <RichTextarea style={style} onChange={e => setText(e.target.value)} value={text}>
          {v => {
          if (!hasSegmenter) return v;
          try {
            const segmenter = new (Intl as any).Segmenter(locale, {
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
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const T=["Segmenter"];export{t as Segmenter,T as __namedExportsOrder,R as default};
//# sourceMappingURL=Segmenter.stories-1989d965.js.map
