(this.webpackJsonphomework14=this.webpackJsonphomework14||[]).push([[0],{26:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),s=n.n(r),a=n(14),l=n.n(a),o=(n(26),n(5)),i=n(18),h=n(3),j=n(15),u=n(16),b=n(20),d=n(19),m=n(17),p=n.n(m),O=function(){return p.a.get("https://randomuser.me/api/?results=200&nat=us")};var x=function(e){return Object(c.jsx)("form",{children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(c.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search For an Employee",id:"search"}),Object(c.jsx)("br",{})]})})};var f=function(e){return Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{}),Object(c.jsx)("th",{onClick:function(){return e.employeeArray()},children:"Name"}),Object(c.jsx)("th",{children:"Cell Number: "}),Object(c.jsx)("th",{children:"Email: "}),Object(c.jsx)("th",{children:"Location: "})]})}),Object(c.jsx)("tbody",{className:"list-group",children:e.employees.map((function(t){var n=t.name,r=t.cell,s=t.email,a=t.login,l=t.picture,o=t.location;if(n.first.includes(e.search))return Object(c.jsxs)("tr",{className:"list-group-item",children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{src:l.thumbnail,alt:""})}),Object(c.jsxs)("td",{children:[n.first," ",n.last]}),Object(c.jsx)("td",{children:s}),Object(c.jsx)("td",{children:r}),Object(c.jsxs)("td",{children:[o.city,", ",o.state]})]},a.uuid)}))})]})},y=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],search:""},e.searchEmployee=function(){O().then((function(t){return e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){console.log(t.target);var n=t.target.name,c=t.target.value;e.setState(Object(h.a)({},n,c))},e.employeeArray=function(){var t=Object(i.a)(e.state.employees);e.setState(Object(o.a)(Object(o.a)({},e.state),{},{employees:t}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.searchEmployee()}},{key:"render",value:function(){return console.log(this.state.employees),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"List of Employees"}),Object(c.jsx)("h3",{children:"To search for an employee, enter their name below:"}),Object(c.jsx)(x,{search:this.state.search,handleInputChange:this.handleInputChange}),Object(c.jsx)(f,{employees:this.state.employees,search:this.state.search,employeeArray:this.employeeArray})]})}}]),n}(r.Component);var g=function(){return Object(c.jsx)(y,{})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};l.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),v()}},[[44,1,2]]]);
//# sourceMappingURL=main.3286699a.chunk.js.map