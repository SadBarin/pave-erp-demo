(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d713ebc"],{"25f0":function(e,t,i){"use strict";var a=i("6eeb"),n=i("825a"),o=i("d039"),r=i("ad6d"),s="toString",c=RegExp.prototype,l=c[s],d=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u=l.name!=s;(d||u)&&a(RegExp.prototype,s,(function(){var e=n(this),t=String(e.source),i=e.flags,a=String(void 0===i&&e instanceof RegExp&&!("flags"in c)?r.call(e):i);return"/"+t+"/"+a}),{unsafe:!0})},2909:function(e,t,i){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function n(e){if(Array.isArray(e))return a(e)}i.d(t,"a",(function(){return c}));i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0");function o(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}i("fb6a"),i("b0c0"),i("25f0");function r(e,t){if(e){if("string"===typeof e)return a(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(e,t):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return n(e)||o(e)||r(e)||s()}},"3ca3":function(e,t,i){"use strict";var a=i("6547").charAt,n=i("69f3"),o=i("7dd0"),r="String Iterator",s=n.set,c=n.getterFor(r);o(String,"String",(function(e){s(this,{type:r,string:String(e),index:0})}),(function(){var e,t=c(this),i=t.string,n=t.index;return n>=i.length?{value:void 0,done:!0}:(e=a(i,n),t.index+=e.length,{value:e,done:!1})}))},"4df4":function(e,t,i){"use strict";var a=i("0366"),n=i("7b0b"),o=i("9bdd"),r=i("e95a"),s=i("50c4"),c=i("8418"),l=i("35a1");e.exports=function(e){var t,i,d,u,m,p,f=n(e),v="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,E=void 0!==h,g=l(f),b=0;if(E&&(h=a(h,y>2?arguments[2]:void 0,2)),void 0==g||v==Array&&r(g))for(t=s(f.length),i=new v(t);t>b;b++)p=E?h(f[b],b):f[b],c(i,b,p);else for(u=g.call(f),m=u.next,i=new v;!(d=m.call(u)).done;b++)p=E?o(u,h,[d.value,b],!0):d.value,c(i,b,p);return i.length=b,i}},6547:function(e,t,i){var a=i("a691"),n=i("1d80"),o=function(e){return function(t,i){var o,r,s=String(n(t)),c=a(i),l=s.length;return c<0||c>=l?e?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===l||(r=s.charCodeAt(c+1))<56320||r>57343?e?s.charAt(c):o:e?s.slice(c,c+2):r-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},"99af":function(e,t,i){"use strict";var a=i("23e7"),n=i("d039"),o=i("e8b5"),r=i("861d"),s=i("7b0b"),c=i("50c4"),l=i("8418"),d=i("65f0"),u=i("1dde"),m=i("b622"),p=i("2d00"),f=m("isConcatSpreadable"),v=9007199254740991,y="Maximum allowed index exceeded",h=p>=51||!n((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),E=u("concat"),g=function(e){if(!r(e))return!1;var t=e[f];return void 0!==t?!!t:o(e)},b=!h||!E;a({target:"Array",proto:!0,forced:b},{concat:function(e){var t,i,a,n,o,r=s(this),u=d(r,0),m=0;for(t=-1,a=arguments.length;t<a;t++)if(o=-1===t?r:arguments[t],g(o)){if(n=c(o.length),m+n>v)throw TypeError(y);for(i=0;i<n;i++,m++)i in o&&l(u,m,o[i])}else{if(m>=v)throw TypeError(y);l(u,m++,o)}return u.length=m,u}})},a630:function(e,t,i){var a=i("23e7"),n=i("4df4"),o=i("1c7e"),r=!o((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:r},{from:n})},ad6d:function(e,t,i){"use strict";var a=i("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},add4:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.popupShow?i("Popup",{on:{yes:e.editorExit,no:e.popupHidden},scopedSlots:e._u([{key:"title-popup",fn:function(){return[e._v(" Покинуть редактор сотрудника? ")]},proxy:!0},{key:"text-info-popup",fn:function(){return[e._v(" Введённые данные не будут сохранены! ")]},proxy:!0}],null,!1,1437604199)}):e._e(),i("div",{staticClass:"page-title flex-between-center"},[i("h3",[e._v('Редактор сотрудника "'+e._s(e.editedEmployee.surname)+" "+e._s(e.editedEmployee.name)+'"')]),i("div",{staticClass:"editor-btns"},[i("button",{staticClass:"btn editor-btn btn-hover blue darken-1",on:{click:function(t){return e.saveEditedEmployee(e.editedEmployee)}}},[i("i",{staticClass:"material-icons"},[e._v("exit_to_app")]),e._v(" Сохранить и выйти ")]),i("button",{staticClass:"btn editor-btn btn-hover blue darken-1",on:{click:e.popupVisibility}},[i("i",{staticClass:"material-icons"},[e._v("group")]),e._v("К Сотрудникам ")])])]),i("section",[i("div",{staticClass:"row"},[i("div",{staticClass:"col s12"},[i("div",[i("form",[i("div",{staticClass:"form-content"},[i("div",{staticClass:"card editor-card white darken-1 black-text"},[i("div",{staticClass:"card-content flex-column-center"},[e._m(0),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.editedEmployee.email,expression:"editedEmployee.email"}],attrs:{id:"email",type:"text"},domProps:{value:e.editedEmployee.email},on:{change:function(t){return e.changeData(e.editedEmployee.email,"почта")},input:function(t){t.target.composing||e.$set(e.editedEmployee,"email",t.target.value)}}}),i("label",{staticClass:"active",attrs:{for:"email"}},[e._v("Почта")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.editedEmployee.password,expression:"editedEmployee.password"}],attrs:{id:"password",type:"text"},domProps:{value:e.editedEmployee.password},on:{change:function(t){return e.changeData(e.editedEmployee.password,"пароль")},input:function(t){t.target.composing||e.$set(e.editedEmployee,"password",t.target.value)}}}),i("label",{staticClass:"active",attrs:{for:"password"}},[e._v("Пароль")])]),i("div",{staticClass:"input-field editor-input"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.editedEmployee.access,expression:"editedEmployee.access"}],staticClass:"browser-default editor-select",on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.editedEmployee,"access",t.target.multiple?i:i[0])},function(t){return e.changeData(e.editedEmployee.access,"доступ")}]}},[i("option",{staticClass:"editor-option",attrs:{value:"employee"}},[e._v("Сотрудник")]),i("option",{staticClass:"editor-option",attrs:{value:"admin"}},[e._v("Админ")]),i("option",{staticClass:"editor-option",attrs:{value:"staffManager"}},[e._v("Менеджер по персоналу")]),i("option",{staticClass:"editor-option",attrs:{value:"customerManager"}},[e._v("Менеджер по работе с заказчиками")]),i("option",{staticClass:"editor-option",attrs:{value:"leader"}},[e._v("Руководитель обособленного подразделения")])]),i("label",{staticClass:"active"},[e._v("Доступ")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedEmployee.duty,expression:"editedEmployee.duty",modifiers:{trim:!0}}],attrs:{type:"text",id:"duty"},domProps:{value:e.editedEmployee.duty},on:{change:function(t){return e.changeData(e.editedEmployee.duty,"должность")},input:function(t){t.target.composing||e.$set(e.editedEmployee,"duty",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"duty"}},[e._v("Должность")])])])]),i("div",{staticClass:"card editor-card white darken-1 black-text"},[i("div",{staticClass:"card-content flex-column-center"},[e._m(1),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedEmployee.name,expression:"editedEmployee.name",modifiers:{trim:!0}}],attrs:{type:"text",id:"name"},domProps:{value:e.editedEmployee.name},on:{change:function(t){return e.changeData(e.editedEmployee.name,"имя")},input:function(t){t.target.composing||e.$set(e.editedEmployee,"name",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"name"}},[e._v("Имя")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedEmployee.surname,expression:"editedEmployee.surname",modifiers:{trim:!0}}],attrs:{type:"text",id:"surname"},domProps:{value:e.editedEmployee.surname},on:{change:function(t){return e.changeData(e.editedEmployee.surname,"фамилия")},input:function(t){t.target.composing||e.$set(e.editedEmployee,"surname",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"surname"}},[e._v("Фамилия")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedEmployee.patronymic,expression:"editedEmployee.patronymic",modifiers:{trim:!0}}],attrs:{type:"text",id:"patronymic"},domProps:{value:e.editedEmployee.patronymic},on:{change:function(t){return e.changeData(e.editedEmployee.patronymic,"отчество")},input:function(t){t.target.composing||e.$set(e.editedEmployee,"patronymic",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"patronymic"}},[e._v("Отчество")])])])]),i("div",{staticClass:"card editor-card white darken-1 black-text"},[i("div",{staticClass:"card-content flex-column-center black-text"},[e._m(2),i("div",{staticClass:"input-field editor-input"},[i("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedEmployee.city,expression:"editedEmployee.city",modifiers:{trim:!0}}],staticClass:"browser-default editor-select",on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.editedEmployee,"city",t.target.multiple?i:i[0])},function(t){return e.changeData(e.editedEmployee.city,"город")}]}},[i("option",{staticClass:"editor-option",attrs:{selected:""}},[e._v("Отсутствует")]),e._l(e.sites,(function(t){return i("option",{key:t.value,staticClass:"editor-option"},[e._v(" "+e._s(t.name)+" ")])}))],2),i("label",{staticClass:"active"},[e._v("Город")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedEmployee.homePhone,expression:"editedEmployee.homePhone",modifiers:{trim:!0}}],attrs:{type:"tel",id:"homePhone"},domProps:{value:e.editedEmployee.homePhone},on:{change:function(t){return e.changeData(e.editedEmployee.homePhone,"домашний телефон")},input:function(t){t.target.composing||e.$set(e.editedEmployee,"homePhone",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"homePhone"}},[e._v("Телефон Домашний")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedEmployee.mobilePhone,expression:"editedEmployee.mobilePhone",modifiers:{trim:!0}},{name:"mask",rawName:"v-mask",value:"+7 (###) ###-##-##",expression:"'+7 (###) ###-##-##'"}],attrs:{type:"tel",id:"mobilePhone",placeholder:"+7 ( ) "},domProps:{value:e.editedEmployee.mobilePhone},on:{change:function(t){return e.changeData(e.editedEmployee.mobilePhone,"мобильный телефон")},input:function(t){t.target.composing||e.$set(e.editedEmployee,"mobilePhone",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"mobilePhone"}},[e._v("Телефон Мобильный")])])])]),i("div",{staticClass:"card editor-card white darken-1 black-text"},[i("div",{staticClass:"card-content flex-column-center"},[e._m(3),i("div",{staticClass:"input-field radio-field editor-input flex-start-center"},[i("p",{staticClass:"right-margin-big"},[e._v("Пол: ")]),i("p",{staticClass:"right-margin-little"},[i("label",[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedEmployee.sex,expression:"editedEmployee.sex",modifiers:{trim:!0}}],attrs:{type:"radio",value:"Мужской"},domProps:{checked:e._q(e.editedEmployee.sex,"Мужской")},on:{change:[function(t){return e.$set(e.editedEmployee,"sex","Мужской")},function(t){return e.changeData(e.editedEmployee.sex,"пол")}]}}),i("span",[e._v("Мужской")])])]),i("p",[i("label",[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedEmployee.sex,expression:"editedEmployee.sex",modifiers:{trim:!0}}],attrs:{type:"radio",value:"Женский"},domProps:{checked:e._q(e.editedEmployee.sex,"Женский")},on:{change:function(t){return e.$set(e.editedEmployee,"sex","Женский")}}}),i("span",[e._v("Женский")])])])])])])])])])])])])],1)},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h4",{staticClass:"card-title"},[i("i",{staticClass:"material-icons"},[e._v("assignment_ind")]),e._v(" Авторизация")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h4",{staticClass:"card-title"},[i("i",{staticClass:"material-icons"},[e._v("account_box")]),e._v("ФИО")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h4",{staticClass:"card-title"},[i("i",{staticClass:"material-icons"},[e._v("local_phone")]),e._v(" Контактные данные")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h4",{staticClass:"card-title"},[i("i",{staticClass:"material-icons"},[e._v("account_box")]),e._v("Личные данные")])}],o=(i("99af"),i("4160"),i("b0c0"),i("159b"),i("2909")),r=i("5530"),s=i("5614"),c=i("4d5c"),l=i.n(c),d=i("3a60"),u=i("2f62"),m=i("260b"),p={name:"addEmployees.vue",mixins:[s["a"]],directives:{mask:d["mask"]},data:function(){return{editedEmployee:"",history:[]}},computed:Object(r["a"])({},Object(u["c"])(["authEmployee","employees","sites"])),methods:Object(r["a"])(Object(r["a"])({},Object(u["d"])(["SET_EMPLOYEES_FROM_SERVER","SET_EMPLOYEES_FROM_LOCAL_STORAGE","SET_SITES_FROM_LOCAL_STORAGE"])),{},{changeData:function(e,t){this.history.push({date:"[Дата: ".concat((new Date).toLocaleDateString()," Время: ").concat((new Date).toLocaleTimeString(),"]"),info:"был изменён ".concat(t,' на "').concat(e,'" сотрудником'),employee:{name:"".concat(this.authEmployee.surname," ").concat(this.authEmployee.name),id:this.authEmployee.id}})},editorExit:function(){this.$router.push("/employees")},saveEditedEmployee:function(e){var t=this;try{var i;this.history.push({date:"[Дата: ".concat((new Date).toLocaleDateString()," Время: ").concat((new Date).toLocaleTimeString(),"]"),info:"Работник сохранён работником",employee:{name:"".concat(this.authEmployee.surname," ").concat(this.authEmployee.name),id:this.authEmployee.id}}),(i=e.history).push.apply(i,Object(o["a"])(this.history))}catch(a){l.a.toast({html:"Внимание! Данный сотрудник не поддерживает историю"})}m["a"].database().ref("/employees/"+e.id).set(e).then((function(){t.SET_EMPLOYEES_FROM_SERVER(),t.editorExit()}))}}),mounted:function(){var e=document.querySelectorAll(".select");e.forEach((function(e){l.a.FormSelect.init(e)})),this.SET_EMPLOYEES_FROM_LOCAL_STORAGE(),this.SET_SITES_FROM_LOCAL_STORAGE(),this.editedEmployee=this.employees[this.$route.params.id]}},f=p,v=(i("b4c0e"),i("2877")),y=Object(v["a"])(f,a,n,!1,null,"9dca3ba6",null);t["default"]=y.exports},b0c0:function(e,t,i){var a=i("83ab"),n=i("9bf2").f,o=Function.prototype,r=o.toString,s=/^\s*function ([^ (]*)/,c="name";a&&!(c in o)&&n(o,c,{configurable:!0,get:function(){try{return r.call(this).match(s)[1]}catch(e){return""}}})},b4c0e:function(e,t,i){"use strict";i("e71b")},d28b:function(e,t,i){var a=i("746f");a("iterator")},ddb0:function(e,t,i){var a=i("da84"),n=i("fdbc"),o=i("e260"),r=i("9112"),s=i("b622"),c=s("iterator"),l=s("toStringTag"),d=o.values;for(var u in n){var m=a[u],p=m&&m.prototype;if(p){if(p[c]!==d)try{r(p,c,d)}catch(v){p[c]=d}if(p[l]||r(p,l,u),n[u])for(var f in o)if(p[f]!==o[f])try{r(p,f,o[f])}catch(v){p[f]=o[f]}}}},e01a:function(e,t,i){"use strict";var a=i("23e7"),n=i("83ab"),o=i("da84"),r=i("5135"),s=i("861d"),c=i("9bf2").f,l=i("e893"),d=o.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof m?new d(e):void 0===e?d():d(e);return""===e&&(u[t]=!0),t};l(m,d);var p=m.prototype=d.prototype;p.constructor=m;var f=p.toString,v="Symbol(test)"==String(d("test")),y=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=f.call(e);if(r(u,e))return"";var i=v?t.slice(7,-1):t.replace(y,"$1");return""===i?void 0:i}}),a({global:!0,forced:!0},{Symbol:m})}},e71b:function(e,t,i){},fb6a:function(e,t,i){"use strict";var a=i("23e7"),n=i("861d"),o=i("e8b5"),r=i("23cb"),s=i("50c4"),c=i("fc6a"),l=i("8418"),d=i("b622"),u=i("1dde"),m=i("ae40"),p=u("slice"),f=m("slice",{ACCESSORS:!0,0:0,1:2}),v=d("species"),y=[].slice,h=Math.max;a({target:"Array",proto:!0,forced:!p||!f},{slice:function(e,t){var i,a,d,u=c(this),m=s(u.length),p=r(e,m),f=r(void 0===t?m:t,m);if(o(u)&&(i=u.constructor,"function"!=typeof i||i!==Array&&!o(i.prototype)?n(i)&&(i=i[v],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return y.call(u,p,f);for(a=new(void 0===i?Array:i)(h(f-p,0)),d=0;p<f;p++,d++)p in u&&l(a,d,u[p]);return a.length=d,a}})}}]);
//# sourceMappingURL=chunk-1d713ebc.d29c8301.js.map