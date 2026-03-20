import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{a as n}from"./iframe-C2oZkUU1.js";import{t as r}from"./jsx-runtime-CR4qI0Ep.js";import{a as i,t as a}from"./src-B2UdUz5k.js";var o,s,c,l,u,d;e((()=>{o=t(n(),1),a(),s=r(),c={component:i},l={width:`300px`,height:`200px`},u={render:()=>{let[e,t]=(0,o.useState)(`すもももももももものうち。

吾輩 （ わがはい ） は猫である。名前はまだ無い。`),[n,r]=(0,o.useState)(`ja`),[a,c]=(0,o.useState)(`word`),u=!!Intl?.Segmenter;return(0,s.jsxs)(`div`,{children:[!u&&(0,s.jsx)(`div`,{children:`Intl.Segmenter is not supported in this browser.`}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`input`,{value:n,onChange:e=>r(e.target.value)}),(0,s.jsxs)(`select`,{value:a,onChange:e=>c(e.target.value),children:[(0,s.jsx)(`option`,{value:`grapheme`,children:`grapheme`}),(0,s.jsx)(`option`,{value:`word`,children:`word`}),(0,s.jsx)(`option`,{value:`sentence`,children:`sentence`})]})]}),(0,s.jsx)(i,{style:l,onChange:e=>t(e.target.value),value:e,children:e=>{if(!u)return e;try{let t=new Intl.Segmenter(n,{granularity:a}).segment(e),r=[];for(let{segment:e,index:n,isWordLike:i}of t)r.push((0,s.jsx)(`span`,{style:{background:i?`palegreen`:void 0,outline:`solid 1px green`},children:e},n));return r}catch{return e}}})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Segmenter`]}))();export{u as Segmenter,d as __namedExportsOrder,c as default};