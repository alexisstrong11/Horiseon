(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"B9+q":function(t,e,a){"use strict";var c=a("oj0F"),n=a("ERkP"),o=a.n(n),s=a("Wbzz"),l=a("Bl7J");e.a=function(t){var e=t.posts,a=t.title,n=void 0===a?"":a,i="undefined"!=typeof window&&(window.location.pathname.includes("/es/")||!!window.location.pathname.match(/^.*\/es$/));return Object(c.c)(l.a,{pageTitle:n},n&&Object(c.c)("h2",null,i?"Mostrando entradas para:":"Showing posts for:"," ",Object(c.c)("span",{sx:{color:"secondary"}},n)),Object(c.c)("ul",{sx:{variant:"list.blogroll"}},e.map((function(t){var e=t.title,a=t.path,n=t.tags,l=t.created,r=t.category,p=t.excerpt,u=t.language;return Object(c.c)("li",{key:a},Object(c.c)("div",null,Object(c.c)("h2",{className:"title"},Object(c.c)(s.a,{to:a},e)),Object(c.c)("p",{className:"taxonomy"},i?"Publicado en:":"Posted in:"," ",Object(c.c)(s.a,{to:"es"===u?"/es"+r.path:r.path},r.name)),n&&Object(c.c)("p",{className:"taxonomy"},i?"Etiquetado en:":"Tagged under:"," ",n.map((function(t,e,a){var n=t.name,l=t.path;return Object(c.c)(o.a.Fragment,{key:l},Object(c.c)(s.a,{to:"es"===u?"/es"+l:l},n),e<a.length-1&&", ")}))),p&&Object(c.c)("p",{className:"excerpt"},p)),Object(c.c)("div",{className:"timestamp"},l))}))))}},RXBc:function(t,e,a){"use strict";a.r(e);var c=a("oj0F"),n=a("Bl7J"),o=a("B9+q");e.default=function(t){var e=t.data.allPostsPage.posts;return e.length?Object(c.c)(o.a,{posts:e}):Object(c.c)(n.a,null,Object(c.c)("h2",null,"No posts found."))}}}]);
//# sourceMappingURL=component---src-pages-index-js-87ccea9a89742f2e7afe.js.map