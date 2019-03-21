(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,a,n){},239:function(e,a,n){},240:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(16),c=n.n(l),o=n(47),i=n.n(o),u=n(76),m=n(13),s=n(77),d=n.n(s),f=n(10),p=n.n(f),v=n(89),E=n.n(v),g=n(21),h=n.n(g),b=n(86),y=n(22),w=(n(117),n(29)),z=n.n(w),C=n(85),R=n.n(C),S=n(33),k=n.n(S),j=n(81),x=n.n(j),O=n(82),A=n.n(O),N=n(14),L=n.n(N),F=[{name:"LinkCheckReq",size:0},{name:"LinkAdrAns",size:1},{name:"DutyCycleAns",size:0},{name:"RXParamSetupAns",size:1},{name:"DevStatusAns",size:2},{name:"NewChannelAns",size:1},{name:"DlChannelAns",size:1},{name:"RXTimingSetupAns",size:0},{name:"TxParamSetupAns",size:0}],M=[{name:"LinkCheckAns",size:2},{name:"LinkAdrReq",size:4},{name:"DutyCycleReq",size:1},{name:"RXParamSetupReq",size:4},{name:"DevStatusReq",size:0},{name:"NewChannelReq",size:5},{name:"DlChannelReq",size:4},{name:"RXTimingSetupReq",size:1},{name:"TxParamSetupReq",size:1}],P=n(78),T=n.n(P),q=n(80),I=n.n(q);function D(e){var a=e.text,n=e.placement,t=void 0===n?"bottom":n;return a?r.a.createElement("sup",null,r.a.createElement(T.a,{placement:t,overlay:r.a.createElement(I.a,{id:"dummy"},r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement(k.a,{source:a})))},r.a.createElement("small",{className:"text-muted"},"\u24d8"))):null}function U(e){return{value:""+e.value,onChange:function(a){var n=a.currentTarget;e.setValue("number"===typeof e.value?+n.value:n.value)}}}var V=n(46),W=n.n(V),X=n(34),B=n.n(X);function G(e){var a=e.min,n=void 0===a?0:a,l=e.value,c=e.setValue;return Object(t.useEffect)(function(){c(l)},[l]),r.a.createElement(B.a,{className:"mb-3"},r.a.createElement(B.a.Prepend,null,r.a.createElement(z.a,{onClick:function(){l>n&&c(l-1)},variant:"outline-secondary"},"-")),r.a.createElement(W.a,Object.assign({},U({value:l,setValue:c}),{type:"number",min:n,placeholder:"Enter number","aria-label":"Number"})),r.a.createElement(B.a.Append,null,r.a.createElement(z.a,{onClick:function(){c(function(e){return e+1})},variant:"outline-secondary"},"+")))}var H=n(90),$=n(91),J={payloadSize:6,headerSize:13,codingRate:"4/5"};function K(e){function a(e){var a=Object(t.useState)(e),n=Object(m.a)(a,2);return{value:n[0],setValue:n[1]}}var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a={},n=e.split(",").map(function(e){return e.trim()}),t=!0,r=!1,l=void 0;try{for(var c,o=function(){var e=c.value;if(""===e)return"continue";if(/^\d+$/.test(e))return a.payloadSize?a.headerSize?console.warn("Ignored numeric value ".concat(e,"; already parsed both payloadSize and headerSize")):a.headerSize=+e:a.payloadSize=+e,"continue";if(/^cr4[5678]$/i.test(e))return a.codingRate?console.warn("Ignored string value ".concat(e,"; already parsed codingRate")):a.codingRate=e.substr(2).split("").join("/"),"continue";var n=e.toLowerCase(),t=F.concat(M).find(function(e){return e.name.toLowerCase()===n});t?a.macCommands=(a.macCommands||[]).concat(t):console.warn("Ignored string value ".concat(e,"; no matching MAC command found"))},i=n[Symbol.iterator]();!(t=(c=i.next()).done);t=!0)o()}catch(u){r=!0,l=u}finally{try{t||null==i.return||i.return()}finally{if(r)throw l}}return Object($.a)({},J,a)}(e.userConfig),l=a(n.payloadSize),c=a(n.headerSize),o=a(n.codingRate),i=a(n.macCommands);function u(e){var a;i.setValue((i.value||[]).concat(e)),a=e.size+1,c.setValue(function(e){return e+a})}Object(t.useEffect)(function(){e.setPacketSize(c.value+l.value)},[c,l]),Object(t.useEffect)(function(){e.setCodingRate(o.value)},[o]),Object(t.useEffect)(function(){e.setUserConfig(function(e,a,n,t){var r=[];return e===J.payloadSize&&a===J.headerSize||r.push(e),a!==J.headerSize&&r.push(a),n&&n!==J.codingRate&&r.push("cr"+n.replace("/","")),t&&r.push.apply(r,Object(H.a)(t.map(function(e){return e.name}))),r.join(",")}(l.value,c.value,o.value,i.value))},[c,l,o]);var s=F.map(function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(x.a,{onClick:function(){return u(e)},pill:!0,variant:n.macCommands&&n.macCommands.includes(e)?"primary":"secondary"},e.name," ",e.size),"\xa0")});return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,null,r.a.createElement(L.a.Row,null,r.a.createElement(L.a.Group,{as:p.a,controlId:"formHeaderSize"},r.a.createElement(L.a.Label,null,"Header size",r.a.createElement(D,{text:"In a LoRaWAN 1.0.x uplink and downlink, the header is at least 13 bytes:\n\n- MType (1 byte)\n- DevAddr (4)\n- FCtrl (1)\n- FCnt (2)\n- FPort (1)\n- MIC (4)"})),r.a.createElement(G,Object.assign({},c,{min:13}))),r.a.createElement(L.a.Group,{as:p.a,controlId:"formApplicationPayloadSize"},r.a.createElement(L.a.Label,null,"Payload size",r.a.createElement(D,{text:"The application payload size. Might be empty for a simple ACK or if the packet only includes MAC commands."})),r.a.createElement(G,l)),r.a.createElement(L.a.Group,{as:p.a,controlId:"formCodingRate"},r.a.createElement(L.a.Label,null,"Coding rate",r.a.createElement(D,{text:"The coding rate (CR) used for forward error correction (FEC)."})),r.a.createElement(L.a.Control,Object.assign({as:"select"},U(o),{className:"xxtext-primary xxborder-primary"}),r.a.createElement("option",{value:"4/5"},"4/5"),r.a.createElement("option",{value:"4/6"},"4/6"),r.a.createElement("option",{value:"4/7"},"4/7"),r.a.createElement("option",{value:"4/8"},"4/8")))),n.macCommands&&r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a.Row,{className:"justify-content-md-center"},r.a.createElement(p.a,{md:"8"},r.a.createElement(L.a.Label,null,"MAC command"),r.a.createElement(A.a,{"aria-label":"MAC commands"},s))),r.a.createElement("br",null))))}var Q=n(83),Y=n(84),Z=function(){function e(){Object(Q.a)(this,e)}return Object(Y.a)(e,null,[{key:"calculate",value:function(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:125,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"4/5",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"auto",l=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:8,o=Math.pow(2,a)/(1e3*n)*1e3,i=(c+4.25)*o,u=l?0:1,m="auto"===r&&125===+n&&+a>=11||!0===r?1:0,s=+t[2]-4;return+(i+(8+Math.max(Math.ceil((8*e-4*a+28+16-20*u)/(4*(a-2*m)))*(s+4),0))*o).toFixed(2)}}]),e}(),_=n(23),ee=n.n(_);function ae(e){var a=e.dr,n=e.airtime;return r.a.createElement(ee.a,null,r.a.createElement(ee.a.Header,null,r.a.createElement(ee.a.Title,null,a.name,r.a.createElement(D,{text:a.notes,placement:"top"})),r.a.createElement(ee.a.Subtitle,{as:"h4"},r.a.createElement("span",{className:"sf"},"SF"+a.sf),r.a.createElement("span",{className:"bw"},"BW",r.a.createElement("br",null),a.bw))),r.a.createElement(ee.a.Title,{as:"h4"},n,r.a.createElement("span",{className:"Result-unit"},"ms")),r.a.createElement(ee.a.Footer,null,r.a.createElement("div",null,Math.floor(3e4/n),r.a.createElement("span",{className:"Result-unit"},"/24h")),r.a.createElement("div",null,(1250/n).toFixed(1),r.a.createElement("span",{className:"Result-unit"},"avg",r.a.createElement("br",null),"/hour"))))}function ne(e){var a=e.region,n=e.packetSize,t=e.codingRate;if(!t)return null;var l=a.dataRates.map(function(e){var a=Z.calculate(n,e.sf,e.bw,t);return r.a.createElement(p.a,{key:e.name,xs:"auto"},r.a.createElement(ae,{dr:e,airtime:a}))});return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:"justify-content-md-center"},l))}function te(e,a,n){var t=a.pathname.substr("/lorawan-airtime-ui".length).split("/"),r=Object(m.a)(t,4),l=r[1],c=r[2],o=r[3];console.log("parseUrl",window.location.pathname,a.pathname,"/lorawan-airtime-ui",l,c,o);var i=n.networks.find(function(e){return e.name===l}),u=i?i.regions.find(function(e){return e.name===c}):void 0;return{network:i,region:u,parameters:o}}function re(e){var a=function(e,a,n,t,r,l){var c=te(0,a,n);console.log("setUrl inputs",window.location.pathname,a.pathname,"/lorawan-airtime-ui",t,r,l);var o=void 0===l?c.parameters:l,i="/lorawan-airtime-ui/"+t.name+"/"+r.name+(o?"/"+o:"");a.pathname!==i?(console.log("setUrl result",i),e.replace(i)):console.log("No URL change needed; ".concat(i))}.bind(null,e.history,e.location,e.config),n=te(e.history,e.location,e.config),l=n.network,c=n.region,o=n.parameters;if(!l){var i=e.config.networks[0],u=i.regions.find(function(e){return e.name===i.defaultRegion});return a(i,u),null}if(!c){var s=l.regions.find(function(e){return e.name===l.defaultRegion});return a(l,s),null}var d=Object(t.useState)(null),f=Object(m.a)(d,2),v=f[0],E=f[1],g=Object(t.useState)(null),b=Object(m.a)(g,2),y=b[0],w=b[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(p.a,{className:"table-responsive"},r.a.createElement(R.a,null,l.regions.map(function(e){return r.a.createElement(z.a,{variant:"outline-primary",size:"sm",active:e.name===c.name,disabled:!e.dataRates,key:e.name,onClick:function(){return n=e,console.log("region",n),void a(l,n);var n}},e.label)})))),r.a.createElement(h.a,null,r.a.createElement("hr",null)),r.a.createElement(h.a,{className:"justify-content-md-center"},r.a.createElement(p.a,{md:"auto"},r.a.createElement(K,{userConfig:o,setUserConfig:function(e){console.log("URL",e),a(l,c,e)},setPacketSize:function(e){console.log("packet size",v,e),E(e)},setCodingRate:function(e){console.log("coding rate",y,e),w(e)}}))),r.a.createElement(h.a,{className:"justify-content-md-center"},r.a.createElement(p.a,{lg:"8"},r.a.createElement("h2",null,l.title," ",c.label),c.description&&r.a.createElement(k.a,{source:c.description}))),r.a.createElement(ne,{region:c,packetSize:v,codingRate:y}))}n(239),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(function(){var e="/lorawan-airtime-ui/config.json",a=Object(t.useState)("Loading configuration..."),n=Object(m.a)(a,2),l=n[0],c=n[1],o=Object(t.useState)({}),s=Object(m.a)(o,2),f=s[0],v=s[1];return Object(t.useEffect)(function(){var a=!1;return function(){var n=Object(u.a)(i.a.mark(function n(){var t;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.a.get(e);case 3:t=n.sent.data,a||(c(null),v(t)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c("Failed to load configuration ".concat("/lorawan-airtime-ui"," ").concat(e,": ").concat(n.t0));case 10:case"end":return n.stop()}},n,null,[[0,7]])}));return function(){return n.apply(this,arguments)}}()(),function(){a=!0}},[]),r.a.createElement(b.a,{basename:"/lorawan-airtime-ui"},r.a.createElement(E.a,{className:"App"},r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement("h1",null,"LoRaWAN 1.0.x airtime calculator"),r.a.createElement("p",null,l))),f.networks&&r.a.createElement(y.a,{render:function(e){return r.a.createElement(re,Object.assign({},e,{config:f}))}})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},92:function(e,a,n){e.exports=n(240)}},[[92,1,2]]]);
//# sourceMappingURL=main.9d5e6b22.chunk.js.map