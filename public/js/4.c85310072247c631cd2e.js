webpackJsonp([4],{EbDR:function(t,e,r){"use strict";var n,o=(n=r("ML3S"))&&"object"==typeof n&&"default"in n?n.default:n,i=["scroll","resize"],a={name:"mugen-scroll",props:{handler:{type:Function,required:!0},shouldHandle:{type:Boolean,default:!0},threshold:{type:Number,default:0},handleOnMount:{type:Boolean,default:!0},scrollContainer:{type:String}},mounted:function(){this.checkInView()},methods:{checkInView:function(){var t=this,e=function(){var e=function(t,e){void 0===e&&(e={});var r=e.offset;void 0===r&&(r={});var n=e.threshold,o=t.getBoundingClientRect(),i=o.top,a=o.right,s=o.bottom,c=o.left,u=o.width,l=o.height,d=s,f=window.innerWidth-c,v=window.innerHeight-i,p=a,h=n*u,m=n*l;return d>=(r.top||0+m)&&f>=(r.right||0+h)&&v>=(r.bottom||0+m)&&p>=(r.left||0+h)}(t.$refs.scroll,{threshold:t.threshold});t.shouldHandle&&e&&t.handler()};if(this.handleOnMount&&e(),this.scrollContainer){for(var r=this;(r=r.$parent)&&!this._scrollContainer;)t._scrollContainer=r.$refs[t.scrollContainer];this._scrollContainer&&this._scrollContainer.$el&&(this._scrollContainer=this._scrollContainer.$el)}this._scrollContainer=this._scrollContainer||window,this.check=o(e,200),i.forEach(function(e){return t._scrollContainer.addEventListener(e,t.check)})}},render:function(t){return t("div",{staticClass:"mugen-scroll",ref:"scroll"},this.$slots.default)},beforeDestroy:function(){var t=this;i.forEach(function(e){return t._scrollContainer.removeEventListener(e,t.check)})}};"undefined"!=typeof window&&window.Vue&&window.Vue.component(a.name,a),t.exports=a},INzi:function(t,e,r){"use strict";var n={name:"NoResults",props:{message:{type:String,default:"Nu am gasit niciun rezultat",required:!0},to:{type:Object,default:null,required:!1}}},o=r("XyMi"),i=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"text-xs-center",attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm10:"",md8:"",lg6:""}},[r("div",{staticStyle:{"font-size":"2em","margin-bottom":"2rem"}},[r("span",[t._v(t._s(t.message))])]),t._v(" "),t.to?r("v-btn",{attrs:{to:{name:t.to.route},color:"indigo",dark:"",round:""}},[t._v("\n      "+t._s(t.to.name)+"\n    ")]):t._e()],1)],1)},[],!1,null,null,null);e.a=i.exports},ML3S:function(t,e){t.exports=function(t,e){var r,n,o,i,a=0;return function(){r=this,n=arguments;var t=new Date-a;return i||(t>=e?s():i=setTimeout(s,e-t)),o};function s(){i=0,a=+new Date,o=t.apply(r,n),r=null,n=null}}},Vehj:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Xxa5"),o=r.n(n),i=r("lk2h"),a=r("EbDR"),s=r.n(a),c=r("INzi"),u=r("NYxO");var l={name:"FavoritesIndex",middleware:"auth",components:{Product:i.a,NoResults:c.a,MugenScroll:s.a},metaInfo:function(){return{title:"Favorite"}},data:function(){return{loading:!1}},computed:Object(u.mapGetters)({favorites:"favorite/favorites",total:"favorite/total",check:"favorite/check",current_page:"favorite/current_page",next_page:"favorite/next_page"}),methods:{fetchMoreFavorites:function(){var t,e=(t=o.a.mark(function t(){var e=this;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.loading=!0,this.$store.dispatch("favorite/fetchMoreFavorites").then(function(){e.loading=!1});case 2:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(o,i){try{var a=e[o](i),s=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}()}},d=r("XyMi"),f=Object(d.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","fill-height":"","grid-list-sm":""}},[r("v-slide-y-transition",{attrs:{mode:"out-in"}},[t.total>0?r("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.favorites,function(t,e){return r("v-flex",{key:e,attrs:{xs12:"",sm6:"",md4:"",lg4:"",xl3:""}},[r("product",{attrs:{product:t,index:e}})],1)}),t._v(" "),t.check?r("mugen-scroll",{staticStyle:{margin:"0 auto","margin-top":"1rem","margin-bottom":"1rem"},attrs:{handler:t.fetchMoreFavorites,"should-handle":!t.loading}},[r("v-progress-circular",{attrs:{size:32,color:"indigo",indeterminate:""}})],1):t._e()],2):r("no-results",{attrs:{message:"Nu aveti produse favorite",to:{name:"Produse",route:"products"}}})],1)],1)},[],!1,null,null,null);e.default=f.exports},W08z:function(t,e,r){"use strict";var n=r("Xxa5"),o=r.n(n);function i(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(o,i){try{var a=e[o](i),s=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}("next")})}}var a={name:"Favorite",props:{favorited:{type:Boolean,required:!0,default:!1},product:{type:Object,required:!0,default:null},index:{type:Number,required:!1,default:0}},data:function(){return{}},created:function(){},methods:{favorite:function(){var t=i(o.a.mark(function t(e){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("favorite/setFavorite",e);case 2:return this.product.favorited=!0,t.next=5,this.syncFav(e);case 5:return this.$store.state.favorite.favorites.push(this.product),r={value:!0,message:this.$store.state.favorite.status,type:"indigo",avatar:!1,icon:"favorite",mode:"",timeout:2e3},t.next=9,this.$store.dispatch("navi/setSnackbar",r);case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),unfavorite:function(){var t=i(o.a.mark(function t(e){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("favorite/unsetFavorite",e);case 2:return this.product.favorited=!1,t.next=5,this.syncFav(e);case 5:return this.$store.state.favorite.favorites.splice(this.index,1),r={value:!0,message:this.$store.state.favorite.status,type:"indigo",avatar:!1,icon:"favorite_border",mode:"",timeout:2e3},t.next=9,this.$store.dispatch("navi/setSnackbar",r);case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),syncFav:function(t){if(this.$store.state.product.products.length){var e="";this.$store.state.product.products.filter(function(r,n){r.id==t&&(e=n)}),""!==e&&this.$store.state.product.products.splice(e,1,this.product)}if(this.$store.state.promotion.promotions.length){e="";this.$store.state.promotion.promotions.filter(function(r,n){r.id==t&&(e=n)}),""!==e&&this.$store.state.promotion.promotions.splice(e,1,this.product)}if(this.$store.state.popular.populars.length){e="";this.$store.state.popular.populars.filter(function(r,n){r.id==t&&(e=n)}),""!==e&&this.$store.state.popular.populars.splice(e,1,this.product)}if(this.$store.state.feature.featured.length){e="";this.$store.state.feature.featured.filter(function(r,n){r.id==t&&(e=n)}),""!==e&&this.$store.state.feature.featured.splice(e,1,this.product)}}}},s=r("XyMi"),c=Object(s.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.favorited?r("v-btn",{attrs:{icon:"",transition:"scale-transition"},on:{click:function(e){e.preventDefault(),t.unfavorite(t.product.id)}}},[r("v-icon",{attrs:{color:"error"}},[t._v("favorite")])],1):r("v-btn",{attrs:{icon:"",transition:"scale-transition"},on:{click:function(e){e.preventDefault(),t.favorite(t.product.id)}}},[r("v-icon",{attrs:{color:"error"}},[t._v("favorite_border")])],1)},[],!1,null,null,null);e.a=c.exports},lk2h:function(t,e,r){"use strict";var n=r("Xxa5"),o=r.n(n);var i={name:"Product",components:{Favorite:r("W08z").a},props:{product:{type:Object,default:null,required:!0},index:{type:Number,default:0,required:!0}},data:function(){return{redirecting:!1}},created:function(){},methods:{redirectTo:function(){var t,e=(t=o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.redirecting=!0,console.log("Redirecting"),window.open(e),this.redirecting=!1,console.log("Redirected");case 5:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(o,i){try{var a=e[o](i),s=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}("next")})});return function(t){return e.apply(this,arguments)}}()}},a=r("XyMi"),s=Object(a.a)(i,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("v-card",{staticClass:"mx-1 my-1 rounded-radius",attrs:{transition:"scale-transition","elevation-10":"",hover:""}},[r("router-link",{attrs:{to:{name:"products.single",params:{id:t.product.slug}}}},[r("v-img",{staticClass:"rounded-radius",attrs:{src:t.product.thumbnail,height:"300px",contain:""}},[r("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey darken-1"}})],1)],1)],1),t._v(" "),t.product.discounted?r("v-btn",{staticClass:"left",staticStyle:{"margin-top":"-290px"},attrs:{fab:"",dark:"",small:"",color:"error"}},[r("strong",[t._v(t._s(t.product.discounted)+"%")])]):t._e(),t._v(" "),r("v-card-text",{staticClass:"text-xs-center text-truncate",domProps:{textContent:t._s(t.product.title)}}),t._v(" "),r("v-card-text",{staticClass:"text-xs-center"},[r("p",{staticStyle:{"font-size":"medium"}},[r("span",[t._v(t._s(t.product.price)+" ron ")]),t.product.discounted?r("span",{staticStyle:{"text-decoration":"line-through",color:"red"}},[t._v(t._s(t.product.old_price)+" ron")]):t._e()])]),t._v(" "),r("v-divider"),t._v(" "),r("v-list-tile",[r("v-btn",{staticStyle:{"margin-left":"-0.75em"},attrs:{icon:""},on:{click:function(e){t.redirectTo(t.product.event_url)}}},[r("v-icon",{attrs:{color:"info"}},[t._v("store")])],1),t._v(" "),r("v-list-tile-content",{staticStyle:{"margin-left":"-0.75em"}},[r("div",{staticStyle:{"font-size":"medium"}},[r("strong",{on:{click:function(e){t.redirectTo(t.product.event_url)}}},[t._v(t._s(t.product.affiliate))])])]),t._v(" "),r("v-spacer"),t._v(" "),t.$store.state.auth.user?r("div",[r("favorite",{staticStyle:{"margin-right":"-0.75rem"},attrs:{favorited:t.product.favorited,product:t.product,index:t.index}})],1):r("v-btn",{attrs:{icon:""},on:{click:function(e){t.$store.state.navi.loginSheet=!0}}},[r("v-icon",{attrs:{color:"error"}},[t._v("favorite")])],1),t._v(" "),r("v-btn",{staticStyle:{"margin-right":"-0.75em"},attrs:{to:{name:"products.single",params:{id:t.product.slug}},icon:""}},[r("v-icon",{attrs:{color:"indigo"}},[t._v("remove_red_eye")])],1)],1)],1):t._e()},[],!1,null,null,null);e.a=s.exports}});
//# sourceMappingURL=4.c85310072247c631cd2e.js.map