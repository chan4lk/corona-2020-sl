(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8cDG":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var o=u("pMnS"),i=u("056m"),b=u("ilI0"),a=u("MKJQ"),s=u("sZkV"),h=u("TSSN"),r=u("SVse"),d=u("HyEY");class c{constructor(l){this.api=l,this.countries=[],this.visibleCountries=[],this.loading=!0,this.count=0}ngOnInit(){this.doRefresh()}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}doRefresh(l){this.loading=!0,this.count=0,this.sub=this.api.getAllCountries().subscribe(n=>{this.sub&&this.sub.unsubscribe(),this.loading=!1,this.countries=n,l&&l.target.complete(),this.visibleCountries=[],this.append(null)})}append(l){const n=this.countries.slice(10*this.count,10*(this.count+1));l&&l.target.complete(),this.count++,this.visibleCountries.push(...n),this.countries.length===this.visibleCountries.length&&l&&(l.target.disable=!0)}}var x=t.mb({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{--ion-safe-area-top:20px;--ion-safe-area-bottom:22px}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}ion-content[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]],data:{}});function m(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"app-country-info",[],null,null,null,i.b,i.a)),t.nb(2,114688,null,0,b.a,[],{info:[0,"info"]},null)],(function(l,n){l(n,2,0,n.context.$implicit)}),null)}function k(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,56,"ion-list",[],null,null,null,a.R,a.p)),t.nb(1,49152,null,0,s.L,[t.h,t.k,t.x],null,null),(l()(),t.ob(2,0,null,0,5,"ion-list-header",[],null,null,null,a.Q,a.q)),t.nb(3,49152,null,0,s.M,[t.h,t.k,t.x],null,null),(l()(),t.ob(4,0,null,0,3,"ion-label",[],null,null,null,a.P,a.o)),t.nb(5,49152,null,0,s.K,[t.h,t.k,t.x],null,null),(l()(),t.ob(6,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 20%"]],null,null,null,a.V,a.u)),t.nb(7,49152,null,0,s.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.ob(8,0,null,0,16,"ion-item",[],null,null,null,a.O,a.n)),t.nb(9,49152,null,0,s.E,[t.h,t.k,t.x],null,null),(l()(),t.ob(10,0,null,0,3,"ion-avatar",[["slot","start"]],null,null,null,a.C,a.b)),t.nb(11,49152,null,0,s.d,[t.h,t.k,t.x],null,null),(l()(),t.ob(12,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,a.V,a.u)),t.nb(13,49152,null,0,s.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.ob(14,0,null,0,10,"ion-label",[],null,null,null,a.P,a.o)),t.nb(15,49152,null,0,s.K,[t.h,t.k,t.x],null,null),(l()(),t.ob(16,0,null,0,2,"h3",[],null,null,null,null,null)),(l()(),t.ob(17,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 50%"]],null,null,null,a.V,a.u)),t.nb(18,49152,null,0,s.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.ob(19,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.ob(20,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 80%"]],null,null,null,a.V,a.u)),t.nb(21,49152,null,0,s.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.ob(22,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.ob(23,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,a.V,a.u)),t.nb(24,49152,null,0,s.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.ob(25,0,null,0,16,"ion-item",[],null,null,null,a.O,a.n)),t.nb(26,49152,null,0,s.E,[t.h,t.k,t.x],null,null),(l()(),t.ob(27,0,null,0,3,"ion-thumbnail",[["slot","start"]],null,null,null,a.Z,a.y)),t.nb(28,49152,null,0,s.tb,[t.h,t.k,t.x],null,null),(l()(),t.ob(29,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,a.V,a.u)),t.nb(30,49152,null,0,s.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.ob(31,0,null,0,10,"ion-label",[],null,null,null,a.P,a.o)),t.nb(32,49152,null,0,s.K,[t.h,t.k,t.x],null,null),(l()(),t.ob(33,0,null,0,2,"h3",[],null,null,null,null,null)),(l()(),t.ob(34,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 50%"]],null,null,null,a.V,a.u)),t.nb(35,49152,null,0,s.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.ob(36,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.ob(37,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 80%"]],null,null,null,a.V,a.u)),t.nb(38,49152,null,0,s.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.ob(39,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.ob(40,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,a.V,a.u)),t.nb(41,49152,null,0,s.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.ob(42,0,null,0,14,"ion-item",[],null,null,null,a.O,a.n)),t.nb(43,49152,null,0,s.E,[t.h,t.k,t.x],null,null),(l()(),t.ob(44,0,null,0,1,"ion-skeleton-text",[["animated",""],["slot","start"],["style","width: 27px; height: 27px"]],null,null,null,a.V,a.u)),t.nb(45,49152,null,0,s.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.ob(46,0,null,0,10,"ion-label",[],null,null,null,a.P,a.o)),t.nb(47,49152,null,0,s.K,[t.h,t.k,t.x],null,null),(l()(),t.ob(48,0,null,0,2,"h3",[],null,null,null,null,null)),(l()(),t.ob(49,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 50%"]],null,null,null,a.V,a.u)),t.nb(50,49152,null,0,s.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.ob(51,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.ob(52,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 80%"]],null,null,null,a.V,a.u)),t.nb(53,49152,null,0,s.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.ob(54,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.ob(55,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,a.V,a.u)),t.nb(56,49152,null,0,s.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null)],(function(l,n){l(n,7,0,""),l(n,13,0,""),l(n,18,0,""),l(n,21,0,""),l(n,24,0,""),l(n,30,0,""),l(n,35,0,""),l(n,38,0,""),l(n,41,0,""),l(n,45,0,""),l(n,50,0,""),l(n,53,0,""),l(n,56,0,"")}),null)}function p(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,13,"ion-header",[],null,null,null,a.K,a.j)),t.nb(1,49152,null,0,s.y,[t.h,t.k,t.x],{translucent:[0,"translucent"]},null),(l()(),t.ob(2,0,null,0,11,"ion-toolbar",[],null,null,null,a.bb,a.A)),t.nb(3,49152,null,0,s.wb,[t.h,t.k,t.x],null,null),(l()(),t.ob(4,0,null,0,3,"ion-title",[],null,null,null,a.ab,a.z)),t.nb(5,49152,null,0,s.ub,[t.h,t.k,t.x],null,null),(l()(),t.Db(6,0,[" "," "])),t.Ab(131072,h.k,[h.l,t.h]),(l()(),t.ob(8,0,null,0,5,"ion-buttons",[["slot","secondary"]],null,null,null,a.E,a.d)),t.nb(9,49152,null,0,s.i,[t.h,t.k,t.x],null,null),(l()(),t.ob(10,0,null,0,3,"ion-button",[],null,null,null,a.D,a.c)),t.nb(11,49152,null,0,s.h,[t.h,t.k,t.x],null,null),(l()(),t.ob(12,0,null,0,1,"ion-icon",[["name","search"],["slot","icon-only"]],null,null,null,a.L,a.k)),t.nb(13,49152,null,0,s.z,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.ob(14,0,null,null,21,"ion-content",[],null,null,null,a.J,a.i)),t.nb(15,49152,null,0,s.r,[t.h,t.k,t.x],{fullscreen:[0,"fullscreen"]},null),(l()(),t.ob(16,0,null,0,7,"ion-header",[["collapse","condense"]],null,null,null,a.K,a.j)),t.nb(17,49152,null,0,s.y,[t.h,t.k,t.x],{collapse:[0,"collapse"]},null),(l()(),t.ob(18,0,null,0,5,"ion-toolbar",[],null,null,null,a.bb,a.A)),t.nb(19,49152,null,0,s.wb,[t.h,t.k,t.x],null,null),(l()(),t.ob(20,0,null,0,3,"ion-title",[["size","large"]],null,null,null,a.ab,a.z)),t.nb(21,49152,null,0,s.ub,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.Db(22,0,["",""])),t.Ab(131072,h.k,[h.l,t.h]),(l()(),t.ob(24,0,null,0,3,"ion-refresher",[["disabled","false"],["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,u){var t=!0;return"ionRefresh"===n&&(t=!1!==l.component.doRefresh(u)&&t),t}),a.U,a.s)),t.nb(25,49152,null,0,s.X,[t.h,t.k,t.x],{disabled:[0,"disabled"]},null),(l()(),t.ob(26,0,null,0,1,"ion-refresher-content",[],null,null,null,a.T,a.t)),t.nb(27,49152,null,0,s.Y,[t.h,t.k,t.x],null,null),(l()(),t.db(16777216,null,0,1,null,m)),t.nb(29,278528,null,0,r.i,[t.L,t.I,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.ob(30,0,null,0,3,"ion-infinite-scroll",[["id","infinite-scroll"],["threshold","10%"]],null,[[null,"ionInfinite"]],(function(l,n,u){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.append(u)&&t),t}),a.N,a.l)),t.nb(31,49152,null,0,s.B,[t.h,t.k,t.x],{threshold:[0,"threshold"]},null),(l()(),t.ob(32,0,null,0,1,"ion-infinite-scroll-content",[["loading-spinner","bubbles"],["loading-text","Loading more data..."]],null,null,null,a.M,a.m)),t.nb(33,49152,null,0,s.C,[t.h,t.k,t.x],null,null),(l()(),t.db(16777216,null,0,1,null,k)),t.nb(35,16384,null,0,r.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,!0),l(n,13,0,"search"),l(n,15,0,!0),l(n,17,0,"condense"),l(n,21,0,"large"),l(n,25,0,"false"),l(n,29,0,u.visibleCountries),l(n,31,0,"10%"),l(n,35,0,u.loading)}),(function(l,n){l(n,6,0,t.Eb(n,6,0,t.zb(n,7).transform("TAB2.HEADER"))),l(n,22,0,t.Eb(n,22,0,t.zb(n,23).transform("TAB2.HEADER")))}))}function f(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,1,"app-tab2",[],null,null,null,p,x)),t.nb(1,245760,null,0,c,[d.a],null,null)],(function(l,n){l(n,1,0)}),null)}var g=t.kb("app-tab2",c,f,{},{},[]),y=u("s7LF"),j=u("qtYk"),w=u("iInd"),v=u("PCNd");u.d(n,"Tab2PageModuleNgFactory",(function(){return V}));var V=t.lb(e,[],(function(l){return t.wb([t.xb(512,t.j,t.W,[[8,[o.a,g]],[3,t.j],t.v]),t.xb(4608,r.l,r.k,[t.s,[2,r.s]]),t.xb(4608,s.a,s.a,[t.x,t.g]),t.xb(4608,s.Ab,s.Ab,[s.a,t.j,t.p]),t.xb(4608,s.Db,s.Db,[s.a,t.j,t.p]),t.xb(4608,y.c,y.c,[]),t.xb(4608,h.h,h.g,[]),t.xb(4608,h.d,h.f,[]),t.xb(4608,h.j,h.e,[]),t.xb(4608,h.c,h.b,[]),t.xb(4608,h.l,h.l,[h.m,h.h,h.d,h.j,h.c,h.n,h.p,h.o,h.a]),t.xb(1073742336,r.c,r.c,[]),t.xb(1073742336,s.yb,s.yb,[]),t.xb(1073742336,y.b,y.b,[]),t.xb(1073742336,y.a,y.a,[]),t.xb(1073742336,j.a,j.a,[]),t.xb(1073742336,w.n,w.n,[[2,w.s],[2,w.m]]),t.xb(1073742336,h.i,h.i,[]),t.xb(1073742336,v.a,v.a,[]),t.xb(1073742336,e,e,[]),t.xb(256,h.p,void 0,[]),t.xb(256,h.n,void 0,[]),t.xb(256,h.o,void 0,[]),t.xb(256,h.a,void 0,[]),t.xb(1024,w.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);