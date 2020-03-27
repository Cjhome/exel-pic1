(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["export-excel"],{1:function(t,e){},2:function(t,e){},"2bf8":function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));n("99af"),n("4160"),n("d81d"),n("c19f"),n("ace4"),n("d3b7"),n("25f0"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("159b");var a=n("2909"),i=n("d4ec"),o=n("21a6"),l=n("1146"),r=n.n(l),c=function t(){Object(i["a"])(this,t),this.SheetNames=[],this.Sheets={}},u=function(t){return(+t-+new Date(Date.UTC(1899,11,30)))/864e5},s=function(t){for(var e={},n={s:{c:1e7,r:1e7},e:{c:0,r:0}},a=0;a!==t.length;++a)for(var i=0;i!==t[a].length;++i){n.s.r>a&&(n.s.r=a),n.s.c>i&&(n.s.c=i),n.e.r<a&&(n.e.r=a),n.e.c<i&&(n.e.c=i);var o={v:t[a][i],t:"",z:""};if(null!=o.v){var l=r.a.utils.encode_cell({c:i,r:a});"number"===typeof o.v?o.t="n":"boolean"===typeof o.v?o.t="b":o.v instanceof Date?(o.t="n",o.z=r.a.SSF.get_table()[14],o.v=u(o.v)):o.t="s",e[l]=o}}return n.s.c<1e7&&(e["!ref"]=r.a.utils.encode_range(n)),e},d=function(t){for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),a=0;a!==t.length;++a)n[a]=255&t.charCodeAt(a);return e},f=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"excel-list",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],u=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],f=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"xlsx";e=Object(a["a"])(e),e.unshift(t);for(var b=i.length-1;b>-1;b--)e.unshift(i[b]);var p="SheetJS",h=new c,v=s(e);if(l.length>0&&(v["!merges"]||(v["!merges"]=[]),l.forEach((function(t){v["!merges"].push(r.a.utils.decode_range(t))}))),u){for(var m=e.map((function(t){return t.map((function(t){return null==t?{wch:10}:t.toString().charCodeAt(0)>255?{wch:2*t.toString().length}:{wch:t.toString().length}}))})),g=m[0],y=1;y<m.length;y++)for(var O=0;O<m[y].length;O++)g[O]["wch"]<m[y][O]["wch"]&&(g[O]["wch"]=m[y][O]["wch"]);v["!cols"]=g}h.SheetNames.push(p),h.Sheets[p]=v;var j=r.a.write(h,{bookType:f,bookSST:!1,type:"binary"});Object(o["saveAs"])(new Blob([d(j)],{type:"application/octet-stream"}),"".concat(n,".").concat(f))}},3:function(t,e){},"5fb3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",[n("filename-option",{model:{value:t.filename,callback:function(e){t.filename=e},expression:"filename"}}),n("auto-width-option",{model:{value:t.autoWidth,callback:function(e){t.autoWidth=e},expression:"autoWidth"}}),n("book-type-option",{model:{value:t.bookType,callback:function(e){t.bookType=e},expression:"bookType"}}),n("el-button",{staticStyle:{margin:"0 0 20px 20px"},attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-document"},on:{click:t.handleDownload}},[t._v(" "+t._s(t.$t("excel.export"))+" Excel ")]),n("a",{staticStyle:{"margin-left":"15px"},attrs:{href:"https://armour.github.io/vue-typescript-admin-docs/features/components/excel.html",target:"_blank"}},[n("el-tag",{attrs:{type:"info"}},[t._v("Documentation")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading...",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{width:"95",align:"center",label:"Id"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index)+" ")]}}])}),n("el-table-column",{attrs:{label:"Title"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.title)+" ")]}}])}),n("el-table-column",{attrs:{label:"Author",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",[t._v(t._s(e.row.author))])]}}])}),n("el-table-column",{attrs:{width:"115",align:"center",label:"Readings"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.pageviews)+" ")]}}])}),n("el-table-column",{attrs:{width:"220",align:"center",label:"Date"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),n("span",[t._v(t._s(t._f("parseTime")(e.row.timestamp)))])]}}])})],1)],1)},i=[],o=(n("96cf"),n("1da1")),l=n("d4ec"),r=n("bee2"),c=n("2caf"),u=n("262e"),s=n("9ab4"),d=n("60a3"),f=n("9d25"),b=n("d257"),p=n("2bf8"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-block"}},[n("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[t._v("Filename: ")]),n("el-input",{staticStyle:{width:"345px"},attrs:{placeholder:t.$t("excel.placeholder"),"prefix-icon":"el-icon-document"},model:{value:t.filename,callback:function(e){t.filename=e},expression:"filename"}})],1)},v=[],m=function(t){Object(u["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(l["a"])(this,n),e.apply(this,arguments)}return Object(r["a"])(n,[{key:"filename",get:function(){return this.value},set:function(t){this.$emit("input",t)}}]),n}(d["c"]);Object(s["a"])([Object(d["b"])({required:!0})],m.prototype,"value",void 0),m=Object(s["a"])([Object(d["a"])({name:"FilenameOption"})],m);var g=m,y=g,O=n("2877"),j=Object(O["a"])(y,h,v,!1,null,null,null),w=j.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-block"}},[n("label",{staticClass:"radio-label"},[t._v("Cell Auto-Width: ")]),n("el-radio-group",{model:{value:t.autoWidth,callback:function(e){t.autoWidth=e},expression:"autoWidth"}},[n("el-radio",{attrs:{label:!0,border:""}},[t._v(" True ")]),n("el-radio",{attrs:{label:!1,border:""}},[t._v(" False ")])],1)],1)},x=[],_=function(t){Object(u["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(l["a"])(this,n),e.apply(this,arguments)}return Object(r["a"])(n,[{key:"autoWidth",get:function(){return this.value},set:function(t){this.$emit("input",t)}}]),n}(d["c"]);Object(s["a"])([Object(d["b"])({required:!0})],_.prototype,"value",void 0),_=Object(s["a"])([Object(d["a"])({name:"AutoWidthOption"})],_);var S=_,T=S,C=Object(O["a"])(T,k,x,!1,null,null,null),L=C.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-block"}},[n("label",{staticClass:"radio-label"},[t._v("Book Type: ")]),n("el-select",{staticStyle:{width:"120px"},model:{value:t.bookType,callback:function(e){t.bookType=e},expression:"bookType"}},t._l(t.options,(function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)},A=[],D=function(t){Object(u["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(l["a"])(this,n),t=e.apply(this,arguments),t.options=["xlsx","csv","txt"],t}return Object(r["a"])(n,[{key:"bookType",get:function(){return this.value},set:function(t){this.$emit("input",t)}}]),n}(d["c"]);Object(s["a"])([Object(d["b"])({required:!0})],D.prototype,"value",void 0),D=Object(s["a"])([Object(d["a"])({name:"BookTypeOption"})],D);var $=D,E=$,B=Object(O["a"])(E,W,A,!1,null,null,null),R=B.exports,F=function(t){Object(u["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(l["a"])(this,n),t=e.apply(this,arguments),t.list=[],t.listLoading=!0,t.downloadLoading=!1,t.filename="",t.autoWidth=!0,t.bookType="xlsx",t}return Object(r["a"])(n,[{key:"created",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,t.next=3,Object(f["d"])({});case 3:e=t.sent,n=e.data,this.list=n.items,setTimeout((function(){a.listLoading=!1}),500);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"handleDownload",value:function(){this.downloadLoading=!0;var t=["Id","Title","Author","Readings","Date"],e=["id","title","author","pageviews","timestamp"],n=this.list,a=Object(b["b"])(e,n);Object(p["a"])(t,a,""!==this.filename?this.filename:void 0,void 0,void 0,this.autoWidth,this.bookType),this.downloadLoading=!1}}]),n}(d["c"]);F=Object(s["a"])([Object(d["a"])({name:"ExportExcel",components:{AutoWidthOption:L,BookTypeOption:R,FilenameOption:w}})],F);var U=F,q=U,J=(n("b8d9"),Object(O["a"])(q,a,i,!1,null,null,null));e["default"]=J.exports},"9d25":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return u}));var a=n("b32d"),i={id:0,status:"draft",title:"",fullContent:"",abstractContent:"",sourceURL:"",imageURL:"",timestamp:"",platforms:["a-platform"],disableComment:!1,importance:0,author:"",reviewer:"",type:"",pageviews:0},o=function(t){return Object(a["a"])({url:"/articles",method:"get",params:t})},l=function(t,e){return Object(a["a"])({url:"/articles/".concat(t),method:"get",params:e})},r=function(t){return Object(a["a"])({url:"/articles",method:"post",data:t})},c=function(t,e){return Object(a["a"])({url:"/articles/".concat(t),method:"put",data:e})},u=function(t){return Object(a["a"])({url:"/pageviews",method:"get",params:t})}},b8d9:function(t,e,n){"use strict";var a=n("ba90"),i=n.n(a);i.a},ba90:function(t,e,n){t.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409eff"}}}]);