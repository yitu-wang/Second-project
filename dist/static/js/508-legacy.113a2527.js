(self["webpackChunkwymusic"]=self["webpackChunkwymusic"]||[]).push([[508],{9028:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center"},[t._m(0),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.playListMusic,stripe:""}},[n("el-table-column",{attrs:{type:"index",label:"序号",width:"100"}}),n("el-table-column",{attrs:{label:"歌名",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"musicItem",staticStyle:{cursor:"pointer"},on:{click:function(n){return t.$router.push({path:"/discover/music",query:{id:e.row.id}})}}},[t._v(" "+t._s(e.row.name)+" ")])]}}])}),n("el-table-column",{attrs:{label:"作者",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.program?n("div",{staticClass:"musicItem",on:{click:function(n){return t.$router.push({path:"/discover/singer",query:{id:e.row.artists[0].id}})}}},[t._v(" "+t._s(e.row.artists[0].name)+" ")]):n("div",{staticClass:"musicItem",on:{click:function(n){return t.$router.push({path:"/discover/singer",query:{id:e.row.ar[0].id}})}}},[t._v(" "+t._s(e.row.ar[0].name)+" ")])]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-video-play",attrs:{title:"播放"},on:{click:function(n){return t.musicItemPush(e.$index)}}}),n("i",{staticClass:"el-icon-share",attrs:{title:"分享"}}),n("i",{staticClass:"el-icon-download",attrs:{title:"下载"}})]}}])})],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h3",[t._v("歌曲列表")])])}],r=n(1863),a=n(9873),c=n(1797),u=n(5598),l=n(629),o={data:function(){return{}},props:{playListMusic:{type:Array,deep:!0},program:{type:Boolean}},methods:(0,c.Z)((0,c.Z)({},(0,l.OI)(["musicListFn","musicUrlFn","musicDetailFn","musicItemFn","clearMusicListFn"])),{},{musicItemPush:function(t){var e=this;return(0,a.Z)((0,r.Z)().mark((function n(){var s,i,a;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.playListMusic[t].id,n.next=3,(0,u._z)({id:s});case 3:return i=n.sent,e.musicUrlFn(i.data.data[0]),n.next=7,(0,u.Hk)({ids:s});case 7:a=n.sent,e.musicDetailFn(a.data.songs[0]),e.musicItemFn(a.data.songs[0]);case 10:case"end":return n.stop()}}),n)})))()}})},m=o,d=n(1001),v=(0,d.Z)(m,s,i,!1,null,"32c6347d",null),p=v.exports},7508:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"container"},[n("div",{staticClass:"left"},[n("div",{staticClass:"header"},[t.musicDetil.al?n("div",{staticClass:"left"},[n("img",{attrs:{src:t.musicDetil.al.picUrl,alt:""}})]):t._e(),t.musicDetil.ar?n("div",{staticClass:"right"},[n("h3",[t._v(t._s(t.musicDetil.name))]),n("div",{staticClass:"auther"},[n("p",[t._v("歌手:"+t._s(t.musicDetil.ar[0].name))]),n("p",[t._v("所属专辑:"+t._s(t.musicDetil.al.name))])]),n("div",{staticClass:"btn"},[n("button",[n("i",{staticClass:"el-icon-video-play",on:{click:t.playMusicFn}},[t._v(" 播放")])]),t._m(0),t._m(1),n("button",[n("i",{staticClass:"el-icon-chat-line-square"},[t._v(" ("+t._s(t.total)+")")])])]),n("p",{staticClass:"text",staticStyle:{"white-space":"pre-wrap"},domProps:{innerHTML:t._s(t.musicLyric)}})]):t._e()]),n("div",{staticClass:"footer center"},[n("div",{staticClass:"header"},[n("h3",[t._v("评论")]),n("span",[t._v("共"+t._s(t.total)+"条评论")])]),n("div",{staticClass:"userText"},[n("img",{attrs:{src:t.squareUrl,alt:""}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{name:"usertext",cols:"30",rows:"10"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),n("button",{on:{click:t.addCommentFn}},[t._v("评论")])]),n("div",{staticClass:"footer"},[n("h4",[t._v("最热评论("+t._s(t.hotcomment.length)+")")]),n("ul",t._l(t.hotcomment,(function(e){return n("li",{key:e.commentId},[n("img",{attrs:{src:e.user.avatarUrl,alt:""}}),n("p",{staticClass:"name"},[t._v(t._s(e.user.nickname))]),n("span",{staticClass:"content"},[t._v(t._s(e.content))]),n("span",{staticClass:"time"},[t._v(t._s(e.timeStr))]),n("div",{staticClass:"fun"},[n("i",{staticClass:"el-icon-thumb"}),n("span",{staticClass:"back"},[t._v("("+t._s(e.likedCount)+") | 回复")])])])})),0),n("h4",[t._v("最新评论")]),n("ul",t._l(t.newcomment,(function(e){return n("li",{key:e.commentId},[n("img",{attrs:{src:e.user.avatarUrl,alt:""}}),n("p",{staticClass:"name"},[t._v(t._s(e.user.nickname))]),n("span",{staticClass:"content"},[t._v(t._s(e.content))]),n("span",{staticClass:"time"},[t._v(t._s(e.timeStr))]),n("div",{staticClass:"fun"},[n("i",{staticClass:"el-icon-thumb"}),n("span",{staticClass:"back"},[t._v("("+t._s(e.likedCount)+") | 回复")])])])})),0)])])]),n("div",{staticClass:"right"},[n("h4",[t._v("   包含这首歌的歌单")]),n("ul",t._l(t.sameList,(function(e){return n("li",{key:e.id,on:{click:function(n){return t.$router.push({path:"/discover/playdetil",query:{id:e.id}})}}},[n("img",{attrs:{src:e.coverImgUrl,alt:""}}),n("h5",[t._v(t._s(e.name))]),n("span",[t._v("by:"+t._s(e.creator.nickname))])])})),0),n("h4",[t._v("   相似歌曲")]),n("ul",t._l(t.sameMusic,(function(e){return n("li",{key:e.id},[n("img",{attrs:{src:e.album.blurPicUrl,alt:""},on:{click:function(n){return t.$router.push({path:"/discover/music",query:{id:e.id}})}}}),n("h5",[t._v(t._s(e.name))]),t._m(2,!0)])})),0)])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",[n("i",{staticClass:"el-icon-folder-add"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",[n("i",{staticClass:"el-icon-share"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v("播放"),n("i",{staticClass:"el-icon-caret-right"})])}],r=n(1863),a=n(9873),c=n(1797),u=(n(4916),n(3123),n(1539),n(4747),n(7042),n(9600),n(5598)),l=n(629),o=(n(9028),{name:"musicDetil",data:function(){return{musicLyric:"",musicDetil:{},hotcomment:[],newcomment:[],total:0,sameList:[],sameMusic:[],content:""}},methods:(0,c.Z)((0,c.Z)({},(0,l.OI)(["musicListFn","musicUrlFn","musicDetailFn","musicItemFn","clearMusicListFn"])),{},{playMusicFn:function(){var t=this;return(0,a.Z)((0,r.Z)().mark((function e(){var n,s,i;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.query.id,e.next=3,(0,u._z)({id:n});case 3:return s=e.sent,t.musicUrlFn(s.data.data[0]),e.next=7,(0,u.Hk)({ids:n});case 7:i=e.sent,t.musicDetailFn(i.data.songs[0]),t.musicItemFn(i.data.songs[0]);case 10:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return(0,a.Z)((0,r.Z)().mark((function e(){var n,s,i,a,c,l,o,m;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.query.id,e.next=3,(0,u.Hk)({ids:n});case 3:return s=e.sent,t.musicDetil=s.data.songs[0],e.next=7,(0,u.NW)({id:n});case 7:return i=e.sent,a=i.data.lrc.lyric.split("\n"),c=[],a.forEach((function(t){c.push(t.slice(11))})),a=c.join("\n"),t.musicLyric=a,e.next=15,(0,u.AM)({id:n});case 15:return l=e.sent,t.hotcomment=l.data.hotComments,t.newcomment=l.data.comments,t.total=l.data.total,e.next=21,(0,u.f8)({id:n});case 21:return o=e.sent,t.sameList=o.data.playlists,e.next=25,(0,u.HT)({id:n});case 25:m=e.sent,t.sameMusic=m.data.songs;case 27:case"end":return e.stop()}}),e)})))()},addCommentFn:function(){var t=this;return(0,a.Z)((0,r.Z)().mark((function e(){var n,s;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""==t.content){e.next=13;break}return n=t.$route.query.id,e.next=4,(0,u.Sj)({type:0,id:n,content:t.content});case 4:return e.sent,t.content="",e.next=8,(0,u.AM)({id:n});case 8:s=e.sent,t.hotcomment=s.data.hotComments,t.newcomment=s.data.comments,t.total=s.data.total,localStorage.getItem("userid")?t.$notify({message:"评论成功",type:"success"}):t.$notify.error({message:"评论失败,请先登录"});case 13:case"end":return e.stop()}}),e)})))()}}),created:function(){var t=this;return(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getData();case 1:case"end":return e.stop()}}),e)})))()},activated:function(){this.getData()},computed:(0,c.Z)({},(0,l.rn)(["squareUrl"]))}),m=o,d=n(1001),v=(0,d.Z)(m,s,i,!1,null,"30e453b0",null),p=v.exports},1530:function(t,e,n){"use strict";var s=n(8710).charAt;t.exports=function(t,e,n){return e+(n?s(t,e).length:1)}},7007:function(t,e,n){"use strict";n(4916);var s=n(1702),i=n(8052),r=n(2261),a=n(7293),c=n(5112),u=n(8880),l=c("species"),o=RegExp.prototype;t.exports=function(t,e,n,m){var d=c(t),v=!a((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),p=v&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!v||!p||n){var f=s(/./[d]),h=e(d,""[t],(function(t,e,n,i,a){var c=s(t),u=e.exec;return u===r||u===o.exec?v&&!a?{done:!0,value:f(e,n,i)}:{done:!0,value:c(n,e,i)}:{done:!1}}));i(String.prototype,t,h[0]),i(o,d,h[1])}m&&u(o[d],"sham",!0)}},7850:function(t,e,n){var s=n(111),i=n(4326),r=n(5112),a=r("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},7651:function(t,e,n){var s=n(6916),i=n(9670),r=n(614),a=n(4326),c=n(2261),u=TypeError;t.exports=function(t,e){var n=t.exec;if(r(n)){var l=s(n,t,e);return null!==l&&i(l),l}if("RegExp"===a(t))return s(c,t,e);throw u("RegExp#exec called on incompatible receiver")}},9600:function(t,e,n){"use strict";var s=n(2109),i=n(1702),r=n(8361),a=n(5656),c=n(9341),u=i([].join),l=r!=Object,o=c("join",",");s({target:"Array",proto:!0,forced:l||!o},{join:function(t){return u(a(this),void 0===t?",":t)}})},3123:function(t,e,n){"use strict";var s=n(2104),i=n(6916),r=n(1702),a=n(7007),c=n(7850),u=n(9670),l=n(4488),o=n(6707),m=n(1530),d=n(7466),v=n(1340),p=n(8173),f=n(1589),h=n(7651),_=n(2261),g=n(2999),x=n(7293),y=g.UNSUPPORTED_Y,C=4294967295,w=Math.min,b=[].push,k=r(/./.exec),Z=r(b),F=r("".slice),I=!x((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));a("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=v(l(this)),a=void 0===n?C:n>>>0;if(0===a)return[];if(void 0===t)return[r];if(!c(t))return i(e,r,t,a);var u,o,m,d=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,p+"g");while(u=i(_,g,r)){if(o=g.lastIndex,o>h&&(Z(d,F(r,h,u.index)),u.length>1&&u.index<r.length&&s(b,d,f(u,1)),m=u[0].length,h=o,d.length>=a))break;g.lastIndex===u.index&&g.lastIndex++}return h===r.length?!m&&k(g,"")||Z(d,""):Z(d,F(r,h)),d.length>a?f(d,0,a):d}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:i(e,this,t,n)}:e,[function(e,n){var s=l(this),a=void 0==e?void 0:p(e,t);return a?i(a,e,s,n):i(r,v(s),e,n)},function(t,s){var i=u(this),a=v(t),c=n(r,i,a,s,r!==e);if(c.done)return c.value;var l=o(i,RegExp),p=i.unicode,f=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(y?"g":"y"),_=new l(y?"^(?:"+i.source+")":i,f),g=void 0===s?C:s>>>0;if(0===g)return[];if(0===a.length)return null===h(_,a)?[a]:[];var x=0,b=0,k=[];while(b<a.length){_.lastIndex=y?0:b;var I,D=h(_,y?F(a,b):a);if(null===D||(I=w(d(_.lastIndex+(y?b:0)),a.length))===x)b=m(a,b,p);else{if(Z(k,F(a,x,b)),k.length===g)return k;for(var $=1;$<=D.length-1;$++)if(Z(k,D[$]),k.length===g)return k;b=x=I}}return Z(k,F(a,x)),k}]}),!I,y)}}]);
//# sourceMappingURL=508-legacy.113a2527.js.map