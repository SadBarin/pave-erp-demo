(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d79640c"],{1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=a},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=a},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=a},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=a},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("numeric",/^[0-9]*$/);t.default=a},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=a},"498a2":function(e,t,r){"use strict";var n=r("23e7"),a=r("58a8").trim,i=r("c8d2");n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return a(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("5899"),i="["+a+"]",u=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),l=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(u,"")),2&e&&(r=r.replace(o,"")),r}};e.exports={start:l(1),end:l(2),trim:l(3)}},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,i=(0,n.regex)("email",a);t.default=i},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=a},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=a},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=a},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,i=(0,n.regex)("url",a);t.default=i},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=a(r("8750"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var u=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===i(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=u;var o=function(e){return Array.isArray(e)?e.length:"object"===i(e)?Object.keys(e).length:String(e).length};t.len=o;var l=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=l;var s=function(e,t){return(0,n.default)({type:e},(function(e){return!u(e)||t.test(e)}))};t.regex=s},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",BASE_URL:"/pave-erp-demo/"}).BUILD?r("cb69").withParams:r("0234").withParams,a=n;t.default=a},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(i)}))};t.default=a;var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=a},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return O.default}}),t.helpers=void 0;var n=w(r("6235")),a=w(r("3a54")),i=w(r("45b8")),u=w(r("ec11")),o=w(r("5d75")),l=w(r("c99d")),s=w(r("91d3")),f=w(r("2a12")),c=w(r("5db3")),d=w(r("d4f4")),p=w(r("aa82")),m=w(r("e652")),v=w(r("b6cb")),y=w(r("772d")),b=w(r("d294")),_=w(r("3360")),h=w(r("6417")),x=w(r("eb66")),g=w(r("46bc")),P=w(r("1331")),O=w(r("c301")),E=j(r("78ef"));function j(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function w(e){return e&&e.__esModule?e:{default:e}}t.helpers=E},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=a},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=a},c8d2:function(e,t,r){var n=r("d039"),a=r("5899"),i="​᠎";e.exports=function(e){return n((function(){return!!a[e]()||i[e]()!=i||a[e].name!==e}))}},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(i)}));t.default=a;var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb29:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page-title flex-between-center"},[r("div",{staticClass:"flex-center"},[r("h3",{staticClass:"right-margin-big"},[e._v("Список сотрудников")]),r("div",{staticClass:"flex-center"},[r("button",{staticClass:"btn-transparent transparent btn-page-title blue-text text-darken-1 ",on:{click:e.updateEmployees}},[r("i",{staticClass:"material-icons middle-material-icons"},[e._v("autorenew")])])])]),r("AddCardEmployees",{attrs:{employees:e.employees},on:{"add-employee":e.addEmployee}})],1),r("div",[e.employees?r("TableEmployees",{attrs:{employees:e.employees},on:{"remove-employee":e.removeEmployee}}):e._e()],1)])},a=[],i=r("5530"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.popupShow?r("Popup",{attrs:{"popup-toast":e.employee.surname+" "+e.employee.name+" "+("Женский"===e.employee.sex?" была удалена":" был удалён!")},on:{yes:function(t){return e.removeEmployee(e.employee.id)},no:e.popupHidden},scopedSlots:e._u([{key:"title-popup",fn:function(){return[e._v(" Удалить? ")]},proxy:!0},{key:"text-info-popup",fn:function(){return[e._v(" "+e._s(e._f("sexMsgDelete")(e.employee.sex))+" "),r("b",[e._v(e._s(e.employee.surname)+" "+e._s(e.employee.name))])]},proxy:!0}],null,!1,3631842687)}):e._e(),r("table",[e._m(0),e._l(e.employees,(function(t){return r("tr",{key:t.value},[r("td",[r("div",{staticClass:"parent-clip-text"},[r("p",{staticClass:"clip-text",attrs:{title:t.surname}},[e._v(e._s(t.surname))])])]),r("td",[r("div",{staticClass:"parent-clip-text"},[r("p",{staticClass:"clip-text",attrs:{title:t.name}},[e._v(e._s(t.name))])])]),r("td",[r("div",{staticClass:"parent-clip-text"},[r("a",{staticClass:"clip-text",attrs:{href:"mailto:"+t.email,title:"Написать на почту: "+t.email}},[e._v(e._s(t.email))])])]),r("td",[r("a",{attrs:{href:"tel:"+t.number,title:"Позвонить"}},[e._v(e._s(t.mobilePhone))])]),r("td",[r("div",{staticClass:"parent-clip-text"},[r("p",{staticClass:"clip-text",attrs:{title:t.city}},[e._v(e._s(t.city))])])]),r("td",[r("div",{staticClass:"parent-clip-text"},[r("p",{staticClass:"clip-text",attrs:{title:t.duty}},[e._v(e._s(t.duty))])])]),r("td",[r("div",{staticClass:"flex-center"},[r("router-link",{staticClass:"btn-transparent transparent waves-effect waves-light auth-submit blue-text text-darken-1",attrs:{title:"История редактирования",to:{name:"employeeHistory",params:{id:t.id}}}},[r("i",{staticClass:"material-icons"},[e._v("description")])]),r("router-link",{staticClass:"btn-transparent transparent waves-effect waves-light auth-submit blue-text text-darken-1",attrs:{title:"Редактировать",to:{name:"employeeEdit",params:{id:t.id}}}},[r("i",{staticClass:"material-icons"},[e._v("create")])]),r("button",{staticClass:"btn-transparent transparent waves-effect waves-light auth-submit blue-text text-darken-1",attrs:{title:"Удалить"},on:{click:function(r){e.popupVisibility(t),e.setEmployee(t)}}},[r("i",{staticClass:"material-icons"},[e._v("delete")])])],1)])])}))],2)],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("th",[e._v("Фамилия")]),r("th",[e._v("Имя")]),r("th",[e._v("Почта")]),r("th",[e._v("Номер")]),r("th",[e._v("Город")]),r("th",[e._v("Должность")])])}],l=r("5614"),s={name:"TableEmployees",mixins:[l["a"]],props:["employees"],data:function(){return{employee:""}},methods:{setEmployee:function(e){this.employee=e},removeEmployee:function(e){this.popupHidden(),this.$emit("remove-employee",e)}}},f=s,c=r("2877"),d=Object(c["a"])(f,u,o,!1,null,null,null),p=d.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"flex-center",on:{submit:function(t){return t.preventDefault(),e.submitEmployee(t)}}},[r("div",{staticClass:"input-field margin-fix right-margin-little"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.email,expression:"email",modifiers:{trim:!0}}],staticClass:"input-add",class:{invalid:e.$v.email.$dirty&&!e.$v.email.required||e.$v.email.$dirty&&!e.$v.email.email},attrs:{id:"email",type:"text",maxlength:"35",placeholder:"Почта нового рабочего"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.email.$dirty&&!e.$v.email.required?r("small",{staticClass:"helper-text invalid"},[e._v("Введите email сотрудника")]):e.$v.email.$dirty&&!e.$v.email.email?r("small",{staticClass:"helper-text invalid"},[e._v("Введите правильно email ")]):e.coincidence?r("small",{staticClass:"helper-text invalid"},[e._v(" Email уже есть ")]):e._e()]),e._m(0)])},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"btn-transparent transparent btn-page-title blue-text text-darken-1",attrs:{title:"Добавить нового сотрудника",type:"submit"}},[r("i",{staticClass:"material-icons big-material-icons"},[e._v("add")])])}],y=(r("498a2"),r("b5ae")),b=r("2f62"),_={name:"AddCardEmployees",data:function(){return{email:"",coincidence:!1}},props:["employees"],computed:Object(i["a"])({},Object(b["b"])(["authEmployee"])),validations:{email:{email:y["email"],required:y["required"]}},methods:{getPassword:function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()@_+=",r=0;r<10;r++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},createEmployee:function(){if(this.email.trim()&&!this.coincidence){var e={id:Date.now(),email:this.email,password:this.getPassword(),name:"Сотрудник",surname:"Новый",patronymic:"",sex:"Мужской",homePhone:"",mobilePhone:"",city:this.authEmployee.city,duty:"Сотрудник",access:"employee",settings:{autoUpdate:5e3}};this.$emit("add-employee",e),this.email=""}},submitEmployee:function(){this.$v.$invalid?this.$v.$touch():this.createEmployee()}}},h=_,x=Object(c["a"])(h,m,v,!1,null,null,null),g=x.exports,P=r("260b"),O={name:"Employees",components:{TableEmployees:p,AddCardEmployees:g},data:function(){return{updateTimeout:6e4}},computed:Object(i["a"])({},Object(b["b"])(["employees"])),methods:Object(i["a"])(Object(i["a"])({},Object(b["c"])(["SET_EMPLOYEES_FROM_LOCAL_STORAGE","SET_EMPLOYEES_FROM_SERVER"])),{},{removeEmployee:function(e){var t=this;P["a"].database().ref("/employees/"+e).remove().then((function(){t.SET_EMPLOYEES_FROM_SERVER(),console.log("Сотрудник удалён 🗑️")}))},addEmployee:function(e){var t=this;P["a"].database().ref("/employees/"+e.id).set(e).then((function(){t.SET_EMPLOYEES_FROM_SERVER(),console.log("Сотрудник добавлен ➕")}))},updateEmployees:function(){this.SET_EMPLOYEES_FROM_SERVER(),M.toast({html:"Сотрудники обновлены"})}}),mounted:function(){this.SET_EMPLOYEES_FROM_LOCAL_STORAGE()}},E=O,j=Object(c["a"])(E,n,a,!1,null,null,null);t["default"]=j.exports},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},a=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},i=n.vuelidate?n.vuelidate.withParams:a;t.withParams=i}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=a},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=a},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=a},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=a},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=a}}]);
//# sourceMappingURL=chunk-1d79640c.456818f9.js.map