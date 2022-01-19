import React, { useCallback, useState } from "react";
import { Textarea } from "../src";

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default {
  title: "basics",
};

const style = { width: "600px", height: "400px" };

const basicMatcher = [
  [/[A-Z][a-z]+/g, { borderRadius: "3px", backgroundColor: "#d0bfff" }],
];

export const Basic = () => {
  const [text, setText] = useState(lorem);
  return (
    <Textarea
      matchers={basicMatcher}
      style={style}
      onChange={useCallback((e) => setText(e.target.value), [])}
      value={text}
    />
  );
};

const manyMatcher = [
  [/ipsum/g, { color: "blue", textDecoration: "underline wavy" }],
  [/[abcdeip]/g, { color: "red", fontWeight: "bold" }],
];

export const Many = () => {
  const [text, setText] = useState(lorem);
  return (
    <Textarea
      matchers={manyMatcher}
      style={style}
      onChange={useCallback((e) => setText(e.target.value), [])}
      value={text}
    />
  );
};

const emojiMatcher = [
  [
    /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/gu,
    { background: "yellow" },
  ],
];

export const Emoji = () => {
  const [text, setText] = useState(
    `📫🔒🍳📶 💨🌠🐩🐅📀🍆 🎭🕖👆📱 🏮🌁🌍🏂📰🔓 🎻💟🐻👫🍇🌆🔻 🎬🍻🍋🎡💬🌓🐁 🐻🏭🐟👵🎋🐧 👵🎋🐲🍌 🍨🍪🕐🐳 💋💱🔹📁 📴💬📔🐁🌿 🕐🕝🎂🐳💌👃 🎹🌀💣👓👨💳 🎭🕧👖🌰🌽 🐮👾🌻👫🐉. 🍼🎓🐖🌿🍄 🍻🎂🔨👯💋📄🕦 🏆👟💜🎺📡📅🌙 🔠🍧💯🍓📪 🏪🌞🔼👅 🔼💭💐💲🕤📟 🐭📁🎼🔢📃🍅 🕐🎿🍬🐥🐐🎾📒 💛📶🐘🔺 💦👀🐔💔 🍨📤🐥🐃📊🏯🏃 🐕🐋👳🎈👎. 🐛🏂💔🐅🐃🍮🐀 🔷📫🌁👘🐁 👕📖🐂🍪📞 📦🌶🍌💑📗 🌈📜🎽🐈📀 🎃🕣🍯🌝👶 🍌💻💉💠💼 🎁👪🎠🎽🗾 🐡💏💢🌛👻💗💴. 🐺🐗🎅👮💓🎾 👄👦🔰💸 💏🐗🔭📼 🐢👧🍯🍷👋 🎡👖🌍🔽🕗 📰🌺🐦🐾 💋🕃🎭💩 🎣🍱🔔🔳. 📕🕘🔨🐸💖 🕠🌗📋💦 🔛🐄🐶🐽🍶🎇 🍁🏢🏪🐎🐕 🎰📞🐣🍇📂 🏈🏊💃💫🐥🌸 📪🍧💖🎳🍀 🔣🔝🔴🌅🔜👩 🍠🔯💎🏧 🐍💀🔠🐖📷🔖 🌗🕂🐙🎢👀🐯🍆 🏣👾🐚🔕📮💛👄 🍇🌰🎵👑🎬🌁 🔚🏁🎁🐝🍪🍛 🎾👓🐄🎿🕠🔙 🌹👀💧🔛👞.

    🍷🕖🔷📙 🏢🎬🐂💤🐙🍠📐🔉 💑💑👰👔🔢🐾 💽🎽💛📡📭 🎧📘🔏🍁 👤🎲💛🍔🐚🏤🔥 🐕👋👘🌅🐐👴 🕘📭🏈🍁🔉💿 👰📈🔴🌸👨📻 👤🐡🐅👃🏁🎃 🐢🎻🕢🔢🌊🍤🍱 🐞👬💔💸🏀 🗻👿👠🐆💐💞 🔧🎑📂🐪👮🌚 👘📆🌷🐘. 🍜🐊🍇🔏🏥🕝🔫 💩🌓🌔💥 📨🐝🔭🗾🍙 🍞🎶🔘📌🕗📣🌈🍝 📏🎌📧💂🐶 🔯🎀💌🔫👠💺 👯🐭📵🍁 🐫👳🍜🌎 🍛🎱🍓🌎🍦🐔🎨 🔧🍤🎽🌒🍵 🔯🎓💂📩💄👯💏 🍔🍉🍍👋🍼🍏 🍸🍝🎳🍗💖🌁 🎫👿📲🔛📫 👖🌐🍱🌘🔻📘🏈 🔃📶🐢🏮. 🍌📁💈🔣🐑👩 💋👬👖🎋 💽🐈🍮🍰👚 🔓🔗🍋🐡👤🏨🔃🍫 🔔🎺🍍💡 👦🎦🔊🍛 🌃🔭🕧📖👋💦🎤 🕃🗼🌹📔🏩📲 🍋💿📰🌻 📉🔵🐅🍠. 🌳🐲🏡💽 🌎💟🎅🔃🎬🔹 🌆👞🌖📇💣🐡💩 🐂🐓🏥🌵👴 🏃🐴🔺🍑📩 🔣🔨👄🐅🏁 🏄🐎👵📤 🕗🔲👾🌲📒 🐺💉🎦📙💈 🏂🌃🏊📭 📳🎺🍕🔷🐖 🍓🎼💠🌽🏭🎃 🕤🍞💑🕣🌻🔺🍲 📎🐼💨🐎📈 🍳🍎🕜🌱 🌴🐐📕👈.
    
    🎱🐱🎭🔠🎃💡 🐬🌹👉🐒🎮🍵 🐌👃🐺💓👽 🍢👙📠👝📝 🍄💈🕀👹🍲🎒 🎳📯🎉🍚🌀🎣 👒🍡🎡📕 🐭💾🔯👙🗻📟 📝🔮📑👉💰🌎 💙🏡👙🍹🏦. 🔸👳🔜💨💝 📔🎍🏦🎬💭🎊 🍲🐰👥👟 🔕🎿🏣💕📔 🕘🔇🎱🏨💍 🔙🌋🏫📛👭🍎💒 👡🎈🎲📋💑 💴🔝🌋📃🎍 🍳🔙💇🍚🔮 🐥💚🕣🐎🔹🍩🎂 👠🗽💁🍁 💽💊🐯🐾 🎺🔥🔤📢🍵👣👓 🔻👃🌈🕡🍚🍱 🎬🔥🍙🔡. 💙🌘🔗📛💉🍮 🔖🏨👼🏊 💴🔗🍓📬🎂 💁💃🌷🕂🕂 🔺🔩💦🍤🌻🔆 🐐🎸💝🍓 🎆🔬🌶📧🐘 🐇🔝🔗🍕 🏮🌠📺🍸 🎡👴🔇💥👓 🎻👥💴🍖🏭💈 🐺📡🎋💨🍚👖 🎸🐌🌚🔷💢💁 💛📈👴🐅🔗.
    
    💕🎫🌝💢👾 🎌🕤🎧🐴📼 🍀📊🐡🌼🌀📳 🎰🐝🎤🍝👇🌄 💪🏀🍸🔁🐗🌖🍮 📎🍓🔴🐄🕡🔛🕕 🎱📏🐾🍇🔕 💧🍙🔂🎡 🕛💒👿🎼🔀 💛👦🌍📒📍🌄 👓🐽🏬🕦🔶 🍜📰🎋🍅🍝💜💫💈 🎨🌁🍗🎊🌳🐡📶 🎵🏠💚🗽🌉 🐕📱🕦📑 💩👤🕖🔖. 📍👋💁🌆🌜 🕔🐺🕀🔭 🌄🌆🏰💚📅📹🔀 🐰💴🕢🔎💹🎋 👥🔑🔯👗 🐶🎺📐💜🌂 🔲👦📬🍧🎶🍵 🐤🍢🐔🎩 🔂🐕💦🎤🍒🐣🔣 📙🔩📘💋🍧👺. 🕑💿🔫📶 🔮💏👀🎿📺📼💋 🐞👤📲🎆🏦🐪 💗🐸🏯🔳🍨 🕣🐀🗼🐂🐳 🍄🍮🍈📚🐄🎷🐄🍡 🍲🔕🔄💜🍉 🏆🍚🔠📠🍹👧. 🏧💻🕣👔👪 🌴📷💽🔼📃💼💲 📺🍪🍠👋🍶🍇 💭👡🍋🌏 💂🐁🍍🐶🎤💠🕟 🕚🌖🐺🔽🐟 🕃💏🐋🔟 🔼🎹🍤🍗🎽📷📚 🔜🌕📫💯 🐾🎻📶🎼🍐 💑👭👊🐖.🎇 🌲🎡🍉📕📥🎎🌒 🌈👂🐩💂🏯💠🍮 💵🔊🌻🕖🌽 📶💮💠🕜 🐟💃🐩🍚 🔪🐼🍺🐧🍆🏧. 💚🐗🍨🍼💙 💗🕜🐂💏 📀🎂🎿🔃👚🏦🐠 👃🍘📐📐🎲 💹🍨🎠🍤🐷 📊👔🕑🕂📍🐦 🍸🍦🕂💦🕜📪📤 🔑🎋👐🌅🌛 🐥📌🏯👮🐃🐟 👼🍙🎑👯🌁💅👝 👦🔥🌶👩🎀 🕠📲📤📆 💀🌉🔽🌗💚🔌. 📀🕀🐝👀📣 💄🍴🐱💶🍣 💴💗💠👜 🐖👖🐳👲🌟 🔢🎴👹🎅🌟🔞 🎭🏩🕓🔪 💶🎮🎧📳💁🐠 💥🎢👙👊🐑📺🌳 🎀🔶🐪🔛. 📼🎣🔼🍩🎥 🌂🌙📚📲🔩🏆 🎓📤🎡🌠 🔚🌌🔗🔠 🎧🎃🌞🐆🔈 🎅🎁🍢💁 📐🐓🐎🐵 🏆📡🕘📊👢 🌛💗🔂🌑🕝👛🍜 💳🎺📩🎫🎀🐅🍵 🏩🔕🏢🍁👘.`
  );
  return (
    <Textarea
      matchers={emojiMatcher}
      style={style}
      onChange={useCallback((e) => setText(e.target.value), [])}
      value={text}
    />
  );
};
