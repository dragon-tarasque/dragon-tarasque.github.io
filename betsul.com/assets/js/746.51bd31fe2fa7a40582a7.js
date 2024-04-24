"use strict";(self.webpackChunkwebet_ui=self.webpackChunkwebet_ui||[]).push([[746],{746:function(e,t,a){a.d(t,{Z:function(){return C}});var r=a(5166);const s={key:0},i=["src"],n=["src","alt"],o={key:2,class:"start-options"},l={class:"start-options__buttons"},c={class:"start-options__text is-two-columns"},u={key:0},m={key:1},d={key:0},g={class:"game-frame-bar"},E={key:0,class:"game-frame-bar__title"},h={class:"has-text-instants"},_={key:1,class:"game-frame-bar__title"},A={key:2,class:"game-frame-bar__mode"},M={key:3},p={class:"game-frame-bar__fullscreen"},G={class:"game-frame-bar__finishsession"},L=["disabled"],R=[(e=>((0,r.dD)("data-v-1e05301b"),e=e(),(0,r.Cn)(),e))((()=>(0,r._)("i",{class:"fa-solid fa-close"},null,-1)))],f=["src"];var F=a(2426),w=a(894),k=a(5980),v=a(5831),y=a(7432),P=a(9612),O={name:"game-player",components:{WeButton:v.Z,WeToggle:y.Z},props:{categoria:{type:[String,Array]},dataLancamento:{type:String},idGame:{type:String},jackpots:{type:Array,default:()=>[]},nomeGame:{type:String},slug:{type:String},url:{type:String},urlImagem:{type:String},valorMax:{type:Number,default:0},valorMin:{type:Number,default:0},color:{type:String,default:"instants",validate(e){return["instants","cassino"].includes(e)}},parentPage:{type:String,default:""},metadata:{type:[String,Object,Array,Boolean],default:null}},computed:{...(0,w.rn)("user",{user:"data",balance:"balance"}),...(0,w.rn)("permissions",{configuracoes:"configuracoes"}),gameExpress(){return this.metadata?.gameExpress??!1},minHeight(){return this.metadata?.minHeight||"0px"},isAutoHeight(){return this.started&&!this.gameExpress},permiteModoFun(){return this.metadata?.permiteModoFun??this.configuracoes.permiteSlotFun??!1}},data(){return{started:!1,isNotFunMode:!1,gameUrl:"",isLoading:!1,isMobileDevice:!1,isGameFullScreen:!1,tokenGame:""}},methods:{checkFullScreen(){return document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen},changeMode(){window.confirm(this.$t("GAME_PLAYER/CONFIRM"))?(this.isGameFullScreen&&this.toggleFullScreen(),this.startGame(!this.isNotFunMode)):this.isNotFunMode=!this.isNotFunMode},toggleFullScreen(){this.isGameFullScreen=!this.isGameFullScreen;const e=document.querySelectorAll("html, body");this.isGameFullScreen?e.forEach((e=>e.classList.add("is-fullscreen-gameplayer"))):e.forEach((e=>e.classList.remove("is-fullscreen-gameplayer")))},checkIfNeedFullscreen(){(0,k.tq)()&&!this.isGameFullScreen&&this.toggleFullScreen()},async finishGameSession(e=!1){this.idGame&&this.started&&this.user&&this.isNotFunMode&&await(0,F.N)(this.idGame,this.tokenGame),this.started=!1,this.isLoading=!1,this.tokenGame="",e&&this.parentPage&&(window.location=this.parentPage)},async startGame(e){if(!(this.isLoading||e&&!this.permiteModoFun)){if(!e&&!this.user)return this.isNotFunMode=!1,void window.Modal.Open("LOGIN",{callback:()=>{this.startGame(!1)}});if(!e&&this.balance<this.valorMin)return this.isNotFunMode=!1,window.Modal.Open("GAME_PLAYER_BALANCE",{color:this.color,permiteModoFun:this.permiteModoFun,minValue:this.valorMin,onPlayFun:()=>this.startGame(!0)});this.isLoading=!0;try{const t=await(0,F.w)(this.idGame,(0,k.tq)(),!!this.user,this.balance,e);if("177"===t.code||"062"===t.code||"Saldo Insuficiente"===t.message)return this.started=!1,this.isLoading=!1,window.Modal.Open("GAME_PLAYER_BALANCE",{color:this.color,permiteModoFun:this.permiteModoFun,minValue:this.valorMin,onPlayFun:()=>this.startGame(!0)});if(!t||!t?.urlLaunch)return this.started=!1,this.isLoading=!1,P.Z.error(this.$t("GAME_PLAYER/ERROR_FETCH"));const a=(0,k.ej)("theme")||"default",r=`${document.location.origin}/themes/${a}/variables.css`;t.urlLaunch+=`&css_variables=${encodeURIComponent(r)}`,this.tokenGame=t.token,this.gameUrl=t.urlLaunch,this.started=!0,this.isNotFunMode=!e,this.isLoading=!1,(0,k.tq)()&&!this.isGameFullScreen&&this.toggleFullScreen()}catch(e){return console.error(e),this.tokenGame="",this.isLoading=!1,this.isNotFunMode=!0,e.message?P.Z.error(e.message):P.Z.error(this.$t("GAME_PLAYER/ERROR_FETCH"))}}}},created(){window.addEventListener("resize",(()=>{const e=(0,k.tq)();e!==this.iisMobileDevice&&(this.isMobileDevice=e)})),document.addEventListener("fullscreenchange",(e=>{this.isGameFullScreen=this.checkFullScreen()}));const e=new URLSearchParams(window.location.search).get("start");e&&"demo"===e?this.startGame(!0):e&&"default"===e&&this.startGame(!1)},unmounted(){this.finishGameSession()}};function S(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{"pt-br":{"GAME_PLAYER/ESCOLHA_VERSAO":e=>{const{normalize:t}=e;return t(["Escolha qual versão quer jogar"])},"GAME_PLAYER/CLIQUE":e=>{const{normalize:t}=e;return t(["Clique para jogar"])},"GAME_PLAYER/PLAY":e=>{const{normalize:t}=e;return t(["Jogar"])},"GAME_PLAYER/DEMO":e=>{const{normalize:t}=e;return t(["Demo"])},"GAME_PLAYER/DEMO_ATIVADA":e=>{const{normalize:t}=e;return t(["Versão DEMO ativada"])},"GAME_PLAYER/JOGAR_COM_DINHEIRO":e=>{const{normalize:t}=e;return t(["Jogar com dinheiro real"])},"GAME_PLAYER/CONFIRM":e=>{const{normalize:t}=e;return t(["Deseja prosseguir?"])},"GAME_PLAYER/ERROR_FETCH":e=>{const{normalize:t}=e;return t(["Falha ao abrir jogo, tente novamente mais tarde."])}},en:{"GAME_PLAYER/ESCOLHA_VERSAO":e=>{const{normalize:t}=e;return t(["Chose a game version to play"])},"GAME_PLAYER/CLIQUE":e=>{const{normalize:t}=e;return t(["Click to play"])},"GAME_PLAYER/PLAY":e=>{const{normalize:t}=e;return t(["Play"])},"GAME_PLAYER/DEMO":e=>{const{normalize:t}=e;return t(["Demo Mode"])},"GAME_PLAYER/DEMO_ATIVADA":e=>{const{normalize:t}=e;return t(["DEMO mode activated"])},"GAME_PLAYER/JOGAR_COM_DINHEIRO":e=>{const{normalize:t}=e;return t(["Play using real money"])},"GAME_PLAYER/CONFIRM":e=>{const{normalize:t}=e;return t(["Do you want to proceed?"])},"GAME_PLAYER/ERROR_FETCH":e=>{const{normalize:t}=e;return t(["Failed to load the game, please try again later."])}},es:{"GAME_PLAYER/ESCOLHA_VERSAO":e=>{const{normalize:t}=e;return t(["Elige una versión del juego para jugar"])},"GAME_PLAYER/CLIQUE":e=>{const{normalize:t}=e;return t(["Click para jugar"])},"GAME_PLAYER/PLAY":e=>{const{normalize:t}=e;return t(["Jugar"])},"GAME_PLAYER/DEMO":e=>{const{normalize:t}=e;return t(["Demo"])},"GAME_PLAYER/DEMO_ATIVADA":e=>{const{normalize:t}=e;return t(["Modo DEMO activado"])},"GAME_PLAYER/JOGAR_COM_DINHEIRO":e=>{const{normalize:t}=e;return t(["Juega con dinero real"])},"GAME_PLAYER/CONFIRM":e=>{const{normalize:t}=e;return t(["Quieres proceder?"])},"GAME_PLAYER/ERROR_FETCH":e=>{const{normalize:t}=e;return t(["Error al cargar el juego, inténtalo de nuevo más tarde."])}}}})}var b=a(3744);S(O);var C=(0,b.Z)(O,[["render",function(e,t,a,F,w,k){const v=(0,r.up)("we-button"),y=(0,r.up)("we-toggle");return(0,r.wg)(),(0,r.iD)("div",{class:(0,r.C_)(["wrap",[`is-color-${a.color}`,{"is-autoheight":k.isAutoHeight}]])},[k.gameExpress&&w.started?((0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",{class:(0,r.C_)(["game-frame-wrapper",{"game-frame-wrapper-expressgame":k.gameExpress}]),style:(0,r.j5)({"min-height":k.minHeight}),onClick:t[0]||(t[0]=()=>{k.checkIfNeedFullscreen()})},[!w.isLoading&&w.gameUrl?((0,r.wg)(),(0,r.iD)("iframe",{key:0,src:w.gameUrl,scrolling:"no"},null,8,i)):(0,r.kq)("",!0)],6)])):(0,r.kq)("",!0),!k.gameExpress||k.gameExpress&&!w.started?((0,r.wg)(),(0,r.iD)("div",{key:1,class:"cover",style:(0,r.j5)(`background-image: url('${a.urlImagem||"none"}');`)},[(0,r._)("img",{src:a.urlImagem,alt:a.nomeGame,width:"1096",height:"556"},null,8,n)],4)):(0,r.kq)("",!0),w.started?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",l,[(0,r._)("div",c,[k.permiteModoFun?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",u,(0,r.zw)(e.$t("GAME_PLAYER/CLIQUE")),1)),k.permiteModoFun?((0,r.wg)(),(0,r.iD)("span",m,(0,r.zw)(e.$t("GAME_PLAYER/ESCOLHA_VERSAO")),1)):(0,r.kq)("",!0)]),(0,r._)("div",{class:(0,r.C_)({"is-two-columns":!k.permiteModoFun})},[(0,r.Wm)(v,{color:a.color,loading:w.isLoading,block:"",onClick:t[1]||(t[1]=e=>k.startGame(!1))},{default:(0,r.w5)((()=>[(0,r.Uk)((0,r.zw)(e.$t("GAME_PLAYER/PLAY")),1)])),_:1},8,["color","loading"])],2),k.permiteModoFun?((0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(v,{color:a.color,loading:w.isLoading,outline:"",block:"",onClick:t[2]||(t[2]=e=>k.startGame(!0))},{default:(0,r.w5)((()=>[(0,r.Uk)((0,r.zw)(e.$t("GAME_PLAYER/DEMO")),1)])),_:1},8,["color","loading"])])):(0,r.kq)("",!0)])])),!k.gameExpress&&w.started?((0,r.wg)(),(0,r.iD)("div",{key:3,class:(0,r.C_)(["game-frame",{"is-fullscreen":w.isGameFullScreen}]),ref:"gameFrame"},[(0,r._)("div",g,[w.isNotFunMode?((0,r.wg)(),(0,r.iD)("div",_,(0,r.zw)(a.nomeGame),1)):((0,r.wg)(),(0,r.iD)("div",E,[(0,r.Uk)((0,r.zw)(a.nomeGame)+" - ",1),(0,r._)("span",h,(0,r.zw)(e.$t("GAME_PLAYER/DEMO_ATIVADA")),1)])),k.permiteModoFun?((0,r.wg)(),(0,r.iD)("div",A,[(0,r._)("span",null,(0,r.zw)(e.$t("GAME_PLAYER/JOGAR_COM_DINHEIRO")),1),(0,r.Wm)(y,{color:a.color,modelValue:w.isNotFunMode,"onUpdate:modelValue":t[3]||(t[3]=e=>w.isNotFunMode=e),onChange:t[4]||(t[4]=e=>k.changeMode()),disabled:w.isLoading},null,8,["color","modelValue","disabled"])])):((0,r.wg)(),(0,r.iD)("div",M)),(0,r._)("div",p,[(0,r._)("button",{class:"game-frame-bar__button",onClick:t[5]||(t[5]=e=>k.toggleFullScreen())},[(0,r._)("i",{class:(0,r.C_)(["fa-solid","fa-"+(w.isGameFullScreen?"compress":"expand")])},null,2)])]),(0,r._)("div",G,[(0,r._)("button",{class:"game-frame-bar__button",onClick:t[6]||(t[6]=e=>k.finishGameSession(!0)),disabled:!w.started},R,8,L)])]),(0,r._)("div",{class:"game-frame-wrapper",onClick:t[7]||(t[7]=()=>{k.checkIfNeedFullscreen()})},[!w.isLoading&&w.gameUrl?((0,r.wg)(),(0,r.iD)("iframe",{key:0,src:w.gameUrl,scrolling:"false"},null,8,f)):(0,r.kq)("",!0)])],2)):(0,r.kq)("",!0)],2)}],["__scopeId","data-v-1e05301b"]])}}]);