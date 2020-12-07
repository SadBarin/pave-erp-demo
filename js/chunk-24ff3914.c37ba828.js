(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24ff3914"],{"0903":function(t,e,r){},"0996":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"page-title"},[r("div",{staticClass:"title-container"},[r("h3",[t._v("Список рабочих")]),r("div",{staticClass:"title-btn-container"},[r("button",{staticClass:"btn-floating btn-title blue darken-1 waves-effect waves-circle waves-light",attrs:{onclick:"M.toast({html: 'Рабочие обновлены'})"},on:{click:function(e){return t.updateCollection("workers")}}},[r("i",{staticClass:"material-icons"},[t._v("autorenew")])]),r("router-link",{staticClass:"btn-floating btn-title blue darken-1 waves-effect waves-circle waves-light",attrs:{to:"/workers/search"}},[r("i",{staticClass:"material-icons"},[t._v("search")])])],1)]),r("AddCardWorkers",{on:{"add-worker":t.addWorker}})],1),r("div",[t.workers.length?r("ListWorkers",{attrs:{workers:t.workers},on:{"remove-worker":t.removeWorker}}):r("div",{staticClass:"empty-list"},[r("h5",{staticClass:"empty-list-title"},[r("i",{staticClass:"material-icons"},[t._v("mood_bad")]),t._v(" Рабочих не осталось!")]),r("p",[t._v("Добавьте рабочего, чтобы начать работать над ним.")])])],1)])},n=[],o=(r("4de4"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"button-container",on:{submit:function(e){return e.preventDefault(),t.submitWorkers(e)}}},[r("div",{staticClass:"input-field input-field-blue"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.number,expression:"number",modifiers:{trim:!0}}],staticClass:"input-add",class:{invalid:t.$v.number.$dirty&&!t.$v.number.required||t.$v.number.$dirty&&!t.$v.number.numeric||t.$v.number.$dirty&&!t.$v.number.minLength},attrs:{type:"text",id:"worker"},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),r("label",{attrs:{for:"worker"}},[t._v("Номер рабочего")]),t.$v.number.$dirty&&!t.$v.number.numeric||t.$v.number.$dirty&&!t.$v.number.required?r("small",{staticClass:"helper-text invalid"},[t._v(" Введите номер рабочего ")]):t.$v.number.$dirty&&!t.$v.number.minLength?r("small",{staticClass:"helper-text invalid"},[t._v(" Номер должен содержать не менее "+t._s(t.$v.number.$params.minLength.min)+" символов. ")]):t.coincidence?r("small",{staticClass:"helper-text invalid"},[t._v(" Номер уже есть ")]):t._e()]),t._m(0)])}),s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"btn-flat waves-effect waves-light auth-submit blue darken-1 white-text",attrs:{type:"submit"}},[r("i",{staticClass:"material-icons"},[t._v("add")]),t._v(" Добавить рабочего ")])}],a=(r("d3b7"),r("25f0"),r("498a"),r("b85c")),c=r("b5ae"),u={name:"AddCardSWorkers",data:function(){return{number:"",coincidence:!1,workers:[{}]}},validations:{number:{required:c["required"],numeric:c["numeric"],minLength:Object(c["minLength"])(7)}},methods:{submitWorkers:function(){if(localStorage.getItem("workers"))try{this.workers=JSON.parse(localStorage.getItem("workers"))}catch(n){localStorage.removeItem("workers")}if(this.$v.$invalid)this.$v.$touch();else{var t,e=Object(a["a"])(this.workers);try{for(e.s();!(t=e.n()).done;){var r=t.value;if(void 0!==r.mobilePhone){if(r.mobilePhone.toString().toLowerCase()===this.number.toString().toLowerCase()){this.coincidence=!0;break}this.coincidence=!1}}}catch(o){e.e(o)}finally{e.f()}if(this.number.trim()&&!this.coincidence){var i={id:Date.now(),name:"Новый",surname:"Рабочий",patronymic:"",accountNumber:"",number:Date.now(),nameCard:"",surnameCard:"",patronymicCard:"",accountNumberCard:"",bank:"",birthday:"",sex:"",nationality:"",passportID:"",passportDate:"",passportIssued:"",registration:"",address:"",homePhone:"",mobilePhone:this.number,medicalBook:"",education:"",university:"",previousWork:"",reasonComing:"",professions:"",nightShift:"",checkMVD:"",dateInterview:"",uniform:"",fired:"",edited:!1};this.$emit("add-worker",i),this.number=""}}}}},l=u,d=(r("6cd6"),r("2877")),f=Object(d["a"])(l,o,s,!1,null,"f8031a6a",null),m=f.exports,v=r("7da6"),p={name:"Workers",components:{ListWorkers:v["a"],AddCardWorkers:m},data:function(){return{workers:[],updateTimeout:6e4}},methods:{removeWorker:function(t){this.workers=this.workers.filter((function(e){return e.id!==t})),this.saveCollection(this.workers,"workers")},addWorker:function(t){this.workers.push(t),this.saveCollection(this.workers,"workers")},saveCollection:function(t,e){var r=JSON.stringify(t);localStorage.setItem(e,r)},updateCollection:function(t){if(localStorage.getItem(t))try{this.workers=JSON.parse(localStorage.getItem(t))}catch(e){localStorage.removeItem(t)}}},mounted:function(){var t=this;this.updateCollection("workers"),setInterval((function(){return t.updateCollection("workers")}),this.updateTimeout)}},h=p,k=Object(d["a"])(h,i,n,!1,null,null,null);e["default"]=k.exports},2650:function(t,e,r){"use strict";r("28ad")},"28ad":function(t,e,r){},"498a":function(t,e,r){"use strict";var i=r("23e7"),n=r("58a8").trim,o=r("c8d2");i({target:"String",proto:!0,forced:o("trim")},{trim:function(){return n(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var i=r("1d80"),n=r("5899"),o="["+n+"]",s=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),c=function(t){return function(e){var r=String(i(e));return 1&t&&(r=r.replace(s,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},"65f0":function(t,e,r){var i=r("861d"),n=r("e8b5"),o=r("b622"),s=o("species");t.exports=function(t,e){var r;return n(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?i(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6cd6":function(t,e,r){"use strict";r("0903")},"702c":function(t,e,r){},7156:function(t,e,r){var i=r("861d"),n=r("d2bb");t.exports=function(t,e,r){var o,s;return n&&"function"==typeof(o=e.constructor)&&o!==r&&i(s=o.prototype)&&s!==r.prototype&&n(t,s),t}},"7da6":function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"workers_section"},t._l(t.workers,(function(e){return r("CardWorkers",{key:e.id,attrs:{worker:e},on:{"remove-worker":t.removeWorker}})})),1)},n=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[t.popupShow?r("Popup",{attrs:{"popup-title":"Удалить рабочего?","popup-toast":"Рабочий был удалён"},on:{yes:function(e){return t.$emit("remove-worker",t.worker.id)},no:t.popupHidden}}):t._e(),r("div",{staticClass:"col s12"},[r("div",{staticClass:"card-panel blue darken-1 white-text"},[r("div",{staticClass:"card-content dark-text card-line"},[r("div",{staticClass:"info-container"},[r("h6",[r("i",{staticClass:"material-icons"},[t._v("face")]),t._v(" Рабочий: "+t._s(t.worker.name)+" "+t._s(t.worker.surname))]),r("h6",[r("i",{staticClass:"material-icons"},[t._v("phone")]),t._v(" Номер: "+t._s(t.worker.mobilePhone))])]),r("div",{staticClass:"button-container"},[t.worker.edited?t._e():r("button",{staticClass:"btn-flat waves-effect waves-light auth-submit white-text",on:{click:t.editedWorkerStatus}},[r("i",{staticClass:"material-icons"},[t._v("create")]),t._v(" Редактировать ")]),t.worker.edited?r("router-link",{staticClass:"btn-flat waves-effect waves-light auth-submit blue-text text-lighten-3",attrs:{to:"/workers/editor"}},[r("i",{staticClass:"material-icons"},[t._v("border_color")]),t._v(" Редактировать принудительно ")]):t._e(),t.worker.edited?t._e():r("button",{staticClass:"btn-flat waves-effect waves-red auth-submit white-text",on:{click:function(e){return e.preventDefault(),t.popupVisibility(e)}}},[r("i",{staticClass:"material-icons"},[t._v("delete")]),t._v(" Удалить ")])],1)])])])],1)},s=[],a=(r("c740"),r("a9e3"),r("3905")),c={name:"CardWorkers",components:{Popup:a["a"]},props:{worker:{type:Object},index:Number},data:function(){return{workers:[],popupShow:!1}},methods:{popupVisibility:function(){this.popupShow=!0},popupHidden:function(){this.popupShow=!1},editedWorkerStatus:function(){var t=this;if(localStorage.getItem("workers"))try{this.workers=JSON.parse(localStorage.getItem("workers"))}catch(r){localStorage.removeItem("workers")}var e=this.workers.findIndex((function(e){return e.id===t.worker.id}));this.workers[e].edited=!0,this.saveWorkers(),this.$router.push("/workers/editor")},saveWorkers:function(){var t=JSON.stringify(this.workers);localStorage.setItem("workers",t)}},mounted:function(){if(localStorage.getItem("workers"))try{this.workers=JSON.parse(localStorage.getItem("workers"))}catch(t){localStorage.removeItem("workers")}}},u=c,l=(r("daa5"),r("2877")),d=Object(l["a"])(u,o,s,!1,null,"43300c9e",null),f=d.exports,m={name:"ListWorkers",components:{CardWorkers:f},methods:{removeWorker:function(t){this.$emit("remove-worker",t)}},props:["workers"]},v=m,p=(r("2650"),Object(l["a"])(v,i,n,!1,null,"1ebfd901",null));e["a"]=p.exports},a9e3:function(t,e,r){"use strict";var i=r("83ab"),n=r("da84"),o=r("94ca"),s=r("6eeb"),a=r("5135"),c=r("c6b6"),u=r("7156"),l=r("c04e"),d=r("d039"),f=r("7c73"),m=r("241c").f,v=r("06cf").f,p=r("9bf2").f,h=r("58a8").trim,k="Number",b=n[k],w=b.prototype,g=c(f(w))==k,C=function(t){var e,r,i,n,o,s,a,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=h(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+u}for(o=u.slice(2),s=o.length,a=0;a<s;a++)if(c=o.charCodeAt(a),c<48||c>n)return NaN;return parseInt(o,i)}return+u};if(o(k,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var S,_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(g?d((function(){w.valueOf.call(r)})):c(r)!=k)?u(new b(C(e)),r,_):C(e)},y=i?m(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;y.length>I;I++)a(b,S=y[I])&&!a(_,S)&&p(_,S,v(b,S));_.prototype=w,w.constructor=_,s(n,k,_)}},ae40:function(t,e,r){var i=r("83ab"),n=r("d039"),o=r("5135"),s=Object.defineProperty,a={},c=function(t){throw t};t.exports=function(t,e){if(o(a,t))return a[t];e||(e={});var r=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,l=o(e,0)?e[0]:c,d=o(e,1)?e[1]:void 0;return a[t]=!!r&&!n((function(){if(u&&!i)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,l,d)}))}},b727:function(t,e,r){var i=r("0366"),n=r("44ad"),o=r("7b0b"),s=r("50c4"),a=r("65f0"),c=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d;return function(m,v,p,h){for(var k,b,w=o(m),g=n(w),C=i(v,p,3),S=s(g.length),_=0,y=h||a,I=e?y(m,S):r?y(m,0):void 0;S>_;_++)if((f||_ in g)&&(k=g[_],b=C(k,_,w),t))if(e)I[_]=b;else if(b)switch(t){case 3:return!0;case 5:return k;case 6:return _;case 2:c.call(I,k)}else if(l)return!1;return d?-1:u||l?l:I}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c8d2:function(t,e,r){var i=r("d039"),n=r("5899"),o="​᠎";t.exports=function(t){return i((function(){return!!n[t]()||o[t]()!=o||n[t].name!==t}))}},daa5:function(t,e,r){"use strict";r("702c")},e8b5:function(t,e,r){var i=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-24ff3914.c37ba828.js.map