"use strict";(self.webpackChunkrenderizacao=self.webpackChunkrenderizacao||[]).push([[960],{399:(e,t,a)=>{a.d(t,{db:()=>c});var n=a(64),o=a(472),s=a(729);const r=(0,n.Wp)({apiKey:"AIzaSyA5ExF47OW0xNItTmLtOFqdhRamFkDrk58",authDomain:"app-doacoes-faf94.firebaseapp.com",projectId:"app-doacoes-faf94",storageBucket:"app-doacoes-faf94.appspot.com",messagingSenderId:"174195501989",appId:"1:174195501989:web:c02c6acc3ffa3b44e7564c"}),c=(0,o.aU)(r);(0,s.xI)(r)},960:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(43),o=a(900),s=a(579);const r=function(e){let{mensagem:t,tipoMensagem:a}=e;return(0,s.jsx)("div",{className:a,children:t})};var c=a(399),i=a(472);const u=function(e){let{setCarregando:t,setSucesso:a}=e;const[r,u]=(0,n.useState)(""),[d,l]=(0,n.useState)(""),[m,p]=(0,n.useState)(""),f=(0,o.Zp)();return(0,s.jsxs)("form",{onSubmit:async function(e){e.preventDefault(),t(!0);try{await(0,i.gS)((0,i.rJ)(c.db,"eventos"),{nome:r,descricao:d,meta:Number(m),valor_arrecadado:0}),u(""),l(""),p(""),a(!0),setTimeout((()=>{a(!1),f("/")}),3e3)}catch(n){console.log("Erro ao adicionar evento ",n)}finally{t(!1)}},style:{display:"flex",flexDirection:"column",gap:"0.5em",justifyContent:"center",alignItems:"center"},children:[(0,s.jsx)("h2",{children:"Adicionar Evento de Doa\xe7\xe3o"}),(0,s.jsx)("input",{type:"text",name:"nome",value:r,placeholder:"Nome do evento",onChange:e=>u(e.target.value),required:!0}),(0,s.jsx)("input",{type:"text",name:"descricao",value:d,placeholder:"Descricao do evento",onChange:e=>l(e.target.value),required:!0}),(0,s.jsx)("input",{type:"number",name:"meta",value:m,placeholder:"Meta de arrecada\xe7\xe3o (KZ)",onChange:e=>{const t=e.target.value;Number(t)>=0&&Number(t)<=1e9&&p(t)},required:!0}),(0,s.jsx)("button",{type:"submit",children:"criar evento"})]})};const d=function(){const e=(0,o.Zp)(),[t,a]=(0,n.useState)(!1),[c,i]=(0,n.useState)(!1);return(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{onClick:()=>e("/"),style:{margin:"0.5em 0"},children:"listar eventos"}),t?(0,s.jsx)("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:"A criar evento..."}):c?(0,s.jsx)(r,{mensagem:"Evento Criado com sucesso!",tipoMensagem:"sucesso"}):(0,s.jsx)(u,{setCarregando:a,setSucesso:i})]})}}}]);
//# sourceMappingURL=960.d2e97e89.chunk.js.map