(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a65cd2fe"],{"159b":function(t,e,i){var s=i("da84"),a=i("fdbc"),n=i("17c2"),r=i("9112");for(var c in a){var o=s[c],l=o&&o.prototype;if(l&&l.forEach!==n)try{r(l,"forEach",n)}catch(u){l.forEach=n}}},"17c2":function(t,e,i){"use strict";var s=i("b727").forEach,a=i("a640"),n=i("ae40"),r=a("forEach"),c=n("forEach");t.exports=r&&c?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,i){"use strict";var s=i("23e7"),a=i("17c2");s({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"498a":function(t,e,i){"use strict";var s=i("23e7"),a=i("58a8").trim,n=i("c8d2");s({target:"String",proto:!0,forced:n("trim")},{trim:function(){return a(this)}})},"504e":function(t,e,i){"use strict";i("7857")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var s=i("1d80"),a=i("5899"),n="["+a+"]",r=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),o=function(t){return function(e){var i=String(s(e));return 1&t&&(i=i.replace(r,"")),2&t&&(i=i.replace(c,"")),i}};t.exports={start:o(1),end:o(2),trim:o(3)}},"65f0":function(t,e,i){var s=i("861d"),a=i("e8b5"),n=i("b622"),r=n("species");t.exports=function(t,e){var i;return a(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!a(i.prototype)?s(i)&&(i=i[r],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},7156:function(t,e,i){var s=i("861d"),a=i("d2bb");t.exports=function(t,e,i){var n,r;return a&&"function"==typeof(n=e.constructor)&&n!==i&&s(r=n.prototype)&&r!==i.prototype&&a(t,r),t}},7322:function(t,e,i){},7857:function(t,e,i){},8370:function(t,e,i){},"987c":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-page"},[i("div",{staticClass:"page-title"},[i("div",{staticClass:"title-container"},[i("h3",[t._v("Список городов")]),i("div",{staticClass:"title-btn-container"},[i("button",{staticClass:"btn-floating btn-title blue darken-2 waves-effect waves-circle waves-light",attrs:{onclick:"M.toast({html: 'Города обновлены'})"},on:{click:function(e){return t.updateCollection("sites")}}},[i("i",{staticClass:"material-icons"},[t._v("autorenew")])])])]),i("AddCardSites",{on:{"add-city":t.addCity}})],1),i("div",[t.sites.length?i("ListSites",{attrs:{sites:t.sites},on:{"remove-city":t.removeCity}}):i("div",{staticClass:"empty-list"},[i("h5",{staticClass:"empty-list-title"},[i("i",{staticClass:"material-icons"},[t._v("mood_bad")]),t._v(" Городов не осталось!")]),i("p",[t._v("Добавьте город, чтобы начать работать над ним.")])])],1)])},a=[],n=(i("4de4"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"button-container",on:{submit:function(e){return e.preventDefault(),t.submitSites(e)}}},[i("div",{staticClass:"input-field input-field-blue input-field-add"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.cityName,expression:"cityName",modifiers:{trim:!0}}],staticClass:"input-add",class:{invalid:t.$v.cityName.$dirty&&!t.$v.cityName.required||t.$v.cityName.$dirty&&!t.$v.cityName.minLength},attrs:{type:"text",id:"city"},domProps:{value:t.cityName},on:{input:function(e){e.target.composing||(t.cityName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{attrs:{for:"city"}},[t._v("Город")]),t.$v.cityName.$dirty&&!t.$v.cityName.required?i("small",{staticClass:"helper-text invalid"},[t._v(" Введите город ")]):t.$v.cityName.$dirty&&!t.$v.cityName.minLength?i("small",{staticClass:"helper-text invalid"},[t._v(" Город должен содержать не менее "+t._s(t.$v.cityName.$params.minLength.min)+" символов ")]):t.coincidence?i("small",{staticClass:"helper-text invalid"},[t._v(" Город уже есть ")]):t._e()]),t._m(0)])}),r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"btn-flat waves-effect waves-light auth-submit blue darken-2 white-text",attrs:{type:"submit"}},[i("i",{staticClass:"material-icons"},[t._v("add")]),t._v(" Добавить город ")])}],c=(i("d3b7"),i("25f0"),i("498a"),i("b85c")),o=i("b5ae"),l={name:"AddCardSites",data:function(){return{cityName:"",coincidence:!1,sites:[{}]}},validations:{cityName:{required:o["required"],minLength:Object(o["minLength"])(2)}},methods:{submitSites:function(){if(localStorage.getItem("sites"))try{this.sites=JSON.parse(localStorage.getItem("sites"))}catch(a){localStorage.removeItem("sites")}if(this.$v.$invalid)this.$v.$touch();else{var t,e=Object(c["a"])(this.sites);try{for(e.s();!(t=e.n()).done;){var i=t.value;if(void 0!==i.cityName){if(i.cityName.toString().toLowerCase()===this.cityName.toString().toLowerCase()){this.coincidence=!0;break}this.coincidence=!1}}}catch(n){e.e(n)}finally{e.f()}if(this.cityName.trim()&&!this.coincidence){this.cityName=this.cityName[0].toUpperCase()+this.cityName.substring(1);var s={id:Date.now(),cityName:this.cityName,employees:0,edited:!1};this.$emit("add-city",s),this.cityName=""}}}}},u=l,d=(i("b80a"),i("2877")),f=Object(d["a"])(u,n,r,!1,null,"242a758c",null),m=f.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",t._l(t.sites,(function(e){return i("CardSites",{key:e.id,attrs:{city:e},on:{"remove-city":t.removeCity}})})),1)},v=[],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[t.popupShow?i("Popup",{attrs:{"popup-title":"Удалить город?","popup-toast":"Город был удалён"},on:{yes:function(e){return t.$emit("remove-city",t.city.id)},no:t.popupHidden}}):t._e(),i("div",{staticClass:"col s12"},[i("div",{staticClass:"card-panel blue darken-1 white-text"},[i("div",{staticClass:"card-content dark-text card-line"},[i("div",{staticClass:"info-container"},[i("h6",[i("i",{staticClass:"material-icons"},[t._v("location_city")]),t._v(" Город: "+t._s(t.city.cityName))]),i("h6",[i("i",{staticClass:"material-icons"},[t._v("group")]),t._v(" Количество сотрудников: "+t._s(t.city.employees))]),t.city.edited?i("p",{staticClass:"card-report"},[i("i",{staticClass:"material-icons"},[t._v("report")]),t._v(" Карточка сейчас редактируется другим сотрудником ")]):t._e()]),i("div",{staticClass:"button-container"},[t.city.edited?t._e():i("button",{staticClass:"btn-flat blue darken-2 waves-effect waves-light auth-submit white-text",on:{click:t.editedCityStatus}},[i("i",{staticClass:"material-icons"},[t._v("create")]),t._v(" Редактировать ")]),t.city.edited?i("router-link",{staticClass:"btn-flat blue darken-2 waves-effect waves-light auth-submit blue-text text-lighten-3",attrs:{to:"/sites/editor"}},[i("i",{staticClass:"material-icons"},[t._v("border_color")]),t._v(" Редактировать принудительно ")]):t._e(),t.city.edited?t._e():i("button",{staticClass:"btn-flat blue darken-2 waves-effect waves-light auth-submit white-text",on:{click:t.popupVisibility}},[i("i",{staticClass:"material-icons"},[t._v("delete")]),t._v(" Удалить ")])],1)])])])],1)},y=[],S=(i("c740"),i("4160"),i("a9e3"),i("159b"),i("3905")),b={name:"CardSites",components:{Popup:S["a"]},props:{city:{type:Object},index:Number},data:function(){return{sites:[],employees:[],popupShow:!1,countEmployees:0}},methods:{popupVisibility:function(){this.popupShow=!0},popupHidden:function(){this.popupShow=!1},editedCityStatus:function(){var t=this;if(localStorage.getItem("sites"))try{this.sites=JSON.parse(localStorage.getItem("sites"))}catch(i){localStorage.removeItem("sites")}var e=this.sites.findIndex((function(e){return e.id===t.city.id}));this.sites[e].edited=!0,this.saveSites(),this.$router.push("/sites/editor")},amountEmployees:function(){var t=this;try{var e=this.sites.findIndex((function(e){return e.id===t.city.id}));this.employees.forEach((function(i){i.city===t.sites[e].cityName&&t.countEmployees++})),this.sites[e].employees=this.countEmployees}catch(i){}this.saveSites()},saveSites:function(){var t=JSON.stringify(this.sites);localStorage.setItem("sites",t)}},mounted:function(){if(localStorage.getItem("sites"))try{this.sites=JSON.parse(localStorage.getItem("sites"))}catch(t){localStorage.removeItem("sites")}if(localStorage.getItem("employees"))try{this.employees=JSON.parse(localStorage.getItem("employees"))}catch(t){localStorage.removeItem("employees")}this.amountEmployees()}},g=b,C=(i("a628"),Object(d["a"])(g,h,y,!1,null,"a605ba4e",null)),N=C.exports,_={name:"ListSites",components:{CardSites:N},methods:{removeCity:function(t){this.$emit("remove-city",t)}},props:["sites"]},I=_,L=(i("504e"),Object(d["a"])(I,p,v,!1,null,"24e285e9",null)),E=L.exports,w={name:"Sites",components:{ListSites:E,AddCardSites:m},data:function(){return{sites:[{id:1,cityName:"Самара",employees:0,edited:!1},{id:2,cityName:"Казань",employees:0,edited:!1},{id:3,cityName:"Москва",employees:0,edited:!1},{id:4,cityName:"Ульяновск",employees:0,edited:!1},{id:5,cityName:"Набережные Челны",employees:0,edited:!1},{id:6,cityName:"Красноярск",employees:0,edited:!1},{id:7,cityName:"Оренбург",employees:0,edited:!1}],updateTimeout:6e4}},methods:{removeCity:function(t){this.sites=this.sites.filter((function(e){return e.id!==t}))},addCity:function(t){this.sites.push(t),this.saveCollection(this.sites,"sites")},saveCollection:function(t,e){var i=JSON.stringify(t);localStorage.setItem(e,i)},updateCollection:function(t){if(localStorage.getItem(t))try{this.sites=JSON.parse(localStorage.getItem(t))}catch(e){localStorage.removeItem(t)}}},mounted:function(){var t=this;this.saveCollection(this.sites,"sites"),this.updateCollection("sites"),setInterval((function(){return t.updateCollection("sites")}),this.updateTimeout)}},x=w,$=Object(d["a"])(x,s,a,!1,null,null,null);e["default"]=$.exports},a628:function(t,e,i){"use strict";i("8370")},a640:function(t,e,i){"use strict";var s=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&s((function(){i.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,i){"use strict";var s=i("83ab"),a=i("da84"),n=i("94ca"),r=i("6eeb"),c=i("5135"),o=i("c6b6"),l=i("7156"),u=i("c04e"),d=i("d039"),f=i("7c73"),m=i("241c").f,p=i("06cf").f,v=i("9bf2").f,h=i("58a8").trim,y="Number",S=a[y],b=S.prototype,g=o(f(b))==y,C=function(t){var e,i,s,a,n,r,c,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=h(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+l}for(n=l.slice(2),r=n.length,c=0;c<r;c++)if(o=n.charCodeAt(c),o<48||o>a)return NaN;return parseInt(n,s)}return+l};if(n(y,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var N,_=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof _&&(g?d((function(){b.valueOf.call(i)})):o(i)!=y)?l(new S(C(e)),i,_):C(e)},I=s?m(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;I.length>L;L++)c(S,N=I[L])&&!c(_,N)&&v(_,N,p(S,N));_.prototype=b,b.constructor=_,r(a,y,_)}},ae40:function(t,e,i){var s=i("83ab"),a=i("d039"),n=i("5135"),r=Object.defineProperty,c={},o=function(t){throw t};t.exports=function(t,e){if(n(c,t))return c[t];e||(e={});var i=[][t],l=!!n(e,"ACCESSORS")&&e.ACCESSORS,u=n(e,0)?e[0]:o,d=n(e,1)?e[1]:void 0;return c[t]=!!i&&!a((function(){if(l&&!s)return!0;var t={length:-1};l?r(t,1,{enumerable:!0,get:o}):t[1]=1,i.call(t,u,d)}))}},b727:function(t,e,i){var s=i("0366"),a=i("44ad"),n=i("7b0b"),r=i("50c4"),c=i("65f0"),o=[].push,l=function(t){var e=1==t,i=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d;return function(m,p,v,h){for(var y,S,b=n(m),g=a(b),C=s(p,v,3),N=r(g.length),_=0,I=h||c,L=e?I(m,N):i?I(m,0):void 0;N>_;_++)if((f||_ in g)&&(y=g[_],S=C(y,_,b),t))if(e)L[_]=S;else if(S)switch(t){case 3:return!0;case 5:return y;case 6:return _;case 2:o.call(L,y)}else if(u)return!1;return d?-1:l||u?u:L}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},b80a:function(t,e,i){"use strict";i("7322")},c8d2:function(t,e,i){var s=i("d039"),a=i("5899"),n="​᠎";t.exports=function(t){return s((function(){return!!a[t]()||n[t]()!=n||a[t].name!==t}))}},e8b5:function(t,e,i){var s=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-a65cd2fe.c777d6b9.js.map