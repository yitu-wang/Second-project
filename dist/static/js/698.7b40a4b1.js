"use strict";(self["webpackChunkwymusic"]=self["webpackChunkwymusic"]||[]).push([[698],{9028:function(t,s,a){a.d(s,{Z:function(){return o}});var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"center"},[t._m(0),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.playListMusic,stripe:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"100"}}),a("el-table-column",{attrs:{label:"歌名",width:"200"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("div",{staticClass:"musicItem",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.$router.push({path:"/discover/music",query:{id:s.row.id}})}}},[t._v(" "+t._s(s.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{label:"作者",width:"200"},scopedSlots:t._u([{key:"default",fn:function(s){return[t.program?a("div",{staticClass:"musicItem",on:{click:function(a){return t.$router.push({path:"/discover/singer",query:{id:s.row.artists[0].id}})}}},[t._v(" "+t._s(s.row.artists[0].name)+" ")]):a("div",{staticClass:"musicItem",on:{click:function(a){return t.$router.push({path:"/discover/singer",query:{id:s.row.ar[0].id}})}}},[t._v(" "+t._s(s.row.ar[0].name)+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("i",{staticClass:"el-icon-video-play",attrs:{title:"播放"},on:{click:function(a){return t.musicItemPush(s.$index)}}}),a("i",{staticClass:"el-icon-share",attrs:{title:"分享"}}),a("i",{staticClass:"el-icon-download",attrs:{title:"下载"}})]}}])})],1)],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header"},[a("h3",[t._v("歌曲列表")])])}],n=a(5598),l=a(629),c={data(){return{}},props:{playListMusic:{type:Array,deep:!0},program:{type:Boolean}},methods:{...(0,l.OI)(["musicListFn","musicUrlFn","musicDetailFn","musicItemFn","clearMusicListFn"]),async musicItemPush(t){let s=this.playListMusic[t].id;const a=await(0,n._z)({id:s});this.musicUrlFn(a.data.data[0]);const i=await(0,n.Hk)({ids:s});this.musicDetailFn(i.data.songs[0]),this.musicItemFn(i.data.songs[0])}}},u=c,r=a(1001),m=(0,r.Z)(u,i,e,!1,null,"32c6347d",null),o=m.exports},6698:function(t,s,a){a.r(s),a.d(s,{default:function(){return C}});var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"box"},[t.isShow?a("AlbumDetilItem",{attrs:{otherAlbum:t.otherAlbum,albumData:t.albumData,albumComment:t.albumComment}}):t._e()],1)},e=[],n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"box"},[a("div",{staticClass:"container"},[a("div",{staticClass:"left"},[a("div",{staticClass:"header"},[a("div",{staticClass:"left"},[a("span",{staticClass:"msk"},[a("img",{attrs:{src:t.albumData.album.blurPicUrl,alt:""}})])]),a("div",{staticClass:"right"},[a("h3",[t._v(t._s(t.albumData.album.name))]),a("div",{staticClass:"auther"},[a("p",[t._v("歌手: "+t._s(t.albumData.album.artist.name))]),a("p",[t._v("发行时间: "+t._s(t.formatDate(t.albumData.album.publishTime)))]),a("p",[t._v("发行公司: "+t._s(t.albumData.album.company))])]),a("div",{staticClass:"btn"},[a("button",[a("i",{staticClass:"el-icon-video-play",on:{click:t.playMusicFn}},[t._v(" 播放")])]),a("button",[a("i",{staticClass:"el-icon-folder-add"},[t._v(" ("+t._s(t.albumData.album.info.commentCount)+")")])]),t._m(0),a("button",[a("i",{staticClass:"el-icon-chat-line-square"},[t._v(" ("+t._s(t.albumComment.total)+")")])])]),a("p",{staticClass:"text",domProps:{innerHTML:t._s(t.albumData.album.description)}})])]),a("MusicList",{attrs:{playListMusic:t.albumData.songs}}),a("div",{staticClass:"footer center"},[a("div",{staticClass:"header"},[a("h3",[t._v("评论")]),a("span",[t._v("共"+t._s(t.albumComment.total)+"条评论")])]),a("div",{staticClass:"userText"},[a("img",{attrs:{src:t.squareUrl,alt:""}}),a("textarea",{attrs:{name:"usertext",cols:"30",rows:"10"}}),a("button",[t._v("评论")])]),a("div",{staticClass:"footer"},[a("h4",[t._v("最热评论("+t._s(t.albumComment.hotComments.length)+")")]),a("ul",t._l(t.albumComment.hotComments,(function(s){return a("li",{key:s.commentId},[a("img",{attrs:{src:s.user.avatarUrl,alt:""}}),a("p",{staticClass:"name"},[t._v(t._s(s.user.nickname))]),a("span",{staticClass:"content"},[t._v(t._s(s.content))]),a("span",{staticClass:"time"},[t._v(t._s(s.timeStr))]),a("div",{staticClass:"fun"},[a("i",{staticClass:"el-icon-thumb"}),a("span",{staticClass:"back"},[t._v("("+t._s(s.likedCount)+") | 回复")])])])})),0),a("h4",[t._v("最新评论("+t._s(t.albumComment.comments.length)+")")]),a("ul",t._l(t.albumComment.comments,(function(s){return a("li",{key:s.commentId},[a("img",{attrs:{src:s.user.avatarUrl,alt:""}}),a("p",{staticClass:"name"},[t._v(t._s(s.user.nickname))]),a("span",{staticClass:"content"},[t._v(t._s(s.content))]),a("span",{staticClass:"time"},[t._v(t._s(s.timeStr))]),a("div",{staticClass:"fun"},[a("i",{staticClass:"el-icon-thumb"}),a("span",{staticClass:"back"},[t._v("("+t._s(s.likedCount)+") | 回复")])])])})),0)])])],1),a("div",{staticClass:"right"},[a("h4",[t._v("   他/她的其他专辑")]),a("ul",t._l(t.otherAlbum,(function(s){return a("li",{key:s.id,on:{click:function(a){return t.$router.push({path:"/discover/albumdetail",query:{id:s.id}})}}},[a("img",{attrs:{src:s.picUrl,alt:""}}),a("h5",[t._v(t._s(s.name))]),a("span",[t._v(t._s(s.company))])])})),0)])])])},l=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",[a("i",{staticClass:"el-icon-share"})])}],c=a(9028),u=a(5598),r=a(629),m={data(){return{}},components:{MusicList:c.Z},props:{albumData:{type:Object,deep:!0},albumComment:{type:Object,deep:!0},otherAlbum:{type:Array,deep:!0}},methods:{...(0,r.OI)(["musicListFn","musicUrlFn","musicDetailFn","musicItemFn","clearMusicListFn"]),formatDate(t){let s=new Date(t),a=s.getFullYear(),i=s.getMonth(),e=s.getDate();s.getHours(),s.getMinutes(),s.getSeconds();return a+"-"+i+"-"+e},async playMusicFn(){this.clearMusicListFn(),this.musicListFn(this.albumData.songs);let t=this.albumData.songs[0].id;const s=await(0,u._z)({id:t});this.musicUrlFn(s.data.data[0]);const a=await(0,u.Hk)({ids:t});this.musicDetailFn(a.data.songs[0]),this.musicItemFn(a.data.songs[0])},async musicItemPush(t){let s=this.albumData.songs[t].id;const a=await(0,u._z)({id:s});this.musicUrlFn(a.data.data[0]);const i=await(0,u.Hk)({ids:s});this.musicDetailFn(i.data.songs[0]),this.musicItemFn(i.data.songs[0])}},computed:{...(0,r.rn)(["squareUrl"])}},o=m,d=a(1001),h=(0,d.Z)(o,n,l,!1,null,"58969830",null),b=h.exports,_={name:"albumDetil",data(){return{albumData:{},albumComment:[],otherAlbum:{},isShow:!1}},components:{AlbumDetilItem:b},methods:{async getData(){const t=await(0,u.QK)({id:this.$route.query.id});this.albumData=t.data;const s=await(0,u.DI)({id:this.$route.query.id});this.albumComment=s.data;const a=await(0,u.nj)({id:t.data.album.artist.id,limit:10});this.otherAlbum=a.data.hotAlbums}},async created(){this.getData(),this.isShow=!0},watch:{$route(){this.getData()}}},p=_,v=(0,d.Z)(p,i,e,!1,null,null,null),C=v.exports}}]);
//# sourceMappingURL=698.7b40a4b1.js.map