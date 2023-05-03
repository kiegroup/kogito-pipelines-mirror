"use strict";(self.webpackChunk_kie_chain_status_webpage=self.webpackChunk_kie_chain_status_webpage||[]).push([[243],{6285:function(e,n,t){var l=t(1935),s=t(3102),u=t(6835),c=t(1050),i=(t(969),t(1089)),o=t(7574);n.Z=function(e){var n,t,r,a,f,S,h,d,C,p,N,x=null!==(n=null!==(t=null===(r=e.check)||void 0===r?void 0:r.conclusion)&&void 0!==t?t:e.conclusion)&&void 0!==n?n:"",v=null!==(a=null!==(f=null===(S=e.check)||void 0===S?void 0:S.status)&&void 0!==f?f:e.status)&&void 0!==a?a:"";switch(x){case i.B_.CONCLUSION.SUCCESS:return(0,o.jsx)(l.Z,{style:{fontSize:null!==(h=e.size)&&void 0!==h?h:14,color:"#70cf41"}});case i.B_.CONCLUSION.FAILURE:return(0,o.jsx)(s.Z,{style:{fontSize:null!==(d=e.size)&&void 0!==d?d:14,color:"#ff6b6d"}});case i.B_.CONCLUSION.CANCELLED:case i.B_.CONCLUSION.SKIPPED:return(0,o.jsx)(u.Z,{style:{fontSize:null!==(C=e.size)&&void 0!==C?C:14,color:"#faad14"}});case i.B_.CONCLUSION.PENDING:return(0,o.jsx)(c.Z,{style:{fontSize:null!==(p=e.size)&&void 0!==p?p:14,color:"#42a5ff"},spin:!0});default:switch(v){case i.B_.STATUS.IN_PROGRESS:case i.B_.STATUS.QUEUED:return(0,o.jsx)(c.Z,{style:{fontSize:null!==(N=e.size)&&void 0!==N?N:14,color:"#42a5ff"},spin:!0});default:return null}}}},1308:function(e,n,t){var l=t(6205),s=t(4066),u=(t(969),t(7574));n.Z=function(e){return e.showZero||e.value>0?e.title?(0,u.jsx)(l.Z,{placement:"top",title:e.title,children:(0,u.jsx)(s.Z,{color:e.color,icon:e.icon,children:e.value})}):(0,u.jsx)(s.Z,{color:e.color,icon:e.icon,children:e.value}):null}},5243:function(e,n,t){t.r(n),t.d(n,{PullRequestStatistics:function(){return p}});var l=t(3028),s=t(6234),u=t(2993),c=t(6205),i=t(9717),o=t(5896),r=t(969),a=t(9369),f=t(4616),S=t(1089),h=t(6285),d=t(1308),C=t(7574),p=function(e){var n=(0,a.I0)(),t=(0,r.useState)([]),p=(0,s.Z)(t,2),N=p[0],x=p[1],v=(0,r.useState)([]),Z=(0,s.Z)(v,2),O=Z[0],_=Z[1],U=(0,r.useState)([]),j=(0,s.Z)(U,2),k=j[0],R=j[1],E=(0,r.useState)([]),I=(0,s.Z)(E,2),L=I[0],q=I[1],B=(0,r.useState)(!0),g=(0,s.Z)(B,2),P=g[0],A=g[1],b=function(e,n){return e.reduce((function(e,t){var s=(0,l.Z)({},t);return s.checks=t.checks.filter(n),s.checks.length&&e.push(s),e}),[])};(0,r.useEffect)((function(){A(!0),e.pullRequests.length&&(x(b(e.pullRequests,(function(e){return e.conclusion===S.B_.CONCLUSION.SUCCESS}))),_(b(e.pullRequests,(function(e){return e.conclusion===S.B_.CONCLUSION.FAILURE}))),R(b(e.pullRequests,(function(e){return void 0!==e.status&&[S.B_.STATUS.IN_PROGRESS,S.B_.STATUS.QUEUED].includes(e.status)}))),q(b(e.pullRequests,(function(e){return void 0!==e.conclusion&&[S.B_.CONCLUSION.SKIPPED,S.B_.CONCLUSION.CANCELLED].includes(e.conclusion)})))),A(!1)}),[e.pullRequests]);var z=function(e){return(0,C.jsx)(c.Z,{title:"".concat(e.titlePreffix," Get Check Details (").concat(e.pullRequests.flatMap((function(e){return e.checks})).length,")"),children:(0,C.jsx)(i.Z,{type:"link",style:{padding:0,margin:0},onClick:function(){return t=e.pullRequests,n(f.OA(t));var t},children:e.children})})};return P?(0,C.jsx)(o.Z.Input,{style:{width:150}}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(z,{pullRequests:N,titlePreffix:"Number of success checks. ",children:(0,C.jsx)(d.Z,{value:N.flatMap((function(e){return e.checks})).length,color:"success",icon:(0,C.jsx)(h.Z,{conclusion:S.B_.CONCLUSION.SUCCESS})})}),(0,C.jsx)(z,{pullRequests:O,titlePreffix:"Number of failure checks. ",children:(0,C.jsx)(d.Z,{value:O.flatMap((function(e){return e.checks})).length,color:"error",icon:(0,C.jsx)(h.Z,{conclusion:S.B_.CONCLUSION.FAILURE})})}),(0,C.jsx)(z,{pullRequests:k,titlePreffix:"Number of running/queued checks. ",children:(0,C.jsx)(d.Z,{value:k.flatMap((function(e){return e.checks})).length,color:"processing",icon:(0,C.jsx)(h.Z,{status:S.B_.STATUS.IN_PROGRESS})})}),(0,C.jsx)(z,{pullRequests:L,titlePreffix:"Number of skipped/aborted checks. ",children:(0,C.jsx)(d.Z,{value:L.flatMap((function(e){return e.checks})).length,color:"warning",icon:(0,C.jsx)(h.Z,{conclusion:S.B_.CONCLUSION.CANCELLED})})}),e.pullRequests.flatMap((function(e){return e.checks})).length?(0,C.jsx)(z,{pullRequests:e.pullRequests,titlePreffix:"",children:(0,C.jsx)(u.Z,{})}):null]})};n.default=p}}]);
//# sourceMappingURL=243.244f3d02.chunk.js.map