(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,function(t,e,s){t.exports={statistics:"Statistics_statistics__3VXk0",statList:"Statistics_statList__3etHl",statItem:"Statistics_statItem__lOmC0",text:"Statistics_text__d2pEG",description:"Statistics_description__2tCpT"}},,function(t,e,s){t.exports={btnList:"FeedbackOptions_btnList__2XuuS",btnItem:"FeedbackOptions_btnItem__3AJEs",button:"FeedbackOptions_button__NWtcS"}},,,function(t,e,s){t.exports={sectionTitle:"Section_sectionTitle__1FIfS"}},,function(t,e,s){t.exports={title:"Notification_title__1Ul76"}},function(t,e,s){t.exports={wrapper:"Feedback_wrapper__2f14U"}},,,,,function(t,e,s){},function(t,e,s){},,function(t,e,s){"use strict";s.r(e);var a=s(2),c=s.n(a),n=s(7),i=s.n(n),r=(s(14),s(15),s(4)),o=s(3),l=s.n(o),b=s(0);var j=function(t){var e=t.options,s=t.onLeaveFeedback;return Object(b.jsx)("ul",{className:l.a.btnList,children:e.map((function(t,e){return Object(b.jsx)("li",{className:l.a.btnItem,children:Object(b.jsx)("button",{className:l.a.button,type:"button",name:t,onClick:s,children:t})},e)}))})},d=s(6),u=s.n(d);var p=function(t){var e=t.title,s=t.children;return Object(b.jsxs)("section",{className:u.a.section,children:[Object(b.jsx)("h2",{className:u.a.sectionTitle,children:e}),s]})},O=s(1),x=s.n(O);function m(t){var e=t.good,s=t.neutral,a=t.bad,c=t.total,n=t.positivePercentage;return Object(b.jsxs)("ul",{className:x.a.statList,children:[Object(b.jsxs)("li",{className:x.a.statItem,children:[Object(b.jsx)("span",{className:x.a.text,children:"Good:"}),Object(b.jsx)("span",{className:x.a.description,children:e})]}),Object(b.jsxs)("li",{className:x.a.statItem,children:[Object(b.jsx)("span",{className:x.a.text,children:"Neutral:"}),Object(b.jsx)("span",{className:x.a.description,children:s})]}),Object(b.jsxs)("li",{className:x.a.statItem,children:[Object(b.jsx)("span",{className:x.a.text,children:"Bad:"}),Object(b.jsx)("span",{className:x.a.description,children:a})]}),Object(b.jsxs)("li",{className:x.a.statItem,children:[Object(b.jsx)("span",{className:x.a.text,children:"Total:"}),Object(b.jsx)("span",{className:x.a.description,children:c})]}),Object(b.jsxs)("li",{className:x.a.statItem,children:[Object(b.jsx)("span",{className:x.a.text,children:"Positiv feedback:"}),Object(b.jsxs)("span",{className:x.a.description,children:[n," %"]})]})]})}var h=s(8),_=s.n(h);var f=function(t){var e=t.message;return Object(b.jsx)("p",{className:_.a.title,children:e})},N=s(9),v=s.n(N);var k=function(){var t=Object(a.useState)(0),e=Object(r.a)(t,2),s=e[0],c=e[1],n=Object(a.useState)(0),i=Object(r.a)(n,2),o=i[0],l=i[1],d=Object(a.useState)(0),u=Object(r.a)(d,2),O=u[0],x=u[1],h={good:s,neutral:o,bad:O},_=function(){return Object.values(h).reduce((function(t,e){return t+e}),0)},N=function(){var t=Object.values(h).map((function(t){return 100*t/_()}));return Math.round(t[0])},k=Object.keys(h);return Object(b.jsxs)("div",{className:v.a.wrapper,children:[Object(b.jsx)(p,{title:"Please leave feedback",children:Object(b.jsx)(j,{onLeaveFeedback:function(t){switch(t.target.name){case"good":c((function(t){return t+1}));break;case"neutral":l((function(t){return t+1}));break;case"bad":x((function(t){return t+1}))}},options:k})}),Object(b.jsx)(p,{title:"Statistics",children:0===_()?Object(b.jsx)(f,{message:"No feedback given"}):Object(b.jsx)(m,{good:s,neutral:o,bad:O,totalFeedback:_(),positivePercentage:Number(N())?N():0})})]})};var S=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(k,{})})};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.f8c102c2.chunk.js.map