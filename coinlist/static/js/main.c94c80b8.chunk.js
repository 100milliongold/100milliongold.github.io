(this["webpackJsonpcoin-list"]=this["webpackJsonpcoin-list"]||[]).push([[0],[,,function(e,t,a){e.exports={TableHeader:"CoinList_TableHeader__xgszP",TableBody:"CoinList_TableBody__34aTl",Table:"CoinList_Table__2grkB",Loading:"CoinList_Loading__1JU-c"}},,,function(e,t,a){e.exports={wrap:"Tabs_wrap__2FwRE",taplist:"Tabs_taplist__3KyjM",active:"Tabs_active__1v0tH"}},,,,,,function(e,t,a){e.exports={container:"App_container__1MQN3"}},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),o=(a(19),a(1)),l=a(3),i=a(4),u=a(9),m=a(10),d=a(12),h=a(13);function w(e){var t=e.msg,a=e.status_code;this.message=t,this.name="ApiException",this.status_code=a}w.prototype.toString=function(){var e=this.msg,t=this.name,a=this.status_code;return"".concat(t," : CODE-").concat(a," ").concat(e)};a(6);var g=new AbortController,E=g.signal,f={signal:E,method:"GET",headers:{"Access-Control-Request-Method":"GET,HEAD",Accept:"application/json"}};var p=function(e){var t=e.url,a=void 0===t?"":t;return fetch("".concat("https://cors-anywhere.herokuapp.com","/").concat("https://api.gopax.co.kr").concat(a),f).then((function(e){return function(e){switch(e){case 200:return!0;case 401:throw new w({msg:"\uc798\ubabb\ub41c \uc694\uccad - \uc694\uccad \ud615\uc2dd\uc774 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc74c",status_code:e});case 403:throw new w({msg:"\uae08\uc9c0\ub428 - \uc694\uccad\ud55c \ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \uc811\uadfc \uad8c\ud55c\uc774 \uc5c6\uc74c",status_code:e});case 404:throw new w({msg:"\ucc3e\uc744 \uc218 \uc5c6\uc74c",status_code:e});case 429:throw new w({msg:"\uc694\uccad \ud55c\ub3c4 \ucd08\uacfc - API \ud638\ucd9c \ud69f\uc218 \uc81c\ud55c \ucd08\uacfc",status_code:e});case 500:throw new w({msg:"\ub0b4\ubd80 \uc11c\ubc84 \uc624\ub958 - \uc11c\ubc84\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud568",status_code:e});case 100:case 106:throw new w({msg:"\uc790\uc0b0 \uc774\ub984(Asset Name)\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc74c. \uc790\uc0b0 \ubaa9\ub85d \uc870\ud68c\ud558\uae30\uc5d0\uc11c \uc804\uccb4 \ubaa9\ub85d\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",status_code:e});case 103:throw new w({msg:"\uc8fc\ubb38 \uc885\ub958(Type)\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc74c",status_code:e});case 101:case 104:throw new w({msg:"\uac70\ub798 \uc30d(Trading Pair)\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc74c. \uac70\ub798\uc30d \ubaa9\ub85d \uc870\ud68c\ud558\uae30\uc5d0\uc11c \uc804\uccb4 \ubaa9\ub85d\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",status_code:e});case 105:throw new w({msg:"\uac70\ub798 \uc30d(Trading Pair)\uc774 \uc77c\uc2dc\uc801\uc73c\ub85c \ube44\ud65c\uc131\ud654 \ub418\uc5b4\uc788\uc74c. \uac70\ub798\uc30d \ubaa9\ub85d \uc870\ud68c\ud558\uae30\uc5d0\uc11c \uc804\uccb4 \ubaa9\ub85d\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",status_code:e});case 107:throw new w({msg:"\uc8fc\ubb38 \uc218\ub7c9\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc74c.",status_code:e});case 108:throw new w({msg:"\uc8fc\ubb38 \uac00\uaca9\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc74c.",status_code:e});case 201:throw new w({msg:"\uc8fc\ubb38\uc744 \uc704\ud55c \uc794\uace0\uac00 \ubd80\uc871.",status_code:e});case 202:throw new w({msg:"\uc8fc\ubb38 \uace0\uc720\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc74c.",status_code:e});case 203:throw new w({msg:"\uc8fc\ubb38 \uc218\ub7c9 X \uc8fc\ubb38 \uac00\uaca9\uc774 \ub108\ubb34 \ud07c.",status_code:e});case 204:throw new w({msg:"\ud604\uc7ac \ub9e4\uc218 \uc8fc\ubb38\uc774 \ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc74c. \uacf5\uc9c0\uc0ac\ud56d\uc744 \ud655\uc778\ud558\uc2ed\uc2dc\uc624.",status_code:e});case 206:throw new w({msg:"\uc8fc\ubb38 \uc635\uc158\ub4e4\uc774 \uc11c\ub85c \uc0c1\ucda9\ub428.",status_code:e});case 10010:throw new w({msg:"\ucd9c\uae08\uc9c0\uac11\uc8fc\uc18c\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc74c.",status_code:e});case 10041:throw new w({msg:"\uac70\ub798\uc18c\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc74c.",status_code:e});case 10155:throw new w({msg:"API\ud0a4\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc74c.",status_code:e});case 10202:throw new w({msg:"\uc8fc\ubb38 \uacb0\uc81c \uc218\ub7c9\uc774 \ubd80\uc871.",status_code:e});default:throw new w({msg:"\uc54c\uc218 \uc5c6\ub294 status \ucf54\ub4dc",status_code:e})}}(e.status)?e.text():void 0})).then((function(e){return e?JSON.parse(e):void 0}))},v=function(){g.abort()},_=function(){return p({url:"/assets"})},b=function(){return p({url:"/trading-pairs/stats"})},T=a(5),S=a.n(T);function D(e){var t=e.value,a=e.list,n=void 0===a?[]:a,c=e.onClick;return r.a.createElement("div",{className:S.a.wrap},r.a.createElement("ul",{className:S.a.taplist},n.map((function(e,a){var n=e.name;return r.a.createElement("li",{key:a,className:t===n?S.a.active:"",onClick:function(e){return c(n)}},r.a.createElement("p",null,n))}))))}D.defaultProps={onClick:function(){return console.warn("onClick not defind")}};var k=r.a.memo(D),y=a(2),C=a.n(y);function A(e){return e=parseFloat(e),e=Math.round(100*e)/100,e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function j(e){var t=e.close,a=e.high,n=e.low,c=e.name,s=e.open,o=e.time,l=e.volume,i=Math.round(1e12*(t-s))/1e12/s*100;return r.a.createElement("tr",null,r.a.createElement("td",null,c),r.a.createElement("td",null,A(t)),r.a.createElement("td",null,A(i)),r.a.createElement("td",null,A(a)),r.a.createElement("td",null,A(n)),r.a.createElement("td",null,A(l)),r.a.createElement("td",null,function(e){var t=new Date(e),a=t.getFullYear().toString(),n=t.getMonth().toString(),r=t.getDate().toString(),c=t.getHours().toString(),s=t.getMinutes().toString(),o=t.getSeconds().toString();return"".concat(a,"-").concat(n.padStart(2,"0"),"-").concat(r.padStart(2,"0")," ").concat(c.padStart(2,"0"),":").concat(s.padStart(2,"0"),":").concat(o.padStart(2,"0"))}(o)))}function O(e){var t=e.assets,a=e.data,n=e.isData,c=e.isError;return r.a.createElement("div",null,r.a.createElement("div",{className:C.a.TableHeader},r.a.createElement("table",{className:C.a.Table},r.a.createElement("colgroup",null,r.a.createElement("col",{width:"14%"}),r.a.createElement("col",{width:"14%"}),r.a.createElement("col",{width:"14%"}),r.a.createElement("col",{width:"14%"}),r.a.createElement("col",{width:"14%"}),r.a.createElement("col",{width:"14%"}),r.a.createElement("col",{width:"*"})),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\uc774\ub984"),r.a.createElement("th",null,"\ud604\uc7ac\uac00"),r.a.createElement("th",null,"\ubcc0\ub3d9"),r.a.createElement("th",null,"\ucd5c\uace0\uac00"),r.a.createElement("th",null,"\ucd5c\uc800\uac00"),r.a.createElement("th",null,"\uac70\ub798\ub300\uae08"),r.a.createElement("th",null,"\uac31\uc2e0\uc2dc\uac04"))))),r.a.createElement("div",{className:C.a.TableBody},r.a.createElement("table",{className:C.a.Table},r.a.createElement("colgroup",null,r.a.createElement("col",{width:"14%"}),r.a.createElement("col",{width:"14%"}),r.a.createElement("col",{width:"14%"}),r.a.createElement("col",{width:"14%"}),r.a.createElement("col",{width:"14%"}),r.a.createElement("col",{width:"14%"}),r.a.createElement("col",{width:"*"})),r.a.createElement("tbody",null,!n&&r.a.createElement("tr",null,r.a.createElement("td",{className:C.a.Loading,colSpan:7},r.a.createElement("p",null,"loading"))),n&&null===c&&void 0!==a&&a.map((function(e,a){return r.a.createElement(j,Object.assign({key:a},e,{name:"".concat(t[e.name.split("-")[0]]," (").concat(e.name.split("-")[0],")")}))})),n&&null!==c&&r.a.createElement("tr",null,r.a.createElement("td",{className:C.a.Loading,colSpan:7},r.a.createElement("p",null,"\ub370\uc774\ud130 \uac00\uc838\uc624\uae30 \uc2e4\ud328 : ".concat(c.message||"\uc54c\uc218 \uc5c6\ub294 \uc5d0\ub7ec\ubc1c\uc0dd"))))))))}function N(e){var t=e.view,a=e.changeTab,n=e.assets,c=e.data,s=e.isData,o=e.isError;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{onClick:a,value:t,list:[{name:"KRW"},{name:"BTC"},{name:"ETH"}]}),r.a.createElement(O,{assets:n,data:c,isData:s,isError:o}))}var H=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={view:"KRW",isData:!1,isError:null},e.errorHandler=function(t){return console.error(t),t instanceof w||(t=new w({msg:"\uc54c\uc218\uc5c6\ub294\uc5d0\ub7ec",status_code:null})),e.setState({isError:t,isData:!0}),t},e.getAssets=function(){return _().then((function(e){return e.reduce((function(e,t,a,n){var r=t.id,c=t.name;return Object(i.a)({},e,Object(l.a)({},r,c))}),{})})).then((function(e){return{name:"assets",data:e}}))},e.getTradingPairsAllStats=function(){return b().then((function(e){return{name:"trading_pairs_stats",data:{KRW:e.filter((function(e){var t=e.name.split("-");return"KRW"===Object(o.a)(t,2)[1]})),BTC:e.filter((function(e){var t=e.name.split("-");return"BTC"===Object(o.a)(t,2)[1]})),ETH:e.filter((function(e){var t=e.name.split("-");return"ETH"===Object(o.a)(t,2)[1]}))}}}))},e.initData=function(){return Promise.all([e.getAssets(),e.getTradingPairsAllStats()]).then((function(t){return t.forEach((function(t){var a=t.name,n=t.data;return e.setState(Object(l.a)({},a,n))})),e.setState({isData:!0}),t})).catch(e.errorHandler)},e.refreshData=function(){null===e.state.isError&&e.getTradingPairsAllStats().then((function(t){var a=t.name,n=t.data;return e.setState(Object(l.a)({},a,n),(function(){return setTimeout(e.refreshData,6e4)}))})).catch(e.errorHandler)},e.changeTab=function(t){return e.setState({view:t})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.initData().then((function(t){null===e.state.isError&&setTimeout(e.refreshData,6e4)}))}},{key:"componentWillUnmount",value:function(){v()}},{key:"render",value:function(){var e=this.state,t=e.assets,a=e.view,n=e.trading_pairs_stats,c=e.isError,s=e.isData,o=void 0!==n?n[a]:void 0;return r.a.createElement(N,{isData:s,isError:c,assets:t,data:o,view:a,changeTab:this.changeTab})}}]),a}(n.Component),B=a(11),P=a.n(B);var M=function(){return r.a.createElement("div",{className:P.a.container},r.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.c94c80b8.chunk.js.map