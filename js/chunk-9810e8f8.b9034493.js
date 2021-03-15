(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9810e8f8"],{"48a5":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-title flex-between-center"},[s("div",{staticClass:"flex-center"},[s("h3",{staticClass:"right-margin-big"},[t._v("Список клиентов")]),s("div",{staticClass:"flex-center"},[s("button",{staticClass:"btn-transparent transparent btn-page-title blue-text text-darken-1",attrs:{title:"Обновить страницу"},on:{click:t.updateCustomers}},[s("i",{staticClass:"material-icons middle-material-icons"},[t._v("autorenew")])])])]),s("InputAdd",{attrs:{placeholder:"Добавить нового клиента"},on:{"add-element":t.addCustomer}})],1),s("section",[s("TableWorkers",{attrs:{customers:t.customers},on:{"remove-customer":t.removeCustomer}})],1)])},n=[],i=(s("b0c0"),s("5530")),r=s("8e20"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.popupShow?s("Popup",{attrs:{"popup-toast":"Клиент был удалён!"},on:{yes:function(e){return t.removeCustomer(t.customer)},no:function(e){return t.popupHidden()}},scopedSlots:t._u([{key:"title-popup",fn:function(){return[t._v(" Удалить? ")]},proxy:!0},{key:"text-info-popup",fn:function(){return[t._v(" Клиент "),s("b",[t._v(t._s(t.customer.name))]),t._v(" будет удалён ")]},proxy:!0}],null,!1,12950149)}):t._e(),s("table",[t._m(0),t._l(t.customers,(function(e){return s("tr",{key:e.value},[s("td",[s("div",{staticClass:"parent-clip-text"},[s("p",{staticClass:"clip-text",attrs:{title:e.name}},[t._v(t._s(e.name))])])]),s("td",[s("a",{attrs:{href:"tel:"+e.number,title:"Позвонить"}},[t._v(t._s(e.subdivisions["0"].number))])]),s("td",[s("div",{staticClass:"parent-clip-text"},[s("a",{staticClass:"clip-text",attrs:{title:e.site,target:"_blank",href:e.site}},[t._v(t._s(e.subdivisions["0"].site))])])]),s("td",[s("div",{staticClass:"parent-clip-text"},[s("a",{staticClass:"clip-text",attrs:{href:"mailto:"+e.email,title:"Написать на почту: "+e.email}},[t._v(t._s(e.subdivisions["0"].email))])])]),s("td",[s("div",{staticClass:"parent-clip-text"},[s("p",{staticClass:"clip-text",attrs:{title:e.address}},[t._v(t._s(e.subdivisions["0"].address))])])]),s("td",[s("div",{staticClass:"flex-center btns-collection"},[s("router-link",{staticClass:"btn-transparent transparent waves-effect waves-light auth-submit blue-text text-darken-1",attrs:{title:"Подразделения",to:{name:"customerSubdivisions",params:{id:e.id}}}},[s("i",{staticClass:"material-icons"},[t._v("domain")])]),s("router-link",{staticClass:"btn-transparent transparent waves-effect waves-light auth-submit blue-text text-darken-1",attrs:{title:"Просмотреть",to:{name:"customerAbout",params:{id:e.id}}}},[s("i",{staticClass:"material-icons"},[t._v("remove_red_eye")])]),s("router-link",{staticClass:"btn-transparent transparent waves-effect waves-light auth-submit blue-text text-darken-1",attrs:{title:"Редактировать",to:{name:"customerEdit",params:{id:e.id}}}},[s("i",{staticClass:"material-icons"},[t._v("create")])]),e.edited?t._e():s("button",{staticClass:"btn-transparent transparent waves-effect waves-light auth-submit blue-text text-darken-1",attrs:{title:"Удалить"},on:{click:function(s){t.popupVisibility(e),t.setCustomer(e)}}},[s("i",{staticClass:"material-icons"},[t._v("delete")])])],1)])])}))],2)],1)},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",[t._v("Наименование")]),s("th",[t._v("Телефон")]),s("th",[t._v("Сайт")]),s("th",[t._v("Почта")]),s("th",[t._v("Адрес")])])}],c=s("5614"),u={name:"TableCustomers",mixins:[c["a"]],props:{customers:Object},data:function(){return{customer:""}},created:function(){console.log(this.customers)},methods:{setCustomer:function(t){this.customer=t},removeCustomer:function(t){this.$emit("remove-customer",t.id),this.popupHidden()}}},m=u,d=s("2877"),p=Object(d["a"])(m,o,l,!1,null,null,null),_=p.exports,v=s("2f62"),f=s("260b"),b={name:"Customers",components:{InputAdd:r["a"],TableWorkers:_},computed:Object(i["a"])({},Object(v["c"])(["customers","authEmployee"])),created:function(){this.SET_EMPLOYEES_FROM_LOCAL_STORAGE(),this.SET_CUSTOMERS_FROM_LOCAL_STORAGE()},methods:Object(i["a"])(Object(i["a"])({},Object(v["d"])(["SET_CUSTOMERS_FROM_SERVER","SET_CUSTOMERS_FROM_LOCAL_STORAGE","SET_EMPLOYEES_FROM_LOCAL_STORAGE"])),{},{removeCustomer:function(t){var e=this;f["a"].database().ref("/customers/"+t).remove().then((function(){e.SET_CUSTOMERS_FROM_SERVER(),console.log("Клиент удалён 🗑️")}))},addCustomer:function(t){var e=this,s={id:Date.now(),name:t,note:"Новый клиент",subdivisions:{0:{id:"0",name:"Главное подразделение",contractNumber:"",contractDate:"",number:"",fax:"",site:"",email:"",note:"Главное подразделение клиента",address:this.authEmployee.city,manager:this.authEmployee.surname+" "+this.authEmployee.name,status:"Действующий"}}};f["a"].database().ref("/customers/"+s.id).set(s).then((function(){e.SET_CUSTOMERS_FROM_SERVER(),console.log("Клиент добавлен ➕")}))},updateCustomers:function(){this.SET_CUSTOMERS_FROM_SERVER(),M.toast({html:"Наши клиенты обновлены"})}})},h=b,C=Object(d["a"])(h,a,n,!1,null,null,null);e["default"]=C.exports},"8e20":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"flex-center",on:{submit:function(e){return e.preventDefault(),t.submitElement(e)}}},[s("div",{staticClass:"input-field margin-fix right-margin-little"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.name,expression:"name",modifiers:{trim:!0}}],staticClass:"input-add",attrs:{type:"text",maxlength:"50",placeholder:t.placeholder},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._m(0)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn-transparent transparent btn-page-title blue-text text-darken-1",attrs:{type:"submit"}},[s("i",{staticClass:"material-icons big-material-icons"},[t._v("add")])])}],i=(s("b0c0"),{name:"InputAdd",props:{placeholder:String},data:function(){return{name:""}},methods:{submitElement:function(){this.$emit("add-element",this.name),this.name=""}}}),r=i,o=s("2877"),l=Object(o["a"])(r,a,n,!1,null,null,null);e["a"]=l.exports},b0c0:function(t,e,s){var a=s("83ab"),n=s("9bf2").f,i=Function.prototype,r=i.toString,o=/^\s*function ([^ (]*)/,l="name";a&&!(l in i)&&n(i,l,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-9810e8f8.b9034493.js.map