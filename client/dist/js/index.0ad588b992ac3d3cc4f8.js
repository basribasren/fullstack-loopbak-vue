(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"+CAJ":function(t,e,n){"use strict";var a=n("GDvy"),r=n("KHd+"),i={},s=Object(r["a"])(i,a["a"],a["b"],!1,null,null,null);e["a"]=s.exports},"+V5z":function(t,e,n){"use strict";var a=n("6NBb");n.d(e,"a",function(){return a["a"]}),n.d(e,"b",function(){return a["b"]})},"+t5K":function(t,e,n){"use strict";var a=n("L68H");e["a"]=a["a"]},"/naO":function(t,e,n){},"0RiU":function(t,e,n){"use strict";var a=n("0XSa"),r=n("jCpD"),i=n("KHd+"),s=Object(i["a"])(r["a"],a["a"],a["b"],!1,null,"61fddb98",null);e["a"]=s.exports},"0XSa":function(t,e,n){"use strict";var a=n("n71n");n.d(e,"a",function(){return a["a"]}),n.d(e,"b",function(){return a["b"]})},"3bgT":function(t,e,n){"use strict";var a=n("lIOY");Object(a["a"])(`${Object({API_PATH:"http://localhost:3000/api"}).BASE_URL}service-worker.js`,{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}})},"6NBb":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("h3",{staticClass:"headline mb-0"},[t._v("Login")])]),t._v(" "),n("v-form",{ref:"form",staticClass:"center--form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{rules:t.nameRules,label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-select",{attrs:{items:t.role,rules:[function(t){return!!t||"Role is required"}],label:"Role",required:""},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),t._v(" "),n("v-checkbox",{attrs:{rules:[function(t){return!!t||"You must agree to continue!"}],label:"Do you agree?",required:""},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),t._v(" "),n("v-btn",{attrs:{disabled:!t.valid,color:"info"},on:{click:t.validate}},[t._v("\n\t\t\t\t\tLogin\n\t\t\t\t")])],1)],1)],1)],1)},r=[]},"89xM":function(t,e,n){"use strict";var a=n("QdVx");n.d(e,"a",function(){return a["a"]}),n.d(e,"b",function(){return a["b"]})},"9JL+":function(t,e,n){"use strict";var a=n("yEJw"),r=n("9KYf"),i=(n("LX47"),n("KHd+")),s=Object(i["a"])(r["a"],a["a"],a["b"],!1,null,null,null);e["a"]=s.exports},"9KYf":function(t,e,n){"use strict";var a=n("rg/S");e["a"]=a["a"]},"9WjU":function(t,e,n){"use strict";var a=n("HOQh");n.d(e,"a",function(){return a["a"]}),n.d(e,"b",function(){return a["b"]})},APfs:function(t,e,n){"use strict";var a=n("yjl+"),r=n("Va9t"),i=n("KHd+"),s=Object(i["a"])(r["a"],a["a"],a["b"],!1,null,"68c3a4e9",null);e["a"]=s.exports},CqVi:function(t,e,n){var a=n("kgEK");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("SZ7m").default;r("16b14712",a,!0,{})},GDvy:function(t,e,n){"use strict";var a=n("ZPON");n.d(e,"a",function(){return a["a"]}),n.d(e,"b",function(){return a["b"]})},HOQh:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{staticClass:"grey lighten-4",attrs:{permanent:"permanent"===t.customSidebar.type,temporary:"temporary"===t.customSidebar.type,clipped:t.customSidebar.clipped,"mini-variant":t.customSidebar.mini,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("app-sidebar",{attrs:{isAuthentication:t.isAuthentication}})],1),t._v(" "),n("app-header",{attrs:{isAuthentication:t.isAuthentication,custom:t.customSidebar},on:{toogleSidebar:t.toogleSidebar}}),t._v(" "),n("app-content"),t._v(" "),n("app-footer",{attrs:{inset:t.inset}})],1)},r=[]},I77X:function(t,e,n){"use strict";var a=n("Xl2i");e["a"]=a["a"]},"J22+":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{staticClass:"grey lighten-4",attrs:{dense:""}},[t._l(t.items,function(e,a){return[e.heading?n("v-layout",{key:a,attrs:{row:"","align-center":""}},[n("v-flex",{attrs:{xs6:""}},[e.heading?n("v-subheader",[t._v("\n\t\t\t\t\t"+t._s(e.heading)+"\n\t\t\t\t")]):t._e()],1),t._v(" "),n("v-flex",{staticClass:"text-xs-right",attrs:{xs6:""}},[n("v-btn",{attrs:{small:"",flat:""}},[t._v("edit")])],1)],1):e.divider?n("v-divider",{key:a,staticClass:"my-3",attrs:{dark:""}}):n("v-list-tile",{key:a,attrs:{to:e.to},on:{click:function(t){}}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"grey--text"},[t._v("\n\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t")])],1)],1)]})],2)},r=[]},J7Nk:function(t,e,n){"use strict";e["a"]={name:"Sidebar",props:{isAuthentication:{type:Boolean,default:!1}},data:()=>({items:[{to:"/",icon:"lock",text:"Login"}]})}},Jf0Z:function(t,e,n){"use strict";var a=n("f23O");n.d(e,"a",function(){return a["a"]}),n.d(e,"b",function(){return a["b"]})},KPog:function(t,e,n){"use strict";var a=n("PKNX");n.d(e,"a",function(){return a["a"]}),n.d(e,"b",function(){return a["b"]})},L68H:function(t,e,n){"use strict";e["a"]={name:"Footer",props:{inset:{type:Boolean,default:!1}}}},LX47:function(t,e,n){"use strict";var a=n("wFBt"),r=n.n(a);r.a},LYKQ:function(t,e,n){"use strict";var a=n("9JL+");e["a"]={components:{"audio-item":a["a"]},data:()=>({item:{},audios:[]}),mounted(){this.audio=this.$refs.player},beforeMount(){this.getListRadio()},methods:{getListRadio(){this.audios=[{id:1,name:"MFM Malang",inisial:"101.3 MFM",url_streaming:"http://202.164.218.22:8222/;",url_website:"http://mfm1013.com/",frekuensi:101.3},{id:2,name:"MFM Malang",inisial:"101.3 MFM",url_streaming:"http://202.164.218.22:8222/;",url_website:"http://mfm1013.com/",frekuensi:101.3},{id:3,name:"Radio Sonora FM",inisial:"Sonora FM",url_streaming:"http://101.50.0.77:8000/sonora.aac",url_website:"https://www.indikafm.com/",frekuensi:92}]},selectAudio(t){this.item=t,this.audio.load()}}}},M2TS:function(t,e,n){"use strict";var a=n("89xM"),r=n("+t5K"),i=n("KHd+"),s=Object(i["a"])(r["a"],a["a"],a["b"],!1,null,"5fb99bb0",null);e["a"]=s.exports},PKNX:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{grow:"",xs12:""}},[n("audio",{ref:"player",staticStyle:{width:"100%"},attrs:{id:"player",controls:"",autoplay:"",preload:"metadata"}},[n("source",{attrs:{src:t.item.url_streaming}})])])],1),t._v(" "),n("v-item-group",[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.audios,function(e,a){return n("v-flex",{key:e.id,attrs:{xs12:"",md3:""}},[n("audio-item",{attrs:{item:e},on:{selectAudio:t.selectAudio}})],1)}),1)],1)],1)},r=[]},PQDF:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-item",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.active,r=e.toggle;return n("v-card",{staticClass:"white--text",attrs:{color:a?"#D6A102":"amber"}},[n("v-img",{attrs:{src:"https://picsum.photos/500/300?image="+(5*Math.floor(6*Math.random())+10),"lazy-src":"https://picsum.photos/10/6?image=15",height:"125px"},on:{click:function(e){r(),t.playAudio(a)}}},[n("v-expand-transition",[a?n("div",{staticClass:"transition-fast-in-fast-out black darken-3 v-card--reveal"},[n("div",{staticClass:"headline"},[t._v(t._s(t.item.inisial))]),t._v(" "),n("div",[t._v(t._s(t.item.name))]),t._v(" "),n("div",[t._v(t._s(t.item.frekuensi)+" FM")])]):t._e()])],1),t._v(" "),n("v-divider",{attrs:{light:""}}),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{icon:""},on:{click:function(e){r(),t.playAudio(a)}}},[n("v-icon",{attrs:{color:a?"white":"black"}},[t._v("\n\t\t\t\t\t"+t._s(a?"pause":"play_arrow")+"\n\t\t\t\t")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.bookmarkAudio()}}},[n("v-icon",{attrs:{color:t.onBookmark?"white":"black"}},[t._v("\n\t\t\t\t\tbookmark\n\t\t\t\t")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.openDetail(t.item.id)}}},[n("v-icon",{attrs:{color:"white"}},[t._v("open_in_new")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"white"}},[t._v("share")])],1)],1)],1)}}])})},r=[]},Pf3K:function(t,e,n){"use strict";var a=n("9WjU"),r=n("I77X"),i=n("KHd+"),s=Object(i["a"])(r["a"],a["a"],a["b"],!1,null,"5011fb6a",null);e["a"]=s.exports},QdVx:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{color:"amber",inset:t.inset,app:""}},[n("span",{staticClass:"px-3"},[t._v("© "+t._s((new Date).getFullYear()))])])},r=[]},RUdq:function(t,e,n){"use strict";e["a"]={name:"Content"}},"S/Dj":function(t,e,n){"use strict";e["a"]={name:"Header",props:{custom:{type:Object,default:()=>{}}},methods:{toogleHeader(){this.$emit("toogleSidebar")}}}},Va9t:function(t,e,n){"use strict";var a=n("J7Nk");e["a"]=a["a"]},Vtdi:function(t,e,n){"use strict";n.r(e);var a=n("Kw5r"),r=n("zlta"),i=n.n(r),s=(n("v0CA"),n("Pf3K")),o=n("oYx3"),c=n("ZToj");n("3bgT");a["default"].use(i.a),a["default"].config.productionTip=!1,new a["default"]({router:o["a"],store:c["a"],render:t=>t(s["a"])}).$mount("#app")},Xl2i:function(t,e,n){"use strict";var a=n("0RiU"),r=n("APfs"),i=n("a65F"),s=n("M2TS");e["a"]={name:"App",components:{"app-header":a["a"],"app-sidebar":r["a"],"app-content":i["a"],"app-footer":s["a"]},data:()=>({drawer:!1,drawers:["Default (no property)","Permanent","Temporary"],customSidebar:{type:"Default (no property)",clipped:!0,mini:!1,dense:!1,flat:!1},inset:!0,isAuthentication:!1}),methods:{toogleSidebar:function(){return this.drawer=!this.drawer}}}},ZPON:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-stepper",{attrs:{value:"1"}},[n("v-stepper-header",[n("v-stepper-step",{attrs:{step:"1"}},[t._v("Select campaign settings")]),t._v(" "),n("v-divider"),t._v(" "),n("v-stepper-step",{attrs:{step:"2"}},[t._v("Create an ad group")]),t._v(" "),n("v-divider"),t._v(" "),n("v-stepper-step",{attrs:{step:"3"}},[t._v("Create an ad")])],1)],1)},r=[]},ZToj:function(t,e,n){"use strict";var a=n("Kw5r"),r=n("L2JU");a["default"].use(r["a"]),e["a"]=new r["a"].Store({state:{},mutations:{},actions:{}})},a65F:function(t,e,n){"use strict";var a=n("Jf0Z"),r=n("cfIo"),i=n("KHd+"),s=Object(i["a"])(r["a"],a["a"],a["b"],!1,null,"b85c119c",null);e["a"]=s.exports},cfIo:function(t,e,n){"use strict";var a=n("RUdq");e["a"]=a["a"]},eXhg:function(t,e,n){"use strict";var a=n("CqVi"),r=n.n(a);r.a},"etR+":function(t,e,n){"use strict";var a=n("LYKQ");e["a"]=a["a"]},f23O:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("v-container",{staticClass:"grey lighten-4",attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{grow:"",xs12:""}},[n("router-view")],1)],1)],1)],1)},r=[]},gN5h:function(t,e,n){"use strict";var a=n("hef2");e["a"]=a["a"]},hef2:function(t,e,n){"use strict";e["a"]={data:()=>({valid:!0,name:"",nameRules:[t=>!!t||"Name is required",t=>t&&t.length<=10||"Name must be less than 10 characters"],email:"",emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+/.test(t)||"E-mail must be valid"],select:null,role:["Admin","Guest"],checkbox:!1}),methods:{validate(){this.$refs.form.validate()&&(this.snackbar=!0)},reset(){this.$refs.form.reset()},resetValidation(){this.$refs.form.resetValidation()}}}},jCpD:function(t,e,n){"use strict";var a=n("S/Dj");e["a"]=a["a"]},kgEK:function(t,e,n){},n71n:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{color:"amber",app:"",dense:t.custom.dense,flat:t.custom.flat,"clipped-left":t.custom.clipped}},["permanent"!==t.custom.type?n("v-toolbar-side-icon",{on:{click:t.toogleHeader}}):t._e(),t._v(" "),n("span",{staticClass:"title ml-3 mr-5"},[t._v("Radio \n\t\t"),n("span",{staticClass:"font-weight-light"},[t._v("Keep")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{"solo-inverted":"",flat:"","hide-details":"",label:"Search","prepend-inner-icon":"search"}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("refresh")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("more_vert")])],1)],1)},r=[]},oYx3:function(t,e,n){"use strict";var a=n("Kw5r"),r=n("jE9Z"),i=n("u1G+"),s=n("+CAJ"),o=n("pVsz");a["default"].use(r["a"]),e["a"]=new r["a"]({mode:"history",routes:[{path:"/",name:"login",component:o["a"]},{path:"/home",name:"home",component:i["a"]},{path:"/about/:id",name:"about",component:s["a"]}]})},pVsz:function(t,e,n){"use strict";var a=n("+V5z"),r=n("gN5h"),i=(n("eXhg"),n("KHd+")),s=Object(i["a"])(r["a"],a["a"],a["b"],!1,null,"358b12f3",null);e["a"]=s.exports},"rg/S":function(t,e,n){"use strict";e["a"]={name:"AudioItem",props:{item:{type:Object,default:()=>{}}},data:()=>({onBookmark:!1}),methods:{playAudio:function(t){t?this.$emit("selectAudio",{}):this.$emit("selectAudio",this.item)},bookmarkAudio:function(){return this.onBookmark=!this.onBookmark},openDetail:function(t){this.$router.push({path:`/about/${t}`})}}}},"u1G+":function(t,e,n){"use strict";var a=n("KPog"),r=n("etR+"),i=n("KHd+"),s=Object(i["a"])(r["a"],a["a"],a["b"],!1,null,null,null);e["a"]=s.exports},wFBt:function(t,e,n){var a=n("/naO");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("SZ7m").default;r("4978f494",a,!0,{})},yEJw:function(t,e,n){"use strict";var a=n("PQDF");n.d(e,"a",function(){return a["a"]}),n.d(e,"b",function(){return a["b"]})},"yjl+":function(t,e,n){"use strict";var a=n("J22+");n.d(e,"a",function(){return a["a"]}),n.d(e,"b",function(){return a["b"]})}},[["Vtdi","runtime~index","vendor/vendors"]]]);