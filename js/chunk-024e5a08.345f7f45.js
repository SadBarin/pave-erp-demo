(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-024e5a08"],{"13d7":function(e,t,r){},"25f0":function(e,t,r){"use strict";var i=r("6eeb"),a=r("825a"),o=r("d039"),n=r("ad6d"),s="toString",d=RegExp.prototype,c=d[s],u=o((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),l=c.name!=s;(u||l)&&i(RegExp.prototype,s,(function(){var e=a(this),t=String(e.source),r=e.flags,i=String(void 0===r&&e instanceof RegExp&&!("flags"in d)?n.call(e):r);return"/"+t+"/"+i}),{unsafe:!0})},2909:function(e,t,r){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function a(e){if(Array.isArray(e))return i(e)}r.d(t,"a",(function(){return d}));r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function o(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}r("fb6a"),r("b0c0"),r("25f0");function n(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e){return a(e)||o(e)||n(e)||s()}},"3ca3":function(e,t,r){"use strict";var i=r("6547").charAt,a=r("69f3"),o=r("7dd0"),n="String Iterator",s=a.set,d=a.getterFor(n);o(String,"String",(function(e){s(this,{type:n,string:String(e),index:0})}),(function(){var e,t=d(this),r=t.string,a=t.index;return a>=r.length?{value:void 0,done:!0}:(e=i(r,a),t.index+=e.length,{value:e,done:!1})}))},"458c":function(e,t,r){"use strict";r("13d7")},"4df4":function(e,t,r){"use strict";var i=r("0366"),a=r("7b0b"),o=r("9bdd"),n=r("e95a"),s=r("50c4"),d=r("8418"),c=r("35a1");e.exports=function(e){var t,r,u,l,m,p,v=a(e),f="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,k=void 0!==h,W=c(v),b=0;if(k&&(h=i(h,g>2?arguments[2]:void 0,2)),void 0==W||f==Array&&n(W))for(t=s(v.length),r=new f(t);t>b;b++)p=k?h(v[b],b):v[b],d(r,b,p);else for(l=W.call(v),m=l.next,r=new f;!(u=m.call(l)).done;b++)p=k?o(l,h,[u.value,b],!0):u.value,d(r,b,p);return r.length=b,r}},6547:function(e,t,r){var i=r("a691"),a=r("1d80"),o=function(e){return function(t,r){var o,n,s=String(a(t)),d=i(r),c=s.length;return d<0||d>=c?e?"":void 0:(o=s.charCodeAt(d),o<55296||o>56319||d+1===c||(n=s.charCodeAt(d+1))<56320||n>57343?e?s.charAt(d):o:e?s.slice(d,d+2):n-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},"7e8c":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.popupShow?r("Popup",{on:{yes:e.editorExit,no:e.popupHidden},scopedSlots:e._u([{key:"title-popup",fn:function(){return[e._v(" Покинуть редактор рабочего? ")]},proxy:!0},{key:"text-info-popup",fn:function(){return[e._v(" Введённые данные не будут сохранены! ")]},proxy:!0}],null,!1,3394439426)}):e._e(),r("div",{staticClass:"page-title flex-between-center"},[r("h3",[e._v("Редактор рабочего "),r("br"),e._v(' "'+e._s(e.editedWorker.surname)+" "+e._s(e.editedWorker.name)+'"')]),r("div",{staticClass:"editor-btns"},[r("button",{staticClass:"btn editor-btn waves-effect waves-light auth-submit blue darken-1",on:{click:function(t){return e.saveEditedWorker(e.editedWorker)}}},[r("i",{staticClass:"material-icons"},[e._v("exit_to_app")]),e._v("Сохранить и выйти ")]),r("button",{staticClass:"btn editor-btn waves-effect waves-light auth-submit blue darken-1",on:{click:function(t){return t.preventDefault(),e.popupVisibility(t)}}},[r("i",{staticClass:"material-icons"},[e._v("transfer_within_a_station")]),e._v(" К Рабочим ")])])]),r("section",[r("div",{staticClass:"row"},[r("div",{staticClass:"col s12"},[r("div",[r("form",[r("div",{staticClass:"form-content"},[r("div",{staticClass:"card editor-card white darken-1 black-text"},[r("div",{staticClass:"card-content flex-column-center"},[e._m(0),r("div",{staticClass:"input-field editor-input flex-column-center"},[r("button",{staticClass:"cloudinary-button",attrs:{id:"upload_widget"},on:{click:function(t){return t.preventDefault(),e.upload(t)}}},[e._v("Загрузить фото рабочего")]),r("div",{staticClass:"photo-container flex-center"},[r("img",{attrs:{src:e.editedWorker.UploadImage,width:"200rem"}})])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.name,expression:"editedWorker.name",modifiers:{trim:!0}}],attrs:{id:"name",type:"text"},domProps:{value:e.editedWorker.name},on:{change:function(t){return e.changeData(e.editedWorker.name,"имя")},input:function(t){t.target.composing||e.$set(e.editedWorker,"name",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"name"}},[e._v("Имя")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.surname,expression:"editedWorker.surname",modifiers:{trim:!0}}],attrs:{id:"surname",type:"text"},domProps:{value:e.editedWorker.surname},on:{change:function(t){return e.changeData(e.editedWorker.surname,"фамилия")},input:function(t){t.target.composing||e.$set(e.editedWorker,"surname",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"surname"}},[e._v("Фамилия")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.patronymic,expression:"editedWorker.patronymic",modifiers:{trim:!0}}],attrs:{id:"patronymic",type:"text"},domProps:{value:e.editedWorker.patronymic},on:{change:function(t){return e.changeData(e.editedWorker.patronymic,"отчество")},input:function(t){t.target.composing||e.$set(e.editedWorker,"patronymic",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"patronymic"}},[e._v("Отчество")])])])]),r("div",{staticClass:"card editor-card white darken-1 black-text"},[r("div",{staticClass:"card-content flex-column-center"},[e._m(1),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.birthday,expression:"editedWorker.birthday",modifiers:{trim:!0}}],attrs:{id:"birthday",type:"date"},domProps:{value:e.editedWorker.birthday},on:{change:function(t){return e.changeData(e.editedWorker.birthday,"день рождение")},input:function(t){t.target.composing||e.$set(e.editedWorker,"birthday",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"birthday"}},[e._v("День рождения")]),r("p",[e._v("Возраст: "+e._s(e.editedWorker.age)+" лет")])]),r("div",{staticClass:"editor-input flex-start-center"},[r("p",{staticClass:"right-margin-big"},[e._v("Пол: ")]),r("p",{staticClass:"right-margin-little"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.sex,expression:"editedWorker.sex",modifiers:{trim:!0}}],attrs:{type:"radio",value:"Мужской"},domProps:{checked:e._q(e.editedWorker.sex,"Мужской")},on:{change:[function(t){return e.$set(e.editedWorker,"sex","Мужской")},function(t){return e.changeData(e.editedWorker.sex,"пол")}]}}),r("span",[e._v("Мужской")])])]),r("p",[r("label",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.sex,expression:"editedWorker.sex",modifiers:{trim:!0}}],attrs:{type:"radio",value:"Женский"},domProps:{checked:e._q(e.editedWorker.sex,"Женский")},on:{change:function(t){return e.$set(e.editedWorker,"sex","Женский")}}}),r("span",[e._v("Женский")])])])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.nationality,expression:"editedWorker.nationality",modifiers:{trim:!0}}],attrs:{id:"nationality",type:"text"},domProps:{value:e.editedWorker.nationality},on:{change:function(t){return e.changeData(e.editedWorker.nationality,"Национальность")},input:function(t){t.target.composing||e.$set(e.editedWorker,"nationality",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"nationality"}},[e._v("Национальность")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.editedWorker.medicalBook,expression:"editedWorker.medicalBook"}],attrs:{id:"medicalBook",type:"date"},domProps:{value:e.editedWorker.medicalBook},on:{change:function(t){return e.changeData(e.editedWorker.medicalBook,"Медицинская Книга")},input:function(t){t.target.composing||e.$set(e.editedWorker,"medicalBook",t.target.value)}}}),r("label",{staticClass:"active",attrs:{for:"medicalBook"}},[e._v("Медицинская Книга")]),r("p",[e._v("Истекает через: "+e._s(e.editedWorker.medicalBookStatus)+" лет")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.education,expression:"editedWorker.education",modifiers:{trim:!0}}],attrs:{id:"education",type:"text"},domProps:{value:e.editedWorker.education},on:{change:function(t){return e.changeData(e.editedWorker.education,"Образование")},input:function(t){t.target.composing||e.$set(e.editedWorker,"education",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"education"}},[e._v("Образование")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.university,expression:"editedWorker.university",modifiers:{trim:!0}}],attrs:{id:"university",type:"text"},domProps:{value:e.editedWorker.university},on:{change:function(t){return e.changeData(e.editedWorker.university,"ВУЗ")},input:function(t){t.target.composing||e.$set(e.editedWorker,"university",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"university"}},[e._v("ВУЗ")])])])]),r("div",{staticClass:"card editor-card white darken-1 black-text"},[r("div",{staticClass:"card-content flex-column-center"},[e._m(2),r("div",{staticClass:"input-field editor-input flex-column-center"},[r("button",{staticClass:"cloudinary-button",on:{click:function(t){return t.preventDefault(),e.uploadPassport(t)}}},[e._v("Загрузить паспорт рабочего")]),r("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.editedWorker.UploadPassport,expression:"editedWorker.UploadPassport !== undefined"}],staticClass:"photo-container flex-center"},[r("a",{attrs:{href:e.editedWorker.UploadPassport,target:"_blank"}},[e._v("Открыть паспорт")])])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.passportID,expression:"editedWorker.passportID",modifiers:{trim:!0}}],attrs:{id:"passportID",type:"text"},domProps:{value:e.editedWorker.passportID},on:{change:function(t){return e.changeData(e.editedWorker.passportID,"номер паспорта")},input:function(t){t.target.composing||e.$set(e.editedWorker,"passportID",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"PassportID"}},[e._v("Номер Паспорта")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.passportDate,expression:"editedWorker.passportDate",modifiers:{trim:!0}}],attrs:{id:"passportDate",type:"date"},domProps:{value:e.editedWorker.passportDate},on:{change:function(t){return e.changeData(e.editedWorker.passportDate,"дата выдачи паспорта")},input:function(t){t.target.composing||e.$set(e.editedWorker,"passportDate",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"passportDate"}},[e._v("Дата Выдачи Паспорта")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.passportIssued,expression:"editedWorker.passportIssued",modifiers:{trim:!0}}],attrs:{id:"passportIssued",type:"text"},domProps:{value:e.editedWorker.passportIssued},on:{change:function(t){return e.changeData(e.editedWorker.passportIssued,"Кем выдан")},input:function(t){t.target.composing||e.$set(e.editedWorker,"passportIssued",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"passportIssued"}},[e._v("Кем выдан")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.registration,expression:"editedWorker.registration",modifiers:{trim:!0}}],attrs:{id:"registration",type:"text"},domProps:{value:e.editedWorker.registration},on:{change:function(t){return e.changeData(e.editedWorker.registration,"Прописка")},input:function(t){t.target.composing||e.$set(e.editedWorker,"registration",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"registration"}},[e._v("Прописка")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.address,expression:"editedWorker.address",modifiers:{trim:!0}}],attrs:{id:"address",type:"text"},domProps:{value:e.editedWorker.address},on:{change:function(t){return e.changeData(e.editedWorker.address,"Адрес")},input:function(t){t.target.composing||e.$set(e.editedWorker,"address",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"address"}},[e._v("Адрес")])])])]),r("div",{staticClass:"card editor-card white darken-1 black-text"},[r("div",{staticClass:"card-content flex-column-center"},[e._m(3),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.nameCard,expression:"editedWorker.nameCard",modifiers:{trim:!0}}],attrs:{id:"nameCard",type:"text"},domProps:{value:e.editedWorker.nameCard},on:{change:function(t){return e.changeData(e.editedWorker.nameCard,"имя держателя карты")},input:function(t){t.target.composing||e.$set(e.editedWorker,"nameCard",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"nameCard"}},[e._v("Имя Держателя Карты")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.surnameCard,expression:"editedWorker.surnameCard",modifiers:{trim:!0}}],attrs:{id:"surnameCard",type:"text"},domProps:{value:e.editedWorker.surnameCard},on:{change:function(t){return e.changeData(e.editedWorker.surnameCard,"фамилия держателя карты")},input:function(t){t.target.composing||e.$set(e.editedWorker,"surnameCard",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"surnameCard"}},[e._v("Фамилия Держателя Карты")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.patronymicCard,expression:"editedWorker.patronymicCard",modifiers:{trim:!0}}],attrs:{id:"patronymicCard",type:"text"},domProps:{value:e.editedWorker.patronymicCard},on:{change:function(t){return e.changeData(e.editedWorker.patronymicCard,"отчество держателя карты")},input:function(t){t.target.composing||e.$set(e.editedWorker,"patronymicCard",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"surnameCard"}},[e._v("Отчество Держателя Карты")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.accountNumberCard,expression:"editedWorker.accountNumberCard",modifiers:{trim:!0}}],attrs:{id:"accountNumberCard",type:"text"},domProps:{value:e.editedWorker.accountNumberCard},on:{change:function(t){return e.changeData(e.editedWorker.accountNumberCard,"номер счёта")},input:function(t){t.target.composing||e.$set(e.editedWorker,"accountNumberCard",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"accountNumberCard"}},[e._v("Номер Счёта")])]),r("div",{staticClass:"input-field editor-input"},[r("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.bank,expression:"editedWorker.bank",modifiers:{trim:!0}}],staticClass:"browser-default editor-select",attrs:{id:"bank"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.editedWorker,"bank",t.target.multiple?r:r[0])},function(t){return e.changeData(e.editedWorker.bank,"банк")}]}},[r("option",{staticClass:"editor-option",attrs:{value:"СберБанк"}},[e._v("СберБанк")]),r("option",{staticClass:"editor-option",attrs:{value:"Банк ВТБ"}},[e._v("Банк ВТБ")]),r("option",{staticClass:"editor-option",attrs:{value:"Газпромбанк"}},[e._v("Газпромбанк")]),r("option",{staticClass:"editor-option",attrs:{value:"Национальный Клиринговый Центр"}},[e._v("Национальный Клиринговый Центр")]),r("option",{staticClass:"editor-option",attrs:{value:"Альфа-Банк"}},[e._v("Альфа-Банк")]),r("option",{staticClass:"editor-option",attrs:{value:"Россельхозбанк"}},[e._v("Россельхозбанк")]),r("option",{staticClass:"editor-option",attrs:{value:"Московский Кредитный Банк"}},[e._v("Московский Кредитный Банк")]),r("option",{staticClass:"editor-option",attrs:{value:"Банк «Открытие»"}},[e._v("Банк «Открытие»")]),r("option",{staticClass:"editor-option",attrs:{value:"Совкомбанк"}},[e._v("Совкомбанк")]),r("option",{staticClass:"editor-option",attrs:{value:"Росбанк"}},[e._v("Росбанк")]),r("option",{staticClass:"editor-option",attrs:{value:"Тинькофф Банк"}},[e._v("Тинькофф Банк")])]),r("label",{staticClass:"active"},[e._v("Банк")])])])]),r("div",{staticClass:"card editor-card white darken-1 black-text"},[r("div",{staticClass:"card-content flex-column-center"},[e._m(4),r("div",{staticClass:"input-field editor-input"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.editedWorker.city,expression:"editedWorker.city"}],staticClass:"browser-default editor-select",on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.editedWorker,"city",t.target.multiple?r:r[0])},function(t){return e.changeData(e.editedWorker.city,"город")}]}},[r("option",{staticClass:"editor-option",attrs:{selected:"",value:""}},[e._v("Не отмечено")]),e._l(this.sites,(function(t){return r("option",{key:t.value,staticClass:"editor-option"},[e._v(" "+e._s(t.name)+" ")])}))],2),r("label",{staticClass:"active"},[e._v("Город")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.homePhone,expression:"editedWorker.homePhone",modifiers:{trim:!0}}],attrs:{id:"homePhone",type:"text"},domProps:{value:e.editedWorker.homePhone},on:{change:function(t){return e.changeData(e.editedWorker.homePhone,"домашний телефон")},input:function(t){t.target.composing||e.$set(e.editedWorker,"homePhone",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"homePhone"}},[e._v("Телефон Домашний")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.mobilePhone,expression:"editedWorker.mobilePhone",modifiers:{trim:!0}},{name:"mask",rawName:"v-mask",value:"+7 (###) ###-##-##",expression:"'+7 (###) ###-##-##'"}],attrs:{id:"mobilePhone",type:"text",placeholder:"+7 ( ) "},domProps:{value:e.editedWorker.mobilePhone},on:{change:function(t){return e.changeData(e.editedWorker.mobilePhone,"мобильный телефон")},input:function(t){t.target.composing||e.$set(e.editedWorker,"mobilePhone",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"mobilePhone"}},[e._v("Телефон Мобильный")])])])]),r("div",{staticClass:"card editor-card white darken-1 black-text"},[r("div",{staticClass:"card-content flex-column-center"},[e._m(5),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.accountNumber,expression:"editedWorker.accountNumber",modifiers:{trim:!0}}],attrs:{id:"accountNumber",type:"text"},domProps:{value:e.editedWorker.accountNumber},on:{change:function(t){return e.changeData(e.editedWorker.accountNumber,"учётный номер")},input:function(t){t.target.composing||e.$set(e.editedWorker,"accountNumber",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"accountNumber"}},[e._v("Учётный номер")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.previousWork,expression:"editedWorker.previousWork",modifiers:{trim:!0}}],attrs:{id:"previousWork",type:"text"},domProps:{value:e.editedWorker.previousWork},on:{change:function(t){return e.changeData(e.editedWorker.previousWork,"прежняя работа")},input:function(t){t.target.composing||e.$set(e.editedWorker,"previousWork",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"previousWork"}},[e._v("Прежняя Работа")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.reasonComing,expression:"editedWorker.reasonComing",modifiers:{trim:!0}}],attrs:{id:"reasonComing",type:"text",maxlength:"100"},domProps:{value:e.editedWorker.reasonComing},on:{change:function(t){return e.changeData(e.editedWorker.reasonComing,"почему пришёл к нам")},input:function(t){t.target.composing||e.$set(e.editedWorker,"reasonComing",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"reasonComing"}},[e._v("Почему пришел к нам (кратко)")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.professions,expression:"editedWorker.professions",modifiers:{trim:!0}}],attrs:{id:"professions",type:"text"},domProps:{value:e.editedWorker.professions},on:{change:function(t){return e.changeData(e.editedWorker.professions,"профессия")},input:function(t){t.target.composing||e.$set(e.editedWorker,"professions",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"professions"}},[e._v("Профессия")])]),r("div",{staticClass:"editor-input flex-start-center"},[r("p",{staticClass:"right-margin-big"},[e._v("Ночная смена: ")]),r("p",{staticClass:"right-margin-little"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.nightShift,expression:"editedWorker.nightShift",modifiers:{trim:!0}}],attrs:{type:"radio",value:"Да"},domProps:{checked:e._q(e.editedWorker.nightShift,"Да")},on:{change:[function(t){return e.$set(e.editedWorker,"nightShift","Да")},function(t){return e.changeData(e.editedWorker.nightShift,"ночная схема")}]}}),r("span",[e._v("Да")])])]),r("p",[r("label",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.nightShift,expression:"editedWorker.nightShift",modifiers:{trim:!0}}],attrs:{type:"radio",value:"Нет"},domProps:{checked:e._q(e.editedWorker.nightShift,"Нет")},on:{change:function(t){return e.$set(e.editedWorker,"nightShift","Нет")}}}),r("span",[e._v("Нет")])])])]),r("div",{staticClass:"editor-input flex-start-center"},[r("p",{staticClass:"right-margin-big"},[e._v("Проверка МВД: ")]),r("p",{staticClass:"right-margin-little"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.checkMVD,expression:"editedWorker.checkMVD",modifiers:{trim:!0}}],attrs:{type:"radio",value:"Да"},domProps:{checked:e._q(e.editedWorker.checkMVD,"Да")},on:{change:function(t){return e.$set(e.editedWorker,"checkMVD","Да")}}}),r("span",[e._v("Да")])])]),r("p",[r("label",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.checkMVD,expression:"editedWorker.checkMVD",modifiers:{trim:!0}}],attrs:{type:"radio",value:"Нет"},domProps:{checked:e._q(e.editedWorker.checkMVD,"Нет")},on:{change:[function(t){return e.$set(e.editedWorker,"checkMVD","Нет")},function(t){return e.changeData(e.editedWorker.nightShift,"проверка МВД")}]}}),r("span",[e._v("Нет")])])])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.dateInterview,expression:"editedWorker.dateInterview",modifiers:{trim:!0}}],attrs:{id:"dateInterview",type:"date"},domProps:{value:e.editedWorker.dateInterview},on:{change:function(t){return e.changeData(e.editedWorker.nightShift,"дата собеседования")},input:function(t){t.target.composing||e.$set(e.editedWorker,"dateInterview",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"dateInterview"}},[e._v("Дата Собеседования")])]),r("div",{staticClass:"input-field editor-input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.uniform,expression:"editedWorker.uniform",modifiers:{trim:!0}}],attrs:{id:"uniform",type:"text"},domProps:{value:e.editedWorker.uniform},on:{change:function(t){return e.changeData(e.editedWorker.uniform,"униформа")},input:function(t){t.target.composing||e.$set(e.editedWorker,"uniform",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("label",{staticClass:"active",attrs:{for:"uniform"}},[e._v("Униформа")])]),r("div",{staticClass:"editor-input flex-start-center"},[r("p",{staticClass:"right-margin-big"},[e._v("Уволен: ")]),r("p",{staticClass:"right-margin-little"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.fired,expression:"editedWorker.fired",modifiers:{trim:!0}}],attrs:{type:"radio",value:"Да"},domProps:{checked:e._q(e.editedWorker.fired,"Да")},on:{change:[function(t){return e.$set(e.editedWorker,"fired","Да")},function(t){return e.changeData(e.editedWorker.fired,"уволен")}]}}),r("span",[e._v("Да")])])]),r("p",[r("label",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.editedWorker.fired,expression:"editedWorker.fired",modifiers:{trim:!0}}],attrs:{type:"radio",value:"Нет"},domProps:{checked:e._q(e.editedWorker.fired,"Нет")},on:{change:function(t){return e.$set(e.editedWorker,"fired","Нет")}}}),r("span",[e._v("Нет")])])])])])])])])])])])])],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",{staticClass:"card-title"},[r("i",{staticClass:"material-icons"},[e._v("account_box")]),e._v(" ФИО")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",{staticClass:"card-title"},[r("i",{staticClass:"material-icons"},[e._v("assignment")]),e._v(" Личные данные")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",{staticClass:"card-title"},[r("i",{staticClass:"material-icons"},[e._v("book")]),e._v(" Паспортные данные")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",{staticClass:"card-title"},[r("i",{staticClass:"material-icons"},[e._v("account_balance_wallet")]),e._v(" Банковские данные")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",{staticClass:"card-title"},[r("i",{staticClass:"material-icons"},[e._v("local_phone")]),e._v(" Контактные данные")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",{staticClass:"card-title"},[r("i",{staticClass:"material-icons"},[e._v("rate_review")]),e._v(" Рабочие данные")])}],o=(r("99af"),r("4160"),r("b0c0"),r("159b"),r("2909")),n=r("5530"),s=r("4d5c"),d=r.n(s),c=r("3a60"),u=r("5614"),l=r("2f62"),m=r("260b"),p={name:"EditorWorkers",mixins:[u["a"]],directives:{mask:c["mask"]},data:function(){return{oldWorker:"",editedWorker:"",history:[]}},computed:Object(n["a"])({},Object(l["b"])(["workers","sites","employees","authEmployee"])),methods:Object(n["a"])(Object(n["a"])({},Object(l["c"])(["SET_WORKERS_FROM_SERVER","SET_WORKERS_FROM_LOCAL_STORAGE","SET_SITES_FROM_SERVER","SET_SITES_FROM_LOCAL_STORAGE","SET_EMPLOYEES_FROM_LOCAL_STORAGE"])),{},{changeData:function(e,t){this.history.push("[Дата: ".concat((new Date).toLocaleDateString()," Время: ").concat((new Date).toLocaleTimeString(),"] был изменён ").concat(t," на ").concat(e," сотрудником ").concat(this.authEmployee.surname," ").concat(this.authEmployee.name))},editorExit:function(){this.$router.push("/workers")},saveEditedWorker:function(e){var t=this;try{var r;this.history.push("[Дата: ".concat((new Date).toLocaleDateString()," Время: ").concat((new Date).toLocaleTimeString(),"] Работник редактирован сотрудником ").concat(this.authEmployee.surname," ").concat(this.authEmployee.name)),(r=e.history).push.apply(r,Object(o["a"])(this.history))}catch(i){d.a.toast({html:"Внимание! Данный рабочий не поддерживает историю"})}m["a"].database().ref("/workers/"+e.id).set(e).then((function(){t.SET_WORKERS_FROM_SERVER(),t.editorExit()}))},upload:function(){var e=this,t=cloudinary.createUploadWidget({cloudName:"db6qzfvbw",uploadPreset:"ml_default",language:"ru"},(function(t,r){!t&&r&&"success"===r.event&&(e.editedUploadImage=r.info.secure_url)}));t.open()},uploadPassport:function(){var e=this,t=cloudinary.createUploadWidget({cloudName:"db6qzfvbw",uploadPreset:"ml_default",language:"ru"},(function(t,r){!t&&r&&"success"===r.event&&(e.editedUploadPassport=r.info.secure_url)}));t.open()}}),mounted:function(){var e=document.querySelectorAll(".select");e.forEach((function(e){d.a.FormSelect.init(e)})),this.SET_EMPLOYEES_FROM_LOCAL_STORAGE(),this.SET_WORKERS_FROM_LOCAL_STORAGE(),this.SET_SITES_FROM_LOCAL_STORAGE(),this.editedWorker=this.workers[this.$route.params.id]}},v=p,f=(r("458c"),r("2877")),g=Object(f["a"])(v,i,a,!1,null,"0118de53",null);t["default"]=g.exports},"99af":function(e,t,r){"use strict";var i=r("23e7"),a=r("d039"),o=r("e8b5"),n=r("861d"),s=r("7b0b"),d=r("50c4"),c=r("8418"),u=r("65f0"),l=r("1dde"),m=r("b622"),p=r("2d00"),v=m("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",h=p>=51||!a((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),k=l("concat"),W=function(e){if(!n(e))return!1;var t=e[v];return void 0!==t?!!t:o(e)},b=!h||!k;i({target:"Array",proto:!0,forced:b},{concat:function(e){var t,r,i,a,o,n=s(this),l=u(n,0),m=0;for(t=-1,i=arguments.length;t<i;t++)if(o=-1===t?n:arguments[t],W(o)){if(a=d(o.length),m+a>f)throw TypeError(g);for(r=0;r<a;r++,m++)r in o&&c(l,m,o[r])}else{if(m>=f)throw TypeError(g);c(l,m++,o)}return l.length=m,l}})},a630:function(e,t,r){var i=r("23e7"),a=r("4df4"),o=r("1c7e"),n=!o((function(e){Array.from(e)}));i({target:"Array",stat:!0,forced:n},{from:a})},ad6d:function(e,t,r){"use strict";var i=r("825a");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b0c0:function(e,t,r){var i=r("83ab"),a=r("9bf2").f,o=Function.prototype,n=o.toString,s=/^\s*function ([^ (]*)/,d="name";i&&!(d in o)&&a(o,d,{configurable:!0,get:function(){try{return n.call(this).match(s)[1]}catch(e){return""}}})},d28b:function(e,t,r){var i=r("746f");i("iterator")},ddb0:function(e,t,r){var i=r("da84"),a=r("fdbc"),o=r("e260"),n=r("9112"),s=r("b622"),d=s("iterator"),c=s("toStringTag"),u=o.values;for(var l in a){var m=i[l],p=m&&m.prototype;if(p){if(p[d]!==u)try{n(p,d,u)}catch(f){p[d]=u}if(p[c]||n(p,c,l),a[l])for(var v in o)if(p[v]!==o[v])try{n(p,v,o[v])}catch(f){p[v]=o[v]}}}},e01a:function(e,t,r){"use strict";var i=r("23e7"),a=r("83ab"),o=r("da84"),n=r("5135"),s=r("861d"),d=r("9bf2").f,c=r("e893"),u=o.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var l={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof m?new u(e):void 0===e?u():u(e);return""===e&&(l[t]=!0),t};c(m,u);var p=m.prototype=u.prototype;p.constructor=m;var v=p.toString,f="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;d(p,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=v.call(e);if(n(l,e))return"";var r=f?t.slice(7,-1):t.replace(g,"$1");return""===r?void 0:r}}),i({global:!0,forced:!0},{Symbol:m})}},fb6a:function(e,t,r){"use strict";var i=r("23e7"),a=r("861d"),o=r("e8b5"),n=r("23cb"),s=r("50c4"),d=r("fc6a"),c=r("8418"),u=r("b622"),l=r("1dde"),m=r("ae40"),p=l("slice"),v=m("slice",{ACCESSORS:!0,0:0,1:2}),f=u("species"),g=[].slice,h=Math.max;i({target:"Array",proto:!0,forced:!p||!v},{slice:function(e,t){var r,i,u,l=d(this),m=s(l.length),p=n(e,m),v=n(void 0===t?m:t,m);if(o(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?a(r)&&(r=r[f],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return g.call(l,p,v);for(i=new(void 0===r?Array:r)(h(v-p,0)),u=0;p<v;p++,u++)p in l&&c(i,u,l[p]);return i.length=u,i}})}}]);
//# sourceMappingURL=chunk-024e5a08.345f7f45.js.map