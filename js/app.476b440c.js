(function(e){function t(t){for(var a,o,i=t[0],u=t[1],s=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},o={app:0},r={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0097926a":"75028c2f","chunk-1922cace":"b99cdad5","chunk-304dea77":"439f746c","chunk-4869919d":"9bef5928","chunk-37f41dab":"8b498fe6","chunk-692c8bda":"e4bb81b8","chunk-316c0973":"7af1d3a7","chunk-25f08ea2":"64a24830","chunk-35a8d303":"49b863c5","chunk-f7be96ee":"28c06b06","chunk-b8620c8c":"c9421eb8"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1922cace":1,"chunk-304dea77":1,"chunk-4869919d":1,"chunk-316c0973":1,"chunk-25f08ea2":1,"chunk-35a8d303":1,"chunk-f7be96ee":1,"chunk-b8620c8c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0097926a":"31d6cfe0","chunk-1922cace":"c28bd796","chunk-304dea77":"79acd3da","chunk-4869919d":"468ba61b","chunk-37f41dab":"31d6cfe0","chunk-692c8bda":"31d6cfe0","chunk-316c0973":"1e751994","chunk-25f08ea2":"ac5627cd","chunk-35a8d303":"bdd6334d","chunk-f7be96ee":"72041b29","chunk-b8620c8c":"13802fa8"}[e]+".css",r=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===r))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===a||l===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",p.name="ChunkLoadError",p.type=a,p.request=o,n[1](p)}r[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/pave-erp-demo/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0763":function(e,t,n){"use strict";n("8a63")},3905:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"popup-overlay"},[n("form",{staticClass:"card auth-card popup"},[n("div",{staticClass:"card-content"},[n("span",{staticClass:"card-title"},[e._v(e._s(e.popupTitle)),n("br")])]),n("div",{staticClass:"card-action btn-popup"},[n("button",{staticClass:"btn-flat white-text waves-effect waves-light auth-submit red darken-1",on:{click:[function(t){return t.preventDefault(),e.$emit("yes")},e.callToast]}},[n("i",{staticClass:"material-icons"},[e._v("check")]),e._v(" Да ")]),n("button",{staticClass:"btn-flat white-text waves-effect waves-light auth-submit blue darken-1",on:{click:function(t){return t.preventDefault(),e.$emit("no")}}},[n("i",{staticClass:"material-icons"},[e._v("clear")]),e._v(" Нет ")])])])])},o=[],r={name:"Popup",props:["popupTitle","popupToast"],methods:{callToast:function(){this.popupToast&&M.toast({html:this.popupToast})}}},c=r,i=(n("0763"),n("2877")),u=Object(i["a"])(c,a,o,!1,null,"5c973e7e",null);t["a"]=u.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=n("1dce"),r=n.n(o),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("router-view")],1)],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blue darken-1 empty-layout",attrs:{id:"blue-layout"}},[n("router-view")],1)},s=[],l={name:"EmptyLayout"},p=l,d=n("2877"),f=Object(d["a"])(p,u,s,!1,null,"4740cf10",null),h=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-main-layout",attrs:{id:"blue-layout"}},[e.popupShow?n("Popup",{attrs:{"popup-title":"Выйти?","popup-toast":"Вы вышли из системы"},on:{yes:e.exit,no:e.popupHidden}}):e._e(),n("nav",{staticClass:"navbar blue darken-1 "},[e._m(0),n("ul",{staticClass:"right hide-on-small-and-down"},[n("li",[n("button",{staticClass:"btn-flat waves-effect waves-light auth-submit white-text",on:{click:e.popupVisibility}},[n("i",{staticClass:"material-icons"},[e._v("arrow_back")]),e._v(" Выйти ")])])])]),n("ul",{staticClass:"sidenav app-sidenav open"},[n("li",[n("router-link",{staticClass:"waves-effect waves-blue pointer",attrs:{to:"/sites"}},[n("i",{staticClass:"material-icons"},[e._v("location_city")]),e._v(" Города")])],1),n("li",[n("router-link",{staticClass:"waves-effect waves-blue pointer",attrs:{to:"/employees"}},[n("i",{staticClass:"material-icons"},[e._v("group")]),e._v(" Сотрудники")])],1),n("li",[n("router-link",{staticClass:"waves-effect waves-blue pointer",attrs:{to:"/workers"}},[n("i",{staticClass:"material-icons"},[e._v("transfer_within_a_station")]),e._v(" Рабочие")])],1)]),n("main",{staticClass:"app-content"},[n("div",{staticClass:"app-page"},[n("router-view")],1)])],1)},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-left"},[n("span",{staticClass:"white-text"})])}],v=n("3905"),k={name:"MainLayout.vue",components:{Popup:v["a"]},data:function(){return{popupShow:!1}},methods:{popupVisibility:function(){this.popupShow=!0},popupHidden:function(){this.popupShow=!1},exit:function(){this.$router.push("/")}}},y=k,w=Object(d["a"])(y,m,b,!1,null,null,null),g=w.exports,_={components:{EmptyLayout:h,MainLayout:g},computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}}},C=_,E=(n("5c0b"),Object(d["a"])(C,c,i,!1,null,null,null)),P=E.exports,j=n("9483");Object(j["a"])("".concat("/pave-erp-demo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var x=n("8c4f");a["a"].use(x["a"]);var O=new x["a"]({mode:"history",base:"/pave-erp-demo/",routes:[{path:"/",name:"login",meta:{layout:"empty"},component:function(){return n.e("chunk-37f41dab").then(n.bind(null,"a55b"))}},{path:"/sites",name:"sites",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-0097926a"),n.e("chunk-4869919d")]).then(n.bind(null,"987c"))}},{path:"/sites/editor",name:"sitesEditor",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-692c8bda"),n.e("chunk-0097926a"),n.e("chunk-316c0973")]).then(n.bind(null,"cd9a"))}},{path:"/employees",name:"employees",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-0097926a"),n.e("chunk-304dea77")]).then(n.bind(null,"cb29"))}},{path:"/employees/editor",name:"employeesEditor",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-692c8bda"),n.e("chunk-f7be96ee")]).then(n.bind(null,"fcdf"))}},{path:"/workers",name:"workers",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-0097926a"),n.e("chunk-1922cace")]).then(n.bind(null,"0996"))}},{path:"/workers/editor",name:"workersEditor",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-692c8bda"),n.e("chunk-25f08ea2")]).then(n.bind(null,"4728"))}},{path:"/workers/search",name:"workersSearch",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-692c8bda"),n.e("chunk-35a8d303")]).then(n.bind(null,"d8e2"))}},{path:"/editor",name:"editor",meta:{layout:"main"},component:function(){return n.e("chunk-b8620c8c").then(n.bind(null,"bcd3"))}}]}),S=O,T=n("2f62");a["a"].use(T["a"]);var $=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("6885"),n("8266");a["a"].config.productionTip=!1,a["a"].use(r.a),new a["a"]({router:S,store:$,render:function(e){return e(P)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"8a63":function(e,t,n){},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.476b440c.js.map