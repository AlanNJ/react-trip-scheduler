(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[982],{1238:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plans/[id]",function(){return e(5144)}])},5144:function(n,t,e){"use strict";e.r(t),e.d(t,{planJourney:function(){return v}});var r=e(8520),i=e.n(r),u=e(5893),o=e(9669),a=e.n(o),s=e(7294),c=e(4416),l=e(3474),f=e(1163),d=e(5538);function h(n,t,e,r,i,u,o){try{var a=n[u](o),s=a.value}catch(c){return void e(c)}a.done?t(s):Promise.resolve(s).then(r,i)}var v=function(n){var t=(0,s.useState)(),e=t[0],r=t[1],o=(0,s.useState)(),c=o[0],l=o[1],v=(0,s.useState)(!1),p=(v[0],v[1]),g=(0,f.useRouter)();(0,s.useEffect)((function(){n.getInitial()}),[]);var w,_=(w=i().mark((function n(t){var r,u,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=g.query.id,u=new Date,o=u.getFullYear()+"/"+(u.getMonth()+1)+"/"+u.getDate(),void 0!==e&&void 0!==c){n.next=6;break}d.Am.error("Please select both destinations"),n.next=13;break;case 6:return p(!0),n.next=9,a().patch("http://localhost:3000/Users/".concat(r),{destinations:[{start:e,end:c,id:r,date:o}]});case 9:n.sent,p(!1),d.Am.success("Destination Added"),setTimeout((function(){e&&c&&g.push("/")}),[1e3]);case 13:case"end":return n.stop()}}),n)})),function(){var n=this,t=arguments;return new Promise((function(e,r){var i=w.apply(n,t);function u(n){h(i,e,r,u,o,"next",n)}function o(n){h(i,e,r,u,o,"throw",n)}u(void 0)}))});return(0,u.jsxs)("div",{className:"plan-container",children:[(0,u.jsx)("h1",{children:"Plan Your New Destination"}),(0,u.jsxs)("div",{className:"fields",children:[(0,u.jsx)("input",{placeholder:"Set Starting Location",onChange:function(n){return r(n.target.value)}}),(0,u.jsx)("input",{placeholder:"Set Arriving Location",onChange:function(n){return l(n.target.value)}})]}),(0,u.jsx)("button",{onClick:function(n){return _(n)},children:"Set Journey"})]})};t.default=(0,c.$j)((function(n){return{user:n.allUsers}}),(function(n){return{logout:function(){n(logOut())},getInitial:function(t){n((0,l.gc)(t))}}}))(v)}},function(n){n.O(0,[774,888,179],(function(){return t=1238,n(n.s=t);var t}));var t=n.O();_N_E=t}]);