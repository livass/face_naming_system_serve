(function(e){function t(t){for(var s,r,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],s=!0,i=1;i<o.length;i++){var l=o[i];0!==a[l]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=o[0]))}return e}var s={},a={app:0},n=[];function r(t){if(s[t])return s[t].exports;var o=s[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=s,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(o,s,function(t){return e[t]}.bind(null,s));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var s=o("85ec"),a=o.n(s);a.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},n=[],r={name:"App"},i=r,l=(o("034f"),o("2877")),c=Object(l["a"])(i,a,n,!1,null,null,null),d=c.exports,u=o("8c4f"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"login_box"}},[o("h2",[e._v("LOGIN")]),o("div",{attrs:{id:"form"}},[o("div",{attrs:{id:"input_box"}},[o("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1),o("div",{attrs:{id:"input_box"}},[o("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)]),o("br"),o("br"),o("div",[o("el-button",{attrs:{type:"primary",plain:""},on:{click:e.postdata}},[e._v("login")])],1),e._m(0)])},m=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"Sign"}},[o("a",{attrs:{href:"http://baidu.com"}},[e._v("修改密码")])])}],g={data:function(){return{user:"",password:""}},methods:{postdata:function(){var e=this,t=this.password;localStorage.setItem("usr",this.user),this.$axios.post(this.GLOBAL.config_ip+"/login/",{usr:this.user,pwd:this.password}).then((function(o){console.log(o.data.code),0==o.data.code?1==o.data.identify?(localStorage.setItem("token",o.data.token),location.href="000"==t?"#/resetpassword":"#/student_class"):(localStorage.setItem("token",o.data.token),location.href="#/teacher"):e.$message({showClose:!0,message:"用户名密码不匹配",type:"error"})})).catch((function(e){console.log(e)}))}}},h=g,_=(o("9ce0"),Object(l["a"])(h,p,m,!1,null,null,null)),f=_.exports,w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"login_box"}},[o("h2",[e._v("上传文件")]),o("div",{attrs:{id:"form"}},[o("div",{attrs:{id:"input_box"}},[o("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"http://47.96.235.211:3000/",limit:1,"file-list":e.fileList1,"http-request":e.uploadSectionFile,"auto-upload":!1}},[o("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")])],1),o("br"),o("el-button",{on:{click:function(t){e.show2=!e.show2}}},[e._v("附件")]),o("br"),o("br"),o("transition",{attrs:{name:"el-zoom-in-center"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.show2,expression:"show2"}]},[o("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{multiple:"",action:"http://47.96.235.211:3000/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,limit:10,"http-request":e.uploadSectionFile1,"auto-upload":!1}},[o("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")])],1)],1)])],1),o("br")]),o("br"),o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("上传到服务器")]),o("br"),o("br")],1)},b=[],k={headers:{"Content-Type":"multipart/form-data"}},y={data:function(){return{work_code:"",show2:!1,fileList1:[],fileList:[]}},methods:{uploadSectionFile:function(e){var t=this,o=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),s=e.file,a=s.size/1024;a=Math.round(a);var n=new FormData;n.append("file",s),n.append("work_code",localStorage.getItem("work_code")),n.append("token",localStorage.getItem("token")),this.$confirm("你的文件大小为"+a+"kb,是否上传","是否上传?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$axios.post(t.GLOBAL.config_ip+"/submit_work/",n,k).then((function(e){if(console.log(e.data),0==e.data.code)o.close(),localStorage.setItem("token",e.data.token),t.$message({showClose:!0,message:"恭喜你,上传成功",type:"success"});else{switch(e.data.code){case 1:t.$message({showClose:!0,message:"token错误",type:"error"});break;case 2:t.$message({showClose:!0,message:"权限错误",type:"error"});break;case 3:t.$message({showClose:!0,message:"数据库错误",type:"error"});break;case 4:t.$message({showClose:!0,message:"参数错误",type:"error"});break;case 11:t.$message({showClose:!0,message:"用户名和密码错误",type:"error"});break;case 21:t.$message({showClose:!0,message:"作业名为空",type:"error"});break;case 22:t.$message({showClose:!0,message:"作业码生成错误",type:"error"});break;case 23:t.$message({showClose:!0,message:"作业码解析错误",type:"error"});break;case 24:t.$message({showClose:!0,message:"上传时间截止",type:"error"});break;case 25:t.$message({showClose:!0,message:"作业所属班级为空",type:"error"});break;case 26:t.$message({showClose:!0,message:"当前用户不在此班级，无法操作此作业",type:"error"});break;case 41:t.$message({showClose:!0,message:"未上传文件",type:"error"});break;case 42:t.$message({showClose:!0,message:"上传文件不为word",type:"error"});break;case 5:t.$message({showClose:!0,message:"文件不存在",type:"error"});break;case 51:t.$message({showClose:!0,message:"不存在该预览作业",type:"error"});break;case 52:t.$message({showClose:!0,message:"无法转化当前word为pdf",type:"error"});break;default:t.$message({showClose:!0,message:"操作错误",type:"error"});break}o.close()}})).catch((function(e){alert(e+"请勿重复提交")}))})).catch((function(){t.$message({type:"info",message:"已取消上传"}),o.close()}))},uploadSectionFile1:function(e){var t=this,o=e.file,s=new FormData;s.append("file",o),s.append("token",localStorage.getItem("token")),s.append("work_code",localStorage.getItem("work_code")),this.$axios.post(this.GLOBAL.config_ip+"/submit_work/",s,k).then((function(e){console.log(e),1!=e.data.code?t.$message({type:"success",message:"success"}):t.$message({type:"error",message:"err"})})).catch((function(e){console.log(e)}))},submitUpload:function(){this.$refs.upload.submit()},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)}}},v=y,x=Object(l["a"])(v,w,b,!1,null,null,null),$=x.exports,S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"发作业"},[o("div",{attrs:{id:"link"}},[o("i",{staticClass:"el-icon-house"}),o("el-link",{attrs:{type:"primary",href:"#/login"}},[e._v("退出登录")])],1),o("el-tabs",{attrs:{type:"border-card"}},[o("el-tab-pane",[o("span",{staticClass:"el-icon-edit",attrs:{slot:"label"},slot:"label"},[e._v("发布作业")]),o("div",{attrs:{id:"input_box"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:2},placeholder:"作业名称"},model:{value:e.publish_work_name,callback:function(t){e.publish_work_name=t},expression:"publish_work_name"}})],1),o("div",{attrs:{id:"input_box"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:6,maxRows:12},placeholder:"作业要求"},model:{value:e.publish_work_desc,callback:function(t){e.publish_work_desc=t},expression:"publish_work_desc"}})],1),o("div",{attrs:{id:"input_box"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:1},placeholder:"自定义水印，不输入则使用默认水印#学号+姓名"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),o("br"),o("div",{attrs:{id:"input_box"}},[o("el-date-picker",{attrs:{type:"date",placeholder:"选择提交作业的截止日期"},model:{value:e.publish_work_deadline,callback:function(t){e.publish_work_deadline=t},expression:"publish_work_deadline"}}),o("el-select",{attrs:{clearable:"",placeholder:"请选择接收任务的班级"},model:{value:e.publish_work_class,callback:function(t){e.publish_work_class=t},expression:"publish_work_class"}},e._l(e.options,(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),o("br"),o("br"),o("div",[o("el-button",{attrs:{type:"primary",sizes:"medium",plain:"",icon:"el-icon-s-order"},on:{click:e.publish_assignments}},[e._v("点 击 即 可 发 布 作 业")])],1),o("br")]),o("el-tab-pane",[o("span",{staticClass:"el-icon-search",attrs:{slot:"label"},slot:"label"},[e._v("查看作业详情")]),o("div",{attrs:{id:"input_box"}},[o("el-select",{attrs:{clearable:"",placeholder:"请选择查看的班级"},on:{change:e.get_class_assignments},model:{value:e.detail_work_class,callback:function(t){e.detail_work_class=t},expression:"detail_work_class"}},e._l(e.options,(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",height:"400"}},[o("el-table-column",{attrs:{prop:"work_name",label:"作业名","min-width":"500"}}),o("el-table-column",{attrs:{fixed:"right",label:"编辑","min-width":"500"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",icon:"el-icon-download"},on:{click:function(o){return e.download_assignments(t.row.work_code)}}},[e._v(" 下载word作业包 ")]),o("el-button",{attrs:{type:"text",icon:"el-icon-download"},on:{click:function(o){return e.download_assignments_plus(t.row.work_code)}}},[e._v(" 下载所有作业包 ")]),o("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(o){return e.delete_confirm(t.$index,e.tableData,t.row.work_code)}}},[e._v(" 删除作业 ")]),o("el-button",{attrs:{type:"text",icon:"el-icon-folder-opened"},on:{click:function(o){return e.detail_assignments(t.row.work_code)}}},[e._v(" 作业详情 ")])]}}])})],1)],1)],1)],1)},C=[],L=(o("a630"),o("a434"),o("3ca3"),{data:function(){return{pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},publish_work_deadline:"",options:[],publish_work_class:"",publish_work_code:"",publish_work_name:"",publish_work_desc:"",download_work_code:"",download_url:"",delete_work_code:"",detail_work_class:"",tableData:[],text:""}},mounted:function(){this.class_list()},created:function(){var e=this;this.$axios.post(this.GLOBAL.config_ip+"/watermark_text_get",{token:localStorage.getItem("token")}).then((function(t){console.log(t.data.code),localStorage.setItem("token",t.data.token),e.text=t.data.text}))},methods:{publish_assignments:function(){var e=this;this.publish_work_name?this.publish_work_desc?this.publish_work_deadline?this.publish_work_class?(this.$axios.post(this.GLOBAL.config_ip+"/publish_assignments/",{token:localStorage.getItem("token"),work_name:this.publish_work_name,work_desc:this.publish_work_desc,work_deadline:this.publish_work_deadline.getTime(),work_class:this.publish_work_class}).then((function(t){localStorage.setItem("token",t.data.token),0==t.data.code?e.$notify({title:"成功",message:"发布成功",type:"success"}):26==t.data.code&&e.$notify({title:"错误",message:"当前用户不在此班级中，无法发布作业",type:"error"})})).catch((function(t){e.$notify({title:"错误",message:t,type:"error"})})),this.$axios.post(this.GLOBAL.config_ip+"/watermark_text/",{token:localStorage.getItem("token"),text:this.text}).then((function(e){}))):this.$message({message:"请选择班级",type:"warning"}):this.$message({message:"请选择截止日期",type:"warning"}):this.$message({message:"请输入作业要求",type:"warning"}):this.$message({message:"请输入作业名称",type:"warning"})},delete_assignments:function(e,t,o){var s=this;this.$axios.post(this.GLOBAL.config_ip+"/delete_assignments/",{token:localStorage.getItem("token"),work_code:o}).then((function(o){0==o.data.code?(t.splice(e,1),console.log(s),s.$notify({title:"成功",message:"已成功删除",type:"success"})):s.$notify({title:"错误",message:JSON.stringify(o.data.msg),type:"error"})})).catch((function(e){s.$notify({title:"错误",message:e,type:"error"})}))},get_class_assignments:function(){var e=this;this.$axios.post(this.GLOBAL.config_ip+"/get_assignments_list_by_class",{token:localStorage.getItem("token"),class:this.detail_work_class}).then((function(t){e.tableData=Array.from(t.data.work_list)}))},class_list:function(){var e=this;this.$axios.post(this.GLOBAL.config_ip+"/get_class_list",{token:localStorage.getItem("token")}).then((function(t){e.options=Array.from(t.data.class_list)}))},download_assignments:function(e){var t=this;this.$axios.post(this.GLOBAL.config_ip+"/download_assignments",{token:localStorage.getItem("token"),work_code:e}).then((function(e){localStorage.setItem("token",e.data.token),0==e.data.code&&window.open(t.GLOBAL.config_ip+e.data.download_url)})).catch((function(e){t.$notify({title:"错误",message:e,type:"error"})}))},download_assignments_plus:function(e){var t=this;this.$axios.post(this.GLOBAL.config_ip+"/download_assignments_plus",{token:localStorage.getItem("token"),work_code:e}).then((function(e){localStorage.setItem("token",e.data.token),0==e.data.code&&window.open(t.GLOBAL.config_ip+e.data.download_url)})).catch((function(e){t.$notify({title:"错误",message:e,type:"error"})}))},detail_assignments:function(e){localStorage.setItem("work_code",e),location.href="#/teacher_view"},delete_confirm:function(e,t,o){var s=this;this.$confirm("此操作将永久删除该作业, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){s.delete_assignments(e,t,o)})).catch((function(){console.log(s),s.$notify({title:"消息",message:"已取消删除",type:"info"})}))}}}),I=L,O=Object(l["a"])(I,S,C,!1,null,null,null),A=O.exports,B=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-tabs",{staticStyle:{height:"200px"},attrs:{"tab-position":e.tabPosition}},[o("el-tab-pane",{attrs:{label:"作业详情"}},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[o("el-table-column",{attrs:{prop:"work_no",label:"班级",width:"500%"}}),o("el-table-column",{attrs:{prop:"work_name",label:"进入班级",width:"500%"}})],1)],1),o("el-tab-pane",{attrs:{label:"作业提交"}},[e._v("作业上传 ")]),o("el-tab-pane",{attrs:{label:"查阅作业"}},[e._v("查阅作业")]),o("el-tab-pane",{attrs:{label:"分数查看"}},[o("h2",[e._v("请输入作业码")])])],1)},D=[],G={data:function(){return{tabPosition:"left",tableData:[]}},created:function(){var e=this;this.$axios.post(this.GLOBAL.config_ip+"/get_class_list/",{token:localStorage.getItem("token")}).then((function(t){localStorage.setItem("token",t.data.token),e.tableData=Array.from(t.data.calss_list)}))},methods:{}},z=G,F=Object(l["a"])(z,B,D,!1,null,null,null),T=F.exports,j=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[o("el-table-column",{attrs:{fixed:"",prop:"class",label:"班级",width:"800"}}),o("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("i",{staticClass:"el-icon-caret-right"}),o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.intoclass(t.$index,t.row)}}},[e._v("进入班级")])]}}])},[e._v("> ")])],1)},E=[],P={data:function(){return{tableData:[]}},created:function(){var e=this;this.$axios.post(this.GLOBAL.config_ip+"/get_class_list/",{token:localStorage.getItem("token")}).then((function(t){localStorage.setItem("token",t.data.token);for(var o=0;o<t.data.class_list.length;o++)t.data.class_list[o]={class:t.data.class_list[o]};localStorage.setItem("length",t.data.class_list.length),e.tableData=Array.from(t.data.class_list)}))},methods:{intoclass:function(e,t){localStorage.setItem("class",t.class),location.href="#/student_work"}}},R=P,U=Object(l["a"])(R,j,E,!1,null,null,null),M=U.exports,V=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{attrs:{id:"link"}},[o("i",{staticClass:"el-icon-house"}),o("el-link",{attrs:{type:"primary",href:"#/login"}},[e._v("退出登录")])],1),o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[o("el-table-column",{attrs:{fixed:"",prop:"work_name",label:"作业名",width:"800"}}),o("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.checkdetail(t.$index)}}},[e._v("查看详情")]),o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.postfile(t.$index)}}},[e._v("提交作业")]),o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.previewwork(t.$index)}}},[e._v("预览作业")]),o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.lookscore(t.$index)}}},[e._v("查看分数")])]}}])})],1)],1)},q=[],N=(o("d81d"),o("ac1f"),o("1276"),[]),J=[],H={data:function(){return{tableData:[]}},created:function(){var e=this;this.$axios.post(this.GLOBAL.config_ip+"/get_assignments_list_by_class/",{token:localStorage.getItem("token"),class:localStorage.getItem("class")}).then((function(t){localStorage.setItem("token",t.data.token),N.length=t.data.work_list.length,J.length=t.data.work_list.length;for(var o=0;o<t.data.work_list.length;o++)N[o]={work_name:t.data.work_list[o].work_name},J[o]=t.data.work_list[o].work_code;e.tableData=Array.from(N)}))},methods:{lookscore:function(e){var t=this;this.$axios.post(this.GLOBAL.config_ip+"/get_score/",{token:localStorage.getItem("token"),work_code:J[e],usr:localStorage.getItem("usr")}).then((function(e){console.log(e.data.score_detail.score),e.data.score_detail.score<0?(e.data.score_detail.score<=-2&&t.$message({showClose:!0,message:"未提交作业",type:"error"}),-1==e.data.score_detail.score&&t.$message({showClose:!0,message:"老师未打分",type:"error"})):(localStorage.setItem("token",e.data.token),t.$alert("你的分数是"+e.data.score_detail.score+"分","成绩详情",{dangerouslyUseHTMLString:!0}))})).catch((function(e){alert(e)}))},postfile:function(e){localStorage.setItem("work_code",J[e]),console.log(J[e]),location.href="#/student_work_submit01"},previewwork:function(e){var t=this;this.$axios.post(this.GLOBAL.config_ip+"/preview_assignment/",{token:localStorage.getItem("token"),work_code:J[e]}).then((function(e){0==e.data.code?window.open(t.GLOBAL.config_ip+e.data.url):t.$message({showClose:!0,message:"你还未提交作业",type:"error"})})).catch((function(e){t.$message({showClose:!0,message:"你还未提交作业",type:"error"})}))},checkdetail:function(e){var t=this;console.log(J[e]),this.$axios.post(this.GLOBAL.config_ip+"/get_assignments_detail/",{token:localStorage.token,work_code:J[e]}).then((function(e){localStorage.setItem("token",e.data.token);var o=new Date(e.data.work_deadline).toLocaleDateString()+" ",s=t.$createElement,a=e.data.work_desc.split("\n").map((function(e){return s("p",null,e)}));a.push(s("p",null,"截止日期:"+o)),a.unshift(s("p",null,e.data.work_belong+"老师的作业要求:")),t.$alert(s("div",null,a),"查看详情",{dangerouslyUseHTMLString:!0})})).catch((function(e){alert(e)}))}}},K=H,Q=Object(l["a"])(K,V,q,!1,null,null,null),W=Q.exports,X=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"login_box"}},[o("h2",[e._v("修改密码")]),o("div",{attrs:{id:"form"}},[o("div",{attrs:{id:"input_box"}},[o("el-input",{attrs:{placeholder:"请输入新密码","show-password":""},model:{value:e.newpassword1,callback:function(t){e.newpassword1=t},expression:"newpassword1"}})],1),o("div",{attrs:{id:"input_box"}},[o("el-input",{attrs:{placeholder:"请重新输入新密码","show-password":""},model:{value:e.newpassword2,callback:function(t){e.newpassword2=t},expression:"newpassword2"}})],1)]),o("br"),o("br"),o("div",[o("el-button",{attrs:{type:"primary",plain:""},on:{click:e.reset}},[e._v("确认修改")])],1)])},Y=[],Z={data:function(){return{newpassword1:"",newpassword2:""}},methods:{reset:function(){var e=this,t=this.newpassword1,o=this.newpassword2;t!=o?this.$message({showClose:!0,message:"两次密码不一致",type:"error"}):"000"==t?this.$message({showClose:!0,message:"密码不能为000",type:"error"}):this.$axios.post(this.GLOBAL.config_ip+"/reset_password/",{token:localStorage.getItem("token"),user:localStorage.getItem("usr"),newPwd:this.newpassword1}).then((function(t){localStorage.setItem("token",t.data.token),0==t.data.code&&(e.$message({showClose:!0,message:"修改成功",type:"success"}),location.href="#/student_class")})).catch((function(e){alert(e)}))}}},ee=Z,te=Object(l["a"])(ee,X,Y,!1,null,null,null),oe=te.exports,se=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-container",[o("el-header",[o("el-page-header",{attrs:{content:"学生作业提交情况"},on:{back:e.goBack}})],1),o("el-main",[o("div",{attrs:{id:"input_box"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:1},placeholder:"发布者",disabled:!0,size:"mini"},model:{value:e.detail_publish_user_name,callback:function(t){e.detail_publish_user_name=t},expression:"detail_publish_user_name"}})],1),o("div",{attrs:{id:"input_box"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:1},placeholder:"作业名称",disabled:!0,size:"mini"},model:{value:e.detail_publish_work_name,callback:function(t){e.detail_publish_work_name=t},expression:"detail_publish_work_name"}})],1),o("div",{attrs:{id:"input_box"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:3},placeholder:"作业要求",disabled:!0,size:"mini"},model:{value:e.detail_publish_work_desc,callback:function(t){e.detail_publish_work_desc=t},expression:"detail_publish_work_desc"}})],1),o("div",{attrs:{id:"input_box"}},[o("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"作业截止日期",disabled:!0,size:"mini"},model:{value:e.detail_publish_work_deadline,callback:function(t){e.detail_publish_work_deadline=t},expression:"detail_publish_work_deadline"}})],1)]),o("el-main",[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData_student,border:"",height:"300",size:"mini"}},[o("el-table-column",{attrs:{prop:"usr",label:"学号",sortable:"","min-width":"160"}}),o("el-table-column",{attrs:{prop:"score",formatter:e.formatterS,label:"分数",sortable:"","min-width":"160"}}),o("el-table-column",{attrs:{prop:"submitStat",formatter:e.formatterC,label:"提交状态",sortable:"","min-width":"160"}}),o("el-table-column",{attrs:{label:"编辑",fixed:"right","min-width":"320"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",icon:"el-icon-search",size:"mini"},on:{click:function(o){return e.Preview(t.row.usr)}}},[e._v(" 预览word作业 ")]),o("el-button",{attrs:{type:"text",icon:"el-icon-download",size:"mini"},on:{click:function(o){return e.Previewplus(t.row.usr)}}},[e._v(" 下载所有附件 ")]),o("el-button",{attrs:{type:"text",icon:"el-icon-edit",size:"mini"},on:{click:function(o){return e.showEditDialog(t.row.usr,t.row.submitStat)}}},[e._v(" 修改成绩 ")])]}}])})],1),o("el-dialog",{attrs:{title:"修改成绩",visible:e.editDialogVisible,width:"25%",size:"mini"},on:{"update:visible":function(t){e.editDialogVisible=t}}},[o("el-form",{attrs:{model:e.editForm,"label-width":"50px"}},[o("el-form-item",{attrs:{label:"学号",size:"mini"}},[o("el-input",{attrs:{disabled:""},model:{value:e.editForm.usr,callback:function(t){e.$set(e.editForm,"usr",t)},expression:"editForm.usr"}})],1),o("el-form-item",{attrs:{label:"成绩",size:"mini"}},[o("el-input-number",{staticStyle:{width:"100%"},model:{value:e.editForm.score,callback:function(t){e.$set(e.editForm,"score",t)},expression:"editForm.score"}})],1),o("font",{staticStyle:{"font-size":"10px","margin-left":"-30px"},attrs:{color:"red"}},[e._v(e._s(e.tips))])],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"mini"},on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.confirm(e.editForm)}}},[e._v("确 定")])],1)],1)],1)],1)},ae=[],ne={data:function(){return{loading:!1,tableData_student:[],detail_publish_user_name:"",detail_publish_work_deadline:"",detail_publish_work_desc:"",detail_publish_work_name:"",editDialogVisible:!1,editForm:{},tips:"",tips1:"",test_submitStat:""}},created:function(){var e=this;this.loading=!0,this.$axios.post(this.GLOBAL.config_ip+"/get_assignments_detail",{token:localStorage.getItem("token"),work_code:localStorage.getItem("work_code")}).then((function(t){localStorage.setItem("token",t.data.token),e.tableData_student=Array.from(t.data.stu_list),e.loading=!1})),this.$axios.post(this.GLOBAL.config_ip+"/get_assignments_detail",{token:localStorage.getItem("token"),work_code:localStorage.getItem("work_code")}).then((function(t){localStorage.setItem("token",t.data.token),e.detail_publish_user_name="发布者:"+t.data.work_belong,e.detail_publish_work_deadline=t.data.work_deadline,e.detail_publish_work_desc="作业要求:"+t.data.work_desc,e.detail_publish_work_name="作业名:"+t.data.work_name}))},methods:{goBack:function(){location.href="#/teacher"},formatterC:function(e,t,o,s){return 1==e.submitStat?"已提交作业":0==e.submitStat?"未提交作业":"未知"},formatterS:function(e,t,o,s){return e.score<-1?"未提交作业":-1==e.score?"暂无分数":e.score},Preview:function(e){var t=this;this.$axios.post(this.GLOBAL.config_ip+"/preview_assignment",{token:localStorage.getItem("token"),work_code:localStorage.getItem("work_code"),usr:e}).then((function(e){0==e.data.code?(window.open(t.GLOBAL.config_ip+e.data.url),localStorage.setItem("token",e.data.token)):t.$notify({title:"错误",message:"作业未提交",type:"error"})}))},Previewplus:function(e){var t=this;this.$axios.post(this.GLOBAL.config_ip+"/download_assignments_plus",{token:localStorage.getItem("token"),work_code:localStorage.getItem("work_code"),usr:e}).then((function(e){0==e.data.code&&(window.open(t.GLOBAL.config_ip+e.data.download_url),localStorage.setItem("token",e.data.token))})).catch((function(){console.log(t),t.$notify({title:"消息",message:"作业未提交",type:"info"})}))},showEditDialog:function(e,t){this.tips=this.tips1,this.editForm.usr=e,this.editDialogVisible=!0,this.test_submitStat=t},editUserInfo:function(e){var t=this;1==/^((100)|(\d{1,2}))(\.\d{0,2})?$/.test(e.score)?this.$axios.post(this.GLOBAL.config_ip+"/grade_assignments",{token:localStorage.getItem("token"),work_code:localStorage.getItem("work_code"),updateTarget:[e]}).then((function(e){0==e.data.code&&(localStorage.setItem("token",e.data.token),t.$notify({title:"成功",message:"打分成功",type:"success"})),t.editForm.score="",t.tips="",t.$axios.post(t.GLOBAL.config_ip+"/get_assignments_detail",{token:localStorage.getItem("token"),work_code:localStorage.getItem("work_code")}).then((function(e){t.tableData_student=Array.from(e.data.stu_list),t.editDialogVisible=!1}))})):(this.editForm.score="",this.tips="请输入 0~100 的有效分数,最多精确小数点后两位"),this.tips1=""},confirm:function(e){var t=this;0==this.test_submitStat?this.$confirm("此学生上未提交作业, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.editUserInfo(e)})).catch((function(){})):this.editUserInfo(e)}}},re=ne,ie=Object(l["a"])(re,se,ae,!1,null,null,null),le=ie.exports,ce=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"login_box"}},[o("h2",[e._v("上传文件")]),o("div",{attrs:{id:"form"}},[o("div",{attrs:{id:"input_box"}},[o("br"),o("input",{attrs:{type:"file",id:"_f",multiple:"multiple"}}),o("br"),o("br"),o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("上传到服务器")]),o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.quicksubmitUpload}},[e._v("快速上传")])],1),o("br")]),o("br")])},de=[],ue=(o("4160"),o("159b"),{headers:{"Content-Type":"multipart/form-data"}}),pe={data:function(){return{}},methods:{submitUpload:function(){var e=this,t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),o=new FormData;console.log(Array.from(_f.files)),Array.from(_f.files).forEach((function(e){o.append("file",e)})),o.append("work_code",localStorage.getItem("work_code")),o.append("token",localStorage.getItem("token"));for(var s=0,a=_f.files.length,n=0;n<_f.files.length;n++)s+=_f.files[n].size/1024;s=Math.round(s),this.$confirm("你上传了"+a+"个文件,你的文件总大小为"+s+"kb,是否上传","是否上传?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$axios.post(e.GLOBAL.config_ip+"/submit_work/",o,ue).then((function(o){if(console.log(o.data),0==o.data.code)t.close(),localStorage.setItem("token",o.data.token),e.$message({showClose:!0,message:"恭喜你,上传成功",type:"success"}),location.href="#/student_work";else{switch(o.data.code){case 1:e.$message({showClose:!0,message:"token错误",type:"error"});break;case 2:e.$message({showClose:!0,message:"权限错误",type:"error"});break;case 3:e.$message({showClose:!0,message:"数据库错误",type:"error"});break;case 4:e.$message({showClose:!0,message:"参数错误",type:"error"});break;case 11:e.$message({showClose:!0,message:"用户名和密码错误",type:"error"});break;case 21:e.$message({showClose:!0,message:"作业名为空",type:"error"});break;case 22:e.$message({showClose:!0,message:"作业码生成错误",type:"error"});break;case 23:e.$message({showClose:!0,message:"作业码解析错误",type:"error"});break;case 24:e.$message({showClose:!0,message:"上传时间截止",type:"error"});break;case 25:e.$message({showClose:!0,message:"作业所属班级为空",type:"error"});break;case 26:e.$message({showClose:!0,message:"当前用户不在此班级，无法操作此作业",type:"error"});break;case 41:e.$message({showClose:!0,message:"未上传文件",type:"error"});break;case 42:e.$message({showClose:!0,message:"上传文件不为word",type:"error"});break;case 5:e.$message({showClose:!0,message:"文件不存在",type:"error"});break;case 51:e.$message({showClose:!0,message:"不存在该预览作业",type:"error"});break;case 52:e.$message({showClose:!0,message:"无法转化当前word为pdf",type:"error"});break;default:e.$message({showClose:!0,message:"操作错误",type:"error"});break}t.close()}})).catch((function(e){alert(e+"请勿重复提交"),t.close()}))})).catch((function(){e.$message({type:"info",message:"已取消上传"}),t.close()}))},quicksubmitUpload:function(){var e=this,t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),o=new FormData;console.log(Array.from(_f.files)),Array.from(_f.files).forEach((function(e){o.append("file",e)})),o.append("work_code",localStorage.getItem("work_code")),o.append("token",localStorage.getItem("token")),o.append("quick_submit",!0);for(var s=0,a=_f.files.length,n=0;n<_f.files.length;n++)s+=_f.files[n].size/1024;s=Math.round(s),this.$confirm("你上传了"+a+"个文件,你的文件总大小为"+s+"kb,是否上传","是否上传?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$axios.post(e.GLOBAL.config_ip+"/submit_work/",o,ue).then((function(o){if(console.log(o.data),0==o.data.code)t.close(),localStorage.setItem("token",o.data.token),e.$message({showClose:!0,message:"恭喜你,上传成功",type:"success"}),location.href="#/student_work";else{switch(o.data.code){case 1:e.$message({showClose:!0,message:"token错误",type:"error"});break;case 2:e.$message({showClose:!0,message:"权限错误",type:"error"});break;case 3:e.$message({showClose:!0,message:"数据库错误",type:"error"});break;case 4:e.$message({showClose:!0,message:"参数错误",type:"error"});break;case 11:e.$message({showClose:!0,message:"用户名和密码错误",type:"error"});break;case 21:e.$message({showClose:!0,message:"作业名为空",type:"error"});break;case 22:e.$message({showClose:!0,message:"作业码生成错误",type:"error"});break;case 23:e.$message({showClose:!0,message:"作业码解析错误",type:"error"});break;case 24:e.$message({showClose:!0,message:"上传时间截止",type:"error"});break;case 25:e.$message({showClose:!0,message:"作业所属班级为空",type:"error"});break;case 26:e.$message({showClose:!0,message:"当前用户不在此班级，无法操作此作业",type:"error"});break;case 41:e.$message({showClose:!0,message:"未上传文件",type:"error"});break;case 42:e.$message({showClose:!0,message:"上传文件不为word",type:"error"});break;case 5:e.$message({showClose:!0,message:"文件不存在",type:"error"});break;case 51:e.$message({showClose:!0,message:"不存在该预览作业",type:"error"});break;case 52:e.$message({showClose:!0,message:"无法转化当前word为pdf",type:"error"});break;default:e.$message({showClose:!0,message:"操作错误",type:"error"});break}t.close()}})).catch((function(e){alert(e+"请勿重复提交"),t.close()}))})).catch((function(){e.$message({type:"info",message:"已取消上传"}),t.close()}))}}},me=pe,ge=Object(l["a"])(me,ce,de,!1,null,null,null),he=ge.exports;s["default"].prototype.$router=u["a"],s["default"].use(u["a"]);var _e=new u["a"]({routes:[{path:"/",name:"login",component:f},{path:"/student_work_submit",name:"student_work_submit",component:$},{path:"/teacher",name:"teacher",component:A},{path:"/login",name:"login",component:f},{path:"/student01",name:"student01",component:T},{path:"/student_class",name:"student_class",component:M},{path:"/student_work",name:"student_work",component:W},{path:"/resetpassword",name:"resetpassword",component:oe},{path:"/teacher_view",name:"teacher_view",component:le},{path:"/student_work_submit01",name:"student_work_submit01",component:he}]}),fe=o("5c96"),we=o.n(fe),be=(o("0fae"),o("bc3a")),ke=o.n(be),ye=o("a7fe"),ve=o.n(ye),xe="http://localhost:8080",$e={config_ip:xe};s["default"].prototype.$axios=ke.a,s["default"].prototype.GLOBAL=$e,s["default"].use(ve.a,ke.a),s["default"].config.productionTip=!1,s["default"].use(we.a),new s["default"]({el:"#app",router:_e,components:{App:d},template:"<App/>",render:function(e){return e(d)}})},"85ec":function(e,t,o){},"9ce0":function(e,t,o){"use strict";var s=o("d64c"),a=o.n(s);a.a},d64c:function(e,t,o){}});
//# sourceMappingURL=app.7a588257.js.map