(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c02d7"],{4159:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"page-title flex-between-center"},[s("h3",{staticClass:"right-margin-big"},[e._v("История редактирования сотрудника"),s("br"),e._v(e._s(e.employee.surname)+" "+e._s(e.employee.name))]),s("div",{staticClass:"editor-btns"},[s("router-link",{staticClass:"btn btn-hover pointer blue darken-1",attrs:{to:{name:"employeeEdit",params:{id:e.employee.id}}}},[s("i",{staticClass:"material-icons"},[e._v("create")]),e._v(" В редактор ")]),s("router-link",{staticClass:"btn btn-hover blue darken-1",attrs:{to:"/employees"}},[s("i",{staticClass:"material-icons"},[e._v("group")]),e._v(" К сотрудникам ")])],1)]),s("section",e._l(e.employee.history,(function(t,i){return s("div",{key:i},[s("div",{staticClass:"history-line"},[s("p",{staticClass:"history-index"},[e._v(e._s(i)+":")]),s("div",{staticClass:"history-moment"},[s("span",{staticClass:"history-moment-date"},[e._v(e._s(t.date))]),s("p",{staticClass:"history-moment-text"},[e._v(e._s(t.info))]),s("router-link",{attrs:{title:"Перейти к сотруднику",to:{name:"employeeEdit",params:{id:t.employee.id}}}},[e._v(" "+e._s(t.employee.name)+" ")])],1)])])})),0)])},a=[],n=s("5530"),o=s("2f62"),l={name:"HistoryEmployees",data:function(){return{employee:""}},computed:Object(n["a"])({},Object(o["c"])(["employees"])),methods:Object(n["a"])({},Object(o["d"])(["SET_EMPLOYEES_FROM_LOCAL_STORAGE"])),mounted:function(){this.SET_EMPLOYEES_FROM_LOCAL_STORAGE(),this.employee=this.employees[this.$route.params.id]}},r=l,c=s("2877"),m=Object(c["a"])(r,i,a,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0c02d7.2f8dc54e.js.map