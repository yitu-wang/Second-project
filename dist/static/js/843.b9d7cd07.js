"use strict";(self["webpackChunkwymusic"]=self["webpackChunkwymusic"]||[]).push([[843],{6982:function(t,e,i){i.d(e,{Z:function(){return c}});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box1"},[i("div",{staticClass:"footer"},t._l(t.footerList,(function(e){return i("span",{key:e.id,on:{click:function(i){return t.$router.push({path:"/discover/singer",query:{id:e.id}})}}},[t._v(" "+t._s(e.name)+" ")])})),0)])},s=[],a={props:{footerList:{type:Array,deep:!0}}},n=a,o=i(1001),u=(0,o.Z)(n,r,s,!1,null,"6b1d415f",null),c=u.exports},1004:function(t,e,i){i.d(e,{Z:function(){return c}});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box1"},[i("div",{staticClass:"item1"},[i("div",{staticClass:"top"},[i("h3",[t._t("default",(function(){return[t._v("推荐歌手")]}))],2)]),t.navshow?i("div",{staticClass:"nav"},t._l(t.nav,(function(e,r){return i("span",{key:r,class:{checkNav:t.idx===e},on:{click:function(i){return t.navChangeFn(e,r)}}},[t._v(t._s(e))])})),0):t._e(),i("ul",t._l(t.hotList,(function(e){return i("li",{key:e.id,on:{click:function(i){return t.$router.push({path:"/discover/singer",query:{id:e.id}})}}},[i("img",{attrs:{src:e.img1v1Url,alt:""}}),i("span",[t._v(t._s(e.name))])])})),0)])])},s=[],a={props:{hotList:{type:Array,deep:!0},navshow:{type:Boolean,default:!1}},methods:{navChangeFn(t,e){"其他"===t?t=0:"热门"===t&&(t=-1);const i=JSON.parse(JSON.stringify(this.$route.query));i.initial=t,this.$router.push({path:this.$route.path,query:i})}},data(){return{nav:["热门","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","其他"],idx:"热门"}},watch:{$route:{handler(){const t=JSON.parse(JSON.stringify(this.$route.query));-1==t.initial?this.idx="热门":0==t.initial?this.idx="其他":this.idx=t.initial},immediate:!0,deep:!0}}},n=a,o=i(1001),u=(0,o.Z)(n,r,s,!1,null,"14b145dc",null),c=u.exports},3843:function(t,e,i){i.r(e),i.d(e,{default:function(){return d}});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box1"},[i("ArtistList",{attrs:{hotList:t.hotList,navshow:!0}},[t._v(" "+t._s(t.cat)+" ")]),i("ArtistFooter",{attrs:{footerList:t.footerList}})],1)},s=[],a=i(5598),n=i(1004),o=i(6982),u={components:{ArtistList:n.Z,ArtistFooter:o.Z},data(){return{hotList:[],footerList:[],cat:""}},async created(){},computed:{},watch:{$route:{async handler(){const t=await(0,a.NF)({limit:100,initial:this.$route.query.initial,type:this.$route.query.type,area:this.$route.query.area});this.hotList=t.data.artists.slice(0,10),this.footerList=t.data.artists.slice(10);const e=JSON.parse(JSON.stringify(this.$route.query));let i="",r="";r=1==e.type?"男歌手":2==e.type?"女歌手":"其他乐队",7==e.area?i="华语":96==e.area?i="欧美":8==e.area?i="日本":16==e.area?i="韩国":0==e.area&&(i="其他"),this.cat=`${i}${r}`},immediate:!0,deep:!0}}},c=u,l=i(1001),h=(0,l.Z)(c,r,s,!1,null,"47176bb3",null),d=h.exports}}]);
//# sourceMappingURL=843.b9d7cd07.js.map