(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var c=t(2),i=t.n(c),r=t(9),a=t.n(r),o=(t(15),t(16),t(0)),u=function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"CV Builder"})})})},s=t(3),d=t(4),j=t(1),l=t(10),p=t(5),x=t.n(p),b={personalInfo:{firstName:"",lastName:"",title:"",email:"",phoneNumber:"",address:"",description:""},experience:[{id:x()(),position:"",company:"",city:"",details:"",from:"",to:""}],education:[{id:x()(),university:"",city:"",degree:"",study:"",from:"",to:""}]},h=function(e){var n=e.personalInfo,t=e.onChange;return Object(o.jsxs)("section",{title:"Personal Info",className:"personalInfo",children:[Object(o.jsx)("h3",{children:"Personal Information"}),Object(o.jsx)("input",{onChange:function(e){return t(e)},type:"text",name:"firstName",placeholder:"First Name",value:n.firstName}),Object(o.jsx)("input",{onChange:function(e){return t(e)},type:"text",name:"lastName",placeholder:"Last Name",value:n.lastName}),Object(o.jsx)("input",{onChange:function(e){return t(e)},type:"text",name:"title",placeholder:"Title",value:n.title}),Object(o.jsx)("input",{onChange:function(e){return t(e)},type:"text",name:"email",placeholder:"Email",value:n.email}),Object(o.jsx)("input",{onChange:function(e){return t(e)},type:"text",name:"phoneNumber",placeholder:"Phone Number",value:n.phoneNumber}),Object(o.jsx)("input",{onChange:function(e){return t(e)},type:"text",name:"address",placeholder:"Address",value:n.address}),Object(o.jsx)("textarea",{onChange:function(e){return t(e)},name:"description",placeholder:"Description",value:n.description})]})},O=function(e){var n=e.id,t=e.education,c=e.onChange,i=e.onDelete;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"Education"}),Object(o.jsx)("input",{onChange:function(e){return c(e,n)},type:"text",name:"university",placeholder:"University",value:t.university}),Object(o.jsx)("input",{onChange:function(e){return c(e,n)},type:"text",name:"city",placeholder:"City",value:t.city}),Object(o.jsx)("input",{onChange:function(e){return c(e,n)},type:"text",name:"degree",placeholder:"Degree",value:t.degree}),Object(o.jsx)("input",{onChange:function(e){return c(e,n)},type:"text",name:"study",placeholder:"Study",value:t.study}),Object(o.jsx)("input",{onChange:function(e){return c(e,n)},type:"text",name:"from",placeholder:"From",value:t.from}),Object(o.jsx)("input",{onChange:function(e){return c(e,n)},type:"text",name:"to",placeholder:"To",value:t.to}),Object(o.jsx)("button",{text:"Delete",onClick:function(){return i(n)},children:"Delete"})]})},m=function(e){var n=e.education,t=e.onChange,c=e.onAdd,i=e.onDelete,r=n.map((function(e){return Object(o.jsx)(O,{id:e.id,education:e,onChange:t,onDelete:i},e.id)}));return Object(o.jsxs)("div",{className:"education",children:[r,Object(o.jsx)("button",{text:"Add",onClick:c,children:"Add"})]})},f=function(e){var n=e.id,t=e.experience,c=e.onChange,i=e.onDelete;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"Experience"}),Object(o.jsx)("input",{onChange:function(e){return c(e,n)},type:"text",name:"company",placeholder:"Company",value:t.company}),Object(o.jsx)("input",{onChange:function(e){return c(e,n)},type:"text",name:"position",placeholder:"Position",value:t.position}),Object(o.jsx)("input",{onChange:function(e){return c(e,n)},type:"text",name:"city",placeholder:"City",value:t.city}),Object(o.jsx)("textarea",{onChange:function(e){return c(e,n)},type:"text",name:"details",placeholder:"Details",value:t.details}),Object(o.jsx)("input",{onChange:function(e){return c(e,n)},type:"text",name:"from",placeholder:"From",value:t.from}),Object(o.jsx)("input",{onChange:function(e){return c(e,n)},type:"text",name:"to",placeholder:"To",value:t.to}),Object(o.jsx)("button",{text:"Delete",onClick:function(){return i(n)},children:"Delete"})]})},v=function(e){var n=e.experienceInfo,t=e.onChange,c=e.onAdd,i=e.onDelete,r=n.map((function(e){return Object(o.jsx)(f,{id:e.id,experience:n,onChange:t,onDelete:i},e.id)}));return Object(o.jsxs)("div",{className:"experience",children:[r,Object(o.jsx)("button",{title:"Add",onClick:c,children:"Add"})]})},y=function(e){var n=e.cv,t=e.onChangePersonal,c=e.onChangeEducation,i=e.onAddEducation,r=e.onDeleteEducation,a=e.onChangeExperience,u=e.onAddExperience,s=e.onDeleteExperience;return Object(o.jsxs)("div",{className:"cvForm",children:[Object(o.jsx)(h,{personalInfo:n.personalInfo,onChange:t}),Object(o.jsx)(m,{education:n.education,onChange:c,onAdd:i,onDelete:r}),Object(o.jsx)(v,{experienceInfo:n.experience,onChange:a,onAdd:u,onDelete:s})]})},g=function(e){var n=e.educationItem;return Object(o.jsxs)("div",{className:"educationContainer",children:[Object(o.jsx)("h3",{children:n.university}),Object(o.jsx)("p",{children:n.city}),Object(o.jsx)("p",{children:n.degree}),Object(o.jsx)("p",{children:n.study}),Object(o.jsxs)("span",{children:[n.from," - ",n.to]})]})},C=function(e){var n=e.personal;e.education;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h2",{children:[n.firstName," ",n.lastName]}),Object(o.jsxs)("div",{id:"details",children:[Object(o.jsx)("h3",{children:n.title}),Object(o.jsx)("p",{children:n.description})]}),Object(o.jsxs)("div",{id:"contact",children:[Object(o.jsx)("h4",{children:"Contact"}),Object(o.jsx)("p",{children:n.phoneNumber}),Object(o.jsx)("p",{children:n.email}),Object(o.jsx)("p",{children:n.address})]})]})},N=function(e){var n=e.experience;return Object(o.jsxs)("div",{className:"workExperience",children:[Object(o.jsxs)("div",{className:"companyDetails",children:[Object(o.jsx)("h3",{children:n.company}),Object(o.jsx)("p",{children:n.position})]}),Object(o.jsx)("div",{className:"companyTimeline",children:Object(o.jsxs)("p",{children:[n.from," - ",n.to," | ",n.city]})}),Object(o.jsx)("p",{children:n.details})]})},D=function(e){var n=e.cv,t=n.education.map((function(e){return Object(o.jsx)(g,{educationItem:e},e.id)})),c=n.experience.map((function(e){return Object(o.jsx)(N,{experience:e},e.id)}));return Object(o.jsxs)("section",{id:"resume",children:[Object(o.jsxs)("section",{id:"sidebar",children:[Object(o.jsx)(C,{personal:n.personalInfo,education:n.education}),t]}),Object(o.jsx)("section",{id:"mainbar",children:Object(o.jsx)("div",{id:"experienceList",children:c})})]})},E=function(){var e=Object(c.useState)(b),n=Object(l.a)(e,2),t=n[0],i=n[1];return Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)(y,{cv:t,onChangePersonal:function(e){var n=e.target,t=n.name,c=n.value;i((function(e){return Object(j.a)(Object(j.a)({},e),{},{personalInfo:Object(j.a)(Object(j.a)({},e.personalInfo),{},Object(d.a)({},t,c))})}))},onChangeEducation:function(e,n){var t=e.target,c=t.name,r=t.value;i((function(e){var t=e.education.map((function(e){return e.id===n?Object(j.a)(Object(j.a)({},e),{},Object(d.a)({},c,r)):e}));return Object(j.a)(Object(j.a)({},e),{},{education:Object(s.a)(t)})}))},onAddEducation:function(){i((function(e){return Object(j.a)(Object(j.a)({},e),{},{education:[].concat(Object(s.a)(e.education),[{id:x()(),university:"",city:"",degree:"",study:"",from:"",to:""}])})}))},onDeleteEducation:function(e){i((function(n){var t=n.education.filter((function(n){return n.id!==e}));return Object(j.a)(Object(j.a)({},n),{},{education:Object(s.a)(t)})}))},onChangeExperience:function(e,n){var t=e.target,c=t.name,r=t.value;i((function(e){var t=e.experience.map((function(e){return e.id===n?Object(j.a)(Object(j.a)({},e),{},Object(d.a)({},c,r)):e}));return Object(j.a)(Object(j.a)({},e),{},{experience:Object(s.a)(t)})}))},onAddExperience:function(){i((function(e){return Object(j.a)(Object(j.a)({},e),{},{experience:[].concat(Object(s.a)(e.experience),[{id:x()(),position:"",company:"",city:"",details:"",from:"",to:""}])})}))},onDeleteExperience:function(e){i((function(n){var t=n.experience.filter((function(n){return n.id!==e}));return Object(j.a)(Object(j.a)({},n),{},{experience:Object(s.a)(t)})}))}}),Object(o.jsx)(D,{cv:t})]})},I=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{}),Object(o.jsx)(E,{})]})};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7879e5e7.chunk.js.map