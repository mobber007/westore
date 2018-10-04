webpackJsonp([12],{OMNW:function(t,e,o){"use strict";var r=o("Xxa5"),n=o.n(r),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var a={name:"LoginWithGithub",computed:{githubAuth:function(){return window.config.githubAuth},url:function(){return"/api/oauth/github"}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var t,e=(t=n.a.mark(function t(){var e,o;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=c("",this.$t("login")),t.next=3,this.$store.dispatch("auth/fetchOauthUrl",{provider:"github"});case 3:o=t.sent,e.location.href=o;case 5:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,o){return function r(n,s){try{var i=e[n](s),a=i.value}catch(t){return void o(t)}if(!i.done)return Promise.resolve(a).then(function(t){r("next",t)},function(t){r("throw",t)});t(a)}("next")})});return function(){return e.apply(this,arguments)}}(),onMessage:function(t){t.origin===window.origin&&t.data.token&&(this.$store.dispatch("auth/saveToken",{token:t.data.token}),this.$router.push({name:"home"}))}}};function c(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===(void 0===t?"undefined":i(t))&&(o=t,t=""),o=s({url:t,title:e,width:600,height:720},o);var r=void 0!==window.screenLeft?window.screenLeft:window.screen.left,n=void 0!==window.screenTop?window.screenTop:window.screen.top,a=window.innerWidth||document.documentElement.clientWidth||window.screen.width,c=window.innerHeight||document.documentElement.clientHeight||window.screen.height;o.left=a/2-o.width/2+r,o.top=c/2-o.height/2+n;var l=Object.keys(o).reduce(function(t,e){return t.push(e+"="+o[e]),t},[]).join(","),u=window.open(t,e,l);return window.focus&&u.focus(),u}var l=o("XyMi"),u=Object(l.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return this.githubAuth?e("button",{staticClass:"btn btn-dark ml-auto",attrs:{type:"button"},on:{click:this.login}},[this._v("\n  "+this._s(this.$t("login_with"))+"\n  "),e("fa",{attrs:{icon:["fab","github"]}})],1):this._e()},[],!1,null,null,null);e.a=u.exports},"zAw/":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o("Xxa5"),n=o.n(r),s=o("2gGM"),i=o.n(s);var a={middleware:"guest",components:{LoginWithGithub:o("OMNW").a},metaInfo:function(){return{title:this.$t("register")}},data:function(){return{form:new i.a({name:"",email:"",password:"",password_confirmation:""})}},methods:{register:function(){var t,e=(t=n.a.mark(function t(){var e,o,r,s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.post("/api/register");case 2:return e=t.sent,o=e.data,t.next=6,this.form.post("/api/login");case 6:return r=t.sent,s=r.data.token,this.$store.dispatch("auth/saveToken",{token:s}),t.next=11,this.$store.dispatch("auth/updateUser",{user:o});case 11:this.$router.push({name:"home"});case 12:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,o){return function r(n,s){try{var i=e[n](s),a=i.value}catch(t){return void o(t)}if(!i.done)return Promise.resolve(a).then(function(t){r("next",t)},function(t){r("throw",t)});t(a)}("next")})});return function(){return e.apply(this,arguments)}}()}},c=o("XyMi"),l=Object(c.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-8 m-auto"},[o("card",{attrs:{title:t.$t("register")}},[o("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)},keydown:function(e){t.form.onKeydown(e)}}},[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("name")))]),t._v(" "),o("div",{staticClass:"col-md-7"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),o("div",{staticClass:"col-md-7"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("password")))]),t._v(" "),o("div",{staticClass:"col-md-7"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("confirm_password")))]),t._v(" "),o("div",{staticClass:"col-md-7"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password_confirmation")},attrs:{type:"password",name:"password_confirmation"},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"password_confirmation"}})],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[o("v-button",{attrs:{loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("register"))+"\n            ")]),t._v(" "),o("login-with-github")],1)])])])],1)])},[],!1,null,null,null);e.default=l.exports}});
//# sourceMappingURL=12.7b26c9eb0f50dce4a687.js.map