/*!For license information please see 2829.9d0d2ce2e79724da71ef.js.LICENSE.txt*/(self.webpackChunkwebet_ui=self.webpackChunkwebet_ui||[]).push([[2829],{2529:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return A}});var i=a(5166),n=a(894),o=a(5980),r=a(7432),s=a(7059),c=a.n(s),l=a(3294);const u={class:"xtremepush__header"},d=(e=>((0,i.dD)("data-v-6bdf3f08"),e=e(),(0,i.Cn)(),e))((()=>(0,i._)("i",{class:"is-sino"},null,-1))),m={class:"xtremepush__notifications"},g={key:0},h=["onClick"],b={key:0},p={class:"is-title"},v={key:0},f=["innerHTML"],w={class:"is-date"},E={key:1};var S={data(){return{activeSidebarNotification:!1,items:[],fetchInterval:null,hasXtreme:!1,maxAttempts:5,currentAttempt:0,timeoutInterval:1e4}},methods:{fetch(){const e=this;"xtremepush"in window&&window.xtremepush("inbox","message.list",{},(function(t){e.items=t.items}),(function(e){return e}))},formatTimestamp(e){const t=new Date(1e3*e);return`${t.getDate().toString().padStart(2,"0")}/${(t.getMonth()+1).toString().padStart(2,"0")}/${t.getFullYear()}, ${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}`},handleNotificationClick(e){const t=this,a=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);window.xtremepush("inbox","message.action",{id:e.id,open:1},(function(){t.fetch(),window.dispatchEvent(new CustomEvent("updateNotification")),(e.message.url||e.message.deeplink)&&(e.message.url_blank&&!a?window.open(e.message.url):window.location.href=e.message.url?e.message.url:e.message.deeplink)}))},getOpened(){document.addEventListener("openNotification",(()=>{this.activeSidebarNotification=!0}))},closeNotification(){this.activeSidebarNotification=!1},cleanHTML(e){return(new DOMParser).parseFromString(e,"text/html").body.textContent},initXtreme(){const e=window.xtremepush("push","permission");e&&"default"!==e&&"unavailable"!==e||window.xtremepush("push","prompt",{allowCallback:()=>{window.localStorage.setItem("userResponseXtreme","allow")},denyCallback:()=>{window.localStorage.setItem("userResponseXtreme","deny")},dismissCallback:()=>{window.localStorage.setItem("userResponseXtreme","dismiss")}})},startFetchInterval(){this.fetch(),this.fetchInterval=setInterval(this.fetch,3e4)},initXtremeWithTimeout(){const e=()=>{"xtremepush"in window?this.initXtreme():(this.currentAttempt+=1,this.currentAttempt<this.maxAttempts&&setTimeout(e,this.timeoutInterval))};e()}},mounted(){"allow"!==window.localStorage.getItem("userResponseXtreme")&&this.initXtremeWithTimeout(),this.getOpened(),this.fetch(),this.startFetchInterval()}};function _(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{"pt-br":{"XTREMEPUSH/NOTIFICACOES":e=>{const{normalize:t}=e;return t(["Notificações"])},"XTREMEPUSH/PERMITIR_ACESSO":e=>{const{normalize:t}=e;return t(["Permitir acesso para notificações?"])},"XTREMEPUSH/CONCEDIDO":e=>{const{normalize:t}=e;return t(["Permissão de notificação concedida."])},"XTREMEPUSH/NEGADO":e=>{const{normalize:t}=e;return t(["Permissão de notificação negada."])},"XTREMEPUSH/FECHADO":e=>{const{normalize:t}=e;return t(["Prompt de permissão de notificação foi fechado."])},"XTREMEPUSH/USUARIO_NEGOU":e=>{const{normalize:t}=e;return t(["Usuário negou as notificações"])},"XTREMEPUSH/SEM_NOTIFICACOES":e=>{const{normalize:t}=e;return t(["Sem notificações"])}},en:{"XTREMEPUSH/NOTIFICACOES":e=>{const{normalize:t}=e;return t(["Notifications"])},"XTREMEPUSH/PERMITIR_ACESSO":e=>{const{normalize:t}=e;return t(["Allow access for notifications?"])},"XTREMEPUSH/CONCEDIDO":e=>{const{normalize:t}=e;return t(["Notification permission granted."])},"XTREMEPUSH/NEGADO":e=>{const{normalize:t}=e;return t(["Notification permission denied."])},"XTREMEPUSH/FECHADO":e=>{const{normalize:t}=e;return t(["Notification permission prompt was closed."])},"XTREMEPUSH/USUARIO_NEGOU":e=>{const{normalize:t}=e;return t(["User denied notifications"])},"XTREMEPUSH/SEM_NOTIFICACOES":e=>{const{normalize:t}=e;return t(["No notifications"])}},es:{"XTREMEPUSH/NOTIFICACOES":e=>{const{normalize:t}=e;return t(["Notificaciones"])},"XTREMEPUSH/PERMITIR_ACESSO":e=>{const{normalize:t}=e;return t(["¿Permitir acceso a notificaciones?"])},"XTREMEPUSH/CONCEDIDO":e=>{const{normalize:t}=e;return t(["Permiso de notificación concedido."])},"XTREMEPUSH/NEGADO":e=>{const{normalize:t}=e;return t(["Permiso de notificación denegado."])},"XTREMEPUSH/FECHADO":e=>{const{normalize:t}=e;return t(["Se cerró el cuadro de permiso de notificación."])},"XTREMEPUSH/USUARIO_NEGOU":e=>{const{normalize:t}=e;return t(["El usuario denegó las notificaciones"])},"XTREMEPUSH/SEM_NOTIFICACOES":e=>{const{normalize:t}=e;return t(["Sin notificacion"])}}}})}var C=a(3744);_(S);var k=(0,C.Z)(S,[["render",function(e,t,a,n,o,r){return(0,i.wg)(),(0,i.iD)("div",null,[o.activeSidebarNotification?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"xtremepush__bg",onClick:t[0]||(t[0]=(...e)=>r.closeNotification&&r.closeNotification(...e))})):(0,i.kq)("",!0),(0,i._)("div",{class:(0,i.C_)(["xtremepush",{active:o.activeSidebarNotification}])},[(0,i._)("div",u,[(0,i._)("p",null,[d,(0,i.Uk)(" "+(0,i.zw)(e.$t("XTREMEPUSH/NOTIFICACOES")),1)]),(0,i._)("i",{class:"fa fa-close",onClick:t[1]||(t[1]=(...e)=>r.closeNotification&&r.closeNotification(...e))})]),(0,i._)("div",m,[0!==o.items.length?((0,i.wg)(),(0,i.iD)("div",g,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.items,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t,class:"notification",onClick:t=>r.handleNotificationClick(e)},[e?.message?.icon&&1===e?.message?.style?.type?((0,i.wg)(),(0,i.iD)("div",b,[(0,i._)("div",{class:"is-image",style:(0,i.j5)("background-image: url("+e.message.icon+")")},null,4)])):(0,i.kq)("",!0),(0,i._)("div",{class:(0,i.C_)(["notification__header",0===e?.message?.style?.type?"is-type-one":"is-type-two"])},[e?.message?.icon?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"is-image",style:(0,i.j5)("background-image: url("+e.message.icon+")")},null,4)):(0,i.kq)("",!0),(0,i._)("p",p,[(0,i.Uk)((0,i.zw)(r.cleanHTML(e?.message?.title))+" ",1),0===e.clicked?((0,i.wg)(),(0,i.iD)("i",v)):(0,i.kq)("",!0)])],2),(0,i._)("div",{class:"notification__content",innerHTML:e?.message?.alert},null,8,f),(0,i._)("p",w,(0,i.zw)(r.formatTimestamp(e.create_time)),1)],8,h)))),128))])):((0,i.wg)(),(0,i.iD)("div",E,[(0,i._)("p",null,(0,i.zw)(e.$t("XTREMEPUSH/SEM_NOTIFICACOES")),1)]))])],2)])}],["__scopeId","data-v-6bdf3f08"]]);var A={components:{WeToggle:r.Z,XtremePush:k},data(){return{isActive:!1,isThemeDark:!1,widget:null,subMenuActivate:!1,subMenuChampionChipActivate:!1,widgets:{NavUser:this.CreateModalLoader((()=>Promise.all([a.e(5831),a.e(186),a.e(537)]).then(a.bind(a,186))))},navsRaw:null,navsFiltered:null,navs:null,isShowingCountries:!1,isMobile:!1,activeSidebarNotification:!1,tema:null,hasXtreme:!1}},watch:{isLogged(e){e?this.initFavorites():this.resetFavorites()}},methods:{...(0,n.nv)("games",["toggleLotsColorMode"]),...(0,n.nv)("favoriteSlots",{initFavoritesSlots:"init",resetFavoritesSlots:"reset"}),...(0,n.nv)("favoriteEventsGroups",{initFavoritesEventsGroups:"init",resetFavoritesEventsGroups:"reset"}),initFavorites(){this.initFavoritesSlots(),this.initFavoritesEventsGroups()},resetFavorites(){this.resetFavoritesSlots(),this.resetFavoritesEventsGroups()},getCountryInt(e){return l.r[e]?l.r[e]:e},CreateModalLoader(e){return(0,i.Xl)((0,i.RC)({loader:e,delay:200,timeout:3e3}))},toggleNav(e=null){this.isActive="boolean"==typeof e?e:!this.isActive,window.dispatchEvent(new CustomEvent("Sidebar:onToggle",{detail:this.isActive}))},setColorMode(){(0,o.qe)(this.isThemeDark?"dark":"light"),this.toggleLotsColorMode(),this.emiterAlterTheme()},emiterAlterTheme(){window.dispatchEvent(new CustomEvent("Sidebar:toggle",{detail:!0}));const e=(0,o.ej)("color_mode");window.dispatchEvent(new CustomEvent("alterTheme",{detail:e}))},activeSubMenu(e){this.subMenuActivate=!this.subMenuActivate,e.target.closest(".sidebar__nav__item").classList.toggle("activate-submenu")},activeSubMenuChampion(e){this.subMenuChampionChipActivate=!this.subMenuChampionChipActivate,e.target.closest(".sidebar__nav__item__sub__sub__item").classList.toggle("activate-submenu")},setCurrentMenuItem(){const e=document.querySelectorAll(".sidebar__nav__subitem a"),t=window.location.pathname;e.forEach((e=>{e.getAttribute("href")===t&&(e?.closest(".sidebar__nav__item")?.classList?.add("activate-submenu"),e?.closest(".sidebar__nav__item__sub__sub__item")?.classList?.add("activate-submenu"),e.classList.add("is-active"))}))},favoritesSportsCount(e){return"sports"===e?this.countEsportes:"esports"===e?this.countEsports:void 0},favoritesSlotsCount(e){return this.favoritesSlotsObjCount&&this.favoritesSlotsObjCount[e]?this.favoritesSlotsObjCount[e]:0},getMessageXtreme(){const e=this;"xtremepush"in window&&window.xtremepush("inbox","badge",{},(function(t){e.hasNotification=t.badge>0}),(function(e){return e}))},handleLotsImageError(e){e.target.src=this.getDefaultMenuIcon}},computed:{...(0,n.Se)("user",["isLogged"]),...(0,n.Se)("games",["getDefaultMenuIcon"]),...(0,n.Se)("favoriteSlots",{favoritesSlotsObjCount:"objSectionsCount"}),...(0,n.Se)("favoriteEventsGroups",{favoritesSportsObjCount:"itemsIndexes",countEsportes:"itemsEsportesCount",countEsports:"itemsEsportsCount",favoritesSportsObjCountEgames:"itemsIndexesEgames"}),...(0,n.rn)("permissions",{configuracoes:"configuracoes"}),exibirCampoLive(){return this.configuracoes.exibirCampoLive}},mounted(){this.tema=(0,o.ej)("theme");c()().observe(),this.isMobile=(0,o.tq)(),window.addEventListener("resize",(()=>{this.isMobile=(0,o.tq)()})),window.addEventListener("Sidebar:toggle",(e=>{this.toggleNav(e.detail)}));const e=(0,o.ej)("color_mode");this.isThemeDark=e&&"dark"===e,window.addEventListener("ColorMode:change",(e=>{this.isThemeDark="dark"===e.detail})),location.pathname.startsWith("/minha-conta")&&!this.isMobile&&(this.widget=this.widgets.NavUser),this.setCurrentMenuItem(),this.hasXtreme&&this.getMessageXtreme()},created(){this.hasXtreme=this.configuracoes.xtremepush,location.pathname.startsWith("/minha-conta")&&!(0,o.tq)()?this.widget=this.widgets.NavUser:"/promocoes"===location.pathname&&(this.widget=this.widgets.FormFilterOffers),this.isLogged&&this.initFavorites()}}},3294:function(e,t,a){"use strict";a.d(t,{r:function(){return i}});const i={albania:"albania",qatar:"catar",georgia:"georgia",libano:"libano","republic-of-moldavia":"republica-da-moldavia",andorra:"andorra",Kazakhstan:"cazaquistao",germany:"germania",lithuania:"lituania","republic-of-tanzania":"republica-da-tanzania",angola:"angola",chile:"chile",gibraltar:"gibraltar",luxembourg:"luxemburgo","republic-dominican":"republica-dominicana",algeria:"argelia",china:"china",greece:"grecia","north-macedonia":"macedonia-do-norte","czech-republic":"republica-tcheca",argentina:"argentina",cyprus:"chipre",grenade:"grenada",macedonia:"macedonia",romania:"romenia",armennia:"armemnia",colombia:"colombia",guatemala:"guatemala","macedonia-norte":"macedonia-Norte.png",rwanda:"ruanda",armenia:"armenia",congo:"congo",netherlands:"holanda",malasia:"malasia",russia:"russia",australia:"australia","north-korea":"coreia-do-norte",honduras:"honduras",malta:"malta","san-marino":"san-marino",austria:"austria","south-korea":"coreia-do-sul","hong-kong":"hong-kong",morocco:"marrocos","saudi-arabia":"arabia-saudita",azerbaijao:"azerbaijao","ivory-coast":"costa-do-marfim",hungary:"hungria",mexico:"mexico",senegal:"senegal",bahamas:"bahamas","costa-rica":"costa-rica","faroe-islands":"ilhas-faroe",montenegro:"montenegro","sierra-leone":"serra-leoa",bahrain:"bahrein",croatia:"croacia","philippines-islands":"ilhas-filipinas",nascar:"nascar",servia:"servia",bangladesh:"bangladesh",cuba:"cuba",india:"india",nicaragua:"nicaragua",singapore:"singapura",barbados:"barbados",denmark:"dinamarca",indonesia:"indonesia",nigeria:"nigeria","south-africa":"south-africa",belgium:"belgica",egypt:"egito",england:"inglaterra",norway:"noruega",sweden:"suecia",Belarus:"bielorrussia","el-salvador":"el-salvador",international:"internacional","new-zealand":"nova-zelandia",suica:"suica",belarus:"bielorrussia.png","united-arabe-emirates":"emirados-arabes-unidos",ira:"ira",oma:"oma",suriname:"suriname",bolivia:"bolivia",ecuador:"equador",iraq:"iraque",oman:"oman",thailand:"tailandia","bosnia-and-herzegovina":"bosnia-e-herzegovina",scotland:"escocia","northern-ireland":"irlanda-do-norte",wales:"pais-de-gales",taiwan:"taiwan",bosnia:"bosnia",slovakia:"eslovaquia",ireland:"irlanda",palestine:"palestina","trindad-tobago":"trindad-tobago",botswana:"botsuana",slovenia:"eslovenia",islandia:"islandia",panama:"panama",tunisia:"tunisia",spain:"espanha",israel:"israel",pakistan:"paquistao","Türkiye":"turquia","united-states-of-america":"estados-unidos-da-america",italy:"italia",paraguay:"paraguai",ukraine:"ucrania",brazil:"brazil",estonia:"estonia",jamaica:"jamaica",turkey:"peru",uganda:"uganda",bulgaria:"bulgaria",ethiopia:"etiopia",japao:"japao",polonia:"polonia",uruguay:"uruguai",burundi:"burundi",usa:"eua",eua:"eua",jordania:"jordania","puerto-rico":"porto-rico",uzbekistan:"uzbequistao",cameroos:"camaroes",finland:"finlandia",kosovo:"kosovo",portugal:"portugal",venezuela:"venezuela",cambodia:"cambodja",frank:"franca",kuwait:"kuwait",kenya:"quenia",vietna:"vietna",canada:"canada",ghana:"gana",letonia:"letonia","republic-czech":"republica-checa",zambia:"zambia","north-america":"america-do-norte",france:"franca",malaysia:"malasia",vietnam:"vietna",brasil:"brasil"}},7059:function(e){e.exports=function(){"use strict";var e="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var a=t.querySelector("img"),i=!1;null===a&&(a=document.createElement("img"),i=!0),e&&t.getAttribute("data-iesrc")&&(a.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(a.alt=t.getAttribute("data-alt")),i&&t.append(a)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var n=t.children,o=void 0,r=0;r<=n.length-1;r++)(o=n[r].getAttribute("data-src"))&&(n[r].src=o);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var s=",";if(t.getAttribute("data-background-delimiter")&&(s=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(s).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var c=t.getAttribute("data-background-image-set").split(s),l=c[0].substr(0,c[0].indexOf(" "))||c[0];l=-1===l.indexOf("url(")?"url("+l+")":l,1===c.length?t.style.backgroundImage=l:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+l+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function a(e){e.setAttribute("data-loaded",!0)}var i=function(e){return"true"===e.getAttribute("data-loaded")},n=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return e instanceof Element?[e]:e instanceof NodeList?e:t.querySelectorAll(e)};return function(){var e,o,r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=Object.assign({},t,s),l=c.root,u=c.rootMargin,d=c.threshold,m=c.load,g=c.loaded,h=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(h=new IntersectionObserver((e=m,o=g,function(t,n){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(n.unobserve(t.target),i(t.target)||(e(t.target),a(t.target),o(t.target)))}))}),{root:l,rootMargin:u,threshold:d}));for(var b,p=n(r,l),v=0;v<p.length;v++)(b=p[v]).getAttribute("data-placeholder-background")&&(b.style.background=b.getAttribute("data-placeholder-background"));return{observe:function(){for(var e=n(r,l),t=0;t<e.length;t++)i(e[t])||(h?h.observe(e[t]):(m(e[t]),a(e[t]),g(e[t])))},triggerLoad:function(e){i(e)||(m(e),a(e),g(e))},observer:h}}}()},3744:function(e,t){"use strict";t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[e,i]of t)a[e]=i;return a}},7432:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var i=a(5166);const n=["id","disabled"],o=["for"];var r=a(5980),s={name:"we-toggle",emits:["input","change","update:modelValue"],data(){return{key:1}},props:{modelValue:{type:Boolean},label:{type:String},color:{type:String,default:"",validator:function(e){return!e||-1!==r.JZ.indexOf(e)}},disabled:{type:Boolean,default:!1}},computed:{checked:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},methods:{onInput(e){this.$emit("input",e.target.checked)},onChange(e){this.$emit("change",e.target.checked)}},created(){this.key=(0,r.Iy)(1e3,9999)}};var c=(0,a(3744).Z)(s,[["render",function(e,t,a,r,s,c){return(0,i.wg)(),(0,i.iD)("div",{class:(0,i.C_)(["we-toggle",a.color?[`is-${a.color}`]:""])},[(0,i.wy)((0,i._)("input",{id:`toggle-shadow-${s.key}`,class:"we-toggle_input we-toggle__shadow",type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>c.checked=e),disabled:a.disabled,onInput:t[1]||(t[1]=(...e)=>c.onInput&&c.onInput(...e)),onChange:t[2]||(t[2]=(...e)=>c.onChange&&c.onChange(...e))},null,40,n),[[i.e8,c.checked]]),(0,i._)("label",{for:`toggle-shadow-${s.key}`},null,8,o)],2)}]])}}]);