(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["json-editor"],{"0c7f":function(e,t,a){},2560:function(e,t,a){},4453:function(e,t,a){"use strict";var r=a("5f9d"),o=a.n(r);o.a},"5f9d":function(e,t,a){e.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409eff"}},"6cc2":function(e,t,a){"use strict";var r=a("0c7f"),o=a.n(r);o.a},e05a:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container"},[e._m(0),a("div",{staticClass:"editor-container"},[a("json-editor",{ref:"jsonEditor",model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",[e._v(" Json-Editor is base on "),a("a",{attrs:{href:"https://github.com/codemirror/CodeMirror",target:"_blank"}},[e._v("CodeMirrorr")]),e._v(". Lint base on "),a("a",{attrs:{href:"https://github.com/codemirror/CodeMirror/blob/master/addon/lint/json-lint.js",target:"_blank"}},[e._v("json-lint")]),e._v(". ")])}],n=a("d4ec"),s=a("2caf"),i=a("262e"),c=a("9ab4"),l=a("60a3"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"json-editor"},[a("textarea",{ref:"textarea"})])},d=[],m=a("bee2"),f=a("56b3"),b=a.n(f);a("0dd0"),a("a7be"),a("acdf"),a("f9d4"),a("8822"),a("d2de");a("ae67");var p=function(e){Object(i["a"])(a,e);var t=Object(s["a"])(a);function a(){return Object(n["a"])(this,a),t.apply(this,arguments)}return Object(m["a"])(a,[{key:"onValueChange",value:function(e){if(this.jsonEditor){var t=this.jsonEditor.getValue();e!==t&&this.jsonEditor.setValue(JSON.stringify(this.value,null,2))}}},{key:"mounted",value:function(){var e=this;this.jsonEditor=b.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"application/json",gutters:["CodeMirror-lint-markers"],theme:"rubyblue",lint:!0}),this.jsonEditor.setValue(JSON.stringify(this.value,null,2)),this.jsonEditor.on("change",(function(t){e.$emit("changed",t.getValue()),e.$emit("input",t.getValue())}))}},{key:"setValue",value:function(e){this.jsonEditor&&this.jsonEditor.setValue(e)}},{key:"getValue",value:function(){return this.jsonEditor?this.jsonEditor.getValue():""}}]),a}(l["c"]);Object(c["a"])([Object(l["b"])({required:!0})],p.prototype,"value",void 0),Object(c["a"])([Object(l["d"])("value")],p.prototype,"onValueChange",null),p=Object(c["a"])([Object(l["a"])({name:"JsonEditor"})],p);var y=p,v=y,j=(a("4453"),a("f91e"),a("2877")),h=Object(j["a"])(v,u,d,!1,null,"e4a76152",null),_=h.exports,O='[{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]',k=function(e){Object(i["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.value=JSON.parse(O),e}return a}(l["c"]);k=Object(c["a"])([Object(l["a"])({name:"JsonEditorDemo",components:{JsonEditor:_}})],k);var x=k,E=x,g=(a("6cc2"),Object(j["a"])(E,r,o,!1,null,"54d95e5b",null));t["default"]=g.exports},f91e:function(e,t,a){"use strict";var r=a("2560"),o=a.n(r);o.a}}]);