(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{105:function(t,e,n){"use strict";n.d(e,"a",function(){return v});var a=n(26),i=n(4),o=n(25),r=n(8),c=n(22),s=n(9),l=n(10),u=n(11),f=n(1),h=n.n(f),p=n(5),d=n.n(p),b=n(113),v=(n(106),function(t){function e(){var t,n;Object(r.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(i)))).renderSvgPaths=function(t){var e=b[t];return null==e?null:e.map(function(t,e){return h.a.createElement("path",{key:e,d:t,fillRule:"evenodd"})})},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props,e=t.prefixCls,n=t.className,r=t.color,c=t.type,s=t.spin,l=t.verticalAlign,u=t.tagName,f=Object(o.a)(t,["prefixCls","className","color","type","spin","verticalAlign","tagName"]),p=null;if("string"==typeof c)p=h.a.createElement("svg",{fill:r,viewBox:"0 0 20 20"},this.renderSvgPaths(c));else{if(!h.a.isValidElement(c))return null;p=h.a.cloneElement(c,{fill:r})}f.style=Object(i.a)({fill:"currentColor"},f.style);var b=Object(i.a)({},f,{className:d()(e,n,"".concat(e,"-").concat(l),Object(a.a)({},"".concat(e,"-spin"),s))});return h.a.createElement(u,b,p)}}]),e}(h.a.PureComponent));v.defaultProps={prefixCls:"w-icon",verticalAlign:"middle",tagName:"span",spin:!1}},106:function(t,e,n){},110:function(t,e,n){},116:function(t,e,n){"use strict";n.d(e,"a",function(){return v});var a=n(21),i=n(26),o=n(25),r=n(8),c=n(22),s=n(9),l=n(10),u=n(11),f=n(1),h=n.n(f),p=n(5),d=n.n(p),b=n(105),v=(n(110),function(t){function e(){return Object(r.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t,e=this.props,n=e.prefixCls,r=e.type,c=e.size,s=e.icon,l=e.active,u=e.disabled,f=e.block,p=e.basic,v=e.className,m=e.loading,y=e.children,g=e.htmlType,j=Object(o.a)(e,["prefixCls","type","size","icon","active","disabled","block","basic","className","loading","children","htmlType"]),O=d()(v,n,(t={},Object(i.a)(t,"".concat(n,"-size-").concat(c),c),Object(i.a)(t,"".concat(n,"-").concat(r),r),Object(i.a)(t,"".concat(n,"-basic"),p),Object(i.a)(t,"".concat(n,"-loading"),m),Object(i.a)(t,"disabled",u||m),Object(i.a)(t,"active",l),Object(i.a)(t,"block",f),t));return h.a.createElement("button",Object(a.a)({},j,{type:g,disabled:u||m,className:O}),s&&h.a.createElement(b.a,{type:s}),y&&h.a.Children.map(y,function(t){return t?h.a.isValidElement(t)?t:h.a.createElement("span",null,t):t}))}}]),e}(h.a.Component));v.defaultProps={prefixCls:"w-btn",disabled:!1,active:!1,loading:!1,block:!1,basic:!1,htmlType:"button",type:"light",size:"default"}},1177:function(t,e,n){"use strict";n.r(e);var a=n(42),i=n.n(a),o=n(107),r=n.n(o),c=n(12),s=n.n(c),l=n(13),u=n.n(l),f=n(14),h=n.n(f),p=n(15),d=n.n(p),b=n(16),v=n.n(b),m=n(21),y=n(25),g=n(4),j=n(8),O=n(22),x=n(9),w=n(10),E=n(39),C=n(11),k=n(1),S=n.n(k),P=n(5),N=n.n(P),A=n(36);function T(t,e){var n=t.getBoundingClientRect(),a=function(t){return t!==window?t.getBoundingClientRect():{top:0,left:0,bottom:0}}(e),i=Object(A.a)(e,!0),o=Object(A.a)(e),r=window.document.body,c=r.clientTop||0,s=r.clientLeft||0;return{top:n.top-a.top+i-c,left:n.left-a.left+o-s,width:n.width,height:n.height}}function B(){return"undefined"!=typeof window?window:null}var L=function(t){function e(t){var n;return Object(j.a)(this,e),(n=Object(x.a)(this,Object(w.a)(e).call(this,t))).state={placeholderStyle:void 0,affixStyle:void 0},n.box=void 0,n.target=void 0,n.events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],n.eventHandlers={},n.timeout=void 0,n.getInstance=function(t){t&&(n.box=t)},n.updatePosition=n.updatePosition.bind(Object(E.a)(n)),n}return Object(C.a)(e,t),Object(O.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.target||B;this.timeout=setTimeout(function(){t.target=e(),t.setTargetEventListeners()})}},{key:"componentWillUnmount",value:function(){this.clearEventListeners(),clearTimeout(this.timeout)}},{key:"updatePosition",value:function(){var t=this.props.offsetTop,e=this.props.offsetBottom;if(this.box&&this.box.offsetParent){var n={width:this.box.clientWidth,height:this.box.clientHeight},a={top:!1,bottom:!1};"number"!=typeof t&&"number"!=typeof e?(a.top=!0,t=0):(a.top="number"==typeof t,a.bottom="number"==typeof e);var i=T(this.box,this.target),o=this.box.getBoundingClientRect(),r=document.documentElement.clientHeight-o.y-i.height;a.top&&o.y<0?(this.setPlaceholderStyle(Object(g.a)({},n)),this.setAffixStyle({position:"fixed",top:t||0,left:i.left,width:i.width})):r<0?(this.setPlaceholderStyle(Object(g.a)({},n)),this.setAffixStyle({position:"fixed",bottom:e||0,left:i.left,width:i.width})):(this.setPlaceholderStyle(),this.setAffixStyle())}}},{key:"setAffixStyle",value:function(t){var e=this.props.onChange,n=!!this.state.affixStyle;this.setState({affixStyle:t},function(){e&&e(n)})}},{key:"setPlaceholderStyle",value:function(t){this.setState({placeholderStyle:t})}},{key:"setTargetEventListeners",value:function(){var t=this;this.clearEventListeners(),this.events.forEach(function(e){t.eventHandlers[e]=t.updatePosition,t.target&&t.target.addEventListener(e,t.updatePosition,!1)})}},{key:"clearEventListeners",value:function(){var t=this;this.events.forEach(function(e){var n=t.eventHandlers[e];t.target&&t.target.removeEventListener(e,n,!1)})}},{key:"render",value:function(){var t=this.props,e=t.prefixCls,n=t.className,a=t.children,i=(t.offsetTop,t.offsetBottom,t.target,t.onChange,Object(y.a)(t,["prefixCls","className","children","offsetTop","offsetBottom","target","onChange"])),o=N()(n,"".concat(e));return S.a.createElement("div",Object(m.a)({},i,{ref:this.getInstance,style:Object(g.a)({},this.state.placeholderStyle,this.props.style)}),S.a.createElement("div",{className:o,style:this.state.affixStyle},a))}}]),e}(S.a.Component);L.defaultProps={prefixCls:"w-affix",onChange:function(){}};var z=n(116),H=n(108);n.d(e,"default",function(){return R});var R=function(t){function e(){var t,n;s()(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=h()(this,(t=d()(e)).call.apply(t,[this].concat(i)))).path="packages/core/src/affix/README.md",n.dependencies={Affix:L,Button:z.a},n}var a;return v()(e,t),u()(e,[{key:"renderPage",value:(a=r()(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(374).then(n.t.bind(null,1149,7));case 2:return e=t.sent,t.abrupt("return",e.default||e);case 4:case"end":return t.stop()}},t)})),function(){return a.apply(this,arguments)})}]),e}(H.a)}}]);