(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"8cDG":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),o=u("056m"),b=u("ilI0"),a=u("iInd"),s=u("MKJQ"),r=u("sZkV"),h=u("TSSN"),c=u("SVse"),d=u("HyEY");class p{constructor(l){this.api=l,this.countries=[],this.visibleCountries=[],this.loading=!0,this.count=0}ngOnInit(){this.doRefresh()}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}doRefresh(l){this.loading=!0,this.count=0,this.sub=this.api.getAllCountries().subscribe(n=>{this.sub&&this.sub.unsubscribe(),this.loading=!1,this.countries=n,l&&l.target.complete(),this.visibleCountries=[],this.append(null)})}append(l){const n=this.countries.slice(10*this.count,10*(this.count+1));l&&l.target.complete(),this.count++,this.visibleCountries.push(...n),this.countries.length===this.visibleCountries.length&&l&&(l.target.disable=!0)}}var m=t.ob({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{--ion-safe-area-top:20px;--ion-safe-area-bottom:22px}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}ion-content[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]],data:{}});function k(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"app-country-info",[],null,null,null,o.b,o.a)),t.pb(2,114688,null,0,b.a,[a.m],{info:[0,"info"]},null)],(function(l,n){l(n,2,0,n.context.$implicit)}),null)}function x(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,56,"ion-list",[],null,null,null,s.R,s.p)),t.pb(1,49152,null,0,r.L,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,5,"ion-list-header",[],null,null,null,s.Q,s.q)),t.pb(3,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,3,"ion-label",[],null,null,null,s.P,s.o)),t.pb(5,49152,null,0,r.K,[t.h,t.k,t.x],null,null),(l()(),t.qb(6,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 20%"]],null,null,null,s.V,s.u)),t.pb(7,49152,null,0,r.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.qb(8,0,null,0,16,"ion-item",[],null,null,null,s.O,s.n)),t.pb(9,49152,null,0,r.E,[t.h,t.k,t.x],null,null),(l()(),t.qb(10,0,null,0,3,"ion-avatar",[["slot","start"]],null,null,null,s.C,s.b)),t.pb(11,49152,null,0,r.d,[t.h,t.k,t.x],null,null),(l()(),t.qb(12,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,s.V,s.u)),t.pb(13,49152,null,0,r.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.qb(14,0,null,0,10,"ion-label",[],null,null,null,s.P,s.o)),t.pb(15,49152,null,0,r.K,[t.h,t.k,t.x],null,null),(l()(),t.qb(16,0,null,0,2,"h3",[],null,null,null,null,null)),(l()(),t.qb(17,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 50%"]],null,null,null,s.V,s.u)),t.pb(18,49152,null,0,r.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.qb(19,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.qb(20,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 80%"]],null,null,null,s.V,s.u)),t.pb(21,49152,null,0,r.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.qb(22,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.qb(23,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,s.V,s.u)),t.pb(24,49152,null,0,r.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.qb(25,0,null,0,16,"ion-item",[],null,null,null,s.O,s.n)),t.pb(26,49152,null,0,r.E,[t.h,t.k,t.x],null,null),(l()(),t.qb(27,0,null,0,3,"ion-thumbnail",[["slot","start"]],null,null,null,s.Z,s.y)),t.pb(28,49152,null,0,r.tb,[t.h,t.k,t.x],null,null),(l()(),t.qb(29,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,s.V,s.u)),t.pb(30,49152,null,0,r.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.qb(31,0,null,0,10,"ion-label",[],null,null,null,s.P,s.o)),t.pb(32,49152,null,0,r.K,[t.h,t.k,t.x],null,null),(l()(),t.qb(33,0,null,0,2,"h3",[],null,null,null,null,null)),(l()(),t.qb(34,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 50%"]],null,null,null,s.V,s.u)),t.pb(35,49152,null,0,r.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.qb(36,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.qb(37,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 80%"]],null,null,null,s.V,s.u)),t.pb(38,49152,null,0,r.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.qb(39,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.qb(40,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,s.V,s.u)),t.pb(41,49152,null,0,r.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.qb(42,0,null,0,14,"ion-item",[],null,null,null,s.O,s.n)),t.pb(43,49152,null,0,r.E,[t.h,t.k,t.x],null,null),(l()(),t.qb(44,0,null,0,1,"ion-skeleton-text",[["animated",""],["slot","start"],["style","width: 27px; height: 27px"]],null,null,null,s.V,s.u)),t.pb(45,49152,null,0,r.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.qb(46,0,null,0,10,"ion-label",[],null,null,null,s.P,s.o)),t.pb(47,49152,null,0,r.K,[t.h,t.k,t.x],null,null),(l()(),t.qb(48,0,null,0,2,"h3",[],null,null,null,null,null)),(l()(),t.qb(49,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 50%"]],null,null,null,s.V,s.u)),t.pb(50,49152,null,0,r.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.qb(51,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.qb(52,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 80%"]],null,null,null,s.V,s.u)),t.pb(53,49152,null,0,r.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.qb(54,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.qb(55,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 60%"]],null,null,null,s.V,s.u)),t.pb(56,49152,null,0,r.jb,[t.h,t.k,t.x],{animated:[0,"animated"]},null)],(function(l,n){l(n,7,0,""),l(n,13,0,""),l(n,18,0,""),l(n,21,0,""),l(n,24,0,""),l(n,30,0,""),l(n,35,0,""),l(n,38,0,""),l(n,41,0,""),l(n,45,0,""),l(n,50,0,""),l(n,53,0,""),l(n,56,0,"")}),null)}function q(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,13,"ion-header",[],null,null,null,s.K,s.j)),t.pb(1,49152,null,0,r.y,[t.h,t.k,t.x],{translucent:[0,"translucent"]},null),(l()(),t.qb(2,0,null,0,11,"ion-toolbar",[],null,null,null,s.bb,s.A)),t.pb(3,49152,null,0,r.wb,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,3,"ion-title",[],null,null,null,s.ab,s.z)),t.pb(5,49152,null,0,r.ub,[t.h,t.k,t.x],null,null),(l()(),t.Jb(6,0,[" "," "])),t.Eb(131072,h.k,[h.l,t.h]),(l()(),t.qb(8,0,null,0,5,"ion-buttons",[["slot","secondary"]],null,null,null,s.E,s.d)),t.pb(9,49152,null,0,r.i,[t.h,t.k,t.x],null,null),(l()(),t.qb(10,0,null,0,3,"ion-button",[],null,null,null,s.D,s.c)),t.pb(11,49152,null,0,r.h,[t.h,t.k,t.x],null,null),(l()(),t.qb(12,0,null,0,1,"ion-icon",[["name","search"],["slot","icon-only"]],null,null,null,s.L,s.k)),t.pb(13,49152,null,0,r.z,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(14,0,null,null,21,"ion-content",[],null,null,null,s.J,s.i)),t.pb(15,49152,null,0,r.r,[t.h,t.k,t.x],{fullscreen:[0,"fullscreen"]},null),(l()(),t.qb(16,0,null,0,7,"ion-header",[["collapse","condense"]],null,null,null,s.K,s.j)),t.pb(17,49152,null,0,r.y,[t.h,t.k,t.x],{collapse:[0,"collapse"]},null),(l()(),t.qb(18,0,null,0,5,"ion-toolbar",[],null,null,null,s.bb,s.A)),t.pb(19,49152,null,0,r.wb,[t.h,t.k,t.x],null,null),(l()(),t.qb(20,0,null,0,3,"ion-title",[["size","large"]],null,null,null,s.ab,s.z)),t.pb(21,49152,null,0,r.ub,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.Jb(22,0,["",""])),t.Eb(131072,h.k,[h.l,t.h]),(l()(),t.qb(24,0,null,0,3,"ion-refresher",[["disabled","false"],["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,u){var t=!0;return"ionRefresh"===n&&(t=!1!==l.component.doRefresh(u)&&t),t}),s.U,s.s)),t.pb(25,49152,null,0,r.X,[t.h,t.k,t.x],{disabled:[0,"disabled"]},null),(l()(),t.qb(26,0,null,0,1,"ion-refresher-content",[],null,null,null,s.T,s.t)),t.pb(27,49152,null,0,r.Y,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,k)),t.pb(29,278528,null,0,c.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.qb(30,0,null,0,3,"ion-infinite-scroll",[["id","infinite-scroll"],["threshold","10%"]],null,[[null,"ionInfinite"]],(function(l,n,u){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.append(u)&&t),t}),s.N,s.l)),t.pb(31,49152,null,0,r.B,[t.h,t.k,t.x],{threshold:[0,"threshold"]},null),(l()(),t.qb(32,0,null,0,1,"ion-infinite-scroll-content",[["loading-spinner","bubbles"],["loading-text","Loading more data..."]],null,null,null,s.M,s.m)),t.pb(33,49152,null,0,r.C,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,x)),t.pb(35,16384,null,0,c.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,!0),l(n,13,0,"search"),l(n,15,0,!0),l(n,17,0,"condense"),l(n,21,0,"large"),l(n,25,0,"false"),l(n,29,0,u.visibleCountries),l(n,31,0,"10%"),l(n,35,0,u.loading)}),(function(l,n){l(n,6,0,t.Kb(n,6,0,t.Cb(n,7).transform("TAB2.HEADER"))),l(n,22,0,t.Kb(n,22,0,t.Cb(n,23).transform("TAB2.HEADER")))}))}var f=t.mb("app-tab2",p,(function(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-tab2",[],null,null,null,q,m)),t.pb(1,245760,null,0,p,[d.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),g=u("s7LF"),A=u("qtYk"),y=u("PCNd");u.d(n,"Tab2PageModuleNgFactory",(function(){return j}));var j=t.nb(e,[],(function(l){return t.zb([t.Ab(512,t.j,t.X,[[8,[i.a,f]],[3,t.j],t.v]),t.Ab(4608,c.l,c.k,[t.s,[2,c.t]]),t.Ab(4608,r.a,r.a,[t.x,t.g]),t.Ab(4608,r.Ab,r.Ab,[r.a,t.j,t.p]),t.Ab(4608,r.Db,r.Db,[r.a,t.j,t.p]),t.Ab(4608,g.c,g.c,[]),t.Ab(4608,h.h,h.g,[]),t.Ab(4608,h.d,h.f,[]),t.Ab(4608,h.j,h.e,[]),t.Ab(4608,h.c,h.b,[]),t.Ab(4608,h.l,h.l,[h.m,h.h,h.d,h.j,h.c,h.n,h.p,h.o,h.a]),t.Ab(1073742336,c.c,c.c,[]),t.Ab(1073742336,r.yb,r.yb,[]),t.Ab(1073742336,g.b,g.b,[]),t.Ab(1073742336,g.a,g.a,[]),t.Ab(1073742336,A.a,A.a,[]),t.Ab(1073742336,a.n,a.n,[[2,a.s],[2,a.m]]),t.Ab(1073742336,h.i,h.i,[]),t.Ab(1073742336,y.a,y.a,[]),t.Ab(1073742336,e,e,[]),t.Ab(256,h.p,void 0,[]),t.Ab(256,h.n,void 0,[]),t.Ab(256,h.o,void 0,[]),t.Ab(256,h.a,void 0,[]),t.Ab(1024,a.k,(function(){return[[{path:"",component:p}]]}),[])])}))},HyEY:function(l,n,u){"use strict";u.d(n,"a",(function(){return i}));var t=u("8Y7J"),e=u("IheW");let i=(()=>{class l{constructor(l){this.http=l}getCountryData(l="Sri Lanka"){return this.http.get("https://corona.lmao.ninja/countries/".concat(l))}getAllCountries(){return this.http.get("https://corona.lmao.ninja/countries?sort=deaths")}getSummary(){return this.http.get("https://corona.lmao.ninja/all")}getHistory(l="Sri Lanka"){return this.http.get("https://corona.lmao.ninja/v2/historical/".concat(l))}}return l.ngInjectableDef=t.Pb({factory:function(){return new l(t.Qb(e.c))},token:l,providedIn:"root"}),l})()}}]);