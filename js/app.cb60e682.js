(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"17f2":function(t,e,r){"use strict";var n=r("3bc2"),o=r.n(n);o.a},3909:function(t,e,r){},"3bc2":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d"),r("db4d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticClass:"app"},[r("Main")],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-flex",[r("NavigationDraver"),r("Toolbar"),r("v-layout",{staticClass:"base",on:{scroll:t.scroll}},[r("v-flex",{staticClass:"nav",style:t.logoStyles},[r("div",{class:{"name name--big":t.$vuetify.breakpoint.mdAndUp,"name name--mobile":!t.$vuetify.breakpoint.mdAndUp}},[t._v("Michal Zakowski ")]),r("v-layout",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}],staticClass:"nav-list"},[r("button",{staticClass:"nav-item nav-item__1"},[t._v("O mnie")]),r("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#projects",expression:"'#projects'"}],staticClass:"nav-item nav-item__2"},[t._v("Projekty")]),r("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],staticClass:"nav-item nav-item__3"},[t._v("Kontakt")])]),r("div",{staticClass:"line"}),r("v-img",{staticClass:"logo card-1",class:{"logo logo--big":t.$vuetify.breakpoint.mdAndUp,"logo logo--mobile":!t.$vuetify.breakpoint.mdAndUp},attrs:{src:t.img}})],1),r("LiveCoding"),r("v-flex",{staticClass:"about",attrs:{href:"#about",id:"about"}},[r("h1",[t._v("O mnie")]),r("p",[t._v("lorem ipsum dolar amet")])]),r("v-flex",{staticClass:"projects",attrs:{href:"#projects",id:"projects"}},[r("h1",[t._v("Projekty")]),r("p",[t._v("lorem ipsum dolar amet")])]),r("v-flex",{staticClass:"contact",attrs:{href:"#contact",id:"contact"}},[r("h1",[t._v("kontakt")]),r("p",[t._v("lorem ipsum dolar amet")])])],1)],1)},s=[],c=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),l=r("f93a"),u=r.n(l),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-flex",{staticClass:"live-code"},[r("v-flex",{staticClass:"code",style:t.style},[t._v("\n        "+t._s(t.text1)),r("span",{class:{cursor:!0,"cursor--invisible":this.cursor}},[t._v(" ")]),t._v(t._s(t.text2)+"\n    ")])],1)},f=[],d=r("2f62");function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(r,!0).forEach(function(e){Object(c["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var b={name:"LiveCoding",data:function(){return{text1:"Web",text2:"developer...",moveArray:["1","1","1","F","r","o","n","t","e","n","d","0","0","0","0","1","1","1","1","1","1","1","1","N","o","d","e","J","S","0","0","0","0","0","1","1","1","1","1","1","W","e","b","0","0","0"],cursor:!0,delay:400}},computed:m({},Object(d["c"])("style",["pageY"]),{style:function(){return"margin-left: "+4*this.pageY+"px"}}),methods:{setCursor:function(){var t=this;setTimeout(function(){t.cursor=!t.cursor,t.setCursor()},500)},liveCode:function(t){var e=this;setTimeout(function(){e.delay=400;var r=e.moveArray[t];"1"===r?(e.text1=e.text1.slice(0,-1),e.delay=200):"0"!==r&&(e.text1=e.text1+r),e.liveCode(t!==e.moveArray.length-1?t+1:0)},Math.random()*this.delay)}},beforeMount:function(){this.setCursor(),this.liveCode(0)}},g=b,y=(r("95c6"),r("2877")),h=Object(y["a"])(g,p,f,!1,null,null,null),w=h.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.showNav,expression:"showNav"}],staticClass:"navbar"},[t.$vuetify.breakpoint.mdAndUp?r("v-toolbar",{staticClass:"toolbar",attrs:{dense:"",fixed:"",color:"rgba(255,255,255,0.2)",flat:"",collapse:""}},[r("v-toolbar-title",{attrs:{large:""}},[t._v("MZ")]),r("v-spacer"),t.$vuetify.breakpoint.mdAndUp?t._l(t.items,function(e){return r("v-btn",{attrs:{flat:""}},[t._v("\n                "+t._s(e.title)+"\n            ")])}):t._e()],2):r("v-toolbar",{staticClass:"toolbar",attrs:{flat:"",color:"rgba(0,0,0,0)",fixed:""}},[r("div",{staticClass:"menu back menu--3"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.drawer,expression:"drawer"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.drawer)?t._i(t.drawer,null)>-1:t.drawer},on:{change:function(e){var r=t.drawer,n=e.target,o=!!n.checked;if(Array.isArray(r)){var a=null,i=t._i(r,a);n.checked?i<0&&(t.drawer=r.concat([a])):i>-1&&(t.drawer=r.slice(0,i).concat(r.slice(i+1)))}else t.drawer=o}}}),r("svg",{attrs:{viewBox:"0 0 85 85",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{staticClass:"line--1",attrs:{d:"M0 40h62c18 0 18-20-17 5L31 55"}}),r("path",{staticClass:"line--2",attrs:{d:"M0 50h80"}}),r("path",{staticClass:"line--3",attrs:{d:"M0 60h62c18 0 18 20-17-5L31 45"}})])])])])],1)},j=[];function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(r,!0).forEach(function(e){Object(c["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var x={name:"Toolbar",data:function(){return{windowHeight:window.innerHeight,count:0,isChecked:!0}},computed:P({},Object(d["c"])("style",["pageY"]),{},Object(d["c"])("info",["getdrawer","items"]),{showNav:function(){return this.windowHeight/2<this.pageY||this.$vuetify.breakpoint.mdAndDown},drawer:{get:function(){return this.getdrawer},set:function(t){this.updateDrawer(t)}}}),methods:P({},Object(d["b"])("info",["updateDrawer"]))},k=x,C=(r("b751"),Object(y["a"])(k,O,j,!1,null,null,null)),D=C.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{staticClass:"navigation-drawer",attrs:{fixed:"",light:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{staticClass:"pa-1"},[r("v-list-tile",{attrs:{avatar:""}},[r("v-list-tile-avatar"),r("v-list-tile-content",[r("v-list-tile-title",[t._v("MZ")])],1)],1)],1),r("v-list",{staticClass:"pt-0",attrs:{dense:""}},[r("v-divider"),t._l(t.items,function(e){return r("v-list-tile",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:""+e.scrollTo,expression:"`${item.scrollTo}`"}],key:e.title,staticClass:"list-tile",on:{click:function(e){return t.updateDrawer(!1)}}},[r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)})],2)],1)},E=[];function Y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Y(r,!0).forEach(function(e){Object(c["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Y(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var S={name:"NavigationDraver",computed:T({},Object(d["c"])("info",["getdrawer","name","items"]),{drawer:{get:function(){return this.getdrawer},set:function(t){this.updateDrawer(t)}}}),methods:T({},Object(d["b"])("info",["updateDrawer"]))},M=S,N=(r("7d89"),Object(y["a"])(M,A,E,!1,null,null,null)),U=N.exports;function $(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function L(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?$(r,!0).forEach(function(e){Object(c["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var G={name:"Home",data:function(){return{img:u.a}},components:{Toolbar:D,LiveCoding:w,NavigationDraver:U},computed:L({},Object(d["c"])("style",["pageY"]),{navStyles:function(){return this.pageY<400?"margin-top: -"+this.pageY+"px":"margin-top: -400px"},nameStyles:function(){return this.pageY>250?"opacity: "+(350-this.pageY)/100:this.pageY<250?"opacity: 1":"opacity: 0"},logoStyles:function(){return this.pageY>150?"margin-top: "+(250-this.pageY-90)+"px; opacity: "+(350-this.pageY)/100:this.pageY<150?"":"margin-top: -1500px"}}),methods:L({},Object(d["d"])("style",["UPDATE_PAGE_Y"]),{scroll:function(){this.UPDATE_PAGE_Y(window.scrollY)}}),created:function(){window.addEventListener("scroll",this.scroll)},destroyed:function(){window.removeEventListener("scroll",this.scroll)}},H=G,R=(r("17f2"),Object(y["a"])(H,i,s,!1,null,null,null)),W=R.exports,Z={name:"App",components:{Main:W}},J=Z,K=(r("cf25"),Object(y["a"])(J,o,a,!1,null,null,null)),B=K.exports,F=r("8c4f");n["default"].use(F["a"]);var q=new F["a"]({mode:"history",base:"",routes:[{path:"/",name:"app",component:B}]}),z=r("ce5b"),I={state:{pageY:0,style:{marginLeft:0}},getters:{pageY:function(t){return t.pageY},style:function(t){return t.style}},mutations:{UPDATE_PAGE_Y:function(t,e){t.pageY=e,t.style.marginLeft=e}},actions:{updatePageY:function(t,e){var r=t.commit;r("UPDATE_PAGE_Y",e)}},namespaced:!0},Q=I,V=(r("7f7f"),{state:{name:"Michal Zakowski",items:[{title:"O mnie",scrollTo:"#about"},{title:"Projekty",scrollTo:"#projects"},{title:"Kontakt",scrollTo:"#contact"}],drawer:!1},getters:{name:function(t){return t.name},items:function(t){return t.items},getdrawer:function(t){return t.drawer}},mutations:{UPDATE_NAME:function(t,e){t.name=e},UPDATE_DRAWER:function(t,e){t.drawer=e}},actions:{updateName:function(t,e){var r=t.commit;r("UPDATE_NAME",e)},updateDrawer:function(t,e){var r=t.commit;r("UPDATE_DRAWER",e)}},namespaced:!0}),X=V;n["default"].use(d["a"]);var tt=new d["a"].Store({modules:{style:Q,info:X},strict:!1}),et=(r("bf40"),r("ecee")),rt=r("ad3d"),nt=r("c074"),ot=r("b702"),at={checkboxOn:{component:rt["a"],props:{icon:nt["b"]}},checkboxOff:{component:rt["a"],props:{icon:ot["b"]}},menu:{component:rt["a"],props:{icon:nt["d"]}},actionList:{component:rt["a"],props:{icon:nt["h"]}},edit:{component:rt["a"],props:{icon:nt["c"]}},info:{component:rt["a"],props:{icon:nt["g"]}},folder:{component:rt["a"],props:{icon:nt["e"]}},checkCircle:{component:rt["a"],props:{icon:ot["a"]}},timeCircle:{component:rt["a"],props:{icon:ot["c"]}},gripLines:{component:rt["a"],props:{icon:nt["f"]}},angleDown:{component:rt["a"],props:{icon:nt["a"]}}},it=r("f13c");n["default"].component("font-awesome-icon",rt["a"]),et["c"].add(nt["i"],ot["d"]),n["default"].use(it),n["default"].use(z,{icons:at}),new n["default"]({router:q,store:tt,render:function(t){return t(B)}}).$mount("#app")},"74bb":function(t,e,r){},"7d89":function(t,e,r){"use strict";var n=r("c0cf"),o=r.n(n);o.a},"95c6":function(t,e,r){"use strict";var n=r("3909"),o=r.n(n);o.a},"9fba":function(t,e,r){},b751:function(t,e,r){"use strict";var n=r("74bb"),o=r.n(n);o.a},c0cf:function(t,e,r){},cf25:function(t,e,r){"use strict";var n=r("9fba"),o=r.n(n);o.a},f93a:function(t,e,r){t.exports=r.p+"img/mike5.8f29a3ea.jpg"}});
//# sourceMappingURL=app.cb60e682.js.map