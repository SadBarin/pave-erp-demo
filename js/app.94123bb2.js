(function(e){function t(t){for(var a,o,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1f13b2b2":"d17a8051","chunk-2d0cc274":"9f2b2656","chunk-2121cbe6":"bec64cdf","chunk-2d207b69":"3d878572","chunk-2d2095db":"38ed5be3","chunk-2d217749":"5359f47d","chunk-3883ccca":"85c403f5","chunk-5b8d0546":"666dd7ed","chunk-79df91d3":"5e7fd46d","chunk-2d0d059b":"32b3ce45","chunk-2d0d326a":"28dc2da1","chunk-2d0db434":"1f202176","chunk-2d21624f":"1c1d54ce","chunk-2d22c6d6":"6ac8540f","chunk-38bcc550":"f087bfb6","chunk-3a56746f":"3b94aa2b","chunk-452d4d1a":"e3e30faa","chunk-4ad1d93f":"0f472b2b","chunk-4ba80777":"aadcdbe6","chunk-6119e2aa":"1c37c652","chunk-84e169d6":"40579f76","chunk-9810e8f8":"b9034493","chunk-a503ba9a":"28a1fb46"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-2121cbe6":1,"chunk-3883ccca":1,"chunk-5b8d0546":1,"chunk-79df91d3":1,"chunk-38bcc550":1,"chunk-452d4d1a":1,"chunk-4ba80777":1,"chunk-6119e2aa":1,"chunk-a503ba9a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1f13b2b2":"31d6cfe0","chunk-2d0cc274":"31d6cfe0","chunk-2121cbe6":"73a36fa2","chunk-2d207b69":"31d6cfe0","chunk-2d2095db":"31d6cfe0","chunk-2d217749":"31d6cfe0","chunk-3883ccca":"b1152547","chunk-5b8d0546":"571b6826","chunk-79df91d3":"1936518d","chunk-2d0d059b":"31d6cfe0","chunk-2d0d326a":"31d6cfe0","chunk-2d0db434":"31d6cfe0","chunk-2d21624f":"31d6cfe0","chunk-2d22c6d6":"31d6cfe0","chunk-38bcc550":"37913452","chunk-3a56746f":"31d6cfe0","chunk-452d4d1a":"37913452","chunk-4ad1d93f":"31d6cfe0","chunk-4ba80777":"ee3ef69f","chunk-6119e2aa":"f097be80","chunk-84e169d6":"31d6cfe0","chunk-9810e8f8":"31d6cfe0","chunk-a503ba9a":"fb42d641"}[e]+".css",r=i.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===r))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===a||l===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/pave-erp-demo/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05f9":function(e,t,n){},"0f9a":function(e,t,n){"use strict";n("05f9")},"46a2":function(e,t,n){"use strict";n("f5ac")},5614:function(e,t,n){"use strict";t["a"]={data:function(){return{popupShow:!1}},methods:{popupVisibility:function(){this.popupShow=!0},popupHidden:function(){this.popupShow=!1}}}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("router-view")],1)],1)},r=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",[n("div",{staticClass:"empty-layout",attrs:{id:"blue-layout"}},[n("router-view")],1)])},u=[],i={name:"EmptyLayout"},s=i,l=(n("46a2"),n("2877")),d=Object(l["a"])(s,c,u,!1,null,"318dfdcc",null),p=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",[n("div",{staticClass:"app-main-layout"},[e.popupShow?n("Popup",{on:{yes:function(t){return e.exit()},no:e.popupHidden},scopedSlots:e._u([{key:"title-popup",fn:function(){return[e._v(" Выйти? ")]},proxy:!0}],null,!1,1121218431)}):e._e(),n("div",{staticClass:"sidenav-menu"},[n("div",{staticClass:"navbar-left"},[n("button",{staticClass:"btn transparent blue-text text-darken-1",on:{click:function(t){t.preventDefault(),e.isOpen=!e.isOpen}}},[n("i",{staticClass:"material-icons"},[e._v("menu")])])])]),n("div",{staticClass:"sidenav app-sidenav",class:{open:e.isOpen}},[n("div",{staticClass:"sidenav-content sidenav-top"},[n("ul",[n("li",[n("router-link",{staticClass:"pointer",attrs:{to:"/workers"}},[n("i",{staticClass:"material-icons"},[e._v("transfer_within_a_station")]),e._v(" Рабочие ")])],1),n("li",[n("router-link",{staticClass:"pointer",attrs:{to:"/customers"}},[n("i",{staticClass:"material-icons"},[e._v("business_center")]),e._v(" Клиенты ")])],1),n("li",[n("router-link",{staticClass:"pointer",attrs:{to:"/settings"}},[n("i",{staticClass:"material-icons"},[e._v("settings")]),e._v(" Настройки ")])],1)])]),n("div",{staticClass:"sidenav-content sidenav-bottom"},[n("button",{staticClass:"btn transparent blue-text darken-1",on:{click:e.popupVisibility}},[n("i",{staticClass:"material-icons"},[e._v("exit_to_app")]),e._v(" Выйти ")])])]),n("main",{staticClass:"app-content"},[n("div",{staticClass:"app-page",class:{full:!e.isOpen}},[n("router-view")],1)])],1)])},f=[],h=(n("96cf"),n("1da1")),b=n("5530"),k=n("5614"),v=n("260b"),y=n("2f62"),g={name:"MainLayout.vue",mixins:[k["a"]],data:function(){return{isOpen:!0}},computed:Object(b["a"])({},Object(y["c"])(["authEmployee"])),methods:{exit:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:return t.next=4,e.$router.push("/");case 4:case"end":return t.stop()}}),t)})))()}},mounted:function(){console.log("В систему вошёл: ",v["a"].auth()),null===v["a"].auth().currentUser&&(this.$router.push("/"),M.toast({html:"Войдите в систему для продолжения!"}))}},S=g,w=(n("87ff"),Object(l["a"])(S,m,f,!1,null,"0fda3fb9",null)),_=w.exports,E={components:{EmptyLayout:p,MainLayout:_},computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}}},O=E,R=(n("5c0b"),Object(l["a"])(O,o,r,!1,null,null,null)),C=R.exports,T=(n("d3b7"),n("8c4f"));a["a"].use(T["a"]);var x=new T["a"]({mode:"hash",base:"/pave-erp-demo/",routes:[{path:"/",name:"login",meta:{layout:"empty"},component:function(){return n.e("chunk-a503ba9a").then(n.bind(null,"1874"))}},{path:"/sites",name:"sites",meta:{layout:"main"},component:function(){return n.e("chunk-4ba80777").then(n.bind(null,"ad64"))}},{path:"/sites/edit/city:id",name:"cityEdit",meta:{layout:"main"},component:function(){return n.e("chunk-2d22c6d6").then(n.bind(null,"f2d8"))}},{path:"/employees",name:"employees",meta:{layout:"main"},component:function(){return n.e("chunk-3a56746f").then(n.bind(null,"b445"))}},{path:"/employees/edit/employee:id",name:"employeeEdit",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-2d0cc274"),n.e("chunk-3883ccca")]).then(n.bind(null,"e0e0"))}},{path:"/employees/history/employee:id",name:"employeeHistory",meta:{layout:"main"},component:function(){return n.e("chunk-2d0d326a").then(n.bind(null,"5c17"))}},{path:"/workers",name:"workers",meta:{layout:"main"},component:function(){return n.e("chunk-84e169d6").then(n.bind(null,"45c3"))}},{path:"/workers/edit/worker:id",name:"workerEdit",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-2d0cc274"),n.e("chunk-79df91d3")]).then(n.bind(null,"cd05"))}},{path:"/workers/search",name:"workersSearch",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-2d0cc274"),n.e("chunk-5b8d0546")]).then(n.bind(null,"f951"))}},{path:"/workers/about/worker:id",name:"workerAbout",meta:{layout:"main"},component:function(){return n.e("chunk-38bcc550").then(n.bind(null,"1e8f"))}},{path:"/workers/history/worker:id",name:"workerHistory",meta:{layout:"main"},component:function(){return n.e("chunk-452d4d1a").then(n.bind(null,"f8c5"))}},{path:"/workers/calendar/worker:id",name:"workerCalendar",meta:{layout:"main"},component:function(){return n.e("chunk-6119e2aa").then(n.bind(null,"4ffc"))}},{path:"/settings",name:"settings",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-2d0cc274"),n.e("chunk-2121cbe6")]).then(n.bind(null,"cb88"))}},{path:"/customers",name:"customers",meta:{layout:"main"},component:function(){return n.e("chunk-9810e8f8").then(n.bind(null,"48a5"))}},{path:"/customers/about/customer:id",name:"customerAbout",meta:{layout:"main"},component:function(){return n.e("chunk-2d0d059b").then(n.bind(null,"6836"))}},{path:"/customers/edit/customer:id",name:"customerEdit",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-2d0cc274"),n.e("chunk-2d207b69")]).then(n.bind(null,"a268"))}},{path:"/customers/subdivisions/customer:id",name:"customerSubdivisions",meta:{layout:"main"},component:function(){return n.e("chunk-4ad1d93f").then(n.bind(null,"b13a"))}},{path:"/customers/subdivisions/customer:id/about/subdivision:subId",name:"customerAboutSubdivision",meta:{layout:"main"},component:function(){return n.e("chunk-2d0db434").then(n.bind(null,"6eb1"))}},{path:"/customers/subdivisions/customer:id/edit/subdivision:subId",name:"customerEditSubdivision",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-2d0cc274"),n.e("chunk-2d2095db")]).then(n.bind(null,"a96c"))}},{path:"/customers/subdivisions/customer:id/subdivision:subId/employees",name:"subdivisionEmployees",meta:{layout:"main"},component:function(){return n.e("chunk-1f13b2b2").then(n.bind(null,"2e68"))}},{path:"/customers/subdivisions/customer:id/subdivision:subId/employees/about/employee:empId",name:"subdivisionAboutEmployee",meta:{layout:"main"},component:function(){return n.e("chunk-2d21624f").then(n.bind(null,"c0e1"))}},{path:"/customers/subdivisions/customer:id/subdivision:subId/employees/edit/employee:empId",name:"subdivisionEditEmployee",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-2d0cc274"),n.e("chunk-2d217749")]).then(n.bind(null,"c798"))}}]}),I=x,A={state:{sites:{}},getters:{sites:function(e){return e.sites}},mutations:{SET_SITES_FROM_LOCAL_STORAGE:function(e){e.sites=JSON.parse(localStorage.getItem("sites"))},SET_SITES_FROM_SERVER:function(e){var t=v["a"].database().ref("/sites/");t.on("value",(function(t){localStorage.setItem("sites",JSON.stringify(t.val())),e.sites=JSON.parse(localStorage.getItem("sites"))}))}}},P={state:{employees:{}},getters:{employees:function(e){return e.employees},authEmployee:function(e){return e.employees[v["a"].auth().currentUser.uid]}},mutations:{SET_EMPLOYEES_FROM_LOCAL_STORAGE:function(e){e.employees=JSON.parse(localStorage.getItem("employees"))},SET_EMPLOYEES_FROM_SERVER:function(e){var t=v["a"].database().ref("/employees/");t.on("value",(function(t){localStorage.setItem("employees",JSON.stringify(t.val())),e.employees=JSON.parse(localStorage.getItem("employees"))}))}},actions:{registerEmployees:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function n(){var a,o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=t.email,o=t.password,n.prev=2,n.next=5,v["a"].auth().createUserWithEmailAndPassword(a,o);case 5:return r=n.sent,n.abrupt("return",r.user.uid);case 9:n.prev=9,n.t0=n["catch"](2),M.toast({html:"Сотрудник уже существует!"});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()}}},j={state:{workers:{}},getters:{workers:function(e){return e.workers}},mutations:{SET_WORKERS_FROM_LOCAL_STORAGE:function(e){e.workers=JSON.parse(localStorage.getItem("workers"))},SET_WORKERS_FROM_SERVER:function(e){var t=v["a"].database().ref("/workers/");t.on("value",(function(t){localStorage.setItem("workers",JSON.stringify(t.val())),e.workers=JSON.parse(localStorage.getItem("workers"))}))}}},N={state:{customers:{}},getters:{customers:function(e){return e.customers}},mutations:{SET_CUSTOMERS_FROM_LOCAL_STORAGE:function(e){e.customers=JSON.parse(localStorage.getItem("customers"))},SET_CUSTOMERS_FROM_SERVER:function(e){var t=v["a"].database().ref("/customers/");t.on("value",(function(t){localStorage.setItem("customers",JSON.stringify(t.val())),e.customers=JSON.parse(localStorage.getItem("customers"))}))}}};a["a"].use(y["a"]);var L=new y["a"].Store({state:{},getters:{},mutations:{},actions:{login:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function n(){var a,o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.dispatch,a=e.commit,o=t.email,r=t.password,n.prev=2,n.next=5,v["a"].auth().signInWithEmailAndPassword(o,r);case 5:a("SET_WORKERS_FROM_SERVER"),a("SET_CUSTOMERS_FROM_SERVER"),a("SET_SITES_FROM_SERVER"),a("SET_EMPLOYEES_FROM_SERVER"),n.next=13;break;case 11:n.prev=11,n.t0=n["catch"](2);case 13:case"end":return n.stop()}}),n,null,[[2,11]])})))()},logout:function(){return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v["a"].auth().signOut();case 2:case"end":return e.stop()}}),e)})))()}},modules:[A,P,j,N]}),F=n("9483");Object(F["a"])("".concat("/pave-erp-demo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var J,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"popup-overlay flex-center"},[n("form",{staticClass:"card auth-card popup"},[n("div",{staticClass:"card-content flex-column-center"},[n("h4",{staticClass:"card-title"},[e._t("title-popup")],2),n("p",[e._t("text-info-popup")],2)]),n("div",{staticClass:"card-action btns-popup flex-between-center"},[n("button",{staticClass:"btn-flat right-margin-little white-text btn-hover blue darken-1",on:{click:function(t){t.preventDefault(),e.$emit("yes"),e.callToast()}}},[n("i",{staticClass:"material-icons"},[e._v("check")]),e._v(" Да ")]),n("button",{staticClass:"btn-flat white-text waves-effect btn-hover blue darken-1",on:{click:function(t){return t.preventDefault(),e.$emit("no")}}},[n("i",{staticClass:"material-icons"},[e._v("clear")]),e._v(" Нет ")])])])])},$=[],U={name:"Popup",props:{popupToast:String},methods:{callToast:function(){this.popupToast&&M.toast({html:this.popupToast})}}},B=U,D=(n("0f9a"),Object(l["a"])(B,V,$,!1,null,"7f4b7162",null)),H=D.exports,K=n("dc21"),W=n("688d"),G=n("9e21"),q=n.n(G),z=(n("6885"),n("8266"),n("1dce")),Y=n.n(z),Q=n("3a60"),Z=n.n(Q);n("ea7b"),n("66ce");a["a"].component("Popup",H),a["a"].config.productionTip=!1,a["a"].use(Y.a,Z.a,q.a,{configuration:{cloudName:"db6qzfvbw"}}),K["a"]({Vue:a["a"],dsn:"https://6dad949ef73644a191805fba31018ebf@o505169.ingest.sentry.io/5593013",autoSessionTracking:!0,environment:"production",integrations:[new W["a"].BrowserTracing],tracesSampleRate:1}),v["a"].initializeApp({apiKey:"AIzaSyABOUNJ-twAF_dgCh0Cns3jFeZihOIHQU8",authDomain:"pave0erp.firebaseapp.com",projectId:"pave0erp",storageBucket:"pave0erp.appspot.com",messagingSenderId:"1073821009185",appId:"1:1073821009185:web:c12b166d1736255b872a60",measurementId:"G-6PK395BWTR"}),v["a"].auth().onAuthStateChanged((function(){J||(J=new a["a"]({router:I,store:L,render:function(e){return e(C)}}).$mount("#app"))}))},"5c0b":function(e,t,n){"use strict";n("9c0c")},"72fa":function(e,t,n){},"87ff":function(e,t,n){"use strict";n("72fa")},"9c0c":function(e,t,n){},f5ac:function(e,t,n){}});
//# sourceMappingURL=app.94123bb2.js.map