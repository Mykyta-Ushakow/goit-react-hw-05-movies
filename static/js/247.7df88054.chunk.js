"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{919:function(e,t,r){var n=r(861),a=r(757),i=r.n(a),s=r(340);function c(){return(c=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/trending/movie/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k"}},e.next=3,s.Z.request(t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:t,include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k"}},n=s.Z.request(r),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t),params:{language:"en-US",movie_id:t},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k"}},n=s.Z.request(r),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t,"/credits"),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k"}},n=s.Z.request(r),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTVjNjFiZGZjOWY1MzQzZGJhZjlmMDk4YjgwMzIwNSIsInN1YiI6IjY1NzFiNDYyZGZlMzFkMDBlMGRhODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7b1Onj3S4rejgz3a-Fgiu_T_4won42jiMVkH8TtyT9k"}},n=s.Z.request(r),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l={POSTER_BASE_URL:"https://image.tmdb.org/t/p/w400",PORTRAIT_BASE_URL:"https://image.tmdb.org/t/p/w200",DEFAULT_IMG:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",getTrendingToday:function(){return c.apply(this,arguments)},searchThisMovie:function(e){return o.apply(this,arguments)},getMovieDetails:function(e){return u.apply(this,arguments)},getMovieCredits:function(e){return h.apply(this,arguments)},getMovieReviews:function(e){return p.apply(this,arguments)}};t.Z=l},247:function(e,t,r){r.r(t);var n=r(439),a=r(919),i=r(791),s=r(689),c=r(184);t.default=function(){var e=(0,s.UO)().movieId,t=(0,i.useState)([]),r=(0,n.Z)(t,2),o=r[0],u=r[1];return(0,i.useEffect)((function(){a.Z.getMovieCredits(e).then((function(e){u(e.data.cast)}))}),[e]),(0,c.jsx)("div",{className:"cast-wrap",children:o.length?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{children:"Cast"}),(0,c.jsx)("ul",{className:"cast-list",children:o.map((function(e){return(0,c.jsxs)("li",{className:"cast-card",children:[(0,c.jsx)("img",{src:e.profile_path?a.Z.PORTRAIT_BASE_URL+e.profile_path:a.Z.DEFAULT_IMG,alt:e.name,className:"cast-pic"}),(0,c.jsx)("b",{className:"cast-name",children:e.name}),(0,c.jsxs)("p",{className:"cast-text",children:["As ",e.character||"unknown"]})]},e.id)}))})]}):(0,c.jsx)("h3",{children:"No known cast"})})}}}]);
//# sourceMappingURL=247.7df88054.chunk.js.map