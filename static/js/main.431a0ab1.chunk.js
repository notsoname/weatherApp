(this.webpackJsonpapppractice=this.webpackJsonpapppractice||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(13),r=n.n(s),i=n(3),o=(n(19),n(0));function l(e){var t=e.onSubmit,n=e.onChange,c=e.city;return Object(o.jsxs)("form",{onSubmit:t,className:"d-flex justify-content-between align-items-center",children:[Object(o.jsx)("input",{className:"form-control input",onChange:n,value:c}),Object(o.jsx)("button",{className:"btn btn-primary btnInput",children:"Get Weather"})]})}var j=n.p+"static/media/spinner.7f937069.svg",u=function(){return Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)("img",{src:j,alt:"spinner"})})};n(21);function d(e){var t=e.weather,n=e.loading,c=e.error;return Object(o.jsxs)("div",{className:"weather",children:[c&&Object(o.jsx)("div",{children:c}),n&&Object(o.jsx)(u,{}),"undefined"!==typeof t.main?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"temp",children:[t.main.temp,"\u2103, feels like:  ",t.main.feels_like,"\u2103"]}),Object(o.jsxs)("div",{className:"cityName",children:[t.name,", ",t.sys.country]}),Object(o.jsx)("img",{className:"tempImg",alt:"icon",src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,".png")}),Object(o.jsx)("div",{className:"weatherType",children:t.weather[0].main}),Object(o.jsxs)("div",{children:["Date: ",h("-")]})]}):""]})}n(22);var m=n(14),p="http://api.openweathermap.org/data/2.5/",b="62d6d8c0f9064c75a51385b3e3cfc853",h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":",t=new Date,n=t.getDate(),c=t.getMonth()+1,a=t.getFullYear();return"".concat(a).concat(e).concat(c<10?"0".concat(c):"".concat(c)).concat(e).concat(n)};function f(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("Almaty"),r=Object(i.a)(s,2),j=r[0],u=r[1],h=Object(c.useState)(!1),f=Object(i.a)(h,2),g=f[0],O=f[1],v=Object(c.useState)(null),x=Object(i.a)(v,2),w=x[0],y=x[1];console.log(n);return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(l,{onSubmit:function(e){e.preventDefault(),O(!0),m.get("".concat(p,"weather?q=").concat(j,"&units=metric&appid=").concat(b,"\n        ")).then((function(e){O(!1),a(e.data),y(null)})).catch((function(e){O(!1),a(""),e.response?(y(e.response.data.message),console.log(e.response.data)):e.request?console.log(e.request):console.log("Error",e.message)}))},onChange:function(e){u(e.target.value)},city:j}),Object(o.jsx)(d,{weather:n,loading:g,error:w})]})}r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.431a0ab1.chunk.js.map