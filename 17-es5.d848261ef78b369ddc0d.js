(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{W9vR:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class e{}var b=u("pMnS"),t=u("MKJQ"),r=u("sZkV"),a=u("TSSN"),i=u("SVse"),c=u("LRne"),s=u("HyEY"),h=u("lJxs"),x=u("nYR2");class d{constructor(l){this.api=l,this.info$=Object(c.a)({active:0,cases:0,casesPerOneMillion:0,country:"",critical:0,deaths:0,recovered:0,todayCases:0,todayDeaths:0})}ngOnInit(){this.doRefresh()}openAbout(){window.open("https://chan4lk.github.io","_self")}doRefresh(l){this.info$=this.api.getAllCountries().pipe(Object(h.a)(l=>l.reduce((l,n)=>({cases:l.cases+n.cases,active:l.active+n.active,todayDeaths:l.todayDeaths+n.todayDeaths,todayCases:l.todayCases+n.todayCases,deaths:l.deaths+n.deaths,recovered:l.recovered+n.recovered,critical:l.critical+n.critical}),{active:0,cases:0,casesPerOneMillion:0,country:"",critical:0,deaths:0,recovered:0,todayCases:0,todayDeaths:0})),Object(x.a)(()=>l?l.target.complete():null))}}var k=o.mb({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{--ion-safe-area-top:20px;--ion-safe-area-bottom:22px}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}ion-content[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-note[_ngcontent-%COMP%]{font-size:1rem}"]],data:{}});function f(l){return o.Fb(0,[(l()(),o.ob(0,0,null,null,65,null,null,null,null,null,null,null)),(l()(),o.ob(1,0,null,null,64,"ion-list",[],null,null,null,t.R,t.p)),o.nb(2,49152,null,0,r.L,[o.h,o.k,o.x],null,null),(l()(),o.ob(3,0,null,0,8,"ion-item",[],null,null,null,t.O,t.n)),o.nb(4,49152,null,0,r.E,[o.h,o.k,o.x],null,null),(l()(),o.ob(5,0,null,0,3,"ion-label",[],null,null,null,t.P,t.o)),o.nb(6,49152,null,0,r.K,[o.h,o.k,o.x],null,null),(l()(),o.Db(7,0,["",""])),o.Ab(131072,a.k,[a.l,o.h]),(l()(),o.ob(9,0,null,0,2,"ion-note",[["color","primary"],["slot","end"]],null,null,null,t.S,t.r)),o.nb(10,49152,null,0,r.S,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Db(11,0,["",""])),(l()(),o.ob(12,0,null,0,8,"ion-item",[],null,null,null,t.O,t.n)),o.nb(13,49152,null,0,r.E,[o.h,o.k,o.x],null,null),(l()(),o.ob(14,0,null,0,3,"ion-label",[],null,null,null,t.P,t.o)),o.nb(15,49152,null,0,r.K,[o.h,o.k,o.x],null,null),(l()(),o.Db(16,0,["",""])),o.Ab(131072,a.k,[a.l,o.h]),(l()(),o.ob(18,0,null,0,2,"ion-note",[["color","danger"],["slot","end"]],null,null,null,t.S,t.r)),o.nb(19,49152,null,0,r.S,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Db(20,0,["",""])),(l()(),o.ob(21,0,null,0,8,"ion-item",[],null,null,null,t.O,t.n)),o.nb(22,49152,null,0,r.E,[o.h,o.k,o.x],null,null),(l()(),o.ob(23,0,null,0,3,"ion-label",[],null,null,null,t.P,t.o)),o.nb(24,49152,null,0,r.K,[o.h,o.k,o.x],null,null),(l()(),o.Db(25,0,["",""])),o.Ab(131072,a.k,[a.l,o.h]),(l()(),o.ob(27,0,null,0,2,"ion-note",[["color","primary"],["slot","end"]],null,null,null,t.S,t.r)),o.nb(28,49152,null,0,r.S,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Db(29,0,["",""])),(l()(),o.ob(30,0,null,0,8,"ion-item",[],null,null,null,t.O,t.n)),o.nb(31,49152,null,0,r.E,[o.h,o.k,o.x],null,null),(l()(),o.ob(32,0,null,0,3,"ion-label",[],null,null,null,t.P,t.o)),o.nb(33,49152,null,0,r.K,[o.h,o.k,o.x],null,null),(l()(),o.Db(34,0,["",""])),o.Ab(131072,a.k,[a.l,o.h]),(l()(),o.ob(36,0,null,0,2,"ion-note",[["color","danger"],["slot","end"]],null,null,null,t.S,t.r)),o.nb(37,49152,null,0,r.S,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Db(38,0,["",""])),(l()(),o.ob(39,0,null,0,8,"ion-item",[],null,null,null,t.O,t.n)),o.nb(40,49152,null,0,r.E,[o.h,o.k,o.x],null,null),(l()(),o.ob(41,0,null,0,3,"ion-label",[],null,null,null,t.P,t.o)),o.nb(42,49152,null,0,r.K,[o.h,o.k,o.x],null,null),(l()(),o.Db(43,0,["",""])),o.Ab(131072,a.k,[a.l,o.h]),(l()(),o.ob(45,0,null,0,2,"ion-note",[["color","primary"],["slot","end"]],null,null,null,t.S,t.r)),o.nb(46,49152,null,0,r.S,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Db(47,0,["",""])),(l()(),o.ob(48,0,null,0,8,"ion-item",[],null,null,null,t.O,t.n)),o.nb(49,49152,null,0,r.E,[o.h,o.k,o.x],null,null),(l()(),o.ob(50,0,null,0,3,"ion-label",[],null,null,null,t.P,t.o)),o.nb(51,49152,null,0,r.K,[o.h,o.k,o.x],null,null),(l()(),o.Db(52,0,["",""])),o.Ab(131072,a.k,[a.l,o.h]),(l()(),o.ob(54,0,null,0,2,"ion-note",[["color","primary"],["slot","end"]],null,null,null,t.S,t.r)),o.nb(55,49152,null,0,r.S,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Db(56,0,["",""])),(l()(),o.ob(57,0,null,0,8,"ion-item",[],null,null,null,t.O,t.n)),o.nb(58,49152,null,0,r.E,[o.h,o.k,o.x],null,null),(l()(),o.ob(59,0,null,0,3,"ion-label",[],null,null,null,t.P,t.o)),o.nb(60,49152,null,0,r.K,[o.h,o.k,o.x],null,null),(l()(),o.Db(61,0,["",""])),o.Ab(131072,a.k,[a.l,o.h]),(l()(),o.ob(63,0,null,0,2,"ion-note",[["color","primary"],["slot","end"]],null,null,null,t.S,t.r)),o.nb(64,49152,null,0,r.S,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Db(65,0,["",""]))],(function(l,n){l(n,10,0,"primary"),l(n,19,0,"danger"),l(n,28,0,"primary"),l(n,37,0,"danger"),l(n,46,0,"primary"),l(n,55,0,"primary"),l(n,64,0,"primary")}),(function(l,n){l(n,7,0,o.Eb(n,7,0,o.zb(n,8).transform("COUNTRY.CASES"))),l(n,11,0,n.context.ngIf.cases),l(n,16,0,o.Eb(n,16,0,o.zb(n,17).transform("COUNTRY.DEATHS"))),l(n,20,0,n.context.ngIf.deaths),l(n,25,0,o.Eb(n,25,0,o.zb(n,26).transform("COUNTRY.TODAY_CASES"))),l(n,29,0,n.context.ngIf.todayCases),l(n,34,0,o.Eb(n,34,0,o.zb(n,35).transform("COUNTRY.TODAY_DEATHS"))),l(n,38,0,n.context.ngIf.todayDeaths),l(n,43,0,o.Eb(n,43,0,o.zb(n,44).transform("COUNTRY.CRITICAL"))),l(n,47,0,n.context.ngIf.critical),l(n,52,0,o.Eb(n,52,0,o.zb(n,53).transform("COUNTRY.RECOVERED"))),l(n,56,0,n.context.ngIf.recovered),l(n,61,0,o.Eb(n,61,0,o.zb(n,62).transform("COUNTRY.ACTIVE"))),l(n,65,0,n.context.ngIf.active)}))}function p(l){return o.Fb(0,[(l()(),o.ob(0,0,null,null,13,"ion-header",[],null,null,null,t.K,t.j)),o.nb(1,49152,null,0,r.y,[o.h,o.k,o.x],{translucent:[0,"translucent"]},null),(l()(),o.ob(2,0,null,0,11,"ion-toolbar",[],null,null,null,t.bb,t.A)),o.nb(3,49152,null,0,r.wb,[o.h,o.k,o.x],null,null),(l()(),o.ob(4,0,null,0,3,"ion-title",[],null,null,null,t.ab,t.z)),o.nb(5,49152,null,0,r.ub,[o.h,o.k,o.x],null,null),(l()(),o.Db(6,0,[" "," "])),o.Ab(131072,a.k,[a.l,o.h]),(l()(),o.ob(8,0,null,0,5,"ion-buttons",[["slot","secondary"]],null,null,null,t.E,t.d)),o.nb(9,49152,null,0,r.i,[o.h,o.k,o.x],null,null),(l()(),o.ob(10,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.openAbout()&&o),o}),t.D,t.c)),o.nb(11,49152,null,0,r.h,[o.h,o.k,o.x],null,null),(l()(),o.ob(12,0,null,0,1,"ion-icon",[["name","person-circle"],["slot","icon-only"]],null,null,null,t.L,t.k)),o.nb(13,49152,null,0,r.z,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(14,0,null,null,16,"ion-content",[],null,null,null,t.J,t.i)),o.nb(15,49152,null,0,r.r,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null),(l()(),o.ob(16,0,null,0,7,"ion-header",[["collapse","condense"]],null,null,null,t.K,t.j)),o.nb(17,49152,null,0,r.y,[o.h,o.k,o.x],{collapse:[0,"collapse"]},null),(l()(),o.ob(18,0,null,0,5,"ion-toolbar",[],null,null,null,t.bb,t.A)),o.nb(19,49152,null,0,r.wb,[o.h,o.k,o.x],null,null),(l()(),o.ob(20,0,null,0,3,"ion-title",[["size","large"]],null,null,null,t.ab,t.z)),o.nb(21,49152,null,0,r.ub,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.Db(22,0,["",""])),o.Ab(131072,a.k,[a.l,o.h]),(l()(),o.ob(24,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,u){var o=!0;return"ionRefresh"===n&&(o=!1!==l.component.doRefresh(u)&&o),o}),t.U,t.s)),o.nb(25,49152,null,0,r.X,[o.h,o.k,o.x],null,null),(l()(),o.ob(26,0,null,0,1,"ion-refresher-content",[],null,null,null,t.T,t.t)),o.nb(27,49152,null,0,r.Y,[o.h,o.k,o.x],null,null),(l()(),o.db(16777216,null,0,2,null,f)),o.nb(29,16384,null,0,i.j,[o.L,o.I],{ngIf:[0,"ngIf"]},null),o.Ab(131072,i.b,[o.h])],(function(l,n){var u=n.component;l(n,1,0,!0),l(n,13,0,"person-circle"),l(n,15,0,!0),l(n,17,0,"condense"),l(n,21,0,"large"),l(n,29,0,o.Eb(n,29,0,o.zb(n,30).transform(u.info$)))}),(function(l,n){l(n,6,0,o.Eb(n,6,0,o.zb(n,7).transform("TAB3.HEADER"))),l(n,22,0,o.Eb(n,22,0,o.zb(n,23).transform("TAB3.HEADER")))}))}var m=o.kb("app-tab3",d,(function(l){return o.Fb(0,[(l()(),o.ob(0,0,null,null,1,"app-tab3",[],null,null,null,p,k)),o.nb(1,114688,null,0,d,[s.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),y=u("s7LF"),D=u("qtYk"),E=u("iInd"),g=u("PCNd");u.d(n,"Tab3PageModuleNgFactory",(function(){return A}));var A=o.lb(e,[],(function(l){return o.wb([o.xb(512,o.j,o.W,[[8,[b.a,m]],[3,o.j],o.v]),o.xb(4608,i.l,i.k,[o.s,[2,i.s]]),o.xb(4608,r.a,r.a,[o.x,o.g]),o.xb(4608,r.Ab,r.Ab,[r.a,o.j,o.p]),o.xb(4608,r.Db,r.Db,[r.a,o.j,o.p]),o.xb(4608,y.c,y.c,[]),o.xb(4608,a.h,a.g,[]),o.xb(4608,a.d,a.f,[]),o.xb(4608,a.j,a.e,[]),o.xb(4608,a.c,a.b,[]),o.xb(4608,a.l,a.l,[a.m,a.h,a.d,a.j,a.c,a.n,a.p,a.o,a.a]),o.xb(1073742336,i.c,i.c,[]),o.xb(1073742336,r.yb,r.yb,[]),o.xb(1073742336,y.b,y.b,[]),o.xb(1073742336,y.a,y.a,[]),o.xb(1073742336,D.a,D.a,[]),o.xb(1073742336,E.n,E.n,[[2,E.s],[2,E.m]]),o.xb(1073742336,a.i,a.i,[]),o.xb(1073742336,g.a,g.a,[]),o.xb(1073742336,e,e,[]),o.xb(256,a.p,void 0,[]),o.xb(256,a.n,void 0,[]),o.xb(256,a.o,void 0,[]),o.xb(256,a.a,void 0,[]),o.xb(1024,E.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);