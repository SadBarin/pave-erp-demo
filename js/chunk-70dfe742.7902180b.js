(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70dfe742"],{"159b":function(t,e,i){var s=i("da84"),a=i("fdbc"),n=i("17c2"),c=i("9112");for(var r in a){var o=s[r],l=o&&o.prototype;if(l&&l.forEach!==n)try{c(l,"forEach",n)}catch(u){l.forEach=n}}},"17c2":function(t,e,i){"use strict";var s=i("b727").forEach,a=i("a640"),n=i("ae40"),c=a("forEach"),r=n("forEach");t.exports=c&&r?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},"383e":function(t,e,i){"use strict";i("fd59")},4160:function(t,e,i){"use strict";var s=i("23e7"),a=i("17c2");s({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"498a":function(t,e,i){"use strict";var s=i("23e7"),a=i("58a8").trim,n=i("c8d2");s({target:"String",proto:!0,forced:n("trim")},{trim:function(){return a(this)}})},"504e":function(t,e,i){"use strict";i("7857")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var s=i("1d80"),a=i("5899"),n="["+a+"]",c=RegExp("^"+n+n+"*"),r=RegExp(n+n+"*$"),o=function(t){return function(e){var i=String(s(e));return 1&t&&(i=i.replace(c,"")),2&t&&(i=i.replace(r,"")),i}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,i){var s=i("861d"),a=i("d2bb");t.exports=function(t,e,i){var n,c;return a&&"function"==typeof(n=e.constructor)&&n!==i&&s(c=n.prototype)&&c!==i.prototype&&a(t,c),t}},7857:function(t,e,i){},"987c":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"page-title"},[i("div",{staticClass:"title-container"},[i("h3",[t._v("Список городов")]),i("div",{staticClass:"title-btn-container"},[i("button",{staticClass:"btn-flat btn-title",on:{click:function(e){return t.updateCollection("sites")}}},[i("i",{staticClass:"material-icons"},[t._v("autorenew")])])])]),i("AddCardSites",{on:{"add-city":t.addCity}})],1),i("div",[t.sites.length?i("ListSites",{attrs:{sites:t.sites},on:{"remove-city":t.removeCity}}):i("div",{staticClass:"empty-list"},[i("h5",{staticClass:"empty-list-title"},[i("i",{staticClass:"material-icons"},[t._v("mood_bad")]),t._v(" Городов не осталось!")]),i("p",[t._v("Добавьте город, чтобы начать работать над ним.")])])],1)])},a=[],n=(i("4de4"),i("d3b7"),i("25f0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"button-container",on:{submit:function(e){return e.preventDefault(),t.submitSites(e)}}},[i("div",{staticClass:"input-field input-field-blue"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.cityName,expression:"cityName",modifiers:{trim:!0}}],staticClass:"input-add",class:{invalid:t.$v.cityName.$dirty&&!t.$v.cityName.required||t.$v.cityName.$dirty&&!t.$v.cityName.minLength},attrs:{type:"text",id:"city"},domProps:{value:t.cityName},on:{input:function(e){e.target.composing||(t.cityName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{attrs:{for:"city"}},[t._v("Город")]),t.$v.cityName.$dirty&&!t.$v.cityName.required?i("small",{staticClass:"helper-text invalid"},[t._v(" Введите город ")]):t.$v.cityName.$dirty&&!t.$v.cityName.minLength?i("small",{staticClass:"helper-text invalid"},[t._v(" Город должен содержать не менее "+t._s(t.$v.cityName.$params.minLength.min)+" символов ")]):t.coincidence?i("small",{staticClass:"helper-text invalid"},[t._v(" Город уже есть ")]):t._e()]),t._m(0)])}),c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"btn-flat waves-effect waves-light auth-submit blue darken-1 white-text",attrs:{type:"submit"}},[i("i",{staticClass:"material-icons"},[t._v("add")]),t._v(" Добавить город ")])}],r=(i("498a"),i("b85c")),o=i("b5ae"),l={name:"AddCardSites",data:function(){return{cityName:"",coincidence:!1,sites:[{}]}},validations:{cityName:{required:o["required"],minLength:Object(o["minLength"])(2)}},methods:{submitSites:function(){if(localStorage.getItem("sites"))try{this.sites=JSON.parse(localStorage.getItem("sites"))}catch(a){localStorage.removeItem("sites")}if(this.$v.$invalid)this.$v.$touch();else{var t,e=Object(r["a"])(this.sites);try{for(e.s();!(t=e.n()).done;){var i=t.value;if(void 0!==i.cityName){if(i.cityName.toString().toLowerCase()===this.cityName.toString().toLowerCase()){this.coincidence=!0;break}this.coincidence=!1}}}catch(n){e.e(n)}finally{e.f()}if(this.cityName.trim()&&!this.coincidence){this.cityName=this.cityName[0].toUpperCase()+this.cityName.substring(1);var s={id:Date.now(),cityName:this.cityName,employees:0,edited:!1};this.$emit("add-city",s),this.cityName=""}}}}},u=l,d=(i("e63c"),i("2877")),f=Object(d["a"])(u,n,c,!1,null,"558a37d1",null),m=f.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",t._l(t.sites,(function(e){return i("CardSites",{key:e.id,attrs:{city:e},on:{"remove-city":t.removeCity}})})),1)},v=[],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[t.popupShow?i("Popup",{attrs:{"popup-title":"Удалить город?"},on:{yes:function(e){return t.$emit("remove-city",t.city.id)},no:t.popupHidden}}):t._e(),i("div",{staticClass:"col s12"},[i("div",{staticClass:"card-panel blue darken-1 white-text"},[i("div",{staticClass:"card-content dark-text card-line"},[i("div",{staticClass:"info-container"},[i("h6",[i("i",{staticClass:"material-icons"},[t._v("location_city")]),t._v(" Город: "+t._s(t.city.cityName))]),i("h6",[i("i",{staticClass:"material-icons"},[t._v("group")]),t._v(" Количество сотрудников: "+t._s(t.city.employees))]),t.city.edited?i("p",{staticClass:"card-report"},[i("i",{staticClass:"material-icons"},[t._v("report")]),t._v(" Карточка сейчас редактируется другим сотрудником ")]):t._e()]),i("div",{staticClass:"button-container"},[t.city.edited?t._e():i("button",{staticClass:"btn-flat waves-effect waves-light auth-submit white-text",on:{click:t.editedCityStatus}},[i("i",{staticClass:"material-icons"},[t._v("create")]),t._v(" Редактировать ")]),t.city.edited?i("router-link",{staticClass:"btn-flat waves-effect waves-light auth-submit blue-text text-lighten-3",attrs:{to:"/sites/editor"}},[i("i",{staticClass:"material-icons"},[t._v("border_color")]),t._v(" Редактировать принудительно ")]):t._e(),t.city.edited?t._e():i("button",{staticClass:"btn-flat waves-effect waves-light auth-submit white-text",on:{click:t.popupVisibility}},[i("i",{staticClass:"material-icons"},[t._v("delete")]),t._v(" Удалить ")])],1)])])])],1)},y=[],g=(i("c740"),i("4160"),i("a9e3"),i("159b"),i("3905")),b={name:"CardSites",components:{Popup:g["a"]},props:{city:{type:Object},index:Number},data:function(){return{sites:[],employees:[],popupShow:!1,countEmployees:0}},methods:{popupVisibility:function(){this.popupShow=!0},popupHidden:function(){this.popupShow=!1},editedCityStatus:function(){var t=this;if(localStorage.getItem("sites"))try{this.sites=JSON.parse(localStorage.getItem("sites"))}catch(i){localStorage.removeItem("sites")}var e=this.sites.findIndex((function(e){return e.id===t.city.id}));this.sites[e].edited=!0,this.saveSites(),this.$router.push("/sites/editor")},amountEmployees:function(){var t=this;try{var e=this.sites.findIndex((function(e){return e.id===t.city.id}));this.employees.forEach((function(i){i.city===t.sites[e].cityName&&t.countEmployees++})),this.sites[e].employees=this.countEmployees}catch(i){}this.saveSites()},saveSites:function(){var t=JSON.stringify(this.sites);localStorage.setItem("sites",t)}},mounted:function(){if(localStorage.getItem("sites"))try{this.sites=JSON.parse(localStorage.getItem("sites"))}catch(t){localStorage.removeItem("sites")}if(localStorage.getItem("employees"))try{this.employees=JSON.parse(localStorage.getItem("employees"))}catch(t){localStorage.removeItem("employees")}this.amountEmployees()}},C=b,S=(i("383e"),Object(d["a"])(C,h,y,!1,null,"3df98354",null)),N=S.exports,_={name:"ListSites",components:{CardSites:N},methods:{removeCity:function(t){this.$emit("remove-city",t)}},props:["sites"]},I=_,E=(i("504e"),Object(d["a"])(I,p,v,!1,null,"24e285e9",null)),w=E.exports,$={name:"Sites",components:{ListSites:w,AddCardSites:m},data:function(){return{sites:[{}],updateTimeout:6e4}},methods:{removeCity:function(t){this.sites=this.sites.filter((function(e){return e.id.toString!==t.toString})),this.saveCollection(this.sites,"sites")},addCity:function(t){this.sites.push(t),this.saveCollection(this.sites,"sites")},saveCollection:function(t,e){var i=JSON.stringify(t);localStorage.setItem(e,i)},updateCollection:function(t){if(localStorage.getItem(t))try{this.sites=JSON.parse(localStorage.getItem(t))}catch(e){localStorage.removeItem(t)}}},mounted:function(){var t=this;this.updateCollection("sites"),setInterval((function(){return t.updateCollection("sites")}),this.updateTimeout)}},x=$,O=Object(d["a"])(x,s,a,!1,null,null,null);e["default"]=O.exports},a640:function(t,e,i){"use strict";var s=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&s((function(){i.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,i){"use strict";var s=i("83ab"),a=i("da84"),n=i("94ca"),c=i("6eeb"),r=i("5135"),o=i("c6b6"),l=i("7156"),u=i("c04e"),d=i("d039"),f=i("7c73"),m=i("241c").f,p=i("06cf").f,v=i("9bf2").f,h=i("58a8").trim,y="Number",g=a[y],b=g.prototype,C=o(f(b))==y,S=function(t){var e,i,s,a,n,c,r,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=h(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+l}for(n=l.slice(2),c=n.length,r=0;r<c;r++)if(o=n.charCodeAt(r),o<48||o>a)return NaN;return parseInt(n,s)}return+l};if(n(y,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var N,_=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof _&&(C?d((function(){b.valueOf.call(i)})):o(i)!=y)?l(new g(S(e)),i,_):S(e)},I=s?m(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;I.length>E;E++)r(g,N=I[E])&&!r(_,N)&&v(_,N,p(g,N));_.prototype=b,b.constructor=_,c(a,y,_)}},c8d2:function(t,e,i){var s=i("d039"),a=i("5899"),n="​᠎";t.exports=function(t){return s((function(){return!!a[t]()||n[t]()!=n||a[t].name!==t}))}},d0d8:function(t,e,i){},e63c:function(t,e,i){"use strict";i("d0d8")},fd59:function(t,e,i){}}]);
//# sourceMappingURL=chunk-70dfe742.7902180b.js.map