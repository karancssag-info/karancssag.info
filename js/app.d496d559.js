(function(t){function e(e){for(var a,i,l=e[0],o=e[1],c=e[2],d=0,f=[];d<l.length;d++)i=l[d],r[i]&&f.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,l=1;l<n.length;l++){var o=n[l];0!==r[o]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("ais-instant-search",{attrs:{"search-client":t.searchClient,"index-name":"documents",routing:t.routing,wwwwwww:""}},[n("div",{staticClass:"search-panel"},[n("div",{staticClass:"search-panel__results"},[n("ais-search-box",{staticClass:"searchbox",attrs:{placeholder:"Keresendő szöveg"}}),n("div",{staticClass:"row"},[n("ais-powered-by",{attrs:{"class-names":{"ais-PoweredBy":"col-md-6"}}}),n("ais-stats",{attrs:{"class-names":{"ais-Stats":"col-md-6 text-md-right"}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.nbPages,r=e.nbHits,s=e.page;return n("p",{},[t._v("\n                            "+t._s(r)+" dokumentum. "+t._s(s+1)+"/"+t._s(a)+" oldal.\n                        ")])}}])}),n("ais-numeric-menu",{attrs:{attribute:"date",items:[{label:"Összes"},{label:"2014",start:1388534400,end:1420070399},{label:"2015",start:1420070400,end:1451606399},{label:"2016",start:1451606400,end:1483228799},{label:"2017",start:1483228800,end:1514764799},{label:"2018",start:1514764800,end:1546300799},{label:"2019",start:1546300800,end:1577836799},{label:"2020",start:1577836800,end:1609459199},{label:"2021",start:1609459199,end:1640995199}],"class-names":{"ais-NumericMenu":"col-12"}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.items,r=e.refine;return n("div",{},t._l(a,function(e){return n("button",{key:e.value,staticClass:"btn btn-info",class:"m-1 btn btn-info"+(e.isRefined?" active":""),attrs:{type:"button"},on:{click:function(t){t.preventDefault(),r(e.value)}}},[t._v("\n                                    "+t._s(e.label)+"\n                                ")])}))}}])})],1),n("ais-hits",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.items;return n("div",{class:"row"},t._l(a,function(t){return n("div",{key:t.objectID,class:"col-sm-12 col-md-6 col-lg-3 mb-2"},[n("div",{class:"card h-100"},[n("div",{staticClass:"card-body"},[n("h3",{staticClass:"card-title"},[n("a",{attrs:{href:"https://static.karancssag.info/download/"+t.file}},[n("ais-highlight",{attrs:{hit:t,attribute:"title"}})],1)]),n("p",{staticClass:"card-text"},[n("ais-snippet",{attrs:{attribute:"content",hit:t}})],1)])])])}))}}])}),n("div",{staticClass:"pagination"},[n("ais-pagination")],1)],1)])])],1)},s=[],i=n("bb29"),l=n.n(i),o=(n("c2ca"),n("feef")),c=n("f02a"),u={data:function(){return{searchClient:l()("S7KHQ09X66","b413388f2713555e48cba28b1006c664"),routing:{router:Object(o["a"])(),stateMapping:Object(c["a"])()}}}},d=u,f=n("2877"),p=Object(f["a"])(d,r,s,!1,null,null,null);p.options.__file="App.vue";var b=p.exports,v=n("0756");a["a"].use(v["a"]),new a["a"]({el:"#app",render:function(t){return t(b)}})}});
//# sourceMappingURL=app.d496d559.js.map