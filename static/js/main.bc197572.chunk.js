(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{35:function(e,a,t){e.exports=t(45)},40:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),c=t.n(o),l=(t(40),t(27)),i=t(59),u=t(23),m=t(61),h=t(58),p=t(57),s=t(11),f=t(62),b="0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",g=Object(s.a)((function(e){return{root:{color:"black",height:2,padding:"15px 0"},thumb:{height:28,width:28,backgroundColor:"#fff",boxShadow:b,marginTop:-14,marginLeft:-14,"&:focus, &:hover, &$active":{boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)","@media (hover: none)":{boxShadow:b}}},active:{},valueLabel:{left:"calc(-50% + 12px)",top:-22,"& *":{background:"transparent",color:"#000"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"#e0e0e0"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"currentColor"}}}))(f.a),d=function(e){return"".concat(e,"%")},v=function(e){var a=Math.floor(e/12),t=e%12,n="";return 1===a?n=n.concat("1 ano"):a>1&&(n=n.concat("".concat(a," anos"))),0!==a&&0!==t&&(n=n.concat(" e ")),1===t?n=n.concat("1 m\xeas"):t>1&&(n=n.concat("".concat(t," meses"))),n},y=function(e){var a=e.defaultValue,t=e.marks,n=e.min,o=e.max,c=e.onChange,l=e.step,i=e.type,u=e.value;return r.a.createElement(m.a,{mt:2,ml:2,mr:2},r.a.createElement(p.a,{variant:"h5"},function(e,a){switch(a){case"currency":return Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e);case"tax":return d(e);case"time":return v(e);default:return}}(u,i)),r.a.createElement(g,{"aria-label":"ios slider",marks:t,max:o,min:n,step:l,onChange:c,defaultValue:a}))},E=function(){var e=Object(n.useState)(1e3),a=Object(u.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(10),l=Object(u.a)(c,2),i=l[0],s=l[1],f=Object(n.useState)(360),b=Object(u.a)(f,2),g=b[0],d=b[1],v=function(){return t*(i/100)*[Math.pow(1.001856,g)-1]/.001856};return r.a.createElement(h.a,{maxWidth:!1},r.a.createElement(m.a,{p:2},r.a.createElement(p.a,{color:"primary",variant:"h2"},"Simule e planeje seus objetivos:")),r.a.createElement(m.a,{p:2},r.a.createElement(p.a,{variant:"h4"},"Quanto voc\xea gasta por m\xeas?")),r.a.createElement(y,{onChange:function(e,a){o(a)},min:500,max:5e4,step:500,type:"currency",value:t,defaultValue:1e3}),r.a.createElement(m.a,{p:2},r.a.createElement(p.a,{variant:"h4"},"Quanto gostaria de guardar por m\xeas?")),r.a.createElement(y,{onChange:function(e,a){s(a)},marks:[{value:5,label:"5%"},{value:10,label:"10%"},{value:20,label:"20%"}],min:5,max:20,step:null,type:"tax",value:i,defaultValue:20}),r.a.createElement(m.a,{p:2},r.a.createElement(p.a,{variant:"h4"},"Por quanto tempo?")),r.a.createElement(y,{defaultValue:360,onChange:function(e,a){d(a)},min:1,max:360,type:"time",value:g}),r.a.createElement(m.a,{ml:2,mt:3,mb:2},r.a.createElement(p.a,{variant:"h4"},"Voc\xea ter\xe1",r.a.createElement(p.a,{variant:"span",color:"primary"}," ".concat(Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(v())," ")),"na Step")),r.a.createElement(m.a,{ml:2,mb:3},r.a.createElement(p.a,{variant:"h6"},"Seu $ parado ",Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t*(i/100)*g),r.a.createElement(p.a,{variant:"caption",color:"error"}," (-".concat(Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(v()-t*(i/100)*g),")")))))},x=Object(l.a)({palette:{primary:{main:"#FFFFFF"}},typography:{fontFamily:"Montserrat",caption:{fontSize:18,fontWeight:600},h2:{fontSize:36,fontWeight:600},h3:{fontSize:32,fontWeight:600},h4:{fontSize:28,fontWeight:600},h5:{fontSize:24,fontWeight:600},h6:{fontSize:22,fontWeight:600},subtitle2:{fontSize:18,fontWeight:600}}}),S=function(){return r.a.createElement(i.a,{theme:x},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.bc197572.chunk.js.map