"use strict";(self["webpackChunkwymusic"]=self["webpackChunkwymusic"]||[]).push([[99],{4099:function(t,s,a){a.r(s),a.d(s,{default:function(){return d}});var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"djcat"},[t.hotList.length>0?a("div",{staticClass:"hot"},[t._m(0),a("ul",t._l(t.hotList,(function(s){return a("li",{key:s.id},[a("img",{attrs:{src:s.picUrl,alt:""},on:{click:function(a){return t.$router.push({path:"/discover/djradiodetil",query:{id:s.id}})}}}),a("p",[t._v(t._s(s.name))]),a("span",[t._v(t._s(s.rcmdtext))])])})),0)]):t._e(),a("div",{staticClass:"hot top"},[t._m(1),t.topList.length>0?a("ul",t._l(t.topList,(function(s){return a("li",{key:s.id},[a("img",{attrs:{src:s.picUrl,alt:""},on:{click:function(a){return t.$router.push({path:"/discover/djradiodetil",query:{id:s.id}})}}}),a("div",{staticClass:"right"},[a("p",{staticClass:"title"},[t._v(t._s(s.name))]),a("span",{staticClass:"author"},[a("i",{staticClass:"el-icon-user"}),t._v(" "+t._s(s.dj.nickname))]),a("span",{staticClass:"count"},[t._v(t._s(s.rcmdtext))]),a("span",{staticClass:"like"},[t._v("订阅次数"+t._s(s.subCount)+"次")])])])})),0):a("div",{staticClass:"none"},[t._v("没有更多数据")]),a("el-pagination",{attrs:{"current-page":t.pages,background:"",layout:"prev, pager, next","page-size":22,total:t.total,"hide-on-single-page":""},on:{"update:currentPage":function(s){t.pages=s},"update:current-page":function(s){t.pages=s},"current-change":t.change}})],1)])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"nav"},[a("h3",[t._v("优秀新电台")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"nav"},[a("h3",[t._v("电台排行榜")])])}],n=a(5598),c={name:"djradiocate",data(){return{hotList:[],topList:[],total:0,pages:1}},async created(){const t=await(0,n.Pw)({type:this.$route.query.id});this.hotList=t.data.djRadios.slice(0,5);const s=await(0,n.mG)({limit:22,offset:0,cateId:this.$route.query.id});this.topList=s.data.djRadios,this.total=s.data.count},watch:{async $route(){const t=await(0,n.Pw)({type:this.$route.query.id});this.hotList=t.data.djRadios.slice(0,5);const s=await(0,n.mG)({cateId:this.$route.query.id,limit:22,offset:0});this.pages=1,this.total=s.data.count,this.topList=s.data.djRadios}},methods:{async change(t){this.pages=t,t-=1;const s=await(0,n.mG)({cateId:this.$route.query.id,limit:22,offset:22*t});this.topList=s.data.djRadios}}},r=c,o=a(1001),u=(0,o.Z)(r,i,e,!1,null,"0eee4ef4",null),d=u.exports}}]);
//# sourceMappingURL=99.f5236f4b.js.map