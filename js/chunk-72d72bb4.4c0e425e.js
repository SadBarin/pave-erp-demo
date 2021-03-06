(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72d72bb4"],{3368:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppPopupWrapper",{attrs:{hidden:e.hidePopupStatus}},[n("AppTopPanel",{attrs:{header:e.header},scopedSlots:e._u([{key:"nav-buttons",fn:function(){return[n("AppButtonIcon",{attrs:{icon:"delete",size:"1.8rem",title:"Удалить"},on:{"button-click":function(t){return e.$emit("delete-element")}}}),n("AppButtonIcon",{attrs:{icon:"close",size:"1.8rem",title:"Закрыть"},on:{"button-click":function(t){return e.$emit("close-popup")}}})]},proxy:!0}])}),n("div",{staticClass:"popup-delete-wrapper"},[n("p",[e._t("popup-delete-content")],2)])],1)},a=[],p=n("a26a"),i=n("34b0"),s=n("373c"),c={name:"PopupDeleteWrapper",components:{AppPopupWrapper:p["a"],AppTopPanel:i["a"],AppButtonIcon:s["a"]},props:{hidePopupStatus:Boolean,header:String}},l=c,r=(n("93f4"),n("2877")),d=Object(r["a"])(l,o,a,!1,null,"18d3d347",null);t["a"]=d.exports},"73a7":function(e,t,n){"use strict";n("94ec")},7980:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-edit"}},[n("PopupDeleteWrapper",{attrs:{hidePopupStatus:e.popupRemoveHidden,header:"Удаление сделки "+e.editedDeal.name},on:{"close-popup":e.popupRemoveToggle,"delete-element":function(t){return e.removeDeal(e.editedDeal)}},scopedSlots:e._u([{key:"popup-delete-content",fn:function(){return[e._v(" После нажатия на иконку корзины будет удалёна сделка "),n("b",[e._v(e._s(e.editedDeal.name))])]},proxy:!0}])}),n("AppEditWrapper",{attrs:{header:"Редактор сделок: "+e.editedDeal.name},scopedSlots:e._u([{key:"nav-buttons",fn:function(){return[n("AppButtonIcon",{attrs:{icon:"delete",size:"1.8",title:"Удалить"},on:{"button-click":e.popupRemoveToggle}}),n("AppButtonIcon",{attrs:{icon:"save",size:"1.8",title:"Сохранить и выйти"},on:{"button-click":function(t){return e.saveEditedDeal(e.editedDeal)}}}),n("AppButtonIcon",{attrs:{icon:"attach_money",size:"1.8",title:"Вернуться"},on:{"button-click":e.editorExit}})]},proxy:!0},{key:"edit-section",fn:function(){return[n("div",{staticClass:"edit-block"},[n("AppHeaderIcon",{staticClass:"edit-block-header",attrs:{"header-level":"4","material-icon":"import_contacts","header-text":"Основные данные"}}),n("div",{staticClass:"edit-block-content"},[n("AppLineText",{attrs:{inputID:"input-city",label:"Название сделки: ",maxLength:"20"},model:{value:e.editedDeal.name,callback:function(t){e.$set(e.editedDeal,"name",t)},expression:"editedDeal.name"}})],1)],1),n("div",{staticClass:"edit-block"},[n("AppHeaderIcon",{staticClass:"edit-block-header",attrs:{"header-level":"4","material-icon":"chrome_reader_mode","header-text":"Заметки"}}),n("div",{staticClass:"edit-block-content"},[n("AppNumbers",{attrs:{inputID:"input-note-count",label:"Заметок в списке:  ",minValue:"0",maxValue:"35",maxLength:"3"},model:{value:e.editedDeal.notesCount,callback:function(t){e.$set(e.editedDeal,"notesCount",t)},expression:"editedDeal.notesCount"}}),n("AppLineText",{attrs:{placeholder:"Введите новую заметку",inputID:"input-note",label:"Новая Заметка: ",maxLength:"35"},model:{value:e.note,callback:function(t){e.note=t},expression:"note"}}),n("AppNotesList",{attrs:{"notes-list":e.editedDeal.notes,"notes-count":e.editedDeal.notesCount}})],1)],1)]},proxy:!0}])})],1)},a=[],p=n("5530"),i=(n("99af"),n("260b")),s=n("2f62"),c=n("2721"),l=n("38a1"),r=n("c0a7"),d=n("1b06"),u=n("49a1"),h=n("373c"),m=n("3368"),f={name:"DealEdit",components:{AppEditWrapper:c["a"],AppHeaderIcon:l["a"],AppButtonIcon:h["a"],AppLineText:d["a"],AppNumbers:u["a"],AppNotesList:r["a"],PopupDeleteWrapper:m["a"]},data:function(){return{popupRemoveHidden:!0,editedDeal:"",note:""}},computed:Object(p["a"])({},Object(s["c"])(["deals"])),created:function(){this.SET_DEALS_FROM_LOCAL_STORAGE(),this.editedDeal=this.deals[this.$route.params.id]},methods:Object(p["a"])(Object(p["a"])({},Object(s["d"])(["SET_DEALS_FROM_SERVER","SET_DEALS_FROM_LOCAL_STORAGE"])),{},{popupRemoveToggle:function(){this.popupRemoveHidden=!this.popupRemoveHidden},removeDeal:function(e){var t=this;this.popupRemoveToggle(),this.editorExit(),i["a"].database().ref("/deals/"+e.id).remove().then((function(){console.log("Сделка удалёна 🗑️"),t.SET_DEALS_FROM_SERVER()}))},editorExit:function(){this.$router.push("/deals")},saveEditedDeal:function(e){var t=this;if(this.note.length)try{this.editedDeal.notes.push("".concat((new Date).toLocaleDateString(),": ").concat(this.note))}catch(n){this.editedDeal.notes=[],this.editedDeal.notes.push("".concat((new Date).toLocaleDateString(),": ").concat(this.note))}i["a"].database().ref("/deals/"+e.id).set(e).then((function(){t.SET_DEALS_FROM_SERVER(),t.editorExit(),M.toast({html:"Данные сохранены!"})}))}})},v=f,b=n("2877"),D=Object(b["a"])(v,o,a,!1,null,null,null);t["default"]=D.exports},"93f4":function(e,t,n){"use strict";n("e420")},"94ec":function(e,t,n){},a26a:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.hidden?"hidden":"",attrs:{id:"app-popup-wrapper"}},[n("div",{staticClass:"popup-wrapper-overlay"},[n("div",{staticClass:"popup-wrapper-content"},[e._t("default")],2)])])},a=[],p={name:"PopupWrapper",props:{hidden:Boolean}},i=p,s=(n("73a7"),n("2877")),c=Object(s["a"])(i,o,a,!1,null,"70be0339",null);t["a"]=c.exports},e420:function(e,t,n){}}]);
//# sourceMappingURL=chunk-72d72bb4.4c0e425e.js.map