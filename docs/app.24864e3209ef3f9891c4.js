webpackJsonp([1],{0:function(e,t,r){e.exports=r(202)},200:function(e,t,r){e.exports=function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Noxus=t.Nexus=void 0;var n=r(1);Object.defineProperty(t,"Nexus",{enumerable:!0,get:function(){return o(n)["default"]}}),Object.defineProperty(t,"Noxus",{enumerable:!0,get:function(){return o(n)["default"]}}),r(4)},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),a=o(n),u=r(2),l=o(u),c=r(3),i=o(c),f={children:n.PropTypes.node},s=function(e){var t=e.children;return a["default"].createElement("div",{className:(0,l["default"])("MarvelDevice",i["default"].Device)},a["default"].createElement("div",{className:(0,l["default"])("MarvelDevice_TopBar",i["default"].TopBar)}),a["default"].createElement("div",{className:i["default"].Sleep}),a["default"].createElement("div",{className:i["default"].Volume}),a["default"].createElement("div",{className:i["default"].Camera}),a["default"].createElement("div",{className:(0,l["default"])("MarvelDevice_Screen")},t),a["default"].createElement("div",{className:(0,l["default"])("MarvelDevice_BottomBar",i["default"].BottomBar)}))};s.propTypes=f,t["default"]=s},function(e,t,r){var o,n;!function(){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o))e.push(r.apply(null,o));else if("object"===n)for(var u in o)a.call(o,u)&&o[u]&&e.push(u)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=r:(o=[],n=function(){return r}.apply(t,o),!(void 0!==n&&(e.exports=n)))}()},function(e,t){e.exports={Device:"Nexus__Device",Sleep:"Nexus__Sleep",Volume:"Nexus__Volume",Camera:"Nexus__Camera"}},function(e,t){},function(e,t){e.exports=r(73)}])},201:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),c=r(73),i=o(c),f=r(386),s=o(f),p=r(200);r(385);var d=[{NAME:"Nexus",COMPONENT:p.Nexus}],m=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return i["default"].createElement("section",{className:s["default"].Wrapper},i["default"].createElement("h1",null,"React Mobile Devices"),i["default"].createElement("hr",null),d.map(function(e,t){return i["default"].createElement("section",{key:t},i["default"].createElement("div",{className:s["default"].ComponentWrapper},i["default"].createElement(e.COMPONENT,null,"Test!")),i["default"].createElement("h3",null,e.NAME))}))}}]),t}(c.Component);t["default"]=m},202:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var n=r(73),a=o(n),u=r(173),l=r(399),c=r(201),i=o(c);(0,u.render)(a["default"].createElement(l.AppContainer,null,a["default"].createElement(i["default"],null)),document.getElementById("app"))},385:function(e,t){},386:function(e,t){e.exports={Wrapper:"components__Wrapper",ComponentWrapper:"components__ComponentWrapper"}},399:function(e,t,r){e.exports=r(402)},400:function(e,t,r){"use strict";e.exports=r(401)},401:function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=r(73),c=l.Component,i=function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return this.props.component?l.createElement(this.props.component,this.props.props):l.Children.only(this.props.children)}}]),t}(c);e.exports=i},402:function(e,t,r){"use strict";var o=r(400);e.exports=function(e){throw this&&this.callback?new Error('React Hot Loader: The Webpack loader is now exported separately. If you use Babel, we recommend that you remove "react-hot-loader" from the "loaders" section of your Webpack configuration altogether, and instead add "react-hot-loader/babel" to the "plugins" section of your .babelrc file. If you prefer not to use Babel, replace "react-hot-loader" or "react-hot" with "react-hot-loader/webpack" in the "loaders" section of your Webpack configuration.'):e&&e.types&&e.types.IfStatement?new Error('React Hot Loader: The Babel plugin is exported separately. Replace "react-hot-loader" with "react-hot-loader/babel" in the "plugins" section of your .babelrc file. While we recommend the above, if you prefer not to use Babel, you may remove "react-hot-loader" from the "plugins" section of your .babelrc file altogether, and instead add "react-hot-loader/webpack" to the "loaders" section of your Webpack configuration.'):new Error('React Hot Loader does not have a default export. If you use the import statement, make sure to include the curly braces: import { AppContainer } from "react-hot-loader". If you use CommonJS, make sure to read the named export: require("react-hot-loader").AppContainer.')},e.exports.AppContainer=o}});