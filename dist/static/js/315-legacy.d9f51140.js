"use strict";(self["webpackChunkwymusic"]=self["webpackChunkwymusic"]||[]).push([[315],{4093:function(t,n,e){e.d(n,{Z:function(){return f}});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("img",{attrs:{src:t.item.coverImgUrl}}),e("span",{staticClass:"play"},[e("i",{staticClass:"el-icon-headset"},[t._v(" "+t._s(t.item.playCount>1e4?Math.round(t.item.playCount/1e4)+"万":t.item.playCount)+" ")]),e("i",{staticClass:"el-icon-video-play",on:{click:function(n){return n.stopPropagation(),t.MusicFn(t.item.id)}}})]),e("h5",[t._v(t._s(t.item.name))])])},s=[],i=e(1863),r=e(9873),c=e(1797),l=e(5598),o=e(629),u={name:"playItem",props:{item:{}},methods:(0,c.Z)((0,c.Z)({},(0,o.OI)(["musicListFn","musicUrlFn","musicDetailFn","musicItemFn"])),{},{MusicFn:function(t){var n=this;return(0,r.Z)((0,i.Z)().mark((function e(){var a,s,r,c;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,l.d6)({id:t});case 2:return a=e.sent,n.musicListFn(a.data.songs),s=a.data.songs[0].id,e.next=7,(0,l._z)({id:s});case 7:return r=e.sent,n.musicUrlFn(r.data.data[0]),e.next=11,(0,l.Hk)({ids:s});case 11:c=e.sent,n.musicDetailFn(c.data.songs[0]),n.musicItemFn(c.data.songs[0]);case 14:case"end":return e.stop()}}),e)})))()}})},p=u,m=e(1001),d=(0,m.Z)(p,a,s,!1,null,"fda33b32",null),f=d.exports},315:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"top"},[e("h3",[t._v(t._s(t.name))]),e("el-dropdown",[e("el-button",{attrs:{size:"small",type:"primary"}},[t._v(" 分类"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{staticStyle:{"margin-left":"20px"}},t._l(t.catListPlay.categories,(function(n,a){return e("li",{key:a,staticStyle:{"margin-left":"10px"}},[e("h4",{staticStyle:{"font-size":"18px",display:"inline-block"}},[t._v(t._s(n)+":")]),e("div",{staticStyle:{display:"inline-block"}},t._l(t.catListPlay.sub.filter((function(t){return t.category==a})),(function(n){return e("span",{staticStyle:{margin:"0 10px",cursor:"pointer"},on:{click:function(e){t.name=n.name}}},[t._v(t._s(n.name)+" ")])})),0)])})),0)],1),e("button",{staticClass:"hot",on:{click:function(n){t.name="全部"}}},[t._v("全部歌单")])],1),t.flag?e("el-skeleton",{attrs:{rows:12,animated:""}}):t._e(),e("div",{staticClass:"con"},t._l(t.topPlayList,(function(n){return e("PlayItem",{key:n.id,staticClass:"playItem",attrs:{item:n},nativeOn:{click:function(e){return t.$router.push({path:"/discover/playdetil",query:{id:n.id}})}}})})),1),e("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":35,"current-page":t.count,total:t.total},on:{"current-change":t.currentChangeFn}})],1)},s=[],i=e(1863),r=e(9873),c=(e(8309),e(5598)),l=e(4093),o={name:"playList",data:function(){return{catListPlay:{},topPlayList:[],total:0,count:1,name:"全部",flag:!0}},created:function(){var t=this;return(0,r.Z)((0,i.Z)().mark((function n(){var e,a;return(0,i.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,c.j9)();case 2:return e=n.sent,t.catListPlay=e.data,n.next=6,(0,c.SL)({order:"hot",cat:t.name,limit:35});case 6:a=n.sent,t.topPlayList=a.data.playlists,t.total=a.data.total,t.flag=!1;case 10:case"end":return n.stop()}}),n)})))()},methods:{currentChangeFn:function(t){var n=this;return(0,r.Z)((0,i.Z)().mark((function e(){var a;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.count=t,e.next=3,(0,c.SL)({order:"hot",cat:n.name,limit:35,offset:35*n.count});case 3:a=e.sent,n.topPlayList=a.data.playlists;case 5:case"end":return e.stop()}}),e)})))()}},components:{PlayItem:l.Z},watch:{name:{handler:function(){var t=this;return(0,r.Z)((0,i.Z)().mark((function n(){var e;return(0,i.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.count=1,n.next=3,(0,c.SL)({order:"hot",cat:t.name,limit:35});case 3:e=n.sent,t.topPlayList=e.data.playlists;case 5:case"end":return n.stop()}}),n)})))()}}}},u=o,p=e(1001),m=(0,p.Z)(u,a,s,!1,null,"539c95dc",null),d=m.exports}}]);
//# sourceMappingURL=315-legacy.d9f51140.js.map