(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{176:function(e,t,n){},211:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n(9),o=n.n(r),s=n(10),i=n(24),l=n(85),u=n(6),j="[ui] Open modal",d="[ui] Close modal",b="[event] Set Active",m="[event] Logout event",O="[event] Add new",f="[event] Clear active event",v="[event] Event updated",h="[event] Event deleted",p="[event] Events loaded",x="[auth] Finish checking login state",g="[auth] Login",y="[auth] Logout",N={checking:!0},w=n(63),E={events:[],activeEvent:null},k={modalOpen:!1},S=Object(i.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!0});case d:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:t.payload});case O:return Object(u.a)(Object(u.a)({},e),{},{events:[].concat(Object(w.a)(e.events),[t.payload])});case f:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:null});case v:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case h:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case p:return Object(u.a)(Object(u.a)({},e),{},{events:Object(w.a)(t.payload)});case m:return Object(u.a)({},E);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.payload),{},{checking:!1});case x:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case y:return{checking:!1};default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,T=Object(i.e)(S,C(Object(i.a)(l.a))),D=n(39),P=n(11),A=n(20),I=n(27),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(A.a)(t,2),a=n[0],r=n[1],o=function(){r(e)},s=function(e){var t=e.target;r(Object(u.a)(Object(u.a)({},a),{},Object(I.a)({},t.name,t.value)))};return[a,s,o]},L=n(13),R=n.n(L),q=n(23),G=n(19),M=n.n(G),F="https://mern-calendarapp-blas.herokuapp.com/api/",H=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(F,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},V=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(F,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)})},B=n(17),J=n.n(B),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{end:J()(e.end).toDate(),start:J()(e.start).toDate()})}))},X=function(e){return{type:O,payload:e}},z=function(e){return{type:b,payload:e}},K=function(){return{type:f}},Q=function(e){return{type:v,payload:e}},W=function(){return{type:h}},Y=function(e){return{type:p,payload:e}},Z=function(){return{type:x}},$=function(e){return{type:g,payload:e}},ee=function(){return function(e){localStorage.clear(),e({type:m}),e(te())}},te=function(){return{type:y}},ne=n(41),ae=n.n(ne),ce=function(e){M.a.fire({icon:"error",title:"Error",text:e,showCloseButton:!0,showCancelButton:!1,focusConfirm:!1})},re=(n(176),function(){var e=Object(s.b)(),t=_({lEmail:"alejandro@outlook.com",lPassword:"123456"}),n=Object(A.a)(t,2),c=n[0],r=n[1],o=c.lEmail,i=c.lPassword,l=_({rName:"Hector Alejandro",rEmail:"hectoralejandro@outlook.com",rPassword1:"123456",rPassword2:"123456"}),u=Object(A.a)(l,2),j=u[0],d=u[1],b=j.rName,m=j.rEmail,O=j.rPassword1,f=j.rPassword2;return Object(a.jsx)("div",{className:"container login-container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(a.jsx)("h3",{children:"Ingreso"}),Object(a.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),n=o,a=i,(ae.a.isEmail(n)?!(a.length<5):(console.log("Email is not valid"),0))&&e(function(e,t){return function(){var n=Object(q.a)(R.a.mark((function n(a){var c,r;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,H("auth",{email:e,password:t},"POST");case 2:return c=n.sent,n.next=5,c.json();case 5:(r=n.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),a($({uid:r.uid,name:r.name}))):M.a.fire("Error",r.msg,"error");case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(o,i))},children:[Object(a.jsx)("div",{className:"mb-3",children:Object(a.jsx)("input",{className:"form-control",name:"lEmail",required:!0,onChange:r,placeholder:"Correo",type:"email",value:o})}),Object(a.jsx)("div",{className:"mb-3",children:Object(a.jsx)("input",{className:"form-control",name:"lPassword",required:!0,onChange:r,placeholder:"Contrase\xf1a",type:"password",value:i})}),Object(a.jsx)("div",{className:"mb-3",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(a.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(a.jsx)("h3",{children:"Registro"}),Object(a.jsxs)("form",{onSubmit:function(t){var n,a,c;t.preventDefault(),n=m,a=O,c=f,(0===b.trim().length?(ce("Name is required"),0):ae.a.isEmail(n)?!(a!==c||a.length<5)||(ce("Password should be at least 6 characters and match each other"),0):(ce("Email is not valid"),0))&&e(function(e,t,n){return function(){var a=Object(q.a)(R.a.mark((function a(c){var r,o;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,H("auth/new",{email:e,password:t,name:n},"POST");case 2:return r=a.sent,a.next=5,r.json();case 5:(o=a.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),c($({uid:o.uid,name:o.name}))):M.a.fire("Error",o.msg,"error");case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(b,m,O))},children:[Object(a.jsx)("div",{className:"mb-3",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",onChange:d,value:b})}),Object(a.jsx)("div",{className:"mb-3",children:Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",onChange:d,value:m})}),Object(a.jsx)("div",{className:"mb-3",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",onChange:d,value:O})}),Object(a.jsx)("div",{className:"mb-3",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",onChange:d,value:f})}),Object(a.jsx)("div",{className:"mb-3",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})}),oe=n(62),se=function(){return{type:j}},ie=function(){return{type:d}},le=function(){var e=Object(s.b)();return Object(a.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(K()),e(se())},children:Object(a.jsx)("i",{className:"fas fa-plus"})})},ue=function(e){var t=e.event,n=t.title,c=t.user;return Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:n}),Object(a.jsxs)("span",{children:[" - ",c.name]})]})},je=n(57),de=n.n(je),be=n(59),me=n.n(be),Oe={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};n(211);me.a.setAppElement("#root");var fe=J()().minutes(0).seconds(0).add(1,"hours"),ve=fe.clone().add(1,"hours"),he={title:"",notes:"",start:fe.toDate(),end:ve.toDate()},pe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).modalOpen,n=Object(s.c)((function(e){return e.calendar})).activeEvent,r=Object(c.useState)(!0),o=Object(A.a)(r,2),i=o[0],l=o[1],j=Object(c.useState)(he),d=Object(A.a)(j,2),b=d[0],m=d[1],O=b.title,f=b.notes,v=b.start,h=b.end;Object(c.useEffect)((function(){m(n||he)}),[n,m]);var p=function(e){var t=e.target;m(Object(u.a)(Object(u.a)({},b),{},Object(I.a)({},t.name,t.value))),O.trim().length<6?l(!1):l(!0)};return Object(a.jsxs)(me.a,{isOpen:t,onRequestClose:function(){e(ie()),e(K()),m(he)},style:Oe,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(a.jsxs)("h1",{children:[" ",n?"Editar evento":"Nuevo evento"," "]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var a,c=J()(v),r=J()(h);if(c.isSameOrAfter(r))return M.a.fire({title:"Error",text:"La fecha fin debe de ser mayor a la fecha de inicio",icon:"error"});n?(e(function(e){return function(){var t=Object(q.a)(R.a.mark((function t(n){var a,c;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V("events/".concat(e.id),e,"PUT");case 3:return a=t.sent,t.next=6,a.json();case 6:(c=t.sent).ok?n(Q(e)):M.a.fire("Error",c.msg,"error"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(b)),e(K())):e((a=Object(u.a)(Object(u.a)({},b),{},{id:(new Date).getTime(),user:{_id:"12345",name:"Alejandro"}}),function(){var e=Object(q.a)(R.a.mark((function e(t,n){var c,r,o,s,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n().auth,r=c.uid,o=c.name,e.prev=1,e.next=4,V("events",a,"POST");case 4:return s=e.sent,e.next=7,s.json();case 7:i=e.sent,console.log(i),i.ok&&(a.id=i.evento.id,a.user={_id:r,name:o},console.log(a),t(X(a))),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}())),i&&e(ie())},children:[Object(a.jsxs)("div",{className:"mb-3",children:[Object(a.jsx)("label",{className:"form-label",children:"Fecha y hora inicio"}),Object(a.jsx)(de.a,{amPmAriaLabel:"Select AM/PM",className:"form-control",onChange:function(e){m(Object(u.a)(Object(u.a)({},b),{},{start:e}))},value:v})]}),Object(a.jsxs)("div",{className:"mb-3",children:[Object(a.jsx)("label",{className:"form-label",children:"Fecha y hora fin"}),Object(a.jsx)(de.a,{className:"form-control",minDate:v,onChange:function(e){m(Object(u.a)(Object(u.a)({},b),{},{end:e}))},value:h})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"mb-3",children:[Object(a.jsx)("label",{className:"form-label",children:"Titulo y notas"}),Object(a.jsx)("input",{autoComplete:"off",className:"form-control ".concat(!i&&"is-invalid"," "),name:"title",minLength:"6",onChange:p,placeholder:"T\xedtulo del evento",required:!0,type:"text",value:O}),Object(a.jsx)("div",{id:"titleHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(a.jsxs)("div",{className:"mb-3",children:[Object(a.jsx)("textarea",{className:"form-control",name:"notes",onChange:p,placeholder:"Notas",required:!0,rows:"5",type:"text",value:f}),Object(a.jsx)("div",{id:"notesHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(a.jsx)("div",{className:"d-grid gap-2",children:Object(a.jsxs)("button",{type:"submit",className:"btn btn-outline-primary",children:[Object(a.jsx)("i",{className:"far fa-save"}),Object(a.jsx)("span",{children:" Guardar"})]})})]})]})},xe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(a.jsx)("div",{className:"navbar navbar-dark bg-dark mb-4",children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)("span",{className:"navbar-brand mb-0 h1",children:t}),Object(a.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(ee())},children:[Object(a.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(a.jsx)("span",{className:"ms-1",children:"Salir"})]})]})})},ge={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},ye=(n(212),n(83),n(213),function(){var e=Object(s.b)();return Object(a.jsxs)("button",{className:"bnt btn-danger fab-danger",onClick:function(){e(function(){var e=Object(q.a)(R.a.mark((function e(t,n){var a,c,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,V("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?t(W()):M.a.fire("Error",r.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"fas fa-trash"}),Object(a.jsx)("span",{className:"ms-2",children:"Borrar evento"})]})});J.a.locale("es");var Ne=Object(oe.b)(J.a),we=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,o=Object(s.c)((function(e){return e.auth})).uid,i=Object(c.useState)(localStorage.getItem("lastView")||"month"),l=Object(A.a)(i,2),u=l[0],j=l[1];Object(c.useEffect)((function(){e(function(){var e=Object(q.a)(R.a.mark((function e(t){var n,a,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,console.log(a),c=U(a.events),t(Y(c)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(a.jsxs)("div",{className:"calendar-screen",children:[Object(a.jsx)(xe,{}),Object(a.jsx)(oe.a,{localizer:Ne,events:n,startAccessor:"start",endAccessor:"end",messages:ge,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:o===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(z(t)),e(se())},onSelectEvent:function(t){e(z(t))},onSelectSlot:function(t){e(z(null))},onView:function(e){j(e),localStorage.setItem("lastView",e)},selectable:!0,view:u,components:{event:ue}}),Object(a.jsx)(le,{}),r&&Object(a.jsx)(ye,{}),Object(a.jsx)(pe,{})]})},Ee=n(43),ke=function(e){var t=e.isAuthenticated,n=e.component,c=Object(Ee.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(P.b,Object(u.a)(Object(u.a)({},c),{},{component:function(e){return t?Object(a.jsx)(P.a,{to:"/"}):Object(a.jsx)(n,Object(u.a)({},e))}}))},Se=function(e){var t=e.isAuthenticated,n=e.component,c=Object(Ee.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(P.b,Object(u.a)(Object(u.a)({},c),{},{component:function(e){return t?Object(a.jsx)(n,Object(u.a)({},e)):Object(a.jsx)(P.a,{to:"/login"})}}))},Ce=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(c.useEffect)((function(){e(function(){var e=Object(q.a)(R.a.mark((function e(t){var n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t($({uid:a.uid,name:a.name}))):t(Z());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(a.jsx)("h5",{children:"Espere..."}):Object(a.jsx)(D.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(P.d,{children:[Object(a.jsx)(ke,{exact:!0,path:"/login",component:re,isAuthenticated:!!r}),Object(a.jsx)(Se,{exact:!0,path:"/",component:we,isAuthenticated:!!r}),Object(a.jsx)(P.a,{to:"/"})]})})})},Te=function(){return Object(a.jsx)(s.a,{store:T,children:Object(a.jsx)(Ce,{})})};o.a.render(Object(a.jsx)(Te,{}),document.getElementById("root"))},83:function(e,t,n){}},[[215,1,2]]]);
//# sourceMappingURL=main.c376e999.chunk.js.map