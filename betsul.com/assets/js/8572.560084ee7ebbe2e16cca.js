(self.webpackChunkwebet_ui=self.webpackChunkwebet_ui||[]).push([[8572],{389:function(e,t,o){"use strict";o.d(t,{E:function(){return r}});var n=o(5203),s=o(9549),a=o(6785);const r=o(2632).ZP.create({baseURL:"/rest"});r.interceptors.request.use((e=>{const t=localStorage.getItem("token")||null;return t&&(e.headers.Authorization=`Bearer accessToken="${t}", idCliente="${n.KEY_CLIENT_APP}"`),e.headers["Accept-Language"]=(0,s.Z)(),(0,a.GetLocationObj)()&&(e.headers["X-Spt-Latitude"]=(0,a.GetLocationObj)().latitude,e.headers["X-Spt-Longitude"]=(0,a.GetLocationObj)().longitude),e})),r.interceptors.response.use((e=>e?.data||new Error))},3802:function(e,t,o){"use strict";o.d(t,{U:function(){return d}});var n=o(5203),s=o(9549),a=o(6785),r=o(2632);const i=function(e){const t=["116","226"];return null!==e.data&&"000"!==t?t.indexOf(e.data.codResposta)>=-1?e.data:new Error:e.data?e.data.message||e.data.mensagem:""},c=function(e){const t=e&&e.response&&e.response.data?e.response.data:null;return Promise.reject(t)},u=e=>(e.headers["Accept-Language"]=(0,s.Z)(),(0,a.GetLocationObj)()&&(e.headers["X-Spt-Latitude"]=(0,a.GetLocationObj)().latitude,e.headers["X-Spt-Longitude"]=(0,a.GetLocationObj)().longitude),e),d=r.ZP.create({baseURL:n.API_ROOT});d.interceptors.request.use(u),d.interceptors.response.use(i,c);const l=r.ZP.create({baseURL:n.API_ROOT_ODIN});l.interceptors.request.use(u),l.interceptors.response.use(i,c)},1956:function(e,t,o){"use strict";o.d(t,{y:function(){return r}});var n=o(5203),s=o(9549),a=o(6785);const r=o(2632).ZP.create({baseURL:n.API_ROOT});r.interceptors.request.use((e=>{const t=localStorage.getItem("token")||null,o=localStorage.getItem("expiredToken")||null;return t&&t!==o&&(e.headers.Authorization=`Bearer accessToken="${t}", idCliente="${n.KEY_CLIENT_APP}"`),e.headers["Accept-Language"]=(0,s.Z)(),(0,a.GetLocationObj)()&&(e.headers["X-Spt-Latitude"]=(0,a.GetLocationObj)().latitude,e.headers["X-Spt-Longitude"]=(0,a.GetLocationObj)().longitude),e})),r.interceptors.response.use((function(e){const t=["116","226"];return null!==e.data&&"000"!==t?t.indexOf(e.data.codResposta)>=-1?e.data:new Error:e.data?e.data.message||e.data.mensagem:""}),(function(e){const t=e&&e.response&&e.response.data?e.response.data:null;if(e&&e.response&&e.response.data?.errors&&e.response.data.errors[0]?.code&&["022","023","024"].indexOf(e.response.data.errors[0]?.code)>-1){const t=e.config;if(t){delete t.headers.Authorization;const e=localStorage.getItem("token")||null;return localStorage.setItem("expiredToken",e),r(t)}}return Promise.reject(t)}))},7989:function(e,t,o){"use strict";o.d(t,{W:function(){return p},X:function(){return m}});var n=o(5203),s=o(1939),a=o(9612),r=o(9549),i=o(6785),c=o(2632);async function u(e){try{const t=e.config,o=localStorage.getItem("refreshToken"),a=c.ZP.create({baseURL:n.API_ROOT});a.interceptors.request.use((e=>{if(e.headers.Authorization=o?`Bearer refreshToken="${o}", idCliente="${n.KEY_CLIENT_APP}"`:null,e.headers["Accept-Language"]=(0,r.Z)(),(0,i.GetLocationObj)()&&(e.headers["X-Spt-Latitude"]=(0,i.GetLocationObj)().latitude,e.headers["X-Spt-Longitude"]=(0,i.GetLocationObj)().longitude),o)return e;console.error("RefreshToken ausente.")}));const u=await a.post("/auth/refreshToken");if(["022","023","024"].indexOf(u.codResposta)>-1)return(0,s.H)(),console.error("Failed to refreshToken",u);const d=u.data.accessToken;if(localStorage.setItem("token",d),localStorage.setItem("refreshToken",o),t)return p(t)}catch(e){const t=e.response&&e.response.data?e.response.data.message||e.response.data.mensagem:"";return t&&a.Z.error(t),(0,s.H)(),console.error("Failed to refreshToken",e),Promise.reject(t||e)}}const d=function(e){const t=["022","023","024"];return null!==e.data&&(t.indexOf(e.data.codResposta)>-1||t.indexOf(e.data.code)>-1)?u(e):e},l=function(e){if(e.response&&e.response.data&&e.response.data.errors){const t=["022","023","024"],o=e.response.data.errors[0].code;if(o.includes(t[0])||o.includes(t[1])||o.includes(t[2]))return u(e.response)}const t=e&&e.response&&e.response.data?e.response.data:e&&e.message?e.message:e;return Promise.reject(t)},p=c.ZP.create({baseURL:n.API_ROOT});p.interceptors.request.use((function(e){const t=localStorage.getItem("token")||null;return e.headers.Authorization=t?`Bearer accessToken="${t}", idCliente="${n.KEY_CLIENT_APP}"`:null,e.headers["Accept-Language"]=(0,r.Z)(),(0,i.GetLocationObj)()&&(e.headers["X-Spt-Latitude"]=(0,i.GetLocationObj)().latitude,e.headers["X-Spt-Longitude"]=(0,i.GetLocationObj)().longitude),t?e:((0,s.H)(),console.error("Sessão Finalizada."))})),p.interceptors.response.use(d,l);const m=c.ZP.create({baseURL:n.API_ROOT_ODIN});m.interceptors.request.use((function(e){const t=localStorage.getItem("token")||null;return e.headers.Authorization=t?`AuthSnet accessToken="${t}", idCliente="${n.KEY_CLIENT_APP}"`:null,e.headers["Accept-Language"]=(0,r.Z)(),(0,i.GetLocationObj)()&&(e.headers["X-Spt-Latitude"]=(0,i.GetLocationObj)().latitude,e.headers["X-Spt-Longitude"]=(0,i.GetLocationObj)().longitude),t?e:((0,s.H)(),console.error("Sessão Finalizada."))})),m.interceptors.response.use(d,l)},3459:function(e,t,o){const n=o(2153),s=o(7501),a="BRL",r={name:"Desconhecido",id:0,price:0,category:"Desconhecido",variant:"Desconhecido",quantity:1};window.dataLayer=window.dataLayer||[];const i=window.dataLayer;t.addToCart=(e=r)=>{i.push({ecommerce:null}),i.push({event:"addToCart",ecommerce:{currencyCode:a,add:{products:[{name:e.name,id:e.id,price:e.price,category:e.category,variant:e.variant,quantity:e.quantity}]}}})},t.removeFromCart=(e=r)=>{i.push({ecommerce:null}),i.push({event:"removeFromCart",ecommerce:{currencyCode:a,add:{products:[{name:e.name,id:e.id,price:e.price,category:e.category,variant:e.variant,quantity:e.quantity}]}}})},t.purchase=(e,t,o,n)=>{i.push({ecommerce:null}),i.push({event:"purchase",ecommerce:{currencyCode:a,purchase:{actionField:{id:e,revenue:t,tax:"0.00",shipping:"0.00",option:n,coupon:o},products:[{name:"Créditos",id:0,category:n,price:t,quantity:1}]}}})},t.register=(e,t,o)=>{i.push({event:"register",idSP:t,idAuth:o,email:e,emailHash:n(e).toString()})};t.sessionUpdate=(e,t)=>{const o=function(e){if("string"!=typeof e)return null;try{return JSON.parse(s.decode(e.split(".")[1]))}catch{return null}}(e);i.push({event:"sessionUpdated",session:o.sess||"",PlayerID:t||""})},t.event=e=>{i.push({...e})},t.addItemBetSlip=e=>{i.push({event:"addItemBetSlip",...e})},t.addOdd=e=>{i.push({odd:null}),i.push({event:"addOdd",odd:e})},t.betPlaced=e=>{i.push({betPlaced:null}),i.push({event:"betPlaced",betPlaced:e})},t.closeModal=e=>{i.push({modalName:null}),i.push({event:"closeModal",modalName:e})}},1939:function(e,t,o){"use strict";o.d(t,{F:function(){return a},H:function(){return r}});var n=o(3035);const s=["^/minha-conta","/([^S]+)/favoritos"],a=()=>{let e=!1;const t=document.location.pathname;for(const o in s)if(new RegExp(s[o]).test(t)){e=!0;break}return e},r=()=>{n.Z.dispatch("user/logout")}},6088:function(e,t,o){"use strict";o.d(t,{Zr:function(){return i},lI:function(){return r},mE:function(){return s},u1:function(){return a}});var n=o(7989);const s={SLOTS:1,SPORTS_GROUP:2},a=async e=>n.W.post("/games/favoritos",{idCategoriaFavorito:e,metadata:[]}),r=async e=>n.W.get(`/games/favoritos?idCategoria=${e}`),i=async({idList:e=0,items:t})=>n.W.put("/games/favoritos",{id:e,metadata:t})},1635:function(e,t){"use strict";t.Z=class{constructor(e){this.ping=this.ping.bind(this),this.uuidCallbacks={},this.keepAlive=e,this.attempts=0,this.fetching=!1}async initialize(){const e="wss://lottery.apispt.net";this.isOpen=!1,this.attempts++,this.fetching||(this.ws=new WebSocket(`${e}/live`),this.ws.onclose=()=>{this.fetching=!1,this.isOpen=!1,clearTimeout(this.pingTimeout),this.keepAlive&&this.attempts<=3&&this.initialize()},this.ws.onerror=e=>{console.error("WebSocket Error",e)},this.ws.onmessage=e=>{e=function(e){try{return JSON.parse(e)}catch{return null}}(e?.data),"function"==typeof this.onMessageCallback&&this.onMessageCallback(e)})}ping(e){this.send({action:"ping"}),e&&(this.pingTimeout=setTimeout((()=>this.ping(!0)),2e3))}open(){return this.fetching=!0,new Promise((e=>{this.ws?this.ws.onopen=()=>{this.isOpen=!0,this.attempts=0,setTimeout((()=>this.ping(!0)),4e3),e(),"function"==typeof this.onConnectionStarted&&this.onConnectionStarted()}:e()}))}send(e){if(!this.isOpen)return!1;this.ws?.send(JSON.stringify(e))}onConnected(e){this.onConnectionStarted=e}onMessage(e){this.onMessageCallback=e}}},5737:function(e,t,o){"use strict";o.d(t,{R2:function(){return g},f5:function(){return h},zf:function(){return f},Yq:function(){return v},Z8:function(){return y},LK:function(){return D},aj:function(){return S},AO:function(){return T},Sk:function(){return p},bU:function(){return I},VF:function(){return w},ev:function(){return b},BS:function(){return m},qP:function(){return l}});var n=o(2632),s=o(5203);const a=n.ZP.create({baseURL:`${s.API_LOTERIAS_MEGA}web/lotericos/svc/`});a.interceptors.response.use((function(e){const t=["116","226"];return null!==e.data&&"000"!==t?t.indexOf(e.data.codResposta)>=-1?e.data:new Error:e.data?e.data.message||e.data.mensagem:""}),(function(e){const t=e&&e.response&&e.response.data?e.response.data:null;return Promise.reject(t)}));var r=o(5980);const i=n.ZP.create({baseURL:`${s.API_LOTERIAS}/JBWeb.svc`});i.interceptors.response.use((function(e){const t=["116","226"];return null!==e.data&&"000"!==t?t.indexOf(e.data.codResposta)>=-1?e.data:new Error:e.data?e.data.message||e.data.mensagem:""}),(function(e){const t=e&&e.response&&e.response.data?e.response.data:null;return Promise.reject(t)}));var c=o(7989),u=o(4910);const d="lotericos-session",l={isFetching:!1,load(){const e=localStorage.getItem(d);return e?JSON.parse(e):""},async register(e){const t=[],o=[];return e&&e.arrTipoJogo&&e.arrTipoJogo.forEach((e=>{if(7===e.objTipoJogo.TipoJogoCategoria_ID&&"Liga"===e.objTipoJogo.vchNomeAgrupamento&&"Europa"!==e.objTipoJogo.vchNome){const n={name:e.objTipoJogo.vchNome,range:[]};/Serie\s(A|B)/gi.test(n.name)&&(n.name=`Brasil ${n.name}`),n.slug=(0,r.lV)(n.name),n.apiInfo={sntTipoJogo:e.objTipoJogo.sntTipoJogo,vchNumeroDefault:e.objTipoJogo.vchNumeroDefault},e.lstItemApuracao.forEach((e=>{n.range.push(e.sntNumero||0),t.push({name:e.vchNome||"",image:e.vchURLImagem||null,number:e.sntNumero||0,league:n.slug})})),o.push(n)}})),e.teams=t,e.leagues=o,new Promise((t=>{localStorage.setItem(d,JSON.stringify(e)),t()}))},clean(){return localStorage.setItem(d,"")}},p=async(e=!1)=>{const t=async()=>{if(l.isFetching)return await setTimeout((()=>{t()}),1e3)};return await t(),new Promise(((t,o)=>{const n=l.load();if(n&&!e)return t(n);l.isFetching=!0,a.post("/new/session",{data:{Sistema_ID:32,Cliente_ID:0,LoginLE:"",TokenLE:"",SessionIDLE:"",chrSerial:"999000000001",chrCodigoPonto:"010101"}}).then((async e=>{"object"==typeof e?(await l.register(e),t(e)):o(Error("Sessão inválida"))})).catch((e=>{l.clean(),o(e)})).finally((()=>{l.isFetching=!1}))}))},m=async({login:e,accessToken:t})=>{const o=await p(!0);return new Promise(((n,s)=>{const{Cliente_ID:a,SessionIDLE:r}=o,i={Sistema_ID:0,Cliente_ID:a,SessionIDLE:r,LoginLE:e,TokenLE:t};c.W.post("/lotericos/svc/start/session",i).then((()=>n())).catch((e=>s(e)))}))},h=async({cart:e,extractions:t,...o})=>{let n=null;try{n=await p()}catch(e){return console.error(e)}const{Session_ID:s,SessionIDLE:a}=n,r=(e||[]).reduce(((e,t)=>e+t.betValue),0);return{Sistema_ID:32,Cliente_ID:n?.Cliente_ID||"",chrSerial:"999000000001",Session_ID:s,SessionIDLE:a,strToken:"",intQtdConcursos:0,numValorApostas:r,sntQuantidadeApostas:e?.length||0,valorTotal:100*r,bitPredatado:o.bitPredatado,strData:o.strData&&/(\d{4})-(\d{2})-(\d{2})/gi.test(o.strData)?o.strData:"",arrApostas:(e||[]).map((e=>{const t=(0,u.$E)(e.prizes),o=t.length>1?e.prizes.join(""):(0,u.Ir)(t,".");return{sntTipoJogo:e.game.id,numValor:e.betValue,numValorTotal:e.betValue,vchNumero:e.number,vchPremio:o}})),arrExtracaoData:t}},g=async({cart:e,numContests:t,contestId:o,requestData:n,arrExtracaoData:s})=>{const a=await p(),{Session_ID:r,SessionIDLE:i}=a,c=(e||[]).reduce(((e,t)=>e+t.betValue+(t.megaBolaActivated?t.betValue:0)),0);return{Sistema_ID:0,Session_ID:r,SessionIDLE:i,strToken:"",intNumeroConcurso:o,intQtdConcursos:t,chrSerial:"999000000001",arrExtracaoData:s,arrApostas:(e||[]).map((e=>({...n,sntTipoJogo:e.megaBolaActivated?7778:n.sntTipoJogo,vchNumero:e.selections.map((e=>e.toString().padStart(2,"0"))).join(""),numValor:e.betValue,numValorTotal:e.megaBolaActivated?2*e.betValue:e.betValue}))),Carrinho:e.map((e=>({bitMegaBola:e.megaBolaActivated,numeros:e.selections.map((e=>e.toString().padStart(2,"0"))),valor:e.betValue,valorMegaBola:e.megaBolaActivated?e.betValue:0}))),numValorApostas:c,sntQuantidadeApostas:e.length,valorTotal:100*c}},f=async({raffle:e,selections:t,digitAmount:o,hasFixedQuotas:n})=>{const s=await p(),{Session_ID:a,SessionIDLE:r,Cliente_ID:i}=s,c=t.reduce(((t,n)=>[...t,...new Array(n.amount).fill({sntTipoJogo:e.gameType,numValor:e.value,numValorTotal:e.value,vchNumero:n.number.toString().padStart(o,"0"),vchPremio:e.prize.toString()})]),[]),u=c.reduce(((e,t)=>e+t.numValorTotal),0);return{Sistema_ID:1,Session_ID:a,SessionIDLE:r,Cliente_ID:i,chrSerial:"999000000001",Rifa_ID:e.id,strToken:"",intQtdConcursos:0,bitPredatado:!1,strData:"",arrApostas:n?null:c,arrExtracaoData:[{tnyExtracao:e.extraction.id,sdtData:e.date.raw}],numValorApostas:u,sntQuantidadeApostas:c.length}},v=async({bets:e,numContests:t,contestId:o})=>{const n=await p(),{Session_ID:s,SessionIDLE:a}=n,r=e.reduce(((e,t)=>e+t.betValue),0);return{Sistema_ID:0,Session_ID:s,SessionIDLE:a,strToken:"",intNumeroConcurso:o,intQtdConcursos:t,chrSerial:"999000000001",arrApostas:e.map((({number:e,apiInfo:t,betValue:o})=>({numValor:o,numValorTotal:o,sntTipoJogo:t?.sntTipoJogo??8888,vchNumero:t?.vchNumeroDefault??e.toString().padStart(2,"0"),vchPremio:"1"}))),Carrinho:e.map((({number:e,isLeague:t,name:o,betValue:n})=>({bitMegaBola:!1,nome:o,numeros:t?"00":e,valor:n,valorMegaBola:0}))),numValorApostas:r,sntQuantidadeApostas:e.length,valorTotal:100*r}},S=async e=>{const t=await p();return new Promise(((o,n)=>{const{Cliente_ID:s}=t;i.post("/WalletDetail",{Cliente_ID:s,chrSerial:"999000000001",Session_ID:"",Sistema_ID:1,IDTransDebitoWallet:e}).then((e=>o(e))).catch((e=>n(e)))}))},y=async({date:e,gameType:t,isPopular:o})=>{const n=o?await h({strData:e}):await(async e=>{const t={};let o=null;try{o=await p()}catch(e){console.error(e)}return t.Sistema_ID=o?.Sistema_ID||32,t.Cliente_ID=o?.Cliente_ID||"",t.Session_ID=o?.Session_ID||"",t.strToken=o?.TokenLE||"",t.LoginLE=o?.LoginLE||"",t.strData=e.strData&&/(\d{4})-(\d{2})-(\d{2})/gi.test(e.strData)?e.strData:"",e.gameType&&(t.gameType=e.gameType||""),t})({strData:e,gameType:t});return new Promise(((e,t)=>{a.post(o?"resultados/loterias":"ultimos/resultados",{...n}).then((t=>{e(t)})).catch((e=>{t(e)}))}))},b=async(e,t)=>{const{SessionIDLE:o}=await p(),n=localStorage.getItem("token");return new Promise(((s,a)=>{c.W.post("/lotericos/svc/betlist",{LoginLE:"349378",SessionIDLE:o,TokenLE:n,chrSerial:"999000000001",strDataIni:e,strDataFim:t}).then((e=>{s(e.data)})).catch((e=>{console.error(e),a(e)}))}))},w=async(e,t)=>new Promise(((o,n)=>{c.W.post("/lotericos/svc/betlist/detail",{Session_ID:"",Sistema_ID:1,chrSerial:"999000000001",intNumeroPule:e||222,vchETicket:t??""}).then((e=>{o(e.data)})).catch((e=>{console.error(e),n(e)}))})),I=async e=>new Promise(((t,o)=>{a.post("/extracao/periodo",e?{sdtData:e}:{}).then((e=>{t(e)})).catch((e=>{console.error(e),o(e)}))})),D=async e=>{const t=await p();if(e){return t.teams.find((t=>t.number===e))}return t.teams},T=async(e,t)=>{const o=await p();return new Promise(((n,s)=>{const{Cliente_ID:a}=o;i.post("/GetNumerosRifa",{Cliente_ID:a,chrSerial:"999000000001",Sistema_ID:1,Rifa_ID:e,strData:t}).then((e=>n(e))).catch((e=>s(e)))}))}},2829:function(e,t,o){"use strict";o.d(t,{E:function(){return s}});const n=o(2632).ZP.create({baseURL:"/cms/api"}),s=async e=>{try{return(await n.get(`/banners/${e}`)).data}catch(e){console.error(e)}}},8986:function(e,t,o){"use strict";o.d(t,{Lk:function(){return m},XB:function(){return c},Y:function(){return p},uY:function(){return u},yo:function(){return l}});var n=o(3802),s=o(1956),a=o(6884),r=o(5203);const i=function(e){const t="àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôõœøṕŕßśșțùúüûǘẃẍÿź·/_,:;",o=new RegExp(t.split("").join("|"),"g");return(e||"").toString().toLowerCase().replace(/\s+/g,"-").replace(o,(e=>"aaaaaaaaceeeeghiiiimnnnoooooooprssstuuuuuwxyz------".charAt(t.indexOf(e)))).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},c=async(e,t,o,n)=>{const a={torneio:e?"torneio="+e:"",iniciado:t?"iniciado="+t:"iniciado="+!1,limit:o?"limit="+o:"",country:n?"country="+n:""};for(const e in a)a.hasOwnProperty(e)&&""===a[e]&&delete a[e];const r="/eventos/streams?"+Object.values(a).join("&"),c=await s.y.get(r),u=await d(),l=e=>u.find((t=>t.id===e))||{};return c.eventos=(c.eventos||[]).map((e=>{const t=l(e.tipoEsporte);return{...e,slugEvento:`${i(e.casa)}-x-${i(e.fora)}`,slugEsporte:t?.slug,nomeEsporte:t?.name,hasOdds:e.subeventos?.some((e=>e.cotacao))||!1}})),c.eventos=(c.eventos||[]).map((e=>{const t=l(e.tipoEsporte);return{...e,slugEvento:`${i(e.casa)}-x-${i(e.fora)}`,slugEsporte:t?.slug,nomeEsporte:t?.name,hasOdds:e.subeventos?.some((e=>e.cotacao))||!1}})),c},u=async(e={sport:"",country:"",type:"",championship:"",limit:10,offset:0,filter:null,sort:{live:["date-asc"],prematch:["date-asc"]}})=>{if(!e.sport&&0!==e.sport)return new Error;const t={tipoEsporte:parseInt(isNaN(e.sport)?0:e.sport,10),pais:e.country,torneio:e.championship};if(e.filter?.hasTVStream&&(t.hasTVStream=e.filter.hasTVStream),e.filter?.iniciado&&(t.iniciado=e.filter.iniciado),e.filter&&e.filter.date&&["today","tomorrow","others"].includes(e.filter.date)){const o=new Date;"today"===e.filter.date&&(t.date=(0,a.p6)(o,"YYYYMMDD")),"tomorrow"===e.filter.date&&(o.setDate(o.getDate()+1),t.date=(0,a.p6)(o,"YYYYMMDD")),"others"===e.filter.date&&(o.setDate(o.getDate()+2),t.afterDate=(0,a.p6)(o,"YYYYMMDD"))}e.filter?.odds&&(t.odds={start:parseFloat(e.filter?.odds.start),end:parseFloat(e.filter?.odds.end)});const o=await d();try{const n=await s.y.post("v2/eventos",{type:"live"===e.type?"aovivo":"prematch",filters:t,limit:e.limit,offset:e.offset,include:[],sort:e.sort});return n.eventos=(n.eventos||[]).map((e=>{const t=(n=e.tipoEsporte,o.find((e=>e.id===n))||{});var n;return{...e,slugEvento:`${i(e.casa)}-x-${i(e.fora)}`,slugEsporte:t?.slug,nomeEsporte:t?.name,eventMainOddsQuotation:{home:e?.subeventos[0]&&"C"===e?.subeventos[0].nome?e?.subeventos[0].cotacao:0,away:e?.subeventos.find((e=>"F"===e.nome))?.cotacao||0,draw:e?.subeventos[1]&&"E"===e?.subeventos[1].nome?e?.subeventos[1].cotacao:0},hasOdds:e.subeventos?.some((e=>e.cotacao))||!1}})),n}catch(e){return console.error(e),e}},d=async()=>(await n.U.get("/esportes")).esportes.map((e=>({is_live:e.aovivo,has_stream:!!e.hasTVStream,is_esport:e.isESport,name:e.nome,slug:i(e.nome),id:e.tipo,schedules_live_events:e.qtdLive||0,live_events:e.qtdLiveOn||0,duration:e.tempoJogo||0}))).sort(((e,t)=>("automobilismo"===e.slug?1:0)-("automobilismo"===t.slug?1:0))),l=async()=>{const e=await d(),t=await s.y.get("/principal/destaques/100/0");if(!t)return new Error;return(t.eventos||[]).map((t=>{const o=(n=t.tipoEsporte,e.find((e=>e.id===n))||{});var n;return{...t,slugEvento:`${i(t.casa)}-x-${i(t.fora)}`,slugEsporte:o?.slug,nomeEsporte:o?.name,eventMainOddsQuotation:{home:t?.subeventos[0]&&"C"===t?.subeventos[0].nome?t?.subeventos[0].cotacao:0,away:t?.subeventos.find((e=>"F"===e.nome))?.cotacao||0,draw:t?.subeventos[1]&&"E"===t?.subeventos[1].nome?t?.subeventos[1].cotacao:0},isESport:o?.is_esport||!1,imgAway:`${r.COMPETITORS_ASSETS}/competitors/${t.idAway}.png`,imgHome:`${r.COMPETITORS_ASSETS}/competitors/${t.idHome}.png`}}))},p=async e=>await s.y.get("/principal/subevento",{params:{idEvento:e}}),m=async e=>{try{return await s.y.get("/principal/subevento/betbuilder",{params:{idEvento:e}})}catch(e){console.info("Erro ao obter mercados betbuilder",e)}return null}},8848:function(e,t,o){"use strict";o.d(t,{g:function(){return s}});var n=o(389);const s=async()=>new Promise(((e,t)=>{n.E.get("/theme.json").then((t=>{e(t)})).catch((e=>t(e)))}))},3535:function(e,t,o){"use strict";o.d(t,{DZ:function(){return p},Mg:function(){return y},N$:function(){return l},Ou:function(){return v},XI:function(){return S},n$:function(){return d},pR:function(){return u},s3:function(){return m},tE:function(){return c},xJ:function(){return i},xh:function(){return h},z0:function(){return f},ze:function(){return g}});var n=o(3802),s=o(7989),a=o(5203),r=o(3459);const i=async(e=!1)=>new Promise(((e,t)=>{s.W.get("/usuario").then((t=>e(t&&t.data))).catch((e=>t(e||null)))})),c=async(e=!1)=>new Promise(((e,t)=>{s.W.get("/user").then((t=>e(t&&t.data))).catch((e=>t(e||null)))})),u=async(e=!0)=>new Promise(((e,t)=>{s.X.get("/sp/saldo/apostador",{cache:{maxAge:6e4}}).then((t=>e(t.data))).catch((e=>t(e)))})),d=async e=>{const t={user:e.user.trim(),password:e.password,idClient:a.KEY_CLIENT_APP};return new Promise(((e,o)=>{n.U.post("/access",t).then((async t=>{try{return e(t)}catch(e){return console.error("session error",e),o(e)}})).catch((e=>(console.error(e),o(e?.response||e))))}))},l=e=>new Promise(((t,o)=>{n.U.post("/user/cadastro/auto",e).then((o=>{r.register(e.email,o.idUsuarioSp,o.idUsuarioAuth),t(o&&o.data)})).catch((e=>{o(e)}))})),p=e=>new Promise(((t,o)=>{s.W.put("/usuario",e).then((e=>{t(e&&e.data)})).catch((e=>{o(e)}))})),m=(e,t)=>{const o={senhaAtual:e,novaSenha:t};return new Promise(((e,t)=>{s.W.post("/user/password",o).then((t=>{e(t.data)})).catch((e=>{t(e)}))}))},h=e=>{const t={login:e};return r.event("forgotPassword"),new Promise(((e,o)=>{n.U.post("/user/password/recovery/sender",t).then((t=>e(t))).catch((e=>{o(e)}))}))},g=e=>new Promise(((t,o)=>{n.U.post("/user/password/recovery",e).then((e=>t(e))).catch((e=>{o(e)}))})),f=e=>new Promise(((t,o)=>{n.U.get("/pessoa/data",{params:{cpf:e}}).then((e=>t(e))).catch((e=>{o(e)}))})),v=(e={senha:"",type:"email"})=>{if(!e.type)throw Error('The field "type" is required.');return new Promise(((t,o)=>{s.W.post("/auth/login/req/active/mfa",e).then((e=>t(e))).catch((e=>{o(e)}))}))},S=(e={passcode:""})=>{if(!e.passcode)throw Error('The field "type" is required.');return new Promise(((t,o)=>{s.W.post("/auth/login/active/mfa",e).then((e=>t(e))).catch((e=>{o(e)}))}))},y=(e={passcode:"",accessToken:""})=>{if(!e.passcode)throw Error('The field "passcode" is required.');return new Promise(((t,o)=>{n.U.post("/auth/login/mfa",{passcode:e.passcode},((e="")=>({headers:{Authorization:`Bearer accessToken="${e||localStorage.getItem("token")}", idCliente="13"`}}))(e.accessToken)).then((e=>t(e))).catch((e=>{o(e)}))}))}},9612:function(e,t,o){"use strict";var n=o(6685);t.Z=(e=>(e.notyf||(e.notyf=new n.Iq({dismissible:!0,duration:4e3,ripple:!1,position:{x:"right",y:"top"},types:[{type:"odd",className:"odd",icon:!1}]})),e.notyf))(window)}}]);