(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["form"],{"371d":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"Activity name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"Activity zone"}},[a("el-select",{attrs:{placeholder:"please select your zone"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"Zone one",value:"shanghai"}}),a("el-option",{attrs:{label:"Zone two",value:"beijing"}})],1)],1),a("el-form-item",{attrs:{label:"Activity time"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("\n        -\n      ")]),a("el-col",{attrs:{span:11}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"Pick a time"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),a("el-form-item",{attrs:{label:"Instant delivery"}},[a("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),a("el-form-item",{attrs:{label:"Activity type"}},[a("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-checkbox",{attrs:{label:"Online activities",name:"type"}}),a("el-checkbox",{attrs:{label:"Promotion activities",name:"type"}}),a("el-checkbox",{attrs:{label:"Offline activities",name:"type"}}),a("el-checkbox",{attrs:{label:"Simple brand exposure",name:"type"}})],1)],1),a("el-form-item",{attrs:{label:"Resources"}},[a("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[a("el-radio",{attrs:{label:"Sponsor"}}),a("el-radio",{attrs:{label:"Venue"}})],1)],1),a("el-form-item",{attrs:{label:"Activity form"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("\n        Create\n      ")]),a("el-button",{on:{click:e.onCancel}},[e._v("\n        Cancel\n      ")])],1)],1)],1)},o=[],r=a("d225"),i=a("b0b4"),n=a("308d"),s=a("6bb5"),c=a("4e2b"),m=a("9ab4"),f=a("60a3"),u=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(n["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.form={name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},e}return Object(c["a"])(t,e),Object(i["a"])(t,[{key:"onSubmit",value:function(){this.$message("submit!")}},{key:"onCancel",value:function(){this.$message({message:"cancel!",type:"warning"})}}]),t}(f["c"]);u=m["a"]([f["a"]],u);var b=u,p=b,d=(a("3960"),a("0c7c")),v=Object(d["a"])(p,l,o,!1,null,"515f966e",null);t["default"]=v.exports},3960:function(e,t,a){"use strict";var l=a("a4fb"),o=a.n(l);o.a},a4fb:function(e,t,a){}}]);