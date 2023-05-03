"use strict";(self.webpackChunk_kie_chain_status_webpage=self.webpackChunk_kie_chain_status_webpage||[]).push([[394,243],{6285:function(e,t,n){var l=n(1935),r=n(3102),o=n(6835),i=n(1050),c=(n(969),n(1089)),s=n(7574);t.Z=function(e){var t,n,a,u,d,f,p,h,v,j,x,Z=null!==(t=null!==(n=null===(a=e.check)||void 0===a?void 0:a.conclusion)&&void 0!==n?n:e.conclusion)&&void 0!==t?t:"",m=null!==(u=null!==(d=null===(f=e.check)||void 0===f?void 0:f.status)&&void 0!==d?d:e.status)&&void 0!==u?u:"";switch(Z){case c.B_.CONCLUSION.SUCCESS:return(0,s.jsx)(l.Z,{style:{fontSize:null!==(p=e.size)&&void 0!==p?p:14,color:"#70cf41"}});case c.B_.CONCLUSION.FAILURE:return(0,s.jsx)(r.Z,{style:{fontSize:null!==(h=e.size)&&void 0!==h?h:14,color:"#ff6b6d"}});case c.B_.CONCLUSION.CANCELLED:case c.B_.CONCLUSION.SKIPPED:return(0,s.jsx)(o.Z,{style:{fontSize:null!==(v=e.size)&&void 0!==v?v:14,color:"#faad14"}});case c.B_.CONCLUSION.PENDING:return(0,s.jsx)(i.Z,{style:{fontSize:null!==(j=e.size)&&void 0!==j?j:14,color:"#42a5ff"},spin:!0});default:switch(m){case c.B_.STATUS.IN_PROGRESS:case c.B_.STATUS.QUEUED:return(0,s.jsx)(i.Z,{style:{fontSize:null!==(x=e.size)&&void 0!==x?x:14,color:"#42a5ff"},spin:!0});default:return null}}}},8394:function(e,t,n){n.r(t),n.d(t,{ListItem:function(){return F},default:function(){return H}});var l=n(4157),r=n(7849),o=n(2503),i=n(428),c=n(6205),s=n(4066),a=n(969),u=n(9369),d=n(4616),f=n(1089),p=n(4280),h=n(8584),v=n(1308),j=n(5243),x=n(9629),Z=n(7798),m=n(3679),g=n(6234),S=n(7574),y=a.lazy((function(){return n.e(447).then(n.bind(n,8447))})),b=function(e){var t=(0,a.useState)(!0),n=(0,g.Z)(t,2),l=n[0],o=n[1],i=(0,u.v9)((function(e){return e.layout.sectionsShown}));return(0,a.useEffect)((function(){e.project.name&&i.includes((0,h.fE)(e.project))&&o(!1)}),[e.pullRequests,i,i.length,e.project]),(0,S.jsx)(a.Suspense,{fallback:(0,S.jsx)(r.ZP,{header:(0,S.jsx)("h3",{children:"Pull Request List"}),loading:!0}),children:(0,S.jsx)(r.ZP,{header:(0,S.jsx)("h3",{children:"Pull Request List"}),className:"demo-loadmore-list",itemLayout:"vertical",dataSource:e.pullRequests,renderItem:function(t){return(0,S.jsx)(y,{pullRequest:t,project:e.project,loading:l,hideUserAvatar:!1},t.number)}})})},C=n(3028),N=n(5267),R=n(5038),E=n(9142),_=n(1679),k=n(9717),O=n(7207),q=n(9431),B=n(6829),L=n(7347),U=n(2426),z=n.n(U),T=n(9870),w=n(9047),I=function(e,t){return e&&t?new Date(t).getTime()-new Date(e).getTime():0},M=n(1496),D=a.lazy((function(){return n.e(536).then(n.bind(n,536))})),A=function(e){var t,n,r=(0,u.v9)((function(e){return e.branches.baseBranch})),o=(0,u.v9)((function(e){return e.branches.targetBranch})),i=(0,a.useState)(void 0),c=(0,g.Z)(i,2),d=c[0],p=c[1],h=(0,a.useState)(void 0),v=(0,g.Z)(h,2),j=v[0],y=v[1],b=(0,a.useState)(!1),U=(0,g.Z)(b,2),A=U[0],P=U[1],F=(0,a.useState)(void 0),H=(0,g.Z)(F,2),G=H[0],V=H[1];return(0,a.useEffect)((function(){var t,n;if((null===(t=e.project)||void 0===t||null===(n=t.pullRequests)||void 0===n?void 0:n.length)>0){var l=e.project.pullRequests.flatMap((function(e){return e.checks})),r=l.filter((function(e){return e.conclusion!==f.B_.CONCLUSION.SUCCESS&&e.started_at&&e.completed_at})).map((function(e){return I(e.started_at,e.completed_at)})).filter((function(e){return e>0})),o=l.filter((function(e){return e.conclusion===f.B_.CONCLUSION.SUCCESS&&e.started_at&&e.completed_at})).map((function(e){return I(e.started_at,e.completed_at)})).filter((function(e){return e>0}));y((0,w.j)(r)),p((0,w.j)(o))}}),[e.project]),(0,a.useEffect)((function(){var t,n,l,i;r&&o&&(P(!0),V(null===(t=e.project)||void 0===t||null===(n=t.branchesComparison)||void 0===n||null===(l=n[r])||void 0===l||null===(i=l[o])||void 0===i?void 0:i.length))}),[e.project,r,o]),(0,S.jsx)(_.Z,{className:"site-page-header",title:(0,S.jsx)(k.Z,{type:"link",href:e.project.html_url,target:"_blank",icon:(0,S.jsx)(N.Z,{}),style:(0,C.Z)((0,C.Z)({padding:0},f.AR),{},{fontWeight:"bold"}),children:null!==(t=e.project.name)&&void 0!==t?t:e.project.key}),subTitle:e.project.description,extra:[],children:(0,S.jsxs)(Z.Z,{gutter:16,children:[(0,S.jsx)(m.Z,{children:(0,S.jsx)(O.Z,{title:"Number of Pull Requests",prefix:(0,S.jsx)(l.Z,{}),value:e.project.pullRequests.length,valueStyle:f.AR,suffix:(0,S.jsx)(k.Z,{type:"link",href:e.project.html_url,target:"_blank",icon:(0,S.jsx)(N.Z,{}),style:{padding:0}})})}),(0,S.jsx)(m.Z,{children:(0,S.jsx)(L.Z,{title:"Error Index",pullRequests:e.project.pullRequests,placement:"right",popoverContent:null!==(n=e.project.pullRequests)&&void 0!==n&&n.length?(0,S.jsx)(a.Suspense,{fallback:(0,S.jsx)(x.Z,{}),children:(0,S.jsx)(D,{project:e.project})}):null})}),(0,S.jsx)(m.Z,{children:(0,S.jsx)(T.Z,{title:"Average SUCCESS",placement:"right",value:d,popoverContent:void 0===d?"There are no SUCCESS checks to calculation average duration":"The average duration for the success checks",color:"#70cf41"})}),(0,S.jsx)(m.Z,{children:(0,S.jsx)(T.Z,{title:"Average NO SUCCESS",placement:"right",value:j,popoverContent:void 0===j?"There are no ERROR checks to calculation average duration":"The average duration for the Non Success checks",color:"#ff6b6d"})}),(0,S.jsx)(m.Z,{children:(0,S.jsx)(q.Z,{type:"vertical",style:{height:"100%"}})}),(0,S.jsxs)(m.Z,{children:[(0,S.jsx)(O.Z,{title:"Language",valueStyle:(0,C.Z)((0,C.Z)({},f.AR),{},{display:"none"})}),(0,S.jsx)(s.Z,{style:{marginTop:5},children:e.project.language})]}),(0,S.jsxs)(m.Z,{children:[(0,S.jsx)(O.Z,{title:"Default Branch",valueStyle:(0,C.Z)((0,C.Z)({},f.AR),{},{display:"none"})}),(0,S.jsx)(s.Z,{style:{marginTop:5},children:e.project.default_branch})]}),(0,S.jsx)(m.Z,{children:e.project.updated_at?(0,S.jsx)(a.Suspense,{fallback:(0,S.jsx)(x.Z,{style:{fontSize:16}}),children:(0,S.jsx)(B.Z,{date:z()(new Date(Date.parse(e.project.updated_at))).format(f.sR),text:"Since Last Updating",tooltipTitle:"The last time the project was updated"})}):null}),A?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(m.Z,{children:(0,S.jsx)(q.Z,{type:"vertical",style:{height:"100%"}})}),(0,S.jsx)(m.Z,{children:(0,S.jsx)(M.Z,{title:"Number of Differences",diffs:G,project:e.project,baseBranch:r,headBranch:o,prefix:(0,S.jsxs)(Z.Z,{align:"middle",children:[(0,S.jsx)(s.Z,{style:{marginRight:"4px"},children:r}),(0,S.jsx)(R.Z,{style:{marginTop:0}}),(0,S.jsx)(s.Z,{style:{marginLeft:"4px"},children:o}),(0,S.jsx)(E.Z,{})]})})})]}):null]})})},P=function(e){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Z.Z,{children:(0,S.jsx)(m.Z,{span:24,children:(0,S.jsx)(A,{project:e.project})})}),(0,S.jsx)(Z.Z,{children:(0,S.jsx)(m.Z,{span:24,style:{padding:24},children:(0,S.jsx)(b,{pullRequests:e.project.pullRequests,project:e.project})})})]})},F=function(e){var t=(0,u.I0)(),n=(0,u.v9)((function(e){return e.pullrequestFilter.filter}));return(0,a.useEffect)((function(){return e.project&&t(d.am((0,h.fE)(e.project))),function(){t(d.el((0,h.fE)(e.project)))}}),[t,n,e.project]),(0,S.jsx)(r.ZP.Item,{id:(0,h.fE)(e.project),style:{marginTop:0,marginBottom:8,padding:0,scrollMarginTop:f.GS},children:(0,S.jsx)(o.Z,{title:(0,S.jsxs)(i.Z.Title,{level:4,children:[(0,S.jsx)(v.Z,{title:"Number of pull requests",value:e.project.pullRequests.length,color:"default",icon:(0,S.jsx)(l.Z,{}),showZero:!0}),e.project.key]}),extra:[(0,S.jsx)(c.Z,{title:"Affected Branches",children:Array.from(new Set(e.project.pullRequests.map((function(e){var t;return null===(t=e.base)||void 0===t?void 0:t.ref})))).filter((function(e){return e})).sort(p.$).map((function(e){return(0,S.jsx)(s.Z,{children:e},e)}))},"affected-branches-tooltip"),(0,S.jsx)(a.Suspense,{fallback:(0,S.jsx)(x.Z,{style:{fontSize:16}}),children:(0,S.jsx)(j.default,{pullRequests:e.project.pullRequests})},"affected-branches-statistics")],style:{width:"100%",marginTop:0,paddingTop:0,marginBottom:0},children:(0,S.jsx)(P,{project:e.project})},e.project.key)})},H=F},1308:function(e,t,n){var l=n(6205),r=n(4066),o=(n(969),n(7574));t.Z=function(e){return e.showZero||e.value>0?e.title?(0,o.jsx)(l.Z,{placement:"top",title:e.title,children:(0,o.jsx)(r.Z,{color:e.color,icon:e.icon,children:e.value})}):(0,o.jsx)(r.Z,{color:e.color,icon:e.icon,children:e.value}):null}},5243:function(e,t,n){n.r(t),n.d(t,{PullRequestStatistics:function(){return j}});var l=n(3028),r=n(6234),o=n(2993),i=n(6205),c=n(9717),s=n(5896),a=n(969),u=n(9369),d=n(4616),f=n(1089),p=n(6285),h=n(1308),v=n(7574),j=function(e){var t=(0,u.I0)(),n=(0,a.useState)([]),j=(0,r.Z)(n,2),x=j[0],Z=j[1],m=(0,a.useState)([]),g=(0,r.Z)(m,2),S=g[0],y=g[1],b=(0,a.useState)([]),C=(0,r.Z)(b,2),N=C[0],R=C[1],E=(0,a.useState)([]),_=(0,r.Z)(E,2),k=_[0],O=_[1],q=(0,a.useState)(!0),B=(0,r.Z)(q,2),L=B[0],U=B[1],z=function(e,t){return e.reduce((function(e,n){var r=(0,l.Z)({},n);return r.checks=n.checks.filter(t),r.checks.length&&e.push(r),e}),[])};(0,a.useEffect)((function(){U(!0),e.pullRequests.length&&(Z(z(e.pullRequests,(function(e){return e.conclusion===f.B_.CONCLUSION.SUCCESS}))),y(z(e.pullRequests,(function(e){return e.conclusion===f.B_.CONCLUSION.FAILURE}))),R(z(e.pullRequests,(function(e){return void 0!==e.status&&[f.B_.STATUS.IN_PROGRESS,f.B_.STATUS.QUEUED].includes(e.status)}))),O(z(e.pullRequests,(function(e){return void 0!==e.conclusion&&[f.B_.CONCLUSION.SKIPPED,f.B_.CONCLUSION.CANCELLED].includes(e.conclusion)})))),U(!1)}),[e.pullRequests]);var T=function(e){return(0,v.jsx)(i.Z,{title:"".concat(e.titlePreffix," Get Check Details (").concat(e.pullRequests.flatMap((function(e){return e.checks})).length,")"),children:(0,v.jsx)(c.Z,{type:"link",style:{padding:0,margin:0},onClick:function(){return n=e.pullRequests,t(d.OA(n));var n},children:e.children})})};return L?(0,v.jsx)(s.Z.Input,{style:{width:150}}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(T,{pullRequests:x,titlePreffix:"Number of success checks. ",children:(0,v.jsx)(h.Z,{value:x.flatMap((function(e){return e.checks})).length,color:"success",icon:(0,v.jsx)(p.Z,{conclusion:f.B_.CONCLUSION.SUCCESS})})}),(0,v.jsx)(T,{pullRequests:S,titlePreffix:"Number of failure checks. ",children:(0,v.jsx)(h.Z,{value:S.flatMap((function(e){return e.checks})).length,color:"error",icon:(0,v.jsx)(p.Z,{conclusion:f.B_.CONCLUSION.FAILURE})})}),(0,v.jsx)(T,{pullRequests:N,titlePreffix:"Number of running/queued checks. ",children:(0,v.jsx)(h.Z,{value:N.flatMap((function(e){return e.checks})).length,color:"processing",icon:(0,v.jsx)(p.Z,{status:f.B_.STATUS.IN_PROGRESS})})}),(0,v.jsx)(T,{pullRequests:k,titlePreffix:"Number of skipped/aborted checks. ",children:(0,v.jsx)(h.Z,{value:k.flatMap((function(e){return e.checks})).length,color:"warning",icon:(0,v.jsx)(p.Z,{conclusion:f.B_.CONCLUSION.CANCELLED})})}),e.pullRequests.flatMap((function(e){return e.checks})).length?(0,v.jsx)(T,{pullRequests:e.pullRequests,titlePreffix:"",children:(0,v.jsx)(o.Z,{})}):null]})};t.default=j},1496:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(3028),r=n(9142),o=n(7207),i=n(1089),c=n(5267),s=n(9717),a=(n(969),n(7574)),u=function(e){var t=e.fontSize?{fontSize:e.fontSize}:i.de,n="".concat(i.Jx.BASE_GITHUB,"/").concat(e.project.key,"/compare/").concat(e.baseBranch,"...").concat(e.headBranch,"#files_bucket");return(0,a.jsx)(s.Z,{size:"small",type:"link",href:n,target:"_blank",icon:(0,a.jsx)(c.Z,{}),style:(0,l.Z)({},t)})},d=function(e){var t,n=e.size?{fontSize:e.size}:i.AR;return(0,a.jsx)(o.Z,{title:e.title,value:e.diffs,precision:0,valueStyle:(0,l.Z)({},n),prefix:null!==(t=e.prefix)&&void 0!==t?t:(0,a.jsx)(r.Z,{}),suffix:e.baseBranch&&e.headBranch?(0,a.jsx)(u,{project:e.project,baseBranch:e.baseBranch,headBranch:e.headBranch}):null})}},7347:function(e,t,n){var l=n(3028),r=n(6234),o=n(3275),i=n(7207),c=n(6205),s=n(7471),a=n(969),u=n(1089),d=n(6946),f=n(7574);t.Z=function(e){var t=(0,a.useState)(void 0),n=(0,r.Z)(t,2),p=n[0],h=n[1],v=(0,a.useState)(u.po.GREEN),j=(0,r.Z)(v,2),x=j[0],Z=j[1],m=e.size?{fontSize:e.size}:u.AR;return(0,a.useEffect)((function(){var t;if(null!==(t=e.pullRequests)&&void 0!==t&&t.length){var n=(0,d.a)(e.pullRequests);h(n),Z(n<=20?u.po.GREEN:u.po.RED)}else h(void 0),Z(u.po.GREEN)}),[e.pullRequests]),e.popoverContent?(0,f.jsx)(o.Z,{content:e.popoverContent,placement:e.placement,children:(0,f.jsx)(i.Z,{prefix:(0,f.jsx)(c.Z,{title:"This index is calculated by n_failures/n_checks",children:(0,f.jsx)(s.Z,{style:{fontSize:12}})}),title:e.title,value:p,precision:2,valueStyle:(0,l.Z)((0,l.Z)({},m),{},{color:x,fontWeight:"bold"}),suffix:"%"})}):(0,f.jsx)(i.Z,{title:e.title,value:p,precision:2,valueStyle:(0,l.Z)((0,l.Z)({},m),{},{color:x,fontWeight:"bold"}),suffix:"%"})}},6829:function(e,t,n){var l=n(6205),r=n(7207),o=(n(969),n(1089)),i=n(7574);t.Z=function(e){return e.tooltipTitle?(0,i.jsx)(l.Z,{title:e.tooltipTitle,children:(0,i.jsx)(r.Z,{title:e.text,loading:!e.date,valueStyle:o.AR,value:e.date?e.date.toLocaleString():void 0})}):(0,i.jsx)(r.Z,{title:e.text,loading:!e.date,valueStyle:o.AR,value:e.date?e.date.toLocaleString():void 0})}},9870:function(e,t,n){var l=n(6234),r=n(8833),o=n(3275),i=n(7207),c=n(3043),s=n.n(c),a=n(969),u=n(1089),d=n(7574);t.Z=function(e){var t=(0,a.useState)(void 0),n=(0,l.Z)(t,2),c=n[0],f=n[1];(0,a.useEffect)((function(){e.value&&f(s()(e.value))}),[e.value]);var p=e.size?{fontSize:e.size}:u.AR;return(0,d.jsx)(o.Z,{content:e.popoverContent,placement:e.placement,children:(0,d.jsx)(i.Z,{title:e.title,prefix:void 0===e.value?null:(0,d.jsx)(r.Z,{style:{color:e.color?e.color:"black"}}),value:void 0===e.value?"No info":c,valueStyle:p})})}},9047:function(e,t,n){n.d(t,{j:function(){return l}});var l=function(e){return e.length>0?e.reduce((function(e,t){return e+t}),0)/e.length:void 0}},9142:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(3028),r=n(969),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M476 399.1c0-3.9-3.1-7.1-7-7.1h-42c-3.8 0-7 3.2-7 7.1V484h-84.5c-4.1 0-7.5 3.1-7.5 7v42c0 3.8 3.4 7 7.5 7H420v84.9c0 3.9 3.2 7.1 7 7.1h42c3.9 0 7-3.2 7-7.1V540h84.5c4.1 0 7.5-3.2 7.5-7v-42c0-3.9-3.4-7-7.5-7H476v-84.9zM560.5 704h-225c-4.1 0-7.5 3.2-7.5 7v42c0 3.8 3.4 7 7.5 7h225c4.1 0 7.5-3.2 7.5-7v-42c0-3.8-3.4-7-7.5-7zm-7.1-502.6c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v704c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V397.3c0-8.5-3.4-16.6-9.4-22.6L553.4 201.4zM664 888H232V264h282.2L664 413.8V888zm190.2-581.4L611.3 72.9c-6-5.7-13.9-8.9-22.2-8.9H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h277l219 210.6V824c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V329.6c0-8.7-3.5-17-9.8-23z"}}]},name:"diff",theme:"outlined"},i=n(2717),c=function(e,t){return r.createElement(i.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:o}))};c.displayName="DiffOutlined";var s=r.forwardRef(c)},4157:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(3028),r=n(969),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M952 612c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H298a95.92 95.92 0 00-89-60c-53 0-96 43-96 96s43 96 96 96c40.3 0 74.8-24.8 89-60h150.3v152c0 55.2 44.8 100 100 100H952c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H548.3c-15.5 0-28-12.5-28-28V612H952zM451.7 313.7l172.5 136.2c6.3 5.1 15.8.5 15.8-7.7V344h264c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H640v-98.2c0-8.1-9.4-12.8-15.8-7.7L451.7 298.3a9.9 9.9 0 000 15.4z"}}]},name:"node-collapse",theme:"outlined"},i=n(2717),c=function(e,t){return r.createElement(i.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:o}))};c.displayName="NodeCollapseOutlined";var s=r.forwardRef(c)},9431:function(e,t,n){var l=n(791),r=n(5633),o=n(5667),i=n.n(o),c=n(969),s=n(1742),a=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]])}return n};t.Z=function(e){var t,n=c.useContext(s.E_),o=n.getPrefixCls,u=n.direction,d=e.prefixCls,f=e.type,p=void 0===f?"horizontal":f,h=e.orientation,v=void 0===h?"center":h,j=e.orientationMargin,x=e.className,Z=e.children,m=e.dashed,g=e.plain,S=a(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),y=o("divider",d),b=v.length>0?"-".concat(v):v,C=!!Z,N="left"===v&&null!=j,R="right"===v&&null!=j,E=i()(y,"".concat(y,"-").concat(p),(t={},(0,r.Z)(t,"".concat(y,"-with-text"),C),(0,r.Z)(t,"".concat(y,"-with-text").concat(b),C),(0,r.Z)(t,"".concat(y,"-dashed"),!!m),(0,r.Z)(t,"".concat(y,"-plain"),!!g),(0,r.Z)(t,"".concat(y,"-rtl"),"rtl"===u),(0,r.Z)(t,"".concat(y,"-no-default-orientation-margin-left"),N),(0,r.Z)(t,"".concat(y,"-no-default-orientation-margin-right"),R),t),x),_=(0,l.Z)((0,l.Z)({},N&&{marginLeft:j}),R&&{marginRight:j});return c.createElement("div",(0,l.Z)({className:E},S,{role:"separator"}),Z&&"vertical"!==p&&c.createElement("span",{className:"".concat(y,"-inner-text"),style:_},Z))}},5819:function(e){e.exports=function(e){if("number"!==typeof e)throw new TypeError("Expected a number");var t=e>0?Math.floor:Math.ceil;return{days:t(e/864e5),hours:t(e/36e5)%24,minutes:t(e/6e4)%60,seconds:t(e/1e3)%60,milliseconds:t(e)%1e3,microseconds:t(1e3*e)%1e3,nanoseconds:t(1e6*e)%1e3}}},3043:function(e,t,n){var l=n(5819),r=function(e,t){return 1===t?e:"".concat(e,"s")};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!Number.isFinite(e))throw new TypeError("Expected a finite number");t.colonNotation&&(t.compact=!1,t.formatSubMilliseconds=!1,t.separateMilliseconds=!1,t.verbose=!1),t.compact&&(t.secondsDecimalDigits=0,t.millisecondsDecimalDigits=0);var n=[],o=function(e,t){var n=Math.floor(e*Math.pow(10,t)+1e-7);return(Math.round(n)/Math.pow(10,t)).toFixed(t)},i=function(e,l,o,i){if(0!==n.length&&t.colonNotation||0!==e||t.colonNotation&&"m"===o){var c,s;if(i=(i||e||"0").toString(),t.colonNotation){c=n.length>0?":":"",s="";var a=i.includes(".")?i.split(".")[0].length:i.length,u=n.length>0?2:1;i="0".repeat(Math.max(0,u-a))+i}else c="",s=t.verbose?" "+r(l,e):o;n.push(c+i+s)}},c=l(e);if(i(Math.trunc(c.days/365),"year","y"),i(c.days%365,"day","d"),i(c.hours,"hour","h"),i(c.minutes,"minute","m"),t.separateMilliseconds||t.formatSubMilliseconds||!t.colonNotation&&e<1e3)if(i(c.seconds,"second","s"),t.formatSubMilliseconds)i(c.milliseconds,"millisecond","ms"),i(c.microseconds,"microsecond","\xb5s"),i(c.nanoseconds,"nanosecond","ns");else{var s=c.milliseconds+c.microseconds/1e3+c.nanoseconds/1e6,a="number"===typeof t.millisecondsDecimalDigits?t.millisecondsDecimalDigits:0,u=s>=1?Math.round(s):Math.ceil(s),d=a?s.toFixed(a):u;i(Number.parseFloat(d,10),"millisecond","ms",d)}else{var f=e/1e3%60,p="number"===typeof t.secondsDecimalDigits?t.secondsDecimalDigits:1,h=o(f,p),v=t.keepDecimalsOnWholeSeconds?h:h.replace(/\.0+$/,"");i(Number.parseFloat(v,10),"second","s",v)}if(0===n.length)return"0"+(t.verbose?" milliseconds":"ms");if(t.compact)return n[0];if("number"===typeof t.unitCount){var j=t.colonNotation?"":" ";return n.slice(0,Math.max(t.unitCount,1)).join(j)}return t.colonNotation?n.join(""):n.join(" ")}}}]);
//# sourceMappingURL=394.0694d8b3.chunk.js.map