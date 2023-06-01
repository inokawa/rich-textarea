import { StoryObj } from "@storybook/react";
import React, { useCallback, useState } from "react";
import { createRegexRenderer, RichTextarea } from "../../src";
import { LOREM } from "../mocks";

export default {
  component: RichTextarea,
};

const style = { width: "600px", height: "400px" };

export const HelloWorld: StoryObj = {
  render: () => {
    const [text, setText] = useState("Lorem ipsum");
    return (
      <RichTextarea
        style={style}
        onChange={(e) => setText(e.target.value)}
        value={text}
      >
        {(v) => {
          return v.split("").map((t, i) => (
            <span key={i} style={{ color: i % 2 === 0 ? "red" : undefined }}>
              {t}
            </span>
          ));
        }}
      </RichTextarea>
    );
  },
};

const basicRegex = createRegexRenderer([
  [
    /[A-Z][A-Z]+/g,
    { borderRadius: "3px", backgroundColor: "blue", color: "white" },
  ],
  [/[A-Z][A-x]+/g, { color: "blue" }],
  [/[!?]+/g, { textDecoration: "underline wavy", color: "red" }],
  [/(but|and|so|also)+/g, { textDecoration: "line-through", color: "green" }],
  [/[0123456789]+/g, { color: "violet", fontWeight: "bold" }],
]);

export const Style: StoryObj = {
  render: () => {
    const [text, setText] = useState(
      `This is just a TEXTAREA but bit rich!!!
12345`
    );
    return (
      <RichTextarea
        style={style}
        onChange={useCallback((e) => setText(e.target.value), [])}
        value={text}
      >
        {basicRegex}
      </RichTextarea>
    );
  },
};

export const OneLineAutoHeight: StoryObj = {
  render: () => {
    const [text, setText] = useState("Lorem ipsum");
    return (
      <RichTextarea
        style={{ width: 600 }}
        onChange={(e) => setText(e.target.value)}
        value={text}
        rows={1}
        autoHeight
      />
    );
  },
};

export const Rtl: StoryObj = {
  render: () => {
    const [text, setText] = useState(`אחד !
two !
שְׁלוֹשָׁה !`);
    return (
      <RichTextarea
        style={{ width: "600px", height: "400px", direction: "rtl" }}
        onChange={(e) => setText(e.target.value)}
        value={text}
      >
        {(v) => {
          return v.split("").map((t, i) => {
            const El = i % 2 !== 0 ? "i" : "span";
            return <El key={i}>{t}</El>;
          });
        }}
      </RichTextarea>
    );
  },
};

export const WidthMax: StoryObj = {
  render: () => {
    const [text, setText] = useState("Lorem ipsum");
    return (
      <RichTextarea
        style={{ border: "solid 2px grey", padding: "0.5rem", width: "100%" }}
        onChange={(e) => setText(e.target.value)}
        value={text}
      >
        {(v) => {
          return v.split("").map((t, i) => (
            <span key={i} style={{ color: i % 2 === 0 ? "red" : undefined }}>
              {t}
            </span>
          ));
        }}
      </RichTextarea>
    );
  },
  name: "Width 100%",
};

export const BorderBox: StoryObj = {
  render: () => {
    const [text, setText] = useState("Lorem ipsum");
    return (
      <>
        <RichTextarea
          style={{
            border: "solid 2px grey",
            padding: "0.5rem",
            width: 300,
            height: 200,
          }}
          onChange={(e) => setText(e.target.value)}
          value={text}
        >
          {(v) => {
            return v.split("").map((t, i) => (
              <span key={i} style={{ color: i % 2 === 0 ? "red" : undefined }}>
                {t}
              </span>
            ));
          }}
        </RichTextarea>
        <style>{`*, *:before, *:after { box-sizing: border-box }`}</style>
      </>
    );
  },
};

const emojiRegex = createRegexRenderer([
  [
    /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/gu,
    { outline: "solid 1px gray" },
  ],
]);

export const Emoji: StoryObj = {
  render: () => {
    const [text, setText] = useState(
      `📫🔒🍳📶 💨🌠🐩🐅📀🍆 🎭🕖👆📱 🏮🌁🌍🏂📰🔓 🎻💟🐻👫🍇🌆🔻 🎬🍻🍋🎡💬🌓🐁 🐻🏭🐟👵🎋🐧 👵🎋🐲🍌 🍨🍪🕐🐳 💋💱🔹📁 📴💬📔🐁🌿 🕐🕝🎂🐳💌👃 🎹🌀💣👓👨💳 🎭🕧👖🌰🌽 🐮👾🌻👫🐉. 🍼🎓🐖🌿🍄 🍻🎂🔨👯💋📄🕦 🏆👟💜🎺📡📅🌙 🔠🍧💯🍓📪 🏪🌞🔼👅 🔼💭💐💲🕤📟 🐭📁🎼🔢📃🍅 🕐🎿🍬🐥🐐🎾📒 💛📶🐘🔺 💦👀🐔💔 🍨📤🐥🐃📊🏯🏃 🐕🐋👳🎈👎. 🐛🏂💔🐅🐃🍮🐀 🔷📫🌁👘🐁 👕📖🐂🍪📞 📦🌶🍌💑📗 🌈📜🎽🐈📀 🎃🕣🍯🌝👶 🍌💻💉💠💼 🎁👪🎠🎽🗾 🐡💏💢🌛👻💗💴. 🐺🐗🎅👮💓🎾 👄👦🔰💸 💏🐗🔭📼 🐢👧🍯🍷👋 🎡👖🌍🔽🕗 📰🌺🐦🐾 💋🕃🎭💩 🎣🍱🔔🔳. 📕🕘🔨🐸💖 🕠🌗📋💦 🔛🐄🐶🐽🍶🎇 🍁🏢🏪🐎🐕 🎰📞🐣🍇📂 🏈🏊💃💫🐥🌸 📪🍧💖🎳🍀 🔣🔝🔴🌅🔜👩 🍠🔯💎🏧 🐍💀🔠🐖📷🔖 🌗🕂🐙🎢👀🐯🍆 🏣👾🐚🔕📮💛👄 🍇🌰🎵👑🎬🌁 🔚🏁🎁🐝🍪🍛 🎾👓🐄🎿🕠🔙 🌹👀💧🔛👞.

    🍷🕖🔷📙 🏢🎬🐂💤🐙🍠📐🔉 💑💑👰👔🔢🐾 💽🎽💛📡📭 🎧📘🔏🍁 👤🎲💛🍔🐚🏤🔥 🐕👋👘🌅🐐👴 🕘📭🏈🍁🔉💿 👰📈🔴🌸👨📻 👤🐡🐅👃🏁🎃 🐢🎻🕢🔢🌊🍤🍱 🐞👬💔💸🏀 🗻👿👠🐆💐💞 🔧🎑📂🐪👮🌚 👘📆🌷🐘. 🍜🐊🍇🔏🏥🕝🔫 💩🌓🌔💥 📨🐝🔭🗾🍙 🍞🎶🔘📌🕗📣🌈🍝 📏🎌📧💂🐶 🔯🎀💌🔫👠💺 👯🐭📵🍁 🐫👳🍜🌎 🍛🎱🍓🌎🍦🐔🎨 🔧🍤🎽🌒🍵 🔯🎓💂📩💄👯💏 🍔🍉🍍👋🍼🍏 🍸🍝🎳🍗💖🌁 🎫👿📲🔛📫 👖🌐🍱🌘🔻📘🏈 🔃📶🐢🏮. 🍌📁💈🔣🐑👩 💋👬👖🎋 💽🐈🍮🍰👚 🔓🔗🍋🐡👤🏨🔃🍫 🔔🎺🍍💡 👦🎦🔊🍛 🌃🔭🕧📖👋💦🎤 🕃🗼🌹📔🏩📲 🍋💿📰🌻 📉🔵🐅🍠. 🌳🐲🏡💽 🌎💟🎅🔃🎬🔹 🌆👞🌖📇💣🐡💩 🐂🐓🏥🌵👴 🏃🐴🔺🍑📩 🔣🔨👄🐅🏁 🏄🐎👵📤 🕗🔲👾🌲📒 🐺💉🎦📙💈 🏂🌃🏊📭 📳🎺🍕🔷🐖 🍓🎼💠🌽🏭🎃 🕤🍞💑🕣🌻🔺🍲 📎🐼💨🐎📈 🍳🍎🕜🌱 🌴🐐📕👈.
    
    🎱🐱🎭🔠🎃💡 🐬🌹👉🐒🎮🍵 🐌👃🐺💓👽 🍢👙📠👝📝 🍄💈🕀👹🍲🎒 🎳📯🎉🍚🌀🎣 👒🍡🎡📕 🐭💾🔯👙🗻📟 📝🔮📑👉💰🌎 💙🏡👙🍹🏦. 🔸👳🔜💨💝 📔🎍🏦🎬💭🎊 🍲🐰👥👟 🔕🎿🏣💕📔 🕘🔇🎱🏨💍 🔙🌋🏫📛👭🍎💒 👡🎈🎲📋💑 💴🔝🌋📃🎍 🍳🔙💇🍚🔮 🐥💚🕣🐎🔹🍩🎂 👠🗽💁🍁 💽💊🐯🐾 🎺🔥🔤📢🍵👣👓 🔻👃🌈🕡🍚🍱 🎬🔥🍙🔡. 💙🌘🔗📛💉🍮 🔖🏨👼🏊 💴🔗🍓📬🎂 💁💃🌷🕂🕂 🔺🔩💦🍤🌻🔆 🐐🎸💝🍓 🎆🔬🌶📧🐘 🐇🔝🔗🍕 🏮🌠📺🍸 🎡👴🔇💥👓 🎻👥💴🍖🏭💈 🐺📡🎋💨🍚👖 🎸🐌🌚🔷💢💁 💛📈👴🐅🔗.
    
    💕🎫🌝💢👾 🎌🕤🎧🐴📼 🍀📊🐡🌼🌀📳 🎰🐝🎤🍝👇🌄 💪🏀🍸🔁🐗🌖🍮 📎🍓🔴🐄🕡🔛🕕 🎱📏🐾🍇🔕 💧🍙🔂🎡 🕛💒👿🎼🔀 💛👦🌍📒📍🌄 👓🐽🏬🕦🔶 🍜📰🎋🍅🍝💜💫💈 🎨🌁🍗🎊🌳🐡📶 🎵🏠💚🗽🌉 🐕📱🕦📑 💩👤🕖🔖. 📍👋💁🌆🌜 🕔🐺🕀🔭 🌄🌆🏰💚📅📹🔀 🐰💴🕢🔎💹🎋 👥🔑🔯👗 🐶🎺📐💜🌂 🔲👦📬🍧🎶🍵 🐤🍢🐔🎩 🔂🐕💦🎤🍒🐣🔣 📙🔩📘💋🍧👺. 🕑💿🔫📶 🔮💏👀🎿📺📼💋 🐞👤📲🎆🏦🐪 💗🐸🏯🔳🍨 🕣🐀🗼🐂🐳 🍄🍮🍈📚🐄🎷🐄🍡 🍲🔕🔄💜🍉 🏆🍚🔠📠🍹👧. 🏧💻🕣👔👪 🌴📷💽🔼📃💼💲 📺🍪🍠👋🍶🍇 💭👡🍋🌏 💂🐁🍍🐶🎤💠🕟 🕚🌖🐺🔽🐟 🕃💏🐋🔟 🔼🎹🍤🍗🎽📷📚 🔜🌕📫💯 🐾🎻📶🎼🍐 💑👭👊🐖.🎇 🌲🎡🍉📕📥🎎🌒 🌈👂🐩💂🏯💠🍮 💵🔊🌻🕖🌽 📶💮💠🕜 🐟💃🐩🍚 🔪🐼🍺🐧🍆🏧. 💚🐗🍨🍼💙 💗🕜🐂💏 📀🎂🎿🔃👚🏦🐠 👃🍘📐📐🎲 💹🍨🎠🍤🐷 📊👔🕑🕂📍🐦 🍸🍦🕂💦🕜📪📤 🔑🎋👐🌅🌛 🐥📌🏯👮🐃🐟 👼🍙🎑👯🌁💅👝 👦🔥🌶👩🎀 🕠📲📤📆 💀🌉🔽🌗💚🔌. 📀🕀🐝👀📣 💄🍴🐱💶🍣 💴💗💠👜 🐖👖🐳👲🌟 🔢🎴👹🎅🌟🔞 🎭🏩🕓🔪 💶🎮🎧📳💁🐠 💥🎢👙👊🐑📺🌳 🎀🔶🐪🔛. 📼🎣🔼🍩🎥 🌂🌙📚📲🔩🏆 🎓📤🎡🌠 🔚🌌🔗🔠 🎧🎃🌞🐆🔈 🎅🎁🍢💁 📐🐓🐎🐵 🏆📡🕘📊👢 🌛💗🔂🌑🕝👛🍜 💳🎺📩🎫🎀🐅🍵 🏩🔕🏢🍁👘.`
    );
    return (
      <RichTextarea
        style={style}
        onChange={useCallback((e) => setText(e.target.value), [])}
        value={text}
      >
        {emojiRegex}
      </RichTextarea>
    );
  },
};

export const Search: StoryObj = {
  render: () => {
    const [text, setText] = useState(LOREM);
    const [searchText, setSearchText] = useState("dolor");
    return (
      <div>
        <div>
          <label htmlFor="search">input search word: </label>
          <input
            name="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <RichTextarea
          style={style}
          onChange={useCallback((e) => setText(e.target.value), [])}
          value={text}
        >
          {searchText
            ? createRegexRenderer([
                [
                  new RegExp(
                    searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                    "ig"
                  ),
                  { borderRadius: "3px", backgroundColor: "yellow" },
                ],
              ])
            : undefined}
        </RichTextarea>
      </div>
    );
  },
};

const manyRegex = createRegexRenderer([
  [/[A-Z][a-z]+/g, { backgroundColor: "lightgray" }],
  [/[abcdeip]/g, { color: "red", fontWeight: "bold" }],
  [/ipsum/g, { color: "blue", textDecoration: "underline wavy" }],
]);

export const Many: StoryObj = {
  render: () => {
    const [text, setText] = useState(LOREM);
    return (
      <RichTextarea
        style={style}
        onChange={useCallback((e) => setText(e.target.value), [])}
        value={text}
      >
        {manyRegex}
      </RichTextarea>
    );
  },
};
