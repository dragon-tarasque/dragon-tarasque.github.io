"use strict";(self.webpackChunkwebet_ui=self.webpackChunkwebet_ui||[]).push([[6365],{6365:function(e,o,a){a.r(o),a.d(o,{default:function(){return M}});var t=a(5166);const n=(0,t._)("div",{class:"modal-box__head"},[(0,t._)("div",{class:"modal-box__title"})],-1),l={class:"modal-box__content"};var i={};function d(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{"pt-br":{"MODAL_LOADER/CARREGANDO":e=>{const{normalize:o}=e;return o(["Carregando..."])}},en:{"MODAL_LOADER/CARREGANDO":e=>{const{normalize:o}=e;return o(["Loading..."])}},es:{"MODAL_LOADER/CARREGANDO":e=>{const{normalize:o}=e;return o(["Cargando..."])}}}})}var r=a(3744);d(i);var s=(0,r.Z)(i,[["render",function(e,o,a,i,d,r){return(0,t.wg)(),(0,t.iD)(t.HY,null,[n,(0,t._)("div",l,[(0,t._)("p",null,(0,t.zw)(e.$t("MODAL_LOADER/CARREGANDO")),1)])],64)}]]);const h=(0,t._)("div",{class:"modal-box__head"},[(0,t._)("div",{class:"modal-box__title"})],-1),c={class:"modal-box__content"},O=(0,t._)("br",null,null,-1);var m={components:{WeButton:a(5831).Z},emits:["reload"],data(){return{isLoading:!1}},methods:{Reload(){this.isLoading=!0,setTimeout((()=>{this.$emit("reload")}),500)}}};function C(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{"pt-br":{"MODAL_ERROR/ERRO_AO_CARREGAR":e=>{const{normalize:o}=e;return o(["Erro ao carregar."])},"MODAL_ERROR/TENTAR_NOVAMENTE":e=>{const{normalize:o}=e;return o(["Tentar Novamente."])}},en:{"MODAL_ERROR/ERRO_AO_CARREGAR":e=>{const{normalize:o}=e;return o(["Error on loading"])},"MODAL_ERROR/TENTAR_NOVAMENTE":e=>{const{normalize:o}=e;return o(["Try Again."])}},es:{"MODAL_ERROR/ERRO_AO_CARREGAR":e=>{const{normalize:o}=e;return o(["Erro al cargar."])},"MODAL_ERROR/TENTAR_NOVAMENTE":e=>{const{normalize:o}=e;return o(["intentar otra vez."])}}}})}C(m);var L=(0,r.Z)(m,[["render",function(e,o,a,n,l,i){const d=(0,t.up)("we-button");return(0,t.wg)(),(0,t.iD)(t.HY,null,[h,(0,t._)("div",c,[(0,t._)("p",null,(0,t.zw)(e.$t("MODAL_ERROR/ERRO_AO_CARREGAR")),1),O,(0,t.Wm)(d,{onClick:o[0]||(o[0]=e=>i.Reload()),loading:l.isLoading,label:e.$t("MODAL_ERROR/TENTAR_NOVAMENTE"),color:"primary"},null,8,["loading","label"])])],64)}]]),R=a(5980),A=a(3459);const E={components:{ModalLoader:s,ModalError:L},data(){return{isOpen:!1,canClose:!0,showCloseButton:!0,modalOptions:{},currentModalComponent:null,modalClassName:"",modalName:null,isLoadingModal:!0,wide:!1,modals:{RECEIPT:this.CreateModalLoader((()=>Promise.all([a.e(8136),a.e(3477),a.e(5513)]).then(a.bind(a,8309)))),CONTEST:this.CreateModalLoader((()=>a.e(786).then(a.bind(a,786)))),LOGIN:this.CreateModalLoader((()=>Promise.all([a.e(3541),a.e(4930),a.e(1354),a.e(6101)]).then(a.bind(a,7360)))),BLANK:this.CreateModalLoader((()=>a.e(3261).then(a.bind(a,3261)))),DELETEACCOUNT:this.CreateModalLoader((()=>Promise.all([a.e(3541),a.e(4930),a.e(6471)]).then(a.bind(a,3491)))),BOLETO:this.CreateModalLoader((()=>a.e(5682).then(a.bind(a,5682)))),TRANSFER:this.CreateModalLoader((()=>a.e(6567).then(a.bind(a,6567)))),MODALPROMOTIONDETAIL:this.CreateModalLoader((()=>a.e(3571).then(a.bind(a,3571)))),TICKET:this.CreateModalLoader((()=>Promise.all([a.e(1711),a.e(6505)]).then(a.bind(a,6505)))),E_TICKET:this.CreateModalLoader((()=>Promise.all([a.e(1711),a.e(3214),a.e(263)]).then(a.bind(a,263)))),PRETICKET:this.CreateModalLoader((()=>Promise.all([a.e(3214),a.e(8820)]).then(a.bind(a,8820)))),RECOVERPASSWORD:this.CreateModalLoader((()=>Promise.all([a.e(3541),a.e(4930),a.e(6556)]).then(a.bind(a,7476)))),LOT_LIVE_DRAW:this.CreateModalLoader((()=>a.e(9488).then(a.bind(a,9488)))),VALIDATEEMAIL:this.CreateModalLoader((()=>a.e(1457).then(a.bind(a,1457)))),LOT_TICKET_DETAIL:this.CreateModalLoader((()=>Promise.all([a.e(8136),a.e(8942)]).then(a.bind(a,3128)))),RAFFLE_TICKET_DETAIL:this.CreateModalLoader((()=>Promise.all([a.e(3477),a.e(3042)]).then(a.bind(a,4765)))),MODAL_PRE_DEPOSIT:this.CreateModalLoader((()=>Promise.all([a.e(3541),a.e(4930),a.e(9996),a.e(4073)]).then(a.bind(a,1468)))),GAME_PLAYER_BALANCE:this.CreateModalLoader((()=>a.e(8094).then(a.bind(a,8094)))),NICKNAME:this.CreateModalLoader((()=>Promise.all([a.e(3541),a.e(4930),a.e(4489)]).then(a.bind(a,5183)))),CONFIRMWORLDCUP:this.CreateModalLoader((()=>Promise.all([a.e(3541),a.e(4930),a.e(4772),a.e(3133),a.e(909)]).then(a.bind(a,5747)))),NEWSLETTERCUP:this.CreateModalLoader((()=>Promise.all([a.e(3541),a.e(4930),a.e(6039)]).then(a.bind(a,1535)))),MODALINTROCOPA:this.CreateModalLoader((()=>Promise.all([a.e(7410),a.e(4922)]).then(a.bind(a,4922)))),MODALALERTCOPA:this.CreateModalLoader((()=>a.e(8175).then(a.bind(a,8175)))),MODALNEWBOLAO:this.CreateModalLoader((()=>a.e(6281).then(a.bind(a,6281)))),MODALRANKING:this.CreateModalLoader((()=>a.e(8152).then(a.bind(a,8152)))),MODALDELETEPROMOTION:this.CreateModalLoader((()=>a.e(2879).then(a.bind(a,2879)))),RECARGAERROR:this.CreateModalLoader((()=>a.e(4955).then(a.bind(a,4955)))),MODALLPJOAOROCK:this.CreateModalLoader((()=>a.e(8702).then(a.bind(a,8702)))),MODALIMITEDEPOSITO:this.CreateModalLoader((()=>a.e(2149).then(a.bind(a,2149)))),MODALPAYMENT:this.CreateModalLoader((()=>Promise.all([a.e(7929),a.e(1276)]).then(a.bind(a,1276)))),MODALODDFILTER:this.CreateModalLoader((()=>a.e(527).then(a.bind(a,527)))),MODALCASSINODETAIL:this.CreateModalLoader((()=>a.e(4438).then(a.bind(a,4438)))),MODALSORTSPORTS:this.CreateModalLoader((()=>Promise.all([a.e(8496),a.e(1295)]).then(a.bind(a,1295)))),MULTIFACTOR_CONFIG:this.CreateModalLoader((()=>Promise.all([a.e(3541),a.e(4930),a.e(2094)]).then(a.bind(a,3099)))),MULTIFACTOR:this.CreateModalLoader((()=>Promise.all([a.e(3541),a.e(4930),a.e(1654)]).then(a.bind(a,1523))))}}},template:'\n    <transition name="fade">\n      <div v-if="isOpen" class="modal-backdrop">\n        <div class="modal" v-bind:class="[\'modal--\'+modalClassName]">\n          <div class="modal-box" :class="{\'transparent-bg\': !showCloseButton, \'wide\': wide}">\n            <button v-if="canClose && showCloseButton" class="modal-box__button-close" v-on:click="Close()"><i class="fas fa-times-circle"></i></button>\n            <component v-if="currentModalComponent" :is="currentModalComponent" v-bind="modalOptions" @reload="Reload()"></component>\n          </div>\n          <div class="modal-backdrop-trigger" v-on:click="canClose && Close()"></div>\n        </div>\n      </div>\n    </transition>\n  ',methods:{CreateModalLoader(e){return(0,t.Xl)((0,t.RC)({loader:e,delay:200,timeout:3e3,loadingComponent:s,errorComponent:L}))},Reload(){const{modalName:e,modalOptions:o,canClose:a}=this;this.Close(),setTimeout((()=>{this.Open(e,o,a)}),300)},Open:function(e,o,a=!0,t=!0){const n=this.modals[e];if(this.modalName=e,this.wide="LOT_LIVE_DRAW"===e,!n)return void console.error(`Error: "${e}" isn't a valid modal. Try one of these: ${Object.keys(this.modals).join(", ")}`);this.isOpen=!0,this.currentModalComponent=null,this.canClose=a,this.showCloseButton=t,this.modalClassName=(e||"").toLowerCase().replace(/_/g,"-"),this.modalOptions=o,this.currentModalComponent=n||null;document.querySelectorAll("html, body").forEach((e=>e.classList.add("is-modal-active"))),window.dispatchEvent(new CustomEvent("Modal:open"))},Close:function(){const e=(0,R.Tb)("modal");"login"!==e&&"signup"!==e||window.history.replaceState(null,null,window.location.pathname);const{pathname:o}=window.location;(o.includes("/cadastro")||o.includes("/login"))&&window.history.replaceState(null,null,"/"),A.closeModal(this.modalName),this.container=null,this.isOpen=!1,this.modalOptions={},this.canClose=!0,this.modalName=null;document.querySelectorAll("html, body").forEach((e=>e.classList.remove("is-modal-active")))}},mounted(){document.onkeydown=e=>{27===(e=e||window.event).keyCode&&this.isOpen&&this.canClose&&this.Close()}},created(){window.Modal={Open:this.Open,Close:this.Close};const e=(0,R.ak)("modal");e&&-1!==["LOGIN","SIGNUP","RECARGAERROR"].indexOf(e.toUpperCase())&&window.Modal.Open(e.toUpperCase())}};if(!document.querySelector('[data-miniapp="Modal"]')){const e=document.createElement("div");e.setAttribute("data-miniapp","Modal"),document.body.appendChild(e)}var M=E},3744:function(e,o){o.Z=(e,o)=>{const a=e.__vccOpts||e;for(const[e,t]of o)a[e]=t;return a}}}]);