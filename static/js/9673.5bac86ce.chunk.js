(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9673],{84934:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=84934,e.exports=n},86082:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(50189),o=t(53782),i=t(11026),s=t(41473),c=t(89171),d=t(75752),a=t(64357),u=t(69286),l=["version","dependencies","codePen","codeSandbox"];function p(e){var n=e.version,t=e.dependencies,i=e.codePen,s=e.codeSandbox,c=(0,o.Z)(e,l),d=(0,r.Z)({},c);return i&&(d.codePenOption={title:"uiw".concat(n," - demo"),includeModule:["uiw"],js:(d.code||"").replace("_mount_",'document.getElementById("container")'),html:'<div id="container" style="padding: 24px"></div>',css_external:"https://unpkg.com/uiw@".concat(n,"/dist/uiw.min.css"),js_external:"https://unpkg.com/react@16.x/umd/react.development.js;https://unpkg.com/react-dom@16.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@".concat(n,"/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.0.2/index.js")}),s&&(d.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n            "template": "node",\n            "container": {\n              "startScript": "start",\n              "node": "14"\n            }\n          }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:(d.code||"").replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"uiw-demo",description:"uiw v".concat(n," - demo"),dependencies:{react:"^17.0.2","react-dom":"^17.0.2",uiw:"latest"},devDependencies:{"@kkt/less-modules":"~7.1.1",kkt:"~7.1.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),(0,u.jsx)(a.Z,(0,r.Z)((0,r.Z)({},d),{},{dependencies:t,style:{marginBottom:0}}))}var h=t(53864);function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.path,t=/^http/.test(n||"")?n:"https://github.com/uiwjs/uiw/blob/master/".concat(n);return(0,u.jsxs)(s.Fragment,{children:["\u72af\u4e86\u9519\u8bef\u8fd8\u662f\u60f3\u5bf9\u6587\u4ef6\u505a\u51fa\u8d21\u732e\uff1f",t&&(0,u.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,u.jsx)("br",{}),(0,u.jsx)("a",{href:"https://github.com/uiwjs/uiw/issues",target:"_blank",rel:"noopener noreferrer",children:"\u53cd\u9988\u5efa\u8bae"}),(0,u.jsx)(h.iz,{type:"vertical"}),(0,u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw/issues/new",children:"\u63d0\u4ea4bug"}),(0,u.jsx)(h.iz,{type:"vertical"}),(0,u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"Github"}),(0,u.jsx)(h.iz,{type:"vertical"}),(0,u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,u.jsx)(h.iz,{type:"vertical"}),(0,u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt-ssr",children:"@kkt/ssr"}),(0,u.jsx)(h.iz,{type:"vertical"}),(0,u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://uiw.gitee.io",children:"\u56fd\u5185\u955c\u50cf"})]})}var m="index_docinfo__3Vx8S",k="index_markdown__hcQCp",x=["inline","node"],b=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.forEach((function(n){"text"===n.type?t+=n.value:n.children&&Array.isArray(n.children)&&(t+=e(n.children))})),t};function v(e){var n=e.renderPage,t=e.dependencies,a=e.path,l=(0,s.useState)(""),h=(0,i.Z)(l,2),v=h[0],j=h[1],g=d.i8||"2.0.0";return(0,s.useEffect)((function(){n&&n().then((function(e){j(e)})).catch((function(){}))}),[]),v?(0,u.jsxs)("div",{children:[(0,u.jsx)(c.Z,{source:v,className:k,components:{code:function(e){var n=e.inline,i=e.node,s=(0,o.Z)(e,x),c=s,d=c.noPreview,a=c.bordered,l=c.noScroll,h=c.bgWhite,f=c.noCode,m=c.codePen,k=c.codeSandbox;if(n)return(0,u.jsx)("code",(0,r.Z)({},s));var v={noPreview:d,bordered:a,noScroll:l,bgWhite:h,noCode:f,codePen:m,codeSandbox:k};return 0===Object.keys(v).filter((function(e){return void 0!==v[e]})).length?(0,u.jsx)("code",(0,r.Z)({},s)):(0,u.jsx)(p,{version:g,code:b(i.children),dependencies:t,noPreview:d,bordered:a,noScroll:l,bgWhite:h,noCode:f,codePen:m,codeSandbox:k})}}}),(0,u.jsx)("div",{className:m,children:(0,u.jsx)(f,{path:a})})]}):null}},20605:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(27791),o=t(57135),i=t.n(o),s=(t(41473),t(53864)),c=t(86082),d=t(69286);function a(){return(0,d.jsx)(c.Z,{path:"https://github.com/uiwjs/uiw/tree/master/packages/react-input/README.md",dependencies:{Divider:s.iz,Input:s.II,Form:s.l0,Notify:s.gU,Button:s.zx,Tag:s.Vp,Row:s.X2,Col:s.JX},renderPage:(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(5146).then(t.bind(t,5146));case 2:return n=e.sent,e.abrupt("return",n.default||n);case 4:case"end":return e.stop()}}),e)})))})}}}]);
//# sourceMappingURL=9673.5bac86ce.chunk.js.map