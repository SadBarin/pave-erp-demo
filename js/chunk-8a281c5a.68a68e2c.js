(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a281c5a"],{1040:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page-title flex-between-center"},[r("h3",{staticClass:"right-margin-big"},[e._v("История редактирования рабочего"),r("br"),e._v('"'+e._s(e.worker.surname)+" "+e._s(e.worker.name)+'"')]),r("NavWorker",{attrs:{worker:e.worker}})],1),r("section",e._l(e.worker.history,(function(t,a){return r("div",{key:a},[r("div",{staticClass:"history-line"},[r("p",{staticClass:"history-index"},[e._v(e._s(a)+":")]),r("div",{staticClass:"history-moment"},[r("span",{staticClass:"history-moment-date"},[e._v(e._s(t.date))]),r("p",{staticClass:"history-moment-text"},[e._v(e._s(t.info))]),r("router-link",{attrs:{title:"Перейти к сотруднику",to:{name:"employeeEdit",params:{id:t.employee.id}}}},[e._v(" "+e._s(t.employee.name)+" ")])],1)])])})),0)])},s=[],n=r("5530"),o=r("ba87"),i=r("2f62"),l={name:"HistoryWorkers",components:{NavWorker:o["a"]},data:function(){return{worker:""}},computed:Object(n["a"])({},Object(i["c"])(["workers"])),methods:Object(n["a"])({},Object(i["d"])(["SET_WORKERS_FROM_LOCAL_STORAGE"])),mounted:function(){this.SET_WORKERS_FROM_LOCAL_STORAGE(),this.worker=this.workers[this.$route.params.id],console.log(this.worker)}},u=l,c=r("2877"),m=Object(c["a"])(u,a,s,!1,null,null,null);t["default"]=m.exports},"3db7":function(e,t,r){"use strict";r("828d")},"828d":function(e,t,r){},ba87:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"btns-collection flex-between-center"},[e.popupShow?r("Popup",{attrs:{"popup-toast":e.worker.surname+" "+e.worker.name+" "+("Женский"===e.worker.sex?" была удалена":" был удалён!")},on:{yes:function(t){return e.removeWorker(e.worker.id)},no:function(t){return e.popupHidden()}},scopedSlots:e._u([{key:"title-popup",fn:function(){return[e._v(" Удалить? ")]},proxy:!0},{key:"text-info-popup",fn:function(){return[e._v(" "+e._s(e._f("sexMsgDelete")(e.worker.sex))+" "),r("b",[e._v(e._s(e.worker.surname)+" "+e._s(e.worker.name))])]},proxy:!0}],null,!1,1653179979)}):e._e(),r("button",{directives:[{name:"show",rawName:"v-show",value:"workerEdit"===e.$route.name,expression:"$route.name === 'workerEdit'"}],staticClass:"btn-transparent transparent blue-text text-darken-1",attrs:{title:"Сохранить и выйти"},on:{click:function(t){return e.$emit("save-worker")}}},[r("i",{staticClass:"material-icons"},[e._v("save")])]),r("router-link",{directives:[{name:"show",rawName:"v-show",value:"workerAbout"!==e.$route.name,expression:"$route.name !== 'workerAbout'"}],staticClass:"btn-transparent transparent blue-text text-darken-1",attrs:{title:"Просмотреть",to:{name:"workerAbout",params:{id:e.worker.id}}}},[r("i",{staticClass:"material-icons"},[e._v("remove_red_eye")])]),r("router-link",{directives:[{name:"show",rawName:"v-show",value:"workerCalendar"!==e.$route.name,expression:"$route.name !== 'workerCalendar'"}],staticClass:"btn-transparent transparent blue-text text-darken-1",attrs:{title:"Календарь",to:{name:"workerCalendar",params:{id:e.worker.id}}}},[r("i",{staticClass:"material-icons"},[e._v("date_range")])]),r("router-link",{directives:[{name:"show",rawName:"v-show",value:"workerHistory"!==e.$route.name,expression:"$route.name !== 'workerHistory'"}],staticClass:"btn-transparent transparent blue-text text-darken-1",attrs:{title:"История редактирования",to:{name:"workerHistory",params:{id:e.worker.id}}}},[r("i",{staticClass:"material-icons"},[e._v("description")])]),r("router-link",{directives:[{name:"show",rawName:"v-show",value:"workerEdit"!==e.$route.name,expression:"$route.name !== 'workerEdit'"}],staticClass:"btn-transparent transparent blue-text text-darken-1",attrs:{title:"Редактировать",to:{name:"workerEdit",params:{id:e.worker.id}}}},[r("i",{staticClass:"material-icons"},[e._v("create")])]),e.worker.edited?e._e():r("button",{staticClass:"btn-transparent transparent blue-text text-darken-1",attrs:{title:"Удалить"},on:{click:function(t){return e.popupVisibility(e.worker)}}},[r("i",{staticClass:"material-icons"},[e._v("delete")])])],1)},s=[],n=r("5530"),o=r("5614"),i=r("260b"),l=r("2f62"),u={name:"NavWorker",mixins:[o["a"]],props:["worker"],methods:Object(n["a"])(Object(n["a"])({},Object(l["d"])(["SET_WORKERS_FROM_SERVER"])),{},{removeWorker:function(e){var t=this;i["a"].database().ref("/workers/"+e).remove().then((function(){t.SET_WORKERS_FROM_SERVER(),console.log("Рабочий удалён 🗑️")})),this.$router.push("/workers"),this.popupHidden()}})},c=u,m=(r("3db7"),r("2877")),p=Object(m["a"])(c,a,s,!1,null,"7b723ec2",null);t["a"]=p.exports}}]);
//# sourceMappingURL=chunk-8a281c5a.68a68e2c.js.map