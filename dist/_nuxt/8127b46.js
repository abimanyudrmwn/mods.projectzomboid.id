(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{317:function(t,e,r){"use strict";r.r(e);var o=r(81),n=r(8),c=(r(47),r(40),r(14),r(275),r(29),r(276),r(277),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(287),r(288),r(289),r(290),r(291),r(30),r(41),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,m,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("wiki",n.slug).sortBy("date","desc").fetch();case 3:return c=e.sent,l=c.map((function(t){return t.category})),m=Object(o.a)(new Set(l)),"Newest Article",d=c,e.abrupt("return",{articles:c,categories:m,title:"Newest Article",current:d});case 9:case"end":return e.stop()}}),e)})))()},head:{title:"Wiki - Indonesia Project Zomboid",meta:[{name:"author",content:"Indonesia Project Zomboid"},{name:"description",content:'Home for Project Zomboid mods from "Indonesia Project Zomboid" Community Server'},{key:"og:title",property:"og:title",content:"Wiki - Indonesia Project Zomboid"},{key:"og:description",property:"og:description",content:'Home for Project Zomboid mods from "Indonesia Project Zomboid" Community Server'},{hid:"og:image",property:"og:image",content:"https://www.projectzomboid.id/assets/img/hero-logo.png"},{key:"og:url",property:"og:url",content:"https://mods.projectzomboid.id"},{key:"twitter:title",name:"twitter:title",content:"Wiki - Indonesia Project Zomboid"},{key:"twitter:card",name:"twitter:card",content:"summary"},{key:"twitter:creator",name:"twitter:creator",content:"@indonesiaprojectzomboid"},{key:"twitter:description",name:"twitter:description",content:'Home for Project Zomboid mods from "Indonesia Project Zomboid" Community Server'}]},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},reset:function(){this.title="Newest Article",this.current=this.articles},filter:function(t){this.title=t,this.current=this.articles.filter((function(e){return e.category==t}))}}}),l=r(22),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"bg-gray-900"},[r("div",{staticClass:"py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"},[t._m(0),t._v(" "),r("div",{staticClass:"grid gap-8 lg:grid-cols-2"},t._l(t.current,(function(article){return r("article",{key:article.slug,staticClass:"p-6 bg-gray-900 rounded-lg border border-gray-700 shadow-md"},[r("div",{staticClass:"flex justify-between items-center mb-5 text-gray-500"},[r("span",{staticClass:"bg-primary-100 text-primary-800 text-xs font-sora inline-flex items-center py-0.5 rounded"},[t._v("\n                    "+t._s(article.category)+"\n                  ")]),t._v(" "),r("span",{staticClass:"font-sora text-xs"},[t._v(t._s(article.createdAt))])]),t._v(" "),r("h2",{staticClass:"mb-2 text-2xl font-sora text-md tracking-tight text-gray-50 dark:text-white"},[r("a",{attrs:{href:"/wiki/"+article.slug}},[t._v(t._s(article.title))])]),t._v(" "),r("p",{staticClass:"mb-5 font-sora text-gray-400"},[t._v(t._s(article.frase))]),t._v(" "),r("div",{staticClass:"flex justify-between items-center"},[r("div",{staticClass:"flex items-center space-x-4"},[r("img",{staticClass:"w-7 h-7 rounded-full",attrs:{src:article.avatar,alt:article.author}}),t._v(" "),r("span",{staticClass:"font-sora text-white"},[t._v("\n                          "+t._s(article.author)+"\n                      ")])]),t._v(" "),r("a",{staticClass:"inline-flex items-center font-sora text-blue-600",attrs:{href:"/wiki/"+article.slug}},[t._v("\n                      Read more\n                      "),r("svg",{staticClass:"ml-2 w-4 h-4",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])])})),0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto max-w-screen-sm text-center lg:mb-16 mb-8"},[r("h2",{staticClass:"mb-4 text-3xl lg:text-4xl tracking-tight font-sora text-white"},[t._v("Wiki")]),t._v(" "),r("p",{staticClass:"font-sora text-gray-400 sm:text-xl"},[t._v("Anything about mods that Indonesia Project Zomboid Community create.")])])}],!1,null,null,null);e.default=component.exports}}]);