"use strict";(self.webpackChunkwebet_ui=self.webpackChunkwebet_ui||[]).push([[446],{8451:function(e,t,i){i.r(t);var n=i(746),o=i(7003);const s={components:{GamePlayer:n.Z,WeAccordion:o.Z},data(){return{game:null}}};t.default=s},2426:function(e,t,i){i.d(t,{N:function(){return a},w:function(){return s}});var n=i(3802),o=i(7989);const s=(e,t,i,s,a)=>new Promise(((l,c)=>{const d=t?"mobile":"desktop";let r="pt";r=r||"pt";const h={idGame:e,modoFun:a,valor:parseFloat(s/100),channel:d,locale:r};return(i?o.W:n.U).post("/rgs/game/preinit",h).then((e=>{l(i?e.data:e)})).catch((e=>c(e)))})),a=(e,t)=>new Promise(((i,n)=>{const s={idGame:e,token:t};return o.W.post("/rgs/game/finalize",s).then((e=>{i(e)})).catch((e=>n(e)))}))},3744:function(e,t){t.Z=(e,t)=>{const i=e.__vccOpts||e;for(const[e,n]of t)i[e]=n;return i}},7003:function(e,t,i){i.d(t,{Z:function(){return u}});var n=i(5166);const o={key:0,ref:"baseData"},s={key:1,class:"we-accordion",ref:"accordion"},a=["onClick"],l=["innerHTML"],c=["innerHTML"],d={key:2,class:"box-vermais"},r={key:0};var h={name:"we-accordion",data(){return{limitationList:10,opened:[],items:[],loaded:!1}},props:{allopen:{type:Boolean,default:!1},noClose:{type:Boolean,default:!1},showopen:{type:Number,default:0},showall:{type:Boolean,default:!1}},methods:{Toggle(e){this.noClose||(this.allopen?this.opened.includes(e)?this.opened.splice(e,1):this.opened.push(e):this.opened.includes(e)?this.opened=[]:(this.opened=[],this.opened.push(e)))},visibleAccordions(){const e=this.limitationList;this.limitationList=e<=8?this.items.length:8},activeAll(){for(let e=0;e<this.limitationList;e++)this.opened.push(e)},activeItens(){for(let e=0;e<this.showopen;e++)this.opened.push(e)}},mounted(){const e=this.$refs.baseData.querySelectorAll("div[we-accordion-item]"),t=[],i=[];e&&e.forEach(((e,n)=>{const o={};e.hasAttribute("data-opened")&&i.push(n),["title","content"].forEach(((t,i)=>{const n=e.querySelector(`div:nth-child(${i+1})`);o[t]=n.innerHTML})),t.push(o)})),this.items=t,this.loaded=!0,this.opened=i,this.showall&&(this.limitationList=this.items.length),this.allopen?this.activeAll():0!==this.showopen&&this.activeItens()}};var u=(0,i(3744).Z)(h,[["render",function(e,t,i,h,u,p){return(0,n.wg)(),(0,n.iD)(n.HY,null,[u.loaded?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",o,[(0,n.WI)(e.$slots,"default",{},void 0,!0)],512)),u.loaded&&u.items&&u.items.length?((0,n.wg)(),(0,n.iD)("section",s,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.items.slice(0,this.limitationList),((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:`we-accordion-${t}`,class:(0,n.C_)(["we-accordion__item",{"is-active":u.opened.includes(t)}])},[(0,n._)("div",{class:(0,n.C_)(["we-accordion__item__title",{"no-close":i.noClose}]),onClick:e=>p.Toggle(t)},[(0,n._)("h2",{innerHTML:e.title},null,8,l)],10,a),(0,n._)("div",{class:"we-accordion__item__content",innerHTML:e.content},null,8,c)],2)))),128))],512)):(0,n.kq)("",!0),i.showall?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",d,[u.items.length>8?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>p.visibleAccordions&&p.visibleAccordions(...e)),ref:"accordion",class:"btn_ver_mais"},[u.items.length>u.limitationList?((0,n.wg)(),(0,n.iD)("span",r,"Mostrar mais")):((0,n.wg)(),(0,n.iD)("span",{key:1,class:(0,n.C_)(u.limitationList==u.items.length?"":"is-active")},"Mostrar menos",2))],512)):(0,n.kq)("",!0)]))],64)}],["__scopeId","data-v-30fbe278"]])},7432:function(e,t,i){i.d(t,{Z:function(){return c}});var n=i(5166);const o=["id","disabled"],s=["for"];var a=i(5980),l={name:"we-toggle",emits:["input","change","update:modelValue"],data(){return{key:1}},props:{modelValue:{type:Boolean},label:{type:String},color:{type:String,default:"",validator:function(e){return!e||-1!==a.JZ.indexOf(e)}},disabled:{type:Boolean,default:!1}},computed:{checked:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},methods:{onInput(e){this.$emit("input",e.target.checked)},onChange(e){this.$emit("change",e.target.checked)}},created(){this.key=(0,a.Iy)(1e3,9999)}};var c=(0,i(3744).Z)(l,[["render",function(e,t,i,a,l,c){return(0,n.wg)(),(0,n.iD)("div",{class:(0,n.C_)(["we-toggle",i.color?[`is-${i.color}`]:""])},[(0,n.wy)((0,n._)("input",{id:`toggle-shadow-${l.key}`,class:"we-toggle_input we-toggle__shadow",type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>c.checked=e),disabled:i.disabled,onInput:t[1]||(t[1]=(...e)=>c.onInput&&c.onInput(...e)),onChange:t[2]||(t[2]=(...e)=>c.onChange&&c.onChange(...e))},null,40,o),[[n.e8,c.checked]]),(0,n._)("label",{for:`toggle-shadow-${l.key}`},null,8,s)],2)}]])}}]);