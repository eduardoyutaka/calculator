(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{35:function(e,t,a){e.exports=a(45)},40:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(15),c=a.n(o),l=(a(40),a(27)),i=a(59),m=a(23),u=a(61),p=a(58),s=a(57),f=a(11),h=a(62),b="0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",g=Object(f.a)((function(e){return{root:{color:e.palette.primary.main,height:2,padding:"15px 0"},thumb:{height:28,width:28,backgroundColor:"#fff",boxShadow:b,marginTop:-14,marginLeft:-14,"&:focus, &:hover, &$active":{boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)","@media (hover: none)":{boxShadow:b}}},active:{},valueLabel:{left:"calc(-50% + 12px)",top:-22,"& *":{background:"transparent",color:"#000"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"#bfbfbf"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"currentColor"}}}))(h.a),y=function(e){return"".concat(e,"%")},d=function(e){var t=Math.floor(e/12),a=e%12,r="";return 1===t?r=r.concat("1 ano"):t>1&&(r=r.concat("".concat(t," anos"))),0!==t&&0!==a&&(r=r.concat(" e ")),1===a?r=r.concat("1 m\xeas"):a>1&&(r=r.concat("".concat(a," meses"))),r},v=function(e){var t=e.defaultValue,a=e.min,r=e.max,o=e.onChange,c=e.step,l=e.type,i=e.value;return n.a.createElement(u.a,{mt:2,ml:2,mr:2},n.a.createElement(s.a,{color:"primary",variant:"subtitle2"},function(e,t){switch(t){case"currency":return Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e);case"tax":return y(e);case"time":return d(e);default:return}}(i,l)),n.a.createElement(g,{"aria-label":"ios slider",max:r,min:a,step:c,onChange:o,defaultValue:t}))},x=function(){var e=Object(r.useState)(1e3),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)(10),l=Object(m.a)(c,2),i=l[0],f=l[1],h=Object(r.useState)(360),b=Object(m.a)(h,2),g=b[0],y=b[1],d=function(){return a*(i/100)*[Math.pow(1.001856,g)-1]/.001856};return n.a.createElement(p.a,{maxWidth:!1},n.a.createElement(u.a,{p:3,textAlign:"center"},n.a.createElement(s.a,{color:"primary",variant:"h5"},"Simule e planeje seus objetivos:")),n.a.createElement(u.a,{textAlign:"center",mt:1},n.a.createElement(s.a,{color:"primary",variant:"subtitle2"},"Quanto voc\xea gasta por m\xeas?")),n.a.createElement(v,{onChange:function(e,t){o(t)},min:500,max:5e4,step:500,type:"currency",value:a,defaultValue:1e3}),n.a.createElement(u.a,{textAlign:"center",mt:3},n.a.createElement(s.a,{color:"primary",variant:"subtitle2"},"Quanto gostaria de guardar por m\xeas?")),n.a.createElement(v,{onChange:function(e,t){f(t)},min:1,max:10,step:1,type:"tax",value:i,defaultValue:10}),n.a.createElement(u.a,{textAlign:"center",mt:3},n.a.createElement(s.a,{color:"primary",variant:"subtitle2"},"Por quanto tempo?")),n.a.createElement(v,{defaultValue:360,onChange:function(e,t){y(t)},min:1,max:360,type:"time",value:g}),n.a.createElement(u.a,{ml:2,mt:3,mb:2},n.a.createElement(s.a,{variant:"h4"},"Voc\xea ter\xe1",n.a.createElement(s.a,{variant:"span",color:"primary"}," ".concat(Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(d())," ")),"na Step")),n.a.createElement(u.a,{ml:2,mb:3},n.a.createElement(s.a,{variant:"h4",textAlign:"center"},"Seu $ parado ",Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(a*(i/100)*g),n.a.createElement(s.a,{variant:"caption",color:"error"}," (-".concat(Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(d()-a*(i/100)*g),")")))))},E=Object(l.a)({palette:{primary:{main:"#FFFFFF"}},typography:{fontFamily:"Montserrat",caption:{fontSize:18,fontWeight:600},h4:{fontSize:22,fontWeight:600},h5:{fontSize:24,fontWeight:600},subtitle2:{fontSize:18,fontWeight:600}}}),w=function(){return n.a.createElement(i.a,{theme:E},n.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.e2cb7195.chunk.js.map