(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["draggable-list"],{"4a74":function(t,e,i){},"9d25":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"d",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return l})),i.d(e,"f",(function(){return c})),i.d(e,"e",(function(){return o}));var a=i("b32d"),s={id:0,status:"draft",title:"",fullContent:"",abstractContent:"",sourceURL:"",imageURL:"",timestamp:"",platforms:["a-platform"],disableComment:!1,importance:0,author:"",reviewer:"",type:"",pageviews:0},r=function(t){return Object(a["a"])({url:"/articles",method:"get",params:t})},n=function(t,e){return Object(a["a"])({url:"/articles/".concat(t),method:"get",params:e})},l=function(t){return Object(a["a"])({url:"/articles",method:"post",data:t})},c=function(t,e){return Object(a["a"])({url:"/articles/".concat(t),method:"put",data:e})},o=function(t){return Object(a["a"])({url:"/pageviews",method:"get",params:t})}},a623:function(t,e,i){"use strict";var a=i("23e7"),s=i("b727").every,r=i("a640"),n=i("ae40"),l=r("every"),c=n("every");a({target:"Array",proto:!0,forced:!l||!c},{every:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},dd7b:function(t,e,i){"use strict";var a=i("4a74"),s=i.n(a);s.a},e699:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"components-container"},[t._m(0),i("div",{staticClass:"editor-container"},[i("draggable-list",{attrs:{list1:t.list1,list2:t.list2,"list1-title":"List","list2-title":"Article pool"}})],1)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside",[t._v(" draggable-list base on "),i("a",{attrs:{href:"https://github.com/SortableJS/Vue.Draggable",target:"_blank"}},[t._v("Vue.Draggable")])])}],r=(i("a434"),i("96cf"),i("1da1")),n=i("d4ec"),l=i("bee2"),c=i("2caf"),o=i("262e"),u=i("9ab4"),d=i("60a3"),f=i("9d25"),b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"draggableList"},[i("div",{staticClass:"draggableList-list",style:{width:t.list1width}},[i("h3",[t._v(t._s(t.list1Title))]),i("draggable",{staticClass:"dragArea",attrs:{list:t.list1,group:"article"}},t._l(t.list1,(function(e){return i("div",{key:e.id,staticClass:"list-complete-item"},[i("div",{staticClass:"list-complete-item-handle"},[t._v(" "+t._s(e.id)+"["+t._s(e.author)+"] "+t._s(e.title)+" ")]),i("div",{staticStyle:{position:"absolute",right:"0px"}},[i("span",{staticStyle:{float:"right","margin-top":"-20px","margin-right":"5px"},on:{click:function(i){return t.deleteEle(e)}}},[i("i",{staticClass:"el-icon-delete",staticStyle:{color:"#ff4949"}})])])])})),0)],1),i("div",{staticClass:"draggableList-list",style:{width:t.list2width}},[i("h3",[t._v(t._s(t.list2Title))]),i("draggable",{staticClass:"dragArea",attrs:{list:t.list2,group:"article"}},t._l(t.list2,(function(e){return i("div",{key:e.id,staticClass:"list-complete-item"},[i("div",{staticClass:"list-complete-item-handle2",on:{click:function(i){return t.pushEle(e)}}},[t._v(" "+t._s(e.id)+" ["+t._s(e.author)+"] "+t._s(e.title)+" ")])])})),0)],1)])},p=[],h=(i("a623"),i("c975"),i("b85c")),v=i("310e"),g=i.n(v),m=function(t){Object(o["a"])(i,t);var e=Object(c["a"])(i);function i(){return Object(n["a"])(this,i),e.apply(this,arguments)}return Object(l["a"])(i,[{key:"isNotInList1",value:function(t){return this.list1.every((function(e){return t.id!==e.id}))}},{key:"isNotInList2",value:function(t){return this.list2.every((function(e){return t.id!==e.id}))}},{key:"deleteEle",value:function(t){var e,i=Object(h["a"])(this.list1);try{for(i.s();!(e=i.n()).done;){var a=e.value;if(a.id===t.id){var s=this.list1.indexOf(a);this.list1.splice(s,1);break}}}catch(r){i.e(r)}finally{i.f()}this.isNotInList2(t)&&this.list2.unshift(t)}},{key:"pushEle",value:function(t){var e,i=Object(h["a"])(this.list2);try{for(i.s();!(e=i.n()).done;){var a=e.value;if(a.id===t.id){var s=this.list2.indexOf(a);this.list2.splice(s,1);break}}}catch(r){i.e(r)}finally{i.f()}this.isNotInList1(t)&&this.list1.push(t)}}]),i}(d["c"]);Object(u["a"])([Object(d["b"])({default:function(){return[]}})],m.prototype,"list1",void 0),Object(u["a"])([Object(d["b"])({default:function(){return[]}})],m.prototype,"list2",void 0),Object(u["a"])([Object(d["b"])({default:"list1"})],m.prototype,"list1Title",void 0),Object(u["a"])([Object(d["b"])({default:"list2"})],m.prototype,"list2Title",void 0),Object(u["a"])([Object(d["b"])({default:"48%"})],m.prototype,"list1width",void 0),Object(u["a"])([Object(d["b"])({default:"48%"})],m.prototype,"list2width",void 0),m=Object(u["a"])([Object(d["a"])({name:"DraggableList",components:{Draggable:g.a}})],m);var O=m,j=O,y=(i("dd7b"),i("2877")),_=Object(y["a"])(j,b,p,!1,null,"8e633190",null),w=_.exports,k=function(t){Object(o["a"])(i,t);var e=Object(c["a"])(i);function i(){var t;return Object(n["a"])(this,i),t=e.apply(this,arguments),t.list1=[],t.list2=[],t}return Object(l["a"])(i,[{key:"created",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["d"])({});case 2:e=t.sent,i=e.data,this.list1=i.items.splice(0,5),this.list2=i.items;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),i}(d["c"]);k=Object(u["a"])([Object(d["a"])({name:"DraggableListDemo",components:{DraggableList:w}})],k);var C=k,L=C,x=Object(y["a"])(L,a,s,!1,null,null,null);e["default"]=x.exports}}]);