"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[728],{728:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var r=t(791),a=t(942),o=t(413),s=t(439),i=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&t[e];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n},c="Form_form__v9Auz",l="Form_label__hinnL",u="Form_input__VeVG3",m="Form_submit__cVibs",_=function(e){return e.contacts},h=function(e){var n=e.contacts,t=e.filter,r=n.items,a=n.isLoading,o=n.error;if(!t)return n;var s=t.toLowerCase();return{items:r.filter((function(e){var n=e.name,t=e.phone,r=n.toLowerCase();return t.toLowerCase().includes(s)||r.includes(s)})),isLoading:a,error:o}},f=t(420),d=t(943),p=t(184),x={name:"",phone:""},j=function(){var e=(0,r.useState)((0,o.Z)({},x)),n=(0,s.Z)(e,2),t=n[0],h=n[1],j=(0,f.v9)(_).items,v=(0,f.I0)(),C=function(e){var n=e.target,r=n.name,s=n.value;h((0,o.Z)((0,o.Z)({},t),{},(0,a.Z)({},r,s)))},N=function(e){if(function(e){var n=e.name,t=e.phone,r=n.toLowerCase(),a=t.toLowerCase(),o=j.find((function(e){var n=e.name.toLowerCase(),t=e.phone.toLowerCase();return n===r||t===a}));return Boolean(o)}(e))return alert("Book with ".concat(e.phone," and ").concat(e.name," already in list"));v((0,d.uK)(e)),b()},b=function(){h({name:"",phone:""})},L=i(),g=i();return(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N((0,o.Z)({},t))},className:c,children:[(0,p.jsxs)("label",{htmlFor:L,className:l,children:["Name",(0,p.jsx)("input",{className:u,type:"text",name:"name",value:t.name,onChange:C,id:L,required:!0})]}),(0,p.jsxs)("label",{htmlFor:g,className:l,children:["Number",(0,p.jsx)("input",{className:u,type:"tel",name:"phone",value:t.phone,onChange:C,id:g,required:!0})]}),(0,p.jsx)("button",{type:"submit",className:m,children:"Add Contact"})]})},v="ContactList_list__JFruW",C="ContactList_item__+lAjJ",N="ContactList_delete__PvS9Z",b=function(){var e=(0,f.v9)(h),n=e.items,t=e.isLoading,a=e.error,o=(0,f.I0)();(0,r.useEffect)((function(){o((0,d.yF)())}));return(0,p.jsxs)("ul",{className:v,children:[a&&(0,p.jsx)("p",{children:a}),t&&(0,p.jsx)("p",{children:"...Loading"}),Boolean(n.length)&&n.map((function(e){var n=e.name,t=e.id,r=e.phone;return(0,p.jsxs)("li",{className:C,children:[n,": ",r,(0,p.jsx)("button",{onClick:function(){return function(e){o((0,d.GK)(e))}(t)},className:N,children:"Delete"})]},t)}))]})},L="Filter_form__ZUxlI",g="Filter_filterLabel__-02Nb",w="Filter_filterInput__fgy9k",F=t(653),k=function(){var e=(0,f.I0)();return(0,p.jsx)("form",{className:L,children:(0,p.jsxs)("label",{className:g,children:["Filter",(0,p.jsx)("input",{type:"text",onChange:function(n){var t=n.target;return e((0,F.T)(t.value))},className:w})]})})},y="Contact_section__xMmp-",Z="Contact_titleContacts__OjBT6",I="Contact_title__oR72+",S=function(){return(0,p.jsxs)("section",{className:y,children:[(0,p.jsx)("h1",{className:I,children:"Phonebook"}),(0,p.jsx)(j,{}),(0,p.jsx)(k,{}),(0,p.jsx)("h2",{className:Z,children:" Contacts"}),(0,p.jsx)(b,{})]})},A=t(689),B=function(){return(0,p.jsxs)("div",{children:[(0,p.jsx)("section",{children:(0,p.jsx)(S,{})}),(0,p.jsx)(A.j3,{})]})}}}]);
//# sourceMappingURL=728.e0a04d63.chunk.js.map