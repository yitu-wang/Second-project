"use strict";(self["webpackChunkwymusic"]=self["webpackChunkwymusic"]||[]).push([[995],{995:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("div",{staticClass:"left"},t._l(t.singerList,(function(e,n){return i("div",{key:n,staticClass:"item"},[i("h3",[t._v(t._s(e.name))]),i("ul",t._l(e.child,(function(e,r){return i("li",{key:n+"-"+r,class:{check:t.listIndex==n+"-"+r},on:{click:function(i){return t.changeListFn(n+"-"+r,e,r,n)}}},[t._v(" "+t._s(e)+" ")])})),0)])})),0),i("div",{staticClass:"right"},[i("router-view")],1)])},r=[],a=i(1797),s=(i(8862),i(4660),i(629)),c={data:function(){return{singerList:[{name:"推荐",child:["推荐歌手","入驻歌手"]},{name:"华语",child:["华语男歌手","华语女歌手","华语组合乐队"]},{name:"欧美",child:["欧美男歌手","欧美女歌手","欧美组合乐队"]},{name:"日本",child:["日本男歌手","日本女歌手","日本组合乐队"]},{name:"韩国",child:["韩国男歌手","韩国女歌手","韩国组合乐队"]},{name:"其他",child:["其他男歌手","其他女歌手","其他组合乐队"]}],listIndex:"0-0"}},watch:{$route:{handler:function(t){if("/discover/artist/"===t.path)this.listIndex="0-0";else if("/discover/artist/signed"===t.path)this.listIndex="0-1";else{var e=JSON.parse(JSON.stringify(this.$route.query)),i=0,n=0;7==e.area?i=1:96==e.area?i=2:8==e.area?i=3:16==e.area?i=4:0==e.area&&(i=5),n=e.type-1,this.listIndex="".concat(i,"-").concat(n)}},immediate:!0}},methods:(0,a.Z)((0,a.Z)({},(0,s.OI)(["singerCatFn"])),{},{changeListFn:function(t,e,i,n){if(this.singerCatFn(e),"入驻歌手"===e)this.$router.push({path:"/discover/artist/signed"});else if("推荐歌手"===e)this.$router.push({path:"/discover/artist/"});else{var r=0;r=1===n?7:2===n?96:3===n?8:4===n?16:0,this.$router.push({path:"/discover/artist/cat",query:{type:i+1,area:r,initial:-1}})}}})},u=c,l=i(1001),o=(0,l.Z)(u,n,r,!1,null,"9f2b0032",null),h=o.exports},4660:function(t,e,i){var n=i(2109),r=i(7293),a=i(3157),s=i(111),c=i(7908),u=i(6244),l=i(7207),o=i(6135),h=i(5417),d=i(1194),f=i(5112),v=i(7392),p=f("isConcatSpreadable"),m=v>=51||!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=d("concat"),y=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:a(t)},C=!m||!g;n({target:"Array",proto:!0,arity:1,forced:C},{concat:function(t){var e,i,n,r,a,s=c(this),d=h(s,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?s:arguments[e],y(a))for(r=u(a),l(f+r),i=0;i<r;i++,f++)i in a&&o(d,f,a[i]);else l(f+1),o(d,f++,a);return d.length=f,d}})}}]);
//# sourceMappingURL=995-legacy.8dea26a9.js.map