webpackJsonp([19],{Ojaf:function(t,e,a){t.exports=a.p+"static/img/callService.c48d3f9.png"},PeBE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"BusinessInformation",data:function(){return{show:!0,imageUrl:a("Ojaf"),QRUrl:a("RxeA")}},methods:{downloadIamgeMUI:function(t){var e=this;this.mui.plusReady(function(){plus.downloader.createDownload("http://47.52.151.96/images/2020/01/02/mtu3nzk2njuymtm0mjy4nw.jpg",{},function(t,a){200==a?plus.gallery.save(t.filename,function(){e.$toast("图片已保存本地。")},function(){e.$toast("图片已保存失败。")}):e.$toast("图片已保存失败。")}).start()})},cancelService:function(){this.$router.push({name:"home"})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-dialog",{staticClass:"service-box",attrs:{"show-cancel-button":"",cancelButtonText:"取消",confirmButtonText:"保存二维码",cancelButtonColor:"#1988FF",confirmButtonColor:"#fff"},on:{cancel:t.cancelService,confirm:t.downloadIamgeMUI},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"dialog-content",style:{backgroundImage:"url("+t.imageUrl+")"},attrs:{slot:"default"},slot:"default"},[a("img",{staticClass:"dialog-img",attrs:{src:t.QRUrl}}),t._v(" "),a("div",{staticClass:"dialog-tips"},[t._v("请使用微信扫描二维码，联系客服")]),t._v(" "),a("div",{staticClass:"dialog-but"})])])},staticRenderFns:[]};var s=a("VU/8")(n,o,!1,function(t){a("qm6j")},"data-v-01cbeb67",null);e.default=s.exports},RxeA:function(t,e,a){t.exports=a.p+"static/img/service.a080484.jpg"},qm6j:function(t,e){}});
//# sourceMappingURL=19.a459755c0d99fde9c14b.js.map