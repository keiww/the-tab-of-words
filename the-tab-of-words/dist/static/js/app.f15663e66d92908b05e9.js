webpackJsonp([1],{"0xDb":function(t,e,s){"use strict";s.d(e,"a",function(){return n}),s.d(e,"b",function(){return o});var n=function(t){return t[Math.floor(Math.random()*t.length)]},o=function(t,e){var s=e.indexOf(t);return e[s+1>=e.length?0:s+1]}},"18oN":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"toolbar"},[s("button",{class:{btn:!0,hide:t.store.showBook},on:{click:t.changeLevel}},[t._v("\n    "+t._s(t.levels[t.store.level])+"\n  ")]),t._v(" "),s("button",{class:{btn:!0,hide:t.store.showBook},on:{click:t.hide}},[t._v("\n    隠\n  ")]),t._v(" "),s("button",{class:{btn:!0,show:t.store.showBook},on:{click:t.toggleBook}},[t._v("\n    帳\n  ")]),t._v(" "),s("button",{staticClass:"btn",on:{click:t.changeTheme}},[t._v("\n    "+t._s(t.themes[t.theme])+"\n  ")])])},o=[],i={render:n,staticRenderFns:o};e.a=i},"4x6I":function(t,e,s){"use strict";var n=s("xipm");e.a={data:function(){return{themes:{sunrise:"日",sunset:"夕",moon:"月"},levels:["全","一","二","三","四","五"],store:n.a.store}},computed:{theme:function(){return this.store.settings.theme}},methods:{hide:function(){n.a.hide(this.store.card)},changeLevel:n.a.changeLevel,toggleBook:n.a.toggleBook,changeTheme:n.a.changeTheme}}},ATt0:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bookWrapper"},[s("main",{staticClass:"book"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[t.hiddenCards.length?s("transition-group",{staticClass:"list",attrs:{name:"list",tag:"ul"}},t._l(t.hiddenCards,function(e,n){return s("li",{key:n,staticClass:"item"},[s("div",{staticClass:"inner"},[s("h3",{staticClass:"word"},[s("a",{attrs:{href:t.searchUrl(e.word),target:"_blank"}},[t._v(t._s(e.word))])]),t._v(" "),s("span",{staticClass:"level"},[t._v("N"+t._s(e.level))]),t._v(" "),s("p",{staticClass:"spelling"},[s("span",{staticClass:"hiragana"},[t._v(t._s(e.hiragana||e.word))]),t._v(" "),s("span",{staticClass:"romaji",class:{show:t.showRomaji}},[t._v(t._s(e.romaji))])]),t._v(" "),s("p",{staticClass:"meaning"},[t._v(t._s(e.meaning))]),t._v(" "),s("button",{staticClass:"btn-del",on:{click:function(s){t.unhide(e)}}},[t._v("×")])])])})):s("div",{staticClass:"empty"},[t._v("空")])],1)],1),t._v(" "),s("Settings")],1)},o=[],i={render:n,staticRenderFns:o};e.a=i},B6Ca:function(t,e){},"F4/v":function(t,e,s){"use strict";function n(t){s("fCva")}var o=s("Fex2"),i=s("ATt0"),a=s("VU/8"),r=n,c=a(o.a,i.a,!1,r,null,null);e.a=c.exports},Fex2:function(t,e,s){"use strict";var n=s("xipm"),o=s("niH5");e.a={data:function(){return{store:n.a.store,wordToPlay:""}},components:{Settings:o.a},computed:{showRomaji:function(){return this.store.settings.showRomaji},hiddenCards:function(){var t=this.store,e=t.hides,s=t.words,n=s.filter(function(t){return e.includes(t.uuid)});return n=e.map(function(t){return n.filter(function(e){return t===e.uuid})[0]}),n.reverse()}},methods:{searchUrl:function(t){return"http://jisho.org/search/"+t},unhide:function(t){n.a.unhide(t)}}}},I35F:function(t,e){},JZSy:function(t,e,s){"use strict";var n=s("xipm");e.a={data:function(){return{store:n.a.store}},computed:{showRomaji:function(){return this.store.settings.showRomaji},fontSize:function(){return this.store.settings.fontSize.toUpperCase()}},methods:{toggleRomaji:n.a.toggleRomaji,toggleFontSize:n.a.toggleFontSize}}},JtYv:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"meta"},[s("p",{staticClass:"romaji",class:{show:t.showRomaji}},[t._v(t._s(t.card.romaji||" "))]),t._v(" "),s("p",{staticClass:"hiragana"},[t._v(t._s(t.card.hiragana||t.card.word))])]),t._v(" "),s("h1",{staticClass:"word"},[s("a",{attrs:{href:t.searchUrl,target:"_blank"}},[t._v(t._s(t.card.word))])]),t._v(" "),s("p",{staticClass:"meaning"},[t._v(t._s(t.card.meaning))]),t._v(" "),s("span",{staticClass:"level"},[t._v("N"+t._s(t.card.level))])])},o=[],i={render:n,staticRenderFns:o};e.a=i},KNqz:function(t,e){},M93x:function(t,e,s){"use strict";function n(t){s("B6Ca")}var o=s("xJD8"),i=s("mtbH"),a=s("VU/8"),r=n,c=a(o.a,i.a,!1,r,null,null);e.a=c.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),o=s("xipm"),i=s("M93x");n.a.config.productionTip=!1,document.documentElement.classList.add(o.a.store.settings.fontSize),document.documentElement.classList.add(o.a.store.settings.theme),new n.a({el:"#app",template:"<App/>",components:{App:i.a}}),console.log("// Signed in Chrome / Firefox Account to sync your settings."),console.log("// You can press SPACEBAR / ENTER to get another random word."),console.log("// Source code is on https://github.com/keiww/the-tab-of-words")},NU23:function(t,e,s){"use strict";var n=s("xipm");e.a={data:function(){return{store:n.a.store}},computed:{showRomaji:function(){return n.a.store.settings.showRomaji},card:function(){return this.store.card},searchUrl:function(){return"http://jisho.org/search/"+this.store.card.word}}}},XW1S:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"settings"},[s("a",{staticClass:"btn",attrs:{href:"javascript:void(0);"},on:{click:t.toggleFontSize}},[t._v("\n    "+t._s(t.fontSize)+"\n  ")]),t._v(" "),s("a",{staticClass:"btn",class:{active:t.showRomaji},attrs:{href:"javascript:void(0);"},on:{click:t.toggleRomaji}},[t._v("\n    romaji\n  ")]),t._v(" "),s("a",{staticClass:"source",attrs:{target:"_blank",href:"http://www.tanos.co.uk/jlpt/"}},[t._v("@datasource")]),t._v(" "),s("a",{staticClass:"source",attrs:{target:"_blank",href:"http://the-tab-of-words.keipixel.com/"}},[t._v("@homepage")])])},o=[],i={render:n,staticRenderFns:o};e.a=i},djO7:function(t,e,s){"use strict";function n(t){s("dqKe")}var o=s("4x6I"),i=s("18oN"),a=s("VU/8"),r=n,c=a(o.a,i.a,!1,r,null,null);e.a=c.exports},dqKe:function(t,e){},fCva:function(t,e){},gyMJ:function(t,e,s){"use strict";s.d(e,"a",function(){return n});var n=function(){return fetch("./static/data/words.json").then(function(t){return t.json()})}},mtbH:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{loaded:t.store.loaded},attrs:{id:"app"}},[s("div",{staticClass:"container"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s(t.store.showBook?"Book":"Card")],1)],1),t._v(" "),s("Toolbar")],1)},o=[],i={render:n,staticRenderFns:o};e.a=i},niH5:function(t,e,s){"use strict";function n(t){s("KNqz")}var o=s("JZSy"),i=s("XW1S"),a=s("VU/8"),r=n,c=a(o.a,i.a,!1,r,null,null);e.a=c.exports},rhdv:function(t,e,s){"use strict";function n(t){s("I35F")}var o=s("NU23"),i=s("JtYv"),a=s("VU/8"),r=n,c=a(o.a,i.a,!1,r,null,null);e.a=c.exports},xJD8:function(t,e,s){"use strict";var n=s("xipm"),o=s("rhdv"),i=s("F4/v"),a=s("djO7");e.a={data:function(){return{store:n.a.store}},components:{Card:o.a,Book:i.a,Toolbar:a.a},computed:{theme:function(){return this.store.settings.theme},fontSize:function(){return this.store.settings.fontSize}},watch:{fontSize:function(t,e){document.documentElement.classList.remove(e),document.documentElement.classList.add(t)},theme:function(t,e){document.documentElement.classList.remove(e),document.documentElement.classList.add(t)}},created:function(){n.a.init(),this.onKeydown()},methods:{onKeydown:function(){var t=this;window.addEventListener("keydown",function(e){[32,13].includes(e.keyCode)&&e.preventDefault(),32!==e.keyCode&&13!==e.keyCode||!t.store.loaded||n.a.generateCard(),27===e.keyCode&&t.store.showBook&&n.a.hideBook()})}}}},xS6p:function(t,e,s){"use strict";s.d(e,"a",function(){return f});var n=s("mvHQ"),o=s.n(n),i=s("bOdI"),a=s.n(i),r=s("Q7hp"),c=s.n(r),u=s("HN2V"),d=s.n(u),l="THE_TAB_OF_WORDS",h=["version","level","hides","settings"],f={loaded:!1,showBook:!1,words:[],card:{},version:"1.3.0",level:0,hides:[],settings:{showRomaji:!1,fontSize:"m",theme:"sunrise"}},v=c()(window,["chrome","storage","sync"],null),m={init:function(t){var e=this;if(v)v.get(l,function(s){s=s?s[l]:{},t(e.getInitStore(s))});else{var s=JSON.parse(window.localStorage.getItem(l));t(this.getInitStore(s))}},getInitStore:function(t){var e=f;return t?(d()(e,t),"1.3.0"!==e.version&&(e.version<"1.1.0"&&(e.settings.showRomaji=e.showRomaji,delete e.showRomaji),e.version<"1.3.0"&&(e.hides=e.likes,delete e.likes),e.version="1.3.0",this.update(e))):this.update(e),e},update:function(t){var e={};h.forEach(function(s){e[s]=t[s]}),v?v.set(a()({},l,e)):window.localStorage.setItem(l,o()(e))}};e.b=m},xipm:function(t,e,s){"use strict";var n=s("woOf"),o=s.n(n),i=s("7+uW"),a=s("RyI1"),r=s.n(a),c=s("q+Dy"),u=s.n(c),d=s("xS6p"),l=s("gyMJ"),h=s("0xDb"),f=["s","m","l"],v=["sunrise","sunset","moon"],m=new i.a({data:{store:d.a},computed:{filteredWords:function(){var t=this.store,e=t.level,s=t.words,n=t.hides,o=0===e?s:s.filter(function(t){return t.level===e});return r()(o,function(t){return!u()(n,t.uuid)})}},methods:{init:function(){var t=this;d.b.init(function(e){s.i(l.a)().then(function(s){e.words=s,e.loaded=!0,t.store=o()(t.store,e),t.generateCard()})})},generateCard:function(){this.store.card=s.i(h.a)(this.filteredWords,this.store.hides)},changeLevel:function(){var t=this.store.level;this.store.level=t+1>5?0:t+1,this.generateCard(),d.b.update(this.store)},hide:function(t){this.store.hides.push(t.uuid),d.b.update(this.store),this.generateCard()},unhide:function(t){var e=this.store.hides.indexOf(t.uuid);e>=0&&(this.store.hides.splice(e,1),d.b.update(this.store))},toggleBook:function(){this.store.showBook=!this.store.showBook,d.b.update(this.store)},hideBook:function(){this.store.showBook&&(this.store.showBook=!1,d.b.update(this.store))},toggleRomaji:function(){this.store.settings.showRomaji=!this.store.settings.showRomaji,d.b.update(this.store)},toggleFontSize:function(){this.store.settings.fontSize=s.i(h.b)(this.store.settings.fontSize,f),d.b.update(this.store)},changeTheme:function(){this.store.settings.theme=s.i(h.b)(this.store.settings.theme,v),d.b.update(this.store)}}});e.a=m}},["NHnr"]);