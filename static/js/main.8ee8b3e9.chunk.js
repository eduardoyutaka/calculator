(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{68:function(e,a,t){e.exports=t(79)},73:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(10),c=t.n(o),l=(t(73),t(57)),i=t(122),m=t(121),u=t(33),p=t(117),s=t(124),b=t(119),d=t(56),h=t.n(d),g=t(120),f=t(126),E=t(118),v=t(4),x=t(128),y=t(123),C=Object(v.a)((function(e){return{input:{borderRadius:45,border:"1px solid ".concat(e.palette.primary.main),color:e.palette.primary.main,fontSize:18,fontWeight:600,height:18,padding:"36px 40px 36px 47px"}}}))(x.a),j=function(e){return n.a.createElement(y.a,Object.assign({},e,{input:n.a.createElement(C,null)}))},O=t(116),w=t(125),S=t(115),k=Object(v.a)((function(e){return{root:{color:e.palette.primary.main,fontSize:18,fontWeight:600,textTransform:"none"}}}))(S.a),B=function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}},R=Object(p.a)((function(e){return{appBar:{backgroundColor:"white"},container:{borderColor:e.palette.primary.main},noBorder:{borderColor:"transparent"}}})),W=function(e){var a=e.borderColor,t=e.labels,r=e.tab,o=e.handleChange,c=e.variant,l=R();return n.a.createElement(s.a,{borderBottom:1,className:"primary"===a?l.container:l.noBorder},n.a.createElement(O.a,{elevation:0,className:l.appBar,position:"static"},n.a.createElement(w.a,{variant:c,indicatorColor:"primary",value:r,onChange:o,"aria-label":"simple tabs example"},n.a.createElement(k,Object.assign({disableRipple:!0,label:t[0]},B(0))),n.a.createElement(k,Object.assign({disableRipple:!0,label:t[1]},B(1))))))},N=t(58),z=function(e){var a=e.children,t=e.value,r=e.index,o=Object(N.a)(e,["children","value","index"]);return n.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},o),t===r&&n.a.createElement(s.a,null,n.a.createElement(E.a,null,a)))},F=t(129),I="0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",L=Object(v.a)((function(e){return{root:{color:e.palette.primary.main,height:2,padding:"15px 0"},thumb:{height:28,width:28,backgroundColor:"#fff",boxShadow:I,marginTop:-14,marginLeft:-14,"&:focus, &:hover, &$active":{boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)","@media (hover: none)":{boxShadow:I}}},active:{},valueLabel:{left:"calc(-50% + 12px)",top:-22,"& *":{background:"transparent",color:"#000"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"#bfbfbf"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"currentColor"}}}))(F.a),M=function(e){var a=Math.floor(e/12),t=e%12,r="";return 1===a?r=r.concat("1 ano"):a>1&&(r=r.concat("".concat(a," anos"))),0!==a&&0!==t&&(r=r.concat(" e ")),1===t?r=r.concat("1 m\xeas"):t>1&&(r=r.concat("".concat(t," meses"))),r},A=function(e){var a=e.min,t=e.max,r=e.onChange,o=e.step,c=e.type,l=e.value;return n.a.createElement(s.a,{mt:2,ml:2,mr:2},n.a.createElement(E.a,{color:"primary",variant:"subtitle2"},function(e,a){switch(a){case"currency":return Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e);case"time":return M(e);default:return}}(l,c)),n.a.createElement(L,{"aria-label":"ios slider",max:t,min:a,step:o,onChange:r,defaultValue:1}))},T=Object(p.a)((function(e){return{select:{icon:{color:e.palette.primary.main,paddingRight:40}},root:{flexGrow:1,backgroundColor:e.palette.background.paper}}})),Q=function(){var e=T(),a=Object(r.useState)(0),t=Object(u.a)(a,2),o=t[0],c=t[1],l=Object(r.useState)(0),i=Object(u.a)(l,2),p=i[0],d=i[1],v=Object(r.useState)("Comprar um celular"),x=Object(u.a)(v,2),y=x[0],C=x[1],O=Object(r.useState)(100),w=Object(u.a)(O,2),S=w[0],k=w[1],B=Object(r.useState)(1),R=Object(u.a)(B,2),N=R[0],F=R[1];return n.a.createElement(b.a,{maxWidth:!1},n.a.createElement(s.a,{p:3,textAlign:"center"},n.a.createElement(E.a,{color:"primary",variant:"h5"},"Simule e planeje seus objetivos:")),n.a.createElement(W,{borderColor:"primary",labels:["Tenho objetivo","S\xf3 guardar"],tab:o,handleChange:function(e,a){c(a)},variant:"fullWidth"}),n.a.createElement(z,{value:o,index:0},n.a.createElement(s.a,{pt:3},n.a.createElement(g.a,{className:e.formControl,variant:"filled",fullWidth:!0},n.a.createElement(j,{value:y,onChange:function(e,a){C(a)},displayEmpty:!0,classes:{icon:e.select.icon},inputProps:{"aria-label":"Without label"},IconComponent:h.a},n.a.createElement(f.a,{className:e.menuItem,value:"Comprar um celular"},"Comprar um celular"),n.a.createElement(f.a,{value:"Fazer uma viagem"},"Fazer uma viagem"),n.a.createElement(f.a,{value:"Comprar carro ou moto"},"Comprar carro ou moro"),n.a.createElement(f.a,{value:"Outro"},"Outro"))),n.a.createElement(m.a,{container:!0},n.a.createElement(m.a,{item:!0,md:6,xs:12},n.a.createElement(s.a,{textAlign:"center",mt:3},n.a.createElement(E.a,{color:"primary",variant:"subtitle2"},"Quanto custa?")),n.a.createElement(A,{onChange:function(e,a){k(a)},min:100,max:1e6,step:100,type:"currency",value:S})),n.a.createElement(m.a,{item:!0,md:6,xs:12},n.a.createElement(s.a,{textAlign:"center",mt:3},n.a.createElement(E.a,{color:"primary",variant:"subtitle2"},"Quanto tempo?")),n.a.createElement(A,{onChange:function(e,a){F(a)},min:1,max:60,type:"time",value:N}))),n.a.createElement(s.a,{mt:2},n.a.createElement(W,{labels:["Semanal","Mensal"],handleChange:function(e,a){d(a)},tab:p}),n.a.createElement(z,{value:p,index:0},n.a.createElement(s.a,{pt:3},n.a.createElement(E.a,{variant:"h5"},"Voc\xea precisa guardar ",Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(S/N/4)," por semana"))),n.a.createElement(z,{value:p,index:1},n.a.createElement(s.a,{pt:3},n.a.createElement(E.a,{variant:"h5"},"Voc\xea precisa guardar ",Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(S/((Math.pow(1.0225,N)-1)/.0225))," por m\xeas")))))),n.a.createElement(z,{value:o,index:1},n.a.createElement(E.a,null,"Qual a frequ\xeancia para guardar?")))},V=Object(l.a)({palette:{primary:{main:"#1BD760"}},typography:{fontFamily:"Montserrat",h5:{fontSize:24,fontWeight:600},subtitle2:{fontSize:18,fontWeight:600}}}),J=function(){return n.a.createElement(i.a,{theme:V},n.a.createElement(m.a,{container:!0},n.a.createElement(m.a,{item:!0,md:6,xs:12},n.a.createElement(Q,null)),n.a.createElement(m.a,{item:!0,md:6,xs:12},n.a.createElement("img",{style:{width:600},src:"https://i.insider.com/5c54bdf6d7ab6720e673830e?width=1300&format=jpeg&auto=webp"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.8ee8b3e9.chunk.js.map