(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-info/user-info"],{"1c80":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,u,a,i){try{var o=e[a](i),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,u)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var i=e.apply(n,t);function o(e){a(i,r,u,o,c,"next",e)}function c(e){a(i,r,u,o,c,"throw",e)}o(void 0)}))}}var o={data:function(){return{ruleForm:{},tableName:"",yonghuxingbieOptions:[],yonghuxingbieIndex:0}},onLoad:function(){var n=this;return i(r.default.mark((function t(){var u,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return u=e.getStorageSync("nowTable"),t.next=3,n.$api.session(u);case 3:a=t.sent,n.ruleForm=a.data,n.tableName=u,"yonghu"==n.tableName&&(n.yonghuxingbieOptions="男,女".split(","),n.yonghuxingbieOptions.forEach((function(e,t){e==n.ruleForm.xingbie&&(n.yonghuxingbieIndex=t)}))),n.styleChange();case 8:case"end":return t.stop()}}),t)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},logout:function(){e.setStorageSync("token",""),this.$utils.jump("../login/login")},update:function(){var n=this;return i(r.default.mark((function t(){var u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.zhanghao||"yonghu"!=n.tableName){t.next=3;break}return n.$utils.msg("账号不能为空"),t.abrupt("return");case 3:if(n.ruleForm.mima||"yonghu"!=n.tableName){t.next=6;break}return n.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if("yonghu"!=n.tableName||!n.ruleForm.shouji||n.$validate.isMobile(n.ruleForm.shouji)){t.next=9;break}return n.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 9:if("yonghu"!=n.tableName||!n.ruleForm.youxiang||n.$validate.isEmail(n.ruleForm.youxiang)){t.next=12;break}return n.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 12:if("yonghu"!=n.tableName||!n.ruleForm.shenfenzheng||n.$validate.checkIdCard(n.ruleForm.shenfenzheng)){t.next=15;break}return n.$utils.msg("身份证应输入身份证格式"),t.abrupt("return");case 15:if("yonghu"!=n.tableName||!n.ruleForm.money||n.$validate.isNumber(n.ruleForm.money)){t.next=18;break}return n.$utils.msg("余额应输入数字"),t.abrupt("return");case 18:return u=e.getStorageSync("nowTable"),t.next=21,n.$api.update(u,n.ruleForm);case 21:n.$utils.msgBack("修改成功");case 23:case"end":return t.stop()}}),t)})))()},yonghuzhaopianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.zhaopian=e.$base.url+"upload/"+n.file,e.$forceUpdate()}))}}};n.default=o}).call(this,t("543d")["default"])},4444:function(e,n,t){"use strict";t.r(n);var r=t("1c80"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=u.a},"602c":function(e,n,t){},9174:function(e,n,t){"use strict";var r=t("602c"),u=t.n(r);u.a},b7b8:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var u=function(){var e=this,n=e.$createElement;e._self._c},a=[]},ebae:function(e,n,t){"use strict";t.r(n);var r=t("b7b8"),u=t("4444");for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t("9174");var i,o=t("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"54dfb517",null,!1,r["a"],i);n["default"]=c.exports},ed5c:function(e,n,t){"use strict";(function(e){t("cef7");r(t("66fd"));var n=r(t("ebae"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["ed5c","common/runtime","common/vendor"]]]);