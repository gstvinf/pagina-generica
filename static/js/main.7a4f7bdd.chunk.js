(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,a,t){e.exports=t.p+"static/media/lugar-bonito.59815aeb.jpg"},35:function(e,a,t){e.exports=t(59)},40:function(e,a,t){},42:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),c=t(15),r=t.n(c),o=(t(40),t(10)),i=t(11),s=t(14),m=t(12),u=t(13),d=(t(42),t(74)),h=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Pagina 1 de teste"),n.a.createElement("h2",null,"Criada para validar componentes, pagina\xe7\xe3o, textos, entre outros..."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed metus sem. Donec quis tortor mattis, elementum nulla ac, congue arcu. Cras et lacus vehicula, maximus est ut, volutpat libero. Curabitur euismod justo at augue volutpat, eget aliquet sem rutrum. Suspendisse urna tellus, ullamcorper at viverra accumsan, maximus quis est. Proin non neque ac metus consectetur efficitur. Pellentesque semper risus id turpis ullamcorper, non vestibulum ligula fringilla. Donec tincidunt vehicula condimentum. Cras non interdum justo, eu tristique urna. Etiam sapien mauris, pharetra vitae laoreet non, blandit ac libero. Praesent malesuada tortor id urna ornare, sit amet lacinia urna placerat."),n.a.createElement("div",null))}}]),a}(l.Component),E=t(8),p=t(60),g=t(61),k=t(62),b=t(63),f=t(64),O=t(65),y=t(66),C=t(82),v=t(67),j=t(68),x=t(69),w=t(70),M=t(83),S=t(71),N=t(72),T=t(73),q=t(30),I=t(75),H=t(53),A=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).setErro=function(e){t.setState({erro:e})},t.validaLogin=function(e,a){var l="";if(""==e&&(l="O campo Login \xe9 obrigat\xf3rio"),""==a&&(l="O campo Senha \xe9 obrigat\xf3rio"),a.leng()<6&&(l=""),e.leng()<3&&(l="Usu\xe1rio muito curto"),""==e&&""==a)switch(a){case"":l=""}t.setErro(l)},t.state={isOpen:!1,modal:!1,erro:"Erro",fadeIn:!1},t.toggleModal=t.toggleModal.bind(Object(E.a)(Object(E.a)(t))),t.toggle=t.toggle.bind(Object(E.a)(Object(E.a)(t))),t.setErro=t.setErro.bind(Object(E.a)(Object(E.a)(t))),t.toggleFadeIn=t.toggleFadeIn.bind(Object(E.a)(Object(E.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"toggleModal",value:function(){this.setState({modal:!this.state.modal,fadeIn:!1})}},{key:"toggleFadeIn",value:function(){this.setState({fadeIn:!0})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(p.a,{color:"light",light:!0,expand:"md"},n.a.createElement(g.a,{href:"/"},"Teste de Componentes"),n.a.createElement(k.a,{onClick:this.toggle}),n.a.createElement(b.a,{isOpen:this.state.isOpen,navbar:!0},n.a.createElement(f.a,{className:"ml-auto",navbar:!0},n.a.createElement(O.a,null,n.a.createElement(y.a,{onClick:this.toggleModal},"Login")),n.a.createElement(O.a,null,n.a.createElement(y.a,{href:"https://github.com/gstvinf/pagina-generica",target:"_blank"},"GitHub")),n.a.createElement(C.a,{nav:!0,inNavbar:!0},n.a.createElement(v.a,{nav:!0,caret:!0},"Op."),n.a.createElement(j.a,{right:!0},n.a.createElement(x.a,null,"Give me a feedback"),n.a.createElement(x.a,null,"Star my GitHub"),n.a.createElement(x.a,{divider:!0}),n.a.createElement(x.a,{href:"https://github.com/gstvinf/pagina-generica",target:"_blank"},"Give me a coffe")))))),n.a.createElement(w.a,null,n.a.createElement(M.a,{isOpen:this.state.modal},n.a.createElement(S.a,{toggle:this.toggleModal},"Entrar"),n.a.createElement(N.a,null,n.a.createElement(T.a,{type:"text",name:"username",id:"username",placeholder:"Login"}),n.a.createElement(T.a,{type:"password",name:"password",id:"password",placeholder:"Senha"}),n.a.createElement(q.a,{in:this.state.fadeIn},n.a.createElement(d.a,{color:"danger"},this.state.erro))),n.a.createElement(I.a,null,n.a.createElement(H.a,{color:"primary",onClick:this.toggleFadeIn},"Entrar"),n.a.createElement(H.a,{color:"",onClick:this.toggleModal},"Cancelar")))))}}]),a}(l.Component),F=t(76),P=t(77),D=t(81),L=(t(54),t(78)),V=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(F.a,null,n.a.createElement("h2",null,"Text"),n.a.createElement(w.a,{row:!0},n.a.createElement(P.a,{for:"exampleEmail",sm:2},"Email"),n.a.createElement(L.a,{sm:10},n.a.createElement(T.a,{type:"email",name:"email",id:"exampleEmail",placeholder:"Voc\xea digita aqui seu email"}))),n.a.createElement(w.a,{row:!0},n.a.createElement(P.a,{for:"examplePassword",sm:2},"Password"),n.a.createElement(L.a,{sm:10},n.a.createElement(T.a,{type:"password",name:"password",id:"examplePassword",placeholder:"N\xe3o esque\xe7a sua senha"}))),n.a.createElement(w.a,{row:!0},n.a.createElement(P.a,{for:"exampleSelect",sm:2},"Onde voc\xea mora?"),n.a.createElement(L.a,{sm:10},n.a.createElement(T.a,{type:"select",name:"select",id:"exampleSelect"},n.a.createElement("option",null,"Mercury"),n.a.createElement("option",null,"Venus"),n.a.createElement("option",{selected:!0},"Earth"),n.a.createElement("option",null,"Mars"),n.a.createElement("option",null,"Jupiter"),n.a.createElement("option",null,"Saturn"),n.a.createElement("option",null,"Uranus"),n.a.createElement("option",null,"Neptune")))),n.a.createElement(w.a,{row:!0},n.a.createElement(P.a,{for:"exampleSelectMulti",sm:2},"Onde iremos morar?"),n.a.createElement(L.a,{sm:10},n.a.createElement(T.a,{type:"select",name:"selectMulti",id:"exampleSelectMulti",multiple:!0},n.a.createElement("option",null,"Mercury"),n.a.createElement("option",null,"Venus"),n.a.createElement("option",{selected:!0},"Earth"),n.a.createElement("option",{selected:!0},"Mars"),n.a.createElement("option",null,"Jupiter"),n.a.createElement("option",null,"Saturn"),n.a.createElement("option",null,"Uranus"),n.a.createElement("option",null,"Neptune")))),n.a.createElement(w.a,{row:!0},n.a.createElement(P.a,{for:"exampleText",sm:2},"Text Area"),n.a.createElement(L.a,{sm:10},n.a.createElement(T.a,{type:"textarea",name:"text",id:"exampleText"}))),n.a.createElement(w.a,{tag:"fieldset",row:!0},n.a.createElement("legend",{className:"col-form-label col-sm-2"},"Radio Buttons"),n.a.createElement(L.a,{sm:10},n.a.createElement(w.a,{check:!0},n.a.createElement(P.a,{check:!0},n.a.createElement(T.a,{type:"radio",name:"radio2"})," ","Option one is this and that\u2014be sure to include why it's great")),n.a.createElement(w.a,{check:!0},n.a.createElement(P.a,{check:!0},n.a.createElement(T.a,{type:"radio",name:"radio2"})," ","Option two can be something else and selecting it will deselect option one")),n.a.createElement(w.a,{check:!0,disabled:!0},n.a.createElement(P.a,{check:!0},n.a.createElement(T.a,{type:"radio",name:"radio2",disabled:!0})," ","Option three is disabled")))),n.a.createElement(w.a,{row:!0},n.a.createElement(P.a,{for:"checkbox2",sm:2},"Checkbox"),n.a.createElement(L.a,{sm:{size:10}},n.a.createElement(w.a,{check:!0},n.a.createElement(P.a,{check:!0},n.a.createElement(T.a,{type:"checkbox",id:"checkbox2"})," ","Check me out")))),n.a.createElement(w.a,{check:!0,row:!0},n.a.createElement(L.a,{sm:{size:10,offset:2}},n.a.createElement(H.a,null,"Valeeeu!"))))}}]),a}(l.Component),B=t(34),z=t.n(B),G=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={fadeIn:!1,fadeOut:!0,longClick:!1,doubleClick:!1,delay:!1,modal:!1,nestedModal:!1,closeAll:!1},t.clickCount=0,t.singleClickTimer="",t.toggleFadeIn=t.toggleFadeIn.bind(Object(E.a)(Object(E.a)(t))),t.toggleFadeOut=t.toggleFadeOut.bind(Object(E.a)(Object(E.a)(t))),t.doubleClickHandle=t.doubleClickHandle.bind(Object(E.a)(Object(E.a)(t))),t.longClickHandle=t.longClickHandle.bind(Object(E.a)(Object(E.a)(t))),t.delayClickHandle=t.delayClickHandle.bind(Object(E.a)(Object(E.a)(t))),t.toggleModal=t.toggleModal.bind(Object(E.a)(Object(E.a)(t))),t.toggleModalNested=t.toggleModalNested.bind(Object(E.a)(Object(E.a)(t))),t.toggleModalAll=t.toggleModalAll.bind(Object(E.a)(Object(E.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"toggleFadeIn",value:function(){this.setState({fadeIn:!this.state.fadeIn})}},{key:"toggleFadeOut",value:function(){this.setState({fadeOut:!this.state.fadeOut})}},{key:"doubleClickHandle",value:function(){this.clickCount++,1===this.clickCount?this.singleClickTimer=setTimeout(function(){this.clickCount=0}.bind(this),300):2===this.clickCount&&(clearTimeout(this.singleClickTimer),this.clickCount=0,this.setState({doubleClick:!this.state.doubleClick}))}},{key:"longClickHandle",value:function(){this.setState({longClick:!this.state.longClick})}},{key:"delayClickHandle",value:function(){var e=this;this.buttonPressTimer=setTimeout(function(){return e.setState({delay:!e.setState.delay})},2e3)}},{key:"toggleModal",value:function(){this.setState({modal:!this.state.modal})}},{key:"toggleModalNested",value:function(){this.setState({nestedModal:!this.state.nestedModal,closeAll:!1})}},{key:"toggleModalAll",value:function(){this.setState({nestedModal:!this.state.nestedModal,closeAll:!0,modal:!this.state.modal})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"Button"),n.a.createElement(w.a,null,n.a.createElement(w.a,null,n.a.createElement(H.a,{color:"primary",onClick:this.toggleFadeIn},"Click para verificar a mensagem"),n.a.createElement(q.a,{in:this.state.fadeIn},"Voc\xea clicou no bot\xe3o e aqui est\xe1 sua mensagem :)")),n.a.createElement(w.a,null,n.a.createElement(H.a,{color:"info",onClick:this.doubleClickHandle},"Click duas vezes "),n.a.createElement(q.a,{in:this.state.doubleClick},"Voc\xea clicou duas vezes para aparecer essa carinha (:")),n.a.createElement(w.a,null,n.a.createElement(H.a,{color:"success",onClick:this.longClickHandle},"Segure o bot\xe3o"),n.a.createElement(q.a,{in:this.state.longClick},"N\xe3o precisava segurar, s\xf3 clicar normal j\xe1 funciona. xD~")),n.a.createElement(w.a,null,n.a.createElement(H.a,{color:"warning",onClick:this.delayClickHandle},"Mensagem com delay"),n.a.createElement(q.a,{in:this.state.delay},"Demorou 2 segundos para aparecer essa mensagem ;D")),n.a.createElement(w.a,null,n.a.createElement(H.a,{color:"danger",onClick:this.toggleFadeOut},"Click para esconder a mensagem"),n.a.createElement(q.a,{in:this.state.fadeOut},"Essa mensagem deixar\xe1 de existir. ^^")),n.a.createElement(w.a,null,n.a.createElement(H.a,{color:"dark",onClick:this.toggleModal},"Bot\xe3o do Modal"),n.a.createElement(M.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:this.props.className},n.a.createElement(S.a,{toggle:this.toggleModal},"T\xedtulo do Modal"),n.a.createElement(N.a,null,"Esse \xe9 um texto gen\xe9rico que voc\xea pode escrever qualquer coisa aqui inclusive esse lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",n.a.createElement("br",null),n.a.createElement(H.a,{color:"success",onClick:this.toggleModalNested},"Quer ver um modal em um lugar bonito?"),n.a.createElement(M.a,{isOpen:this.state.nestedModal,toggle:this.toggleModalNested,onClosed:this.state.closeAll?this.toggle:void 0},n.a.createElement(S.a,null,"Outro t\xedtulo do modal"),n.a.createElement(N.a,null,"Nosssa, que lugar bonito.",n.a.createElement("img",{src:z.a})),n.a.createElement(I.a,null,n.a.createElement(H.a,{color:"primary",onClick:this.toggleModalNested},"Valeu")," ",n.a.createElement(H.a,{color:"secondary",onClick:this.toggleModalAll},"Pode fechar tudo")))),n.a.createElement(I.a,null,n.a.createElement(H.a,{color:"primary",onClick:this.toggleModal},"Tendi")," ",n.a.createElement(H.a,{color:"secondary",onClick:this.toggleModal},"Tendi n\xe3o"))))))}}]),a}(l.Component),J=t(79),U=t(80),W=t(56),R=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={check5:!1},t.changeHandle=t.changeHandle.bind(Object(E.a)(Object(E.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"changeHandle",value:function(){console.log(this.state.check5),this.setState(function(e){return{check5:!e.check5}}),console.log(this.state.check5)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"Checkbox"),n.a.createElement(w.a,{check:!0},n.a.createElement(T.a,{type:"checkbox",name:"check",id:"check1"}),n.a.createElement(P.a,{for:"check1",check:!0},"Is not checked")),n.a.createElement(w.a,{check:!0},n.a.createElement(T.a,{type:"checkbox",defaultChecked:!0,name:"check",id:"check2"}),n.a.createElement(P.a,{for:"check2",check:!0},"Default Checked")),n.a.createElement(w.a,{check:!0},n.a.createElement(T.a,{type:"checkbox",disabled:!0,name:"check",id:"check3"}),n.a.createElement(P.a,{for:"check3",check:!0},"Disabled :D ")),n.a.createElement(w.a,{check:!0},n.a.createElement(T.a,{type:"checkbox",disabled:!0,defaultChecked:!0,name:"check",id:"check4"}),n.a.createElement(P.a,{for:"check4",check:!0},"Checked and Disabled haha")),n.a.createElement(J.a,null,n.a.createElement(U.a,{addonType:"prepend"},n.a.createElement(W.a,null,n.a.createElement(T.a,{addon:!0,type:"checkbox",defaultChecked:this.state.check5,"aria-label":"Checkbox for following text input",name:"check",id:"check5"}))),n.a.createElement(T.a,{onChange:this.changeHandle,placeholder:"Try check it!"})))}}]),a}(l.Component),_=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(F.a,null,n.a.createElement(G,null),n.a.createElement(R,null),n.a.createElement(V,null),n.a.createElement(w.a,null,n.a.createElement(P.a,{for:"exampleEmail"},"Email"),n.a.createElement(T.a,{type:"email",name:"email",id:"exampleEmail",placeholder:"with a placeholder"})),n.a.createElement(w.a,null,n.a.createElement(P.a,{for:"examplePassword"},"Password"),n.a.createElement(T.a,{type:"password",name:"password",id:"examplePassword",placeholder:"password placeholder"})),n.a.createElement(w.a,null,n.a.createElement(P.a,{for:"exampleSelect"},"Select"),n.a.createElement(T.a,{type:"select",name:"select",id:"exampleSelect"},n.a.createElement("option",null,"1"),n.a.createElement("option",null,"2"),n.a.createElement("option",null,"3"),n.a.createElement("option",null,"4"),n.a.createElement("option",null,"5"))),n.a.createElement(w.a,null,n.a.createElement(P.a,{for:"exampleSelectMulti"},"Select Multiple"),n.a.createElement(T.a,{type:"select",name:"selectMulti",id:"exampleSelectMulti",multiple:!0},n.a.createElement("option",null,"1"),n.a.createElement("option",null,"2"),n.a.createElement("option",null,"3"),n.a.createElement("option",null,"4"),n.a.createElement("option",null,"5"))),n.a.createElement(w.a,null,n.a.createElement(P.a,{for:"exampleText"},"Text Area"),n.a.createElement(T.a,{type:"textarea",name:"text",id:"exampleText"})),n.a.createElement(w.a,null,n.a.createElement(P.a,{for:"exampleFile"},"File"),n.a.createElement(T.a,{type:"file",name:"file",id:"exampleFile"}),n.a.createElement(D.a,{color:"muted"},"This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.")),n.a.createElement(w.a,null,n.a.createElement("legend",null,"Radio Buttons"),n.a.createElement(w.a,{check:!0},n.a.createElement(P.a,{check:!0},n.a.createElement(T.a,{type:"radio",name:"radio1"})," ","Option one is this and that\u2014be sure to include why it's great")),n.a.createElement(w.a,{check:!0},n.a.createElement(P.a,{check:!0},n.a.createElement(T.a,{type:"radio",name:"radio1"})," ","Option two can be something else and selecting it will deselect option one")),n.a.createElement(w.a,{check:!0,disabled:!0},n.a.createElement(P.a,{check:!0},n.a.createElement(T.a,{type:"radio",name:"radio1",disabled:!0})," ","Option three is disabled"))),n.a.createElement(w.a,{tag:"check"},n.a.createElement(w.a,{check:!0},n.a.createElement(P.a,{check:!0},n.a.createElement(T.a,{type:"checkbox",checked:!0})," ","Check me out")),n.a.createElement(w.a,{check:!0},n.a.createElement(P.a,{check:!0},n.a.createElement(T.a,{type:"checkbox"})," ","Check me out")),n.a.createElement(w.a,{check:!0},n.a.createElement(P.a,{check:!0},n.a.createElement(T.a,{type:"checkbox",disabled:!0})," ","Check me out")),n.a.createElement(w.a,{check:!0},n.a.createElement(P.a,{check:!0},n.a.createElement(T.a,{type:"checkbox",checked:!0,disabled:!0})," ","Check me out"))),n.a.createElement(H.a,null,"Submit"))}}]),a}(l.Component),Q=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(A,null),n.a.createElement("div",{className:"Container"},n.a.createElement(_,null)),n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(h,null),n.a.createElement("p",null,"Edit ",n.a.createElement("code",null,"src/App.js")," and save to reload."),n.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),n.a.createElement("div",null,n.a.createElement(d.a,{color:"success"},n.a.createElement("h4",{className:"alert-heading"},"Well done!"),n.a.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),n.a.createElement("hr",null),n.a.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy.")))))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(57);r.a.render(n.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,1]]]);
//# sourceMappingURL=main.7a4f7bdd.chunk.js.map