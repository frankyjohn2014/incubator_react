(this.webpackJsonpkama=this.webpackJsonpkama||[]).push([[4],{286:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var i=r(95);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],i=!0,o=!1,n=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done)&&(r.push(s.value),!e||r.length!==e);i=!0);}catch(c){o=!0,n=c}finally{try{i||null==u.return||u.return()}finally{if(o)throw n}}return r}}(t,e)||Object(i.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},288:function(t,e,r){"use strict";r.r(e);var i=r(5),o=r(27),n=r(28),s=r(30),u=r(29),c=r(1),a=r(0),l=r.n(a),j=r(67),d=function(t){var e=Object(i.a)({},t.profile);return t.profile?Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:["About Me : ",e.aboutMe]}),Object(c.jsx)("div",{children:e.fullName}),Object(c.jsx)("img",{src:t.profile.photos.large,alt:""}),Object(c.jsx)("div",{children:Object(c.jsxs)("p",{children:["lookingForAJob : ",e.lookingForAJobDescription]})}),Object(c.jsx)("div",{children:t.login.isAuth?Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:t.login.email}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:t.logoutReducer,children:" Logout "})]}):Object(c.jsx)("div",{children:"No log in"})})]}):Object(c.jsx)(j.a,{})},b=r(286),p=function(t){var e=Object(a.useState)(!1),r=Object(b.a)(e,2),i=r[0],o=r[1],n=Object(a.useState)(t.status),s=Object(b.a)(n,2),u=s[0],l=s[1];Object(a.useEffect)((function(){l(t.status)}),[t.status]);return Object(c.jsxs)("div",{children:[!i&&Object(c.jsx)("div",{children:Object(c.jsxs)("span",{onDoubleClick:function(){o(!0)},children:["Status: ",u||"------"]})}),i&&Object(c.jsx)("div",{children:Object(c.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.updateStatus(u)},value:u})})]})},f=l.a.memo((function(t){return Object(c.jsxs)("div",{children:[Object(c.jsx)(p,{status:t.status,updateStatus:t.updateStatus}),Object(c.jsx)(d,{profile:t.profile.profile,login:t.login,logoutReducer:t.logoutReducer})]})})),h=r(14),O=r(126),v=r(10),g=r(64),x=r(8),m=r(32),y=function(t){Object(s.a)(r,t);var e=Object(u.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authoriziedId.id),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(f,Object(i.a)(Object(i.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,login:this.props.login,logoutReducer:this.props.logout}))})}}]),r}(l.a.Component);e.default=Object(x.d)(Object(h.b)((function(t){return{profile:t.profile,login:t.login,status:t.profile.status,authoriziedId:t.login}}),{getUserProfile:O.c,getStatus:O.b,updateStatus:O.d,logout:m.d}),v.f,g.a)(y)}}]);
//# sourceMappingURL=4.befd4af0.chunk.js.map