(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cd34836"],{"057f":function(t,e,i){var r=i("fc6a"),n=i("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return n(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?s(t):n(r(t))}},5530:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b");function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}},"63fd":function(t,e,i){},"746f":function(t,e,i){var r=i("428f"),n=i("5135"),a=i("e5383"),o=i("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});n(e,t)||o(e,t,{value:a.f(t)})}},8418:function(t,e,i){"use strict";var r=i("c04e"),n=i("9bf2"),a=i("5c6c");t.exports=function(t,e,i){var o=r(e);o in t?n.f(t,o,a(0,i)):t[o]=i}},a478:function(t,e,i){"use strict";i("63fd")},a4d3:function(t,e,i){"use strict";var r=i("23e7"),n=i("da84"),a=i("d066"),o=i("c430"),s=i("83ab"),c=i("4930"),l=i("fdbf"),u=i("d039"),d=i("5135"),f=i("e8b5"),p=i("861d"),m=i("825a"),v=i("7b0b"),b=i("fc6a"),y=i("c04e"),h=i("5c6c"),_=i("7c73"),E=i("df75"),g=i("241c"),w=i("057f"),C=i("7418"),O=i("06cf"),x=i("9bf2"),P=i("d1e7"),S=i("9112"),j=i("6eeb"),k=i("5692"),$=i("f772"),N=i("d012"),R=i("90e3"),T=i("b622"),M=i("e5383"),D=i("746f"),F=i("d44e"),U=i("69f3"),V=i("b727").forEach,A=$("hidden"),J="Symbol",I="prototype",L=T("toPrimitive"),Y=U.set,q=U.getterFor(J),H=Object[I],Q=n.Symbol,W=a("JSON","stringify"),z=O.f,B=x.f,G=w.f,K=P.f,X=k("symbols"),Z=k("op-symbols"),tt=k("string-to-symbol-registry"),et=k("symbol-to-string-registry"),it=k("wks"),rt=n.QObject,nt=!rt||!rt[I]||!rt[I].findChild,at=s&&u((function(){return 7!=_(B({},"a",{get:function(){return B(this,"a",{value:7}).a}})).a}))?function(t,e,i){var r=z(H,e);r&&delete H[e],B(t,e,i),r&&t!==H&&B(H,e,r)}:B,ot=function(t,e){var i=X[t]=_(Q[I]);return Y(i,{type:J,tag:t,description:e}),s||(i.description=e),i},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ct=function(t,e,i){t===H&&ct(Z,e,i),m(t);var r=y(e,!0);return m(i),d(X,r)?(i.enumerable?(d(t,A)&&t[A][r]&&(t[A][r]=!1),i=_(i,{enumerable:h(0,!1)})):(d(t,A)||B(t,A,h(1,{})),t[A][r]=!0),at(t,r,i)):B(t,r,i)},lt=function(t,e){m(t);var i=b(e),r=E(i).concat(mt(i));return V(r,(function(e){s&&!dt.call(i,e)||ct(t,e,i[e])})),t},ut=function(t,e){return void 0===e?_(t):lt(_(t),e)},dt=function(t){var e=y(t,!0),i=K.call(this,e);return!(this===H&&d(X,e)&&!d(Z,e))&&(!(i||!d(this,e)||!d(X,e)||d(this,A)&&this[A][e])||i)},ft=function(t,e){var i=b(t),r=y(e,!0);if(i!==H||!d(X,r)||d(Z,r)){var n=z(i,r);return!n||!d(X,r)||d(i,A)&&i[A][r]||(n.enumerable=!0),n}},pt=function(t){var e=G(b(t)),i=[];return V(e,(function(t){d(X,t)||d(N,t)||i.push(t)})),i},mt=function(t){var e=t===H,i=G(e?Z:b(t)),r=[];return V(i,(function(t){!d(X,t)||e&&!d(H,t)||r.push(X[t])})),r};if(c||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),i=function(t){this===H&&i.call(Z,t),d(this,A)&&d(this[A],e)&&(this[A][e]=!1),at(this,e,h(1,t))};return s&&nt&&at(H,e,{configurable:!0,set:i}),ot(e,t)},j(Q[I],"toString",(function(){return q(this).tag})),j(Q,"withoutSetter",(function(t){return ot(R(t),t)})),P.f=dt,x.f=ct,O.f=ft,g.f=w.f=pt,C.f=mt,M.f=function(t){return ot(T(t),t)},s&&(B(Q[I],"description",{configurable:!0,get:function(){return q(this).description}}),o||j(H,"propertyIsEnumerable",dt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Q}),V(E(it),(function(t){D(t)})),r({target:J,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var i=Q(e);return tt[e]=i,et[i]=e,i},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:mt}),r({target:"Object",stat:!0,forced:u((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(v(t))}}),W){var vt=!c||u((function(){var t=Q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,i){var r,n=[t],a=1;while(arguments.length>a)n.push(arguments[a++]);if(r=e,(p(e)||void 0!==t)&&!st(t))return f(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!st(e))return e}),n[1]=e,W.apply(null,n)}})}Q[I][L]||S(Q[I],L,Q[I].valueOf),F(Q,J),N[A]=!0},add4:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.popupShow?i("Popup",{on:{yes:t.editorExit,no:t.popupHidden},scopedSlots:t._u([{key:"title-popup",fn:function(){return[t._v(" Покинуть редактор сотрудника? ")]},proxy:!0},{key:"text-info-popup",fn:function(){return[t._v(" Введённые данные не будут сохранены! ")]},proxy:!0}],null,!1,1437604199)}):t._e(),i("div",{staticClass:"page-title flex-between-center"},[i("h3",[t._v('Редактор сотрудника "'+t._s(t.editedEmployee.surname)+" "+t._s(t.editedEmployee.name)+'"')]),i("div",{staticClass:"editor-btns"},[i("button",{staticClass:"btn editor-btn waves-effect waves-light auth-submit blue darken-1",on:{click:function(e){return t.saveEditedEmployee(t.editedEmployee)}}},[i("i",{staticClass:"material-icons"},[t._v("exit_to_app")]),t._v(" Сохранить и выйти ")]),i("button",{staticClass:"btn editor-btn waves-effect waves-light auth-submit blue darken-1",on:{click:t.popupVisibility}},[i("i",{staticClass:"material-icons"},[t._v("group")]),t._v("К Сотрудникам ")])])]),i("section",[i("div",{staticClass:"row"},[i("div",{staticClass:"col s12"},[i("div",[i("form",[i("div",{staticClass:"form-content"},[i("div",{staticClass:"card editor-card white darken-1 black-text"},[i("div",{staticClass:"card-content flex-column-center"},[t._m(0),t._m(1),t._m(2),i("div",{staticClass:"input-field editor-input"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.editedEmployee.access,expression:"editedEmployee.access"}],staticClass:"browser-default editor-select",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.editedEmployee,"access",e.target.multiple?i:i[0])}}},[i("option",{staticClass:"editor-option",attrs:{value:"employee"}},[t._v("Сотрудник")]),i("option",{staticClass:"editor-option",attrs:{value:"admin"}},[t._v("Админ")]),i("option",{staticClass:"editor-option",attrs:{value:"staffManager"}},[t._v("Менеджер по персоналу")]),i("option",{staticClass:"editor-option",attrs:{value:"customerManager"}},[t._v("Менеджер по работе с заказчиками")]),i("option",{staticClass:"editor-option",attrs:{value:"leader"}},[t._v("Руководитель обособленного подразделения")])]),i("label",{staticClass:"active"},[t._v("Доступ")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedEmployee.duty,expression:"editedEmployee.duty",modifiers:{trim:!0}}],attrs:{type:"text",id:"duty"},domProps:{value:t.editedEmployee.duty},on:{input:function(e){e.target.composing||t.$set(t.editedEmployee,"duty",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"duty"}},[t._v("Должность")])])])]),i("div",{staticClass:"card editor-card white darken-1 black-text"},[i("div",{staticClass:"card-content flex-column-center"},[t._m(3),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedEmployee.name,expression:"editedEmployee.name",modifiers:{trim:!0}}],attrs:{type:"text",id:"name"},domProps:{value:t.editedEmployee.name},on:{input:function(e){e.target.composing||t.$set(t.editedEmployee,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"name"}},[t._v("Имя")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedEmployee.surname,expression:"editedEmployee.surname",modifiers:{trim:!0}}],attrs:{type:"text",id:"surname"},domProps:{value:t.editedEmployee.surname},on:{input:function(e){e.target.composing||t.$set(t.editedEmployee,"surname",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"surname"}},[t._v("Фамилия")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedEmployee.patronymic,expression:"editedEmployee.patronymic",modifiers:{trim:!0}}],attrs:{type:"text",id:"patronymic"},domProps:{value:t.editedEmployee.patronymic},on:{input:function(e){e.target.composing||t.$set(t.editedEmployee,"patronymic",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"patronymic"}},[t._v("Отчество")])])])]),i("div",{staticClass:"card editor-card white darken-1 black-text"},[i("div",{staticClass:"card-content flex-column-center black-text"},[t._m(4),i("div",{staticClass:"input-field editor-input"},[i("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedEmployee.city,expression:"editedEmployee.city",modifiers:{trim:!0}}],staticClass:"browser-default editor-select",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.editedEmployee,"city",e.target.multiple?i:i[0])}}},[i("option",{staticClass:"editor-option",attrs:{selected:""}},[t._v("Отсутствует")]),t._l(t.sites,(function(e){return i("option",{key:e.value,staticClass:"editor-option"},[t._v(" "+t._s(e.name)+" ")])}))],2),i("label",{staticClass:"active"},[t._v("Город")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedEmployee.homePhone,expression:"editedEmployee.homePhone",modifiers:{trim:!0}}],attrs:{type:"tel",id:"homePhone"},domProps:{value:t.editedEmployee.homePhone},on:{input:function(e){e.target.composing||t.$set(t.editedEmployee,"homePhone",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"homePhone"}},[t._v("Телефон Домашний")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedEmployee.mobilePhone,expression:"editedEmployee.mobilePhone",modifiers:{trim:!0}},{name:"mask",rawName:"v-mask",value:"+7 (###) ###-##-##",expression:"'+7 (###) ###-##-##'"}],attrs:{type:"tel",id:"mobilePhone",placeholder:"+7 ( ) "},domProps:{value:t.editedEmployee.mobilePhone},on:{input:function(e){e.target.composing||t.$set(t.editedEmployee,"mobilePhone",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"mobilePhone"}},[t._v("Телефон Мобильный")])])])]),i("div",{staticClass:"card editor-card white darken-1 black-text"},[i("div",{staticClass:"card-content flex-column-center"},[t._m(5),i("div",{staticClass:"input-field editor-input"},[i("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedEmployee.sex,expression:"editedEmployee.sex",modifiers:{trim:!0}}],staticClass:"browser-default editor-select",attrs:{id:"sex"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.editedEmployee,"sex",e.target.multiple?i:i[0])}}},[i("option",{staticClass:"editor-option",attrs:{value:"Мужской"}},[t._v("Мужской")]),i("option",{staticClass:"editor-option",attrs:{value:"Женский"}},[t._v("Женский")])]),i("label",{staticClass:"active"},[t._v("Пол")])])])])])])])])])])],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h4",{staticClass:"card-title"},[i("i",{staticClass:"material-icons"},[t._v("assignment_ind")]),t._v(" Авторизация")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-field editor-input"},[i("input",{attrs:{id:"email",type:"text"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-field editor-input"},[i("input",{attrs:{id:"password",type:"text"}}),i("label",{staticClass:"active",attrs:{for:"password"}},[t._v("Пароль")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h4",{staticClass:"card-title"},[i("i",{staticClass:"material-icons"},[t._v("account_box")]),t._v("ФИО")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h4",{staticClass:"card-title"},[i("i",{staticClass:"material-icons"},[t._v("local_phone")]),t._v(" Контактные данные")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h4",{staticClass:"card-title"},[i("i",{staticClass:"material-icons"},[t._v("account_box")]),t._v("Личные данные")])}],a=(i("4160"),i("159b"),i("5530")),o=i("5614"),s=i("4d5c"),c=i.n(s),l=i("3a60"),u=i("2f62"),d=i("260b"),f={name:"addEmployees.vue",mixins:[o["a"]],directives:{mask:l["mask"]},data:function(){return{editedEmployee:""}},computed:Object(a["a"])({},Object(u["b"])(["employees","sites"])),methods:Object(a["a"])(Object(a["a"])({},Object(u["c"])(["SET_EMPLOYEES_FROM_SERVER","SET_SITES_FROM_SERVER"])),{},{editorExit:function(){this.$router.push("/employees")},saveEditedEmployee:function(t){d["a"].database().ref("/employees/"+t.id).set(t),this.editorExit()}}),mounted:function(){var t=this,e=document.querySelectorAll(".select");e.forEach((function(t){c.a.FormSelect.init(t)})),this.SET_EMPLOYEES_FROM_SERVER(),this.SET_SITES_FROM_SERVER(),setTimeout((function(){return t.editedEmployee=t.employees[t.$route.params.id]}),1e3)}},p=f,m=(i("a478"),i("2877")),v=Object(m["a"])(p,r,n,!1,null,"0b0285a8",null);e["default"]=v.exports},b64b:function(t,e,i){var r=i("23e7"),n=i("7b0b"),a=i("df75"),o=i("d039"),s=o((function(){a(1)}));r({target:"Object",stat:!0,forced:s},{keys:function(t){return a(n(t))}})},dbb4:function(t,e,i){var r=i("23e7"),n=i("83ab"),a=i("56ef"),o=i("fc6a"),s=i("06cf"),c=i("8418");r({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,i,r=o(t),n=s.f,l=a(r),u={},d=0;while(l.length>d)i=n(r,e=l[d++]),void 0!==i&&c(u,e,i);return u}})},e439:function(t,e,i){var r=i("23e7"),n=i("d039"),a=i("fc6a"),o=i("06cf").f,s=i("83ab"),c=n((function(){o(1)})),l=!s||c;r({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},e5383:function(t,e,i){var r=i("b622");e.f=r}}]);
//# sourceMappingURL=chunk-2cd34836.d7816cc0.js.map