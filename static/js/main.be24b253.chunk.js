(this["webpackJsonpgoit-react-hw-07-phonebook-02"]=this["webpackJsonpgoit-react-hw-07-phonebook-02"]||[]).push([[0],{42:function(t,e,n){},43:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"fetchContacts",(function(){return x})),n.d(c,"fetchAddContact",(function(){return y})),n.d(c,"fetchDeleteContact",(function(){return S}));var r={};n.r(r),n.d(r,"fetchContact",(function(){return q})),n.d(r,"addContact",(function(){return w})),n.d(r,"deleteContact",(function(){return k})),n.d(r,"filterContact",(function(){return R}));var a={};n.r(a),n.d(a,"getContacts",(function(){return A})),n.d(a,"getFilter",(function(){return F})),n.d(a,"getLoader",(function(){return L}));var o={};n.r(o),n.d(o,"fetchContactRequest",(function(){return D})),n.d(o,"fetchContactSuccess",(function(){return J})),n.d(o,"fetchContactError",(function(){return M})),n.d(o,"addContactRequest",(function(){return Z})),n.d(o,"addContactSuccess",(function(){return B})),n.d(o,"addContactError",(function(){return N})),n.d(o,"deleteContactRequest",(function(){return T})),n.d(o,"deleteContactSuccess",(function(){return I})),n.d(o,"deleteContactError",(function(){return P})),n.d(o,"filterContactRequest",(function(){return $})),n.d(o,"filterContactSuccess",(function(){return G})),n.d(o,"filterContactError",(function(){return H}));var u=n(0),s=n.n(u),i=n(13),d=n.n(i),f=n(5),b=(n(41),n(42),n(43),n(1));function l(t){var e=t.title,n=t.children;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:e}),n]})}var j=n(6),O=n.n(j),C=n(8),h=n(16),p=n.n(h),v="https://6196d384af46280017e7e2d4.mockapi.io/contacts";function x(){return m.apply(this,arguments)}function m(){return(m=Object(C.a)(O.a.mark((function t(){var e,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("".concat(v));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return g.apply(this,arguments)}function g(){return(g=Object(C.a)(O.a.mark((function t(e){var n,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post("".concat(v),e);case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(t){return E.apply(this,arguments)}function E(){return(E=Object(C.a)(O.a.mark((function t(e){var n,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.delete("".concat(v,"/").concat(e));case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var q=function(){return function(){var t=Object(C.a)(O.a.mark((function t(e){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(o.fetchContactRequest()),t.prev=1,t.next=4,c.fetchContacts();case 4:n=t.sent,e(o.fetchContactSuccess(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(o.fetchContactError(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},w=function(t){return function(){var e=Object(C.a)(O.a.mark((function e(n){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(o.addContactRequest()),e.prev=1,e.next=4,c.fetchAddContact(t);case 4:r=e.sent,n(o.addContactSuccess(r)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(o.addContactError(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},k=function(t){return function(){var e=Object(C.a)(O.a.mark((function e(n){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("id: ",t),n(o.deleteContactRequest()),e.prev=2,e.next=5,c.fetchDeleteContact(t);case 5:r=e.sent,console.log("data in Del :",r),n(o.deleteContactSuccess(t)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),n(o.deleteContactError(e.t0));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},R=function(t){return function(e){e(o.filterContactRequest());try{e(o.filterContactSuccess(t))}catch(n){e(o.filterContactError(n))}}},A=function(t){return t.contacts},F=function(t){return t.filter},L=function(t){return t.loading},z=n(3),D=Object(z.b)("contacts/fetchContactRequest"),J=Object(z.b)("contacts/fetchContactSuccess"),M=Object(z.b)("contacts/fetchContactError"),Z=Object(z.b)("contacts/addContactRequest"),B=Object(z.b)("contacts/addContactSuccess"),N=Object(z.b)("contacts/addContactError"),T=Object(z.b)("contacts/deleteContactRequest"),I=Object(z.b)("contacts/deleteContactSuccess"),P=Object(z.b)("contacts/deleteContactError"),$=Object(z.b)("contacts/filterContactRequest"),G=Object(z.b)("contacts/filterContactSuccess"),H=Object(z.b)("contacts/filterContactError");function K(t){var e=t.id,n=t.name,c=t.number,a=Object(f.b)();return Object(b.jsxs)("li",{children:[Object(b.jsxs)("span",{children:[n,":"]}),Object(b.jsx)("span",{children:c}),Object(b.jsx)("button",{type:"button",id:e,onClick:function(){!function(t){a(r.deleteContact(t))}(e)},children:"Delete"})]})}function Q(){var t=Object(f.c)(a.getContacts),e=Object(f.c)(a.getFilter),n=Object(f.c)(a.getLoader),c=Object(f.b)();Object(u.useEffect)((function(){return c(r.fetchContact())}),[c]);var o=Object(u.useMemo)((function(){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}),[e,t]);return Object(b.jsxs)(b.Fragment,{children:[n&&Object(b.jsx)("h1",{children:"Loading..."}),Object(b.jsx)("ul",{children:!n&&o.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(b.jsx)(K,{id:e,name:n,number:c},e)}))}),0===o.length&&!n&&Object(b.jsx)("h1",{children:"There are no contacts in phonebook!"})]})}var U=n(19),V=n(66);function W(){var t=Object(f.c)(A),e=Object(f.b)(),n=Object(u.useState)(""),c=Object(U.a)(n,2),a=c[0],o=c[1],s=Object(u.useState)(""),i=Object(U.a)(s,2),d=i[0],l=i[1];Object(u.useEffect)((function(){return e(r.fetchContact())}),[e]);var j=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":l(c);break;default:return}},O=function(n){var c=n.name.toLowerCase();t.find((function(t){return t.name.toLowerCase()===c}))?alert("".concat(n.name," is already in contacts")):e(r.addContact(n))},C=Object(V.a)(),h=Object(V.a)();return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),O({name:a,number:d}),o(""),l("")},children:[Object(b.jsx)("label",{htmlFor:C,children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:a,id:C,onChange:j}),Object(b.jsx)("label",{htmlFor:h,children:"Number"}),Object(b.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:d,id:h,onChange:j}),Object(b.jsx)("button",{type:"submit",children:"Add contact"})]})}function X(){var t=Object(f.c)(a.getFilter),e=Object(f.b)(),n=Object(u.useCallback)((function(t){e(r.filterContact(t.target.value))}),[e]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:Object(V.a)(),children:"Find contacts by name"}),Object(b.jsx)("input",{type:"text",value:t,id:Object(V.a)(),onChange:n})]})}function Y(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(l,{title:"Phonebook",children:Object(b.jsx)(W,{})}),Object(b.jsxs)(l,{title:"Contacts",children:[Object(b.jsx)(X,{}),Object(b.jsx)(Q,{})]})]})}var _,tt,et,nt=n(15),ct=n(2),rt=n(4),at=Object(z.c)([],(_={},Object(ct.a)(_,o.fetchContactSuccess,(function(t,e){return e.payload})),Object(ct.a)(_,o.addContactSuccess,(function(t,e){return[].concat(Object(nt.a)(t),[e.payload])})),Object(ct.a)(_,o.deleteContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),_)),ot=Object(z.c)("",Object(ct.a)({},o.filterContactSuccess,(function(t,e){return e.payload}))),ut=Object(z.c)(!1,(tt={},Object(ct.a)(tt,o.fetchContactRequest,(function(){return!0})),Object(ct.a)(tt,o.fetchContactSuccess,(function(){return!1})),Object(ct.a)(tt,o.fetchContactError,(function(){return!1})),Object(ct.a)(tt,o.addContactRequest,(function(){return!0})),Object(ct.a)(tt,o.addContactSuccess,(function(){return!1})),Object(ct.a)(tt,o.addContactError,(function(){return!1})),Object(ct.a)(tt,o.deleteContactRequest,(function(){return!0})),Object(ct.a)(tt,o.deleteContactSuccess,(function(){return!1})),Object(ct.a)(tt,o.deleteContactError,(function(){return!1})),Object(ct.a)(tt,o.filterContactRequest,(function(){return!0})),Object(ct.a)(tt,o.filterContactSuccess,(function(){return!1})),Object(ct.a)(tt,o.filterContactError,(function(){return!1})),tt)),st=Object(z.c)(null,(et={},Object(ct.a)(et,o.fetchContactError,(function(t,e){return e.payload})),Object(ct.a)(et,o.fetchContactRequest,(function(){return null})),Object(ct.a)(et,o.addContactError,(function(t,e){return e.payload})),Object(ct.a)(et,o.addContactRequest,(function(){return null})),Object(ct.a)(et,o.deleteContactError,(function(t,e){return e.payload})),Object(ct.a)(et,o.deleteContactRequest,(function(){return null})),Object(ct.a)(et,o.filterContactError,(function(t,e){return e.payload})),Object(ct.a)(et,o.filterContactRequest,(function(){return null})),et)),it=Object(rt.b)({contacts:at,filter:ot,loading:ut,error:st}),dt=n(9),ft=n(29),bt=n.n(ft),lt=[].concat(Object(nt.a)(Object(z.d)({serializableCheck:{ignoredActions:[dt.a,dt.f,dt.b,dt.c,dt.d,dt.e]}})),[bt.a]),jt=Object(z.a)({reducer:it,middleware:lt,devTools:!1});d.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(f.a,{store:jt,children:Object(b.jsx)(Y,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.be24b253.chunk.js.map