(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-128a3a25"],{3963:function(e,r,t){"use strict";var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"btns-collection flex-between-center"},[e.popupShow?t("Popup",{attrs:{"popup-toast":"Рабочий "+e.worker.surname+" "+e.worker.name+" был удалён!"},on:{yes:function(r){return e.removeWorker(e.worker.id)},no:function(r){return e.popupHidden()}},scopedSlots:e._u([{key:"title-popup",fn:function(){return[e._v(" Удалить? ")]},proxy:!0},{key:"text-info-popup",fn:function(){return[e._v(' После нажатие кнопки "да" будет удалён '),t("b",[e._v(e._s(e.worker.surname)+" "+e._s(e.worker.name))]),e._v("! ")]},proxy:!0}],null,!1,316307689)}):e._e(),t("button",{directives:[{name:"show",rawName:"v-show",value:"workerEdit"===e.$route.name,expression:"$route.name === 'workerEdit'"}],staticClass:"btn-transparent transparent blue-text text-darken-1",attrs:{title:"Сохранить и выйти"},on:{click:function(r){return e.$emit("save-worker")}}},[t("i",{staticClass:"material-icons"},[e._v("save")])]),t("router-link",{directives:[{name:"show",rawName:"v-show",value:"workerAbout"!==e.$route.name,expression:"$route.name !== 'workerAbout'"}],staticClass:"btn-transparent transparent blue-text text-darken-1",attrs:{title:"Просмотреть",to:{name:"workerAbout",params:{id:e.worker.id}}}},[t("i",{staticClass:"material-icons"},[e._v("remove_red_eye")])]),t("router-link",{directives:[{name:"show",rawName:"v-show",value:"workerCalendar"!==e.$route.name,expression:"$route.name !== 'workerCalendar'"}],staticClass:"btn-transparent transparent blue-text text-darken-1",attrs:{title:"Календарь",to:{name:"workerCalendar",params:{id:e.worker.id}}}},[t("i",{staticClass:"material-icons"},[e._v("date_range")])]),t("router-link",{directives:[{name:"show",rawName:"v-show",value:"workerHistory"!==e.$route.name,expression:"$route.name !== 'workerHistory'"}],staticClass:"btn-transparent transparent blue-text text-darken-1",attrs:{title:"История редактирования",to:{name:"workerHistory",params:{id:e.worker.id}}}},[t("i",{staticClass:"material-icons"},[e._v("description")])]),t("router-link",{directives:[{name:"show",rawName:"v-show",value:"workerEdit"!==e.$route.name,expression:"$route.name !== 'workerEdit'"}],staticClass:"btn-transparent transparent blue-text text-darken-1",attrs:{title:"Редактировать",to:{name:"workerEdit",params:{id:e.worker.id}}}},[t("i",{staticClass:"material-icons"},[e._v("create")])]),e.worker.edited?e._e():t("button",{staticClass:"btn-transparent transparent blue-text text-darken-1",attrs:{title:"Удалить"},on:{click:function(r){return e.popupVisibility(e.worker)}}},[t("i",{staticClass:"material-icons"},[e._v("delete")])])],1)},s=[],o=t("5530"),n=t("5614"),i=t("260b"),_=t("2f62"),c={name:"NavWorker",mixins:[n["a"]],props:{worker:Object},methods:Object(o["a"])(Object(o["a"])({},Object(_["d"])(["SET_WORKERS_FROM_SERVER"])),{},{removeWorker:function(e){var r=this;i["a"].database().ref("/workers/"+e).remove().then((function(){r.SET_WORKERS_FROM_SERVER(),console.log("Рабочий удалён 🗑️")})),this.$router.push("/workers"),this.popupHidden()}})},w=c,l=(t("e2c8"),t("2877")),v=Object(l["a"])(w,a,s,!1,null,"197934ae",null);r["a"]=v.exports},5614:function(e,r,t){"use strict";r["a"]={data:function(){return{popupShow:!1}},methods:{popupVisibility:function(){this.popupShow=!0},popupHidden:function(){this.popupShow=!1}}}},"7ec4":function(e,r,t){},af47:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"page-title flex-between-center"},[t("h3",{staticClass:"title-clip"},[e._v("Информация о рабочем "),t("br"),e._v(' "'+e._s(e.worker.surname)+" "+e._s(e.worker.name)+'"')]),t("WorkerNav",{attrs:{worker:e.worker}})],1),t("section",{staticClass:"info-content"},[t("div",{staticClass:"margin-fix w20rem"},[e._m(0),""!==e.worker.name?t("h6",[e._v("Имя: "),t("wbr"),t("span",[e._v(e._s(e.worker.name))])]):e._e(),""!==e.worker.surname?t("h6",[e._v("Фамилия: "),t("wbr"),t("span",[e._v(e._s(e.worker.surname))])]):e._e(),""!==e.worker.patronymic?t("h6",[e._v("Отчество: "),t("wbr"),t("span",[e._v(e._s(e.worker.patronymic))])]):e._e()]),t("div",{staticClass:"margin-fix w20rem"},[e._m(1),""!==e.worker.birthday?t("h6",[e._v("День рождение: "),t("wbr"),t("span",[e._v(e._s(e.worker.birthday))])]):e._e(),""!==e.worker.age?t("h6",[e._v("Возраст: "),t("wbr"),t("span",[e._v(e._s(e.worker.age))])]):e._e(),""!==e.worker.sex?t("h6",[e._v("Пол: "),t("wbr"),t("span",[e._v(e._s(e.worker.sex))])]):e._e(),""!==e.worker.nationality?t("h6",[e._v("Национальность: "),t("wbr"),t("span",[e._v(e._s(e.worker.nationality))])]):e._e(),""!==e.worker.medicalBook?t("h6",[e._v("Мед.книжка: "),t("wbr"),t("span",[e._v(e._s(e.worker.medicalBook))])]):e._e(),""!==e.worker.education?t("h6",[e._v("Образование: "),t("wbr"),t("span",[e._v(e._s(e.worker.education))])]):e._e(),""!==e.worker.university?t("h6",[e._v("ВУЗ: "),t("wbr"),t("span",[e._v(e._s(e.worker.university))])]):e._e()]),t("div",{staticClass:"margin-fix w20rem"},[e._m(2),t("h6",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.worker.UploadPassport||"",expression:"worker.UploadPassport !== undefined || ''"}]},[e._v("Скан: "),t("wbr"),t("span",[t("a",{attrs:{href:e.worker.UploadPassport,target:"_blank"}},[e._v("Открыть паспорт")])])]),""!==e.worker.passportID?t("h6",[e._v("Номер паспорта: "),t("wbr"),t("span",[e._v(e._s(e.worker.passportID))])]):e._e(),""!==e.worker.passportDate?t("h6",[e._v("Дата выдачи паспорта: "),t("wbr"),t("span",[e._v(e._s(e.worker.passportDate))])]):e._e(),""!==e.worker.passportIssued?t("h6",[e._v("Кем выдан: "),t("wbr"),t("span",[e._v(e._s(e.worker.passportIssued))])]):e._e(),""!==e.worker.registration?t("h6",[e._v("Прописка: "),t("wbr"),t("span",[e._v(e._s(e.worker.registration))])]):e._e(),""!==e.worker.address?t("h6",[e._v("Адрес: "),t("wbr"),t("span",[e._v(e._s(e.worker.address))])]):e._e()]),t("div",{staticClass:"margin-fix w20rem"},[e._m(3),""!==e.worker.nameCard?t("h6",[e._v("Имя держателя карты: "),t("wbr"),t("span",[e._v(e._s(e.worker.nameCard))])]):e._e(),""!==e.worker.surnameCard?t("h6",[e._v("Фамилия держателя карты: "),t("wbr"),t("span",[e._v(e._s(e.worker.surnameCard))])]):e._e(),""!==e.worker.patronymicCard?t("h6",[e._v("Отчество держателя карты: "),t("wbr"),t("span",[e._v(e._s(e.worker.patronymicCard))])]):e._e(),""!==e.worker.accountNumberCard?t("h6",[e._v("Номер счёта: "),t("wbr"),t("span",[e._v(e._s(e.worker.accountNumberCard))])]):e._e(),""!==e.worker.bank?t("h6",[e._v("Банк: "),t("wbr"),t("span",[e._v(e._s(e.worker.bank))])]):e._e()]),t("div",{staticClass:"margin-fix w20rem"},[e._m(4),""!==e.worker.city?t("h6",[e._v("Город: "),t("wbr"),t("span",[e._v(e._s(e.worker.city))])]):e._e(),""!==e.worker.mobilePhone?t("h6",[e._v("Осн. мобильный телефон: "),t("wbr"),t("span",[t("a",{attrs:{href:"tel:"+e.worker.mobilePhone}},[e._v(e._s(e.worker.mobilePhone))])])]):e._e(),""!=e.worker.mobilePhoneAdditional?t("h6",[e._v("Доп. мобильный телефон: "),t("wbr"),t("span",[t("a",{attrs:{href:"tel:"+e.worker.mobilePhone}},[e._v(e._s(e.worker.mobilePhoneAdditional))])])]):e._e(),""!=e.worker.mobilePhoneStanby?t("h6",[e._v("Зап. мобильный телефон: "),t("wbr"),t("span",[t("a",{attrs:{href:"tel:"+e.worker.mobilePhone}},[e._v(e._s(e.worker.mobilePhoneStandby))])])]):e._e(),""!==e.worker.homePhone?t("h6",[e._v("Домашний телефон: "),t("wbr"),t("span",[e._v(e._s(e.worker.homePhone))])]):e._e()]),t("div",{staticClass:"margin-fix w20rem"},[e._m(5),t("h6",[e._v("Учётный номер: "),t("wbr"),t("span",[e._v(e._s(e.worker.accountNumber))])]),t("h6",[e._v("Прежняя работа: "),t("wbr"),t("span",[e._v(e._s(e.worker.previousWork))])]),t("h6",[e._v("Почему пришёл к нам: "),t("wbr"),t("span",[e._v(e._s(e.worker.reasonComing))])]),t("h6",[e._v("Профессия 1: "),t("wbr"),t("span",[e._v(e._s(e.worker.professions))])]),null!=e.worker.professionsSecond?t("h6",[e._v("Профессия 2: "),t("wbr"),t("span",[e._v(e._s(e.worker.professionsSecond))])]):e._e(),null!=e.worker.professionsThird?t("h6",[e._v("Профессия 3: "),t("wbr"),t("span",[e._v(e._s(e.worker.professionsThird))])]):e._e(),t("h6",[e._v("Ночная смена: "),t("wbr"),t("span",[e._v(e._s(e.worker.nightShift))])]),t("h6",[e._v("Проверка МВД: "),t("wbr"),t("span",[e._v(e._s(e.worker.checkMVD))])]),t("h6",[e._v("Дата собеседования: "),t("wbr"),t("span",[e._v(e._s(e.worker.dateInterview))])]),t("h6",[e._v("Униформа: "),t("wbr"),t("span",[e._v(e._s(e.worker.uniform))])]),t("h6",[e._v("Уволен: "),t("wbr"),t("span",[e._v(e._s(e.worker.fired))])])]),t("div",{staticClass:"margin-fix w20rem"},[e._m(6),""!==e.worker.id?t("h6",[e._v("Идентификационный номер: "),t("wbr"),t("span",[e._v(e._s(e.worker.id))])]):e._e(),t("h6",[e._v("Сколько раз редактировался: "),t("wbr"),t("span",[e._v(e._s(e.worker.editedCount))])]),t("h6",[e._v("История редактирования: "),t("wbr"),t("span",[t("router-link",{attrs:{title:"История редактирования",to:{name:"workerHistory",params:{id:e.worker.id}}}},[e._v(" Просмотреть ")])],1)]),t("h6",[e._v("Календарь работника: "),t("wbr"),t("span",[t("router-link",{attrs:{title:"Календарь",to:{name:"workerCalendar",params:{id:e.worker.id}}}},[e._v(" Просмотреть ")])],1)])]),t("div",{staticClass:"margin-fix w20rem"},[e._m(7),t("p",{directives:[{name:"show",rawName:"v-show",value:void 0===e.worker.UploadImage,expression:"worker.UploadImage === undefined"}]},[e._v("Загрузите фото рабочего в редакторе")]),t("img",{attrs:{src:e.worker.UploadImage,width:"200rem"}})]),t("div",{staticClass:"margin-fix w20rem"},[e._m(8),""!==e.worker.notes?t("h6",e._l(e.worker.notes,(function(r,a){return t("p",{key:a},[e._v(" "+e._s(r)+" ")])})),0):e._e(),t("h6",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.worker.uploadImageNote||"",expression:"worker.uploadImageNote !== undefined || ''"}]},[e._v("Изображение: "),t("wbr"),t("span",[t("a",{attrs:{href:e.worker.uploadImageNote,target:"_blank"}},[e._v("Открыть")])])])])])])},s=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("h5",{staticClass:"flex-start-center"},[t("i",{staticClass:"material-icons"},[e._v("account_box")]),e._v(" ФИО")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("h5",{staticClass:"flex-start-center"},[t("i",{staticClass:"material-icons"},[e._v("assignment")]),e._v(" Личные данные")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("h5",{staticClass:"flex-start-center"},[t("i",{staticClass:"material-icons"},[e._v("book")]),e._v(" Паспортные данные")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("h5",{staticClass:"flex-start-center"},[t("i",{staticClass:"material-icons"},[e._v("account_balance_wallet")]),e._v(" Банковские данные")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("h5",{staticClass:"flex-start-center"},[t("i",{staticClass:"material-icons"},[e._v("local_phone")]),e._v(" Контактные данные")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("h5",{staticClass:"flex-start-center"},[t("i",{staticClass:"material-icons"},[e._v("rate_review")]),e._v(" Рабочие данные")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("h5",{staticClass:"flex-start-center"},[t("i",{staticClass:"material-icons"},[e._v("assessment")]),e._v(" Системные данные")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("h5",{staticClass:"flex-start-center big-margin-bottom"},[t("i",{staticClass:"material-icons"},[e._v("photo")]),e._v(" Фото рабочего")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("h5",{staticClass:"flex-start-center"},[t("i",{staticClass:"material-icons"},[e._v("comment")]),e._v(" Примечания")])}],o=t("5530"),n=(t("fb6a"),t("3963")),i=t("2f62"),_={name:"AboutWorker",components:{WorkerNav:n["a"]},filters:{booleanToWord:function(e){return!0===e?"Да":"Нет"}},data:function(){return{worker:""}},computed:Object(o["a"])(Object(o["a"])({},Object(i["c"])(["workers"])),{},{notes:function(){try{return this.worker.notes.slice(-5)}catch(e){return["К сожалению примечания не поддерживаются"]}}}),created:function(){this.SET_WORKERS_FROM_LOCAL_STORAGE(),this.worker=this.workers[this.$route.params.id]},methods:Object(o["a"])({},Object(i["d"])(["SET_WORKERS_FROM_LOCAL_STORAGE"]))},c=_,w=t("2877"),l=Object(w["a"])(c,a,s,!1,null,null,null);r["default"]=l.exports},e2c8:function(e,r,t){"use strict";t("7ec4")},fb6a:function(e,r,t){"use strict";var a=t("23e7"),s=t("861d"),o=t("e8b5"),n=t("23cb"),i=t("50c4"),_=t("fc6a"),c=t("8418"),w=t("b622"),l=t("1dde"),v=t("ae40"),p=l("slice"),u=v("slice",{ACCESSORS:!0,0:0,1:2}),k=w("species"),m=[].slice,d=Math.max;a({target:"Array",proto:!0,forced:!p||!u},{slice:function(e,r){var t,a,w,l=_(this),v=i(l.length),p=n(e,v),u=n(void 0===r?v:r,v);if(o(l)&&(t=l.constructor,"function"!=typeof t||t!==Array&&!o(t.prototype)?s(t)&&(t=t[k],null===t&&(t=void 0)):t=void 0,t===Array||void 0===t))return m.call(l,p,u);for(a=new(void 0===t?Array:t)(d(u-p,0)),w=0;p<u;p++,w++)p in l&&c(a,w,l[p]);return a.length=w,a}})}}]);
//# sourceMappingURL=chunk-128a3a25.0ed568b9.js.map