(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44ef77a4"],{"1dde":function(t,e,i){var a=i("d039"),r=i("b622"),s=i("2d00"),d=r("species");t.exports=function(t){return s>=51||!a((function(){var e=[],i=e.constructor={};return i[d]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4728:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.popupShow?i("Popup",{attrs:{"popup-title":"Выйти?"},on:{yes:function(e){return t.editorExit(t.workers)},no:t.popupHidden}}):t._e(),i("div",{staticClass:"page-title editor-title"},[i("h3",[t._v('Редактор рабочего "'+t._s(t.editedName)+" "+t._s(t.editedSurname)+'"')])]),i("section",[i("div",{staticClass:"row"},[i("div",{staticClass:"col s12"},[i("div",[i("form",{staticClass:"editor-form"},[i("div",{staticClass:"form-content editor-form-content"},[i("div",{staticClass:"card editor-card blue darken-1 white-text"},[i("div",{staticClass:"card-content editor-card-content"},[i("span",{staticClass:"card-title"},[t._v("ФИО")]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedName,expression:"editedName",modifiers:{trim:!0}}],attrs:{id:"name",type:"text"},domProps:{value:t.editedName},on:{input:function(e){e.target.composing||(t.editedName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"name"}},[t._v("Имя")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedSurname,expression:"editedSurname",modifiers:{trim:!0}}],attrs:{id:"surname",type:"text"},domProps:{value:t.editedSurname},on:{input:function(e){e.target.composing||(t.editedSurname=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"surname"}},[t._v("Фамилия")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedPatronymic,expression:"editedPatronymic",modifiers:{trim:!0}}],attrs:{id:"patronymic",type:"text"},domProps:{value:t.editedPatronymic},on:{input:function(e){e.target.composing||(t.editedPatronymic=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"patronymic"}},[t._v("Отчество")])])])]),i("div",{staticClass:"card editor-card blue darken-1 white-text"},[i("div",{staticClass:"card-content editor-card-content"},[i("span",{staticClass:"card-title"},[t._v("Личные данные")]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedBirthday,expression:"editedBirthday",modifiers:{trim:!0}}],attrs:{id:"birthday",type:"text"},domProps:{value:t.editedBirthday},on:{input:function(e){e.target.composing||(t.editedBirthday=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"birthday"}},[t._v("Дата Рождения")])]),i("div",{staticClass:"input-field editor-input"},[i("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedSex,expression:"editedSex",modifiers:{trim:!0}}],staticClass:"browser-default editor-select",attrs:{id:"sex"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.editedSex=e.target.multiple?i:i[0]}}},[i("option",{staticClass:"editor-option",attrs:{value:"1"}},[t._v("Мужской")]),i("option",{staticClass:"editor-option",attrs:{value:"2"}},[t._v("Женский")])]),i("label",{staticClass:"active"},[t._v("Пол")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedNationality,expression:"editedNationality",modifiers:{trim:!0}}],attrs:{id:"nationality",type:"text"},domProps:{value:t.editedNationality},on:{input:function(e){e.target.composing||(t.editedNationality=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"nationality"}},[t._v("Национальность")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedMedicalBook,expression:"editedMedicalBook",modifiers:{trim:!0}}],attrs:{id:"medicalBook",type:"text"},domProps:{value:t.editedMedicalBook},on:{input:function(e){e.target.composing||(t.editedMedicalBook=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"medicalBook"}},[t._v("Медицинская Книга")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedEducation,expression:"editedEducation",modifiers:{trim:!0}}],attrs:{id:"education",type:"text"},domProps:{value:t.editedEducation},on:{input:function(e){e.target.composing||(t.editedEducation=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"education"}},[t._v("Образование")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedUniversity,expression:"editedUniversity",modifiers:{trim:!0}}],attrs:{id:"university",type:"text"},domProps:{value:t.editedUniversity},on:{input:function(e){e.target.composing||(t.editedUniversity=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"university"}},[t._v("ВУЗ")])])])]),i("div",{staticClass:"card editor-card blue darken-1 white-text"},[i("div",{staticClass:"card-content editor-card-content"},[i("span",{staticClass:"card-title"},[t._v("Паспортные данные")]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedPassportID,expression:"editedPassportID",modifiers:{trim:!0}}],attrs:{id:"passportID",type:"text"},domProps:{value:t.editedPassportID},on:{input:function(e){e.target.composing||(t.editedPassportID=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"PassportID"}},[t._v("Номер Паспорта")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedPassportDate,expression:"editedPassportDate",modifiers:{trim:!0}}],attrs:{id:"passportDate",type:"text"},domProps:{value:t.editedPassportDate},on:{input:function(e){e.target.composing||(t.editedPassportDate=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"passportDate"}},[t._v("Дата Выдачи Паспорта")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedPassportIssued,expression:"editedPassportIssued",modifiers:{trim:!0}}],attrs:{id:"passportIssued",type:"text"},domProps:{value:t.editedPassportIssued},on:{input:function(e){e.target.composing||(t.editedPassportIssued=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"passportIssued"}},[t._v("Кем выдан")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedRegistration,expression:"editedRegistration",modifiers:{trim:!0}}],attrs:{id:"registration",type:"text"},domProps:{value:t.editedRegistration},on:{input:function(e){e.target.composing||(t.editedRegistration=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"registration"}},[t._v("Прописка")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedAddress,expression:"editedAddress",modifiers:{trim:!0}}],attrs:{id:"address",type:"text"},domProps:{value:t.editedAddress},on:{input:function(e){e.target.composing||(t.editedAddress=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"address"}},[t._v("Адрес")])])])]),i("div",{staticClass:"card editor-card blue darken-1 white-text"},[i("div",{staticClass:"card-content editor-card-content"},[i("span",{staticClass:"card-title"},[t._v("Банковские данные")]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedNameCard,expression:"editedNameCard",modifiers:{trim:!0}}],attrs:{id:"nameCard",type:"text"},domProps:{value:t.editedNameCard},on:{input:function(e){e.target.composing||(t.editedNameCard=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"nameCard"}},[t._v("Имя Держателя Карты")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedSurnameCard,expression:"editedSurnameCard",modifiers:{trim:!0}}],attrs:{id:"surnameCard",type:"text"},domProps:{value:t.editedSurnameCard},on:{input:function(e){e.target.composing||(t.editedSurnameCard=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"surnameCard"}},[t._v("Фамилия Держателя Карты")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedAccountNumberCard,expression:"editedAccountNumberCard",modifiers:{trim:!0}}],attrs:{id:"accountNumberCard",type:"text"},domProps:{value:t.editedAccountNumberCard},on:{input:function(e){e.target.composing||(t.editedAccountNumberCard=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"accountNumberCard"}},[t._v("Номер Карты")])]),i("div",{staticClass:"input-field editor-input"},[i("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedBank,expression:"editedBank",modifiers:{trim:!0}}],staticClass:"browser-default editor-select",attrs:{id:"bank"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.editedBank=e.target.multiple?i:i[0]}}},[i("option",{staticClass:"editor-option",attrs:{value:"1"}},[t._v("СберБанк")]),i("option",{staticClass:"editor-option",attrs:{value:"2"}},[t._v("Банк ВТБ")]),i("option",{staticClass:"editor-option",attrs:{value:"3"}},[t._v("Газпромбанк")]),i("option",{staticClass:"editor-option",attrs:{value:"4"}},[t._v("Национальный Клиринговый Центр")]),i("option",{staticClass:"editor-option",attrs:{value:"5"}},[t._v("Альфа-Банк")]),i("option",{staticClass:"editor-option",attrs:{value:"6"}},[t._v("Россельхозбанк")]),i("option",{staticClass:"editor-option",attrs:{value:"7"}},[t._v("Московский Кредитный Банк")]),i("option",{staticClass:"editor-option",attrs:{value:"8"}},[t._v("Банк «Открытие»")]),i("option",{staticClass:"editor-option",attrs:{value:"9"}},[t._v("Совкомбанк")]),i("option",{staticClass:"editor-option",attrs:{value:"10"}},[t._v("Росбанк")]),i("option",{staticClass:"editor-option",attrs:{value:"11"}},[t._v("Тинькофф Банк")])]),i("label",{staticClass:"active"},[t._v("Банк")])])])]),i("div",{staticClass:"card editor-card blue darken-1 white-text"},[i("div",{staticClass:"card-content editor-card-content"},[i("span",{staticClass:"card-title"},[t._v("Контактные данные")]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedHomePhone,expression:"editedHomePhone",modifiers:{trim:!0}}],attrs:{id:"homePhone",type:"text"},domProps:{value:t.editedHomePhone},on:{input:function(e){e.target.composing||(t.editedHomePhone=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"homePhone"}},[t._v("Телефон Домашний")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedMobilePhone,expression:"editedMobilePhone",modifiers:{trim:!0}}],attrs:{id:"mobilePhone",type:"text"},domProps:{value:t.editedMobilePhone},on:{input:function(e){e.target.composing||(t.editedMobilePhone=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"mobilePhone"}},[t._v("Телефон Мобильный")])])])]),i("div",{staticClass:"card editor-card blue darken-1 white-text"},[i("div",{staticClass:"card-content editor-card-content"},[i("span",{staticClass:"card-title"},[t._v("Рабочие данные")]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedAccountNumber,expression:"editedAccountNumber",modifiers:{trim:!0}}],attrs:{id:"accountNumber",type:"text"},domProps:{value:t.editedAccountNumber},on:{input:function(e){e.target.composing||(t.editedAccountNumber=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"accountNumber"}},[t._v("Учётный номер")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedNumber,expression:"editedNumber",modifiers:{trim:!0}}],attrs:{id:"number",type:"text"},domProps:{value:t.editedNumber},on:{input:function(e){e.target.composing||(t.editedNumber=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"number"}},[t._v("Номер")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedPreviousWork,expression:"editedPreviousWork",modifiers:{trim:!0}}],attrs:{id:"previousWork",type:"text"},domProps:{value:t.editedPreviousWork},on:{input:function(e){e.target.composing||(t.editedPreviousWork=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"previousWork"}},[t._v("Прежняя Работа")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedReasonComing,expression:"editedReasonComing",modifiers:{trim:!0}}],attrs:{id:"reasonComing",type:"text"},domProps:{value:t.editedReasonComing},on:{input:function(e){e.target.composing||(t.editedReasonComing=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"reasonComing"}},[t._v("Почему пришел к нам")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedProfessions,expression:"editedProfessions",modifiers:{trim:!0}}],attrs:{id:"professions",type:"text"},domProps:{value:t.editedProfessions},on:{input:function(e){e.target.composing||(t.editedProfessions=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"professions"}},[t._v("Профессии")])]),i("div",{staticClass:"input-field editor-input"},[i("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedNightShift,expression:"editedNightShift",modifiers:{trim:!0}}],staticClass:"browser-default editor-select",attrs:{id:"nightShift"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.editedNightShift=e.target.multiple?i:i[0]}}},[i("option",{staticClass:"editor-option",attrs:{value:"1"}},[t._v("Да")]),i("option",{staticClass:"editor-option",attrs:{value:"2"}},[t._v("Нет")])]),i("label",{staticClass:"active"},[t._v("Ночная")])]),i("div",{staticClass:"input-field editor-input"},[i("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedCheckMVD,expression:"editedCheckMVD",modifiers:{trim:!0}}],staticClass:"browser-default editor-select",attrs:{id:"checkMVD"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.editedCheckMVD=e.target.multiple?i:i[0]}}},[i("option",{staticClass:"editor-option",attrs:{value:"1"}},[t._v("Да")]),i("option",{staticClass:"editor-option",attrs:{value:"2"}},[t._v("Нет")])]),i("label",{staticClass:"active"},[t._v("Проверка МВД")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedDateInterview,expression:"editedDateInterview",modifiers:{trim:!0}}],attrs:{id:"dateInterview",type:"text"},domProps:{value:t.editedDateInterview},on:{input:function(e){e.target.composing||(t.editedDateInterview=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"dateInterview"}},[t._v("Дата Собеседования")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedUniform,expression:"editedUniform",modifiers:{trim:!0}}],attrs:{id:"uniform",type:"text"},domProps:{value:t.editedUniform},on:{input:function(e){e.target.composing||(t.editedUniform=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"uniform"}},[t._v("Униформа")])]),i("div",{staticClass:"input-field editor-input"},[i("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedFired,expression:"editedFired",modifiers:{trim:!0}}],staticClass:"browser-default editor-select",attrs:{id:"fired"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.editedFired=e.target.multiple?i:i[0]}}},[i("option",{staticClass:"editor-option",attrs:{value:"1"}},[t._v("Да")]),i("option",{staticClass:"editor-option",attrs:{value:"2"}},[t._v("Нет")])]),i("label",{staticClass:"active"},[t._v("Уволен")])])])]),t.coincidence?i("div",{staticClass:"card editor-card red darken-1 white-text"},[t._m(0)]):t._e()])])])])])]),i("div",{staticClass:"editor-btns"},[i("button",{staticClass:"btn editor-btn waves-effect waves-light auth-submit blue darken-2",on:{click:function(e){return t.editorCollection(t.workers)}}},[i("i",{staticClass:"material-icons"},[t._v("create")]),t._v(" Редактировать ")]),i("button",{staticClass:"btn editor-btn waves-effect waves-light auth-submit blue darken-2",on:{click:function(e){return e.preventDefault(),t.popupVisibility(e)}}},[i("i",{staticClass:"material-icons"},[t._v("arrow_back")]),t._v(" Вернуться назад ")])])],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card-content editor-card-content"},[i("span",{staticClass:"card-title error-title"},[t._v("Ошибка!")]),i("div",[i("p",[t._v("Проверьте правильность заполнения формы")])])])}],s=(i("4de4"),i("c740"),i("4160"),i("b0c0"),i("159b"),i("3905")),d=i("4d5c"),o=i.n(d),n={name:"AddWorkers",components:{Popup:s["a"]},data:function(){return{popupShow:!1,coincidence:!1,workers:[{}],editedName:"",editedSurname:"",editedPatronymic:"",editedAccountNumber:"",editedNumber:"",editedNameCard:"",editedSurnameCard:"",editedAccountNumberCard:"",editedBank:"",editedBirthday:"",editedSex:"",editedNationality:"",editedPassportID:"",editedPassportDate:"",editedPassportIssued:"",editedRegistration:"",editedAddress:"",editedHomePhone:"",editedMobilePhone:"",editedMedicalBook:"",editedEducation:"",editedUniversity:"",editedPreviousWork:"",editedReasonComing:"",editedProfessions:"",editedNightShift:"",editedCheckMVD:"",editedDateInterview:"",editedUniform:"",editedFired:"",editedEdited:!1}},methods:{popupVisibility:function(){this.popupShow=!0},popupHidden:function(){this.popupShow=!1},validate:function(){this.$v.$invalid&&this.$v.$touch()},searchIndex:function(t){var e=t.filter((function(t){return!1!==t.edited}));return t.findIndex((function(t){return t.id===e[0].id}))},editorExit:function(t){t[this.searchIndex(t)].edited=!1,this.saveCollection(this.workers,"workers"),this.$router.push("/workers")},outputCollection:function(t,e){this.editedName=t[this.searchIndex(t)].name,this.editedSurname=t[this.searchIndex(t)].surname,this.editedPatronymic=t[this.searchIndex(t)].patronymic,this.editedAccountNumber=t[this.searchIndex(t)].accountNumber,this.editedNumber=t[this.searchIndex(t)].number,this.editedNameCard=t[this.searchIndex(t)].nameCard,this.editedSurnameCard=t[this.searchIndex(t)].surnameCard,this.editedAccountNumberCard=t[this.searchIndex(t)].accountNumberCard,this.editedBank=t[this.searchIndex(t)].bank,this.editedBirthday=t[this.searchIndex(t)].birthday,this.editedSex=t[this.searchIndex(t)].sex,this.editedNationality=t[this.searchIndex(t)].nationality,this.editedPassportID=t[this.searchIndex(t)].passportID,this.editedPassportDate=t[this.searchIndex(t)].passportDate,this.editedPassportIssued=t[this.searchIndex(t)].passportIssued,this.editedRegistration=t[this.searchIndex(t)].registration,this.editedAddress=t[this.searchIndex(t)].address,this.editedHomePhone=t[this.searchIndex(t)].homePhone,this.editedMobilePhone=t[this.searchIndex(t)].mobilePhone,this.editedMedicalBook=t[this.searchIndex(t)].medicalBook,this.editedEducation=t[this.searchIndex(t)].education,this.editedUniversity=t[this.searchIndex(t)].university,this.editedPreviousWork=t[this.searchIndex(t)].previousWork,this.editedReasonComing=t[this.searchIndex(t)].reasonComing,this.editedProfessions=t[this.searchIndex(t)].professions,this.editedNightShift=t[this.searchIndex(t)].nightShift,this.editedCheckMVD=t[this.searchIndex(t)].checkMVD,this.editedDateInterview=t[this.searchIndex(t)].dateInterview,this.editedUniform=t[this.searchIndex(t)].uniform,this.editedFired=t[this.searchIndex(t)].fired},editorCollection:function(t,e){t[this.searchIndex(t)].name=this.editedName,t[this.searchIndex(t)].surname=this.editedSurname,t[this.searchIndex(t)].patronymic=this.editedPatronymic,t[this.searchIndex(t)].accountNumber=this.editedAccountNumber,t[this.searchIndex(t)].number=this.editedNumber,t[this.searchIndex(t)].nameCard=this.editedNameCard,t[this.searchIndex(t)].surnameCard=this.editedSurnameCard,t[this.searchIndex(t)].accountNumberCard=this.editedAccountNumberCard,t[this.searchIndex(t)].bank=this.editedBank,t[this.searchIndex(t)].birthday=this.editedBirthday,t[this.searchIndex(t)].sex=this.editedSex,t[this.searchIndex(t)].nationality=this.editedNationality,t[this.searchIndex(t)].passportID=this.editedPassportID,t[this.searchIndex(t)].passportDate=this.editedPassportDate,t[this.searchIndex(t)].passportIssued=this.editedPassportIssued,t[this.searchIndex(t)].registration=this.editedRegistration,t[this.searchIndex(t)].address=this.editedAddress,t[this.searchIndex(t)].homePhone=this.editedHomePhone,t[this.searchIndex(t)].mobilePhone=this.editedMobilePhone,t[this.searchIndex(t)].medicalBook=this.editedMedicalBook,t[this.searchIndex(t)].education=this.editedEducation,t[this.searchIndex(t)].university=this.editedUniversity,t[this.searchIndex(t)].previousWork=this.editedPreviousWork,t[this.searchIndex(t)].reasonComing=this.editedReasonComing,t[this.searchIndex(t)].professions=this.editedProfessions,t[this.searchIndex(t)].nightShift=this.editedNightShift,t[this.searchIndex(t)].checkMVD=this.editedCheckMVD,t[this.searchIndex(t)].dateInterview=this.editedDateInterview,t[this.searchIndex(t)].uniform=this.editedUniform,t[this.searchIndex(t)].fired=this.editedFired,this.editorExit(t)},saveCollection:function(t,e){var i=JSON.stringify(t);localStorage.setItem(e,i)},updateCollection:function(t){if(localStorage.getItem(t))try{this.workers=JSON.parse(localStorage.getItem(t))}catch(e){localStorage.removeItem(t)}}},mounted:function(){this.updateCollection("workers");var t=document.querySelectorAll(".select");t.forEach((function(t){o.a.FormSelect.init(t)})),this.outputCollection(this.workers)}},c=n,u=(i("8166"),i("2877")),l=Object(u["a"])(c,a,r,!1,null,"2267665f",null);e["default"]=l.exports},"4de4":function(t,e,i){"use strict";var a=i("23e7"),r=i("b727").filter,s=i("1dde"),d=i("ae40"),o=s("filter"),n=d("filter");a({target:"Array",proto:!0,forced:!o||!n},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},8166:function(t,e,i){"use strict";i("af82")},af82:function(t,e,i){},b0c0:function(t,e,i){var a=i("83ab"),r=i("9bf2").f,s=Function.prototype,d=s.toString,o=/^\s*function ([^ (]*)/,n="name";a&&!(n in s)&&r(s,n,{configurable:!0,get:function(){try{return d.call(this).match(o)[1]}catch(t){return""}}})},c740:function(t,e,i){"use strict";var a=i("23e7"),r=i("b727").findIndex,s=i("44d2"),d=i("ae40"),o="findIndex",n=!0,c=d(o);o in[]&&Array(1)[o]((function(){n=!1})),a({target:"Array",proto:!0,forced:n||!c},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)}}]);
//# sourceMappingURL=chunk-44ef77a4.b158d60e.js.map