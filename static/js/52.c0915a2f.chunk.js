"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[52],{919:function(e,t,r){var n=r(861),i=r(757),a=r.n(i),u=r(340);function o(){return(o=(0,n.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/trending/movie/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k"}},e.next=3,u.Z.request(t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return(s=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:t,include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k"}},n=u.Z.request(r),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t),params:{language:"en-US",movie_id:t},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k"}},n=u.Z.request(r),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t,"/credits"),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k"}},n=u.Z.request(r),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k"}},n=u.Z.request(r),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l={POSTER_BASE_URL:"https://image.tmdb.org/t/p/w400",PORTRAIT_BASE_URL:"https://image.tmdb.org/t/p/w200",DEFAULT_IMG:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",getTrendingToday:function(){return o.apply(this,arguments)},searchThisMovie:function(e){return s.apply(this,arguments)},getMovieDetails:function(e){return c.apply(this,arguments)},getMovieCredits:function(e){return h.apply(this,arguments)},getMovieReviews:function(e){return p.apply(this,arguments)}};t.Z=l},126:function(e,t,r){r(791);var n=r(689),i=r(87),a=r(184);t.Z=function(e){var t=e.data,r=(0,n.TH)();return t?(0,a.jsx)("ul",{className:"movie-list",children:t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(i.rU,{to:"/movies/".concat(e.id),state:{from:r},children:e.title||e.name})},e.id)}))}):(0,a.jsx)("p",{children:"Not results"})}},52:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(439),i=r(919),a=r(126),u=r(791),o=r(184);var s=function(e){var t=e.handleQuery,r=(0,u.useState)(""),i=(0,n.Z)(r,2),a=i[0],s=i[1];return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a)},children:[(0,o.jsx)("input",{type:"text",value:a,onChange:function(e){e.preventDefault(),s(e.target.value)},placeholder:"Enter movie name"}),(0,o.jsx)("button",{type:"submit",children:"Search"})]})},c=r(87);var h=function(){var e=(0,c.lr)(),t=(0,n.Z)(e,2),r=t[0],h=t[1],p=(0,u.useState)(r.get("query")||""),l=(0,n.Z)(p,2),j=l[0],I=l[1],d=(0,u.useState)([]),f=(0,n.Z)(d,2),Z=f[0],m=f[1];return(0,u.useEffect)((function(){j&&i.Z.searchThisMovie(j).then((function(e){return m(e.data.results)}))}),[j]),(0,o.jsxs)("div",{children:[(0,o.jsx)(s,{handleQuery:function(e){I(e),e&&h({query:e})}}),(0,o.jsx)(a.Z,{data:Z.length&&Z})]})}}}]);
//# sourceMappingURL=52.c0915a2f.chunk.js.map