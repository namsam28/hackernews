(this.webpackJsonphacker_news=this.webpackJsonphacker_news||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=a(6),s=a(1),u=a(9),i=a(10),m=a(12),p=a(11),h=a(14),E=a.n(h),f=a(20),b={fetchApi:function(){var e=Object(f.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://node-hnapi.herokuapp.com/news");case 3:return t=e.sent,e.abrupt("return",t.json());case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0+"\uc5d0\ub7ec \ucd9c\ub825!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},d=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.value,t=e.id,a=e.title,n=e.user,c=e.time_ago,l=e.url;return r.a.createElement("li",{"data-id":t,target:"_blank"},r.a.createElement("a",{href:l},r.a.createElement("strong",{className:"ti"},a)),r.a.createElement("div",{className:"news_info"},r.a.createElement("span",{className:"user"},n),r.a.createElement("span",{className:"upload_time"},c)))}}]),a}(r.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,data:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),setTimeout((function(){b.fetchApi().then((function(t){e.setState({data:t}),e.setState({isLoading:!1})}))}),1e3)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.data;return r.a.createElement("section",{className:"newslist"},t?r.a.createElement("p",null,"Loading..."):r.a.createElement("ul",null,a.map((function(e,t){return r.a.createElement(d,{key:t,value:e})}))))}}]),a}(r.a.Component);var w=function(){return r.a.createElement("header",{id:"header"},r.a.createElement("h1",{className:"logo"},r.a.createElement(o.b,{to:"/"},"HackerNews")),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:{pathname:"/news",state:{apiQuery:"news"}}},"news")),r.a.createElement("li",null,r.a.createElement(o.b,{to:{pathname:"/past",state:{apiQuery:"past"}}},"past")),r.a.createElement("li",null,r.a.createElement(o.b,{to:{pathname:"/comment",state:{apiQuery:"comment"}}},"comment")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"./ask"},"ask")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"./show"},"show")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"./jobs"},"jobs")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"./submit"},"submit")))))};var k=function(){return r.a.createElement(o.a,null,r.a.createElement(w,null),r.a.createElement(s.a,{path:"/",exact:!0,component:v}),r.a.createElement(s.a,{path:"/news",exact:!0,component:v}),r.a.createElement(s.a,{path:"/past",exact:!0,component:v}))};l.a.render(r.a.createElement(k,null),document.getElementById("app"))}},[[22,1,2]]]);
//# sourceMappingURL=main.abeedde4.chunk.js.map