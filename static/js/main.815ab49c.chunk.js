(this.webpackJsonphomework14=this.webpackJsonphomework14||[]).push([[0],{27:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(2),r=n.n(s),a=n(16),l=n.n(a),o=(n(27),n(3)),i=n(7),h=n(4),j=n(17),u=n(18),m=n(21),d=n(20),b=n(19),O=n.n(b),p=function(){return O.a.get("https://randomuser.me/api/?results=200&nat=us")};n(6);var f=function(e){return Object(c.jsx)("form",{children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(c.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search For an Employee",id:"search"}),Object(c.jsx)("br",{})]})})};var x=function(e){return Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{}),Object(c.jsx)("th",{onClick:function(){return e.employeeArray()},children:"Name"}),Object(c.jsx)("th",{children:"Email: "}),Object(c.jsx)("th",{children:"Cell: "}),Object(c.jsx)("th",{children:"Location: "})]})}),Object(c.jsx)("tbody",{className:"list-group",children:e.employees.map((function(t){var n=t.name,s=t.cell,r=t.email,a=t.login,l=t.picture,o=t.location;if(n.last.includes(e.search))return Object(c.jsxs)("tr",{className:"list-group-item",children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{src:l.medium,alt:""})}),Object(c.jsxs)("td",{children:[n.last,", ",n.first]}),Object(c.jsx)("td",{children:r}),Object(c.jsx)("td",{children:s}),Object(c.jsxs)("td",{children:[o.city,", ",o.state]})]},a.uuid)}))})]})},y=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={employees:[],search:"",sort:!1},e.searchEmployee=function(){p().then((function(t){return e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=t.target.name,c=t.target.value;e.setState(Object(h.a)({},n,c))},e.employeeArray=function(){if(!1===e.state.sort){var t=Object(i.a)(e.state.employees).sort((function(e,t){return e.name.last>t.name.last?1:-1}));e.setState(Object(o.a)(Object(o.a)({},e.state),{},{employees:t,sort:!0}))}else{var n=Object(i.a)(e.state.employees).sort((function(e,t){return e.name.last>t.name.last?-1:1}));e.setState(Object(o.a)(Object(o.a)({},e.state),{},{employees:n,sort:!1}))}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.searchEmployee()}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"List of Employees"}),Object(c.jsx)("h3",{children:"To search for an employee, enter their name below:"}),Object(c.jsx)("div",{className:"searchForm",children:Object(c.jsx)(f,{search:this.state.search,handleInputChange:this.handleInputChange})}),Object(c.jsx)("div",{className:"forms",children:Object(c.jsx)(x,{employees:this.state.employees,search:this.state.search,employeeArray:this.employeeArray})})]})}}]),n}(s.Component);var g=function(){return Object(c.jsx)(y,{})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),v()},6:function(e,t,n){}},[[45,1,2]]]);
//# sourceMappingURL=main.815ab49c.chunk.js.map